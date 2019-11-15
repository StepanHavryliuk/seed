<template>
  <div
    id="integrityinformation"
    class="subcontainer integrity-sections integrityinformation animated fadeInRight"
  >
    <div class="integrityinformation-left" @click="show(0)">
      <img class src="@/assets/images/left-long-arrow-2.png" />
    </div>

    <div class="integrity-sections-inner">
      <div class="integrity-sections-inner-left">
        <p class="title-top">WHISTLEBLOWER</p>
        <p class="title-bottom">廉洁举报</p>

        <div class="vertical_text_container" :class="{active:cur==0}" @click="cur=0">
          <div class="vertical">
            <h1>举</h1>
            <h1>报</h1>
            <h1>指</h1>
            <h1>南</h1>
          </div>
          <p class="vertical-text">INFORMATION GUIDE</p>
        </div>

        <div class="vertical_text_container" :class="{active:cur==1}" @click="cur=1">
          <div class="vertical">
            <h1>政</h1>
            <h1>策</h1>
            <h1>法</h1>
            <h1>规</h1>
          </div>
          <p class="vertical-text" style="margin-left:-38px;">LAW AND POLICY</p>
        </div>

        <div class="vertical_text_container" :class="{active:cur==2}" @click="cur=2">
          <div class="vertical">
            <h1>举</h1>
            <h1>报</h1>
            <h1>查</h1>
            <h1>询</h1>
          </div>
          <p class="vertical-text" style="margin-left:-12px;">INQUIRY</p>
        </div>
      </div>

      <div class="integrity-sections-inner-right">
        <div id="integrity-accordion-wrapper">
          <!-- integrityinformation -->
          <Integrityinformation v-show="cur==0" class="animated fadeInRight"></Integrityinformation>
          <!--integritylaw-->
          <Integritylaw v-show="cur==1" class="animated fadeInRight"></Integritylaw>
          <!--integrityinquiry-->
          <Integrityinquiry v-show="cur==2" class="animated fadeInRight"></Integrityinquiry>
        </div>
      </div>
    </div>

    <div class="find-out-more home" @click="show(2)">
      <div class="exploremore button fp-controlArrow">
        <div class="left" style="pointer-events: none;">
          <div class="en">CREATE REPORT</div>
          <div class="cn">我要举报</div>
        </div>
        <div class="right">
          <div class="about-rightarrow"></div>
          <div class="about-arrowtipup"></div>
          <div class="about-arrowtipdown"></div>
        </div>
        <p id="aboutplus1">+</p>
        <p id="aboutplus2">+</p>
        <p id="aboutplus3">+</p>
        <p id="aboutplus4">+</p>
      </div>
    </div>
  </div>
</template>
<script>
import Integrityinformation from "./child/integrityinformation";
import Integritylaw from "./child/integritylaw";
import Integrityinquiry from "./child/integrityinquiry";
export default {
  data() {
    return {
      cur: 0
    };
  },
  components: { Integrityinformation, Integritylaw, Integrityinquiry },
  methods: {
    show(show) {
      this.EventBus.$emit("show", show);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/color.scss";
@import "@/assets/style/findmore.scss";
.integrity-sections {
  position: absolute;
  height: 100vh;
  .exploremore.button {
    right: 200px;
    bottom: 14vh;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  .integrityinformation-left {
    width: 50%;
    float: left;
    box-sizing: border-box;
    padding-left: 30px;
    position: absolute;
    top: 10px;
    left: 40px;
    z-index: 10000;
    img {
      width: 30px;
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        transition: all 0.3s ease;
      }
    }
  }
  .integrity-sections-inner {
    width: 100%;
    float: left;
    .integrity-sections-inner-left {
      box-sizing: border-box;
      margin-right: 0;
      vertical-align: top;
      max-width: 350px;
      width: 25%;
      display: inline-block;
      font-size: $font-17;
      .title-top {
        font-family: "DIN-Regular";
        font-size: 17px;
        letter-spacing: 2px;
      }
      .title-bottom {
        line-height: 0;
        font-family: "NotoSansCJKsc-Light";
        font-size: 17px;
      }
      .vertical_text_container.active {
        opacity: 1;
      }
      .vertical_text_container {
        font-size: 14px;
        text-align: center;
        line-height: 14px;
        display: flex;
        top: 5%;
        left: 4%;
        position: relative;
        z-index: 3;
        min-height: 70px;
        opacity: 0.5;
        .vertical-text {
          transform: rotate(-90deg);
          display: inline-block;
          position: relative;
          margin-top: 71px;
          margin-left: -48px;
          width: fit-content;
          height: fit-content;
          width: -moz-max-content;
          height: -moz-max-content;
          font-size: 12px;
          top: 0vh;
        }
        a {
          cursor: pointer;
        }
      }
    }
    .integrity-sections-inner-right {
      width: 73%;
      box-sizing: border-box;
      margin-left: 0;
      display: inline-block;
    }
  }
}
</style>