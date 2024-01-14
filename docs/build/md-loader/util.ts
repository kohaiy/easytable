// const { compileTemplate } = require("@vue/component-compiler-utils");
// const compiler = require("vue-template-compiler");
import { compileTemplate, parse } from 'vue/compiler-sfc'

export function stripScript(content: string) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripStyle(content: string) {
  const result = content.match(/<(style)[\s\S]*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
export function stripTemplate(content: string) {
  content = content.trim()
  if (!content)
    return content

  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

export function pad(source: string) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n')
}

export function genInlineComponentText(template: string, script: string) {
  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  try {
    // console.log(template);
    // console.log(script);
    const parsed = parse(`
    ${template.replace(/<\/?template>/g, '')}
    <script lang="ts">
    ${script}
    </script>
        `)
    // console.log(11, parsed.descriptor.template?.content)

    const renderStr = `(function() {${
      compileTemplate({
        ...parsed.descriptor,
        // source: `<button title="a" @click="a ++">{{ a }}</button>`,
        // filename: "2",
        id: '2',
        compilerOptions: {
          mode: 'function',
        },
      }).code
    }})()`

    const scriptStr = script
    // = script
    //   ? compileScript(
    //     {
    //       ...parsed.descriptor,
    //       shouldForceReload(): boolean {
    //         throw new Error('Function not implemented.')
    //       },
    //     },
    //     {
    //       id: '',
    //     },
    //   ).content
    //   : ''
    const res = `{
        render: ${renderStr},
        ...(function(){${scriptStr.trim().replace(/;$/, '').replace(/export\s+default/, 'return') || 'return {}'}})()
    }`
    // console.log(res)

    return res
    // return `{
    //   render: ${renderStr},
    // }`
  }
  catch (e) {
    console.error(e)
    let error = (e as Error).message || 'Error'
    ;[
      ['&', '&amp;'],
      ['<', '&lt;'],
      ['>', '&gt;'],
      ['"', '&quot;'],
      ['\'', '&apos;'],
    ].forEach(([a, b]) => {
      error = error.replaceAll(a, b)
    })
    const renderStr = `(function() {${
      compileTemplate({
        source: `<pre><code class="language-sh">${error}</code></pre>`,
        filename: '2',
        id: '2',
        compilerOptions: {
          mode: 'function',
        },
      }).code
    }})()`
    return `{
      render: ${renderStr},
    }`
  }
}
