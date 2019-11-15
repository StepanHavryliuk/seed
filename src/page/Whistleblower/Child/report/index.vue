<template>
  <div
    id="integrityform1"
    class="subcontainer integrity-sections integrityform1 animated fadeInRight"
  >
    <div class="integrityform1-left" @click="show(1)">
      <img class src="@/assets/images/left-long-arrow-2.png"/>
    </div>

    <div class="integrity-sections-inner">
      <div class="integrity-sections-inner-left">
        <p class="title-top">WHISTLEBLOWER</p>
        <p class="title-bottom">廉洁举报</p>
        <br/>
        <br/>

      </div>

      <div class="integrity-sections-inner-right" @mouseenter="enter"
           @mouseleave="leave">


        <Bar color="rgb(255,255,255)" size hide-horizontal>
          <div>
            <div id="response"></div>
            <form id="integrity-main-form">
              <h1>被举报人信息</h1>
              <div id="integrityform1-wrapper">
                <div id="integrityform1-name-wrap" class="integrityform1-form-group">
                  <label>*姓名 NAME:</label>
                  <input type="text" v-model="integrityform1Name" id="integrityform1-name"/>
                </div>
                <br/>
                <div id="integrityform1-city-wrap" class="integrityform1-form-group">
                  <label>*所在城市 CURRENT CITY:</label>
                  <input type="text" v-model="integrityform1City" id="integrityform1-city"/>
                </div>
                <br/>
                <div id="integrityform1-unit-wrap" class="integrityform1-form-group">
                  <label>*所在单位 CURRENT UNIT:</label>
                  <input type="text" v-model="integrityform1Unit" id="integrityform1-unit"/>
                </div>
                <br/>
                <div id="integrityform1-department-wrap" class="integrityform1-form-group">
                  <label>*所在部门 CURRENT DEPARTMENT:</label>
                  <input type="text" v-model="integrityform1Department" id="integrityform1-department"/>
                </div>
                <br/>
                <div id="integrityform1-reporttype-wrap" class="integrityform1-form-group disable-line">
                  <label>*举报类型 REPORT TYPE:</label>
                  <select id="integrityform1-report-type" v-model="integrityform1ReportType">
                    <option value="索贿受贿  BRIBERY">索贿受贿 BRIBERY</option>
                    <option value="索贿受贿  MALPRACTICE">营私舞弊 MALPRACTICE</option>
                    <option value="违背诚信 VIOLATION OF TRUST">违背诚信 VIOLATION OF TRUST</option>
                    <option value="偷工减料 CUTTING CORNERS">偷工减料 CUTTING CORNERS</option>
                    <option value="贪污资产 CORRUPTION">贪污资产 CORRUPTION</option>
                    <option value=" 其他举报 OTHERS">其他举报 OTHERS</option>
                  </select>
                </div>

              </div>
              <h1>举报内容</h1>
              <div id="integrityform2-wrapper">
                <div id="integrityform2-matters-wrap" class="integrityform2-form-group">
                  <label>*举报事项 REPORTING MATTERS:</label>
                  <input
                    type="text"
                    v-model="integrityform2Matters"
                    id="integrityform2-matters"

                  />
                </div>
                <br/>
                <div class="integrityform2-form-group clearfix">
                  <div class="two-col-left">
                    <div id="integrityform2-location-wrap" class="integrityform2-form-group">
                      <label>*地点 LOCATION:</label>
                      <input
                        type="text"
                        v-model="integrityform2Location"
                        id="integrityform2-location"
                        placeholder="广州"
                      />
                    </div>
                    <br/>
                    <br/>
                    <label>*具体描述 DETAILED DESCRIPTION:</label>
                    <textarea
                      rows="10"
                      v-model="integrityform2Description"
                      id="integrityform2-description"
                    ></textarea>
                  </div>

                  <div class="two-col-right">

                    <div class="time">
                      <label class="animate-text" style="display: inline;">
                    <span style="visibility: hidden;">
                      <span
                        class="word1"
                        style="display: inline-block; transform: translate3d(0px, 0px, 0px);">
                        <span
                          class="char1"
                          style="display: inline-block; visibility: visible;">*时间 TIME:</span>
                      </span>
                    </span>
                      </label>
                      <DatePicker
                        type="date"
                        v-model="integrityform2Time"
                        style="width: 200px"
                        :confirm="true"
                        size="large"
                      ></DatePicker>
                    </div>


                    <br/>
                    <br/>
                    <br/>
                    <label>*证据资料 EVIDENCE DATA:</label>
                    <div class="input-file-container">
                      <input
                        class="input-file"
                        @change="handleFileChange($event)"
                        id="my-file"
                        type="file"
                      />
                      <label tabindex="0" for="my-file" class="input-file-trigger">
                        {{integrityform2Attachment}}
                        <img
                          class="upload-icon"
                          src="../../image/upload-icon-2.png"
                        />
                      </label>
                    </div>
                    <br/>
                    <div class="tips-left-col">*温馨提示 TIPS:</div>

                    <div class="tips-right-col">
                      附件格式为
                      DOC/DOCX/PDF/PPT/PPTX/ZIP/RAR/XLS/XLSX
                      <br/>最大20M，多个文件请压缩 后打包上传
                    </div>

                  </div>
                </div>
              </div>
              <h1>举报人信息</h1>
              <div id="integrityform3-wrapper">
                <div id="integrityform3-name-wrap" class="integrityform3-form-group">
                  <label>*姓名 NAME:</label>
                  <input
                    type="text"
                    v-model="integrityform3Name"
                    id="integrityform3-name"
                  />
                </div>
                <br/>
                <div id="integrityform3-email-wrap" class="integrityform3-form-group">
                  <label>*联系方式（手机、邮箱或其他方式） CONTACT INFORMATION:</label>
                  <input
                    type="email"
                    v-model="integrityform3Email"
                    id="integrityform3-email"
                  />
                </div>
                <br/>
                <br/>
                <div class="integrityform3-two-cols clearfix">
                  <div
                    id="integrityform3-verification-wrap"
                    class="integrityform3-form-group integrityform3-half-left disable-line"
                  >
                    <label>*验证码 VERIFICATION CODE:</label>
                    <input
                      type="text"
                      v-model="integrityform3Verification"
                      id="integrityform3-verification"
                      placeholder
                    />
                    <img
                      id="captcha"
                      src="http://www.seedland.cc/wp/wp-content/themes/Seedland/template-parts/landing/securimage/securimage_show.php"
                      alt="CAPTCHA Image"
                    />
                  </div>

                  <div
                    id="integrityform3-sound-wrap"
                    class="integrityform3-form-group integrityform3-half-right disable-line"
                  >

                    <div id="captcha_refresh">
                  <span>
                    <img class="refresh-icon" src="../../image/refesh-icon.png"/>
                  </span>
                      <span class="refresh-icon-text">*刷新 REFRESH</span>
                    </div>
                  </div>
                </div>

                <div id="integrityform3-submit-wrap" class="integrityform3-form-group disable-line">
                  <input
                    type="button"
                    name="integrityform3-submit"
                    id="integrityform3-submit"
                    value="提交 SUBMIT"
                    v-on:click="submitWhistleblow"
                    v-bind:class="{ disabled: integrityform3Name == '' ||  integrityform3Email == '' || integrityform3Contact == '' || integrityform3AltContact == '' || integrityform3Verification == '' || integrityform2Matters == ''}"
                  />
                  <div class="findoutplus1">+</div>
                  <div class="findoutplus2">+</div>
                  <div class="findoutplus3">+</div>
                  <div class="findoutplus4">+</div>
                </div>

                <input type="hidden" name="action"/>
              </div>
            </form>
          </div>

        </Bar>

      </div>
    </div>
  </div>
