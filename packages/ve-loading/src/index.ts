import { nextTick } from 'vue'
import { addClass, removeClass } from '@easytable/common/utils/dom'
import { COMPS_NAME, SPIN_NAMES } from './util/constant'
import VeLoading from './loading'
import { clsName } from './util'

type VeLoadingProps = NonNullable<Partial<(typeof VeLoading)['__defaults']>>

// default options
const defaultOptions: VeLoadingProps = {
  name: 'plane',
  visible: false,
  color: '#1890ff',
  overlayBackgroundColor: 'rgba(255, 255, 255, 0.5)',
  width: 40,
  height: 40,
  tip: '',
  fullscreen: false,
  target: '',
  lock: false,
  // parent “__parent__”会被忽略
  parent__: null,
}

// parent relative class
const PARENT_RELATIVE_CLASS = clsName('parent-relative')
// parent lock class
const PARENT_LOCK_CLASS = clsName('parent-lock')

// create instance
function createInstance(options: VeLoadingProps = {}) {
  const app = createApp(VeLoading, options)
  const instance = app.mount(document.createElement('div')) as InstanceType<typeof VeLoading>
  // show
  const show = function () {
    nextTick(() => {
      if (instance.lock && instance.parent__)
        addClass(instance.parent__, PARENT_LOCK_CLASS)

      instance.setVisible(true)
    })
  }

  // close
  const close = function () {
    nextTick(() => {
      if (instance.lock && instance.parent__)
        removeClass(instance.parent__, PARENT_LOCK_CLASS)

      instance.setVisible(false)
    })
  }

  // destroy
  const destroy = function () {
    if (instance.parent__) {
      removeClass(instance.parent__, PARENT_RELATIVE_CLASS)
      removeClass(instance.parent__, PARENT_LOCK_CLASS)
    }

    if (instance.$el && instance.$el.parentNode)
      instance.$el.parentNode.removeChild(instance.$el)

    app.unmount()
    instance.setVisible(false)
  }

  return {
    instance,
    show,
    close,
    destroy,
  }
}

// check spin name
function checkSpinName(name: VeLoadingProps['name']) {
  if (!name || !Object.values(SPIN_NAMES).includes(name))
    console.error(`${name} is not found in ${COMPS_NAME.VE_LOADING}.`)
}

// Loading instance
function Loading(options: VeLoadingProps = {}) {
  options = Object.assign({}, defaultOptions, options)

  if (typeof options.target === 'string' && options.target.length > 0)
    options.target = document.querySelector<HTMLElement>(options.target) ?? undefined

  options.target = options.target || document.body

  checkSpinName(options.name)

  if (options.target !== document.body)
    options.fullscreen = false

  else
    options.fullscreen = true

  const loadingInstance = createInstance(options)

  // set parent
  options.parent__ = options.fullscreen ? document.body : options.target as HTMLElement

  addClass(options.parent__ as HTMLElement, PARENT_RELATIVE_CLASS)

  options.parent__!.appendChild(loadingInstance.instance.$el)

  return loadingInstance
}

export default Loading
