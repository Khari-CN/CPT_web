<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>一键开户 抓住交易机会</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">真实账户</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-369 pt-106>
      <div class="des" w-1152 text-36 text-center m-auto font-700>
        真实账户，是投资者注入真实资金、参与真实金融市场交易的正式账户。
        <br v-if="!isMobile" />
        它与仅使用虚拟资金的模拟账户不同， <br v-if="!isMobile" />
        账户内的所有盈利都将直接关联到投资者的真实资产
      </div>
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>开通真实账户的优点</div>
      <div class="des" mt-20 mb-40 text="center 16">
        相比于模拟账户，开通并操作真实账户具有以下的优势：
      </div>
      <div
        class="wrapper"
        flex
        flex-wrap
        justify-center
        gap-x-45
        gap-y-40
        mt-40
        min-w="1440"
        m-auto
      >
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img src="@/assets/images/real/block2-icon1.png" w-450 h-220 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>体验真实市场</div>
            <div class="sub" text-16 mt-5>
              这是模拟账户无法提供的最大价值。只有通过参与真实金融市场交易实战，才能将所有盈利关联到客户的真实资产，成为专业投资者
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img src="@/assets/images/real/block2-icon2.png" w-450 h-220 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>获取完整的平台功能</div>
            <div class="sub" text-16 mt-5>
              许多平台的高级功能（如高级图表工具、自动化交易、分析报告等）仅对真实账户用户开放。开通真实账户是享受平台全部资源的钥匙
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img src="@/assets/images/real/block2-icon3.png" w-450 h-220 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>真实资金的增值潜力</div>
            <div class="sub" text-16 mt-5>
              模拟盘的盈利只是数字，真实账户的盈利则是可提取、可消费的真实财富。通过运用你的知识和策略，真实账户提供了让资金真正实现增值的机会
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img src="@/assets/images/real/block2-icon4.png" w-450 h-220 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>参与所有产品与市场</div>
            <div class="sub" text-16 mt-5>
              某些交易产品（如特定类型的产品）可能仅对真实账户开放。开通后，你才能完全参与平台提供的所有投资机会
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img src="@/assets/images/real/block2-icon5.png" w-450 h-220 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>建立交易记录与信用</div>
            <div class="sub" text-16 mt-5>
              持续良好的真实交易记录是未来申请更高级别账户、更高杠杆额度的基础。它也是个人投资能力的证明
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img src="@/assets/images/real/block2-icon6.png" w-450 h-220 alt="" />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>无缝的资金操作</div>
            <div class="sub" text-16 mt-5>
              真实账户允许你进行完整的入金、出金操作，为你提供安全、便捷、高效的完整资金操作体验，让你能够专注于交易决策，无需担心资金管理问题
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
        开通真实账户意味着你正式进入了实战交易阶段， <br v-if="!isMobile" />
        是所有投资者真正开始其投资旅程的起点
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
      background: url('@/assets/images/real/block3-bg.png') no-repeat center;
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