</template>
<script>
  import {DatePicker, Icon} from "view-design";


  export default {
    data() {
      return {
        integrity: 0,
        integrityPost: 0,
        subIntegrity: 0,
        integrityCounter: 0,
        secondIntegrityCounter: 0,
        thirdIntegrityCounter: 0,
        integrityform1Name: "",
        integrityform1City: "",
        integrityform1Unit: "",
        integrityform1Department: "",
        integrityform1ReportType: "索贿受贿  BRIBERY",
        integrityform2Matters: "",
        integrityform2Location: "",
        integrityform2Time: "00:00",
        integrityform2Description: "",
        integrityform2Attachment: "UPLOAD FILE",
        integrityform2AttachmentContent: "",
        integrityform3Name: "",
        integrityform3Email: "",
        integrityform3Contact: "",
        integrityform3AltContact: "",
        integrityform3Verification: "",
        audio: ""
      };
    },
    components: {DatePicker, Icon,},
    methods: {
      show(show) {
        this.EventBus.$emit("show", show);
      },
      enter() {
        this.EventBus.$emit("stopswiper", true);
      },
      leave() {
        this.EventBus.$emit("stopswiper", false);
      },
      submitWhistleblow() {
        let formData = new FormData();
        formData.append("integrityform1Name", this.integrityform1Name);
        formData.append("integrityform1City", this.integrityform1City);
        formData.append("integrityform1Unit", this.integrityform1Unit);
        formData.append(
          "integrityform1Department",
          this.integrityform1Department
        );
        formData.append(
          "integrityform1ReportType",
          this.integrityform1ReportType
        );
        formData.append("integrityform2Matters", this.integrityform2Matters);
        formData.append("integrityform2Location", this.integrityform2Location);
        formData.append("integrityform2Time", this.integrityform2Time);
        formData.append(
          "integrityform2Description",
          this.integrityform2Description
        );
        formData.append(
          "integrityform2Attachment",
          this.integrityform2Attachment
        );
        formData.append(
          "integrityform2AttachmentContent",
          this.integrityform2AttachmentContent
        );
        formData.append("integrityform3Name", this.integrityform3Name);
        formData.append("integrityform3Email", this.integrityform3Email);
        formData.append("integrityform3Contact", this.integrityform3Contact);
        formData.append(
          "integrityform3AltContact",
          this.integrityform3AltContact
        );
        formData.append(
          "integrityform3Verification",
          this.integrityform3Verification
        );
        this.axios
          .post(
            "http://www.seedland.cc/wp-en/wp/wp-json/submit-whistleblow/submit",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => {
            this.integrityform2Time = "";
            this.integrityform1Name = "";
            this.integrityform1City = "";
            this.integrityform1Unit = "";
            this.integrityform1Department = "";
            this.integrityform1ReportType = "";
            this.integrityform2Matters = "";
            this.integrityform2Location = "";
            this.integrityform2Description = "";
            this.integrityform2Attachment = "";
            this.integrityform2AttachmentContent = "";
            this.integrityform3Name = "";
            this.integrityform3Email = "";
            this.integrityform3Contact = "";
            this.integrityform3AltContact = "";
            this.integrityform3Verification = "";
            this.integrity = 5;
          });
      }
    }
  };
