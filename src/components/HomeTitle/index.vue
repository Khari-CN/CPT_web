<template>
  <div class="title-wrapper" px-70 h-100 flex items-center justify-between>
    <div flex items-center>
      <icon-custom-logo
        class="logo"
        h-80
        mr-80
        cursor-pointer
        @click="router.push({ name: 'home' })"
      ></icon-custom-logo>

      <div class="menu" flex items-center gap-60 text-20>
        <div
          cursor-pointer
          hover:c-blue
          @click="router.push({ name: 'aboutUs' })"
        >
          关于我们
        </div>
        <div cursor-pointer hover:c-blue>优惠活动</div>
        <div cursor-pointer hover:c-blue>交易产品</div>
        <div cursor-pointer hover:c-blue>交易账户</div>
        <div cursor-pointer hover:c-blue>平台下载</div>
      </div>
    </div>
    <div flex gap-20 text-16 items-center class="btn-group">
      <n-button class="register-btn" color="#FFA300" round h-50 w-120
        >注册</n-button
      >
      <n-button class="login-btn" color="#00A3E7" round h-50 w-120
        >客户登录</n-button
      >
      <icon-custom-menu
        v-if="isMobile"
        class="menu-icon"
        w-24px
        h-24px
      ></icon-custom-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { router } from '@/router'
  import { useGlobalStore } from '@/store'
  import { storeToRefs } from 'pinia'

  const { isMobile } = storeToRefs(useGlobalStore())
</script>

<style scoped lang="scss">
  @media screen and (max-width: 768px) {
    .title-wrapper {
      height: 11rem;
      padding: 0 4rem;
      .logo {
        height: 8rem;
        width: auto;
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
