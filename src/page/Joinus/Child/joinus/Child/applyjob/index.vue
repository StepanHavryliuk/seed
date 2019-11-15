<template>
  <div id="joblisting-signup" class="animated">
    <div id="response"></div>
    <div
      class="joblisting-form-wrapper jobListing"
      data-simplebar-auto-hide="false"
      data-simplebar
      @mouseenter="enter"
      @mouseleave="leave"
    >
      <form id="joblisting-form" method="POST">
        <div id="name-line" class="form-group half half-left name-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span class="char1" style="display: inline-block; visibility: visible;">*姓名 NAME:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="name" id="name" />
        </div>

        <div class="form-group half half-right salutation">
          <label>*称呼 SALUTATION:</label>
          <div class="selectdiv" style="margin-left: 52px;">
            <select id="salutation" v-model="salutation">
              <option value="先生 MR">先生 MR.</option>
              <option value="先生 MR">女士 MS.</option>
            </select>
          </div>
        </div>

        <div id="handphone-line" class="form-group half half-left name-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*手机 HANDPHONE:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="handphone" id="number" style="width: 58%;" />
        </div>

        <div class="form-group half half-right salutation">
          <label>*学历 QUALITIFICATION:</label>
          <div class="selectdiv" style="margin-left: 18px;">
            <select id="qualification" v-model="qualification">
              <option
                v-for="(option,index) in selectlist "
                :key=" index"
                :value="option"
                v-text="option"
              ></option>
            </select>
          </div>
        </div>

        <div  class="form-group half half-left email-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*出生日期 BIRTHDATE:</span>
              </span>
            </span>
          </label>
          <DatePicker
            type="date"
            v-model="birthDate"
            style="width: 200px"
            :confirm="true"
            size="large"
          ></DatePicker>
          <!-- <input type="text" v-model="birthDate" id="birthdate" style="width: 50%;" /> -->
        </div>

        <div class="form-group half half-right salutation">
          <label>*婚姻状态 MARITAL STATUS:</label>
          <div class="selectdiv">
            <select id="marital" v-model="maritalStatus">
              <option value="单身">单身</option>
              <option value="已婚">已婚</option>
              <option value="已婚有子">已婚有子</option>
              <option value="离异">离异</option>
            </select>
          </div>
        </div>

        <div id="email-line" class="form-group full email-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span class="char1" style="display: inline-block; visibility: visible;">*E-MAIL:</span>
              </span>
            </span>
          </label>
          <input type="email" v-model="email" id="email" />
        </div>

        <div id="address-line" class="form-group full address-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*联系地址 ADDRESS:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="address" id="address" />
        </div>

        <div id="company-line" class="form-group full company-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*目前任职公司 CURRENTCOMPANY:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="currentCompany" id="company" style="width: 65%;" />
        </div>

        <div id="work-location-line" class="form-group half half-left work-location-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span class="char1" style="display: inline-block; visibility: visible;">*现工作地</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="currentWorkLocation" id="location" />
        </div>

        <div id="working-years-line" class="form-group half half-right working-years-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*工作年限 WORKINGYEARS:</span>
              </span>
            </span>
          </label>
          <input type="number" v-model="workingYears" id="years" />
        </div>

        <div id="salary-line" class="form-group half half-left salary-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*目前薪水 CURRENTSALARY:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="currentSalary" id="salary" style="width:40%" />
        </div>

        <div id="expected-salary-line" class="form-group half half-right expected-salary-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*期望薪水 EXPECTEDSALARY:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="expectedSalary" id="expected-salary" style="width:35%" />
        </div>

        <div id="starting-date-line" class="form-group half half-left starting-date-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*到岗日期STARTINGDATE:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="startingDate" id="starting-date" style="width:40%" />
        </div>

        <div id="nationality-line" class="form-group half half-right nationality-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*民族 NATIONALITY:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="nationality" id="nationality" style="width:35%" />
        </div>

        <div id="identity-line" class="form-group full identity-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span
                  class="char1"
                  style="display: inline-block; visibility: visible;"
                >*身份证号IDENTITYNO.:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="identityNo" id="identity" style="width: 65%;" />
        </div>

        <div id="height-line" class="form-group half half-left height-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span class="char1" style="display: inline-block; visibility: visible;">*身高 HEIGHT:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="height" id="height" style="width:40%" />
        </div>

        <div id="weight-line" class="form-group half half-right weight-line">
          <label class="animate-text" style="display: inline;">
            <span style="visibility: hidden;">
              <span
                class="word1"
                style="display: inline-block; transform: translate3d(0px, 0px, 0px);"
              >
                <span class="char1" style="display: inline-block; visibility: visible;">*体重 WEIGHT:</span>
              </span>
            </span>
          </label>
          <input type="text" v-model="weight" id="weight" style="width:35%" />
        </div>

        <div id="evaluation" class="form-group evaluation">
          <label>*自我评价 SELF-EVALUATION:</label>
          <textarea v-model="selfEvaluation"></textarea>
        </div>

        <div id="experience" class="form-group experience textbox">
          <label>*工作经历 WORK EXPERIENCE:</label>
          <textarea v-model="workExperience"></textarea>
        </div>

        <div id="education" class="form-group education textbox">
          <label>*教育经历 EDUCATIONAL EXPERIENCE:</label>
          <textarea v-model="educationalExperience"></textarea>
        </div>

        <div id="training" class="form-group training textbox">
          <label>*培训经历 TRAINING EXPERIENCE:</label>
          <textarea v-model="trainingExperience"></textarea>
        </div>

        <div id="certificate" class="form-group certificate textbox">
          <label>*获奖证书 AWARD CERTIFICATE:</label>
          <textarea v-model="awardCertificate"></textarea>
        </div>

        <div id="computer" class="form-group computer textbox">
          <label>*计算机能力 COMPUTER SKILLS:</label>
          <textarea v-model="computerSkills"></textarea>
        </div>

        <div id="related" class="form-group related textbox">
          <label>*相关技能 RELATED SKILL:</label>
          <textarea v-model="relatedSkills"></textarea>
        </div>

        <div id="resume" class="form-group resume textbox">
          <label>*原始简历 RESUME (您可以将网页或者WORD格式的原始简历粘贴至以下文本框):</label>
          <textarea v-model="resume"></textarea>
        </div>

        <div
          class="form-group half half-right no-bottom-border"
          style="float: right;margin-top: 20px;"
        >
          <div class="submit-btn-wrap submit-btn-bottom-border submit-btn-top-border">
            <span class="cross" id="top-left-cross">+</span>
            <span class="cross" id="top-right-cross">+</span>
            <input
              class="animated delay-1s fadeIn"
              type="button"
              name="submit-btn"
              id="submit-btn"
              value="提交"
              style="display: inline-block;"
              v-on:click="submitJob"
              v-bind:class="{ disabled: salutation == '' ||  qualification == '' || handphone == '' || name == '' || email == '' || address == '' || currentWorkLocation == '' || currentSalary == '' || expectedSalary == '' || startingDate == '' || nationality == '' || identityNo == '' || selfEvaluation == '' || workExperience == '' || educationalExperience == '' || relatedSkills == '' || resume == '' ||  computerSkills == '' || awardCertificate == '' || trainingExperience == '' || height == '' || weight == '' || workingYears == '' || currentCompany == '' || maritalStatus == ''}"
            />
            <span class="cross" id="bottom-left-cross">+</span>
            <span class="cross" id="bottom-right-cross">+</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

