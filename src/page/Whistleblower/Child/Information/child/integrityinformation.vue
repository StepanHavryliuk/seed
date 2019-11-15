<template>
  <div class="ziehharmonika">
    <h3 id="01" v-on:click="resetIntegrityPost(1);integrityPost1 = !integrityPost1">
      受理范围
      <div class="collapseIcon" v-if="integrityPost1">–</div>
      <div class="collapseIcon" v-else-if="!integrityPost1">+</div>
    </h3>
    <div
      v-if="integrityPost1"
      data-simplebar-auto-hide="false"
      data-simplebar
      @mouseenter="enter"
      @mouseleave="leave"
      style="height:22vh"
    >
      <ol>
        <li>索贿、受贿、行贿等行为；</li>
        <li>侵占、盗窃、挪用公司资产及徇私舞弊损害公司利益行为；</li>
        <li>违规进行关联交易或者利用公司资产违规为关联方担保、租赁，谋取不正当利益行为；</li>
        <li>窃取、泄露公司商业秘密或侵犯公司知识产权行为；</li>
        <li>发生重大安全、质量事故，隐瞒不报的行为；</li>
        <li>其他违规、违纪、违法行为。</li>
      </ol>
    </div>

    <h3 id="02" v-on:click="resetIntegrityPost(2);integrityPost2 = !integrityPost2">
      举报人责任
      <div class="collapseIcon" v-if="integrityPost2">–</div>
      <div class="collapseIcon" v-else-if="!integrityPost2">+</div>
    </h3>
    <div v-if="integrityPost2">
      <p>
        1、举报人应遵守国家法律法规，不得损害他人合法利益；
        <br />2、举报内容应客观真实，不得捏造、歪曲事实，不得陷害他人。
      </p>
    </div>

    <h3 id="03" v-on:click="resetIntegrityPost(3);integrityPost3 = !integrityPost3">
      受理提示
      <div class="collapseIcon" v-if="integrityPost3">–</div>
      <div class="collapseIcon" v-else-if="!integrityPost3">+</div>
    </h3>
    <div v-if="integrityPost3">
      <p>
        1、优先处理实名举报问题线索的核查工作。
        <br />2、收到举报后7个工作日内，由审计监察中心进行回复或直接与举报人联系沟通；立案获准之日起2-3个月内办结，并将调查结果反馈给举报人。
        <br />3、经查实存在问题的员工或企业，审计监察中心会建议公司依据相关规定进行严肃处理。
      </p>
    </div>

    <h3 id="04" v-on:click="resetIntegrityPost(4);integrityPost4 = !integrityPost4">
      举报途径
      <div class="collapseIcon" v-if="integrityPost4">–</div>
      <div class="collapseIcon" v-else-if="!integrityPost4">+</div>
    </h3>
    <div v-if="integrityPost4">
      <div>
        <p>
          举报邮箱：complaint@seedland.cc
          <br />举报电话：020-89192171
          <br />微信公众号：阳光实地
        </p>
        <p>或者点击我要 举报，进行在线举报。</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      integrityPost1: false,
      integrityPost2: false,
      integrityPost3: false,
      integrityPost4: false
    };
  },
  methods: {
    enter() {
      this.EventBus.$emit("stopswiper", true);
    },
    leave() {
      this.EventBus.$emit("stopswiper", false);
    },
    resetIntegrityPost(integrityNo) {
      if (integrityNo == 1) {
        this.integrityPost2 = false;
        this.integrityPost3 = false;
        this.integrityPost4 = false;
      } else if (integrityNo == 2) {
        this.integrityPost1 = false;
        this.integrityPost3 = false;
        this.integrityPost4 = false;
      } else if (integrityNo == 3) {
        this.integrityPost1 = false;
        this.integrityPost2 = false;
        this.integrityPost4 = false;
      } else if (integrityNo == 4) {
        this.integrityPost1 = false;
        this.integrityPost2 = false;
        this.integrityPost3 = false;
      }

      this.integrityCounter = integrityNo;
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