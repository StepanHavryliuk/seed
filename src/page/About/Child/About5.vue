<template>
  <div style="height:100%; position: relative;">
    <div class="subcontainer philosophy">
      <div class="left">
        <div class="subpage title">
          <div class="en">PHILOSOPHY</div>
          <div class="cn">实地理念</div>
        </div>
      </div>
      <div class="right content" style="margin-top: 1%;">
        <div class="tabs">
          <div class="tab left" v-on:click="tab = 1" v-bind:class="{ inactive: tab !== 1 }">
            <div class="leftpageplus1">+</div>
            <div class="leftpageplus2">+</div>
            <div class="leftpageplus3">+</div>
            <div class="leftpageplus4">+</div>
            <div class="tab-text">{{philosophy_title_1}}</div>
          </div>
          <div class="tab right" v-on:click="tab = 2" v-bind:class="{ inactive: tab !== 2 }">
            <div class="leftpageplus1">+</div>
            <div class="leftpageplus2">+</div>
            <div class="leftpageplus3">+</div>
            <div class="leftpageplus4">+</div>
            <div class="tab-text">{{philosophy_title_2}}</div>
          </div>
        </div>
        <div class="title underline"></div>

        <div class="tab-content">
          <div class="tableft">
            <transition name="fade" mode="out-in">
              <div v-if="tab== 1" key="tab1">
                <div class="tab title" v-html="philosophy_header_1"></div>
                <div class="tab content" v-html="philosophy_content_1"></div>
              </div>
              <div v-else key="tab2">
                <div class="tab title" v-html="philosophy_header_2"></div>
                <div class="tab content" v-html="philosophy_content_2"></div>
              </div>
            </transition>
          </div>
          <div class="tabright">
            <transition name="fade" mode="out-in">
              <div v-if="tab== 1" key="righttab1">
                <div class="tab title" v-if="tab== 1" v-html="philosophy_header_2"></div>
                <div class="tab content" v-if="tab== 1" v-html="philosophy_content_2"></div>
              </div>
              <div v-else key="righttab2">
                <div class="tab title" v-html="philosophy_header_1"></div>
                <div class="tab content" v-html="philosophy_content_1"></div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post } from '@/common/Fetch';
export default {
  data() {
    return {
      tab: 1,
    
    };
  },
  props:["philosophy_title_1","philosophy_title_2","philosophy_header_1","philosophy_header_2","philosophy_content_1","philosophy_content_2"],
  methods: {
    check(index) {
      this.cur = index;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/color.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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
    width: 70vw;
    padding-right: 80px;
    position: absolute;
    .tabs .tab.inactive .leftpageplus1,
    .tabs .inactive .leftpageplus2,
    .tabs .inactive .leftpageplus3,
    .tabs .inactive .leftpageplus4 {
      display: none;
    }
    .tabs {
      .left,
      .right {
        width: auto;
        padding: 13px 25px;
        border: 1px solid #fff;
        background: rgba(255, 255, 255, 0.5);
        .tab-text {
          font-size: 24px;
        }
      }
      .tab.inactive {
        background-color: #8a8989c2;
        opacity: 0.5;
      }
      .leftpageplus1 {
        position: absolute;
        top: -12px;
        left: -6px;
      }
      .leftpageplus2 {
        position: absolute;
        top: -12px;
        right: -6px;
      }
      .leftpageplus3 {
        position: absolute;
        left: -6px;
        bottom: -11px;
      }
      .leftpageplus4 {
        position: absolute;
        right: -6px;
        bottom: -11px;
      }
      .left {
        margin-right: 40px;
        // transition: background-color 1s ease-in;
        position: relative;
      }
    }
    .title.underline {
      margin: 40px 0px 20px;
      border-bottom: white 1px solid;
      width: 100px;
    }
    .tab-content {
      display: flex;
      .tableft {
        width: 69%;
        display: inline-block !important;
        white-space: normal;
        .tab.title {
          font-family: "NotoSansCJKsc-Thin";
          font-size: 4vw;
        }
        .tab.content {
          font-family: "NotoSansCJKsc-Thin";
          font-size: 20px;
          margin-top: 30px;
        }
      }
      .tabright {
        width: 40%;
        display: inline-block !important;
        white-space: normal;
        filter: blur(3px);
        margin-left: 30px;
      }
    }
  }
}
</style>