<template>
  <div>
    <home-title></home-title>
    <div class="banner" text="center #fff" h-600 pt-100>
      <div class="title" text="96" font="700">全天候为你提供专业服务</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">联络方式</div>
        <div class="line-right"></div>
      </div>
    </div>
    <div class="block1" pt-60 pb-80>
      <div class="des" text-24 text-center>
        我们以客户为中心，打造行业领先的客服体系，为你提供超越期待的服务体验
      </div>
      <div class="wrapper" flex justify-center gap-180 mt-95 text-center>
        <div>
          <img
            src="@/assets/images/contact/block1-icon1.png"
            w-120
            h-120
            alt=""
          />
          <div text-16 mt-20>24小时服务</div>
        </div>
        <div>
          <img
            src="@/assets/images/contact/block1-icon2.png"
            w-120
            h-120
            alt=""
          />
          <div text-16 mt-20>全程陪伴</div>
        </div>
        <div>
          <img
            src="@/assets/images/contact/block1-icon3.png"
            w-120
            h-120
            alt=""
          />
          <div text-16 mt-20>精准解答</div>
        </div>
        <div>
          <img
            src="@/assets/images/contact/block1-icon4.png"
            w-120
            h-120
            alt=""
          />
          <div text-16 mt-20>随时联系</div>
        </div>
        <div>
          <img
            src="@/assets/images/contact/block1-icon5.png"
            w-120
            h-120
            alt=""
          />
          <div text-16 mt-20>专家团队</div>
        </div>
      </div>
    </div>
    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>24小时服务</div>
      <div class="des" mt-20 text="16 center">
        我们深知金融服务不分昼夜，因此提供24小时全天候客服支持，无论何时何地，总有人为你提供专业帮助
      </div>
      <div class="wrapper" flex justify-center gap-40 mt-40>
        <div class="item1 item" w-450 h-220 p-30>
          <div text-30 font-700>
            全天候<br />
            客服服务
          </div>
        </div>
        <div class="item2 item" w-450 h-220 p-30>
          <div text-30 font-700>
            紧急事件 <br />
            专项通道
          </div>
        </div>
        <div class="item3 item" w-450 h-220 p-30>
          <div text-30 font-700>
            节假日 <br />
            正常服务
          </div>
        </div>
      </div>
    </div>
    <div class="block3" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>全程陪伴</div>
      <div class="des" mt-20 text="16 center">
        我们致力于成为你投资路上的忠实伙伴，从第一次咨询到长期资产投资，始终陪伴在你身边，提供持续、稳定的专业支持
      </div>

      <div class="wrapper" flex justify-center gap-40 mt-40 text="#fff">
        <div class="item1 item" w-700 h-200 pl-40 pt-78>
          <div text-30 font-700>投资全程<br v-if="isMobile" />咨询服务</div>
        </div>
        <div class="item2 item" w-700 h-200 pl-40 pt-78>
          <div text-30 font-700>专属<br v-if="isMobile" />客服经理</div>
        </div>
      </div>
    </div>
    <div class="block4" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>精准解答</div>
      <div class="des" mt-20 text="16 center">
        我们坚持"第一次就做对"的服务理念，确保你的每个问题都能获得最准确、最专业的解答，让你省时省心，高效解决问题
      </div>
      <div class="wrapper" flex justify-center gap-40 mt-40>
        <div class="item1 item" w-450 h-220 p-30>
          <div text-30 font-700>
            持金融从业
            <br />
            资格证
          </div>
        </div>
        <div class="item2 item" w-450 h-220 p-30>
          <div text-30 font-700>
            中文客服
            <br />
            解答
          </div>
        </div>
        <div class="item3 item" w-450 h-220 p-30>
          <div text-30 font-700>
            定期专业
            <br />
            培训考核
          </div>
        </div>
      </div>
    </div>
    <div class="block5" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>专家团队</div>
      <div class="des" mt-20 text="16 center">
        我们汇聚行业顶尖人才，组建了一支高素质、高标准的客服团队，为你提供专业级别的服务体验
      </div>
      <div class="wrapper" flex justify-center gap-40 mt-40 text="#fff">
        <div class="item1 item" w-700 h-200 pl-40 pt-78>
          <div text-30 font-700>投资顾问<br v-if="isMobile" />专业支持</div>
        </div>
        <div class="item2 item" w-700 h-200 pl-40 pt-78>
          <div text-30 font-700>技术团队<br v-if="isMobile" />实时协助</div>
        </div>
      </div>
    </div>
    <div class="block6" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>随时联系</div>
      <div class="des" mt-20 text="16 center">
        我们提供全天候多渠道客服支持，能快速联系到我们，及时解决你的问题和需求
      </div>
      <div class="wrapper" flex justify-center gap-40 mt-40>
        <div class="item1 item" w-700 h-200 px="40" py="30">
          <div text-30 font-700>联系我们</div>
          <n-button color="#00A3E7" round h-50 w-160 mt-20>在线客服</n-button>
        </div>
        <div class="item2 item" w-700 h-200 px="40" py="30">
          <div text-30 font-700>电邮</div>
          <a href="mailto:cs@cptglobales.com" block mt-20 text-20
            >cs@cptglobales.com</a
          >
        </div>
      </div>
    </div>
    <div class="block7" h-600>
      <div class="content" text="48 center #fff" font-700 pt-230>
        我们提供最便捷的方式，确保你无论何时何地都能获得所需服务， <br v-if="!isMobile" />
        真正实现"客户在哪里，服务就在哪里"
      </div>
    </div>
    <div class="advantage6" py-80 bg="#F5F7F9">
      <div class="wrapper" flex justify-center gap-40 rounded-10 text="#fff">
        <div
          class="description-item"
          flex
          w-256
          h-100
          gap-20
          items-center
          bg-white
          px-20
          rounded-10
        >
          <img
            h-60
            w-60
            src="@/assets/images/advantage/advantage6-icon1.png"
            alt=""
          />
          <div>
            <div class="main">100%</div>
            <div class="sub">监管合规</div>
          </div>
        </div>
        <div
          class="description-item"
          flex
          w-256
          h-100
          gap-20
          items-center
          px-20
          rounded-8
        >
          <img
            h-60
            w-60
            src="@/assets/images/advantage/advantage6-icon2.png"
            alt=""
          />
          <div>
            <div class="main">$0</div>
            <div class="sub">0手续费</div>
          </div>
        </div>
        <div
          class="description-item"
          flex
          w-256
          h-100
          gap-20
          items-center
          px-20
          rounded-8
        >
          <img h-60 w-60 src="@/assets/images/advantage/advantage6-icon3.png" />
          <div>
            <div class="main">24小时</div>
            <div class="sub">客服支持</div>
          </div>
        </div>
        <div
          class="description-item"
          flex
          w-256
          h-100
          gap-20
          items-center
          px-20
          rounded-8
        >
          <img h-60 w-60 src="@/assets/images/advantage/advantage6-icon4.png" />
          <div>
            <div class="main">17年</div>
            <div class="sub">以上经验</div>
          </div>
        </div>
        <div
          class="description-item"
          flex
          w-256
          h-100
          gap-20
          items-center
          px-20
          rounded-8
        >
          <img h-60 w-60 src="@/assets/images/advantage/advantage6-icon5.png" />
          <div>
            <div class="main">极速</div>
            <div class="sub">出入金服务</div>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage7" h-370 pt-60 pb-80>
      <div class="title" text="48 center #fff" font-700>只需三分钟开户 迈向财富的第一步</div>
      <div class="wrapper" relative flex justify-center gap-40 mt-40>
        <div
          class="download-item"
          bg-white
          flex
          items-center
          h-120
          w-330
          gap-20
          px-20
          rounded-12
        >
          <img w-80 src="@/assets/images/home/ios.png" alt="" />
          <div>
            <div class="main-content" font-500 text-30>App Store</div>
            <div class="sub-content" font-400 text="16 #808080">下载></div>
          </div>
        </div>
        <div
          class="download-item"
          bg-white
          flex
          items-center
          h-120
          w-330
          gap-20
          px-20
          rounded-12
        >
          <img w-80 src="@/assets/images/home/google.png" alt="" />
          <div>
            <div class="main-content" font-500 text-30>Google Play</div>
            <div class="sub-content" font-400 text="16 #808080">下载></div>
          </div>
        </div>
        <div
          class="download-item"
          bg-white
          flex
          items-center
          h-120
          w-330
          gap-20
          px-20
          rounded-12
        >
          <img w-80 src="@/assets/images/home/person-1.png" alt="" />
          <div>
            <div class="main-content" font-500 text-30>真实账户</div>
            <div class="sub-content" font-400 text="16 #808080">开设></div>
          </div>
        </div>
        <div
          class="download-item"
          bg-white
          flex
          items-center
          h-120
          w-330
          gap-20
          px-20
          rounded-12
        >
          <img w-80 src="@/assets/images/home/person-2.png" alt="" />
          <div>
            <div class="main-content" font-500 text-30>模拟账户</div>
            <div class="sub-content" font-400 text="16 #808080">开设></div>
          </div>
        </div>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '@/store'
  import { storeToRefs } from 'pinia'

  const { isMobile } = storeToRefs(useGlobalStore())
