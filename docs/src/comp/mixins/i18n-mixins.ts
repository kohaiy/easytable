import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { DOC_LANG } from '@/utils/constant'

export default function useI18n() {
  const route = useRoute()
  const currentDocLang = computed(() => {
    return (route.path.split('/')[1] || DOC_LANG.EN) as ('zh' | 'en')
  })

  return {
    currentDocLang,
  }
}
