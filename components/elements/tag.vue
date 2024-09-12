<script setup>
const props = defineProps([
    'text'
])
</script>

<template>
<div class="tag">
  # {{text}}
</div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.tag
  background-color: $gray
  border-radius: 10px
  padding: 4px 10px
  box-sizing: border-box
  width: fit-content
  @include font-styles(16px, 400, 20px)
  color: $black
</style>