import { DatePicker, Icon } from "view-design";
export default {
  data() {
    return {
      name: "",
      handphone: "",
      birthDate: "",
      salutation: "先生 MR",
      qualification: "大专",
      maritalStatus: "单身",
      email: "",
      address: "",
      currentCompany: "",
      currentWorkLocation: "",
      workingYears: "",
      currentSalary: "",
      expectedSalary: "",
      startingDate: "",
      nationality: "",
      identityNo: "",
      height: "",
      weight: "",
      selfEvaluation: "",
      workExperience: "",
      educationalExperience: "",
      trainingExperience: "",
      awardCertificate: "",
      computerSkills: "",
      relatedSkills: "",
      resume: "",
      selectlist: [
        "大专",
        "统招本科",
        "其他本科",
        "在职研究生",
        "研究生",
        "硕士",
        "博士",
        "博士后"
      ],
      pickerOptions: {}
    };
  },
  components: { DatePicker, Icon },
  methods: {
    enter() {
      this.EventBus.$emit("stopswiper", true);
    },
    leave() {
      this.EventBus.$emit("stopswiper", false);
    },
    submitJob() {
      if (!this.validEmail(this.email)) {
        alert("请输入有效电子邮件");
        return false;
      }
      this.$axios
        .post("http://www.seedland.cc/wp/wp-json/submit-job/submit", {
          name: this.name,
          handphone: this.handphone,
          birthdate: this.birthDate,
          salutation: this.salutation,
          qualification: this.qualification,
          maritalStatus: this.maritalStatus,
          email: this.email,
          address: this.address,
          currentCompany: this.currentCompany,
          currentWorkLocation: this.currentWorkLocation,
          workingYears: this.workingYears,
          currentSalary: this.currentSalary,
          expectedSalary: this.expectedSalary,
          startingDate: this.startingDate,
          nationality: this.nationality,
          identityNo: this.identityNo,
          height: this.height,
          weight: this.weight,
          selfEvaluation: this.selfEvaluation,
          workExperience: this.workExperience,
          educationalExperience: this.educationalExperience,
          trainingExperience: this.trainingExperience,
          awardCertificate: this.awardCertificate,
          computerSkills: this.computerSkills,
          relatedSkills: this.relatedSkills,
          resume: this.resume
        })
        .then(response => {
          this.joinSuccess = true;
        });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/color.scss";
@import "../../../../Style/joinus.scss";
.ivu-input-suffix i {
  font-size: 18px;
  line-height: 40px;
  display: none;
}
#joblisting-signup {
  height: 100%;

  .joblisting-form-wrapper.jobListing {
    height: 100%;
    #joblisting-form {
      width: 100%;
      height: 100%;
      .no-bottom-border:after {
        border-bottom: none !important;
      }
      #submit.disabled {
        color: hsla(0, 0%, 76%, 0.7411764705882353);
        pointer-events: none;
        touch-action: none;
      }
      .submit-btn-wrap {
        width: 220px;
        float: right;
        position: relative;
        left: -20px;
        .cross {
          color: #fff;
          position: absolute;
          z-index: 999;
        }
        #top-left-cross {
          left: -4px;
          top: -13px;
        }

        #bottom-left-cross {
          left: -4px;
          bottom: -10px;
        }

        #bottom-right-cross {
          right: -4px;
          bottom: -10px;
        }

        #top-right-cross {
          right: -4px;
          top: -13px;
        }
        #submit-btn {
          width: 100%;
          border-top: none;
          border-bottom: none;
          border: 1px solid #fff;

          padding-top: 10px;
          padding-bottom: 10px;
          background: transparent;
          color: #fff;
          cursor: pointer;
          display: none;
          font-size: 24px;
          letter-spacing: 6px;
          cursor: pointer;
          font-family: "DIN-Light";
          &:hover {
            background: #595959;
            transition: all 0.3s ease;
          }
        }
      }

      .half input[type="number"] {
        width: 40% !important;
      }
      .salutation {
        .selectdiv {
          display: inline-block;
          width: 40%;
          position: relative;
          &:after {
            content: url("../../../../images/chevron-down-small.png");
            font: 35px "Consolas", monospace;
            color: #fff;
            right: 20px;
            top: 14px;
            padding: 0 0 2px;
            position: absolute;
            pointer-events: none;
          }
          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            display: block;
            width: 100%;
            max-width: 350px;
            height: 50px;
            margin: 5px 0px;
            padding: 0px 24px;
            font-size: 16px;
            line-height: 1.75;
            color: #fff;
            background-color: rgba(255, 255, 255, 0);
            border: 1px solid #cccccc;
            -ms-word-break: normal;
            word-break: normal;
            option {
              background-color: #333;
            }
          }
        }
      }
      textarea {
        width: 100%;
        height: 100px;
        background: transparent;
        color: white;
        margin-top: 15px;
      }
      .form-group.half {
        width: 48%;
        float: left;
        box-sizing: border-box;
        height: 0 !important;
        margin-bottom: 9%;
      }

      .form-group.full {
        margin-bottom: 4%;
        width: 100%;
        float: left;
        box-sizing: border-box;
      }

      .form-group.half-left {
        margin-right: 2%;
      }

      .form-group.half-right {
        margin-left: 2%;
      }

      .form-group.half-right.salutation label {
        margin-right: 20px;
      }

      .form-group.half-right:after,
      .form-group.half-left:after,
      .form-group.full:after,
      .form-group.postal:after {
        display: block;
        content: "";
        border-bottom: solid 1px white;
        width: 100%;
      }

      .form-group.half-right.salutation:after {
        content: none;
      }
      .half input[type="text"],
      .full input[type="text"],
      .full input[type="email"],
      .half input[type="number"],
      .vdatetime {
        width: 72%;
        padding: 10px;
        background: none;
        font-size: 20px;
        background: none;
        border: none;
        color: #fff;
        display: inline-block;
      }
    }
  }
}
</style>