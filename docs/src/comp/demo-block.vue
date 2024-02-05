<script lang="ts" setup>
// 最外层
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, toRefs, useSlots, watch } from 'vue'

import { version } from '../../../package.json'
import locale from './locale'
import useI18n from './mixins/i18n-mixins'
import { stripScript, stripStyle, stripTemplate } from '@/utils/index'
import CodeSandBoxOnline from '@/comp/online-edit/code-sand-box/index'

// const version = '0.0.1'

const { currentDocLang } = useI18n()
const slots = useSlots()

const el = ref<HTMLDivElement>()
const data = reactive({
  onlineExample: {
    version: '',
    script: '',
    html: '',
    style: '',
  },
  hovering: false,
  isExpanded: false,
  fixedControl: false,
  scrollParent: null,
  // 是否示例渲染完成
  isDemoRendered: true,
})

const { onlineExample, hovering, isDemoRendered, isExpanded, scrollParent, fixedControl } = toRefs(data)

data.onlineExample.version = version
const highlight = slots.highlight as any

if (highlight) {
  let code = ''
  let cur = highlight()[0]

  if (cur.type === 'pre' && cur.children && cur.children[0]) {
    cur = cur.children[0]
    if (cur.type === 'code')
      code = cur.children
  }

  if (code) {
    data.onlineExample.html = stripTemplate(code)
    data.onlineExample.script = stripScript(code)
    data.onlineExample.style = stripStyle(code)
  }
}
// demo lang info
const demoLangInfo = computed(() => {
  return locale[currentDocLang.value as keyof typeof locale].demo
})

const iconClass = computed(() => {
  return data.isExpanded
    ? 'iconfont icon-arrow-up'
    : 'iconfont icon-arrow-down'
})

const controlText = computed(() => {
  return data.isExpanded
    ? demoLangInfo.value.foldCode
    : demoLangInfo.value.expandCode
})

const codeArea = computed(() => {
  return el.value?.querySelector<HTMLDivElement>('.meta')
})

const codeAreaHeight = computed(() => {
  if ((el.value?.getElementsByClassName('description').length ?? 0) > 0) {
    return el.value?.getElementsByClassName('highlight')[0]
      .clientHeight ?? 0
  }
  return el.value?.getElementsByClassName('highlight')[0].clientHeight ?? 0
})

const getDemoBlockControlWidth = computed(() => {
  let result = '100%'

  if (data.fixedControl)
    result = `${document.querySelector('.demo-block')?.clientWidth ?? 0}px`

  return result
})
const controlEl = ref<HTMLDivElement>()
const metaEl = ref<HTMLDivElement>()

onMounted(() => {
  nextTick(() => {
    const highlight = el.value!.getElementsByClassName('highlight')[0] as HTMLDivElement
    if (el.value!.getElementsByClassName('description').length === 0) {
      highlight.style.width = '100%'
      highlight.style.borderRight = 'none'
    }
  })
})

// visibility change
function visibilityChange(entry: any) {
  const { isIntersecting } = entry

  // visibility
  if (isIntersecting)
    data.isDemoRendered = true
}
// scroll handler
function scrollHandler() {
  const { top, bottom, left }
                = metaEl.value!.getBoundingClientRect()
  // 44px 为自身高度
  data.fixedControl
                = bottom > document.documentElement.clientHeight
                && top + 44 <= document.documentElement.clientHeight

  controlEl.value!.style.left = data.fixedControl
    ? `${left}px`
    : '0'
}

function removeScrollHandler() {
  document.removeEventListener('scroll', scrollHandler)
}

watch(() => data.isExpanded, (val) => {
  if (codeArea.value) {
    codeArea.value.style.height = val
      ? `${codeAreaHeight.value + 1}px`
      : '0'
  }
  if (!val) {
    data.fixedControl = false
    controlEl.value!.style.left = '0'
    removeScrollHandler()
    return
  }
  setTimeout(() => {
    document.addEventListener('scroll', scrollHandler)
    scrollHandler()
  }, 200)
})

function handleClickControl() {
  isExpanded.value = !isExpanded.value
  if (!isExpanded.value) {
    let height = 0
    if (fixedControl.value)
      height = window.innerHeight - (metaEl.value?.getBoundingClientRect().top ?? 0) - 44 - 40
    else
      height = metaEl.value?.getBoundingClientRect().height ?? 0

    window.scrollTo({
      top: window.scrollY - height,
      behavior: 'instant',
    })
  }
}

