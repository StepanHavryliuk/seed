<template>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import "@/assets/style/color.scss";
.section {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .main.landing.container {
    height: 100%;
    width: 100%;
    color: $text-color;
    .navbar.home {
      clear: both;
      top: 0px;
      right: 0px;
      z-index: 2;
      position: static;
      .left {
        display: inline-block;
        width: 30%;
        padding-top: 2%;
      }
      .right {
        float: right;
        padding-top: 2%;
        width: 70%;
        text-align: right;
      }
      .left .logo {
        position: absolute;
        transform: translatey(10px);
        img {
          left: 25%;
          height: 25px;
          position: relative;
          width: 270px;
          object-fit: contain;
        }
      }
      .right {
        transform: translateY(13px);
        .menu {
          display: inline;
          font-family: "DIN-Regular";
          font-size: $font-14;
          vertical-align: sub;
          position: relative;
          .menuitem {
            display: inline;
            padding-right: 50px;
            color: $text-color;
            text-decoration: none;
          }
          .active {
            display: inline-block;
            position: absolute;
            width: 60%;
            height: 3px;
            top: -20px;
            left: 0;
            background: $text-color;
            opacity: 1;
          }
        }
        .landing-btn-hamburger {
          float: right;
          right: 6%;
          position: relative;
          img {
            width: 25px;
          }
        }
        .languagetoggle {
          margin-right: 12%;
          float: right;
          line-height: 14px;
          opacity: 0;
          animation: fadeInDown 1s 3s linear forwards;
          cursor: pointer;
          a {
            font-size: $font-14;
          }
        }
      }
    }
  }
}
</style>
