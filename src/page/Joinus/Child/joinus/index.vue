<template>
  <div id="joinuslisting" class="subcontainer joinuslisting animated fadeInRight">
    <div class="joinus-bg-overlay" style="height:100%"></div>
    <div class="top-nav clearfix">
      <div class="top-nav-left">
        <img
          class="cross-icon"
          src="../../images/left-long-arrow-2.png"
          v-if="showJoinApplication == false&&showJoinSignup == false"
          @click="closejoinus()"
        />
        <img
          class="cross-icon"
          src="../../images/left-long-arrow-2.png"
          v-else-if="showJoinApplication == true&&showJoinSignup == false"
          v-on:click="showJoinApplication = false"
        />
        <img
          class="cross-icon"
          src="../../images/left-long-arrow-2.png"
          v-if="showJoinSignup == true && joinSuccess == false"
          v-on:click="showJoinSignup = false"
        />
        <img
          class="cross-icon"
          src="../../images/left-long-arrow-2.png"
          v-if="joinSuccess == true"
          v-on:click="resetJoinus"
        />
      </div>
    </div>

    <div class="joinuslisting-main-wrapper">
      <div class="joinuslisting-left-col">
        <div class="joinus-welcome-title">
          <h3 class="en">Join Us</h3>
          <h3 class="cn" style="line-height:0;">加入实地</h3>
        </div>

        <div class="joinus-listing-vertical-text" v-if="showJoinSignup == false">
          <div class="vertical">
            <h1>招</h1>
            <h1>聘</h1>
            <h1>信</h1>
            <h1>息</h1>
          </div>
          <p class="vertical-text" style="top:57px">RECRUITMENT</p>
        </div>
        <div class="joinus-listing-vertical-text" v-else>
          <div class="vertical">
            <h1>个</h1>
            <h1>人</h1>
            <h1>资</h1>
            <h1>料</h1>
          </div>
          <p class="vertical-text" style="top:45px">REGISTRATION</p>
        </div>
      </div>

      <div class="joinuslisting-right-col" @mousemove="mousemoveVertical">
        <div id="joblisting-table" class="animated" v-if="showJoinApplication == false">
          <div class="right-col-text-content" >
            <p>有意应聘以下岗位者可在线申请，或将个人简历投递至邮箱(邮件标题注明应聘岗位)：<br/>
              <span>HR@SEEDLAND.CC</span>
              <br/>简历须附照片，合则约见，谢绝来访。<br/>
              地址： 广州市天河区华夏路16号富力盈凯广场21层
              <br/>联系人： 人力资源中心<br/>
              电话： 020-89192000
            </p>
          </div>
          <div class="searchjobs">
            <input
              class="jobsearchfield joblocationfield"
              v-model="joblocationfield"
              name="joblocationfield"
              placeholder="*搜索工作所在地 JOB LOCATION"
            />
            <input
              class="jobsearchfield jobtitlefield"
              v-model="jobtitlefield"
              name="jobtitlefield"
              placeholder="*搜索职位关键词 JOB TITLE"
            />
            <div class="job-box">
              <button
                class="jobsearchbtn"
                @click="inquireJob"
                v-bind:class="{ disabled: joblocationfield == '' &&  jobtitlefield == '' }"
              >
                <span class="joblabel">
                  <p>查询 SEARCH</p>
                  <img
                    src="../../images/search.png"
                    v-show="joblocationfield !== '' ||  jobtitlefield !== ''"
                  />
                  <img
                    src="../../images/search-disabled.png"
                    v-show="joblocationfield == '' &&  jobtitlefield == ''"
                  />
                </span>
              </button>
              <div class="inquireplus1">+</div>
              <div class="inquireplus2">+</div>
              <div class="inquireplus3">+</div>
              <div class="inquireplus4">+</div>
            </div>

            <br/>
          </div>
          <div class="jobsearchtable">
            <div data-simplebar-auto-hide="false" data-simplebar>
              <table>
                <thead style="background-color: grey;">
                <tr>
                  <th>招聘岗位</th>
                  <th>工作所在地</th>
                  <th>招聘公司</th>
                  <th>发布时间</th>
                </tr>
                </thead>
                <tr
                  class="animated fadeIn"
                  v-for="(job, index) in jobList"
                  v-on:click="sendJoinApplication(index)"
                  :key="index"
                >
                  <td>{{job.title}}</td>
                  <td>{{job.work_location}}</td>
                  <td>{{job.company}}</td>
                  <td>{{job.date}}</td>
                </tr>
                <tr v-if="!jobList.length">
                  <td colspan="4" style="text-align: center;">无数据</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <Apply
          v-if="showJoinApplication == true && showJoinSignup == false"
          :chosenJob="chosenJob"
          :chosenLocation="chosenLocation"
          :chosenJobResponsibilities="chosenJobResponsibilities"
          :chosenJobDesc="chosenJobDesc"
          :chosenJobQualification="chosenJobQualification"
        ></Apply>

        <!-- 申请岗位 -->
        <Applyjob v-show="showJoinSignup == true && joinSuccess == false"></Applyjob>

        <div id="joblisting-signup-success" class="animated" v-if="joinSuccess == true">
          <h1>
            SUBMISSION COMPLETED
            <br/>提交完成
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Apply from "./Child/jobapply";
  import Applyjob from "./Child/applyjob/index";

  export default {
    data() {
      return {
        joinUsPost: null,
        showJoinUs: false,
        showStaffActivity: false,
        showStaffPostContent: false,
        showJoinListing: false,
        showPostDetail: 50,
        staffPost: {},
        showMenu: false,
        chosenJob: "-",
        chosenLocation: "-",
        chosenJobResponsibilities: "-",
        chosenJobQualification: "-",
        chosenJobDesc: "-",
        jobtitlefield: "",
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
        postIndex: null,
        loading: false,
        showJoinSignup: false,
        showJoinApplication: false,
        joinSuccess: false,
        joblocationfield: ""
      };
    },
    props: ["jobList", "joinUsInfo"],
    components: {Apply, Applyjob},
    mounted() {
      this.EventBus.$on("showapplyjob", showapplyjob => {
        this.$nextTick(() => {
          this.showJoinSignup = showapplyjob;
        });
      });
    },
    methods: {
      closejoinus() {
        this.EventBus.$emit("showJoinListing", false);
      },
      sendJoinApplication(index) {
        this.chosenJob = this.jobList[index].title;
        this.chosenLocation = this.jobList[index].work_location;
        this.chosenJobDesc = this.jobList[index].job_description;
        this.chosenJobResponsibilities = this.jobList[index].job_responsibilities;
        this.chosenJobQualification = this.jobList[index].qualification;
        this.showJoinApplication = true;
      },
      resetJoinus(event) {
        this.showJoinUs = false;
        this.showStaffActivity = false;
        this.showStaffPostContent = false;
        this.showJoinListing = false;
        this.showJoinSignup = false;
        this.joinSuccess = false;
      },
      mousemove(event) {
        // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
        //console.log(event.clientY); // y coordinate
        let scrollingBox = this.$refs.scrollingBox;
        let widthParts = window.innerWidth / 5;
        let toRight = window.innerWidth - widthParts;
        let toLeft = window.innerWidth - widthParts * 4;
        if (event.clientX > toRight) {
          scrollingBox.scrollLeft += 30;
        } else if (event.clientX < toLeft) {
          scrollingBox.scrollLeft -= 30;
        }
      },
      mousemoveVertical(event) {
        let heightParts = window.innerHeight / 4;
        let toBottom = window.innerHeight - heightParts;
        let toAbove = window.innerHeight - heightParts * 2.5;
        if (this.showStaffPostContent == true) {
          let joinusthepostboxRef = document.querySelector(
            ".joinusthepostboxRef .simplebar-content"
          );
          if (event.clientY > toBottom) {
            joinusthepostboxRef.scrollTop += 3;
          } else if (event.clientY < toAbove) {
            joinusthepostboxRef.scrollTop -= 3;
          }
        } else if (this.showStaffActivity == true) {
          let joinusstaffcontentRef = document.querySelector(
            ".joinusstaffcontentRef .simplebar-content"
          );
          if (event.clientY > toBottom) {
            joinusstaffcontentRef.scrollTop += 3;
          } else if (event.clientY < toAbove) {
            joinusstaffcontentRef.scrollTop -= 3;
          }
        } else if (this.showJoinSignup == true) {
          let jobListing = document.querySelector(
            ".jobListing .simplebar-content"
          );
          if (event.clientY > toBottom) {
            jobListing.scrollTop += 3;
          } else if (event.clientY < toAbove) {
            jobListing.scrollTop -= 3;
          }
        }
      },
      inquireJob() {
        this.$axios
          .post("http://www.seedland.cc/wp/wp-json/inquire-job/search", {
            jobtitle: this.jobtitlefield,
            joblocation: this.joblocationfield
          })
          .then(response => {
            this.jobList = response.data;
          });
      }
    }
  };
