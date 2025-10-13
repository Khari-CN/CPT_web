<template>
  <div>
    <home-title></home-title>
    <div class="banner" text="center #fff" h-600 pt-230>
      <div flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="title" text="96" font="700">合约细则</div>
        <div class="line-right"></div>
      </div>
    </div>
    <div class="block1" h-160 pt-57 text="16 center" font-700>
      <div>在开始任何交易之前</div>
      <div>充分了解关于交易产品的更多资讯和交易條件</div>
    </div>

    <div class="block2" bg="#f4f7f9" px-16 py-20>
      <div class="title" text="24 center" font-700>交易时间</div>
      <table m-auto mt-10 cellspacing="0">
        <colgroup>
          <col class="col1" w-103 />
          <col class="col2" w-120 />
          <col class="col3" w-120 />
        </colgroup>
        <thead>
          <tr h-40>
            <th style="border-top-left-radius: 2rem">交易产品</th>
            <th>(夏令)</th>
            <th style="border-top-right-radius: 2rem">(冬令)</th>
          </tr>
        </thead>
        <tbody>
          <tr h-76>
            <td text="#1677FF">外汇</td>
            <td>
              開市:星期一 05:05 至 星期六 04:55 休市:星期二至星期五 05:00至05:05
            </td>
            <td>
              開市:星期一 06:05 至 星期六 05:55 休市:星期二至星期五 06:00至07:05
            </td>
          </tr>
          <tr h-40>
            <td text="#1677FF" bg="#F4F7F9">指数</td>
            <td bg="#F4F7F9"></td>
            <td bg="#F4F7F9"></td>
          </tr>
          <tr h-90>
            <td>英国富时100指数</td>
            <td>
              開市:星期一 08:20 至 星期六 03:55 <br />
              休市:星期二 至 星期五 每天04:00 至08:16
            </td>
            <td>
              開市:星期一 09:20 至 星期六 04:55 <br />
              休市:星期二 至 星期五 每天05:00 至09:16
            </td>
          </tr>
          <tr h-118>
            <td>A50指数</td>
            <td>
              開市:星期一09:05 至 星期六 04:55 <br />
              休市:星期一至星期五 每日16:30至16:45 星期二至星期五
              每日05:00至09:01
            </td>
            <td>
              開市:星期一09:05 至 星期六 04:55 <br />
              休市:星期一至星期五 每日16:30至16:45 星期二至星期五
              每日05:00至09:01
            </td>
          </tr>
          <tr h-90>
            <td>德国法兰克福DAX指数</td>
            <td>
              開市:星期一 08:20 至 星期六 03:55 <br />
              休市:星期二 至 星期五 每天04:00 至08:16
            </td>
            <td>
              開市:星期一 09:20 至 星期六 04:55 <br />
              休市:星期二 至 星期五 每天05:00 至09:16
            </td>
          </tr>
          <tr h-174>
            <td>香港恒生指数</td>
            <td>
              開市: 星期一09:20 至 星期六 02:55 <br />
              休市: 星期一 至 星期四 每天12:00至13:00，16:30至17:15，翌日03:00
              至 09:16 星期五 12:00至13:00，16:30至17:15
            </td>
            <td>
              開市: 星期一09:20 至 星期六 02:55 <br />
              休市: 星期一 至 星期四 每天12:00至13:00，16:30至17:15，翌日03:00
              至 09:16 星期五 12:00至13:00，16:30至17:15
            </td>
          </tr>
          <tr h-76>
            <td>纳斯达克100指数</td>
            <td>
              開市:星期一 06:05 至 星期六 04:55 <br />休市:星期二至星期五
              05:00至06:01
            </td>
            <td>
              開市:星期一 07:05 至 星期六 05:55 <br />休市:星期二至星期五
              06:00至07:01
            </td>
          </tr>
          <tr h-76>
            <td>道琼斯工业平均指数</td>
            <td>
              開市:星期一 06:05 至 星期六 04:55 <br />
              休市:星期二至星期五 05:00至06:01
            </td>
            <td>
              開市:星期一 07:05 至 星期六 05:55 <br />休市:星期二至星期五
              06:00至07:01
            </td>
          </tr>
          <tr h-76>
            <td text="#1677FF">贵金属</td>
            <td>
              開市:星期一 06:05 至 星期六 04:55 <br />休市:星期二至星期五
              05:00至06:01
            </td>
            <td>
              開市:星期一 07:05 至 星期六 05:55 <br />休市:星期二至星期五
              06:00至07:01
            </td>
          </tr>
          <tr h-76>
            <td style="border-bottom-left-radius: 2rem" text="#1677FF">能源</td>
            <td>
              開市:星期一 06:05 至 星期六 04:55 <br />休市:星期二至星期五
              05:00至06:01
            </td>
            <td style="border-bottom-right-radius: 2rem">
              開市:星期一 07:05 至 星期六 05:55 <br />休市:星期二至星期五
              06:00至07:01
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="block3" bg="white" px-16 py-20>
      <div class="title" text="24 center" font-700>保证金 & 杠杆</div>
      <table m-auto mt-10 cellspacing="0">
        <colgroup>
          <col class="col1" w-103 />
          <col class="col2" w-120 />
          <col class="col3" w-120 />
        </colgroup>
        <thead>
          <tr h-40>
            <th style="border-top-left-radius: 2rem">交易产品</th>
            <th>保证金%</th>
            <th style="border-top-right-radius: 2rem">杠杆</th>
          </tr>
        </thead>
        <tbody>
          <tr h-40>
            <td text="#1677FF">外汇</td>
            <td>0.20%-0.25%</td>
            <td>400倍-500倍</td>
          </tr>
          <tr h-40>
            <td text="#1677FF" bg="#F4F7F9">指数</td>
            <td bg="#F4F7F9"></td>
            <td bg="#F4F7F9"></td>
          </tr>
          <tr h-60>
            <td>英国富时100指数</td>
            <td>0.20%</td>
            <td>500倍</td>
          </tr>
          <tr h-40>
            <td>A50指数</td>
            <td>0.50%</td>
            <td>200倍</td>
          </tr>
          <tr h-60>
            <td>德国法兰克福DAX指数</td>
            <td>0.10%</td>
            <td>1000倍</td>
          </tr>
          <tr h-60>
            <td>香港恒生指数</td>
            <td>0.25%</td>
            <td>400倍</td>
          </tr>
          <tr h-60>
            <td>纳斯达克100指数</td>
            <td>0.10%</td>
            <td>1000倍</td>
          </tr>
          <tr h-40>
            <td>标普500指数</td>
            <td>0.10%</td>
            <td>1000倍</td>
          </tr>
          <tr h-60>
            <td>道琼斯工业平均指数</td>
            <td>0.10%</td>
            <td>1000倍</td>
          </tr>
          <tr h-40>
            <td text="#1677FF">贵金属</td>
            <td>0.10%</td>
            <td>1000倍</td>
          </tr>
          <tr h-40>
            <td style="border-bottom-left-radius: 2rem" text="#1677FF">能源</td>
            <td>0.25%</td>
            <td style="border-bottom-right-radius: 2rem">400倍</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="block4" bg="f4f7f9" px-16 py-20>
      <div class="title" text="24 center" font-700>最低点差</div>
      <table m-auto mt-10 cellspacing="0">
        <colgroup>
          <col class="col1" w-171 />
          <col class="col2" w-171 />
        </colgroup>
        <thead>
          <tr h-40>
            <th style="border-top-left-radius: 2rem">交易产品</th>
            <th style="border-top-right-radius: 2rem">最低点差</th>
          </tr>
        </thead>
        <tbody>
          <tr h-40>
            <td text="#1677FF">外汇</td>
            <td>0.5-0.7</td>
          </tr>
          <tr h-40>
            <td text="#1677FF" bg="#F4F7F9">指数</td>
            <td bg="#F4F7F9"></td>
          </tr>
          <tr h-60>
            <td>英国富时100指数</td>
            <td>1.2</td>
          </tr>
          <tr h-40>
            <td>A50指数</td>
            <td>3.2</td>
          </tr>
          <tr h-60>
            <td>德国法兰克福DAX指数</td>
            <td>1.2</td>
          </tr>
          <tr h-60>
            <td>香港恒生指数</td>
            <td>56.9</td>
          </tr>
          <tr h-60>
            <td>纳斯达克100指数</td>
            <td>1.2</td>
          </tr>
          <tr h-40>
            <td>标普500指数</td>
            <td>3.5</td>
          </tr>
          <tr h-60>
            <td>道琼斯工业平均指数</td>
            <td>0.10%</td>
          </tr>
          <tr h-40>
            <td text="#1677FF">贵金属</td>
            <td>2.1</td>
          </tr>
          <tr h-40>
            <td style="border-bottom-left-radius: 2rem" text="#1677FF">能源</td>
            <td style="border-bottom-right-radius: 2rem">1.6</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="block5" h-600>
      <div class="content" text="18 center #fff" pt-230>
        不同交易产品在交易时间、杠杆比例等方面存在差异，这些重要信息都在合约细则中明确载明。客户想深入了解各交易产品详情，请查看合约细则
        <br />
        <n-button
          class="btn"
          @click="toFile"
          mt-10
          w-120
          h-40
          color="#00A3E7"
          round
          >合约细则</n-button
        >
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

  const toFile = () => {
    const base = import.meta.env.MODE === 'uat' ? '/CPT_web' : ''
    window.open(`${base}/product-agreement.pdf`, '_blank')
  }
