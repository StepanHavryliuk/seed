<template name="Development">
  <div
    class="development"
    style="position: relative;"
    @mousemove="mousemove"
  >
    <div class="list">
      <div class="row">
        <div
          class="item projectitembg"
          v-for="(development, index) in secondHalfDevelopments"
          :style="{ backgroundImage: 'url(' + development.image + ')' }"
          @mouseover="isHovering = development.ID"
          @mouseout="isHovering = false"
          :key="index"
          @click="todetail(development.ID)"
        >
          <div class="overlay"></div>
          <div class="text-wrap">

            <img src="http://www.seedland.cc/wp/wp-content/uploads/2019/07/LOGO-1.png"
                 style="position:absolute; left: 0%; top: 20px; width: 30%">

          </div>
          <div class="footer">
            <div class="explorebutton" v-if="isHovering!== development.ID">
              <span class="plus plus-left-top top-plus" style="transform: rotateZ(360deg);">+</span>
              <span class="plus plus-right-top top-plus" style="transform: rotateZ(360deg);">+</span>
              <span
                class="plus plus-left bottom-plus animated fast fadeOutDown"
                style="margin-top: 0px;"
              >+</span>
              <span
                class="plus plus-right bottom-plus animated faster fadeOutDown"
                style="margin-top: 0px;"
              >+</span>
              <button
                class="hidden-button"
                v-bind:id="0"
                style="display: inline-block;opacity:0;"
              >EXPLORE
              </button>
              <div class="grow-left">
                <div class="button"></div>
              </div>
            </div>
            <div class="explorebutton" v-else>
              <span class="plus plus-left-top top-plus">+</span>
              <span class="plus plus-right-top top-plus">+</span>
              <span
                class="plus plus-left bottom-plus animated fast fadeInUp"
                style="margin-top: -33px;"
              >+</span>
              <span
                class="plus plus-right bottom-plus animated faster fadeInUp"
                style="margin-top: -33px;"
              >+</span>
              <button
                class="hidden-button hover animated fadeIn"
                v-bind:id="0"
                style="display: inline-block;"
              >EXPLORE
              </button>
              <div class="grow-left" v-if="isHovering == development.ID">
                <div class="button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="item projectitembg"
          v-for="(development, index) in firstHalfDevelopments"
          :style="{ backgroundImage: 'url(' + development.image + ')' }"
          @mouseover="isHovering = development.ID"
          @mouseout="isHovering = false"
          :key="index"
          @click="todetail(development.ID)"
        >
          <div class="overlay"></div>
          <div class="text-wrap">
            <!--<span class="text-wrap-content-left" v-text="development.chinese_name"></span>-->
            <!--<div class="side-text" v-text="development.english_name"></div>-->
            <img src="http://www.seedland.cc/wp/wp-content/uploads/2019/08/微信图片_20190826195930.jpg"
                 style="position:absolute; left: 0%; top: 20px; width: 30%">
          </div>
          <div class="footer">

            <div class="explorebutton" v-if="isHovering!== development.ID">
              <span class="plus plus-left-top top-plus" style="transform: rotateZ(360deg);">+</span>
              <span class="plus plus-right-top top-plus" style="transform: rotateZ(360deg);">+</span>
              <span
                class="plus plus-left bottom-plus animated fast fadeOutDown"
                style="margin-top: 0px;"
              >+</span>
              <span
                class="plus plus-right bottom-plus animated faster fadeOutDown"
                style="margin-top: 0px;"
              >+</span>
              <button
                class="hidden-button"
                v-bind:id="0"
                style="display: inline-block;opacity:0;"
              >EXPLORE
              </button>
              <div class="grow-left">
                <div class="button"></div>
              </div>
            </div>
            <div class="explorebutton" v-else>
              <span class="plus plus-left-top top-plus">+</span>
              <span class="plus plus-right-top top-plus">+</span>
              <span
                class="plus plus-left bottom-plus animated fast fadeInUp"
                style="margin-top: -33px;"
              >+</span>
              <span
                class="plus plus-right bottom-plus animated faster fadeInUp"
                style="margin-top: -33px;"
              >+</span>
              <button
                class="hidden-button hover animated fadeIn"
                v-bind:id="0"
                style="display: inline-block;"
              >EXPLORE
              </button>
              <div class="grow-left" v-if="isHovering == development.ID">
                <div class="button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button_footer">
      <div class="right">
        <div class="leftright button">
          <div class="leftbutton leftarrow" v-bind:class="{ active: moveLeft }">
            <div class="leftpageplus1">+</div>
            <div class="leftpageplus2">+</div>
            <div class="leftpageplus3">+</div>
            <div class="leftpageplus4">+</div>

            <div class="leftarrowicon">
              <div class="arrlefttip"></div>
              <div class="arrleftline"></div>
            </div>
          </div>
          <div class="rightbutton rightarrow" v-bind:class="{ active: moveRight }">
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
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      @close="close"
      :modal-append-to-body="false"
      size="100%"
      :show-close="false"
    >
      <Detail :id="id" v-on:fun="close" v-if="drawer"></Detail>
    </el-drawer>
  </div>
