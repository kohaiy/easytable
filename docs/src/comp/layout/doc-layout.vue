<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import Footer from './footer.vue'
import useI18n from './../mixins/i18n-mixins'
import catolog from '@/comp/catalog.vue'
import routers from '@/router/locale/index'
import { goTobyAnchorId } from '@/utils/index'

const { currentDocLang } = useI18n()
const router = useRouter()
const data = reactive({
  showBackTop: false,
  catalogData: [] as { id: string, label: string }[],
  showHide: false, // 是否显示内置组件
})
const el = ref<HTMLDivElement>()

const routerConfig = computed(() => {
  return routers[currentDocLang.value]
})

function goBackTop() {
  window.scroll(0, 0)
}

function handleScroll() {
  const scrollTop
        = document.documentElement.scrollTop
        || window.pageYOffset
        || document.body.scrollTop
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-expect-error
        || window.scrollHeight

  data.showBackTop = scrollTop > 600
}

function anchorLink(to: RouteLocationNormalizedLoaded) {
  const query = to.query

  if (query && query.anchor) {
    nextTick(() => {
      goTobyAnchorId(router, query.anchor as string)
    })
  }

  nextTick(() => {
    const anchorLinkArr = el.value?.querySelectorAll('.anchor-link')
    const catalogData: { id: string, label: string }[] = []

    if (anchorLinkArr && anchorLinkArr.length > 0) {
      for (let i = 0, len = anchorLinkArr.length; i < len; i++) {
        catalogData.push({
          id: anchorLinkArr[i].id,
          label: anchorLinkArr[i].getAttribute('label')!,
        })
      }
    }

    data.catalogData = catalogData
  })
}

// select、checkbox、dropdown 等组件都是内置的，showHide=1 则开启
function enableHideComp(to: RouteLocationNormalizedLoaded) {
  const query = to.query

  if (query.showHide && query.showHide === '1')
    data.showHide = true
}
// setFavicon() {
//     var link =
//         document.querySelector("link[rel*='icon']") ||
//         document.createElement("link");
//     link.type = "image/x-icon";
//     link.rel = "shortcut icon";
//     link.href = require("./../../images/favicon.png");
//     document.getElementsByTagName("head")[0].appendChild(link);
// },

const route = useRoute()
watch(route, (to, from) => {
  anchorLink(to)
  // 显示内置组件
  enableHideComp(to)
}, {
  immediate: true,
})

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="el">
    <div class="main-wrapper">
      <!-- 左侧菜单 -->
      <div class="main-wrapper-sidebar">
        <ul class="menu-root">
          <template v-for="(config, index) in routerConfig">
            <li v-if="config.children" :key="index">
              <a class="main-wrapper-sidebar-link" href="javascript:javascript:void(0);">
                {{ config.name }}
              </a>
              <ul class="menu-sub">
                <router-link
                  v-for="(
                    subConfig, subIndex
                  ) in config.children" :key="subIndex" v-slot="{ isActive, href, navigate }" custom
                  :to="`/${currentDocLang}/doc/${config.path}/${subConfig.path}`"
                >
                  <li
                    :class="{ active: isActive }" role="link"
                    @click="navigate" @keypress.enter="navigate()"
                  >
                    <a :href="href">
                      {{ subConfig.name }}
                      <span
                        v-show="subConfig.meta
                          && subConfig.meta.version
                        " class="version"
                      >
                        {{
                          subConfig.meta
                            && subConfig.meta.version
                        }}
                      </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
            <router-link
              v-else-if="!config.meta || !config.meta.hide" :key="`hide${index}`"
              v-slot="{ navigate, href, isActive }" :to="`/${currentDocLang}/doc/${config.path}`" custom
            >
              <li
                class="no-child" :class="{ active: isActive }" role="link" @click="navigate"
                @keypress.enter="navigate()"
              >
                <a :href="href">{{ config.name }}</a>
              </li>
            </router-link>
          </template>
        </ul>
      </div>

      <!-- 主体内容 Start -->
      <div class="main-wrapper-container">
        <router-view v-slot="{ Component }">
          <keep-alive v-if="route.meta.keepAlive">
            <component :is="Component" />
          </keep-alive>
          <component :is="Component" v-else />
        </router-view>
        <!-- 主体内容 End -->
      </div>

      <!-- footer -->
      <Footer />
    </div>

    <!-- 回到顶部 -->
    <div>
      <div v-show="data.showBackTop" class="main-back-top">
        <i
          class="
                        icon
                        iconfont
                        icon-huidaodingbu-copy
                        main-back-top-icon
                    " @click="goBackTop()"
        />
      </div>
    </div>

    <!-- 目录 -->
    <div>
      <catolog :catalog-data="data.catalogData" />
    </div>
  </div>
</template>
