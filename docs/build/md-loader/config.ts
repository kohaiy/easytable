// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import Config from 'markdown-it-chain'
import containers from './containers'
import overWriteFenceRule from './fence'

const config = new Config()

export function renderContent(source: string, resourceFileName: string) {
  config.options
    .html(true)
    .end()

  /*  .plugin("anchor")
    .use(anchorPlugin, [
        {
            slugify: slugify,
            permalink: true,
            permalinkBefore: true,
            permalinkClass: "header-anchor",
            permalinkSymbol: "#"
        }
    ])
    .end() */

    .plugin('containers')
    .use(containers, [{ resourceFileName }])
    .end()

  const md = config.toMd()

  overWriteFenceRule(md)
  return md.render(source)
}
