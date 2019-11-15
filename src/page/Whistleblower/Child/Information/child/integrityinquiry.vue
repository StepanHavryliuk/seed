<template>
  <div class="inquiry-form-wrapper">
    <h1 class="inquiry-form-title">输入相关信息查询投诉受理状态：</h1>

    <form id="inquiry-form">

      <div class="inquiry-form-group">
        <label>*查询码 ACCESS CODE:</label>
        <input type="text" name="inquiry-access-code" id="inquiry-access-code" v-model="accesscode" />
      </div>
      <br />

      <div class="inquiry-form-group">
        <div class="inquiry-submit-box">
          <div style="width:100%;position:relative;">
            <input type="submit" name="inquiry-submit" id="inquiry-submit" value="查询 INQUIRE" />
            <div class="findoutplus1">+</div>
            <div class="findoutplus2">+</div>
            <div class="findoutplus3">+</div>
            <div class="findoutplus4">+</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accesscode:null
    };
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/color.scss";
.inquiry-form-wrapper {
  font-size: $font-16;
  h1 {
    position: relative;
    font-family: "NotoSansCJKsc-Light";
    font-weight: lighter;
    &:before {
      content: "";
      position: absolute;
      display: block;
      border-top: 1px solid #fff;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  #inquiry-form {
    max-width: 1000px;
    margin-top: 8%;
    .inquiry-form-group {
      position: relative;
      #inquiry-case-number,
      #inquiry-access-code {
        width: calc(100% - 370px);
        padding-top: 12px;
        padding-bottom: 12px;
        border: 1px solid #ddd;
        background: no-repeat;
        color: white;
        font-size: 20px;
      }
      label {
        width: 220px;
        display: inline-block;
        font-family: "DIN-Regular";
      }
      .inquiry-submit-box {
        margin-left: 220px;
        width: calc(100% - 370px);
        #inquiry-submit {
          border: 1px solid #fff;
          padding-top: 12px;
          padding-bottom: 12px;
          background: transparent;
          color: #fff;
          font-size: 24px;
          letter-spacing: 6px;
          cursor: pointer;
          font-family: "DIN-Light";
          width: 100%;
        }
        .findoutplus1 {
          position: absolute;
          top: -14px;
          left: -1px;
          font-size: 18px;
          margin-left: -5px;
        }
        .findoutplus2 {
          position: absolute;
          top: -14px;
          right: -6px;
          font-size: 18px;
        }
        .findoutplus3 {
          position: absolute;
          bottom: -12px;
          left: -1px;
          margin-left: -5px;
          font-size: 18px;
        }
        .findoutplus4 {
          position: absolute;
          bottom: -12px;
          right: -6px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>