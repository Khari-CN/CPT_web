<template>
  <div>
    <home-title></home-title>
    <div bg="#F3F6F9">
      <img
        v-if="!isMobile"
        block
        w-full
        h-auto
        src="@/assets/images/home/banner2.png"
        alt=""
        srcset=""
      />
      <img
        v-else
        block
        w-full
        h-auto
        src="@/assets/images/home/m/banner2.png"
        alt=""
        srcset=""
      />
      <div v-if="!isMobile" class="wrapper" w-1100 m-auto>
        <div
          class="block1"
          mt-100
          h-350
          m-auto
          flex
          bg="#fff"
          rounded-16
          overflow-hidden
        >
          <div
            class="code-wrapper"
            w-260
            text-center
            flex
            flex-col
            items-center
            justify-center
            gap-14
          >
            <div text="22" font-700>二维码邀请</div>
            <n-qr-code box-content value="2222"></n-qr-code>
            <n-button color="#fff" text-color="#26579D" round
              >下载二维码</n-button
            >
          </div>
          <div p-40 flex-1>
            <div
              class="item1"
              flex
              justify-between
              items-center
              px-30
              py-23
              bg="#F0F2FE"
              rounded-8
              relative
            >
              <div flex-1>
                <div text="#7D7D80 22">你的专属推荐链接</div>
                <div text-16 mt-4>https://www.cptglobles.com</div>
              </div>
              <n-button z-1 color="#26579D" round>复制链接</n-button>
              <img
                h-full
                w-auto
                absolute
                right-0
                z-0
                src="@/assets/images/recommend/block1-bg.png"
                alt=""
              />
            </div>
            <div
              class="item2"
              flex
              mt-30
              justify-between
              items-center
              px-30
              py-43
              bg="#FFF8F4"
              rounded-8
              relative
            >
              <div text="#7D7D80 22">
                好友注册激活，你即可享
                <span text="30 #FF794A">“$28”</span>,收益无上限
              </div>
              <img
                h-full
                w-auto
                absolute
                right-0
                z-0
                src="@/assets/images/recommend/block1-bg2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="block2" mt-100>
          <div flex gap-60 items-center>
            <div flex-1>
              <div class="clip-text" text="38 center" font-700>
                什么是联盟计划？
              </div>
              <div mt-25 text="22">
                联盟计划是一个客户推荐机制，只要你的好友在你推荐的平台开户操作，你即可持续获得佣金。我们为你打造一个真实可靠、高收益的合作方式，真正的实现共赢。
              </div>
              <div mt-20 text="22">
                确认加入联盟推荐计划后，你只需分享你的专属链接/二维码给好友，你的好友注册后，即成为你的客户。
              </div>
            </div>
            <img
              w-500
              h-auto
              src="@/assets/images/recommend/block2-icon1.png"
              alt=""
            />
          </div>
          <div flex gap-60 items-center mt-80>
            <img
              w-500
              h-auto
              src="@/assets/images/recommend/block2-icon2.png"
              alt=""
            />
            <div flex-1>
              <div class="clip-text" text="38 center" font-700>
                推广费轻松赚！
              </div>
              <div mt-25 text="22" font-700>
                好友注册激活，你即可享$28，收益无上限！
              </div>
              <div mt-30 text="22">
                <span font-700>提现方式：</span> <br />
                可提现至交易平台绑定的银行卡。你可于每月1-8日进行申请，领取上个月的收益。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div bg="#fff" py-30 px-16>
          <div text="14" font-600 mb-10>你的专属推荐链接</div>
          <div flex justify-between bg="#EAF2FF" rounded-4>
            <div px="10" py="12" flex-1>https://www.cptglobles.com</div>
            <n-button h-44 color="#26579D">复制链接</n-button>
          </div>
          <div text="center 18" font-700 mt-20>二维码邀请</div>
          <div
            mt-18
            pt-8px
            pl-8px
            pr-20px
            pb-20px
            w-180
            h-180
            rounded-8
            b="2px solid #26579D"
            m-auto
          >
            <n-qr-code :size="140" value="text" />
          </div>
          <div text-align="center">
            <n-button text-color="#26579D" round w-180 mt-14 h-40
              >下载二维码</n-button
            >
          </div>
        </div>
        <div px-16 py="30" bg="#F6F6F6" pb-0>
          <div bg="#fff" rounded-18>
            <img
              w-full
              h-auto
              src="@/assets/images/recommend/block2-icon1.png"
              alt=""
            />

            <div p-20 pt-0>
              <div class="clip-text" text="24 center" font-700 mt-30>
                什么是联盟计划？
              </div>
              <div mt-10 text="14">
                联盟计划是一个客户推荐机制，只要你的好友在你推荐的平台开户操作，你即可持续获得佣金。我们为你打造一个真实可靠、高收益的合作方式，真正的实现共赢。
              </div>
              <div mt-20 text="14">
                确认加入联盟推荐计划后，你只需分享你的专属链接/二维码给好友，你的好友注册后，即成为你的客户。
              </div>
            </div>
          </div>
          <div mt-40 bg="#fff" rounded-18>
            <img
              w-full
              h-auto
              src="@/assets/images/recommend/block2-icon2.png"
              alt=""
            />

            <div p-20 pt-0>
              <div class="clip-text" text="24 center" font-700 mt-30>
                推广费轻松赚！
              </div>
              <div mt-25 text="14" font-700>
                好友注册激活，你即可享
                <span text="20 #FF794A"> $28</span>，收益无上限！
              </div>
              <div mt-15 text="14">
                <span font-700>提现方式：</span> <br />
                可提现至交易平台绑定的银行卡。你可于每月1-8日进行申请，领取上个月的收益。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block3" w-1100 m-auto my-100>
        <div class="title" text="38 center" font-700>广告联盟规则</div>
        <div class="content" flex flex-col mt-40 gap-20 text-16>
          <div>1.广告主名下推荐的客户后续产生的交易与广告主无任何联系。</div>
          <div>2.用户不能互为推荐人。</div>
          <div>
            3.同一客户只能被一位联盟用户推荐。相同手机号、相同身份信息、相同IP地
            址、同一设备均视为同一用户。
          </div>
          <div>
            4.联盟计划的推荐客户必须通过本人的推荐二维码、推荐码或者专属链接进行开户，方可获得推广费用。
          </div>
          <div>
            5 .参与后，本人和其客户获得的权益均为公司活动权益，公司有权回收由系统漏洞、黑客工具、虚假交易等违规操作所获得的权益。
          </div>
          <div>
            6 .如果客户开户后未长时间未激活导致账户休眠，或客户因个人原因进行销户后再开户，则不会计算联盟成员的推广收益。
          </div>
          <div>
            7.本公司在法律允许范围内享有对邀请码和附加权益的最终解释权。
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
    color: #26579d;
    background: linear-gradient(-90deg, #26579d 0%, #5fb7e7 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (min-width: 768px) {
    .block1 {
      .code-wrapper {
        background: linear-gradient(180deg, #ced0ff 0%, #cfdcff 100%);
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
