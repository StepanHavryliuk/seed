<template>
  <div style="height:100%; position: relative;">
    <div class="clearfix">
      <div class="subcontainer brand clearfix">
        <div class="left">
          <div class="subpage title">
            <div class="en">BRAND CONNOTATION</div>
            <div class="cn" v-show="this.$i18n.locale=='zh-CN'">品牌诠释</div>
          </div>
        </div>
        <div class="right">
          <div class="sixtypercent clearfix">
            <video autoplay muted loop controls style="max-width:900px ">
              <source src="http://www.seedland.cc/wp/wp-content/uploads/2019/04/video_three.mp4" />
            </video>
          </div>
          <div class="twentypercent clearfix">
            <div class="title line" v-text="brand_title"></div>
            <div class="title underline"></div>
            <div class="brand content" v-text="brand_content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["brand_content", "brand_title"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";

@media only screen and (max-width: 1548px) {
  .subcontainer .sixtypercent video {
    width: 488px;
  }
}
.subcontainer {
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
    width: 100vw;
    padding-right: 80px;
    position: absolute;
    padding-top: 5%;
    margin-left: -5%;
    .sixtypercent {
      width: auto;
      display: inline-block;
      margin-right: 4%;
      vertical-align: top;
    }
    .twentypercent {
      width: auto;
      max-width: 450px;
      display: inline-block;
      vertical-align: top;
      margin-top: -10px;
      .title {
        font-family: "NotoSansCJKsc-Light", sans-serif;
        font-size: 68px;
      }
      .title.line {
        font-size: 42px;
      }
      .title.underline {
        border-bottom: white 1px solid;
        width: 100px;
        margin: 20px 0px;
      }
      .brand.content {
        line-height: 24px;
      }
    }
  }
}
</style>