<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>随时随地 畅享投资</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">手机交易程式</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-744 py-80 px-240>
      <div class="des" text="16">
        我们的金融交易平台手机App是一款专业、安全且高效的移动投资工具，让你随时随地掌控全球金融市场。无论你是经验丰富的交易员还是投资新手，这款App都旨在为你提供无缝的交易体验和全面的市场资讯，将整个金融市场轻松放入你的口袋
      </div>
      <div class="des sub" my-20 font-700 text="20">
        通过直观的用户界面和强大的功能，你可以：
      </div>
      <div class="content" flex>
        <div class="wrapper" flex flex-col gap-20>
          <div class="list-item" rounded-16 flex gap-20 w-660 p-20 items-center>
            <img
              w-60
              h-60
              src="@/assets/images/phone/block1-icon1.png"
              alt=""
            />
            <div>
              <div class="title" font-700 text="18">实时交易</div>
              <div class="des" text="16">买卖多种金融产品</div>
            </div>
          </div>
          <div class="list-item" rounded-16 flex gap-20 w-660 p-20 items-center>
            <img
              w-60
              h-60
              src="@/assets/images/phone/block1-icon2.png"
              alt=""
            />
            <div>
              <div class="title" font-700 text="18">监控市场</div>
              <div class="des" text="16">
                获取实时报价、自选列表、价格警报和详尽的图表分析工具
              </div>
            </div>
          </div>
          <div class="list-item" rounded-16 flex gap-20 w-660 p-20 items-center>
            <img
              w-60
              h-60
              src="@/assets/images/phone/block1-icon3.png"
              alt=""
            />
            <div>
              <div class="title" font-700 text="18">管理资产</div>
              <div class="des" text="16">
                清晰查看投资组合表现、账户余额和交易历史记录
              </div>
            </div>
          </div>
          <div class="list-item" rounded-16 flex gap-20 w-660 p-20 items-center>
            <img
              w-60
              h-60
              src="@/assets/images/phone/block1-icon4.png"
              alt=""
            />
            <div>
              <div class="title" font-700 text="18">获取信息</div>
              <div class="des" text="16">
                阅读最新财经新闻、研究报告和市场分析，助力你做出明智的投资决策
              </div>
            </div>
          </div>
        </div>
        <img w-780 h-466 src="@/assets/images/home/mac_phone.png" alt="" />
      </div>
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>平台优点</div>
      <div class="wrapper" flex flex-col items-center gap-20>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            1. 极致便捷与流动性
          </div>
          <div class="sub" m-30 w-1085 text-16>
            随时随地交易：打破时间和地点限制，你可以在任何有网络的地方迅速响应市场变化，抓住稍纵即逝的投资机会。
          </div>
        </div>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            2. 高度安全性
          </div>
          <div class="sub" m-30 w-1085 text-16>
            银行级加密技术：采用SSL加密通信，保障数据传输安全。 <br />
            多重身份验证：支持面部识别、双重认证（2FA）等功能，确保账户安全。
            <br />
            隔离账户：客户资金存放于独立的托管银行账户，与公司运营资金严格分离。
          </div>
        </div>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            3.强大的功能与工具
          </div>
          <div class="sub" m-30 w-1085 text-16>
            专业图表分析：提供多种图表类型和数十种技术指标，满足技术分析需求。<br />
            智能价格警报：设置价格提醒，无需时刻盯盘，市场到达设定价位时自动推送通知。<br />
            一键交易：快速执行买卖订单，在波动剧烈的市场中尤为重要。
          </div>
        </div>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            4. 人性化的用户体验
          </div>
          <div class="sub" m-30 w-1085 text-16>
            直观的界面设计：界面简洁清晰，功能布局合理，即使是新手也能快速上手。<br />
            个性化定制：可根据个人喜好自定义观察列表、图表布局和主屏幕模块。<br />
            多语言支持：满足全球用户的需求，提供包括中文在内的多种语言选项。
          </div>
        </div>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            5. 低成本和透明度
          </div>
          <div class="sub" m-30 w-1085 text-16>
            降低交易费用：提供具有竞争力的佣金率和低点差，降低你的交易成本。
            <br />
            费用透明：所有费用结构清晰明了，无任何隐藏收费。
          </div>
        </div>
      </div>
    </div>

    <div class="block3" bg="#fff" py-80 flex items-center flex-col>
      <div class="title" text="48 center" font-700>
        我们的App同时支持iOS和安卓两大主流移动操作系统，<br v-if="!isMobile" />
        为所有用户提供一致、稳定和流畅的交易体验
      </div>
      <div class="item" w-1440 bg="#F4F7F9" p-40 flex gap-40 rounded-16>
        <img w-160 h-160 src="@/assets/images/phone/ios-blue.png" alt="" />
        <div class="content">
          <div class="title" text-36 font-700>iOS 版本</div>
          <div class="des" text-16>
            适用设备：iPhone、iPad <br />
            下载方式：可通过 App Store 搜索 CPT Markets 下载。<br />
            系统要求：通常支持最新的iOS版本及其之前的几个版本。我们会持续更新以兼容最新的iPhone和iPad机型。<br />
            特点：完美适配iOS系统的流畅性和安全性
          </div>
          <div class="sub" text="20" font-700 my-20>请即下载体验</div>
          <n-button class="btn" w-330 h-102 color="#272D45" rounded-12>
            <div class="btn-wrapper" flex gap-20 items-center>
              <img
                class="icon"
                src="@/assets/images/phone/ios-white.png"
                alt=""
                srcset=""
              />
              <div text-start>
                <div class="name" text="24">APP Store</div>
                <div class="des" text="16" mt-8>下载></div>
              </div>
            </div>
          </n-button>
        </div>
      </div>
      <div class="item" w-1440 bg="#F4F7F9" p-40 flex gap-40 rounded-16 mt-40>
        <img w-160 h-160 src="@/assets/images/phone/ios-blue.png" alt="" />
        <div class="content">
          <div class="title" text-36 font-700>安卓版本</div>
          <div class="des" text-16>
            适用设备：所有搭载安卓系统的手机和平板电脑 <br />
            下载方式：可通过 Google Play
            Store 下载。此外，为了满足不同地区用户的需求，我们也提供官网的APK安全下载渠道。<br />
            系统要求：支持多种安卓版本，适配各种屏幕尺寸和分辨率。<br />
            特点：充分发挥安卓系统的开放性和灵活性
          </div>
          <div class="sub" text="20" font-700 my-20>请即下载体验</div>
          <n-button class="btn" w-330 h-102 color="#272D45" rounded-12>
            <div class="btn-wrapper" flex gap-20 items-center>
              <img
                class="icon"
                src="@/assets/images/phone/google-white.png"
                alt=""
                srcset=""
              />
              <div text-start>
                <div class="name" text="24">Google Play</div>
                <div class="des" text="16" mt-8>下载></div>
              </div>
            </div>
          </n-button>
          <n-button class="btn" w-330 h-102 color="#272D45" ml-40 rounded-12>
            <div class="btn-wrapper" flex gap-20 items-center>
              <img
                class="icon"
                src="@/assets/images/phone/android-white.png"
                alt=""
                srcset=""
              />
              <div text-start>
                <div class="name" text="24">安卓APK</div>
                <div class="des" text="16" mt-8>下载></div>
              </div>
            </div>
          </n-button>
        </div>
      </div>
    </div>
    <!-- 注册 -->
    <div v-if="isMobile" class="register" h-870 pt-60>
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
    <div class="block4" h-600 text="center #fff">
      <div class="content" text="48" font-700 pt-160>
        无论你使用何种设备，<br v-if="!isMobile" />
        都能享受到我们为你提供的完整、安全且专业的移动交易服务。<br />
        立即下载体验，开启你的移动投资之旅！
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
      background: url('@/assets/images/phone/banner.png') no-repeat center;
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
      .list-item {
        background: linear-gradient(-90deg, #ffffff 1%, #eff9ff 100%);
      }
    }
    .block2 {
      .head {
        border-top-left-radius: 4rem;
        border-bottom-right-radius: 4rem;
        background: linear-gradient(90deg, #3090ff 0%, #1b84fc 100%);
      }
    }

    .block4 {
      background: url('@/assets/images/phone/block4-bg.png') no-repeat center;
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
