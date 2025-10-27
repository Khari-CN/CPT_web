<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>尊享非凡投资特权</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">尊贵账户</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-369 pt-106>
      <div class="des" w-1152 text-36 text-center m-auto font-700>
        尊贵账户是我们为高净值客户和专业投资者打造的顶级服务<span
          v-if="isMobile"
          >，</span
        >
        <br v-if="!isMobile" />
        提供超越常规账户的卓越交易体验和专属特权<span v-if="isMobile">。</span>
        <br v-if="!isMobile" />
        该账户类型专为资金量充足、交易活跃且需求精准的投资者设计
      </div>
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>尊贵账户独享</div>
      <div class="des" mt-20 mb-40 text="center 16">
        尊贵账户的优先权确保你在任何市场环境下都能享受稳定、快速、安全的交易体验，为你的投资决策提供专属特权
      </div>
      <div
        class="wrapper"
        flex
        flex-wrap
        justify-center
        gap-x-45
        gap-y-40
        mt-40
      >
        <div class="item" bg-white rounded-16 w-450 h-350 text-center py-45>
          <img src="@/assets/images/vip/block2-icon1.png" w-160 h-160 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>极致交易条件</div>
            <div class="des" text-16 mt-5>
              专属服务器资源分配 <br />
              极速订单执行
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-350 text-center py-40>
          <img src="@/assets/images/vip/block2-icon2.png" w-160 h-160 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>专属个性化服务</div>
            <div class="des" text-16 mt-5>
              专属客户经理一对一服务 <br />
              优先客户支持通道
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-350 text-center py-40>
          <img src="@/assets/images/vip/block2-icon3.png" w-160 h-160 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>高级交易工具</div>
            <div class="des" text-16 mt-5>
              专业级交易平台权限 <br />
              高级图表分析
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-350 text-center py-40>
          <img src="@/assets/images/vip/block2-icon4.png" w-160 h-160 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>专属市场分析</div>
            <div class="des" text-16 mt-5>
              首席分析师市场解读 <br />
              独家投资市场情报
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-350 text-center py-40>
          <img src="@/assets/images/vip/block2-icon5.png" w-160 h-160 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>资金优先处理</div>
            <div class="des" text-16 mt-5>
              专属通道即时出入金处理 <br />
              大额资金特殊安排
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-350 text-center py-40>
          <img src="@/assets/images/vip/block2-icon6.png" w-160 h-160 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>技术优先权</div>
            <div class="des" text-16 mt-5>
              专属技术支持团队 <br />
              交易系统资源优先分配
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 注册 -->
    <div class="register" h-870 pt-60>
      <div class="title" text="center 48" font-700>加入200万+投资者选择</div>
      <div class="content" flex justify-center items-center mt-60 gap-64>
        <div class="register-left">
          <div class="head" mb-40 text-36 font-700>只需3步，即可开户交易</div>
          <div class="step" flex>
            <div relative pt-10 pb-80>
              <div w-16 h-16 bg="#FFA300" rounded-full></div>
              <div
                absolute
                left-7
                top-34
                h-70
                border-l="2px solid #FFA300"
              ></div>
            </div>
            <div ml-22>
              <div text-24 font-700>注册开户</div>
              <div text="16 #2c2c2c">填写你的个人资讯并验证</div>
            </div>
          </div>
          <div class="step" flex>
            <div relative pt-10 pb-80>
              <div w-16 h-16 bg="#FFA300" rounded-full></div>
              <div
                absolute
                left-7
                top-34
                h-70
                border-l="2px solid #1677FF"
              ></div>
            </div>
            <div ml-22>
              <div text-24 font-700>账户入金</div>
              <div text="16 #2c2c2c">多种存款选项，即时为你的账户入金</div>
            </div>
          </div>
          <div class="step" flex>
            <div relative pt-6>
              <img
                w-16
                h-16
                src="@/assets/images/home/register-icon.png"
                alt=""
              />
            </div>
            <div ml-22>
              <div text-24 font-700>领取奖励</div>
              <div text="16 #2c2c2c">享受各账户级别点差优惠，开始交易</div>
            </div>
          </div>
          <div>
            <n-button
              :style="{
                marginTop: isMobile ? '5rem' : '20rem',
                width: isMobile ? '100%' : '75rem',
                height: isMobile ? '12.5rem' : '15rem',
              }"
              text-24
              round
              color="#00A3E7"
              >立即开户</n-button
            >
          </div>
        </div>
        <div class="register-right" relative w-966 h-541>
          <img
            absolute
            left-388
            w-280
            h-572
            src="@/assets/images/home/phone.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="block3" h-600 text="center #fff">
      <div class="content" text="48" font-700 pt-200>
        选择尊贵账户，不仅是选择了一个交易账户 <span v-if="isMobile">，</span>
        <br v-if="!isMobile" />更是选择了一个全方位的合作伙伴<span
          v-if="isMobile"
          >。</span
        >
        <br v-if="!isMobile" />
        我们致力于为你提供最优质的服务，助你实现投资目标
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
      background: url('@/assets/images/real/banner.png') no-repeat center;
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
      background: url('@/assets/images/real/block1-bg.png') no-repeat center;
      background-size: cover;
    }

    .register {
      background: #fff;
      .register-right {
        background: url('@/assets/images/home/register-bg.png') no-repeat center;
        background-size: contain;
      }
    }

    .block3 {
      background: url('@/assets/images/type/block3-bg.png') no-repeat center;
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
