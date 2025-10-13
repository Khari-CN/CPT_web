<template>
  <div>
    <home-title></home-title>
    <div class="banner" h-600 text="center #fff">
      <div class="title" text="96" font-700 pt-100>创造财富 由此开始</div>
      <div text="36" flex justify-center gap-20>
        <div class="line-left"></div>
        <div class="sub">认识我们</div>
        <div class="line-right"></div>
      </div>
    </div>
    <div class="story" h-520 pl-240 pt-80>
      <div text-48 font-700>我们的故事</div>
      <div class="story-content" mt-30 text-18px w-620>
        CPT Markets
        是一家享有盛誉的国际公司，致力于为全球投资者提供多元化、高流动性的交易选择。我们提供超过130种交易产品，涵盖外汇、大宗商品及指数等多个领域，满足不同交易者的策略与需求。
        <br />
        资金安全始终是我们的核心承诺，我们通过严格的监管合规措施、先进的加密技术及隔离账户管理，全力保障客户资金的安全与透明。同时，我们以高效稳定的交易系统、低延迟的执行能力和用户友好的平台体验，为客户提供安全、便捷、专业的交易环境。
        凭借卓越的服务品质与可靠的交易平台，CPT
        Markets已成为全球众多交易者信赖的首选品牌。
      </div>
    </div>
    <div class="award" pt-60 pb-80>
      <div v-if="!isMobile" class="title" text-center text="48" font-700>
        荣誉和奖项
      </div>
      <div v-else class="title" text-center text="24" font-700>
        体验获奖的交易平台
      </div>
      <div class="description" mt-20 text-center>
        我们所获得的每一项荣誉，即是行业与市场对我们专业能力和服务品质的权威认可，更是使我们不断超越自我的责任与使命
      </div>
      <div v-if="!isMobile" flex justify-center gap-20 mt-40 text-center>
        <n-carousel
          :slides-per-view="4"
          :space-between="20"
          :loop="false"
          draggable
        >
          <div>
            <img src="@/assets/images/home/award-1.png" w-240 h-240 alt="" />
            <div text="16">迪拜MFFM奖项</div>
          </div>
          <div>
            <img src="@/assets/images/home/award-2.png" w-240 h-240 alt="" />
            <div text="16">国际金融奖项</div>
          </div>
          <div>
            <img src="@/assets/images/home/award-3.png" w-240 h-240 alt="" />
            <div text="16">
              最具信誉 <br />
              外汇经纪商
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/award-4.png" w-240 h-240 alt="" />
            <div text="16">
              最具信誉 <br />
              外汇经纪商
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/award-5.png" w-240 h-240 alt="" />
            <div text="16">
              阿联酋国际金融 <br />
              衍生品提供商
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/award-6.png" w-240 h-240 alt="" />
            <div text="16">最佳监管经纪商</div>
          </div>
          <div>
            <img src="@/assets/images/home/award-7.png" w-240 h-240 alt="" />
            <div text="16">
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
    <div class="organization" pt-60 pb-80>
      <div class="title" text="white 48 center" font-700>全球金融机构信赖</div>
      <div class="sub" text="white 16 center">
        我们深知金融服务的基石是信任 <span v-if="!isMobile">，</span>
        <br v-if="isMobile" />
        而信任源于安全合规与严格监管
      </div>
      <div class="list" flex flex-wrap justify-center gap-90 mt-30>
        <div
          class="item"
          relative
          pt-20
          pr-20
          pb-30
          pl-70
          bg="white"
          rounded-16
        >
          <div class="title" text="#1677FF 20" font-900>
            Aofa- CPT Global Limited
          </div>
          <div class="content" w-560 text="16px #2C2C2C" mt-10 break-all>
            CPT Global Limited（“CPT
            Global”）是一家由安儒昂离岸金融管理局授权的公司，许可证号为
            L15643/CPTG。该许可证允许 CPT Global 从事外汇
            (Forex)、股票、差价合约 (CFD)、外汇商品和受监管证券的经纪服务。
          </div>
          <div class="sub-content" text="16 #2C2C2C" mt-10>
            CPT Global 注册于科摩罗联盟安儒昂自治岛穆察穆
          </div>
          <img
            absolute
            w-100
            h-100
            top-20
            left--50
            src="@/assets/images/about/Aofa.png"
            alt=""
            srcset=""
          />
        </div>
        <div
          class="item"
          relative
          pt-20
          pr-20
          pb-30
          pl-70
          bg="white"
          rounded-16
        >
          <div class="title" text="#1677FF 20" font-900>
            FSCA - CPT Markets PTY Ltd
          </div>
          <div class="content" w-560 text="16px #2C2C2C" mt-10 break-all>
            CPT Markets PTY LTD (“CPT SA”)为CPT Markets
            Ltd所使用的交易名称，注册地为南非，受南非金融部监管局监管，
            <br />
            许可证编号为：No. 2014 / 214730 / 07 。
          </div>
          <img
            absolute
            w-100
            h-100
            top-20
            left--50
            src="@/assets/images/about/fsca.png"
            alt=""
            srcset=""
          />
        </div>
        <div
          class="item"
          relative
          pt-20
          pr-20
          pb-30
          pl-70
          bg="white"
          rounded-16
        >
          <div class="title" text="#1677FF 20" font-900>IFSC- CPT Belize</div>
          <div class="content" w-560 text="16px #2C2C2C" mt-10 break-all>
            CPT Markets为CPT Markets
            Limited所使用的交易名称，注册地为伯利茲，受伯利茲国际金融服务委员会监管，
            <br />
            许可证编号为：No. FSC000314/17。
          </div>
          <img
            absolute
            w-100
            h-100
            top-20
            left--50
            src="@/assets/images/about/ifsc.png"
            alt=""
            srcset=""
          />
        </div>
        <div
          class="item"
          relative
          pt-20
          pr-20
          pb-30
          pl-70
          bg="white"
          rounded-16
        >
          <div class="title" text="#1677FF 20" font-900>
            FCA - CPT Markets UK Ltd
          </div>
          <div class="content" w-560 text="16px #2C2C2C" mt-10 break-all>
            CPT Markets UK为CPT Markets UK
            Limited所使用的交易名称，该公司的注册地址位于英格兰威尔士，注册编号为6707165，由英国金融行为管理局（FCA）授权和管理，编号为606110。CPT
            Markets UK Limited是CPT Markets Limited的关联公司。
          </div>
          <img
            absolute
            w-100
            h-100
            top-20
            left--50
            src="@/assets/images/about/fca.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
    <div class="team" h-760 relative pt-60>
      <div class="title" text="48 center" font-700>
        汇聚世界级人才的多元化团队
      </div>
      <div class="sub" text="16px center" mt-20>
        我们有来自不同领域的顶尖专业背景人才，遍布全球的卓越团队，持续创新，深刻理解全球市场，并为客户创造真正具有前瞻性的交易平台
      </div>
      <img
        class="img1"
        absolute
        w-128
        h-128
        left-435
        top-252
        src="@/assets/images/about/team1-avatar.png"
      />
      <img
        class="img2"
        absolute
        w-128
        h-128
        left-940
        top-226
        src="@/assets/images/about/team2-avatar.png"
      />
      <img
        class="img3"
        absolute
        w-128
        h-128
        left-1158
        top-309
        src="@/assets/images/about/team3-avatar.png"
      />
      <img
        class="img4"
        absolute
        w-128
        h-128
        left-1402
        top-251
        src="@/assets/images/about/team4-avatar.png"
      />
      <img
        class="img5"
        absolute
        w-128
        h-128
        left-957
        top-437
        src="@/assets/images/about/team5-avatar.png"
      />
      <img
        class="img6"
        absolute
        w-128
        h-128
        left-749
        top-352
        src="@/assets/images/about/team6-avatar.png"
      />
      <img
        class="img7"
        absolute
        w-128
        h-128
        left-579
        top-534
        src="@/assets/images/about/team7-avatar.png"
      />
      <img
        class="img8"
        absolute
        w-128
        h-128
        left-1274
        top-502
        src="@/assets/images/about/team8-avatar.png"
      />
    </div>
    <div class="subscription" text-white h-470 pt-60>
      <div class="title" text="48 center" font-700>独家优惠 仅限订阅</div>
      <div class="sub" text="16px center" mt-20>
        想第一时间获知市场最新动态 <br v-if="isMobile" />
        及GPT Markets Group最新的活动奖励吗？ <br />
        主立即订阅我们的专属通讯，助你在投资路上快人一步
      </div>
      <div class="input-wrapper" flex justify-center mt-40>
        <n-input-group w-680>
          <n-input
            class="input"
            text-18
            h-80
            placeholder="电子邮件"
            rounded-16
          />
          <n-button v-if="!isMobile" text-18 color="#2240A2" h-80 rounded-16>
            立即订阅
          </n-button>
        </n-input-group>
      </div>
      <div v-if="isMobile">
        <n-button mt-16 h-44 w-full color="#2240A2" rounded-8
          >立即订阅</n-button
        >
      </div>
      <div class="checkbox-wrapper" mt-20 text-center>
        <n-checkbox :theme-overrides="checkboxOverrides"
          >我同意根据隐私政策和条款使用我的数据</n-checkbox
        >
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
    <div class="download" h-370 pt-60>
      <div class="title" text="48 center white" font-700>
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
  import type { CheckboxProps } from 'naive-ui'

  const { isMobile } = storeToRefs(useGlobalStore())
  type ButtonThemeOverrides = NonNullable<CheckboxProps['themeOverrides']>
  const checkboxOverrides: ButtonThemeOverrides = {
    textColor: 'white',
  }
</script>

<style scoped>
  @import url('./mobile.scss');
  @media screen and (min-width: 768px) {
    .banner {
      background: url('@/assets/images/about/banner.png') no-repeat center;
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
    .story {
      background: url('@/assets/images/about/story-bg.png') no-repeat center;
      background-size: cover;
    }
    .award {
      background: url('@/assets/images/about/award-bg.png') no-repeat center;
      background-size: cover;
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
    .organization {
      background: url('@/assets/images/about/organization-bg.png') no-repeat
        center;
      background-size: cover;
    }
    .team {
      background: url('@/assets/images/about/team-bg.png') no-repeat center;
      background-size: cover;
    }
    .subscription {
      background: url('@/assets/images/about/subscription-bg.png') no-repeat
        center;
      background-size: cover;
      ::v-deep(.n-input .n-input-wrapper) {
        padding: 0 7.5rem;
      }
      ::v-deep(.n-input .n-input__input-el) {
        height: 20rem;
        line-height: 20rem;
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
    .download {
      background: url('@/assets/images/about/download-bg.png') no-repeat center;
      background-size: cover;
    }
  }
</style>
