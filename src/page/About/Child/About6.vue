<template>
  <div style="height:100%; position: relative;">
    <div class="subcontainer glory">
      <div class="left">
        <div class="subpage title">
          <div class="en">GLORY</div>
          <div class="cn">实地荣誉</div>
        </div>
      </div>
      <div class="right">
        <div
          class="glory content"
          v-if="glories !== null"
          ref="glory"
          data-simplebar-auto-hide="false"
          data-simplebar
          @mousemove="mousemove"
          @mouseenter="enter"
          @mouseleave="leave"
        >
          <div>
            <div
              class="glory-content-wrapper"
              v-for="(glorycontent, index) in glories.glory_header"
              :key="index"
            >
              <div class="glory-content-left">
                <strong>{{glorycontent}}</strong>
              </div>
              <div class="glory-content-right">
                <p v-html="glories.glory_text[index]"></p>
              </div>
            </div>
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
  props: ["glories"],
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/color.scss";
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: $font-18;
  margin-block-end: $font-18;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.subcontainer {
  width: 100vw;
  margin-top: 3%;
  padding-left: 5%;
  padding-right: 5%;
  display: block;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: $text-color;
  height: 100vh;
  .left {
    vertical-align: top;
    max-width: 375px;
    width: 15%;
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
    padding-right: 80px;
    position: absolute;
    width: 75%;
    .content {
      margin-top: 12%;
      height: 47vh;
      font-family: "NotoSansCJKsc-Thin", sans-serif;
      max-width: 100%;
      position: relative;
      scrollbar-color: transparent transparent;
      scrollbar-track-color: transparent;
      -ms-scrollbar-track-color: transparent;
      padding-right: 50px;
      font-size: $font-18;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        height: 1px;
        width: 85%;
        border-top: 1px solid #ccc;
      }
      .glory-content-wrapper {
        width: 80%;
        float: left;
        box-sizing: border-box;
        font-size: $font-18;
        .glory-content-left {
          width: 38%;
          float: left;
          margin-right: 2%;
          box-sizing: border-box;
          padding-top: 20px;
          font-size: $font-18;
        }
        .glory-content-right {
          width: 58%;
          float: right;
          margin-left: 2%;
          box-sizing: border-box;
          font-size: $font-18;
          P{
            font-size: $font-18;
          }

        }
      }
    }
  }
}
</style>