</script>

<style scoped>
  @import url('./mobile.scss');
  @media screen and (min-width: 768px) {
    .banner {
      background: url('@/assets/images/contact/banner.png') no-repeat center;
      background-size: cover;
      .line-right {
        border-top: 2px solid;
        margin-top: 7.5rem;
        /* height: 2px; */
        width: 35rem;
        border-image: linear-gradient(
            90deg,
            rgba(216.00000232458115, 216.00000232458115, 216.00000232458115, 1),
            rgba(216.00000232458115, 216.00000232458115, 216.00000232458115, 0)
          )
          2 2;
      }
      .line-left {
        border-top: 2px solid;
        margin-top: 7.5rem;
        /* height: 2px; */
        width: 35rem;
        border-image: linear-gradient(
            90deg,
            rgba(216.00000232458115, 216.00000232458115, 216.00000232458115, 0),
            rgba(216.00000232458115, 216.00000232458115, 216.00000232458115, 1)
          )
          2 2;
      }
    }
    .block2 {
      .item1 {
        background: url('@/assets/images/contact/block2-bg1.png') no-repeat
          center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/contact/block2-bg2.png') no-repeat
          center;
        background-size: cover;
      }
      .item3 {
        background: url('@/assets/images/contact/block2-bg3.png') no-repeat
          center;
        background-size: cover;
      }
    }
    .block3 {
      .item1 {
        background: url('@/assets/images/contact/block3-bg1.png') no-repeat
          center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/contact/block3-bg2.png') no-repeat
          center;
        background-size: cover;
      }
    }
    .block4 {
      .item1 {
        background: url('@/assets/images/contact/block4-bg1.png') no-repeat
          center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/contact/block4-bg2.png') no-repeat
          center;
        background-size: cover;
      }
      .item3 {
        background: url('@/assets/images/contact/block4-bg3.png') no-repeat
          center;
        background-size: cover;
      }
    }
    .block5 {
      .item1 {
        background: url('@/assets/images/contact/block5-bg1.png') no-repeat
          center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/contact/block5-bg2.png') no-repeat
          center;
        background-size: cover;
      }
    }
    .block6 {
      .item1 {
        background: url('@/assets/images/contact/block6-bg1.png') no-repeat
          center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/contact/block6-bg2.png') no-repeat
          center;
        background-size: cover;
      }
    }
    .block7 {
      background: url('@/assets/images/contact/block7-bg.png') no-repeat center;
      background-size: cover;
    }
    .advantage7 {
      background: url('@/assets/images/advantage/advantage7-bg.png') no-repeat
        center;
      background-size: cover;
    }
    .description-item {
      background: linear-gradient(180deg, #2c64ff 0%, #3b81fe 100%);
    }
  }
</style>
