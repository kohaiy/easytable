import { later, wrapMount as mount } from '../util'
import veSelect from '@/ve-select'

describe('veSelect', () => {
  // select items
  const SELECT_ITEMS = [
    { value: 0, label: 'Apple' },
    { value: 1, label: 'Orange', selected: true },
    { value: 2, label: 'Banana' },
  ]

  it('render by value prop', () => {
    const wrapper = mount({
      render() {
        return <veSelect modelValue={SELECT_ITEMS} placeholder="姓名" />
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  it('render by isMultiple prop', () => {
    const wrapper = mount({
      render() {
        return (
          <veSelect
            modelValue={SELECT_ITEMS}
            placeholder="姓名"
            isMultiple
          />
        )
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  it('render by isInput prop', () => {
    const wrapper = mount({
      render() {
        return (
          <veSelect modelValue={SELECT_ITEMS} placeholder="姓名" isInput />
        )
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  it('width prop', () => {
    const wrapper = mount(veSelect, {
      propsData: {
        value: SELECT_ITEMS,
        width: 120,
      },
    })

    expect(
      wrapper.find('.ve-dropdown-dt-selected').attributes('style'),
    ).toBe('width: 120px;')
    wrapper.unmount()
  })

  it('isMultiple prop', () => {
    const wrapper = mount(veSelect, {
      propsData: {
        modelValue: SELECT_ITEMS,
        isMultiple: true,
      },
    })

    expect(wrapper.findAll('.ve-dropdown-items-multiple').length).toBe(3)
    wrapper.unmount()
  })

  it('isInput prop', () => {
    const wrapper = mount(veSelect, {
      propsData: {
        value: SELECT_ITEMS,
        isInput: true,
      },
    })

    expect(wrapper.find('.ve-select-input').exists()).toBe(true)
    wrapper.unmount()
  })

  it('on-select-change emit event', async () => {
    const wrapper = mount(veSelect, {
      propsData: {
        modelValue: SELECT_ITEMS,
      },
    })

    wrapper.findAll('.ve-dropdown-items-li')[1].trigger('click')

    expect(wrapper.emitted('on-select-change').length).toEqual(1)
    expect(
      wrapper.emitted('on-select-change')[0][0].find(x => x.selected)
        .label,
    ).toBe('Orange')
    wrapper.unmount()
  })
})