</template>
<script>
  import Button from "@/components/Button/Button.vue";
  import Detail from "./Child/Detail";

  export default {
    data() {
      return {
        developments: null,
        isHovering: false,
        secondHalfDevelopments: null,
        firstHalfDevelopments: null,
        moveRight: false,
        moveLeft: false,
        id: 0,
        drawer: false,
        direction: "rtl"
      };
    },
    components: {
      Button,
      Detail
    },

    created() {
      this.$axios
        .get("http://www.seedland.cc/wp/wp-json/template-part/part/2")
        .then(response => {
          this.developments = response.data.development;
          var half = Math.floor(this.developments.length / 2);
          this.firstHalfDevelopments = response.data.development.splice(half);
          this.secondHalfDevelopments = response.data.development;
        });
    },
    methods: {
      // 模拟滑动
      mousemove(event) {
        let developmentBox = document.querySelector(".list");
        let widthParts = window.innerWidth / 5;
        let toRight = window.innerWidth - widthParts;
        let toLeft = window.innerWidth - widthParts * 4;
        if (event.clientX > toRight) {
          developmentBox.scrollLeft += 30;
          this.moveRight = true;
        } else if (event.clientX < toLeft) {
          developmentBox.scrollLeft -= 30;
          this.moveLeft = true;
        } else {
          this.moveLeft = false;
          this.moveRight = false;
        }
      },
      todetail(id) {
        this.id = id;
        this.drawer = true;
      },
      close(data) {
        this.drawer = data;
      }
    }
  };
</script>
<style lang="scss">
  @import "@/assets/style/color.scss";

  .development {
    color: $text-color;
    overflow: hidden;

    .fadeOutDown {
      animation-name: fadeOutDown;
    }

    .list {
      display: flex;
      height: 102vh;
      flex-wrap: wrap;
      flex-direction: column;
      overflow-y: scroll;
      overflow-x: hidden;
      width: 102%;

      .row {
        height: 49%;
        display: flex;
        width: 100%;

        .item {
          width: 25%;
          height: 50vh;
          flex-shrink: 0;
          box-sizing: border-box;
          background-color: #ddd;
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;

          .overlay {
            display: block;
            position: absolute;
            width: 100%;
            height: 50vh;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              background: rgba(0, 0, 0, 0.35) !important;
            }
          }

          .text-wrap {
            color: #fff;
            z-index: 1;
            position: relative;
            font-size: 15px;
            display: block;
            margin-left: 20px;
            padding-top: 20px;
            margin-right: 20px;
          }

          .footer {
            position: relative;

            .side-text {
              position: absolute;
              bottom: -25px;
              left: 20px;
              z-index: 1000;
              letter-spacing: 2px;
              font-size: 14px;
              white-space: pre-line;
              line-height: 25px;
            }

            .hidden-button {
              position: relative;
              z-index: 999;
              font-size: 14px;
              margin-top: -22px;
              float: right;
              width: 125px;
              height: 33px;
              padding-top: 6px;
              padding-bottom: 6px;
              color: #fff;
              background-color: rgba(0, 0, 0, 0.5);

              &:hover {
                background-color: rgba(255, 251, 251, 0.32);
              }

              cursor: pointer;
              font-family: "DIN-Regular";
              letter-spacing: 3px;
              border: none;
            }

            .hidden-button.hover {
              border: 1px solid #ccc;
            }

            .plus {
              color: #fff;
              position: absolute;
              z-index: 999;
              transition: all, 1s;
            }

            .explorebutton {
              position: absolute;
              width: 125px;
              right: 10%;
              top: calc(50vh - 10vh);

              .plus-left-top {
                left: -5px;
                bottom: -9px;
              }

              .plus-left {
                left: -5px;
                top: 1px;
              }

              .plus-right-top {
                right: -5px;
                bottom: -9px;
              }

              .plus-right {
                right: -5px;
                top: 1px;
              }
            }

            .grow-left {
              direction: rtl;
              width: 125px;
              position: absolute;

              .button {
                display: block;
                background-color: #fff;
                transition: all, 0.5s;
                transition-delay: 1s;
                width: 125px !important;
                position: absolute;
                z-index: 999;
                text-align: center;
                margin-top: 10px;
                height: 1px;
                padding: 0px;
              }
            }
          }
        }
      }
    }

    .button_footer {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 1;
      pointer-events: none;

      .right {
        width: 100%;
        position: absolute;
        padding: 18px;
        bottom: 30vh;

        .leftright.button {
          .leftbutton.leftarrow.active,
          .rightbutton.rightarrow.active {
            background-color: hsla(0, 0%, 100%, 0.5);
          }

          .leftbutton {
            cursor: pointer;
            height: 57px;
            width: 57px;
            position: relative;
            background-color: transparent;
            border: 1px solid #fafafa;
            padding: 10px;
            float: left;

            .leftpageplus1 {
              position: absolute;
              top: -12px;
              left: -6px;
              color: #fff;
            }

            .leftpageplus2 {
              position: absolute;
              top: -12px;
              right: -6px;
              color: #fff;
            }

            .leftpageplus3 {
              position: absolute;
              bottom: -10px;
              left: -6px;
              color: #fff;
            }

            .leftpageplus4 {
              position: absolute;
              bottom: -10px;
              right: -6px;
              color: #fff;
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
            cursor: pointer;
            height: 57px;
            width: 57px;
            position: relative;
            background-color: transparent;
            border: 1px solid #fafafa;
            padding: 10px;
            float: right;
            margin-right: 10px;

            .leftpageplus1 {
              position: absolute;
              top: -12px;
              left: -6px;
              color: #fff;
            }

            .leftpageplus2 {
              position: absolute;
              top: -12px;
              right: -6px;
              color: #fff;
            }

            .leftpageplus3 {
              position: absolute;
              bottom: -11px;
              left: -6px;
              color: #fff;
            }

            .leftpageplus4 {
              position: absolute;
              bottom: -11px;
              right: -6px;
              color: #fff;
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