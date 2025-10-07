<template>
  <div>
    <home-title></home-title>
    <div class="banner" text="center #fff" h-600 pt-230>
      <div flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="title" text="96" font="700">外汇</div>
        <div class="line-right"></div>
      </div>
    </div>
    <div class="block1" h-369 pt-86 pl-240>
      <div class="des" w-620 text-16>
        <div>
          我们是一家致力于为全球投资者提供专业、高效、安全外汇及差价合约（CFD）交易服务的顶尖金融科技平台。我们集成了最先进的交易技术、深度的机构级流动性和强大的风险管理工具，为你连接全球外汇市场，提供超过 100+ 种货币对的交易机会。
        </div>
        <div class="sub" mt-20>
          无论你是初入市场的交易新手，还是经验丰富的资深投资者，我们都能通过直观易用的交易界面、丰富的教育资源和全天候的客户支持，为你提供卓越的交易体验，助你精准把握市场脉搏，实现财富增值目标。
        </div>
      </div>
      <img
        v-if="isMobile"
        block
        w-full
        h-240
        src="@/assets/images/forex/m/block1.png"
      />
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>关于外汇投资</div>
      <div class="des" mt-20 mb-40 text="center 16">
        作为全球最大、流动性最高的金融市场，外汇市场日均交易量超过数万亿美元，其特点包括：
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
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/forex/block2-icon1.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>双向交易</div>
            <div class="sub" text-16 mt-5>
              支持“做多”和“做空”两种模式。无论汇率上涨还是下跌，均有盈利机会
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/forex/block2-icon2.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>24小时交易</div>
            <div class="sub" text-16 mt-5>
              全球主要金融中心接力开市，投资者可在任何时间进行交易
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/forex/block2-icon3.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>杠杆效应</div>
            <div class="sub" text-16 mt-5>
              允许投资者以较小的保证金（本金）进行更大额度的交易，有机会放大收益
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/forex/block2-icon4.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>公平透明</div>
            <div class="sub" text-16 mt-5>
              外汇市场受全球宏观经济和政策影响，难以被单一机构操纵，信息相对公开透明
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/forex/block2-icon5.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>高流动性</div>
            <div class="sub" text-16 mt-5>
              巨大的交易量使得资金进出容易，执行速度快
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            src="@/assets/images/forex/block2-icon6.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>大量货币对可供选择</div>
            <div class="sub" text-16 mt-5>
              拥有多样化的选择是捕捉机遇的关键，因此我们为你提供了极丰富的外汇货币对，让你的投资策略得以全面施展
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block3" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>
        为何选择我们进行外汇投资？
      </div>
      <div class="des" mt-20 mb-40 text="center 16">
        作为全球最大、流动性最高的金融市场，外汇市场日均交易量超过数万亿美元，其特点包括：
      </div>
      <div class="item1 item" w-1440 h-170 m-auto rounded-16 flex py-25 px-30>
        <img
          w-100
          h-120
          src="@/assets/images/index/block3-icon1.png"
          alt=""
          srcset=""
        />
        <div class="content" ml-30>
          <div class="title" text="28" font-700>安全合规 资金保障</div>
          <div class="des" w-656 mt-20 text-16>
            平台受国际权威金融机构监管，确保合规运营 <br />
            客户资金存放于知名国际一级隔离银行账户，与公司运营资金严格分离，保障你的资金安全
          </div>
        </div>
      </div>
      <div class="wrapper" flex mt-40 justify-center flex-wrap gap-40>
        <div class="item2 item" px-30 py-25 w-700 flex rounded-16>
          <img
            w-116
            h-120
            src="@/assets/images/index/block3-icon2.png"
            alt=""
            srcset=""
          />
          <div class="content" ml-14>
            <div class="title" text="28" font-700>极速交易 稳定流畅</div>
            <div class="des" w-656 mt-20 text-16>
              提供先进的手机交易程式 <br />
              订单执行迅速，系统稳定可靠
            </div>
          </div>
        </div>
        <div class="item3 item" px-30 py-25 w-700 flex rounded-16>
          <img
            w-116
            h-120
            src="@/assets/images/index/block3-icon3.png"
            alt=""
            srcset=""
          />
          <div class="content" ml-14>
            <div class="title" text="28" font-700>低成本交易</div>
            <div class="des" w-656 mt-20 text-16>
              极具竞争力的点差，显著降低你的交易成本 <br />
              透明收费，无任何隐藏费用
            </div>
          </div>
        </div>
        <div class="item4 item" px-30 py-25 w-700 flex rounded-16>
          <img
            w-100
            h-120
            src="@/assets/images/index/block3-icon4.png"
            alt=""
            srcset=""
          />
          <div class="content" ml-30>
            <div class="title" text="28" font-700>卓越客户服务</div>
            <div class="des" w-656 mt-20 text-16>
              提供24小时中文客服支持 <br />
              随时为你解答交易疑问，解决技术问题
            </div>
          </div>
        </div>
        <div class="item5 item" px-30 py-25 w-700 flex rounded-16>
          <img
            w-112
            h-120
            src="@/assets/images/index/block3-icon5.png"
            alt=""
            srcset=""
          />
          <div class="content" ml-17>
            <div class="title" text="28" font-700>全方位学习支持</div>
            <div class="des" w-656 mt-20 text-16>
              提供丰富的学习资源，助你从新手成长为专业投资者 <br />
              每日发布专业市场分析，为你提供交易灵感
            </div>
          </div>
        </div>
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
      background: url('@/assets/images/forex/banner.png') no-repeat center;
      background-size: cover;
      .line-right {
        border-top: 2px solid;
        margin-top: 18rem;
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
        margin-top: 18rem;
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
      background: url('@/assets/images/forex/block1-bg.png') no-repeat center;
      background-size: cover;
    }
    .block3 {
      .item1 {
        background: linear-gradient(-90deg, #f2f5ff 1%, #c6defc 100%);
      }
      .item2 {
        background: linear-gradient(-90deg, #f1fbf9 0%, #b6f3e8 100%);
      }
      .item3 {
        background: linear-gradient(-90deg, #fdf8f7 1%, #f8e1d7 100%);
      }
      .item4 {
        background: linear-gradient(-90deg, #faf9ff 1%, #e9defb 100%);
      }
      .item5 {
        background: linear-gradient(-90deg, #fffdfa 1%, #fff8da 100%);
      }
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
