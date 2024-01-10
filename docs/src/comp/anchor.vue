<script lang="ts" setup>
// import { slugify } from 'transliteration'
import { goTobyAnchorId } from '../utils/index'
import locale from './locale'
import useI18n from './mixins/i18n-mixins'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  // allow edit on github or gitlab etc.
  isEdit: {
    type: Boolean,
    default: true,
  },
  // isEdit=true 时生效
  fileName: {
    type: String,
    default: '',
  },
})
const slugify = String
const { currentDocLang } = useI18n()

const router = useRouter()

const id = ref('')

const eidtDemoTitle = computed(() => {
  return locale[currentDocLang.value].eidtDemoTitle
})

if (props.label)
  id.value = slugify(props.label)

function goAnchor() {
  goTobyAnchorId(router, id.value)
}
// edit on github or gitlab etc.
function eidt() {
  if (props.isEdit) {
    const fileName = props.fileName
    console.log(fileName)

    let result = ''

    let routerUrl = window.location.href.split('/doc/')[1]

    if (routerUrl) {
      routerUrl = routerUrl.split('?')[0]

      const routerUrlDetail = routerUrl.split('/')

      if (routerUrlDetail.length === 1) {
        // scene 1 : /#/en/doc/qa
        result = fileName
      }
      else if (routerUrlDetail[0] === 'base') {
        // scene 2 : /#/en/doc/base/loading
        result = `ve-${routerUrlDetail[1]}/${fileName}`
      }
      else if (routerUrlDetail[0] === 'table') {
        // scene 3 : /#/en/doc/table/header-fixed
        result = `ve-table/${routerUrlDetail[1]}/${fileName}`
      }

      if (result) {
        result
          = locale[currentDocLang.value].eidtDemoUrlPrefix
          + result
        window.open(result, '_blank')
      }
    }
  }
}
</script>

<template>
  <div v-if="label.length && id.length" class="anchor-container">
    <div class="content">
      <a :id="id" class="anchor-link" :label="label" href="javascript:void(0)" @click.stop="goAnchor()">
        <i style="font-size: 15px" class="icon iconfont icon-ai-link" />
      </a>
      <div class="anchor-label">
        <h3>
          {{ label }}
          <i v-show="isEdit" :title="eidtDemoTitle" class="iconfont icon-edit" @click.stop="eidt" />
        </h3>
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.anchor-container {
  .content {
    &:hover {
      .anchor-link {
        opacity: 0.5;
      }
    }

    .anchor-link {
      margin-left: -20px;
      margin-right: 5px;
      opacity: 0;
      font-weight: bold;
    }

    .anchor-label {
      display: inline-block;

      .icon-edit {
        margin-left: 5px;
        color: #ddd;
        cursor: pointer;

        &:hover {
          color: #333;
        }
      }
    }
  }
}
</style>
