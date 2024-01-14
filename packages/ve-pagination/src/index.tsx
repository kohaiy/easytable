import VeSelect from '@easytable/ve-select'
import VeIcon from '@easytable/ve-icon'
import { createLocale } from '@easytable/common/utils/index'
import { ICON_NAMES } from '@easytable/common/utils/constant'
import { COMPS_NAME, EMIT_EVENTS, LOCALE_COMP_NAME } from './util/constant'
import { clsName } from './util'
import Pager from './pager'

const t = createLocale(LOCALE_COMP_NAME)

export default defineComponent({
  name: COMPS_NAME.VE_PAGINATION,
  components: {
    Total: {
      render() {
        return (
          <span class={clsName('total')}>
            {t('total', this.$parent.total)}
          </span>
        )
      },
    },

    Prev: {
      render() {
        return (
          <li
            onClick={this.$parent.prevPage}
            class={[
              this.$parent.newPageIndex === 1
                ? clsName('disabled')
                : '',
              clsName('li'),
              clsName('prev'),
            ]}
          >
            <a>
              <VeIcon name={ICON_NAMES.LEFT_ARROW} />
            </a>
          </li>
        )
      },
    },

    Pager,

    Next: {
      render() {
        return (
          <li
            onClick={this.$parent.nextPage}
            class={[
              this.$parent.newPageIndex === this.$parent.pageCount
                ? clsName('disabled')
                : '',
              clsName('li'),
              clsName('next'),
            ]}
          >
            <a>
              <VeIcon name={ICON_NAMES.RIGHT_ARROW} />
            </a>
          </li>
        )
      },
    },

    Sizer: {
      render() {
        return (
          <VeSelect
            class={clsName('select')}
            modelValue={this.$parent.newPageSizeOption}
            popperAppendTo={this.$parent.popperAppendTo}
            // eslint-disable-next-line ts/ban-ts-comment
            // @ts-expect-error
            onUpdate:modelValue={this.handleChange}
          />
        )
      },

      methods: {
        handleChange(items: { value: number, label: string, selected: boolean }[]) {
          if (Array.isArray(items) && items.length > 0) {
            const item = items.find(x => x.selected)
            if (item)
              this.$parent.pageSizeChangeHandler(item.value)
          }
        },
      },
    },

    Jumper: {
      methods: {
        jumperEnter(event: KeyboardEvent) {
          if (event.keyCode !== 13)
            return
          const target = event.target as HTMLInputElement
          const val = this.$parent.getValidNum(target.value)
          // bug fixed #483
          target.value = val
          this.$parent.jumpPageHandler(val)
        },
      },
      render() {
        return (
          <span class={clsName('goto')}>
                        &nbsp;
            {t('goto')}
&nbsp;
            <input
              class={clsName('goto-input')}
              value={this.$parent.newPageIndex}
              onKeyup={this.jumperEnter}
              type="input"
            />
                        &nbsp;
            {t('page')}
&nbsp;
          </span>
        )
      },
    },
  },
  props: {
    layout: {
      type: Array as PropType<('total' | 'prev' | 'pager' | 'next' | 'sizer' | 'jumper')[]>,
      default() {
        return ['total', 'prev', 'pager', 'next', 'sizer', 'jumper']
      },
    },

    // 总条数
    total: {
      type: Number,
      required: true,
    },

    // 当前页
    pageIndex: {
      type: Number,
      default: 1,
    },

    // 最多显示几个数字按钮
    pagingCount: {
      type: Number,
      default: 5,
    },

    // 每页大小
    pageSize: {
      type: Number,
      default: 10,
    },

    // 每页大小下拉配置
    pageSizeOption: {
      type: Array as PropType<number[]>,
      default() {
        return [10, 20, 30]
      },
    },
    // popper append to element
    popperAppendTo: {
      type: [String, HTMLElement],
      default() {
        return document.body
      },
    },
  },
  data() {
    return {
      newPageIndex:
                this.pageIndex && this.pageIndex > 0
                  ? Number.parseInt(`${this.pageIndex}`)
                  : 1,

      newPageSize: this.pageSize,
    }
  },

  computed: {
    pageCount() {
      return Math.ceil(this.total / this.newPageSize)
    },
    newPageSizeOption() {
      return this.pageSizeOption.map((x) => {
        const temp = {
          value: 0,
          label: '',
          selected: false,
        }

        temp.value = x
        temp.label = x + t('itemsPerPage')
        if (this.newPageSize === x)
          temp.selected = true

        return temp
      })
    },
  },
  watch: {
    pageIndex(newVal) {
      this.newPageIndex = newVal
    },

    pageSize(newVal) {
      this.newPageSize = newVal
    },
  },

  methods: {
    getValidNum(value: number) {
      let result = 1

      value = Number.parseInt(`${value}`, 10)

      if (Number.isNaN(value) || value < 1) {
        result = 1
      }
      else {
        if (value < 1)
          result = 1

        else if (value > this.pageCount)
          result = this.pageCount

        else
          result = value
      }
      return result
    },

    jumpPageHandler(newPageIndex: number) {
      this.newPageIndex = newPageIndex
      this.$emit(EMIT_EVENTS.PAGE_NUMBER_CHANGE, this.newPageIndex)
    },

    // 上一页
    prevPage() {
      if (this.newPageIndex > 1) {
        this.newPageIndex = this.newPageIndex - 1
        this.$emit(EMIT_EVENTS.PAGE_NUMBER_CHANGE, this.newPageIndex)
      }
    },

    // 下一页
    nextPage() {
      if (this.newPageIndex < this.pageCount) {
        this.newPageIndex = this.newPageIndex + 1
        this.$emit(EMIT_EVENTS.PAGE_NUMBER_CHANGE, this.newPageIndex)
      }
    },

    // 改变页面大小
    pageSizeChangeHandler() {
      const item = this.newPageSizeOption.find(x => x.selected)

      if (item) {
        this.newPageSize = item.value
        this.newPageIndex = 1
        this.$emit(EMIT_EVENTS.PAGE_SIZE_CHANGE, this.newPageSize)
      }
    },

    // 回到初始页码
    goBackPageIndex() {
      this.newPageIndex
                = this.pageIndex && this.pageIndex > 0
          ? Number.parseInt(`${this.pageIndex}`)
          : 1
    },

    // 还原每页大小
    goBackPageSize() {
      if (this.pageSize > 0)
        this.newPageSize = this.pageSize
    },
  },
  render() {
    const comps = {
      // 'total','prev','pager','next','sizer','jumper'
      total: <total></total>,
      prev: <prev></prev>,
      pager: (
        <pager
          pageCount={this.pageCount}
          pageIndex={this.newPageIndex}
          pagingCount={this.pagingCount}
          onJumpPageHandler={this.jumpPageHandler}
        >
        </pager>
      ),
      next: <next></next>,
      sizer: <sizer></sizer>,
      jumper: <jumper onJumpPageHandler={this.jumpPageHandler}></jumper>,
    }
    const template = (
      <ul class="ve-pagination">
        {
      this.layout.map((item) => {
        return comps[item]
      })
    }
      </ul>
    )

    return template
  },
})
