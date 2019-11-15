<template>
  <div style="position: relative;width: 100%; height: 100%">
    <Menu :activeIndex="activeIndex"></Menu>
    <swiper id="swiperBox" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <Landing></Landing>
      </swiper-slide>
      <swiper-slide class="swiper-slide" style="background:rgba(0,0,0,0.5)">
        <About></About>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <Development></Development>
      </swiper-slide>
      <swiper-slide class="swiper-slide" style="background:rgba(0,0,0,0.3)">
        <News></News>
      </swiper-slide>
      <swiper-slide class="swiper-slide" style="background:rgba(0,0,0,0.3)">
        <Joinus></Joinus>
      </swiper-slide>
      <swiper-slide class="swiper-slide" style="background:rgba(0,0,0,0.3)">
        <Whistleblower></Whistleblower>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <Contact></Contact>
      </swiper-slide>
    </swiper>
    <div class="section" v-show="activeIndex==0">
      <div class="fp-tableCell" style="height: 100%;">
        <div class="main container">
          <div class="navbar home clearfix">
            <div class="left">
              <div class="logo">
                <img src="@/assets/images/Logo_Anim_1000x80.gif"/>
              </div>
            </div>
            <div class="right">
              <div class="itembox">
                <div class="menu" v-for="(i,index) in nav" :key="index">
                  <el-dropdown>
                    <a
                      :data-menuanchor="i.name"
                      class="menuitem"
                      @mouseover="change(index)"
                      @mouseleave="cur = -1"
                      v-text="$t(`m.${i.name}`)"
                      @click="navto(index)"
                    ></a>
                    <el-dropdown-menu slot="dropdown" v-if="i.child">
                      <el-dropdown-item v-for="(downitem,index2) in i.child"
                                        v-text="$t(`m.${downitem.name}`)"></el-dropdown-item>

                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
              <div class="languagetoggle">
                <div class="enclick" style="display: block;">
                  <a style="text-decoration: none; color: white;" @click="enlang">EN</a>
                </div>
                <div class="cnclick">
                  <a style="text-decoration: none; color: white;" @click="cnlang">CN</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Landing from "../Landing/index.vue";
  import About from "../About/index.vue";
  import Development from "../Development/index.vue";
  import News from "../News/index.vue";
  import Joinus from "../Joinus/index";
  import Whistleblower from "../Whistleblower/index";
  import Contact from "../Contact/index";
  import Menu from "../../components/Menu/Menu";
  import {swiper, swiperSlide} from "vue-awesome-swiper";

  export default {
    name: "home",

    data() {
      const that =this
      return {
        swiperOption: {
          notNextTick: true,
          direction: "vertical", //垂直
          grabCursor: true,
          setWrapperSize: true,
          // autoHeight: true,
          slidesPerView: 1,
          mousewheel: true,
          mousewheelControl: true,
          resistanceRatio: 0,
          observeParents: true,
          height:window.innerHeight,
          on: {
            slideChange: () => {
              let swiper = this.$refs.mySwiper.swiper;
              localStorage.setItem("now", swiper.activeIndex);
              this.activeIndex = swiper.activeIndex;
            },
            resize:()=>{
              that.swiper.updateSize()
            }
          }
        },
        nav: [
          {name: "about", child: [{name: 'profile', title: '项目简介'}, {name: 'milestones', title: '里程碑'},]},
          {
            name: "development",
            title: "地产开发",

          },
          {name: "news", title: "最新消息"},
          {name: "joinus", title: "加入实地"},
          {name: "whistleblower", title: "廉洁举报"},
          {name: "contact", title: "联系我们"}
        ],
        ismove: false,
        cur: -1,
        activeIndex: 0
      };
    },
    components: {
      Landing,
      About,
      Development,
      News,
      Joinus,
      Whistleblower,
      Contact,
      Menu,
      swiper,
      swiperSlide
    },
    methods: {
      change(index) {
        this.cur = index;
      },
      //   切换语言
      cnlang(lang) {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang; //关键语句
        localStorage.setItem("lang", this.lang);
        location.reload();
      },
      enlang() {
        this.lang = "en-US";
        this.$i18n.locale = this.lang; //关键语句
        localStorage.setItem("lang", this.lang);
        location.reload();
      },
      // 导航
      navto(index) {
        this.swiper.slideTo(index + 1, 1000, false);
        localStorage.setItem("now", index);
      }
    },
    watch: {
      activeIndex: function (val, oldval) {
        this.swiper.slideTo(val, 1000, false);
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      const _self = this;
      document.onresize = function () {
        _self.$refs.mySwiper.swiper();
      };
      //手动跳到指定页
      if (localStorage.getItem("now")) {
        let index = localStorage.getItem("now");
        this.swiper.slideTo(index, 1000, false);
      } else {
        localStorage.setItem("now", 0);
      }

      if (localStorage.getItem("lang")) {
        this.$i18n.locale = localStorage.getItem("lang"); //关键语句
      } else {
        localStorage.setItem("lang", "zh-CN"); //关键语句
      }
      this.EventBus.$on("menuto", activeIndex => {
        this.$nextTick(() => {
          this.activeIndex = activeIndex;
        });
      });
      this.EventBus.$on("stopswiper", val => {
        this.$nextTick(() => {
          if (val) {
            _self.swiper.mousewheel.disable();
          } else {
            _self.swiper.mousewheel.enable();
          }
        });
      });
    }
  };
</script>
<style lang="scss">
  @import "@/assets/style/color.scss";

  .el-dropdown {
    width: 100%;
  }

  .section {
    position: absolute;
    width: 100%;
    height: 50px;
    top: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    z-index: 5;

    .main.container {
      height: 100%;
      color: $text-color;

      .navbar.home {
        clear: both;
        z-index: 2;
        position: static;
        height: 100%;
        padding-top: 2%;
        display: flex;

        .left {
          display: inline-block;
          width: 50%;
          height: 100%;

        }

        .right {
          float: right;
          flex: 1;
          height: 100%;
          text-align: right;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .itembox {

            width: 80%;
            display: flex;

            .menu {
              flex: 1;
              display: inline;
              font-family: "DIN-Regular";
              font-size: $font-14;
              vertical-align: sub;
              position: relative;

              .menuitem {
                display: inline;
                padding-right: 20%;
                color: $text-color;
                text-decoration: none;
              }

              .active {
                display: inline-block;
                position: absolute;
                width: 50%;
                height: 3px;
                top: -20px;
                left: 0;
                background: $text-color;
                opacity: 1;
              }
            }
          }


          .landing-btn-hamburger {
            width: 10%;
            float: right;
            right: 6%;
            position: relative;

            img {
              width: 25px;
            }
          }

          .languagetoggle {
            margin-right: 14%;
            float: right;
            line-height: 14px;
            opacity: 0;
            animation: fadeInDown 1s 2s linear forwards;
            cursor: pointer;

            a {
              font-size: $font-14;
            }
          }
        }

        .left .logo {
          position: absolute;

          img {
            left: 25%;
            height: 25px;
            position: relative;
            width: 270px;
            object-fit: contain;
          }
        }

      }
    }
  }
</style>