</script>
<style lang='scss' scoped>
  @import "../../Style/joinus.scss";
  @import "../../../../assets/style/color.scss";

  #joinuslisting {
    padding-top: 0 !important;
    height: 100vh;
    width: 100%;
    position: absolute;

    .joinus-bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin-top: -3%;
      background: rgba(0, 0, 0, 0.77);
      color: #fff;
    }

    .top-nav {
      width: 100%;
      position: absolute;
      top: -50px;
      left: 0;

      .top-nav-left {
        float: left;
        padding-left: 70px;
        padding-top: 50px;
        position: relative;
        z-index: 5;

        img {
          width: 30px;
          cursor: pointer;
          opacity: 0.5;

          &:hover {
            opacity: 1;
            transition: all 0.3s;
          }
        }
      }
    }

    .joinuslisting-main-wrapper {
      margin-top: 100px;
      width: 100%;
      height: 100%;
      float: left;
      position: relative;
      z-index: 1;

      .joinuslisting-left-col {
        width: 15%;
        float: left;
        box-sizing: border-box;

        .joinus-listing-vertical-text {
          .vertical {
            margin-top: 50px;
            position: absolute;
            line-height: 15px;
            top: 5px;
            position: absolute;
            font-family: "NotoSansCJKsc-Light";
          }

          h1 {
            line-height: 13px;
            font-weight: normal;
          }

          .vertical-text {
            left: 0 !important;
            font-size: 12px !important;
            letter-spacing: 3px !important;
            top: 100px !important;
            animation: none !important;
          }
        }
      }

      .joinuslisting-right-col {
        width: 76vw;
        float: left;
        box-sizing: border-box;
        height: 100vh;
        max-height: 83vh;

        .right-col-text-content {
          line-height: 45px !important;
          font-size: 23px;
          span{
            text-decoration: underline white ;
          }
        }

        .searchjobs {
          width: 20%;
          float: left;
          box-sizing: border-box;

          .jobsearchfield {
            background-color: rgba(255, 255, 255, 0);
            color: #fff;
            border: 1px solid #fff;
            padding: 10px;
            margin-bottom: 20px;
            width: 100%;
          }

          .job-box {
            position: relative;

            .jobsearchbtn {
              background-color: transparent;
              color: #fff;
              border: none;
              cursor: pointer;
              border: 1px solid #fafafa;
              font-family: "DIN-Light";
              letter-spacing: 3px;
              font-size: 16px;
              text-align: left;
              padding-left: 15px;
              width: 100%;
              padding-top: 10px;
              padding-bottom: 10px;

              .joblabel {
                p {
                  margin: 0 auto;
                  display: inline-block;
                  font-size: 14px;
                }

                img {
                  float: right;
                  width: 24px;
                  margin-right: 10px;
                }
              }
            }

            .inquireplus1 {
              position: absolute;
              top: 0;
              transform: translate(-5px, -11px);
            }

            .inquireplus2 {
              position: absolute;
              top: -1px;
              right: 1px;
              transform: translate(6px, -10px);
            }

            .inquireplus3 {
              position: absolute;
              bottom: 0;
              left: 0;
              transform: translate(-5px, 9px);
            }

            .inquireplus4 {
              position: absolute;
              bottom: -1px;
              right: 1px;
              transform: translate(6px, 8px);
            }
          }
        }

        .jobsearchtable {
          width: 70%;
          float: left;
          box-sizing: border-box;
          margin-left: 2%;
          max-height: 25vh;
          height: 100%;

          table {
            width: 68%;
            border-bottom: 1px solid #fff;
            border-spacing: 0;

            th {
              background-color: #888888c9;
              padding-top: 5px;
              padding-bottom: 5px;
              text-align: left;
              padding: 5px;
            }

            tr {
              &:hover {
                background-color: rgba(128, 128, 128, 0.38823529411764707);
                transition: all 0.3s ease;
              }
            }

            td {
              text-align: left;
              padding-top: 10px;
              padding-bottom: 10px;
              cursor: pointer;
            }

            tbody {
              &:before {
                content: "-";
                display: block;
                line-height: 0.8em;
                color: transparent;
              }

              &:after {
                content: "-";
                display: block;
                line-height: 0.8em;
                color: transparent;
              }
            }
          }
        }
      }
    }
  }
</style>