</script>

<style scoped>
  @import url('./mobile.scss');
  @media screen and (min-width: 768px) {
    .banner {
      background: url('@/assets/images/agreement/banner.png') no-repeat center;
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
      height: 92.5rem;
      padding-top: 28.5rem;
      font-size: 12rem;
      background: url('@/assets/images/real/block1-bg.png') no-repeat center;
      background-size: cover;
    }
    .block2,
    .block3,
    .block4 {
      padding: 15rem 0;
      .title {
        font-size: 12rem;
      }

      table {
        margin-top: 10rem;
        border-left: 1px solid #f4f4f4;
        border-radius: 2rem;
        .col1 {
          width: 77.5rem;
        }
        .col2 {
          width: 160.5rem;
        }
        .col3 {
          width: 122rem;
        }
        th {
          padding: 5.2rem 7.5rem;
          font-size: 6rem;
          color: white;
          background: linear-gradient(180deg, #006aff 0%, #1161d1 99%);
          border-right: 1px solid #f4f4f4;
          border-bottom: 1px solid #f4f4f4;
        }

        td {
          padding: 5.2rem 7.5rem;
          font-size: 4rem;
          background: #fff;
          border-right: 1px solid #f4f4f4;
          border-bottom: 1px solid #f4f4f4;
          &:nth-of-type(1) {
            font-size: 6rem;
            font-weight: 700;
          }
        }
        tr:nth-of-type(2) td {
          background: #f4f7f9;
        }
      }
    }

    .block4 {
      background: #f4f7f9;
      table {
        .col1,
        .col2 {
          width: 180rem;
        }
      }
    }

    .block5 {
      background: url('@/assets/images/agreement/block5-bg.png') no-repeat
        center;
      background-size: cover;
      padding: 0 4rem;
      width: 100%;
      height: 150rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        padding-top: 0;
        font-size: 12rem;
        max-width: 288.5rem;
        .btn {
          margin-top: 10rem;
          height: 20rem;
          width: 92rem;
          font-size: 6rem;
        }
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
