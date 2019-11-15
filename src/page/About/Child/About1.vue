<template>
  <div style="height:100%; position: relative;">
    <div class="subcontainer profile clearfix">
      <div class="left clearfix">
        <div class="subpage title">
          <div class="en">PROFILE</div>
          <div class="cn" v-show="this.$i18n.locale=='zh-CN'">项目简介</div>
        </div>
      </div>
      <div class="right clearfix">
        <div class="title line1 clearfix">
          <span>
            <div
              class="box entranceFromLeft"
              v-for="(words,index) in title_line_1"
              :key="index"
              :style="setstyle(index)"
            >{{ words }}</div>
          </span>
        </div>
        <div class="title line2 clearfix" style="white-space: nowrap;">
          <span>
            <div
              class="box entranceFromLeft"
              v-for="(words,index) in title_line_2"
              :key="words"
              :style="setstyle(index)"
            >{{ words }}</div>
          </span>
        </div>
        <div
          class="aboutus content clearfix"
          @mouseenter="enter"
          @mouseleave="leave"
          data-simplebar-auto-hide="false"
          data-simplebar
        >
          <div>
            <span v-html="textcontent"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      curindex: 0
    };
  },
  props: ["textcontent", "title_line_1", "title_line_2"],
  mounted() {},
  methods: {
    enter() {
      this.EventBus.$emit("stopswiper", true);
    },
    leave() {
      this.EventBus.$emit("stopswiper", false);
    },
    mousemove(event) {
      let heightParts = window.innerHeight / 2;
      let toBottom = window.innerHeight - heightParts;
      let toAbove = window.innerHeight - heightParts * 1.5 + 70;
      let contents = document.querySelectorAll(".simplebar-content");
      if (event.pageY > toBottom) {
        contents.forEach(function(content) {
          content.scrollTop += 3;
        });
      } else {
        contents.forEach(function(content) {
          content.scrollTop -= 3;
        });
      }
    },
    setstyle(index) {
      return `opacity:0; animation-fill-mode: forwards; animation-delay:${index *
        250}ms`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.subcontainer.profile {
  width: 100vw;
  margin-top: 3%;
  padding-left: 5%;
  padding-right: 50%;
  display: block;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: $text-color;
  height: 100vh;
  .left {
    vertical-align: top;
    max-width: 375px;
    width: 30%;
    display: inline-block;
    .subpage.title {
      padding-bottom: 100px;
      font-size: $font-17;
      white-space: nowrap;
      .en {
        font-family: "DIN-Regular";
        font-size: $font-18;
        letter-spacing: 3px;
        margin-bottom: 10px;
        .cn {
          font-family: "NotoSansCJKsc-Light", sans-serif;
          font-size: $font-18;
        }
      }
    }
  }
  .right {
    display: inline-block;
    width: 70vw;
    padding-right: 180px;
    position: absolute;
    padding-top: 5%;
    height: 70vh;
    .title {
      font-size: 50px;
      white-space: nowrap;
      font-weight: 100;
      .entranceFromLeft {
        animation-name: entranceFromLeft;
        animation-duration: 1s;
      }
    }
    .title.line1 *,
    .title.line2 * {
      font-family: "NotoSansCJKsc-Thin";
      display: inline-block;
      margin: 0 1px;
    }
    .title.line2 {
      padding-left: 15% !important;
    }
    .content {
      padding-right: 0px !important;
      margin-top: 5%;
      position: relative;
      width: 40vw;
      padding-right: 140px;
      float: right;
      height: 50%;
      .simplebar-content {
        direction: inherit;
        box-sizing: border-box !important;
        position: relative;
        display: block;
        height: 100%;
        width: auto;
        visibility: visible;
        max-width: 100%;
        max-height: 100%;
        scrollbar-color: transparent transparent;
        scrollbar-track-color: transparent;
        -ms-scrollbar-track-color: transparent;
        padding-right: 20px;
        span {
          font-size: $font-18;
          p {
            margin: 18px 0;
          }
        }
      }
    }
  }
}
</style>