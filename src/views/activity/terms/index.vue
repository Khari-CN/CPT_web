<template>
  <div>
    <div class="block1" relative>
      <img
        v-if="!isMobile"
        block
        w-full
        h-auto
        src="@/assets/images/terms/banner.png"
      />
      <img
        v-else
        block
        w-full
        h-auto
        src="@/assets/images/terms/m/banner.png"
      />
      <div
        class="title"
        h-300
        w-full
        text="38 center"
        font-700
        absolute
        top-0
        flex
        items-center
        justify-center
      >
        <div>活动条款</div>
      </div>
    </div>
    <div class="block2-wrapper">
      <div class="block2" m-auto w-1100 py-30 px-40 rounded-20 relative>
        <img
          absolute
          h-150
          top-0
          right-0
          src="@/assets/images/terms/terms_bg.png"
          alt=""
        />
        <div class="content" z-1 relative>
          <div text="16" whitespace-nowrap font-700>
            活动时间：2025年10月1日 至2025年10月31日
          </div>
          <div text="16" mt-10>赠金有效期：成功参与至2025年10月31日</div>
          <div text="16" mt-10>
            奖励对象：活动期间首次激活账户且注资金额≥$200的新客户
          </div>
        </div>
      </div>
    </div>

    <div class="block3" w-1100 m-auto mt-80>
      <div class="title" underline underline-amber text="24" font-700>
        活动赠金
      </div>
      <div class="content" text="16 #3D3D3D" mt-20 leading-36>
        1、开户并于48h内充值≥$200可获注册48h激活赠金<span font-700
          >$30~$600</span
        >
        <br />
        2、已激活账户的客户，不论是否48h内充值，满足首入金条件及完成规定手数的客户均可获得首存赠金和交易赠金，赠金高达<span
          font-700
          >$30000</span
        >。
      </div>
      <div class="table-wrapper">
        <table cellspacing="1" mt-30>
          <colgroup>
            <col w-260 />
            <col w-252 />
            <col w-140 />
            <col w-150 />
            <col w-150 />
            <col w-145 />
          </colgroup>
          <tbody>
            <tr class="section1">
              <td class="head" rowspan="5">总活动优惠</td>
              <td class="sub">首入金</td>
              <td font-700>200</td>
              <td font-700>3000</td>
              <td font-700>6000</td>
              <td font-700>20000</td>
            </tr>
            <tr class="section1">
              <td class="sub">注冊48h激活赠金</td>
              <td>30</td>
              <td>300</td>
              <td>400</td>
              <td>600</td>
            </tr>
            <tr class="section1">
              <td class="sub">首存+交易赠金</td>
              <td>270</td>
              <td>4200</td>
              <td>8600</td>
              <td>2940</td>
            </tr>
            <tr class="section1">
              <td class="sub">总赠金力度</td>
              <td>150%</td>
              <td>150%</td>
              <td>150%</td>
              <td>150%</td>
            </tr>
            <tr class="section1">
              <td class="sub">总奖励</td>
              <td>300</td>
              <td>4500</td>
              <td>9000</td>
              <td>30000</td>
            </tr>
            <tr class="section2">
              <td rowspan="2" class="head">【注册48h激活赠金】</td>
              <td class="sub">激活奖励</td>
              <td>30</td>
              <td>300</td>
              <td>400</td>
              <td>600</td>
            </tr>
            <tr class="section2">
              <td class="sub"></td>
              <td colspan="4">
                手数要求：<br />
                注册账户48h内激活账户，即可领取激活奖励， <br />
                激活奖励仅需完成首存赠金交易手数，即可兑换
              </td>
            </tr>
            <tr class="section3">
              <td class="head" rowspan="4">
                【首存赠金】<br />
                <span font-500>(首笔入金>$200)</span>
              </td>
              <td class="sub">
                首存赠金 <br />
                <span font-500>(信用额)</span>
              </td>
              <td>30</td>
              <td>300</td>
              <td>400</td>
              <td>600</td>
            </tr>
            <tr class="section3">
              <td class="sub">
                手数要求 <br />
                <span font-500>(完成即可提取)</span>
              </td>
              <td>4</td>
              <td>40</td>
              <td>50</td>
              <td>75</td>
            </tr>
            <tr class="section3">
              <td class="sub">
                48h激活 <br />
                <span font-500>(相当于每手赠金)</span>
              </td>
              <td>15</td>
              <td>15</td>
              <td>16</td>
              <td>16</td>
            </tr>
            <tr class="section3">
              <td class="sub">
                非48h激活 <br />
                <span font-500>(相当于每手赠金)</span>
              </td>
              <td>7.5</td>
              <td>7.5</td>
              <td>8</td>
              <td>8</td>
            </tr>
            <tr class="section4">
              <td class="head" rowspan="4">
                【交易赠金】<br />
                <span font-500>(10手兑换一次)</span>
              </td>
              <td class="sub">交易赠金</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="section4">
              <td class="sub">赠金最多可兑换</td>
              <td>240</td>
              <td>3900</td>
              <td>8200</td>
              <td>28800</td>
            </tr>
            <tr class="section4">
              <td class="sub">交易赠金总手数</td>
              <td>60</td>
              <td>975</td>
              <td>2050</td>
              <td>5760</td>
            </tr>
            <tr class="section4">
              <td class="sub">每手赠金返还</td>
              <td>4</td>
              <td>4</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="content" text="16 #3D3D3D" mt-30 leading-36>
        3、“注册48h激活赠金券”无需交易，仅需完成首存赠金交易手数，即可兑换。注意要在领取首存赠金券前提下才可以获得交易赠金<br />
        4、
        本次活动赠金有效期到2025年10月31日止，有效期内完成本次活动的规定手数，即可提取相应的赠金，注册48h激活赠金及首存赠金说明：<br />
        5、 开户并于48h内充值≥$200即可领取$30~$600 <br />
        6、
        激活后48h内领取并使用了48h激活赠金券仅需完成首存赠金交易手数，即可在CPT
        APP【我的优惠券】兑换 <br />
        7、
        无论客户是否48h内充值，只要首入金≥$200即可领取首存赠金券$30~$600，完成对应的交易手数要求即可提取
        <br />
        8、
        客户领取并使用首存赠金券后，赠金24小时内到账您的账号，如遇假日将顺延至下个工作日<br />
        9、
        在赠金有效期内未完成首存赠金对应交易手数要求便取款，或在赠金有效期到期后仍未能完成规定的交易手数，对应的赠金活动将自动终止，对应的首存赠金将会被扣除，亦不能兑换48h激活赠金券，客户仍可按手数比例兑换“交易赠金"。客户应确保在没有赠金的情况下，账户中的可用保证金仍然充足
        <br />10、
        如需分笔入金，请在注资时勾选分笔注资，分笔注资需要在24小时内完成，并且在完成分笔注资前不能交易
        <br />11、在赠金有效期内从交易账户申请取款，需要先结束活动所领取的优惠券，若未完成交易手数提前结束活动视为放弃赠金
        <br />12、 登录CPT
        APP【我的优惠券】可查询详细信息：已交易手数、可兑换赠金、兑换赠金的剩余时间；还需交易手数、还可兑换赠金额度、活动结束时间
        <br />13、
        参加赠金活动期间，交易账户爆仓出现亏损导致剩余资金较少，均默认赠金活动继续进行，直至客户主动结束活动或直到赠金活动到期。
      </div>
      <div class="title" mt-40 underline underline-amber text="24" font-700>
        注意事项
      </div>
      <div class="content" text="16 #3D3D3D" mt-30 leading-36 mb-100>
        1、交易手数计算定义：客户开仓1手，然后再行平仓1手，则整个交易来回算1手<br />
        2、为防止恶意套取活动赠金，在活动期间15分钟内建立的所有对冲订单均不计算在活动手数内<br />
        3、如同时参与多个优惠活动，若在结束活动结算时账户余额为负或不足扣除，系统将自动结束其他进行中的活动，且不会另行通知。请注意活动到期前的仓位水平，以避免扣除补仓资金<br />
        4、每位用户（同一身份ID）仅有一次参与资格，禁止同IP，使用非本人身份证件大量激活开户套取赠金行为，一旦发现立即回收赠金<br />
        5、如本司怀疑客户滥用、企图滥用、以其他方式滥用优惠，或怀疑客户使用内部交易账号，外挂操作软件或其他经纪商或个人进行对冲，本司有权停止客户新交易及要求客户取消账户所获投资资金及取消所有交易<br />
        6、若同期有其他优惠活动，客户所享有的其他优惠则以其他优惠之条款规定为准<br />
        7、已激活客户如进行销户再重新开立账户不可参与此次优惠活动<br />
        8、本司保留随时修订、暂停、终止本活动及任何相关规则条款之权利及其解释权。
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

  table {
    .head {
      padding: 0;
      font-size: 6rem;
      text-align: center;
    }
    .head,
    .sub {
      font-weight: 700;
    }
    .section1 {
      td {
        background-color: #e6eaff;
      }
      .head {
        background-color: #bcc7ff;
      }
      .sub {
        background-color: #d6ddff;
      }
    }
    .section2 {
      td {
        background-color: #d5f4ef;
      }
      .head {
        background-color: #abe5db;
      }
      .sub {
        background-color: #c2f6ed;
      }
    }
    .section3 {
      td {
        background-color: #fff4da;
      }
      .head {
        background-color: #fee7b1;
      }
      .sub {
        background-color: #fff0cd;
      }
    }
    .section4 {
      td {
        background-color: #f3edfa;
      }
      .head {
        background-color: #dccaf3;
      }
      .sub {
        background-color: #ebe2f6;
      }
    }
    td {
      font-size: 5rem;
      padding: 3.75rem 5rem;
    }
  }
  .block2 {
    background: linear-gradient(180deg, #eef5ff 0%, #e5f0ff 99%);
  }
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
