<template>
  <div :style="{ padding: isMobile ? '5rem 4rem 12rem 4rem' : '15rem 0' }" bg="#F3F6F9" w-full py-60 text="#2c2c2c">
    <div v-if="!isMobile" w-1440 m-auto>
      <div flex justify-center gap-260>
        <div v-for="item in footerList">
          <div text="18" font-700 mb-10>{{ item.title }}</div>
          <div flex flex-col gap-10 mb-40>
            <div
              v-for="subItem in item.items"
              cursor-pointer
              hover:c-blue
              text="16"
              @click="routerToName(subItem.routeName)"
            >
              {{ subItem.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div flex>
        <div>
          <div>
            <div text="18" font-700>{{ footerList[0]?.title }}</div>
            <div mt-10>
              <div v-for="item in footerList[0]?.items" text="16" cursor-pointer @click="routerToName(item.routeName)">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div mt-20>
            <div text="18" font-700>{{ footerList[1]?.title }}</div>
            <div mt-10>
              <div v-for="item in footerList[1]?.items" text="16" cursor-pointer @click="routerToName(item.routeName)">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div mt-20>
            <div text="18" font-700>{{ footerList[4]?.title }}</div>
            <div mt-10>
              <div v-for="item in footerList[4]?.items" text="16" cursor-pointer @click="routerToName(item.routeName)">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div ml-134>
          <div>
            <div text="18" font-700>{{ footerList[2]?.title }}</div>
            <div mt-10>
              <div v-for="item in footerList[2]?.items" text="16" cursor-pointer @click="routerToName(item.routeName)">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div mt-20>
            <div text="18" font-700>{{ footerList[3]?.title }}</div>
            <div mt-10>
              <div v-for="item in footerList[3]?.items" text="16" cursor-pointer @click="routerToName(item.routeName)">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :style="{ width: isMobile ? 'auto' : '360rem', margin: 'auto' }">
      <div mt-14 flex items-center>
        <img w-24 h-24 src="@/assets/images/home/headset.png" alt="" srcset="" />
        <span ml-10 font-700 text-18>服务专线</span>
      </div>
      <div text="16" mt-10>在线客服 cs@cptglobales.com</div>
      <div mt-43 mb-26 border-t="1px solid #D8D8D8"></div>
      <div text="18" font="700">监管资讯:</div>
      <div mt-10 text="16">
        受南非金融部門行为监管局（FSCA） 监管，牌照号 45954；受伯利兹国际金融服务委员会（IFSC） 监管，许可证号为
        FSC000314/17；
        <br />
        受昂儒昂离岸金融管理局（AOFA） 监管，许可证号为 L15643/CPTG；受英国金融行为监管局（FCA）授权与监管，注册号
        6707165
      </div>
      <div text="18" font="700" mt-20>法律免责声明:</div>
      <div mt-10 text="16">
        本网站由 CPT Global Limited 营运。 CPT / CPT Markets
        是一个品牌名称，旗下拥有多个在不同司法管辖区获得授权并注册的实体企业。 CPT
        提供杠杆衍生品合约，包括差价合约（CFD）和即期外汇（Forex）。这些是复杂的金融工具，涉及重大风险，包括因杠杆效应可能导致的快速损失。交易此类工具可能并不适合所有投资者。在参与任何交易活动之前，您应当谨慎评估自身的财务状况、投资目标及风险承受能力。如果您对相关风险有任何疑问，强烈建议您寻求独立的财务建议。
      </div>
      <div text="18" font="700" mt-20>风险披露:</div>
      <div mt-10 text="16">
        处提供的资讯（无论是否来自第三方）均不应被视为投资建议，亦不构成购买或出售任何证券、金融产品或金融工具的邀约，也不构成参与任何特定交易策略的邀请。我们建议所有使用者寻求独立的专业意见。未经
        CPT 批准，不得复制或分发本资讯。CPT
        提供的外汇与差价合约（CFD）透过杠杆或保证金方式进行交易，这类交易具有高度的资本风险。您与我们签订的合约价格可能会迅速变动，您的盈亏可能超出您的初始投资或存款。如果您的资金不足以满足保证金要求，我们可能会立即且无须事先通知您关闭您的未平仓仓位。您可能会损失超过您的初始存款。杠杆交易并不适合所有投资者。请确保您充分理解并接受相关风险，并能够承受潜在损失后再进行交易。
      </div>
      <div text="16" mt-20>版权所有 © 2025 CPT Markets Group</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { router } from '@/router'
  import { useGlobalStore } from '@/store'
  import { storeToRefs } from 'pinia'

  const globalStore = useGlobalStore()
  const { isMobile } = storeToRefs(globalStore)

  const footerList = [
    {
      title: '关于我们',
      items: [
        { name: '认识我们', routeName: 'aboutUs' },
        { name: '品牌优势', routeName: 'advantage' },
        { name: '联络方式', routeName: 'contact' },
        { name: '法律保障', routeName: 'law' },
      ],
    },
    {
      title: '优惠活动',
      items: [
        { name: '新客活动', routeName: '' },
        { name: '推荐活动', routeName: '' },
        { name: '代理合作', routeName: 'proxy' },
      ],
    },
    {
      title: '交易产品',
      items: [
        { name: '外汇', routeName: 'forex' },
        { name: '大宗商品', routeName: 'commodity' },
        { name: '指数', routeName: 'index' },
        { name: '合约细则', path: '/src/assets/images/product-agreement.pdf', routeName: 'agreement' },
      ],
    },
    {
      title: '交易账户',
      items: [
        { name: '真实账户', routeName: 'real' },
        { name: '模拟账户', routeName: 'simulation' },
        { name: '账户类型', routeName: 'type' },
        { name: '尊贵账户', routeName: 'vip' },
        { name: '入金出金', routeName: 'depositWithdraw' },
        { name: '账户安全', routeName: 'security' },
      ],
    },
    {
      title: '平台下载',
      items: [{ name: '手机交易程式', routeName: 'phone' }],
    },
  ]

  const routerToName = (name: string) => {
    if (name === 'agreement' && !isMobile) {
      window.open('/src/assets/images/product-agreement.pdf', '_blank')
      return
    }
    window.scrollTo({ top: 0 })
    router.push({ name })
  }
</script>

<style scoped></style>
