import { later, wrapMount as mount } from '../util'
import veRadio from '@/ve-radio'

describe('veRadio', () => {
  it('render', () => {
    const wrapper = mount({
      render() {
        const { checked, unChecked } = this
        return (
          <div>
            <div>
              <veRadio modelValue={checked}>normal</veRadio>
            </div>
            <div>
              <veRadio disabled modelValue={checked}>
                disabled checked
              </veRadio>
            </div>
            <div>
              <veRadio disabled modelValue={unChecked}>
                disabled unChecked
              </veRadio>
            </div>
            <div>
              <veRadio isControlled isSelected={checked}>
                controlled
              </veRadio>
            </div>
          </div>
        )
      },
      data() {
        return {
          checked: true,
          unChecked: false,
        }
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  it('modelValue prop', async () => {
    const wrapper = mount(veRadio, {
      propsData: {
        modelValue: false,
      },
    })

    expect(wrapper.find('.ve-radio-checked').exists()).toBe(false)

    wrapper.setProps({ isSelected: true })

    await later()
    expect(wrapper.find('.ve-radio-checked').exists()).toBe(false)
    wrapper.unmount()
  })

  it('disable prop', () => {
    const wrapper = mount(veRadio, {
      propsData: {
        modelValue: true,
      },
    })

    expect(wrapper.find('.ve-radio-checked').exists()).toBe(true)
    wrapper.unmount()
  })

  it('label prop', () => {
    const wrapper = mount(veRadio, {
      propsData: {
        modelValue: false,
        label: 'test',
      },
    })

    expect(wrapper.find('.ve-radio-label').text()).toContain('test')
    wrapper.unmount()
  })

  it('isControlled prop', async () => {
    const wrapper = mount(veRadio, {
      propsData: {
        isControlled: true,
        isSelected: false,
      },
    })

    expect(wrapper.find('.ve-radio-checked').exists()).toBe(false)

    wrapper.setProps({ isSelected: true })

    await later()
    expect(wrapper.find('.ve-radio-checked').exists()).toBe(true)
    wrapper.unmount()
  })

  /*   it("click event", async () => {
        const wrapper = mount(veRadio, {
            propsData: {
                value: false,
                label: "test"
            }
        });

        wrapper.trigger("click");

        await later();
        expect(wrapper.find(".ve-radio-checked").exists()).toBe(true);
    }); */

  it('on-radio-change event', async () => {
    const wrapper = mount(veRadio, {
      propsData: {
        modelValue: false,
        label: 'test',
      },
    })

    wrapper.trigger('click')

    await later()
    expect(wrapper.emitted('on-radio-change').length).toEqual(1)
    expect(wrapper.emitted('on-radio-change')[0]).toEqual([true])
    wrapper.unmount()
  })
})
