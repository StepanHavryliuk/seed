<template>
  <div
    id="joinusmain"
    class="subcontainer joinusmain"
    style=" margin-top:0px"
    v-show="!showStaffActivity"
  >
    <div class="joinus-bg-overlay"></div>
    <div class="top-nav">
      <div class="top-nav-left" style="position:absolute;" v-on:click="closeshoejoinus()">
        <img class="cross-icon" src="@/assets/images/left-long-arrow-2.png"/>
      </div>
      <div id="scrollable" ref="scrollingBox" @mousemove="mousemove">
        <div id="sectionwrapper">
          <div class="scrollbox" style="box-shadow: unset; width: 10vw; z-index: 0;">
            <div class="scrollbox retain-scrollbox" style="box-shadow: unset;">
              <div class="joinus-welcome-title" style="top: -7%;">
                <h3 class="en">Join Us</h3>
                <h3 class="cn" style="line-height: 0;">加入实地</h3>
              </div>
            </div>
          </div>
          <div
            class="scrollbox animated"
            id="01"
            v-for="(content, index) in joinUsPost"
            :style="{ backgroundImage: 'url(' + content.image.url + ')' }"
            v-on:click="showPost(index, content.seclector, $event)"
            v-bind:class="{ zoomIn: showPostDetail == index, active: showPostDetail == index, 'retain-scrollbox': showPostDetail !== index}"
            :key="index"
          >
            <div class="box-overlay" style="display: block;"></div>
            <div class="scrollboxtitle">
              <h1>[{{content.header_text}}]</h1>
              <p v-show="joinUsPost !== null">{{content.sub_header_text}}</p>
            </div>
            <div class="scrollboxcontent" v-show="showPostDetail == index">
              <div class="close-btn animated fadeIn">
                <img
                  src="@/assets/images/cross-icon.png"
                  width="80%"
                  v-on:click.stop="showPostDetail = 50;"
                />
              </div>
              <h1 class="animated fadeIn">{{content.header_text}}</h1>
              <h2 class="animated fadeIn">{{content.sub_header_text}}</h2>
              <div class="title underline"></div>
              <div class="text-overflow" ref="textContainer">
                <div data-simplebar class="scrollbox-bar">
                  <p class="animated fadeIn" ref="text">{{content.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="find-out-more" v-on:click="getJobListing()">
      <div class="exploremore button home" style="bottom:-45vh">
        <div class="left" style="pointer-events: none;">
          <div class="en">JOIN US NOW</div>
          <div class="cn">现在加入</div>
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
</template>
<script>
  import Activity from "./activity/index";

  export default {
    data() {
      return {
        showPostDetail: 50,
        showStaffActivity: false
      };
    },
    props: ["staffPost", "joinUsPost"],
    components: {
      Activity
    },

    methods: {
      closeshoejoinus() {
        this.EventBus.$emit("showjoinus", false);
      },
      getJobListing() {
        this.EventBus.$emit("showJoinListing", true);
        this.$axios
          .get("http://www.seedland.cc/wp/wp-json/job-listing/job")
          .then(response => {
            this.EventBus.$emit("jobList", response.data);
          });
      },
      showPost(index, seclector, event) {
        if (seclector !== "") {
          this.$axios
            .get(
              "http://www.seedland.cc/wp/wp-json/project-category-posts/part/15"
            )
            .then(response => {
              this.EventBus.$emit("showpost", {
                staffPost: response.data[0],
                showStaffActivity: true
              });
            });
        } else {
          let textContainer = this.$refs.textContainer[index];
          let text = this.$refs.text[index];
          this.showPostDetail = index;
          setTimeout(function () {
            let textContainerHeight = textContainer.clientHeight;
            let textHeight = text.clientHeight;
            let scrollBar = textContainer.querySelector(".simplebar-vertical");
            if (textHeight <= textContainerHeight) {
              scrollBar.style.display = "none";
            } else {
              scrollBar.style.display = "block";
            }
          }, 500);
        }
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

      mousemove(event) {
        let scrollingBox = this.$refs.scrollingBox;
        let widthParts = window.innerWidth / 5;
        let toRight = window.innerWidth - widthParts;
        let toLeft = window.innerWidth - widthParts * 4;

        if (event.clientX > toRight) {
          scrollingBox.scrollLeft += 30;
        } else if (event.clientX < toLeft) {
          scrollingBox.scrollLeft -= 30;
        }
      }
    }
  };
</script>
<style lang='scss' scoped>
  @import "../../../assets/style/color.scss";
  @import "../../../assets/style/findmore.scss";
  @import "../Style/joinus.scss";

  #joinusmain {
    .find-out-more {
      position: absolute;
      z-index: 0;
      right: 200px;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 5%;
    }

    .joinus-bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.77);
    }

    .top-nav {
      width: 100%;
      position: absolute;
      top: 0;
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

      #scrollable {
        white-space: nowrap;
        width: 98%;
        overflow: hidden;
        display: block;
        float: right;
        z-index: 999;
        transition: all, 0.5s;

        #sectionwrapper {
          width: 1400px;
          display: table;
          overflow-x: hidden;
          padding-top: 75px;

          .scrollbox.active {
            position: relative;
            width: 50%;
            min-width: 350px;
            max-width: 800px;
            margin: 0px -180px;
            height: 100vh;
            top: -80px;
            z-index: 10;

            .box-overlay {
              width: 100%;
              /*width: 50%;*/
              height: 100%;
              position: absolute;
              display: block;
              display: none;
              transition: 0.1s;
              background: rgb(0, 0, 0);
              background: linear-gradient(
                  360deg,
                  rgba(0, 0, 0, 1) 0%,
                  rgba(0, 0, 0, 0.14329481792717091) 85%,
                  rgba(0, 0, 0, 0.16850490196078427) 100%
              );
              z-index: -1;
            }

            .scrollboxtitle {
              display: none;
            }

            .scrollboxcontent {
              display: block;
              padding: 100px;
              width: 30vw;
              margin: 0 auto;
              // overflow: scroll;
              padding-left: 10%;
              padding-right: 10%;
              height: 100%;

              .close-btn {
                position: absolute;
                top: 40px;
                right: 40px;
                color: #fff;
                float: right;
                font-size: 50px;
                cursor: pointer;
                z-index: 999;
              }
            }

            &:last-child {
              margin-right: 518px;

              .box-overlay {
                width: 800px !important;
              }
            }

            &:first-child {
              margin-left: 5%;
              margin: unset;
              margin-right: -180px;
              transform: translate3d(0, 0, 0);
            }
          }

          .scrollbox {
            position: relative;
            background-size: cover;
            width: 20vw;
            margin: 40px;
            height: 50vh;
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
            color: white;
            z-index: 9;

            .scrollboxcontent {
              display: none;
              overflow: auto;
              white-space: normal;

              .text-overflow {
                width: 100%;
                height: 43vh;

                .scrollbox-bar {
                  overflow-x: hidden;
                  overflow-y: auto;
                }
              }
            }

            .scrollboxtitle {
              top: 15px;
              margin-left: -20px;
              position: relative;
              text-shadow: 0px 1px 10px #000000;

              h1 {
                font-size: 26px;
              }

              p {
                font-size: 14px;
                font-weight: bold;
                margin-top: -10px;
              }

              a {
                text-decoration: none;
                color: white;
              }
            }
          }
        }
      }
    }
  }
</style>