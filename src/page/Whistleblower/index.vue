<template>
  <div style="height:100%" :class="{dark:show!=0}">
    <div
      id="joinuswelcome"
      class="subcontainer joinuswelcome"
      style="margin-top: 1%;"
      v-show="show==0"
    >
      <div class="joinus-welcome-title animated">
        <h1 class="joinus-secondary-title">廉洁举报</h1>
        <h1 class="joinus-main-title">WHISTLEBLOWER</h1>
      </div>
      <div class="find-out-more home" @click="show=1">
        <div class="exploremore button fp-controlArrow">
          <div class="left" style="pointer-events: none;">
            <div class="en">FIND OUT MORE</div>
            <div class="cn">了解更多</div>
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
    <!-- 介绍 -->
    <Information v-if="show==1"></Information>
    <!-- 举报 -->
    <Report v-if="show==2"></Report>
  </div>
</template>

<script>
import Information from "./Child/Information/index";
import Report from "./Child/report/index";
export default {
  name: "whis",
  data() {
    return {
      show: 0
    };
  },
  components: { Information, Report },
  mounted() {
    this.EventBus.$on("show", show => {
      this.show = show;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
@import "@/assets/style/findmore.scss";
.dark {
  background: rgba(0, 0, 0, 0.7);
}
.subcontainer {
  margin-top: 3%;
  padding-top: 100px;
  padding-left: 5%;
  padding-right: 5%;
  display: block;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  .find-out-more {
    position: absolute;
    z-index: 0;
    right: 200px;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 5%;
  }
}
.subcontainer.joinuswelcome {
  height: 100vh;
  width: 100%;
  position: absolute;
  .joinus-welcome-title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 5%;
    h1.joinus-secondary-title {
      line-height: 0;
      font-size: 44px;
      font-family: "NotoSansCJKsc-Light";
      font-weight: lighter;
    }
    h1.joinus-main-title {
      line-height: 50px;
      font-size: 65px;
      font-weight: lighter;
      text-transform: uppercase;
      font-family: NotoSansCJKsc-Thin;
    }
  }
}
</style>