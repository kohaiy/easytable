import { withUse } from '@easytable/common/uses/with-use'
import VeLoading from './src/index'

export default withUse(VeLoading, (app) => {
  app.config.globalProperties.$veLoading = VeLoading
})
