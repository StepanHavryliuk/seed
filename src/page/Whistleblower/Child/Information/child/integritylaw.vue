<template>
  <div class="ziehharmonika">
    <h3
      id="01"
      v-on:click="resetSecondIntegrityPost(1);secondIntegrityPost1 = !secondIntegrityPost1"
    >
      举报保密政策
      <div class="collapseIcon" v-if="secondIntegrityPost1">–</div>
      <div class="collapseIcon" v-else-if="!secondIntegrityPost1">+</div>
    </h3>
    <div v-show="secondIntegrityPost1">
      <p>对举报人信息进行严格保密是我们最基本职责，并要求被调查单位和被举报人不得对举报人实行打击报复行为，一经发现，严肃处理。</p>
    </div>

    <h3
      id="02"
      v-on:click="resetSecondIntegrityPost(2);secondIntegrityPost2 = !secondIntegrityPost2"
    >
      实名优先政策
      <div class="collapseIcon" v-if="secondIntegrityPost2">–</div>
      <div class="collapseIcon" v-else-if="!secondIntegrityPost2">+</div>
    </h3>
    <div v-show="secondIntegrityPost2">
      <p>我们鼓励使用自己的真实姓名进行实名举报，优先办理实名举报并及时反馈受理情况及通报处理结果。</p>
    </div>

    <h3
      id="03"
      v-on:click="resetSecondIntegrityPost(3);secondIntegrityPost3 = !secondIntegrityPost3"
    >
      举报奖励
      <div class="collapseIcon" v-if="secondIntegrityPost3">–</div>
      <div class="collapseIcon" v-else-if="!secondIntegrityPost3">+</div>
    </h3>
    <div
      v-if="secondIntegrityPost3"
      data-simplebar-auto-hide="false"
      data-simplebar
      style="height:22vh"
      @mouseenter="enter"
      @mouseleave="leave"
    >
      <div>
        <p>
          <strong>1</strong>
          <strong>：查证属实奖</strong>：
        </p>
        <p>任何关于以上实地员工违规、违纪、违法行为的举报，视情节严重程度及影响，经查证属实将给予500-5000元的奖励。</p>
        <p>
          <strong>2</strong>
          <strong>：协助立案奖：</strong>
        </p>
        <p>如涉及实地员工涉嫌违法犯罪，举报人积极配合调查工作并做出实质重大贡献，案件移交公安机关处理并成功立案的，给予5000-10000元奖励。</p>
        <p>
          <strong>3</strong>
          <strong>：挽回损失奖：</strong>
        </p>
        <p>投诉案件调查过程中，如追回了相关损失，或避免了公司确定将发生的损失，将视举报人给予案件调查的支持和参与程度予以额外奖励：追回损失奖励按实际到账金额计算，最低2000元，10万元及以下按不超过追回金额的10%奖励，10万元以上部分按不超过5%奖励；避免损失按应付金额与结算金额的差额计算，最低2000元，10万元及以下按不超过差额的10%奖励，10万元以上部分按不超过5%奖励。有特别重大贡献的举报有功人员，可给予重奖。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      secondIntegrityPost1: false,
      secondIntegrityPost2: false,
      secondIntegrityPost3: false
    };
  },
  methods: {
    enter() {
      this.EventBus.$emit("stopswiper", true);
    },
    leave() {
      this.EventBus.$emit("stopswiper", false);
    },
    resetSecondIntegrityPost(integrityNo) {
      if (integrityNo == 1) {
        this.secondIntegrityPost2 = false;
        this.secondIntegrityPost3 = false;
      } else if (integrityNo == 2) {
        this.secondIntegrityPost1 = false;
        this.secondIntegrityPost3 = false;
      } else if (integrityNo == 3) {
        this.secondIntegrityPost1 = false;
        this.secondIntegrityPost2 = false;
      }

      this.secondIntegrityCounter = integrityNo;
    }
  }
};
</script>
<style lang='scss' scoped>
.ziehharmonika {
  font-size: 20px;
  div p {
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-bottom: 1em;
  }
  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    li {
      display: list-item;
      list-style: decimal;
    }
  }
  h3 {
    background: #272e35;
    color: #fff;
    text-align: left;
    border-radius: 4px;
    padding: 14px 0;
    cursor: pointer;
    margin-top: 0;
    margin-bottom: 9px;
    padding-right: 40px;
    transition: 0.25s all;
    position: relative;
    border-radius: 0 !important;
    background: rgba(255, 255, 255, 0) !important;
    border-bottom: 1px solid #fff;
    font-family: "NotoSansCJKsc-Light";
    font-weight: lighter;
    font-size: 32px;
    opacity: 1;
    &:before {
      content: attr(data-prefix);
      font-size: 18px;
      margin-right: 9px;
    }
    .collapseIcon {
      position: absolute;
      right: 20px;
      top: 45%;
      font-size: 45px;
      font-weight: lighter;
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      font-family: "DIN-Light";
    }
  }
}
</style>