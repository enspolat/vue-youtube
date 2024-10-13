<template>
  <layout />
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { onMounted } from 'vue'
import supaBaseClient from '../src/plugin/supaBaseClient'

const route = useRoute()
const layout = ref()

watch(
  () => route.meta.layout,
  (value) => {
    layout.value = defineAsyncComponent(() => import(`@/views/Layouts/${value}.vue`))
  }
)
</script>
