<template>
  <div relative :style="wrapperStyle">
    <div :style="contentStyle" z-10>
      <slot> </slot>
    </div>
    <div mt-10 h-106 flex p-30 justify-center items-center bg="#fff" text="16 center" rounded-8>
      <div>
        <slot name="sub"></slot>
      </div>
    </div>
    <div w-0 h-0 z-1 :style="leftArrowStyle"></div>
    <div w-0 h-0 z-5 :style="rightArrowStyle"></div>
  </div>
</template>

<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'

  const props = defineProps<{
    left?: boolean // 左侧箭头
    right?: boolean // 右侧箭头
    background: string
    width: string
    rightColor?: string
    leftColor?: string
  }>()

  console.log(props)

  const blockHeight = '15rem'

  const wrapperStyle: HTMLAttributes['style'] = {
    width: props.width,
    background: props.background,
    height: blockHeight,
    position: 'relative',
    borderTopLeftRadius: props.left ? 0 : '2rem',
    borderBottomLeftRadius: props.left ? 0 : '2rem',
    borderTopRightRadius: props.right ? 0 : '2rem',
    borderBottomRightRadius: props.right ? 0 : '2rem',
  }

  const contentStyle: HTMLAttributes['style'] = {
    lineHeight: blockHeight,
    paddingLeft: props.left ? '5rem' : '0',
    color: '#fff',
    textAlign: 'center',
    fontSize: '6rem',
    fontWeight: '700',
  }

  const leftArrowStyle: HTMLAttributes['style'] = {
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    top: 0,
    height: '15rem',
    border: '7.5rem solid #00000000',
    borderLeft: props.left ? `7.5rem solid ${props.leftColor || '#F4F7F9'}` : 'none',
  }

  const rightArrowStyle: HTMLAttributes['style'] = {
    position: 'absolute',
    textAlign: 'center',
    right: '-15rem',
    top: 0,
    height: '15rem',
    border: '7.5rem solid #00000000',
    borderLeft: props.right ? `7.5rem solid ${props.rightColor || '#3090FF'}` : 'none',
    // borderLeft: props.right ? '7.5rem solid #000' : 'none',
  }
</script>

<style scoped></style>
