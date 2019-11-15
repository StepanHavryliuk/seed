<template>
  <div class="joinuspoststaffactivity">
    <img
      class="form-cross-icon"
      src="@/assets/images/cross-icon.png"
      style="z-index: 1;top: 50px;"
      v-show="showStaffPostContent == false"
      @click="closeactivity"
    />
    <div
      class="joinuspostdetail"
      v-bind:class="{ blurred: showStaffPostContent }"
      v-show="showStaffPostContent == false"
    >
      <div class="joinustitlelefthorizontal">
        <span>JOIN US</span>
        <span>加入实地</span>
      </div>
      <div class="joinustitleleftvertical">
        <span class="joinustitleleftverticalcn">
          员
          <br />工
          <br />活
          <br />动
          <br />
        </span>
        <span class="joinustitleleftverticalen">STAFF ACTIVITIES</span>
      </div>
      <div
        class="joinusstaffcontent"
        @mousemove="mousemoveVertical"
        @mouseenter="enter"
        @mouseleave="leave"
        data-simplebar-auto-hide="false"
        data-simplebar
      >
        <div class="joinusstaffcontentRef">
          <div class="joinusstaffbox" v-for="(content, index) in staffPost.id" :key="index">
            <img
              class="staffimg"
              v-bind:src="staffPost.postfeaturedimages[index]"
              v-on:click="showStaffPost(content, index)"
            />
            <p class="staffpara">{{staffPost.posttitles[index]}}</p>
            <p class="staffdate">{{staffPost.postdates[index]}}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="joinusthepost animated fadeIn"
      v-if="showStaffPostContent == true && loading == false"
    >
      <div class="joinusstaffcontentclose">
        <div class="joinusstaffboxclose">
          <img
            id="imgdetailexit"
            src="@/assets/images/cross-icon.png"
            v-on:click="showStaffPostContent = false"
          />
        </div>
      </div>
      <div class="joinusthepostbox"   >
        <div class="joinusthepostcontent" data-simplebar-auto-hide="false" data-simplebar  @mousemove="mousemoveVertical" @mouseenter="enter"
        @mouseleave="leave">
          <div
            class="joinusthepostboxRef"
            v-if="staffContentPost !== null"
            v-html="staffContentPost.postcontent"
          ></div>
        </div>
        <div class="joinusthepostdetail">
          <div style="position: relative;height:100%">
            <p class="joinustitle" v-if="staffContentPost !== null">{{staffContentPost.posttitle}}</p>
            <p id="xdate">{{staffContentPost.postdate}}</p>
            <p id="joinuspostexcerpt">{{staffContentPost.postexcerpt}}</p>
            <div class="footer">
              <div class="right" style="width:300px;">
                <div class="leftright button">
                  <div class="leftbutton leftarrow" @click="prevPost">
                    <div class="leftpageplus1">+</div>
                    <div class="leftpageplus2">+</div>
                    <div class="leftpageplus3">+</div>
                    <div class="leftpageplus4">+</div>
                    <div class="leftarrowicon">
                      <div class="arrlefttip"></div>
                      <div class="arrleftline"></div>
                    </div>
                  </div>
                  <div class="rightbutton rightarrow" @click="nextPost">
                    <div class="leftpageplus1">+</div>
                    <div class="leftpageplus2">+</div>
                    <div class="leftpageplus3">+</div>
                    <div class="leftpageplus4">+</div>

                    <div class="leftarrowicon">
                      <div class="arrrighttip"></div>
                      <div class="arrleftline"></div>
                    </div>
                  </div>
                </div>
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
    return {
      showStaffPostContent: false,
      staffContentPost: {},
      loading: false,
      postIndex: null
    };
  },
  props: ["staffPost"],
  methods: {
    enter() {
      this.EventBus.$emit("stopswiper", true);
    },
    leave() {
      this.EventBus.$emit("stopswiper", false);
    },
    mousemoveVertical(event) {
      let heightParts = window.innerHeight / 4;
      let toBottom = window.innerHeight - heightParts;
      let toAbove = window.innerHeight - heightParts * 2.5;
      if (this.showStaffPostContent == true) {
        let joinusthepostboxRef = document.querySelector(".simplebar-content");
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
    closeactivity() {
      this.EventBus.$emit("closeactivity", {
        showStaffActivity: false
      });
    },
    showStaffPost(id, categoryPostIndex) {
      this.$axios
        .get("http://www.seedland.cc/wp/wp-json/project-posts/part/" + id)
        .then(response => {
          this.staffContentPost = response.data[0];
          this.showStaffPostContent = true;
          this.postIndex = categoryPostIndex;
        });
    },
    nextPost() {
      var newIndex = this.postIndex + 1;
      if (newIndex < this.staffPost.id.length) {
        this.loading = true;
        var id = this.staffPost.id[newIndex];
        this.$axios
          .get("http://www.seedland.cc/wp/wp-json/project-posts/part/" + id)
          .then(response => {
            this.staffContentPost = response.data[0];
            this.postIndex = newIndex;
            this.loading = false;
          });
      }
    },
    prevPost() {
      var newIndex = this.postIndex - 1;
      if (newIndex >= 0) {
        this.loading = true;
        var id = this.staffPost.id[newIndex];
        this.$axios
          .get("http://www.seedland.cc/wp/wp-json/project-posts/part/" + id)
          .then(response => {
            this.staffContentPost = response.data[0];
            this.postIndex = newIndex;
            this.loading = false;
          });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/color.scss";
// 员工活动
.joinuspoststaffactivity {
  .form-cross-icon {
    width: 2%;
    position: absolute;
    right: 7%;
    top: 0px;
    cursor: pointer;
  }
  .joinuspostdetail {
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.77);
    background-position: 40% 15%;
    background-size: 100%;
    .joinustitlelefthorizontal {
      width: 100px;
      display: inline-block;
      top: 17%;
      position: absolute;
      left: 10.5%;
      span {
        &:nth-child(1) {
          float: left;
          width: 100%;
        }
        &:nth-child(2) {
          width: 100%;
        }
      }
    }
    .joinustitleleftvertical {
      position: absolute;
      width: 100px;
      height: 300px;
      display: inline-block;
      top: 33%;
      left: 7%;
      text-align: center;
      span {
        &:nth-child(1) {
          width: 144%;
          /* transform: translate(0px,20px) rotate(90deg); */
          float: left;
          font-size: 36px;
        }
        &:nth-child(2) {
          transform: rotate(-90deg);
          /* display: table-cell; */
          width: 188%;
          margin-top: -10vh;
          transform: translate(12px, -9px) rotate(-90deg);
          text-align: center;
          float: left;
          font-size: 14px;
        }
      }
    }
    .joinusstaffcontent {
      position: absolute;
      height: 85vh;
      width: 80vw;
      right: 0;
      bottom: 0;
      margin: 0% 2% 0% 5%;
      display: inline-block;
      padding-right: 25px;
      .joinusstaffbox {
        float: left;
        box-sizing: border-box;
        width: 33.33%;
        padding: 1%;
        height: 35vh;

        .staffdate {
          font-size: 12px;
          margin: 0px;
          opacity: 0.5;
        }
        .staffimg {
          height: 25vh;
          background-size: cover;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: unset;
        }
        p.staffpara {
          font-size: 12px;
          margin-bottom: 0px;
        }
      }
    }
  }
  .joinusthepost {
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.3);
    .joinusstaffcontentclose {
      float: right;
      height: 50px;
      width: 50px;
      /* background-color: red; */
      margin-right: 7%;
      margin-top: 2%;
      // margin-bottom: 2%;
      .joinusstaffboxclose {
        cursor: pointer;
      }
    }
    .joinusthepostbox {
      padding: 5%;
      display: inline-block;
      margin: 0% 2% 0% 12%;
      height: 85%;
      width: 100%;
      .joinusthepostcontent {
        float: left;
        width: 53vw !important;
        height: 83vh !important;
        box-sizing: border-box;
        text-align: center;
        .full-img {
          width: 100% !important;
        }
      }
      .joinusthepostdetail {
        float: left;
        width: 28vw;
        height: 100%;
        box-sizing: border-box;
        position: sticky;
        top: 0;
        padding: 0% 2% 0% 2%;
        .footer {
          height: 20%;
          position: relative;
          .right {
            position: absolute;
            padding-right: 80px;
            bottom: 30px;
            @import "@/assets/style/nextandpre.scss";
          }
        }
        p.joinustitle {
          font-weight: 600;
          font-size: 21px;
          text-align: left;
        }
        p#xdate {
          opacity: 0.8;
          font-size: 14px;
          font-family: "Roboto", sans-serif;
        }
      }
    }
  }
}
</style>