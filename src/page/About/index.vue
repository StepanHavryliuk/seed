<template name="About">
  <div class="about" style="position: relative;">
    <!-- 导航 -->
    <div class="verticalprogressbar">
      <a v-for="(item,index) in alist" :key="index">
        <div class="nothere" :class="{here:index==curindex}" @click="navto(index)"></div>
      </a>
    </div>
    <swiper id="swiperBox2" :options="swiperOption" ref="mySwiper2">
      <swiper-slide class="swiper-slide">
        <About1
          :title_line_1="title_line_1_noArr"
          :title_line_2="title_line_2_noArr"
          :textcontent="textcontent"
        ></About1>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <About2 :milestones="milestones"></About2>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <About3 :brand_title="brand_title" :brand_content="brand_content"></About3>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <About4
          v-if="structureFirstCol"
          :structureFirstCol="structureFirstCol"
          :structureSecondCol="structureSecondCol"
          :structureSecondColOuter="structureSecondColOuter"
        ></About4>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <About5
          :philosophy_title_1="philosophy_title_1"
          :philosophy_title_2="philosophy_title_2"
          :philosophy_header_1="philosophy_header_1"
          :philosophy_header_2="philosophy_header_2"
          :philosophy_content_1="philosophy_content_1"
          :philosophy_content_2="philosophy_content_2"
        ></About5>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <About6 :glories="glories"></About6>
      </swiper-slide>
    </swiper>

    <div class="footer">
      <div class="left">
        <Number :now="curindex"></Number>
      </div>
      <!-- 第一页更多按钮 -->
      <div class="right" v-if="curindex==0">
        <div class="exploremore button fp-controlArrow swiper-button-next" @click="next">
          <div class="left" style="pointer-events: none;">
            <div class="en">EXPLORE MORE</div>
            <div class="cn" v-show="this.$i18n.locale=='zh-CN'">点击更多</div>
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
      <!-- 最后一页只有上一页按钮 -->
      <div class="right" v-else-if="curindex==5">
        <div class="leftright button">
          <div class="leftbutton swiper-button-prev swiper-button-white" @click="pre">
            <div class="leftpageplus1">+</div>
            <div class="leftpageplus2">+</div>
            <div class="leftpageplus3">+</div>
            <div class="leftpageplus4">+</div>
            <div class="leftarrowicon">
              <div class="arrlefttip"></div>
              <div class="arrleftline"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 其他页面 -->
      <div class="right" v-else>
        <div class="leftright button">
          <div class="leftbutton swiper-button-prev swiper-button-white" @click="pre">
            <div class="leftpageplus1">+</div>
            <div class="leftpageplus2">+</div>
            <div class="leftpageplus3">+</div>
            <div class="leftpageplus4">+</div>
            <div class="leftarrowicon">
              <div class="arrlefttip"></div>
              <div class="arrleftline"></div>
            </div>
          </div>
          <div class="rightbutton swiper-button-next swiper-button-white" @click="next">
            <div class="leftpageplus1">+</div>
            <div class="leftpageplus2">+</div>
            <div class="leftpageplus3">+</div>
            <div class="leftpageplus4">+</div>
            <div class="leftarrowicon">
              <div class="arrrighttip"></div>
              <div class="arrleftline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import Number from "./Element/Number.vue";
  import About1 from "./Child/About1.vue";
  import About2 from "./Child/About2.vue";
  import About3 from "./Child/About3.vue";
  import About4 from "./Child/About4.vue";
  import About5 from "./Child/About5.vue";
  import About6 from "./Child/About6.vue";

  export default {
    data() {
      let that=this
      return {
        curindex: 0,
        mySwiper: {},
        alist: [1, 2, 3, 4, 5, 6],
        title_line_1_noArr: null,
        title_line_2_noArr: null,
        philosophy_title_1: null,
        philosophy_title_2: null,
        philosophy_header_1: null,
        philosophy_header_2: null,
        philosophy_content_1: null,
        philosophy_content_2: null,
        textcontent: null,
        milestones: {},
        glories: null,
        brand_title: null,
        brand_content: null,
        brand_video: null,
        structureFirstCol: null,
        structureSecondCol: null,
        structureSecondColOuter: null,
        structureFirstColMobile: null,
        structureSecondColMobile: null,
        showMenu: false,
        showTitle: true,
        swiperOption: {
          notNextTick: true,
          direction: "horizontal", //水平方向移动
          grabCursor: true,
          setWrapperSize: true,
          // autoHeight: true,
          slidesPerView: 1,
          resistanceRatio: 0,
          observeParents: true,
          on: {
            slideChange: () => {
              let swiper = this.$refs.mySwiper2.swiper;
              localStorage.setItem("now2", swiper.activeIndex);
              this.curindex = swiper.activeIndex;
            },
            resize:()=>{
              that.swiper.updateSize()
            }

          }
        }
      };
    },
    components: {
      About1,
      About2,
      About3,
      About4,
      About5,
      About6,
      Number
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper2.swiper;
      }
    },
    methods: {
      // 上一页
      pre() {
        this.swiper.slidePrev();
      },
      // 下一页
      next() {
        this.swiper.slideNext();
      },
      // 导航函数
      navto(index) {
        this.swiper.slideTo(index, 1000 * index, false);
        this.curindex = index;
      }
    },
    created() {
      let lang = localStorage.getItem("lang");
      if (lang == "zh-CN") {
        this.$axios
          .get("http://www.seedland.cc/wp/wp-json/template-part/part/1")
          .then(response => {
            this.title_line_1_noArr = response.data.title_line_1_noArr;
            this.title_line_2_noArr = response.data.title_line_2_noArr;
            this.textcontent = response.data.textcontent;
            this.milestones = response.data.milestone;
            this.glories = response.data.glory;
            this.brand_title = response.data.brand_title;
            this.brand_content = response.data.brand_content;
            this.philosophy_title_1 = response.data.philosophy_title_1;
            this.philosophy_title_2 = response.data.philosophy_title_2;
            this.philosophy_header_1 = response.data.philosophy_header_1;
            this.philosophy_header_2 = response.data.philosophy_header_2;
            this.philosophy_content_1 = response.data.philosophy_content_1;
            this.philosophy_content_2 = response.data.philosophy_content_2;
            this.structureFirstCol = response.data.structure.firstCol;
            this.structureSecondCol = response.data.structure.secondCol;
            this.structureFirstColMobile =
              response.data.structure.firstCol.mobile;
            this.structureSecondColMobile =
              response.data.structure.secondCol.mobile;
            this.structureSecondColOuter = response.data.structure.outerSecondCol;
          });
      } else {
        this.$axios
          .get("http://www.seedland.cc/wp-en/wp/wp-json/template-part/part/1")
          .then(response => {
            this.title_line_1 = response.data.title_line_1;
            this.title_line_2 = response.data.title_line_2;
            this.title_line_1_noArr = response.data.title_line_1_noArr;
            this.title_line_2_noArr = response.data.title_line_2_noArr;
            this.textcontent = response.data.textcontent;
            this.milestones = response.data.milestone;
            this.glories = response.data.glory;
            this.brand_title = response.data.brand_title;
            this.brand_content = response.data.brand_content;
            this.philosophy_title_1 = response.data.philosophy_title_1;
            this.philosophy_title_2 = response.data.philosophy_title_2;
            this.philosophy_header_1 = response.data.philosophy_header_1;
            this.philosophy_header_2 = response.data.philosophy_header_2;
            this.philosophy_content_1 = response.data.philosophy_content_1;
            this.philosophy_content_2 = response.data.philosophy_content_2;
            this.structureFirstCol = response.data.structure.firstCol;
            this.structureSecondCol = response.data.structure.secondCol;
            this.structureFirstColMobile =
              response.data.structure.firstCol.mobile;
            this.structureSecondColMobile =
              response.data.structure.secondCol.mobile;
            this.structureSecondColOuter = response.data.structure.outerSecondCol;
          });
      }
    },
    mounted() {
      const _self = this;
      document.onresize = function () {
        _self.$refs.mySwiper2.swiper();
      };
      //手动跳到指定页
      if (localStorage.getItem("now") == "1") {
        if (localStorage.getItem("now2")) {
          let index2 = localStorage.getItem("now2");
          setTimeout(() => {
            this.swiper.slideTo(index2, 1000, false);
          }, 1000);
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/style/color";

  .about {
    height: 100%;
    width: 100%;

    .verticalprogressbar {
      opacity: 1;
      position: absolute;
      top: 158px;
      left: 96px;
      z-index: 999;

      .nothere {
        border-left: 2px solid white;
        height: 35px;
        margin-bottom: 5px;
        opacity: 0.5;
        cursor: pointer;
        height: 35px;
        margin-bottom: 5px;
        cursor: pointer;
      }

      .here {
        border-left: 3px solid white;
        height: 35px;
        margin-bottom: 5px;
        opacity: 1;
      }
    }

    .footer {
      top: 72vh;
      position: absolute;
      width: 100vw;

      .left {
        vertical-align: top;
        max-width: 375px;
        width: 15%;
        display: inline-block;
      }

      .right {
        margin-left: 0;
        width: auto;
        display: inline-block;
        position: absolute;
        right: 80px;
        padding-right: 80px;
        bottom: 30px;

        swiper-button-next,
        .swiper-button-next,
        .swiper-button-prev {
          outline: none;
        }

        .exploremore.button {
          background-color: transparent;
          border: 1px solid #fafafa;
          padding: 32px 13px;
          margin-right: 0;
          width: 318px;
          position: relative;
          color: #fff;

          &:hover {
            background-color: rgba(255, 255, 255, 0.5);
            transition: background-color 0.2s ease-in;
          }

          .left {
            font-size: $font-18;
            width: auto;
            white-space: nowrap;
            margin-left: -122px;

            .en {
              cursor: pointer;
              letter-spacing: 3px;
              white-space: nowrap;
              padding-bottom: 5px;
              font-family: "DIN-Light";
              font-size: $font-14;
            }
          }

          .about-arrowtipup {
            border-bottom: 2px solid #fafafa;
            margin-top: 1px;
            position: absolute;
            width: 12px;
            transform: rotate(32deg);
            transform-origin: bottom right;
            right: -16px;
            top: -1px;
          }

          .about-arrowtipdown {
            border-bottom: 1px solid #fafafa;
            margin-top: 9px;
            position: absolute;
            width: 0%;
            right: 9%;
            transform: rotate(-40deg);
            transform-origin: bottom right;
          }

          .about-rightarrow {
            border-bottom: 2px solid #fafafa;
            // margin-top: 25px;
            position: absolute;
            width: 70px;
            right: -18px;
            top: 0px;
          }
        }

        .right p {
          color: #fff;
        }

        p#aboutplus1,
        p#aboutplus2,
        p#aboutplus3,
        p#aboutplus4 {
          font-size: $font-18;
          position: absolute;
        }

        p#aboutplus1 {
          top: -14px;
          left: -7px;
        }

        p#aboutplus2 {
          top: -14px;
          right: -7px;
        }

        p#aboutplus3 {
          bottom: -14px;
          left: -7px;
        }

        p#aboutplus4 {
          bottom: -14px;
          right: -7px;
        }

        .swiper-button-prev {
          outline: none;
        }

        .leftright.button {
          float: right;

          .leftpageplus1,
          .leftpageplus2,
          .leftpageplus3,
          .leftpageplus4 {
            position: absolute;
            color: $text-color;
          }

          .leftbutton {
            display: inline-block;
            cursor: pointer;
            height: 57px;
            width: 57px;
            position: relative;
            background-color: transparent;
            border: 1px solid #fafafa;
            padding: 10px;
            margin-right: 50px;

            &:hover {
              background-color: rgba(255, 255, 255, 0.5);
              transition: background-color 0.2s ease-in;
            }

            .leftpageplus1 {
              top: -12px;
              left: -6px;
            }

            .leftpageplus2 {
              top: -12px;
              right: -6px;
            }

            .leftpageplus3 {
              bottom: -10px;
              left: -6px;
            }

            .leftpageplus4 {
              bottom: -10px;
              right: -6px;
            }

            .leftarrowicon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);

              .arrlefttip {
                transform: rotate(-35deg) translateY(1px);
                transform-origin: bottom left;
                width: 10px;
                border-bottom: 1px solid #fafafa;
              }

              .arrleftline {
                border-bottom: 1px solid #fafafa;
                width: 29px;
              }
            }
          }

          .rightbutton {
            display: inline-block;
            cursor: pointer;
            height: 57px;
            width: 57px;
            position: relative;
            background-color: transparent;
            border: 1px solid #fafafa;
            padding: 10px;

            &:hover {
              background-color: rgba(255, 255, 255, 0.5);
              transition: background-color 0.2s ease-in;
            }

            .leftpageplus1 {
              top: -12px;
              left: -6px;
            }

            .leftpageplus2 {
              top: -12px;
              right: -6px;
            }

            .leftpageplus3 {
              bottom: -11px;
              left: -6px;
            }

            .leftpageplus4 {
              bottom: -11px;
              right: -6px;
            }

            .leftarrowicon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);

              .arrrighttip {
                transform: rotate(389deg) translate(17px, -9px);
                transform-origin: bottom right;
                width: 10px;
                border-bottom: 1px solid #fafafa;
              }

              .arrleftline {
                border-bottom: 1px solid #fafafa;
                width: 29px;
              }
            }
          }
        }
      }
    }
  }
</style>