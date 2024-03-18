<script setup lang="ts">
import { VeLocale } from '@easytable/vue'
import { version as latestVersion } from '../../packages/vue/package.json'
import locale from './comp/locale'
import useI18n from './comp/mixins/i18n-mixins'
import useThemeSwitch from './comp/mixins/theme-switch-mixins'
import vClickoutside from './comp/directives/clickoutside'
import { getDocTheme, setDocTheme } from '@/utils/cookies'
import { getVersions } from '@/service/index'

const route = useRoute()
const router = useRouter()

const { switchThemeMix } = useThemeSwitch()
const { currentDocLang } = useI18n()
interface Option { label: string, value: string }
// switch lang option
const switchLangOptions = ref([
  { value: 'en', label: 'English(TBC)' },
  { value: 'zh', label: '简体中文' },
])
// show lang dropdown
const showLangDropdown = ref(false)
// switch version option,
const switchVersionOptions = ref<Option[]>([])
const showVersionDropdown = ref(false)
// show theme dropdown
const showThemeDropdown = ref(false)
// default doc theme
const defalutDocTheme = ref('default')
// current doc theme
const currentDocTheme = ref('')

// current local
const currentLocal = computed(() => {
  return locale[currentDocLang.value]
})

// show logo
const showLogo = computed(() => {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return window.env !== 'dev'
})

// current doc version
const currentDocVersion = computed(() => {
  const { pathname } = window.location
  const [version] = pathname.match(/(\d+\.{2}\d+)/) ?? []

  const versionItem = switchVersionOptions.value.find(
    x => x.value === version,
  )

  return versionItem ? versionItem.label : latestVersion
})

watch(currentDocLang, () => {
  VeLocale.update(locale[currentDocLang.value].compLang)
}, { immediate: true })

// lang change
function langChange(item: Option) {
  const { matched } = route

  const lang = item.value as 'zh' | 'en'

  if (matched[0].path !== `/${lang}`) {
    const path = route.path.replace(
      currentDocLang.value,
      lang,
    )
    router.push(path)
    VeLocale.use(locale[lang].compLang)
  }
  setTimeout(() => {
    showLangDropdown.value = false
  }, 150)
}
// theme change
function themeChange({ value }: Option) {
  setDocTheme(value)
  currentDocTheme.value = value
  showThemeDropdown.value = false

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  if (window.env === 'dev') {
    setTimeout(() => {
      window.location.reload()
    })
  }
  else {
    switchThemeMix(value).finally(() => {
      // this.loadingInstance.close();
    })
  }
}
// version change
function versionChange(item: Option) {
  let { protocol, host, hash } = window.location
  if (!host.includes('github.io'))
    host = 'kohaiy.github.io'

  const newUrl = `${protocol}//${host}/easytable/${item.value}${hash}`
  location.href = newUrl
}
// go ro router path
function gotoRouter(item: any) {
  if (item.isRouter) {
    router
      .push({ path: `/${currentDocLang.value}${item.path}` })
      .catch(() => { })
  }
  else {
    window.open(item.path, '_blank')
  }
}
function activeMenuClass(item: any) {
  let result = ''

  const { matched } = route
  if (
    matched
    && matched.length > 0
    && matched.some(
      x => x.path === `/${currentDocLang.value}${item.path}`,
    )
  )
    result = 'link-active'

  return result
}
// init theme
function initDocTheme() {
  currentDocTheme.value = getDocTheme() ?? defalutDocTheme.value
  // 初始化
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  if (window.env !== 'dev')
    switchThemeMix(currentDocTheme.value)

  console.log('current doc theme ::', currentDocTheme.value)
}
getVersions().then((data: any) => {
  switchVersionOptions.value = data
})
onMounted(() => {
  initDocTheme()
})
</script>

<template>
  <div class="main">
    <div class="main-banner">
      <div class="main-banner-warpper">
        <!-- logo -->
        <div v-show="showLogo" class="main-banner-logo">
          <i style="font-size: 20px" class="icon iconfont icon-table" />
          &nbsp;@easytable/vue
        </div>
        <!-- menus -->
        <div class="main-banner-menus-container">
          <div class="main-banner-menus">
            <span
              v-for="item in currentLocal.menus" :key="item.name" class="main-banner-menu-item" :class="[
                activeMenuClass(item),
              ]"
            >
              <a class="main-banner-menu-link" href="javascript:void(0)" @click="gotoRouter(item)">
                {{ item.name }}
              </a>
            </span>

            <!-- switch lang -->
            <span class="main-banner-menu-item">
              <div
                v-clickoutside="() => (showLangDropdown = false)
                " class="switch-lang-container"
              >
                <span
                  class="switch-lang" @click="
                    showLangDropdown = !showLangDropdown
                  "
                >
                  <i class="icon iconfont icon-translate" />
                  <i class="icon iconfont icon-dropdown" />
                </span>
                <div
                  class="switch-lang-dropdown-pannel" :class="showLangDropdown
                    ? 'dropdown-pannel-show'
                    : ''
                  "
                >
                  <span
                    v-for="item in switchLangOptions" :key="item.value" class="dropdown-item" :class="[
                      {
                        active:
                          item.value
                          === currentDocLang,
                      },
                    ]" @click.stop="langChange(item)"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </div>
            </span>

            <!-- switch theme -->
            <span class="main-banner-menu-item">
              <div
                v-clickoutside="() => (showThemeDropdown = false)
                " class="switch-theme-container"
              >
                <span
                  class="switch-theme" @click="
                    showThemeDropdown = !showThemeDropdown
                  "
                >
                  {{ currentLocal.docTheme }}
                  <i class="icon iconfont icon-dropdown" />
                </span>
                <div
                  class="switch-theme-dropdown-pannel" :class="showThemeDropdown
                    ? 'dropdown-pannel-show'
                    : ''
                  "
                >
                  <span
                    v-for="item in currentLocal.switchDocThemeOptions" :key="item.value" class="dropdown-item" :class="[
                      {
                        active:
                          item.value
                          === currentDocTheme,
                      },
                    ]" @click.stop="themeChange(item)"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </div>
            </span>

            <!-- switch version -->
            <span class="main-banner-menu-item">
              <div
                v-clickoutside="() => (showVersionDropdown = false)
                " class="switch-version-container"
              >
                <span
                  class="switch-version" @click="
                    showVersionDropdown
                      = !showVersionDropdown
                  "
                >
                  {{ currentDocVersion }}
                  <i class="icon iconfont icon-dropdown" />
                </span>
                <div
                  class="switch-version-dropdown-pannel" :class="showVersionDropdown
                    ? 'dropdown-pannel-show'
                    : ''
                  "
                >
                  <span
                    v-for="item in switchVersionOptions" :key="item.value" class="dropdown-item" :class="[
                      {
                        active:
                          item.label
                          === currentDocVersion,
                      },
                    ]" @click.stop="versionChange(item)"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </div>
            </span>

            <span class="main-banner-menu-item">
              <a class="main-banner-menu-link" href="https://github.com/kohaiy/easytable">
                <i class="icon iconfont icon-github" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </router-view>
  </div>
</template>
