import { defineComponent } from 'vue'
import VeCheckbox from '@easytable/ve-checkbox'
import VeRadio from '@easytable/ve-radio'
import clickoutside from '@easytable/common/directives/clickoutside'
import { isBoolean, isFunction } from '@easytable/common/utils'
import { getRandomId } from '@easytable/common/utils/random'
import {
  getViewportOffset,
  getViewportOffsetWithinContainer,
} from '@easytable/common/utils/dom'
import { clsName } from './util/index'
import { COMPS_NAME, EMIT_EVENTS } from './util/constant'
import type { VeDropdownItem } from './type'

export default defineComponent({
  name: COMPS_NAME.VE_DROPDOWN,
  directives: {
    'click-outside': clickoutside,
  },
  props: {
    // 如果是select 组件将特殊处理
    isSelect: {
      type: Boolean,
      default: false,
    },
    showOperation: {
      type: Boolean,
      default: false,
    },

    width: {
      type: Number,
      default: 90,
    },

    // select的最大宽度(超出隐藏)
    maxWidth: {
      type: Number,
      default: 0,
    },
    // max height
    maxHeight: {
      type: Number,
      default: 1000,
    },

    // 如果为true 会包含 checkbox
    isMultiple: {
      type: Boolean,
      default: false,
    },

    // 用户传入v-model 的值 [{value/label/selected}]
    modelValue: {
      type: Array as PropType<VeDropdownItem[]>,
      default: null,
    },

    // 文本居中方式 left|center|right
    textAlign: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'left',
    },

    // 是否支持输入input
    isInput: {
      type: Boolean,
      default: false,
    },
    // confirm filter text
    confirmFilterText: {
      type: String,
      default: '',
    },
    // confirm filter text
    resetFilterText: {
      type: String,
      default: '',
    },
    // hide by single selection item click
    hideByItemClick: {
      type: Boolean,
      default: false,
    },
    // is show radio when single selection
    showRadio: {
      type: Boolean,
      default: false,
    },
    // 当 isControlled=true ,visible 生效
    visible: {
      type: Boolean,
      default: false,
    },
    // is controlled
    isControlled: {
      type: Boolean,
      default: false,
    },
    // is custom content
    isCustomContent: {
      type: Boolean,
      default: false,
    },
    // instance between dropdown items and trigger element
    defaultInstance: {
      type: Number,
      default: 5,
    },
    // popper append to element
    popperAppendTo: {
      type: [String, HTMLElement],
      default() {
        return document.body
      },
    },
    /*
        before visible change
        如果返回false 则阻止显示或者关闭
        */
    beforeVisibleChange: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      internalVisible: false,
      internalOptions: [] as VeDropdownItem[],
      inputValue: '',
      // 是否显示触发器被点击了（被点击将忽略 clickOutside 事件）
      isDropdownShowTriggerClicked: false,
      // root id
      rootId: '',
      // dropdown items panel id
      dropdownItemsPanelId: '',
      // 弹出被添加到的目标元素
      popperAppendToEl: null as HTMLElement | null,
      // 弹出被添加到的目标元素标签名称
      appendToElTagName: null as string | null,
    }
  },
  computed: {
    // is dropdown visible
    isDropdownVisible() {
      return this.isControlled ? this.visible : this.internalVisible
    },

    // 获取最大宽度(不设置则是无穷大)
    getMaxWidth() {
      let result = Number.POSITIVE_INFINITY
      const maxWidth = this.maxWidth
      const width = this.width

      if (maxWidth && maxWidth > 0 && maxWidth > width)
        result = maxWidth

      return result
    },
    // selected labels
    selectedLabels() {
      return this.internalOptions
        .filter(x => x.selected)
        .map((x) => {
          if (x.selected)
            return x.label
          return undefined
        })
    },
    // operation buttons class
    operationFilterClass() {
      let result = null
      result = {
        [clsName('filter-disable')]: this.selectedLabels.length === 0,
      }

      return result
    },
    // dropdown items class
    dropdownItemsClass() {
      return {
        [clsName('dd')]: true,
        [clsName('dd-show')]: this.isDropdownVisible,
      }
    },
  },
  watch: {
    modelValue() {
      this.init()
    },
    visible: {
      async handler(visible) {
        const { isControlled, showDropDown, hideDropDown } = this
        // deal after mounted hook
        await nextTick()
        nextTick(() => {
          if (isControlled) {
            if (visible)
              showDropDown()

            else
              hideDropDown()
          }
        })
      },
      immediate: true,
    },
  },

  created() {
    this.init()
  },
  mounted() {
    this.addRootElementToElement()

    this.$nextTick(() => {
      const targetEl
                = this.appendToElTagName === 'BODY'
                  ? document
                  : this.popperAppendToEl
      targetEl?.addEventListener(
        'scroll',
        this.changDropdownPanelPosition,
      )
    })
    window.addEventListener('resize', this.changDropdownPanelPosition)
  },

  unmounted() {
    this.removeOrEmptyRootPanel()

    this.$nextTick(() => {
      const targetEl
                = this.appendToElTagName === 'BODY'
                  ? document
                  : this.popperAppendToEl
      targetEl?.removeEventListener(
        'scroll',
        this.changDropdownPanelPosition,
      )
    })
    window.removeEventListener('resize', this.changDropdownPanelPosition)
  },
  methods: {
    // 初始化
    init() {
      this.internalOptions = Object.assign([], this.modelValue)

      if (this.isInput)
        this.setInputValue()
    },

    // operation filter confirm
    confirm() {
      // 使用户传入的v-model 生效
      this.$emit('update:modelValue', this.internalOptions)
      this.$emit(EMIT_EVENTS.FILTER_CONFIRM, this.internalOptions)
      this.hideDropDown()
    },

    // operation filter reset
    reset() {
      if (this.internalOptions.some(x => x.selected)) {
        this.internalOptions.map((x) => {
          if (x.selected)
            x.selected = false

          return x
        })

        // 使用户传入的v-model 生效
        this.$emit('update:modelValue', this.internalOptions)

        this.$emit(EMIT_EVENTS.FILTER_RESET, this.internalOptions)
      }

      this.hideDropDown()
    },

    // show dropdown
    showDropDown() {
      const { rootId, dropdownItemsPanelId } = this

      const nextVisible = true

      const allowChange = this.beforeVisibleChangeCallback(nextVisible)
      if (isBoolean(allowChange) && !allowChange)
        return false

      const rootEl = document.querySelector<HTMLElement>(`#${rootId}`)

      if (rootEl) {
        // remove first
        rootEl.innerHTML = ''
        rootEl.appendChild(this.$refs[dropdownItemsPanelId] as HTMLElement)

        rootEl.style.position = 'absolute'
        rootEl.classList.add(clsName('popper'))

        this.changDropdownPanelPosition()
      }

      this.internalVisible = true

      this.$emit(EMIT_EVENTS.VISIBLE_CHANGE, nextVisible)
    },

    // hide dropdown
    hideDropDown() {
      const nextVisible = false

      const allowChange = this.beforeVisibleChangeCallback(nextVisible)
      if (isBoolean(allowChange) && !allowChange)
        return false

      this.$emit(EMIT_EVENTS.VISIBLE_CHANGE, nextVisible)

      setTimeout(() => {
        this.internalVisible = false
        this.removeOrEmptyRootPanel()
      }, 150)
    },

    // before visible change callback
    beforeVisibleChangeCallback(nextVisible: boolean) {
      const { beforeVisibleChange, isDropdownVisible } = this

      if (
        nextVisible !== isDropdownVisible
        && isFunction(beforeVisibleChange)
      ) {
        // next visible
        return beforeVisibleChange({
          nextVisible,
        })
      }
    },

    // remove or emoty root panel
    removeOrEmptyRootPanel() {
      const { rootId } = this

      const rootEl = document.querySelector(`#${rootId}`)
      if (rootEl)
        rootEl.innerHTML = ''
    },

    // change dropdown panel position
    changDropdownPanelPosition() {
      const {
        defaultInstance,
        rootId,
        popperAppendToEl,
        appendToElTagName,
      } = this

      const rootEl = document.querySelector<HTMLElement>(`#${rootId}`)

      if (rootEl) {
        const { width: currentPanelWidth, height: currentPanelHeight }
                    = rootEl.getBoundingClientRect()

        const triggerEl = this.$el.querySelector('.ve-dropdown-dt')
        const { height: triggerElHeight }
                    = triggerEl.getBoundingClientRect()

        if (!popperAppendToEl)
          return false

        // is append to body
        const isAppendToBody = appendToElTagName === 'BODY'

        const {
          offsetLeft: triggerElLeft,
          offsetTop: triggerElTop,
          right: triggerElRight,
          bottom: triggerElBottom,
        } = isAppendToBody
          ? getViewportOffset(triggerEl)
          : getViewportOffsetWithinContainer(
            triggerEl,
            popperAppendToEl,
          )

        let panelX = 0
        let panelY = 0

        // 如果不是添加到body 需要考虑外层容器滚动调的影响
        let scrollLeft = 0
        let scrollTop = 0
        if (!isAppendToBody) {
          scrollLeft = popperAppendToEl.scrollLeft
          scrollTop = popperAppendToEl.scrollTop
        }

        // 右方宽度够显示
        if (triggerElRight >= currentPanelWidth)
          panelX = triggerElLeft + scrollLeft

        // 右方宽度不够显示在鼠标点击左方
        else
          panelX = triggerElLeft - currentPanelWidth + scrollLeft

        // 下方高度够显示
        if (triggerElBottom >= currentPanelHeight) {
          panelY
                        = triggerElTop
                        + triggerElHeight
                        + defaultInstance
                        + scrollTop
        }
        // 下方高度不够显示在鼠标点击上方
        else {
          panelY
                        = triggerElTop
                        - currentPanelHeight
                        - defaultInstance
                        + scrollTop
        }

        rootEl.style.left = `${panelX}px`
        rootEl.style.top = `${panelY}px`
      }
    },

    // 设置文本框的值
    setInputValue() {
      let result

      const labels = this.selectedLabels
      if (Array.isArray(labels) && labels.length > 0)
        result = labels.join()

      this.inputValue = result || ''
    },

    // dropdown panel click
    dropdownPanelClick() {
      this.isDropdownShowTriggerClicked = true
      this.dropdownShowToggle()
    },

    // dropdown show toggle
    dropdownShowToggle() {
      if (this.isDropdownVisible)
        this.hideDropDown()

      else
        this.showDropDown()
    },

    // single select option click
    singleSelectOptionClick(e: MouseEvent, item: VeDropdownItem) {
      this.internalOptions = this.internalOptions.map((x) => {
        if (item.label === x.label)
          x.selected = true

        else
          x.selected = false

        return x
      })

      if (this.hideByItemClick)
        this.hideDropDown()

      if (this.isInput)
        this.setInputValue()

      // 使用户传入的v-model 生效
      this.$emit('update:modelValue', this.internalOptions)

      this.$emit(EMIT_EVENTS.ITEM_SELECT_CHANGE, this.internalOptions)
    },

    // 获取样式名称
    getTextAlignClass() {
      return clsName(`items-li-a-${this.textAlign}`)
    },

    // dropdown click outSide
    dropdownClickOutside() {
      /*
            是否显示触发器被点击了（被点击将忽略 clickOutside 事件）
            */
      setTimeout(() => {
        if (this.isDropdownShowTriggerClicked)
          this.isDropdownShowTriggerClicked = false

        else
          this.hideDropDown()
      })
    },

    // checbox 受控属性管理
    checkedChangeControl(item: VeDropdownItem, isChecked: boolean) {
      this.internalOptions = this.internalOptions.map((i) => {
        if (i.label === item.label)
          i.selected = isChecked

        return i
      })

      this.$emit(EMIT_EVENTS.ITEM_SELECT_CHANGE, this.internalOptions)
    },

    // get random id
    getRandomIdWithPrefix() {
      return clsName(getRandomId())
    },

    /*
        add root element to element
        如果不指定则添加到 body
        */
    addRootElementToElement() {
      const { popperAppendTo } = this

      this.rootId = this.getRandomIdWithPrefix()
      this.dropdownItemsPanelId = this.getRandomIdWithPrefix()

      const rootEl = document.querySelector(`#${this.rootId}`)

      if (rootEl) {
        return false
      }
      else {
        // fixed unit test error: [Vue warn]: Error in v-on handler: "TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'."
        this.$nextTick(() => {
          const containerEl = document.createElement('div')

          containerEl.setAttribute('id', this.rootId)

          if (
            typeof popperAppendTo === 'string'
            && popperAppendTo.length > 0
          ) {
            this.popperAppendToEl
                            = document.querySelector<HTMLElement>(popperAppendTo)
          }
          else {
            this.popperAppendToEl = popperAppendTo as HTMLElement
          }

          this.appendToElTagName = this.popperAppendToEl!.tagName

          this.popperAppendToEl?.appendChild(containerEl)
        })
      }
    },
  },

  render() {
    const {
      isMultiple,
      getTextAlignClass,
      internalOptions,
      isSelect,
      width,
      maxHeight,
      dropdownPanelClick,
      getMaxWidth,
      reset,
      singleSelectOptionClick,
      showOperation,
      isCustomContent,
      dropdownItemsClass,
      dropdownItemsPanelId,
    } = this

    let content = []

    if (isMultiple) {
      content = internalOptions.map((item, index) => {
        const checkboxProps = {
          key: item.label,
          isControlled: true,
          label: item.label,
          showLine: item.showLine,
          isSelected: item.selected,
          onOnCheckedChange: (isChecked: boolean) =>
            this.checkedChangeControl(item, isChecked),
        }

        return (
          <li
            key={index}
            class={[
              clsName('items-multiple'),
              clsName('items-li'),
              getTextAlignClass(),
            ]}
          >
            <VeCheckbox {...checkboxProps} />
          </li>
        )
      })
    }
    else {
      content = internalOptions.map((item, index) => {
        const radioProps = {
          isControlled: true,
          isSelected: item.selected,
          onOnRadioChange: () => {},
        }

        return (
          <li
            key={index}
            class={[
              clsName('items-li'),
              item.selected ? 'active' : '',
            ]}
            onClick={e => singleSelectOptionClick(e, item)}
          >
            <a
              href="javascript:void(0);"
              class={[clsName('items-li-a'), getTextAlignClass()]}
            >
              {this.showRadio
                ? (
                  <VeRadio {...radioProps}>{item.label}</VeRadio>
                  )
                : (
                    item.label
                  )}
            </a>
          </li>
        )
      })
    }

    const dropdownProps = {
      class: ['ve-dropdown'],
    }

    const dropdownItemsProps = {
      ref: dropdownItemsPanelId,
      class: dropdownItemsClass,
    }

    return (
      <dl {...dropdownProps}>
        <dt class="ve-dropdown-dt" onClick={dropdownPanelClick}>
          <a
            class={[isSelect ? clsName('dt-selected') : '']}
            style={{ width: `${width}px` }}
          >
            {this.$slots.default?.()}
          </a>
        </dt>
        <div style={{ display: 'none' }}>
          <dd {...dropdownItemsProps} v-click-outside={this.dropdownClickOutside}>
            <ul
              class={clsName('items')}
              style={{
                'min-width': `${width}px`,
                'max-width': `${getMaxWidth}px`,
              }}
            >
              {/* custome content */}
              {isCustomContent && this.$slots['custom-content']?.()}
              {/* not custom content */}
              {!isCustomContent && (
                <div>
                  <div
                    class={clsName('items-warpper')}
                    style={{
                      'max-height': `${maxHeight}px`,
                    }}
                  >
                    {content}
                  </div>
                  {showOperation && (
                    <li class={clsName('operation')}>
                      <a
                        href="javascript:void(0)"
                        class={[
                          clsName('operation-item'),
                          this.operationFilterClass,
                        ]}
                        onClick={reset}
                      >
                        {this.resetFilterText}
                      </a>
                      <a
                        class={clsName(
                          'operation-item',
                        )}
                        href="javascript:void(0)"
                        onClick={this.confirm}
                      >
                        {this.confirmFilterText}
                      </a>
                    </li>
                  )}
                </div>
              )}
            </ul>
          </dd>
        </div>
      </dl>
    )
  },
})
