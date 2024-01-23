import { later, wrapMount as mount } from '../util'
import veLocale from '@/ve-locale'
import zhCN from '@/common/locale/lang/zh-CN'
import enUS from '@/common/locale/lang/en-US'

describe('veLocale', () => {
  const wrapper = mount({
    render() {
      return (
        <div>
          <ve-pagination total={600} />
          <ve-pagination total={600} pageIndex={2} />
          <ve-pagination total={600} pageIndex={30} />
          <ve-pagination
            total={600}
            layout={['total', 'prev', 'next', 'sizer', 'jumper']}
          />
          <ve-pagination
            total={600}
            layout={[
              'total',
              'sizer',
              'prev',
              'pager',
              'next',
              'jumper',
            ]}
          />
        </div>
      )
    },
  })
  it('render with zhCN', async () => {
    veLocale.use(zhCN)

    await later()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render with enUS', async () => {
    veLocale.use(enUS)

    await later()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render by update method', async () => {
    const lang = {
      pagination: {
        goto: '跳转到',
      },
    }

    veLocale.update(lang)

    await later()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
