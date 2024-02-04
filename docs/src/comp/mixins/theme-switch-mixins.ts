import ThemeSwitcherTool from 'theme-switcher-tool'

const styleLinkId = 'theme_creator_cli_style_id'

const themeSwitcherTool = ThemeSwitcherTool({
  // Your theme list
  themeList: [
    {
      themeName: 'dark',
      themePath: 'https://unpkg.com/@easytable/vue/libs/theme-dark/index.css',
    },
    {
      themeName: 'default',
      themePath: 'https://unpkg.com/@easytable/vue/libs/theme-default/index.css',
    },
  ],
  // Your actual style id
  styleLinkId,
  useStorage: false,
  storageKey: 'theme_switcher_tool_theme',
})

export default function useThemeSwitch() {
  onMounted(() => {
    // 防止已发布的样式文件，对正在开发的样式有干扰
    if (process.env.NODE_ENV === 'development') {
      const themeLink = document.getElementById(styleLinkId)
      if (themeLink)
        themeLink.parentNode?.removeChild(themeLink)
    }
  })
  return {
    // switch theme mix
    switchThemeMix(themeName: string) {
      console.log('themeName', themeName)

      return new Promise((resolve, reject) => {
        themeSwitcherTool
          .switcher({
            themeName,
          })
          .then(() => {
            resolve(void 0)
          })
          .catch(reject)
      })
    },
  }
}
