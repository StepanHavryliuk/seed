<template>
  <div id="joblisting-apply">
    <div class="apply-container" style="max-height: 67vh;">
      <div data-simplebar-auto-hide="false" data-simplebar>
        <div class="apply-header">
          <p>
            职位名称：
            <b>{{chosenJob}}</b>
          </p>
          <p>
            工作所在地：
            <b>{{chosenLocation}}</b>
          </p>
          <p style="margin-block-end: 0px;">职位描述：</p>
          <div class="apply-class" v-html="chosenJobDesc"></div>
          <p style="margin-block-end: 0px;">岗位职责：</p>
        </div>
        <div class="apply-class" v-html="chosenJobResponsibilities"></div>
        <p style="margin-block-end: 0px;">任职资格：</p>
        <div class="apply-class" v-html="chosenJobQualification"></div>
      </div>
    </div>
    <div class="join-us-btn" style="bottom: 20%;" v-on:click="showapplyjob()">
      <button>
        <span class="joinusleft">
          <p>APPLY NOW</p>
          <span>申请该职位</span>
        </span>
        <div class="joinusright">
          <div class="findarrow"></div>
          <div class="findpoint"></div>
        </div>
        <div class="joinplus1">+</div>
        <div class="joinplus2">+</div>
        <div class="joinplus3">+</div>
        <div class="joinplus4">+</div>
        <div class="joinbordertop"></div>
        <div class="joinborderbtm"></div>
      </button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  props: [
    "chosenJob",
    "chosenLocation",
    "chosenJobDesc",
    "chosenJobResponsibilities",
    "chosenJobQualification"
  ],
  methods: {
    showapplyjob() {
      this.EventBus.$emit("showapplyjob", true);
    }
  }
};
</script>
<style lang='scss' scoped>
.join-us-btn {
  position: absolute;
  z-index: 0;
  bottom: 140px;
  right: 125px;
  bottom: 40px;
  button {
    display: flex;
    color: #fafafa;
    background-color: transparent;
    border: 1px solid #fafafa;
    padding: 10px 13px;
    width: 350px;
    transition: background-color 1s ease-in;
    position: static;
    p {
      margin: 0;
    }
    &:hover {
      background: rgba(250, 250, 250, 0.4);
      transition: all 0.3s ease;
    }
    .joinusleft {
      float: left;
      position: relative;
      width: 80%;
      font-size: 18px;
      text-align: left;
      p {
        margin: 0 auto;
        width: auto;
        letter-spacing: 3px;
        white-space: nowrap;
        padding-bottom: 5px;
        font-family: "DIN-Light";
        font-size: 14px;
      }
      span {
        font-size: 15px;
        width: auto;
        letter-spacing: 3px;
        white-space: nowrap;
        font-family: "NotoSansCJKsc-Light";
      }
    }
    .joinusright {
      position: relative;
      float: left;
      width: 20%;
      top: 10;
      .findpoint {
        border-bottom: 2px solid #fafafa;
        width: 15px;
        transform: rotate(30deg);
        transform-origin: bottom right;
        position: relative;
        float: right;
        top: -2px;
      }

      .findarrow {
        border-bottom: 2px solid #fafafa;
        margin-top: 22px;
      }
    }
    .joinplus1 {
      position: absolute;
      top: -9px;
      left: -4px;
    }
    .joinplus2 {
      position: absolute;
      top: -9px;
      right: -4px;
    }
    .joinplus3 {
      position: absolute;
      bottom: -11px;
      left: -4px;
    }
    .joinplus4 {
      position: absolute;
      bottom: -11px;
      right: -4px;
    }
    .join-us-btn button div {
      font-size: 18px;
    }
    .joinbordertop {
      background: #fafafa;
      width: 50%;
      height: 1px;
      position: absolute;
      top: 0;
      right: 0;
    }
    .joinborderbtm {
      background: #fafafa;
      width: 10%;
      height: 1px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>