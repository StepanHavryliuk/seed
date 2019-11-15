<template>
  <div class="preloader-bg" v-if="initialLoad">
    <img
      class="preloader-img"
      src="http://www.seedland.cc/wp/wp-content/themes/Seedland/assets/images/preloader.gif"
      alt
    />
  </div>
  <div id="app" v-else>
    <div class="preloader-bg" v-if="loading">
      <img
        class="preloader-img"
        src="http://www.seedland.cc/wp/wp-content/themes/Seedland/assets/images/preloader.gif"
        alt
      />
    </div>
    <div>
        <video playsinline="" data-object-fit="cover" autoplay="autoplay" muted="muted" loop="loop"
               poster="/assets/images/landing-bg-min.jpg" id="videobg" class="fullscreen-bg__video">
          <source src="http://www.seedland.cc/assets/videos/videobg.mp4" type="video/mp4">
          <img src="./assets/images/landing-bg-min.jpg"></video>
      <div class="fullscreen-bg__video img"><img src="./assets/images/landing-bg-min.jpg"></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import {mixinDetictingMobile} from "./minix";

  export default {
    name: "app",
    mixins: [mixinDetictingMobile],
    data() {
      return {
        initialLoad: true,
        loadCounter: 0,
        loading: true
      };
    },
    beforeMount() {
      this.initialLoad = true;
    },
    mounted() {
      this.loading = false;

      // window.addEventListener("pageshow", function(event) {
      //   console.log(222);
      //     this.initialLoad = false;
      //   this.loading = false;
      // });
      window.addEventListener("resize", this.getWindowWidth);
      this.$nextTick(function () {
        setTimeout(() => {
          this.initialLoad = false;
        }, 2000);
      });
    },
    methods: {
      getWindowWidth(event) {
        if (this.isLowRes() && this.loadCounter > 0 && this.lowRes == false) {
          window.location.reload(true);
          window.location.href = window.location;
        } else if (
          !this.isLowRes() &&
          this.loadCounter > 0 &&
          this.lowRes == true
        ) {
          window.location.reload(true);
          window.location.href = window.location;
        } else {
          this.lowRes = this.isLowRes();
          this.loadCounter++;
        }
      }
    }
  };
</script>
<style lang="scss">

  #videobg {
    width: 100%;
    max-height: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -100;
  }
  .fullscreen-bg__video {
    position: relative;
    /*width: 100%;*/
    /*height: 100%;*/
    object-fit: cover;
    background-size: cover;
  }
  @import "./assets/style/base_px";
  @import "./assets/style/app.css";

  @font-face {
    font-family: "NotoSansCJKsc-Light";
    src: url("./assets/font/noto-sans-sc-v4-chinese-simplified_latin-100.woff");
  }

  @font-face {
    font-family: NotoSansCJKsc-Thin;
    src: url("./assets/font/noto-sans-sc-v4-chinese-simplified_latin-100.woff");
  }

  @font-face {
    font-family: "DIN-Regular";
    src: url("./assets/font/DINRg___.woff");
  }

  @font-face {
    font-family: "DIN-Light";
    src: url("./assets/font/DINOT-Light.woff");
  }

  @font-face {
    font-family: 'NotoSansCJKsc-Medium';
    src: url("./assets/font/noto-sans-sc-v4-chinese-simplified_latin-500.woff");
  }

  strong {
    font-family: 'NotoSansCJKsc-Medium';
  }


</style>
