<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>享受极速资金存取体验</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">入金出金</div>
        <div class="line-right"></div>
      </div>
    </div>

    <div class="block1" h-369 pt-86 pl-240>
      <div class="des" w-620 text-16>
        <div>
          入金和出金是连接客戶的银行账户与交易账户，实现资本投入和收益提取的关键通道。
        </div>
        <div mt-20>
          一个高效、安全的资金存取系统是金融平台的核心竞争力之一，旨在为全球交易者提供无缝、快捷、可靠的资金流转体验。现代平台通常支持多种多样的支付方式，以满足不同地区、不同习惯用户的需求。
        </div>
      </div>
      <img
        v-if="isMobile"
        src="@/assets/images/depositWithdraw/m/block1.png"
        alt=""
      />
    </div>

    <div class="block2" pt-60 pb-80 bg="#F5F7F9">
      <div class="title" text-48 font-700 text-center>入金与出金服务的优点</div>
      <div class="des" mt-20 mb-40 text="center 16">
        一个优秀的资金存取系统具备以下优点，这些优点直接关系到交易者的体验和资金安全：
      </div>
      <div class="wrapper" flex flex-col items-center gap-20>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            1. 极致便捷与高效
          </div>
          <div class="sub" m-30 w-1085 text-16>
            多种支付方式：支持包括银行电汇、信用卡/借记卡、电子钱包等、本地银行转账、在线银行等多种入金渠道。用户可以选择自己最熟悉、最方便的方式。<br />
            24小时可用：平台的入金服务支持全天候操作，让客戶能在市场机会出现时第一时间注入资金
            <br />
            快速处理流程：入金出金可以做到即时到账
          </div>
        </div>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            2. 高度安全与合规
          </div>
          <div class="sub" m-30 w-1085 text-16>
            银行级加密技术：所有资金操作均通过SSL加密技术保护，确保财务信息在传输过程中不被窃取。
            <br />
            严格的监管合规：受权威金融机构监管的平台，必须将客户资金存放于隔离的银行账户中，与公司运营资金完全分离。这意味着即使平台出现财务问题，客户的资金也不会被挪用。
          </div>
        </div>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            3. 透明与低成本
          </div>
          <div class="sub" m-30 w-1085 text-16>
            清晰的费用结构：平台会明确公示各种存取款方式可能产生的手续费，无隐藏费用。
            <br />
            透明的处理时间：平台会明确告知每种出金方式的预计到账时间，让用户心中有数，避免焦虑。
            <br />
            多种货币支持：支持多币种账户，并提供公平的汇率兑换，减少因货币转换而产生的额外成本。
            <br />
          </div>
        </div>
        <div class="item" bg="#fff" w-1440 rounded-16>
          <div class="head" text="24 #fff center" font-700 leading-60 w-260>
            4. 用户友好的体验
          </div>
          <div class="sub" m-30 w-1085 text-16>
            一体化的操作界面：交易平台或交易App内即可轻松完成，流程直观，指引清晰。
            <br />
            操作历史记录：所有存取款记录都会清晰列明在账户历史中，方便用户随时查询、对账
            <br />
            专业的客户支持：如果在资金存取过程中遇到任何问题，能够通过在线聊天、邮件或电话获得专业客服的及时协助。
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isMobile" class="block3" h-712 bg="#fff" py-80>
      <div bg="#F4F7F9" rounded-16 w-1440 m-auto px-40 py-42 flex>
        <div font-700 text="30" leading-43 w-50 mr-28>入金流程</div>
        <div flex gap-20>
          <arrow
            width="52.5rem"
            right
            background="linear-gradient( -90deg, #3090FF 0%, #1B84FC 100%)"
          >
            1.登录账户
            <template #sub> 进入交易平台或交易App </template>
          </arrow>
          <arrow
            width="60rem"
            left
            right
            background="linear-gradient( -90deg, #3090FF 0%, #1B84FC 100%)"
          >
            2.选择“入金”
            <template #sub> 进入资金存款页面 </template>
          </arrow>
          <arrow
            width="60rem"
            left
            right
            background="linear-gradient( -90deg, #3090FF 0%, #1B84FC 100%)"
          >
            3.选择支付方式
            <template #sub> 从支持的选项中选择支付方法 </template>
          </arrow>
          <arrow
            width="60rem"
            left
            right
            background="linear-gradient( -90deg, #3090FF 0%, #1B84FC 100%)"
          >
            4.输入金额并确认
            <template #sub> 填写存款金额，根据指引完成支付 </template>
          </arrow>
          <arrow
            width="67.5rem"
            left
            background="linear-gradient( -90deg, #3090FF 0%, #1B84FC 100%)"
          >
            5.资金到账
            <template #sub>
              成功后，资金会即时或短时间内反映在你的交易账户余额中
            </template>
          </arrow>
        </div>
      </div>
      <div mt-40 bg="#F4F7F9" rounded-16 w-1440 m-auto px-40 py-42 flex>
        <div font-700 text="30" leading-43 w-50 mr-28>出金流程</div>
        <div flex gap-20>
          <arrow
            width="76.25rem"
            right-color="#FFA300"
            right
            background="linear-gradient( -90deg, #FFA300 0%, #ED7A00 100%)"
          >
            1.提交申请
            <template #sub>
              登录交易平台或交易App，找到 “出金”或“提取资金”选项
            </template>
          </arrow>
          <arrow
            width="76.25rem"
            right-color="#FFA300"
            left
            right
            background="linear-gradient( -90deg, #FFA300 0%, #ED7A00 100%)"
          >
            2.填写申请表
            <template #sub> 选择出金方式、输入金额 </template>
          </arrow>
          <arrow
            width="76.25rem"
            right-color="#FFA300"
            left
            right
            background="linear-gradient( -90deg, #FFA300 0%, #ED7A00 100%)"
          >
            3.平台审核处理
            <template #sub> 平台部門进行审核 </template>
          </arrow>
          <arrow
            width="76.25rem"
            right-color="#FFA300"
            left
            background="linear-gradient( -90deg, #FFA300 0%, #ED7A00 100%)"
          >
            4.资金汇出
            <template #sub> 审核通过后，平台将资金汇出到客戶账户 </template>
          </arrow>
        </div>
      </div>
    </div>

    <div v-else bg="#fff" py-20 px-16>
      <div mb-20 text="6rem center" font-700>入金流程</div>
      <div w-full rounded-12 bg="#F4F7F9" p-20>
        <div flex gap-10>
          <div relative pb-37>
            <div
              w-32
              h-32
              rounded-full
              bg="#1677FF"
              text="center 14 #fff"
              font-700
              leading-32
            >
              1
            </div>
            <div border-l="2px solid #1677FF" h-37 absolute left="50%"></div>
          </div>
          <div>
            <div text-16 font-700>登录账户</div>
            <div text-14>进入交易平台或交易App</div>
          </div>
        </div>
        <div flex gap-10>
          <div relative pb-37>
            <div
              w-32
              h-32
              rounded-full
              bg="#1677FF"
              text="center 14 #fff"
              font-700
              leading-32
            >
              2
            </div>
            <div border-l="2px solid #1677FF" h-37 absolute left="50%"></div>
          </div>
          <div>
            <div text-16 font-700>选择“入金”</div>
            <div text-14>进入资金存款页面</div>
          </div>
        </div>
        <div flex gap-10>
          <div relative pb-37>
            <div
              w-32
              h-32
              rounded-full
              bg="#1677FF"
              text="center 14 #fff"
              font-700
              leading-32
            >
              3
            </div>
            <div border-l="2px solid #1677FF" h-37 absolute left="50%"></div>
          </div>
          <div>
            <div text-16 font-700>选择支付方式</div>
            <div text-14>从支持的选项中选择支付方法</div>
          </div>
        </div>
        <div flex gap-10>
          <div relative pb-37>
            <div
              w-32
              h-32
              rounded-full
              bg="#1677FF"
              text="center 14 #fff"
              font-700
              leading-32
            >
              4
            </div>
            <div border-l="2px solid #1677FF" h-37 absolute left="50%"></div>
          </div>
          <div>
            <div text-16 font-700>输入金额并确认</div>
            <div text-14>填写存款金额，根据指引完成支付</div>
          </div>
        </div>
        <div flex gap-10>
          <div relative>
            <div
              w-32
              h-32
              rounded-full
              bg="#1677FF"
              text="center 14 #fff"
              font-700
              leading-32
            >
              5
            </div>
          </div>
          <div>
            <div text-16 font-700>资金到账</div>
            <div text-14>
              成功后，资金会即时或短时间内反映在你的交易账户余额中
            </div>
          </div>
        </div>
      </div>
      <div my-20 text="6rem center" font-700>出金流程</div>
      <div w-full rounded-12 bg="#F4F7F9" p-20>
        <div flex gap-10>
          <div relative pb-37>
            <div
              w-32
              h-32
              rounded-full
              bg="#FFA300"
              text="center 14 #fff"
              font-700
              leading-32
            >
              1
            </div>
            <div border-l="2px solid #FFA300" h-37 absolute left="50%"></div>
          </div>
          <div>
            <div text-16 font-700>提交申请</div>
            <div text-14>登录交易平台或交易App，找到“出金”或“提取资金”选项</div>
          </div>
        </div>
        <div flex gap-10>
          <div relative pb-37>
            <div
              w-32
              h-32
              rounded-full
              bg="#FFA300"
              text="center 14 #fff"
              font-700
              leading-32
            >
              2
            </div>
            <div border-l="2px solid #FFA300" h-37 absolute left="50%"></div>
          </div>
          <div>
            <div text-16 font-700>填写申请表</div>
            <div text-14>选择出金方式、输入金额</div>
          </div>
        </div>
        <div flex gap-10>
          <div relative pb-37>
            <div
              w-32
              h-32
              rounded-full
              bg="#FFA300"
              text="center 14 #fff"
              font-700
              leading-32
            >
              3
            </div>
            <div border-l="2px solid #FFA300" h-37 absolute left="50%"></div>
          </div>
          <div>
            <div text-16 font-700>平台审核处理</div>
            <div text-14>平台部門进行审核</div>
          </div>
        </div>
        <div flex gap-10>
          <div relative>
            <div
              w-32
              h-32
              rounded-full
              bg="#FFA300"
              text="center 14 #fff"
              font-700
              leading-32
            >
              4
            </div>
          </div>
          <div>
            <div text-16 font-700>资金汇出</div>
            <div text-14>审核通过后，平台将资金汇出到客戶账户</div>
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

    <div class="block4" h-600 text="center #fff">
      <div class="content" text="48" font-700 pt-200>
        我们始终以客户资金安全为首要任务，<br v-if="!isMobile" />
        通过技术创新和服务优化，为你提供更加便捷、安全的资金管理体验
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
      background: url('@/assets/images/depositWithdraw/banner.png') no-repeat
        center;
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
      background: url('@/assets/images/depositWithdraw/block1-bg.png') no-repeat
        center;
      background-size: cover;
    }
    .block2 {
      .head {
        border-top-left-radius: 4rem;
        border-bottom-right-radius: 4rem;
        background: linear-gradient(90deg, #3090ff 0%, #1b84fc 100%);
      }
    }
    .register {
      background: #f5f7f9;
      .register-right {
        background: url('@/assets/images/home/register-bg.png') no-repeat center;
        background-size: contain;
      }
    }

    .block4 {
      background: url('@/assets/images/depositWithdraw/block4-bg.png') no-repeat
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
