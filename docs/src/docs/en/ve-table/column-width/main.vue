<script>
import Explain from './explain.md'
import NoWidth from './no-width.md'
import PercentWidth from './percent-width.md'
import PxWidth from './px-width.md'
import LongWord from './long-word.md'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    NoWidth,
    PercentWidth,
    PxWidth,
    LongWord,
  },
}
</script>

<template>
  <div>
    <h2>Column width</h2>
    <Explain />
    <NoWidth />
    <PercentWidth />
    <PxWidth />
    <LongWord />
  </div>
</template>