</script>
<style lang='scss' scoped>
  @import "@/assets/style/color.scss";

  .time {

    &::after {
      display: block;
      content: "";
      border-bottom: solid 1px rgba(255, 255, 255, 0.5215686274509804);
      width: 100%;
      margin-top: 21px;
    }

  }

  .integrity-sections {
    position: absolute;
    height: 100vh;

    .exploremore.button {
      right: 200px;
      bottom: 14vh;

      &:hover {
        background: rgba(255, 255, 255, 0.5);
      }
    }

    .integrityform1-left {
      width: 50%;
      float: left;
      box-sizing: border-box;
      padding-left: 30px;
      position: absolute;
      top: 10px;
      left: 40px;
      z-index: 10000;

      img {
        width: 30px;
        cursor: pointer;
        opacity: 0.5;

        &:hover {
          opacity: 1;
          transition: all 0.3s ease;
        }
      }
    }

    .integrity-sections-inner {
      width: 100%;
      float: left;
      height: 100%;

      .integrity-sections-inner-left {
        box-sizing: border-box;
        margin-right: 0;
        vertical-align: top;
        max-width: 350px;
        width: 25%;
        display: inline-block;
        font-size: $font-17;

        .title-top {
          font-family: "DIN-Regular";
          font-size: 17px;
          letter-spacing: 2px;
        }

        .title-bottom {
          line-height: 0;
          font-family: "NotoSansCJKsc-Light";
          font-size: 17px;
        }
      }

      #integrityform1-tab-title2 .tab-number {
        top: 16vh;
      }

      #integrityform1-tab-title3 .tab-number {
        top: 20vh;
      }

      .integrity-sections-vertical-text {
        position: relative;
        height: 30%;
        width: 100%;

        .tab-number.active {
          opacity: 1;
        }

        .tab-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #fff;
          position: relative;
          cursor: pointer;
          opacity: 0.6;

          span.active {
            top: 4px;
          }

          span {
            display: block;
            text-align: center;
            top: 5px;
            font-size: 25px;
            position: relative;
          }
        }

        .vertical {
          margin-top: 0;
          top: 65px;
          font-size: 14px;
          line-height: 15px;
          position: absolute;
          font-family: "NotoSansCJKsc-Light";
        }

        .vertical-text {
          transform: rotate(-90deg);
          display: inline-block;
          position: relative;
          margin-top: 71px;
          margin-left: -38px;
          width: fit-content;
          height: fit-content;
          width: -moz-max-content;
          font-size: 12px;
          top: 0vh;
        }
      }

      .integrity-sections-inner-right {
        width: 73%;
        height: 90%;
        box-sizing: border-box;
        margin-left: 0;
        display: inline-block;
        font-size: 16px;


        #integrity-main-form {
          width: 100%;
          height: 100%;

          input[type="text"],
          input[type="email"],
           input[type="number"]{
            width: 60%;
            background: none;
            border: none;
            height: 50px;
            font-weight: lighter;
            color: #fff;
            font-size: 20px;
            padding: 0 10px;
          }

          .two-col-left {
            width: 59%;
            float: left;
            box-sizing: border-box;
            margin-right: 1%;

            textarea {
              width: 100%;
              background: none;
              border: 1px solid rgba(255, 255, 255, 0.62);
              margin-top: 20px;
            }
          }

          .two-col-right {
            width: 39%;
            float: left;
            box-sizing: border-box;
            margin-left: 1%;

            .input-file-container {
              position: relative;
              width: 100%;
              margin-top: 20px;

              .input-file {
                position: absolute;
                top: 0;
                left: 0;
                width: 225px;
                opacity: 0;
                padding: 14px 0;
                cursor: pointer;
              }

              .input-file-trigger {
                display: block;
                padding: 14px 0 14px 10px;
                background: none;
                color: #fff;
                font-size: 1em;
                transition: all .4s;
                cursor: pointer;
                border: 1px solid #fff;
                text-align: left;

                .upload-icon {
                  width: 26px;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  right: 20px;
                  opacity: 0.4;
                }
              }
            }

            .tips-left-col {
              float: left;
              width: 38%;
              box-sizing: border-box;
              margin-right: 2%;
            }

            .tips-right-col {
              float: left;
              width: 58%;
              box-sizing: border-box;
              margin-left: 2%;
              font-size: 10px;
            }
          }

          select {
            width: 74%;
            padding-top: 15px;
            padding-bottom: 15px;
            background: none;
            border: 1px solid rgba(255, 255, 255, 1);
            color: white;
            height: 70px;
            border-radius: 0;
            font-size: 26px;
            font-family: "DIN-Light";
            -moz-appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: url("../../../../assets/images/chevron-down-small.png") right / 30px no-repeat transparent;
            padding-right: 20px;
            background-position: 98% 50%;
            background-color: black;
            margin-left: 20px;
          }





          .integrityform3-half-left {
            width: 68%;
            float: left;
            box-sizing: border-box;
            margin-right: 2%;

          }
          #integrityform3-verification-wrap {

            label {
              margin-right: 30px;
            }

            #integrityform3-verification {
              width: 20% !important;
              border: 1px solid #fff !important;

            }

            #captcha {
              top: 25px;
              height: 65px;
              margin-left: 5px !important;
            }
          }

          .integrityform3-half-right {
            width: 28%;
            float: left;
            box-sizing: border-box;
            margin-left: 2%;

            #captcha_refresh {
              position: relative;

              .refresh-icon {
                width: 23%;
                cursor: pointer;
              }
            }
          }

          #integrityform3-submit-wrap {
            width: 100%;
            display: inline-block;
            margin-top: 40px;
            margin-bottom: 40px;
            position: relative;

            #integrityform3-submit {
              width: 350px;
              float: right;
              border: 1px solid #fff;
              background: transparent;
              color: #fff;
              padding: 12px 0;
              cursor: pointer;
              font-size: 24px;
              letter-spacing: 6px;
              cursor: pointer;
              font-family: "DIN-Light";
            }
            .findoutplus1 {
              position: absolute;
              top: -14px;
              right: 345px;
              left: auto;
              font-size: 18px;
            }
            .findoutplus2 {
              position: absolute;
              top: -14px;
              right: -4px;
              font-size: 18px;
            }
            .findoutplus3 {
              position: absolute;
              bottom: -12px;
              left: auto;
              right: 345px;
              font-size: 18px;
            }
            .findoutplus4 {
              position: absolute;
              bottom: -12px;
              right: -4px;
              font-size: 18px;
            }
          }

        }
      }
    }


  }
</style>