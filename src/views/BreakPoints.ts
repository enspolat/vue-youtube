import { ref, reactive, watch } from 'vue'

export function useBreakPoints() {
  const width = ref<number>(window.innerWidth)

  const breakpoints = reactive({
    sm: width.value < 640,
    md: width.value >= 640 && width.value < 768,
    lg: width.value >= 768 && width.value < 1024
  })

  watch(width, (currentWindowWidth) => {
    breakpoints.sm = currentWindowWidth < 640
    breakpoints.md = currentWindowWidth >= 640 && currentWindowWidth < 768
    breakpoints.lg = currentWindowWidth >= 768 && currentWindowWidth < 2048
  })

  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })

  return { breakpoints, width }
}
