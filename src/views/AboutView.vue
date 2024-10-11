<script setup lang="ts">
import { useBreakPoints } from './BreakPoints'

const { breakpoints, width } = useBreakPoints()
</script>

<template>
  <div v-if="breakpoints.sm">Small Screen</div>
  <div v-if="breakpoints.md">Medium Screen</div>
  <div v-if="breakpoints.lg">Large Screen</div>

  <p>{{ breakpoints }}</p>
  <h1>{{ width }}</h1>
</template>
