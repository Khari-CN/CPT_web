<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>零风险 体验真实市场环境</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">模拟账户</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-369 pt-80>
      <div class="des" w-1152 text-36 text-center m-auto font-700>
        模拟账户，也称为练习账户或虚拟账户， <br v-if="!isMobile" />
        是我们为客户提供的一种使用虚拟资金进行市场模拟交易的账户类型。<br
          v-if="!isMobile"
        />
        它为用户提供与真实交易环境完全一致的市场行情和交易功能，<br
          v-if="!isMobile"
        />
        但所有交易行为均不涉及真实资金。
      </div>
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>开通模拟账户的优点</div>
      <div class="des" mt-20 mb-40 text="center 16">
        相比于真实账户，开通并操作模拟账户具有以下的优势：
      </div>
      <div
        class="wrapper"
        flex
        flex-wrap
        px-240
        justify-center
        gap-x-45
        gap-y-40
        mt-40
      >
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/simulation/block2-icon1.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>零风险学习环境</div>
            <div class="sub" text-16 mt-5>
              使用虚拟资金交易，无需承担资金损失风险 <br />
              可以大胆尝试各种交易策略和操作方式 <br />
              适合初学者熟悉金融市场基础知识 <br />
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/simulation/block2-icon2.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>真实市场体验</div>
            <div class="sub" text-16 mt-5>
              获取实时市场行情和数据 <br />
              使用与真实账户相同的交易平台和工具 <br />
              体验真实的市场波动和交易执行
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/simulation/block2-icon3.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>交易策略测试</div>
            <div class="sub" text-16 mt-5>
              验证交易策略的有效性 <br />
              测试技术指标和交易系统 <br />
              优化风险管理方案
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/simulation/block2-icon4.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>平台功能熟悉</div>
            <div class="sub" text-16 mt-5>
              全面了解交易界面和功能 <br />
              练习订单类型使用（市价单、限价单、止损单等）<br />
              掌握图表分析工具和指标应用
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/simulation/block2-icon5.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>积累交易经验</div>
            <div class="sub" text-16 mt-5>
              在无压力环境下积累交易经验 <br />
              通过实践提升交易技巧 <br />
              为过渡到真实交易做好准备
            </div>
          </div>
        </div>
        <div v-if="!isMobile" w-450 h-384></div>
      </div>
    </div>
    <div class="block3" h-870 pt-60 pb-80>
      <div class="title" text="center 48" font-700>零风险入門体验</div>
      <div class="sub" text="16 center" mt-20>
        模拟账户提供了一个安全、真实的学习环境，帮助投资者在投入真实资金前获得宝贵的市场经验和交易技能。使
        <br
          v-if="!isMobile"
        />用模拟账户，能够显著提高投资者的准备程度，为未来的真实交易成功奠定坚实基础
      </div>
      <div class="content" flex justify-center items-center mt-40 gap-70>
        <div class="register-left" rounded-16 w-600 p-40>
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
              <div text-24 font-700>注册模拟账户</div>
              <div text="16 #2c2c2c">填写你的个人资讯</div>
            </div>
          </div>
          <div class="step" flex>
            <div class="line" relative pt-10 pb-130>
              <div w-16 h-16 bg="#FFA300" rounded-full></div>
              <!-- <div absolute left-7 top-34 h-70 border-l="2px solid #1677FF"></div> -->
            </div>
            <div ml-22>
              <div text-24 font-700>开始体验</div>
              <div text="16 #2c2c2c">下载手机交易程式或交易平台，即时体验</div>
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
              >立即体验模拟账户</n-button
            >
          </div>
        </div>
        <div class="register-right" relative w-966 h-541>
          <img
            v-if="!isMobile"
            w-767
            h-509
            src="@/assets/images/simulation/block3-icon.png"
            alt=""
          />
          <img v-else src="@/assets/images/simulation/m/block3.png" srcset="" />
        </div>
      </div>
    </div>

    <div class="block4" h-600 text="center #fff">
      <div class="content" text="48" font-700 pt-200>
        通过模拟交易积累经验，让用户能够零风险地熟悉交易平台，
        <br />
        为未来的真实交易做好充分准备
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
      background: url('@/assets/images/simulation/banner.png') no-repeat center;
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

    .block3 {
      background: #fff;
      .register-left {
        background: linear-gradient(
          -90deg,
          rgba(244, 247, 249, 0) 0%,
          #f4f7f9 100%
        );
      }
      .register-right {
        /* background: url('@/assets/images/home/register-bg.png') no-repeat center; */
        background-size: contain;
      }
    }
    .block3 {
      /* background: url('@/assets/images/simulate/block3-icon.png') no-repeat center;
    background-size: cover; */
    }

    .block4 {
      background: url('@/assets/images/simulation/block4-bg.png') no-repeat
        center;
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
