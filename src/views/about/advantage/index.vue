<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>我们为你提供独特价值</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">品牌优势</div>
        <div class="line-right"></div>
      </div>
    </div>
    <div class="advantage1" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>为何选择我们？</div>
      <div class="list-wrapper" flex justify-center gap-180 mt-60 text-center min-w="1440">
        <div>
          <img
            src="@/assets/images/advantage/advantage1-icon1.png"
            w-120
            h-120
            alt=""
          />
          <div v-if="isMobile" text-14 mt-10>
            极致安全 <br />
            安心托付
          </div>
          <div v-else text-16px mt-20>极致安全・安心托付</div>
        </div>
        <div>
          <img
            src="@/assets/images/advantage/advantage1-icon2.png"
            w-120
            h-120
            alt=""
          />
          <div v-if="isMobile" text-14 mt-10>
            丰富产品 <br />
            一站式管理
          </div>
          <div v-else text-16px mt-20>丰富产品・一站式管理</div>
        </div>
        <div>
          <img
            src="@/assets/images/advantage/advantage1-icon3.png"
            w-120
            h-120
            alt=""
          />
          <div v-if="isMobile" text-14 mt-10>
            智能工具<br />
            赋能决策
          </div>
          <div v-else text-16px mt-20>智能工具・赋能决策</div>
        </div>
        <div>
          <img
            src="@/assets/images/advantage/advantage1-icon4.png"
            w-120
            h-120
            alt=""
          />
          <div v-if="isMobile" text-14 mt-10>
            低門槛 <br />
            低成本
          </div>
          <div v-else text-16px mt-20>低門槛 ・低成本</div>
        </div>
        <div>
          <img
            src="@/assets/images/advantage/advantage1-icon5.png"
            w-120
            h-120
            alt=""
          />
          <div v-if="isMobile" text-14 mt-10>
            流畅体验<br />
            卓越服务
          </div>
          <div v-else text-16px mt-20>流畅体验・卓越服务</div>
        </div>
      </div>
    </div>
    <div class="advantage2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>极致安全・安心托付</div>
      <div class="list-wrapper" flex justify-center gap-45 mt-40 min-w="1440" m-auto>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/advantage/advantage2-icon1.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>银行级资金保障</div>
            <div class="sub" text-16 mt-5>
              用户资金全程由知名国际一级银行存管，实现平台与用户资金的完全隔离，从根本上保障资金安全
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/advantage/advantage2-icon2.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>顶尖保密技术与风控</div>
            <div class="sub" text-16 mt-5>
              采用多重签名、SSL加密通信、分布式服务器集群等金融级安全技术，严防黑客攻击与数据泄露。24小时智能风控系统实时监控异常交易，为你的资产保驾护航
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/advantage/advantage2-icon3.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>合规持牌经营</div>
            <div class="sub" text-16 mt-5>
              严格遵循全球监管要求，持有AOFA
              、FSCA、IFSC、FCA等合规牌照，运营透明，合法合规
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage3" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>丰富产品・一站式管理</div>
      <div class="wrapper" flex justify-center gap-40 mt-40>
        <div class="item1" w-700 h-200 p-40 text-white>
          <div class="title" text-30 font-700>全球资产全覆盖</div>
          <div class="content" text-16 mt-5 w-360>
            提供外汇 、大宗商品
            、指数等海量多元化金融产品，满足你从稳健到进取的不同投资需求
          </div>
        </div>
        <div class="item2" w-700 h-200 p-40 text-white>
          <div class="title" text-30 font-700>一站式账户管理</div>
          <div class="content" text-16 mt-5 w-360>
            一个账户，即可投资全球市场，轻松实现资产的多元化跨境配置，无需频繁切换多个平台
          </div>
        </div>
      </div>
    </div>
    <div class="intelligence" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>智能工具・赋能决策</div>
      <div class="wrapper" flex justify-center gap-45 mt-40 min-w="1440" m-auto>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            v-if="!isMobile"
            src="@/assets/images/advantage/intelligence-icon1.png"
            w-450
            h-220
            alt=""
          />
          <img
            v-else
            src="@/assets/images/advantage/m/intelligence-icon1.png"
            w-full
            h-140
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>专业级交易工具</div>
            <div class="des" text-16 mt-5>
              提供功能强大的PC/APP端,内置高级图表分析工具、技术指标和绘图功能,助你做出精准的市场判断
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            v-if="!isMobile"
            src="@/assets/images/advantage/intelligence-icon2.png"
            w-450
            h-220
            alt=""
          />
          <img
            v-else
            src="@/assets/images/advantage/m/intelligence-icon2.png"
            w-full
            h-140
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>智能理财与跟单</div>
            <div class="des" text-16 mt-5>
              为你提供组合推荐、智能策略跟单功能。让新手也能轻松交易，省心省力进入投资市场
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            v-if="!isMobile"
            src="@/assets/images/advantage/intelligence-icon3.png"
            w-450
            h-220
            block
            alt=""
          />
          <img
            v-else
            src="@/assets/images/advantage/m/intelligence-icon3.png"
            w-full
            block
            h-140
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>深度市场洞察</div>
            <div class="des" text-16 mt-5>
              专业研究团队每日提供深度的市场分析、热点解读和投资策略分析，为你提供有价值的决策参考
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inexpensive" pt-60 pb-80>
      <div class="title" text-48 font-700 text-center>低门槛 ・低成本</div>
      <div class="wrapper" flex justify-center gap-40 mt-40>
        <div class="item1" w-700 h-200 p-40 text-white>
          <div class="title" text-30 font-700>极具竞争力的点差</div>
          <div class="content" text-16 mt-5 w-360>
            提供行业极具竞争力的的点差，将直接为你节省大量交易成本，转化为长期复利增长的坚实基础
          </div>
        </div>
        <div class="item2" w-700 h-200 p-40 text-white>
          <div class="title" text-30 font-700>灵活投资起点</div>
          <div class="content" text-16 mt-5 w-360>
            我们提供行业领先的灵活投资方案，让每位客户都能以适合自己的方式参与全球市场交易
          </div>
        </div>
      </div>
    </div>
    <div class="advantage4" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>流畅体验・卓越服务</div>
      <div class="wrapper" flex justify-center gap-45 mt-40 min-w="1440" m-auto>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            v-if="!isMobile"
            src="@/assets/images/advantage/advantage4-icon1.png"
            w-450
            h-220
            alt=""
          />
          <img
            v-else
            src="@/assets/images/advantage/advantage4-icon1.png"
            block
            w-full
            h-140
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>极速交易与出入金</div>
            <div class="des" text-16 mt-5>
              订单执行速度快，支持多种方式出入金，提现处理高效便捷，确保你的每一笔操作都流畅无阻
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            v-if="!isMobile"
            src="@/assets/images/advantage/advantage4-icon2.png"
            w-450
            h-220
            alt=""
          />
          <img
            v-else
            src="@/assets/images/advantage/advantage4-icon2.png"
            w-full
            block
            h-140
            alt=""
          />
          <div class="content" px-30>
          <div class="title" text-24 mt-15 font-700>客服专业服务</div>
            <div class="des" text-16 mt-5>
              提供24小时的客服支持，打破语言障碍，遇到的各类问题，中文客服随时解答你的疑问
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-360>
          <img
            v-if="!isMobile"
            src="@/assets/images/advantage/advantage4-icon3.png"
            w-450
            h-220
            alt=""
          />
          <img
            v-else
            block
            src="@/assets/images/advantage/advantage4-icon3.png"
            w-full
            h-140
            alt=""
          />
          <div class="content" px-30>
            <div class="title" text-24 mt-15 font-700>投资者策略交流</div>
            <div class="des" text-16 mt-5>
              拥有活跃的用户社区和丰富的学习资源，无论你是新手交易者或有经验交易者
              ，都能找到合适的支援
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="advantage5" h-600>
      <div
        v-if="!isMobile"
        class="content"
        text="48 center #fff"
        font-700
        pt-230
      >
        选择我们 <br />
        即是选择了一个安全、多元、智能、高效的投资伙伴
      </div>
      <div v-else class="content" text="48 center #fff" font-700 pt-230>
        选择我们，即是选择了一个安全、多元、智能、高效的投资伙伴
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
    <div class="download" h-370 pt-60>
      <div class="title" text="48 center white" font-700>
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

    .advantage3 {
      .item1 {
        background: url('@/assets/images/advantage/advantage3-bg1.png')
          no-repeat center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/advantage/advantage3-bg2.png')
          no-repeat center;
        background-size: cover;
      }
    }
    .advantage5 {
      background: url('@/assets/images/advantage/advantage5-bg.png') no-repeat
        center;
      background-size: cover;
    }
    .download {
      background: url('@/assets/images/advantage/advantage7-bg.png') no-repeat
        center;
      background-size: cover;
    }
    .description-item {
      background: linear-gradient(180deg, #2c64ff 0%, #3b81fe 100%);
    }
    .inexpensive {
      .item1 {
        background: url('@/assets/images/advantage/inexpensive-bg1.png')
          no-repeat center;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/advantage/inexpensive-bg2.png')
          no-repeat center;
        background-size: cover;
      }
    }
  }
</style>