onBeforeUnmount(() => {
  removeScrollHandler()
})
</script>

<template>
  <div
    ref="el"
    class="demo-block"
    :class="[{ hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      class="source-code-container"
      tag-name="div"
      @change="visibilityChange"
    >
      <div v-if="isDemoRendered" class="source">
        <slot name="source" />
      </div>
      <div v-else class="source-empty">
        Loading...
      </div>
    </div>
    <div v-if="$slots.default" class="description">
      <div class="title-container">
        <span class="title">{{ demoLangInfo.description }}</span>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <div ref="metaEl" class="meta">
      <div class="highlight">
        <slot name="highlight" />
      </div>
    </div>
    <div
      ref="controlEl"
      class="demo-block-control"
      :style="{ width: getDemoBlockControlWidth }"
      :class="{ 'is-fixed': fixedControl }"
      @click="handleClickControl"
    >
      <i
        class="arraw-slide-icon" :class="[iconClass, { hovering }]"
      />
      <transition name="text-slide">
        <span v-show="hovering" class="slide-content">
          {{ controlText }}
        </span>
      </transition>
      <!--    <transition name="text-slide">
                <div
                    v-show="hovering || isExpanded"
                    size="small"
                    type="text"
                    class="slide-content online-edit-btn"
                >
                    {{ demoLangInfo.runInline }}
                </div>
            </transition> -->
      <transition name="text-slide">
        <div
          v-show="hovering || isExpanded"
          size="small"
          type="text"
          class="slide-content online-edit-btn"
        >
          <CodeSandBoxOnline
            :btn-name="demoLangInfo.openInCodeSandBox || ''"
            :version="onlineExample.version"
            :example-tpl="onlineExample.html"
            :example-script="onlineExample.script"
            :example-style="onlineExample.style"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="less">
.demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: 0.2s;

    &.hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }

    &.demo-icon {
        .source > div i {
            margin: 0 24px;
            font-size: 30px;
        }
    }

    code {
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    .demo-button {
        float: right;
    }

    .source-code-container {
        min-height: 250px;
        .source {
            padding: 24px;
        }
        .source-empty {
            min-height: 250px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #666;
        }
    }

    .description {
        box-sizing: border-box;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        margin-top: 50px;
        background-color: #fff;

        .title-container {
            font-weight: 500;
            position: relative;
            &:before {
                content: "";
                display: block;
                width: 100%;
                height: 1px;
                background: #eee;
                position: absolute;
                top: 10px;
                left: 0;
            }
            .title {
                display: inline-block;
                background: #fff;
                padding: 0 10px 0 10px;
                position: relative;
                margin-left: 30px;
                font-size: 14px;
            }
        }

        .content {
            margin: 20px;
            p {
                margin: 0;
                line-height: 26px;
            }

            code {
                color: #5e6d82;
                background-color: #e6effb;
                margin: 0 4px;
                display: inline-block;
                padding: 1px 5px;
                font-size: 12px;
                border-radius: 3px;
                height: 18px;
                line-height: 18px;
            }
        }
    }

    .meta {
        background-color: #fff;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;

        .highlight {
            pre {
                margin: 0;
            }

            code.hljs {
                margin: 0;
                max-height: none;
                border-radius: 0;
                border-bottom: none;
                &::before {
                    content: none;
                }
            }
        }
    }

    .demo-block-control {
        border-top: solid 1px #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;

        &.is-fixed {
            position: fixed;
            bottom: 0;
            width: 868px;
        }

        .arraw-slide-icon {
            display: inline-block;
            font-size: 16px;
            line-height: 44px;
            transition: 0.3s;
            &.hovering {
                transform: translateX(-40px);
            }
        }

        .slide-content {
            position: absolute;
            transform: translateX(-30px);
            font-size: 14px;
            line-height: 44px;
            transition: 0.3s;
            display: inline-block;
        }

        &:hover {
            color: #409eff;
            background-color: #f9fafc;
        }

        & .text-slide-enter,
        & .text-slide-leave-active {
            opacity: 0;
            transform: translateX(10px);
        }

        .online-edit-btn {
            line-height: 44px;
            position: absolute;
            top: 0;
            right: 0;
            font-size: 14px;
            padding-right: 20px;
        }
    }
}
</style>
