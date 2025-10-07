<template>
  <div
    class="title-wrapper"
    w-full
    bg="#fff"
    fixed
    px-70
    h-100
    flex
    items-center
    justify-between
    z-10
  >
    <div flex items-center>
      <icon-custom-logo
        class="logo"
        h-80
        mr-80
        cursor-pointer
        @click="router.push({ name: 'home' })"
      ></icon-custom-logo>

      <div class="menu" flex items-center gap-60 text-20>
        <n-dropdown
          v-for="menu in menuRoute"
          trigger="hover"
          :options="
            menu.children?.map((item) => ({
              label: item.meta?.title,
              key: item.name as string,
            }))
          "
          :render-label="renderLabel"
          @select="handleSelect"
        >
          <div
            cursor-pointer
            hover:c-blue
            :style="{
              color: menu.children?.some((item) => item.name === route.name)
                ? '#60a5fa'
                : '',
            }"
            @click="router.push({ name: 'aboutUs' })"
          >
            {{ menu.meta?.title }}
          </div>
        </n-dropdown>

        <!-- <div cursor-pointer hover:c-blue>优惠活动</div>
        <div cursor-pointer hover:c-blue>交易产品</div>
        <div cursor-pointer hover:c-blue>交易账户</div>
        <div cursor-pointer hover:c-blue>平台下载</div> -->
      </div>
      <div v-if="isMobile" ml-20>
        <n-dropdown
          trigger="click"
          :options="
            currentMenu?.children?.map((item) => ({
              label: item.meta?.title,
              key: item.name as string,
            }))
          "
          :render-label="renderLabel"
          @select="handleSelect"
        >
          <div flex items-center>
            <span font-600 text-17>{{ currentMenu?.meta?.title }}</span>
            <icon-custom-triangle w-16 h-16></icon-custom-triangle>
          </div>
        </n-dropdown>
      </div>
    </div>
    <div flex gap-20 text-16 items-center class="btn-group">
      <template v-if="route.name === 'home'">
        <n-button class="register-btn" color="#FFA300" round h-50 w-120
          >注册</n-button
        >
        <n-button class="login-btn" color="#00A3E7" round h-50 w-120
          >客户登录</n-button
        >
      </template>
      <icon-custom-menu
        v-if="isMobile && !isShowMobileMenu"
        class="menu-icon"
        w-24px
        h-24px
        @click="isShowMobileMenu = !isShowMobileMenu"
      ></icon-custom-menu>
      <icon-custom-cancel
        v-if="isMobile && isShowMobileMenu"
        class="menu-icon"
        w-24px
        h-24px
        @click="isShowMobileMenu = !isShowMobileMenu"
      ></icon-custom-cancel>
    </div>
  </div>
  <div
    v-show="isShowMobileMenu"
    shadow-xl
    rounded-b-24
    w-full
    fixed
    top-44
    z-10
    bg="#fff"
  >
    <div
      v-for="item in menuRoute"
      border-t="1px solid #E9EAEB"
      leading-52
      text="center 16"
      @click="handleSelect(item.name as string); isShowMobileMenu = false"
    >
      {{ item.meta?.title }}
    </div>
  </div>
  <div class="empty" h-100></div>
</template>

<script setup lang="ts">
  import { router } from '@/router'
  import { useGlobalStore } from '@/store'
  import { storeToRefs } from 'pinia'
  import { menuRoute } from '@/router/routes'
  import { useRoute } from 'vue-router'
  import { computed, h, ref } from 'vue'
  import type { DropdownOption } from 'naive-ui'

  const route = useRoute()

  const isShowMobileMenu = ref(false)

  const { isMobile } = storeToRefs(useGlobalStore())
  const renderLabel = (option: DropdownOption) => {
    console.log(option, route)
    return h(
      'span',
      { style: { color: option.key === route.name ? '#60a5fa' : '' } },
      { default: () => option.label }
    )
  }

  const currentMenu = computed(() => {
    return menuRoute.find((menu) =>
      menu.children?.some((item) => item.name === route.name)
    )
  })

  const handleSelect = (key: string) => {
    if (key === route.name) return
    if (key === 'agreement') {
      window.open('/src/assets/images/product-agreement.pdf', '_blank')
      return
    }
    window.scrollTo({ top: 0 })
    router.push({ name: key })
  }
</script>

<style scoped lang="scss">
  @media screen and (max-width: 768px) {
    .empty {
      height: 11rem;
    }
    .title-wrapper {
      height: 11rem;
      padding: 0 4rem;
      .logo {
        height: 8rem;
        width: auto;
        margin-right: 15rem;
      }
      .menu {
        display: none;
      }
      .btn-group {
        gap: 2.5rem;
        font-size: 3.25rem;
        .register-btn {
          width: 15rem;
          height: 7.5rem;
          padding: 0;
        }
        .login-btn {
          text-align: center;
          width: 20rem;
          height: 7.5rem;
          padding: 0;
        }
        .menu-icon {
          margin-left: 1.5rem;
        }
      }
    }
  }
</style>
