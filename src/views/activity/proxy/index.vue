<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>携手共赢 合作邀约</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">代理合作</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-369 pt-86 pl-240>
      <div class="des" w-620 text-18px>
        <div>
          CPT Markets是拥有相关金融牌照、技术领先、安全合规的服务平台。 <br />
          我们致力于通过创新的金融产品与数字科技，为广大用户提供便捷、多元的投资服务
        </div>
        <div mt-20>
          为进一步拓展全国市场，深度服务各地用户，我们现正式启动
          「携手共赢独家代理合作计画」
          。我们寻求拥有本地资源、志在金融领域发展的优秀团队或个人成为我们的战略合作伙伴。你将作为我们在当地的代表，共同推广平台优质的金融产品与服务，共享丰厚利润
        </div>
      </div>
      <img
        v-if="isMobile"
        w-full
        block
        src="@/assets/images/proxy/m/block1.png"
        alt=""
      />
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>代理合作的优势与好处</div>
      <div class="des" mt-20 mb-40 text="center 16px">
        我们为合作伙伴提供的不仅是一个产品，更是一个全方位赋能、高回报、强支持的事业平台
      </div>
      <div
        class="wrapper"
        flex
        flex-wrap
        justify-center
        gap-x-30
        gap-y-40
        mt-40
      >
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/proxy/block2-icon1.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>高额佣金赠你</div>
            <div class="sub" text-16 mt-5>
              享受业内顶尖的交易佣金及业绩奖金，利润分成清晰透明，准时发放
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/proxy/block2-icon2.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>强势品牌支持</div>
            <div class="sub" text-16 mt-5>
              免费使用我们全球性的品牌形象与市场推广，无需从零开始，借助现成品牌影响力快速启动业务
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/proxy/block2-icon3.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>全套合规资质</div>
            <div class="sub" text-16 mt-5>
              平台持有相关金融监管牌照，业务合法合规，为你提供坚实后盾，让你发展更安心、更有底气
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/proxy/block2-icon4.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>专业培训体系</div>
            <div class="sub" text-16 mt-5>
              提供从产品知识、市场策略、销售技巧到合规风控的全周期培训，并有专属区域经理进行一对一辅导
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/proxy/block2-icon5.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>专属代理工具</div>
            <div class="sub" text-16 mt-5>
              给你专属代理后台和APP，实时查看业绩、客户动态、收益明细，提供线上获客工具、营销素材一键分享
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/proxy/block2-icon6.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>技术与客服支持</div>
            <div class="sub" text-16 mt-5>
              强大的总部技术团队确保平台稳定流畅，专业客服团队提供24小时支持，协助你解决客户问题，提升服务体验
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block3" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>我们理想的合作伙伴</div>
      <div class="wrapper" flex flex-wrap justify-center gap-40 mt-40 min-w="1440" m-auto>
        <div class="item1 item" w-450 h-220 p-30>
          <div text-28 font-700 w-230>
            认可金融科技行业，对财富管理领域有浓厚兴趣
          </div>
        </div>
        <div class="item2 item" w-450 h-220 p-30>
          <div text-28 font-700 w-230>
            拥有良好的当地人脉资源或丰富的金融从业经验
          </div>
        </div>
        <div class="item3 item" w-450 h-220 p-30>
          <div text-28 font-700 w-230>具备一定的市场开拓能力和团队管理潜力</div>
        </div>
        <div class="item4 item" w-450 h-220 p-30>
          <div text-28 font-700 w-230>企业家、商会、社区领袖、网红等群体</div>
        </div>
        <div class="item5 item" w-450 h-220 p-30>
          <div text-28 font-700 w-230>志在金融领域发展的优秀团队或个人</div>
        </div>
        <div class="item6 item" w-450 h-220 p-30>
          <div text-28 font-700 w-230>
            有强烈的创业意愿和事业心，注重诚信，有责任心
          </div>
        </div>
      </div>
    </div>
    <div class="block4" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>随时联系</div>
      <div class="des" mt-20 text="16px center">
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
    <div class="block5" h-600 text="center #fff" mt-128>
      <div class="content" text="48" font-700 pt-200>
        我们将以最大的诚意、最优的政策和最全的支持， <br v-if="!isMobile" />
        与您携手合作，共享财富盛宴！
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
      <div class="title" text="48 center #fff" font-700>
        只需三分钟开户 迈向财富的第一步
      </div>
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
      background: url('@/assets/images/advantage/banner.png') no-repeat center;
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

    .block1 {
      background: url('@/assets/images/proxy/block1-bg.png') no-repeat center;
      background-size: cover;
    }
    .block3 {
      .item1 {
        background: url('@/assets/images/proxy/block3-bg1.png') no-repeat center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/proxy/block3-bg2.png') no-repeat center;
        background-size: cover;
      }
      .item3 {
        background: url('@/assets/images/proxy/block3-bg3.png') no-repeat center;
        background-size: cover;
      }
      .item4 {
        background: url('@/assets/images/proxy/block3-bg4.png') no-repeat center;
        background-size: cover;
      }
      .item5 {
        background: url('@/assets/images/proxy/block3-bg5.png') no-repeat center;
        background-size: cover;
      }
      .item6 {
        background: url('@/assets/images/proxy/block3-bg6.png') no-repeat center;
        background-size: cover;
      }
    }
    .block4 {
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
    .block5 {
      background: url('@/assets/images/proxy/block5-bg.png') no-repeat center;
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
