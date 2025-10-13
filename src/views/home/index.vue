<template>
  <div>
    <!-- 头部 -->
    <home-title></home-title>
    <!-- banner -->
    <n-carousel v-if="!isMobile" autoplay>
      <img cursor-pointer w-full src="@/assets/images/home/banner.png" />
      <img
        cursor-pointer
        w-full
        @click="jumpTo({ name: 'recommend' })"
        src="@/assets/images/home/banner2.png"
      />
      <img
        cursor-pointer
        w-full
        @click="jumpTo({ name: 'newCustomer' })"
        src="@/assets/images/home/banner3.png"
      />
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
    <n-carousel v-else class="m" autoplay>
      <img
        cursor-pointer
        w-full
        h-195
        src="@/assets/images/home/m/banner.png"
      />
      <img
        cursor-pointer
        w-full
        h-195
        src="@/assets/images/home/m/banner2.png"
      />
      <img
        cursor-pointer
        w-full
        h-195
        src="@/assets/images/home/m/banner3.png"
      />
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
    <!-- 下载 -->
    <div class="download" relative flex justify-center gap-40 mt--60>
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
          <div class="sub-content" font-400 text-16>下载></div>
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
          <div class="sub-content" font-400 text-16>下载></div>
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
          <div class="sub-content" font-400 text-16>开设></div>
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
          <div class="sub-content" font-400 text-16>开设></div>
        </div>
      </div>
    </div>
    <!-- 奖章 -->
    <div class="award">
      <div class="title" text-center text="48" font-700>体验获奖的交易平台</div>
      <div
        class="description"
        mt-40
        flex
        justify-center
        gap-40
        rounded-10
        text="#2240A2"
      >
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
          <img h-60 w-60 src="@/assets/images/home/award-icon-1.png" alt="" />
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
          bg-white
          px-20
          rounded-10
        >
          <img h-60 w-60 src="@/assets/images/home/award-icon-2.png" alt="" />
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
          bg-white
          px-20
          rounded-10
        >
          <img h-60 w-60 src="@/assets/images/home/award-icon-3.png" alt="" />
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
          bg-white
          px-20
          rounded-10
        >
          <img h-60 w-60 src="@/assets/images/home/award-icon-4.png" alt="" />
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
          bg-white
          px-20
          rounded-10
        >
          <img h-60 w-60 src="@/assets/images/home/award-icon-5.png" alt="" />
          <div>
            <div class="main">极速</div>
            <div class="sub">出入金服务</div>
          </div>
        </div>
      </div>
      <div v-if="!isMobile" flex justify-center gap-20 mt-60 text-center>
        <n-carousel
          :slides-per-view="4"
          :space-between="20"
          autoplay
          :loop="false"
          draggable
        >
          <div>
            <img src="@/assets/images/home/award-1.png" w-240 h-240 alt="" />
            <div>迪拜MFFM奖项</div>
          </div>
          <div>
            <img src="@/assets/images/home/award-2.png" w-240 h-240 alt="" />
            <div>国际金融奖项</div>
          </div>
          <div>
            <img src="@/assets/images/home/award-3.png" w-240 h-240 alt="" />
            <div>
              最具信誉 <br />
              外汇经纪商
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/award-4.png" w-240 h-240 alt="" />
            <div>
              最具信誉 <br />
              外汇经纪商
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/award-5.png" w-240 h-240 alt="" />
            <div>
              阿联酋国际金融 <br />
              衍生品提供商
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/award-6.png" w-240 h-240 alt="" />
            <div>最佳监管经纪商</div>
          </div>
          <div>
            <img src="@/assets/images/home/award-7.png" w-240 h-240 alt="" />
            <div>
              南非交易商博览会 <br />
              金赞助商
            </div>
          </div>
        </n-carousel>
      </div>
      <div v-else mt-20>
        <n-scrollbar x-scrollable>
          <div flex gap-10 text-center>
            <div>
              <img src="@/assets/images/home/award-1.png" w-140 h-140 alt="" />
              <div>
                最具信誉 <br />
                外汇经纪商
              </div>
            </div>
            <div>
              <img src="@/assets/images/home/award-2.png" w-140 h-140 alt="" />
              <div>
                最具信誉 <br />
                外汇经纪商
              </div>
            </div>
            <div>
              <img src="@/assets/images/home/award-3.png" w-140 h-140 alt="" />
              <div>
                最具信誉 <br />
                外汇经纪商
              </div>
            </div>
            <div>
              <img src="@/assets/images/home/award-4.png" w-140 h-140 alt="" />
              <div>
                最具信誉 <br />
                外汇经纪商
              </div>
            </div>
            <div>
              <img src="@/assets/images/home/award-5.png" w-140 h-140 alt="" />
              <div>
                最具信誉 <br />
                外汇经纪商
              </div>
            </div>
            <div>
              <img src="@/assets/images/home/award-6.png" w-140 h-140 alt="" />
              <div>
                最具信誉 <br />
                外汇经纪商
              </div>
            </div>
            <div>
              <img src="@/assets/images/home/award-7.png" w-140 h-140 alt="" />
              <div>
                最具信誉 <br />
                外汇经纪商
              </div>
            </div>
          </div>
        </n-scrollbar>
      </div>
    </div>
    <!-- 产品 -->
    <div class="product-wrapper" pb-80>
      <div class="title" my-60 text="48 center" font-700>
        0佣金手续费交易 <br />
        超过200种金融产品
      </div>
      <div class="product-list" flex justify-center gap-45 mt-60>
        <div
          class="product"
          relative
          w-450
          h-360
          pl-30
          pr-20
          cursor-pointer
          @click="jumpTo({ name: 'forex' })"
        >
          <img
            absolute
            left-30
            top-30
            w-120
            h-120
            src="@/assets/images/home/forex-icon.png"
            alt=""
          />
          <img
            absolute
            right-20
            top-20
            src="@/assets/images/home/product-arrow.png"
            alt=""
          />
          <div class="name" font-500 mt-170 text="48 white">外汇</div>
          <div class="introduction" mt-20 text="16 white">
            全球规模最大、流动性最强的市场，日均交易量超过数万亿美元，我们提供超过
            60 种全球货币给你选择
          </div>
        </div>
        <div
          class="product"
          relative
          w-450
          h-360
          pl-30
          pr-20
          cursor-pointer
          @click="jumpTo({ name: 'index' })"
        >
          <img
            absolute
            left-30
            top-30
            w-120
            h-120
            src="@/assets/images/home/index-icon.png"
            alt=""
          />
          <img
            absolute
            right-20
            top-20
            src="@/assets/images/home/product-arrow.png"
            alt=""
          />
          <div class="name" font-500 mt-170 text="48 white">指数</div>
          <div class="introduction" mt-20 text="15 white">
            股票市场指数进行交易，无需实际持有指数成分股，我们提供道琼斯工业平均指数
            (Dow Jones)等多种指数产品
          </div>
        </div>
        <div
          class="product"
          relative
          w-450
          h-360
          pl-30
          pr-20
          cursor-pointer
          @click="jumpTo({ name: 'commodity' })"
        >
          <img
            absolute
            left-30
            top-30
            w-120
            h-120
            src="@/assets/images/home/commodity-icon.png"
            alt=""
          />
          <img
            absolute
            right-20
            top-20
            src="@/assets/images/home/product-arrow.png"
            alt=""
          />
          <div class="name" font-500 mt-170 text="48 white">大宗商品</div>
          <div class="introduction" mt-20 text="15 white">
            黄金、白银、原油、天然气及其他基础原材料的价格涨跌进行交易，我们提供差价合约(CFD)给你灵活交易
          </div>
        </div>
      </div>
    </div>
    <!-- 平台下载 -->
    <div class="platform-download" h-870 pt-80>
      <div class="title" text="48 center" font-700>智能平台 投资全球机遇</div>
      <div class="platform-content" flex justify-center items-center mt-60>
        <img
          class="mac"
          w-670
          h-400
          src="@/assets/images/home/mac_phone.png"
          alt=""
        />
        <div class="introduction" ml-100 flex flex-col gap-21>
          <div
            :class="{ active: platformActiveItemIndex === 1 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-1.png"
              alt=""
            />
            <div text-16>
              <div font-400>200万＋</div>
              <div>全球客户投资者支持</div>
            </div>
          </div>
          <div
            :class="{ active: platformActiveItemIndex === 2 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-2.png"
              alt=""
            />
            <div text-16>
              <div font-400>最佳投资平台</div>
            </div>
          </div>
          <div
            :class="{ active: platformActiveItemIndex === 3 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-3.png"
              alt=""
            />
            <div text-16>
              <div font-400>最受欢迎金融应用程式</div>
            </div>
          </div>
          <div
            :class="{ active: platformActiveItemIndex === 4 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-4.png"
              alt=""
            />
            <div text-16>
              <div font-400>卓越交易工具</div>
            </div>
          </div>
        </div>
        <div class="introduction" ml-70 flex flex-col gap-21>
          <div
            :class="{ active: platformActiveItemIndex === 5 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-5.png"
              alt=""
            />
            <div text-16>
              <div font-400>专业技术分析工具</div>
            </div>
          </div>
          <div
            :class="{ active: platformActiveItemIndex === 6 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-6.png"
              alt=""
            />
            <div text-16>
              <div font-400>毫秒级订单处理速度</div>
            </div>
          </div>
          <div
            :class="{ active: platformActiveItemIndex === 7 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-7.png"
              alt=""
            />
            <div text-16>
              <div font-400>极具竞争力的点差</div>
            </div>
          </div>
          <div
            :class="{ active: platformActiveItemIndex === 8 }"
            w-300
            h-80
            flex
            items-center
            p-16
            bg="#00429F"
            rounded-8
            gap-20
          >
            <img
              w-48
              h-48
              src="@/assets/images/home/platform-icon-8.png"
              alt=""
            />
            <div text-16>
              <div font-400>智能风险管理</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group" flex items-center justify-center gap-45 mt-60>
        <div class="platform-btn" w-450 h-120 flex items-center>
          <img
            ml-105
            w-80
            h-80
            src="@/assets/images/home/ios-white.png"
            alt=""
          />
          <div ml-20>
            <div text-30>App Store</div>
            <div text-16>下载></div>
          </div>
        </div>
        <div class="platform-btn" w-450 h-120 flex items-center>
          <img
            ml-105
            w-80
            h-80
            src="@/assets/images/home/google-white.png"
            alt=""
          />
          <div ml-20>
            <div text-30>Google Play</div>
            <div text-16>下载></div>
          </div>
        </div>
        <div
          v-if="!isMobile"
          class="platform-btn"
          w-450
          h-120
          flex
          items-center
        >
          <img
            ml-105
            w-80
            h-80
            src="@/assets/images/home/ios-white.png"
            alt=""
          />
          <div ml-20>
            <div text-30>MT5交易平台</div>
            <div text-16>下载></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 福利 -->
    <div class="welfare">
      <div class="title" text-center text-48 font-700>
        越交易 越赚取 <br />
        尊享专属交易回赠
      </div>
      <div class="welfare-wrapper" mt-60 flex justify-center gap-45>
        <div class="welfare-item1 welfare-item" w-450 h-284 p-40>
          <div class="sub-title" text="36 white">新客专享</div>
          <div class="description" text="18 white" mt-10>
            仅限新客！ <br />
            专属赠金回赠等你赚取
          </div>
          <div mt-40>
            <n-button
              class="btn"
              w-160
              h-50
              color="#FBD87D"
              round
              text-color="#11131F"
              @click="jumpTo({ name: 'newCustomer' })"
              >立即体验</n-button
            >
          </div>
        </div>
        <div class="welfare-item2 welfare-item" w-450 h-284 p-40>
          <div class="sub-title" text="36 white">推荐好友</div>
          <div class="description" text="18 white" mt-10>
            推荐好友加入注册！
            <br />
            实现共赢，获取赠金回赠
          </div>
          <div mt-40>
            <n-button
              class="btn"
              w-160
              h-50
              color="#FBD87D"
              round
              text-color="#11131F"
              @click="jumpTo({ name: 'recommend' })"
              >立即推荐</n-button
            >
          </div>
        </div>
        <div class="welfare-item3 welfare-item" w-450 h-284 p-40>
          <div class="sub-title" text="36 white">尊贵客户</div>
          <div class="description" text="18 white" mt-10>
            尊享专属点差回赠！
            <br />
            交易额度越高，回赠奖励越多
          </div>
          <div mt-40>
            <n-button
              class="btn"
              w-160
              h-50
              color="#FBD87D"
              round
              text-color="#11131F"
              @click="jumpTo({ name: 'vip' })"
              >立即尊享
            </n-button>
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
              <div text="18 #2c2c2c">填写你的个人资讯并验证</div>
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
              <div text="18 #2c2c2c">多种存款选项，即时为你的账户入金</div>
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
              <div text="18 #2c2c2c">享受各账户级别点差优惠，开始交易</div>
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
    <!-- 平台优势 -->
    <div class="platform-advantage" h-621 pt-60>
      <div class="title" text-48 font-700 text-center>
        全球信赖的专业交易平台
      </div>
      <div class="advantage-list" flex justify-center gap-45 mt-53>
        <div class="advantage-item" bg="#fff" rounded-16 w-450>
          <div class="advantage-item1" h-220 p-40>
            <div text-48 font-700 leading-58>
              合法 <br />
              持牌
            </div>
          </div>
          <div class="description" p-30 text="18 #2C2C2C">
            受AOFA ，FSCA，IFSC ，FCA 监管 ,
            提供多间国际知名机构监管许可证，为客户提供安全，可靠的交易环境
          </div>
        </div>
        <div class="advantage-item" bg="#fff" rounded-16 w-450>
          <div class="advantage-item2" h-220 p-40>
            <div text-48 font-700 leading-58>
              保障 <br />
              资金
            </div>
          </div>
          <div class="description" p-30 text="18 #2C2C2C">
            我们将资金存放在国际一级银行的隔离账户中，以确保最高的安全性和安心
          </div>
        </div>
        <div class="advantage-item" bg="#fff" rounded-16 w-450>
          <div class="advantage-item3" h-220 p-40>
            <div text-48 font-700 leading-58>
              账户 <br />
              安全
            </div>
          </div>
          <div class="description" p-30 text="18 #2C2C2C">
            为你提供信息安全团队不断更新安全技术，在账户管理、交易订单、存取款等操作时，保护你的账户以获得最佳的交易体验
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <home-footer></home-footer>
  </div>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '@/store'
  import { jumpTo } from '@/utils'
  import { storeToRefs } from 'pinia'
  import { onMounted, onUnmounted, ref } from 'vue'

  const globalStore = useGlobalStore()

  const { isMobile } = storeToRefs(globalStore)

  let timer: NodeJS.Timeout
  const platformActiveItemIndex = ref(1)

  onMounted(() => {
    timer = setInterval(() => {
      platformActiveItemIndex.value > 8
        ? (platformActiveItemIndex.value = 1)
        : (platformActiveItemIndex.value += 1)
    }, 3000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })
</script>

<style scoped lang="scss">
  @use './mobile.scss';

  @media screen and (min-width: 768px) {
    .custom-dots {
      display: flex;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
    }

    .custom-dots li {
      display: inline-block;
      width: 12px;
      height: 4px;
      margin: 0 3px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.4);
      transition:
        width 0.3s,
        background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .custom-dots li.is-active {
      width: 40px;
      background: #fff;
    }
    .award {
      width: 100%;
      background: url('@/assets/images/home/award-bg.png') no-repeat center;
      background-size: cover;
      margin-top: -15rem;
      padding-top: 30rem;
      padding-bottom: 20rem;
      ::v-deep(
        .n-carousel .n-carousel__dots.n-carousel__dots--dot .n-carousel__dot
      ) {
        background-color: #fff;
      }
      ::v-deep(
        .n-carousel
          .n-carousel__dots.n-carousel__dots--dot
          .n-carousel__dot.n-carousel__dot--active
      ) {
        background-color: #60a5fa;
      }
    }

    .product {
      background: url('@/assets/images/home/products-bg.png') no-repeat right;
      background-size: cover;
    }

    .platform-download {
      background: url('@/assets/images/home/platform-bg.png') no-repeat center;
      background-size: cover;
      color: #fff;
      .introduction .active {
        background-color: #48a0e1;
      }
      .platform-btn {
        background: linear-gradient(180deg, #0028ad 0%, #001987 100%);
        border-radius: 3rem;
      }
    }
    .welfare {
      background: url('@/assets/images/home/welfare-bg.png') no-repeat center;
      background-size: cover;
      height: 156rem;
      padding-top: 15rem;
      .welfare-item1 {
        background: url('@/assets/images/home/welfare-item1-bg.png') no-repeat
          center;
        background-size: cover;
      }
      .welfare-item2 {
        background: url('@/assets/images/home/welfare-item2-bg.png') no-repeat
          center;
        background-size: cover;
      }
      .welfare-item3 {
        background: url('@/assets/images/home/welfare-item3-bg.png') no-repeat
          center;
        background-size: cover;
      }
    }
    .register {
      background: linear-gradient(
        180deg,
        #f3f6f9 0%,
        rgba(255, 255, 255, 0) 100%
      );
      .register-right {
        background: url('@/assets/images/home/register-bg.png') no-repeat center;
        background-size: contain;
      }
    }

    .platform-advantage {
      background: url('@/assets/images/home/platform-advantage-bg.png')
        no-repeat center;
      background-size: cover;
      .advantage-item1 {
        background: url('@/assets/images/home/advantage-item1-bg.png') no-repeat
          center;
        background-size: contain;
      }
      .advantage-item2 {
        background: url('@/assets/images/home/advantage-item2-bg.png') no-repeat
          center;
        background-size: contain;
      }
      .advantage-item3 {
        background: url('@/assets/images/home/advantage-item3-bg.png') no-repeat
          center;
        background-size: contain;
      }
    }
  }
</style>
