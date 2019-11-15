<template>
  <div id="joinus" style="height:100%">
    <div class="subcontainer joinuswelcome" style="margin-top: 1%;" v-show="!showJoinUs">
      <div class="joinus-welcome-title animated">
        <h1 class="joinus-secondary-title">加入实地</h1>
        <h1 class="joinus-main-title">JOIN US</h1>
      </div>
      <div class="find-out-more" v-on:click="showJoinUs = true">
        <div class="exploremore button fp-controlArrow">
          <div class="left" style="pointer-events: none;">
            <div class="en">FIND OUT MORE</div>
            <div class="cn">了解更多</div>
          </div>
          <div class="right">
            <div class="about-rightarrow"></div>
            <div class="about-arrowtipup"></div>
            <div class="about-arrowtipdown"></div>
          </div>
          <p id="aboutplus1">+</p>
          <p id="aboutplus2">+</p>
          <p id="aboutplus3">+</p>
          <p id="aboutplus4">+</p>
        </div>
      </div>
    </div>

    <Joinabout
      v-if="showJoinUs == true && showJoinListing !== true && showStaffActivity !== true"
      :joinUsPost="joinUsPost"
      :joinUsInfo="joinUsInfo"
    ></Joinabout>
    <!-- 员工活动 -->
    <Activity v-if="showStaffActivity == true" :staffPost="staffPost"></Activity>
    <!-- 加入我们 -->
    <Join v-if="showJoinListing == true" :jobList="jobList" :joinUsInfo="joinUsInfo"></Join>
  </div>
</template>

<script>
  import Joinabout from "./Child/index";
  import Activity from "./Child/activity/index";
  import Join from "./Child/joinus/index";

  export default {
    name: "joinus",
    data: function () {
      return {
        joinUsPost: null,
        showJoinUs: false,
        showStaffActivity: false,
        showJoinListing: false,
        jobList: {},
        staffPost: {},
        jobtitlefield: "",
        joinUsInfo: {},
        joinSuccess: false,
      };
    },
    created() {
      this.$axios
        .get("http://www.seedland.cc/wp/wp-json/template-part/part/3")
        .then(response => {
          this.joinUsPost = response.data.joinus;
          this.joinUsInfo = response.data.info;
        });
    },
    mounted() {
      this.EventBus.$on("showpost", ({staffPost, showStaffActivity}) => {
        this.$nextTick(() => {
          this.staffPost = staffPost;
          this.showStaffActivity = showStaffActivity;
        });
      });
      this.EventBus.$on("closeactivity", showStaffActivity => {
        this.$nextTick(() => {
          this.showStaffActivity = showStaffActivity;
        });
      });

      this.EventBus.$on("showjoinus", showJoinUs => {
        this.$nextTick(() => {
          this.showJoinUs = showJoinUs;
        });
      });
      this.EventBus.$on("showJoinListing", showJoinListing => {
        this.$nextTick(() => {
          this.showJoinListing = showJoinListing;
        });
      });
      this.EventBus.$on("jobList", jobList => {
        this.$nextTick(() => {
          this.jobList = jobList;
        });
      });
    },
    components: {
      Joinabout,
      Activity,
      Join,
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/style/findmore.scss";
  @import '@/assets/style/color.scss';

  // @import '../../assets/style/nextandpre.scss';
  #joinus {
    .exploremore.button.home {
      &:hover {
        background-color: rgba(255, 255, 255, 0.6);
        transition: background-color 0.2s ease-in;
      }
    }

    .subcontainer {
      margin-top: 3%;
      padding-top: 100px;
      padding-left: 5%;
      padding-right: 5%;
      display: block;
      width: 100%;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

      .find-out-more {
        position: absolute;
        z-index: 0;
        right: 200px;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 5%;
      }
    }

    .subcontainer.joinuswelcome {
      height: 100vh;
      width: 100%;
      position: absolute;

      .joinus-welcome-title {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 5%;

        h1.joinus-secondary-title {
          line-height: 0;
          font-size: 44px;
          font-family: "NotoSansCJKsc-Light";
          font-weight: lighter;
        }

        h1.joinus-main-title {
          line-height: 50px;
          font-size: 65px;
          font-weight: lighter;
          text-transform: uppercase;
          font-family: NotoSansCJKsc-Thin;
        }
      }
    }
  }
</style>