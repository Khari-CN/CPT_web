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
    z-999
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
          id="title-dropdown"
          trigger="hover"
          :options="
            menu.children?.map((item) => ({
              label: item.meta?.title,
              key: item.name as string,
            }))
          "
          :render-label="renderLabel"
          :theme-overrides="dropdownOverrides"
          :node-props="nodeProps"
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
          >
            {{ menu.meta?.title }}
          </div>
        </n-dropdown>
      </div>
      <div v-if="isMobile && route.name !== 'home'" ml-20>
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
      <template v-if="!isMobile">
        <n-button class="register-btn" text-20 color="#FFA300" round h-50 w-120
          >注册</n-button
        >
        <n-button class="login-btn" text-20 color="#00A3E7" round h-50 w-120
          >客户登录</n-button
        >
      </template>
      <icon-custom-menu
        v-if="isMobile && !isShowMobileMenu"
        class="menu-icon"
        w-24px
        h-24px
        @click.stop="isShowMobileMenu = !isShowMobileMenu"
      ></icon-custom-menu>
      <icon-custom-cancel
        v-if="isMobile && isShowMobileMenu"
        class="menu-icon"
        w-24px
        h-24px
        @click.stop="isShowMobileMenu = !isShowMobileMenu"
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
    z-999
    overflow-hidden
    bg="#fff"
  >
    <div
      v-for="item in menuRoute"
      border-t="1px solid #E9EAEB"
      leading-52
      text="center 16"
    >
      <div
        flex
        items-center
        justify-center
        :style="{
          color: item.children?.some((item) => item.name === route.name)
            ? '#fff'
            : '',
          background: item.children?.some((item) => item.name === route.name)
            ? '#48a0e1'
            : '',
        }"
        @click.stop="openSubMenu(item.name as string)"
      >
        <span>
          {{ item.meta?.title }}
        </span>
        <icon-custom-arrow-bottom w-30 h-30></icon-custom-arrow-bottom>
      </div>
      <div
        v-for="child in item.children"
        :style="{
          display: selectedSubMenu === item.name ? 'block' : 'none',
          color: child.name === route.name ? '#48a0e1' : '',
        }"
        bg="#F3F6F9"
        @click="handleSelect(child.name as string)"
      >
        {{ child.meta?.title }}
      </div>
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
  import { computed, h, onMounted, ref } from 'vue'
  import type { DropdownOption, DropdownProps } from 'naive-ui'

  const route = useRoute()

  const isShowMobileMenu = ref(false)

  const { isMobile } = storeToRefs(useGlobalStore())
  const renderLabel = (option: DropdownOption) => {
    return h(
      'span',
      {
        style: {
          color: option.key === route.name && !isMobile.value ? '#fff' : '',
        },
      },
      { default: () => option.label }
    )
  }

  const currentMenu = computed(() => {
    return menuRoute.find((menu) =>
      menu.children?.some((item) => item.name === route.name)
    )
  })

  const handleSelect = (key: string) => {
    isShowMobileMenu.value = false
    if (key === route.name) return
    // if (key === 'agreement' && !isMobile.value) {
    //   const base = import.meta.env.MODE === 'uat' ? '/CPT_web' : '/'
    //   window.open(`${base}/product-agreement.pdf`, '_blank')
    //   return
    // }
    window.scrollTo({ top: 0 })
    router.push({ name: key })
  }

  type DropdownThemeOverrides = NonNullable<DropdownProps['themeOverrides']>
  const dropdownOverrides: DropdownThemeOverrides = {
    optionColorHover: '#48a0e1',
    optionTextColorHover: '#fff',
  }

  const nodeProps = (option: DropdownOption) => {
    return {
      id: option.key === route.name ? 'selected-item' : '',
    }
  }

  const selectedSubMenu = ref()

  const openSubMenu = (key: string) => {
    if (key === selectedSubMenu.value) {
      selectedSubMenu.value = ''
    } else {
      selectedSubMenu.value = key
    }
  }

  onMounted(() => {
    window.addEventListener('click', () => {
      selectedSubMenu.value = ''
      isShowMobileMenu.value = false
    })
  })
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
