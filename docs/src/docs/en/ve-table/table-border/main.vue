<script>
import Explain from './explain.md'
import DefaultBorder from './default.md'
import BorderX from './border-x.md'
import BorderY from './border-y.md'
import BorderAround from './border-around.md'
import BorderAll from './border-all.md'
import AroundX from './around-x.md'
import AroundY from './around-y.md'
import BorderRadius from './border-radius.md'

export default {
  name: 'Border',
  components: {
    Explain,
    DefaultBorder,
    BorderX,
    BorderY,
    BorderAround,
    BorderAll,
    AroundX,
    AroundY,
    BorderRadius,
  },
}
</script>

<template>
  <div>
    <h2>Table Border</h2>
    <Explain />
    <DefaultBorder />
    <BorderX />
    <BorderY />
    <BorderAround />
    <BorderAll />
    <AroundX />
    <AroundY />
    <BorderRadius />
  </div>
</template>
