<template>
  <div>
    <home-title></home-title>
    <img
      v-if="!isMobile"
      block
      w-full
      h-auto
      src="@/assets/images/home/banner3.png"
      alt=""
      srcset=""
    />
    <img
      v-else
      block
      w-full
      h-auto
      src="@/assets/images/home/m/banner3.png"
      alt=""
      srcset=""
    />
    <div bg="#F5F7F9">
      <div class="block1" pt-100>
        <div class="title" text="38 center" font-700>活动赠金</div>
        <div class="wrapper" flex justify-center flex-wrap mt-40 gap-20>
          <div class="item" w-540 h-210 rounded-16 relative>
            <div class="head">Tier 1</div>
            <img
              z-1
              absolute
              right-0
              bottom-0
              src="@/assets/images/newCustomer/newcustomer_tier1_bg.png"
            />
            <div class="content" px-30 text="22" z-10 relative>
              <div mt-26 font-700>活动期间首次开户并于48h内充值≥$200</div>
              <div mt-10>
                可获注册48h激活
                <span text="#F7521F" font-700>赠金$30~$600</span>
              </div>
            </div>
          </div>
          <div class="item" w-540 h-210 rounded-16 relative>
            <div class="head">Tier 2</div>
            <img
              z-1
              absolute
              right-0
              bottom-0
              src="@/assets/images/newCustomer/newcustomer_tier2_bg.png"
            />
            <div
              class="content"
              mt-10
              leading-32
              w-450
              px-30
              text="22"
              z-2
              relative
            >
              <div class="des">
                已激活账户的客户，不论是否48h内充值，满足首入金条件及完成规定手数的客户均可获得首存赠金和交易赠金
                <br />
                <span text="#F7521F" font-700>赠金高达$30000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block2" pt-100>
        <div class="title" text="38 center" font-700>0元注册</div>
        <div class="sub" text="#F7521F 26 center" font-700>赠金高达$30000</div>
        <div class="wrapper" w-1100 m-auto mt-40 bg="#FBFAF2" flex rounded-20>
          <div class="content" pt-40 pl-30 flex-1>
            <div class="clip-text" text="22" font-700>
              “注册48h激活赠金券”无需交易，仅需完成首存赠金交易手数，即可兑换
            </div>
            <div class="des" mt-30 text="16">
              <div flex items-center gap-8 whitespace-nowrap>
                <div class="dot" w-10 h-10 rounded-5 bg="#FFA300"></div>
                <div>注意要在领取首存赠金券前提下才可以获得交易赠金</div>
              </div>
              <div flex items-center gap-8 whitespace-nowrap>
                <div class="dot" w-10 h-10 rounded-5 bg="#FFA300"></div>
                <div>本次活动赠金有效期到2025年10月31日止</div>
              </div>
              <div flex items-center gap-8 whitespace-nowrap>
                <div class="dot" w-10 h-10 rounded-5 bg="#FFA300"></div>
                <div>有效期内完成本次活动的规定手数，即可提取相应的赠金</div>
              </div>
            </div>
          </div>
          <img src="@/assets/images/newCustomer/newcustomer_banner2_img.png" />
        </div>
      </div>

      <div class="block3" pt-100>
        <div class="title" text="38 center" font-700>请于激活账户48小时内</div>
        <div class="wrapper" flex items-center mt-40 justify-center>
          <div class="item" flex flex-col items-center>
            <div text-16 w-340>
              1.于“CPT APP”＞【我的-领券中心】领取对应优惠券
            </div>
            <img mt-32 src="@/assets/images/home/phone.png" w-222 h-auto />
          </div>
          <img
            w-40
            h-40
            src="@/assets/images/newCustomer/newcustomer_arrow_img.png"
          />
          <div class="item" flex flex-col items-center>
            <div text-16 w-340>
              2.并在领取后的3天内>于【我的优惠券-待使用】位置
            </div>
            <img mt-32 src="@/assets/images/home/phone.png" w-222 h-auto />
          </div>
          <img
            w-40
            h-40
            src="@/assets/images/newCustomer/newcustomer_arrow_img.png"
          />
          <div class="item" flex flex-col items-center>
            <div text-16 w-340>
              3.点击“立即使用”对应优惠券，才可参与赠金活动及开始计算活动交易手
              数，逾期视为自动放弃参与活动
            </div>
            <img mt-32 src="@/assets/images/home/phone.png" w-222 h-auto />
          </div>
        </div>
      </div>

      <div class="block4">
        <div bg="#fff" w-1100 m-auto mt-100 p-35 rounded-20 relative>
          <img
            v-if="!isMobile"
            absolute
            right-0
            top-0
            src="@/assets/images/newCustomer/newcustomer_banner4_img.png"
            alt=""
          />
          <img
            v-else
            absolute
            right-0
            top-0
            src="@/assets/images/newCustomer/m/newcustomer_banner4_img.png"
            alt=""
          />
          <div class="section1" flex>
            <img
              w-152
              h-152
              src="@/assets/images/newCustomer/avatar.png"
              alt=""
            />
            <div class="content" ml-30 z-1>
              <div class="title" mt-20 text="22" font-700>例子：</div>
              <div class="des" w-490 text="16" mt-10>
                陈先生于10月1日02:00注册账户，于10月1日03:00注资
                <span text="#FFA300" font-700>$3000</span> 激活账户
              </div>
            </div>
          </div>
          <div class="section2" relative mt-30 text="22" font-700 z-1>
            首先陈先生需要于CPT APP【领券中心】领取三张优惠券：
          </div>
          <div class="section3" mt-20 text="16" z-1 relative>
            <span color="#7D7D80">第一张：</span>
            <span font-700> $300“注册48h激活赠金”</span>
            <span color="#7D7D80">（仅需完成首存赠金交易手数40手）</span>
          </div>
          <div class="section3" mt-10 text="16" z-1 relative>
            <span color="#7D7D80">第二张：</span>
            <span font-700> $300首存赠金券</span>

            <span color="#7D7D80">（完成40手）</span>
          </div>
          <div class="section3" mt-10 text="16" z-1 relative>
            <span color="#7D7D80">第三张：</span>
            <span font-700> $3900交易赠金券</span>
            <span color="#7D7D80">（每手返还$4）</span>
          </div>
          <div class="divider" mt-30 border-b="1px solid #D8D8D8"></div>
          <div class="section4" mt-30 text="22" font-700>使用方法：</div>
          <div class="section5" mt-20 text="16 #7D7D80">
            接着陈先生于【我的优惠券】>【待使用】位置＞选择【立即使用】三张赠金券，才可成功参与赠金活动陈先生可于【进行中】位置查看活动进度及活动结束时间最后，陈先生于2025年10月31日23:59分前累计完成975手，可将总赠金<span
              text="22 #FFA300"
              class="section5"
              >$4500</span
            >
            提现
          </div>
          <div class="section3" mt-10 text="16" font-700>
            活动时间：2025年10月1日 至2025年10月31日 <br />
            赠金有效期：成功参与至2025年10月31日
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

  .clip-text {
    color: #ff6a00;
    background: linear-gradient(90deg, #ffa300 0%, #ff6a00 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (min-width: 768px) {
    .banner {
      background: url('@/assets/images/home/banner3.png') no-repeat center;
      background-size: cover;
    }
    .block1 {
      .head {
        background-color: #2e3760;
        padding: 2rem 6rem;
        font-size: 5.5rem;
        color: #fff;
        display: inline-block;
        border-top-left-radius: 4rem;
        border-bottom-right-radius: 4rem;
      }
      .item {
        background: linear-gradient(180deg, #e2eeff 0%, #cddbff 97%);
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
