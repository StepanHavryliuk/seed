<template>
  <div style="height:100%; position: relative;">
    <div class="subcontainer milestones">
      <div class="left">
        <div class="subpage title">
          <div class="en">MILESTONES</div>
          <div class="cn" v-show="this.$i18n.locale=='zh-CN'">里程碑</div>
        </div>
      </div>
      <div class="right">
        <div
          class="milestones content"
          data-simplebar-auto-hide="false"
          data-simplebar
          @mouseenter="enter"
          @mouseleave="leave"
        >
          <div>
            <span v-for="(milestone, index) in milestones.text" :key="index">
              <strong>{{milestones.title[index]}}</strong>
              <p v-html="milestones.text[index]"></p>
            </span>
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
      curindex: 1
    };
  },
  props: ["milestones"],
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
@import "@/assets/style/color.scss";
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
      font-size: 17px;
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
    width: 66vw;
    position: absolute;
    padding-top: 5%;
    height: 54vh;
    .title {
      font-size: 50px;
      white-space: nowrap;
      font-weight: 100;
    }
    .content {
      padding-right: 0px !important;
      position: relative;
      width: 100%;
      padding-right: 140px;
      height: 100%;

      span {
        display: block;
        font-size: $font-18;

        p {
          margin: 18px 0;
        }
      }
    }
  }
}
</style>