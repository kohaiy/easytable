<script>
import FooterCell from '../footer-summary/custom-cell.md'
import BodyCell from './body-cell.md'
import HeaderCell from './header-cell.md'
import More from './more.md'

export default {
  name: 'CustomCell',
  components: {
    BodyCell,
    HeaderCell,
    FooterCell,
    More,
  },
}
</script>

<template>
  <div>
    <h2>Cell Custom</h2>
    <BodyCell />
    <HeaderCell />
    <FooterCell />
    <More />
  </div>
</template>
