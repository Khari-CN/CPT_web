<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useGlobalStore } from './store'
  import { isMobileDevice } from './utils'

  const globalStore = useGlobalStore()

  onBeforeMount(() => {
    globalStore.isMobile = isMobileDevice()
    console.log('isMobile', globalStore.isMobile)
    window.onresize = () => {
      globalStore.isMobile = isMobileDevice()
      console.log('isMobile', globalStore.isMobile)
    }
  })
</script>

<template>
  <n-config-provider inline-theme-disabled class="h-full">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </n-config-provider>
</template>

<style></style>
