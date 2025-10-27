<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>
        科技赋能安全 智慧守护财富
      </div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">账户安全</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-369 pt-86 pl-240>
      <div class="des" w-620 text-16>
        <div>
          在数字金融时代，你的账户不仅是登录凭证，更是守护财富的大門。我们深知安全重于一切，因此构建了多层次、智能化的安全体系。
        </div>
        <div mt-20>
          从登录验证到资金操作，从数据加密到风险监控，我们为每一位用户提供银行级别的安全保护，确保你的投资之旅安心无忧
        </div>
      </div>
      <img
        v-if="isMobile"
        mt-24
        block
        w-full
        h-240
        src="@/assets/images/security/m/block1.png"
      />
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>为你的投资之路护航</div>
      <div class="des" mt-20 mb-40 text="center 16px">
        我们的平台将账户安全作为首要任务，采用多重安全措施和先进技术，构建了完善的账户安全保护
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
          <img
            src="@/assets/images/security/block2-icon1.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>银行级资金保障</div>
            <div class="sub" text-16 mt-5>
              用户资金全程由知名国际一级银行存管 <br />
              实现平台与用户资金的完全隔离 <br />严格保障资金安全
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/security/block2-icon2.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>合规持牌经营</div>
            <div class="sub" text-16 mt-5>
              严格遵循全球监管要求 <br />
              持有AOFA 、FSCA、IFSC、FCA等合规牌照 <br />运营透明，合法合规
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/security/block2-icon3.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>多层次登录保护</div>
            <div class="sub" text-16 mt-5>
              支持短信验证码、邮箱验证 <br />
              重要操作需进行二次验证 <br />
              面部识别验证
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/security/block2-icon4.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>设备安全管理</div>
            <div class="sub" text-16 mt-5>
              登录设备记录与管理<br />
              异常设备登录提醒<br />
              防止未经授权的登录访问
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/security/block2-icon5.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>实时监控系统</div>
            <div class="sub" text-16 mt-5>
              24小时交易监控 <br />异常交易行为检测 <br />
              即时风险预警提示
            </div>
          </div>
        </div>
        <div class="item" bg-white rounded-16 w-450 h-384>
          <img
            src="@/assets/images/security/block2-icon6.png"
            w-450
            h-220
            alt=""
          />
          <div class="content" px-35>
            <div class="title" text-24 mt-15 font-700>高级加密技术</div>
            <div class="sub" text-16 mt-5>
              SSL传输加密 <br />
              数据库字段级加密 <br />
              隐私保护措施
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
        我们将账户安全放在首位，通过多重安全措施和先进的技术手段，
        <br v-if="!isMobile" />
        全力保障你的资金安全和隐私保护
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
      background: url('@/assets/images/security/banner.png') no-repeat center;
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
      background: url('@/assets/images/security/block1-bg.png') no-repeat center;
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
      background: url('@/assets/images/security/block3-bg.png') no-repeat center;
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
