<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>总有一款账户适合你</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">帐户类型</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-369 pt-106>
      <div class="des" text-36 text-center m-auto font-700>
        这是开启投资之旅的第一步，更是影响未来投资的关键决定。 <br v-if="!isMobile" />
        为此，我们特别准备了标准，专业，尊贵账户，帮助你根据自身需求选择最合适的账户类型
      </div>
    </div>

    <div class="block2">
      <table m-auto cellspacing="0">
        <colgroup v-if="!isMobile">
          <col w-300 />
          <col w-380 />
          <col w-380 />
          <col w-380 />
        </colgroup>
        <colgroup v-else>
          <col w-75 />
          <col w-100 />
          <col w-100 />
          <col w-100 />
        </colgroup>
        <thead>
          <tr class="head" h-80>
            <th bg="#00000000"></th>
            <th>标准</th>
            <th>专业</th>
            <th>尊贵</th>
          </tr>
        </thead>
        <tbody>
          <tr h-80>
            <td style="border-top-left-radius: 4rem">激活(首入金)</td>
            <td>200 USD</td>
            <td>1000 USD</td>
            <td>5000 USD</td>
          </tr>
          <tr h-80>
            <td>最低交易手数</td>
            <td>0.01</td>
            <td>0.01</td>
            <td>0.1</td>
          </tr>
          <tr h-100>
            <td>点差优惠</td>
            <td>
              黄金低至24美元(每手) <br />
              原油低至34美元(每手)
            </td>
            <td>
              黄金低至22美元(每手) <br />
              原油低至32美元(每手) <br />
              外汇比标准优惠5%以上
            </td>
            <td>
              黄金低至20美元(每手) <br />
              原油低至30美元(每手) <br />
              外汇比标准优惠20%
            </td>
          </tr>
          <tr h-80>
            <td>利率优惠</td>
            <td>-</td>
            <td>比标准优惠10%</td>
            <td>比标准优惠10%</td>
          </tr>
          <tr h-80>
            <td>激活(首入金)</td>
            <td>200 USD</td>
            <td>1000 USD</td>
            <td>5000 USD</td>
          </tr>
          <tr h-150>
            <td>杠杆</td>
            <td>
              外汇 400~500倍 <br />
              黄金, 白银1000倍 <br />原油 400倍 <br />美国指数 1000倍
              <br />欧洲指数 1000倍
            </td>
            <td>
              外汇 400~500倍 <br />
              黄金, 白银1000倍 <br />原油 400倍 <br />美国指数 1000倍
              <br />欧洲指数 1000倍
            </td>
            <td>
              外汇 400~500倍 <br />黄金, 白银1000倍 <br />原油 400倍
              <br />美国指数 1000倍 <br />欧洲指数 1000倍
            </td>
          </tr>
          <tr h-80>
            <td>强平</td>
            <td>30%</td>
            <td>30%</td>
            <td>20%</td>
          </tr>
          <tr h-80>
            <td style="border-bottom-left-radius: 4rem">专属服务</td>
            <td>专业客服服务</td>
            <td>专业客服服务</td>
            <td style="border-bottom-right-radius: 4rem">专属客户经理</td>
          </tr>
        </tbody>
      </table>
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
        选择最适合的账户，让投资更轻松！ <br v-if="!isMobile" />
        我们的客户经理随时为你提供专业建议
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
      background: url('@/assets/images/type/banner.png') no-repeat center;
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
    .block2 {
      background: #f4f7f9;
      padding: 20rem 0;
      table {
        th {
          color: white;
          border-radius: 4rem 4rem 0 0;
        }
        th:nth-of-type(2) {
          background: linear-gradient(90deg, #3090ff 0%, #1b84fc 100%);
        }
        th:nth-of-type(3) {
          background: linear-gradient(90deg, #dac79e 0%, #d6b878 100%);
        }
        th:nth-of-type(4) {
          color: #ffe3a9;
          background: linear-gradient(90deg, #515255 0%, #303030 100%);
        }

        td:nth-of-type(1) {
          background: #fff;
        }
        td:nth-of-type(2) {
          background-color: #f6faff;
        }
        td:nth-of-type(3) {
          background-color: #fffdf8;
        }
        td:nth-of-type(4) {
          background-color: #fdfdfd;
        }
        td {
          padding: 0 7.5rem;
          border-right: 1px solid #f4f4f4;
          border-bottom: 1px solid #f4f4f4;
        }
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
