interface Payload {
  onCheckboxGroupUpdate: (cb: (val: string[]) => void) => void
  updateCheckboxGroup: (label: string, checked: boolean) => void
  inCheckboxGroup: boolean
  isVerticalShow: Ref<boolean>
  groupModelValue: Ref<string[]>
}

export const CheckboxGroupInjectionKey: InjectionKey<Payload> = Symbol('CheckboxGroupInjectionKey')

export function provideCheckboxGroup({ onCheckboxUpdate, isVerticalShow, groupModelValue }: {
  onCheckboxUpdate: Payload['updateCheckboxGroup']
  isVerticalShow: Payload['isVerticalShow']
  groupModelValue: Payload['groupModelValue']
}) {
  const callbacks: ((val: string[]) => void)[] = []
  provide(CheckboxGroupInjectionKey, {
    onCheckboxGroupUpdate(cb) {
      callbacks.push(cb)
    },
    updateCheckboxGroup: onCheckboxUpdate,
    inCheckboxGroup: true,
    isVerticalShow,
    groupModelValue,
  })

  return {
    updateCheckbox(val: string[]) {
      callbacks.forEach(cb => cb(val))
    },
  }
}

export function injectCheckboxGroup() {
  return inject(CheckboxGroupInjectionKey, {
    onCheckboxGroupUpdate() {},
    updateCheckboxGroup() {},
    inCheckboxGroup: false,
    isVerticalShow: ref(false),
    groupModelValue: ref([]),
  })
}
