<template name="component-name">
  <div id="news" style="position:relative;height:100%">
    <div class="newsbox" style="height:100%" v-show="!showNews">
      <div class="newsboxleft">
        <div class="subcontainer newshome">
          <h1 class="newshome-secondary-title">最新消息</h1>
          <h1 class="newshome-main-title">Latest News</h1>
        </div>
      </div>
    </div>
    <div class="exploremore button fp-controlArrow" v-on:click="showNews = true" v-show="!showNews">
      <div class="left" style="pointer-events: none;">
        <div class="en">FIND OUT MORE</div>
        <div class="cn">了解更多</div>
      </div>
      <div class="right">
        <div class="about-rightarrow"></div>
        <div class="about-arrowtipup"></div>
        <div class="about-arrowtipdown"></div>
      </div>
      <!--arrowgrid-->
      <p id="aboutplus1">+</p>
      <p id="aboutplus2">+</p>
      <p id="aboutplus3">+</p>
      <p id="aboutplus4">+</p>
    </div>

    <div class="newsboxright newsslide" v-if="showNews">
      <div class="back_arrow">
        <img
          src="@/assets/images/news/left-long-arrow-2.png"
          v-show="!showPost"
          v-on:click="showNews = false"
        />
        <img
          src="@/assets/images/news/left-long-arrow-2.png"
          v-show="showPost"
          v-on:click="showPost = !showPost; showGeneral=!showGeneral"
        />
      </div>
      <div class="newsnav" v-if="!showPost">
        <ul class="newsmenu">
          <li
            class="newsitem newsli"
            v-on:click="getCategoryPost(3);showGeneral = true;showSales = false"
          >
            <span id="newslink" v-bind:class="{ linkselected: showGeneral }">
              <h1>企</h1>
              <h1>业</h1>
              <h1>新</h1>
              <h1>闻</h1>
            </span>
            <p class="en-title">GENERAL NEWS</p>
          </li>
          <li
            class="newsitem salesli"
            v-on:click="getCategoryPost(4);showSales = true;showGeneral = false"
          >
            <span id="saleslink" v-bind:class="{ linkselected: showSales }">
              <h1>楼</h1>
              <h1>盘</h1>
              <h1>动</h1>
              <h1>态</h1>
            </span>
            <p class="en-title">SALES INFORMATION</p>
          </li>
        </ul>
        <span class="latestnews">
          <p class="en">Latest News</p>
          <p class="cn">最新消息</p>
        </span>
      </div>

      <div class="newsslider entry"  v-if="showGeneral == true && showPost == false"   @mouseenter="enter"
           @mouseleave="leave"
          >

        <div class="newsBox" v-if="!showPost"  data-simplebar-auto-hide="false" data-simplebar   @mousemove="mousemove">

          <div class="row">
            <div
              class="newscontent"
              v-for="(content, index) in secondHalfNewsPost.id"
              v-on:click="showCategoryPost(content, index, 'second')"
              :key="index"
            >
              <div class="genwrapper">
                <div class="news overlay"></div>
                <div
                  class="newsimgdiv"
                  :style="{ backgroundImage: 'url(' + secondHalfNewsPost.postfeaturedimages[index] + ')' }"
                ></div>
                <p class="generaltitle">{{secondHalfNewsPost.posttitles[index]}}</p>
                <p class="generaldate">{{secondHalfNewsPost.postdates[index]}}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="newscontent"
              v-for="(content, index) in firstHalfNewsPost.id"
              v-on:click="showCategoryPost(content, index, 'first')"
              :key="index"
            >
              <div class="genwrapper">
                <div class="news overlay"></div>
                <div
                  class="newsimgdiv"
                  :style="{ backgroundImage: 'url(' + firstHalfNewsPost.postfeaturedimages[index] + ')' }"
                ></div>
                <p class="generaltitle">{{firstHalfNewsPost.posttitles[index]}}</p>
                <p class="generaldate">{{firstHalfNewsPost.postdates[index]}}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="newsslider entry"  v-if="showSales == true && showPost == false "
           @mouseenter="enter"
           @mouseleave="leave"

      >
        <div class="salesBox" v-show="showPost == false"  data-simplebar-auto-hide="false" data-simplebar     @mousemove="mousemove">
          <div class="row">
            <div
              class="newscontent"
              v-for="(content, index) in secondHalfNewsPost.id"
              v-on:click="showCategoryPost(content, index)"
              :key="index"
            >
              <div class="genwrapper">
                <div class="news overlay"></div>
                <div
                  class="newsimgdiv"
                  :style="{ backgroundImage: 'url(' + secondHalfNewsPost.postfeaturedimages[index] + ')' }"
                ></div>
                <p class="generaltitle">{{secondHalfNewsPost.posttitles[index]}}</p>
                <p class="generaldate">{{secondHalfNewsPost.postdates[index]}}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="newscontent"
              v-for="(content, index) in firstHalfNewsPost.id"
              v-on:click="showCategoryPost(content, index)"
              :key="index"
            >
              <div class="genwrapper">
                <div class="news overlay"></div>
                <div
                  class="newsimgdiv"
                  :style="{ backgroundImage: 'url(' + firstHalfNewsPost.postfeaturedimages[index] + ')' }"
                ></div>
                <p class="generaltitle">{{firstHalfNewsPost.posttitles[index]}}</p>
                <p class="generaldate">{{firstHalfNewsPost.postdates[index]}}</p>
              </div>
            </div>
          </div>
        </div >
      </div>

      <div
        class="newsdetailwrapper open-detail animated fadeIn"
        v-if="showPost == true && loading == false"
      >
        <div class="newsdetailwrapper-content">
          <div class="newsdetailwrapper-body" >
            <div
              class="newsdetailcontent postBox"
              v-show="newsPost !== null"
              v-html="newsPost.postcontent"
              data-simplebar-auto-hide="false"
              data-simplebar
              @mouseenter="enter"
              @mouseleave="leave"
            ></div>
          </div>
          <div class="newsdetailwrapper-preview">
            <div data-simplebar style="height:100%;font-size: 16px">
              <h1
                class="newstitle"
                style="padding-right: 10px;"
                v-if="newsPost !== null"
              >{{newsPost.posttitle}}</h1>
              <p class="newsdate" v-show="newsPost !== null">{{newsPost.postdate}}</p>
              <p
                class="newsexcerpt"
                style="padding-right: 37px;"
                v-show="newsPost !== null"
              >{{newsPost.postexcerpt}}</p>
              <div class="footer clearfix">
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
  </div>
</template>
<script>
  import More from "@/components/More";

  export default {
    data() {
      return {
        drawer: false,
        direction: "rtl",
        showNews: false,
        categoryPost: null,
        dummyPost: null,
        secondCategoryPost: null,
        showGeneral: true,
        showSales: false,
        showPost: false,
        newsPost: null,
        firstHalfNewsPost: {
          id: [],
          postdates: [],
          postfeaturedimages: [],
          posttitles: []
        },
        secondHalfNewsPost: {
          id: [],
          postdates: [],
          postfeaturedimages: [],
          posttitles: []
        },
        showMenu: false,
        postIndex: null,
        loading: true,
        showNews: false,
        inWhichHalf: ""
      };
    },
    created() {
      this.getCategoryPost(3);
    },
    methods: {
      getCategoryPost(id) {
        this.$axios
          .get(
            "http://www.seedland.cc/wp/wp-json/project-category-posts/part/" + id
          )
          .then(response => {
            this.dummyPost = response.data[0];
            var half = Math.round(this.dummyPost.id.length / 2);
            this.firstHalfNewsPost.postdates = this.dummyPost.postdates.splice(
              half
            );
            this.firstHalfNewsPost.posttitles = this.dummyPost.posttitles.splice(
              half
            );
            this.firstHalfNewsPost.postfeaturedimages = this.dummyPost.postfeaturedimages.splice(
              half
            );
            this.firstHalfNewsPost.id = this.dummyPost.id.splice(half);
            this.secondHalfNewsPost.postdates = this.dummyPost.postdates;
            this.secondHalfNewsPost.posttitles = this.dummyPost.posttitles;
            this.secondHalfNewsPost.postfeaturedimages = this.dummyPost.postfeaturedimages;
            this.secondHalfNewsPost.id = this.dummyPost.id;
          });
        this.$axios
          .get(
            "http://www.seedland.cc/wp/wp-json/project-category-posts/part/" + id
          )
          .then(response => {
            this.categoryPost = response.data[0];
          });
      },
      showCategoryPost(id, categoryPostIndex, whichHalf) {
        this.$axios
          .get("http://www.seedland.cc/wp/wp-json/project-posts/part/" + id)
          .then(response => {
            this.newsPost = response.data[0];
            this.showPost = true;
            this.postIndex = categoryPostIndex;
            this.inWhichHalf = whichHalf;
            this.loading=false
            this.showGeneral=false
          });
      },

      enter() {
        this.EventBus.$emit("stopswiper", true);
      },
      leave() {
        this.EventBus.$emit("stopswiper", false);
      },
      mousemove(event) {
        // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
        // console.log(event.clientY); // y coordinate
        let salesBox = document.querySelector(".salesBox .simplebar-content-wrapper");
        let newsBox = document.querySelector(".newsBox .simplebar-content-wrapper");
        let widthParts = window.innerWidth / 5;
        let toRight = window.innerWidth - widthParts;
        let toLeft = window.innerWidth - widthParts * 3;
        if (this.showSales) {

          if (event.clientX > toRight) {
            salesBox.scrollLeft += 30;
          } else if (event.clientX < toLeft) {
            salesBox.scrollLeft -= 30;
          }
        } else {
          if (event.clientX > toRight) {

            newsBox.scrollLeft += 30;
          } else if (event.clientX < toLeft) {
            newsBox.scrollLeft -= 30;
          }
        }
      },
      mousemoveVertical(event) {
        if (this.showPost == true) {
          let heightParts = window.innerHeight / 7;
          let toBottom = window.innerHeight - heightParts;
          let toAbove = window.innerHeight - heightParts * 5.5;
          let postBox = document.querySelector(".newsdetailwrapper-body");
          if (event.pageY > toBottom) {
            postBox.scrollTop += 3;
          } else if (event.clientY < toAbove) {
            postBox.scrollTop -= 3;
          }
        }
      },
      nextPost() {
        var newIndex = this.postIndex + 1;
        if (this.inWhichHalf == "second") {
          if (newIndex >= this.secondHalfNewsPost.id.length) {
            newIndex = 0;
            this.inWhichHalf = "first";
          }
        } else if (this.inWhichHalf == "first") {
          if (newIndex >= this.firstHalfNewsPost.id.length) {
            return false;
          }
        }

        this.loading = true;
        if (this.inWhichHalf == "first") {
          var id = this.firstHalfNewsPost.id[newIndex];
        } else if (this.inWhichHalf == "second") {
          var id = this.secondHalfNewsPost.id[newIndex];
        }

        this.$axios
          .get("http://www.seedland.cc/wp/wp-json/project-posts/part/" + id)
          .then(response => {
            this.newsPost = response.data[0];
            this.postIndex = newIndex;
            this.loading = false;
          });
      },
      prevPost() {
        var newIndex = this.postIndex - 1;
        if (this.inWhichHalf == "second") {
          if (newIndex < 0) {
            return false;
          }
        } else if (this.inWhichHalf == "first") {
          if (newIndex < 0) {
            newIndex = this.secondHalfNewsPost.id.length - 1;
            this.inWhichHalf = "second";
          }
        }

        this.loading = true;
        let id = this.categoryPost.id[newIndex];
        this.$axios
          .get("http://www.seedland.cc/wp/wp-json/project-posts/part/" + id)
          .then(response => {
            this.newsPost = response.data[0];
            this.postIndex = newIndex;
            this.loading = false;
          });
      },
      back() {
        this.$emit("fun", false);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "@/assets/style/color.scss";
  @import "@/assets/style/findmore.scss";

  #news {
    .newsboxleft {
      height: 100%;
      position: relative;

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

        .newshome-secondary-title {
          /* line-height: 0; */
          /* font-size: 40px; */
          line-height: 0;
          font-size: 44px;
          font-family: "NotoSansCJKsc-Light";
          font-weight: lighter;
        }

        .newshome-main-title {
          line-height: 50px;
          font-size: 65px;
          font-weight: lighter;
          text-transform: uppercase;
          font-family: NotoSansCJKsc-Thin;
        }
      }

      .subcontainer.newshome {
        z-index: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    @import "../../assets/style/findmore.scss";

    .exploremore.button {
      right: 6vw;
      bottom: 7vh;

      &:hover {
        background: rgba(255, 255, 255, 0.4)
      }
    }

    .newsslide {
      animation: pullright 0.5s linear forwards;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.24);

      .newsnav {
        position: absolute;
        float: left;
        width: 30%;
        height: 60vh;
        box-sizing: border-box;
        top: 12%;

        .latestnews {
          p {
            &:nth-child(2) {
              margin: 0;
              opacity: 0.8;
            }

            &:nth-child(1) {
              margin: 0;
              font-size: 20px;
            }

            .en {
              font-family: "DIN-Regular";
              font-size: 17px;
              letter-spacing: 2px;
            }

            .cn {
              font-family: "NotoSansCJKsc-Light";
              font-size: 17px;
            }
          }
        }

        span.latestnews {
          position: absolute;
          top: 0%;
          left: 36%;
          text-align: center;
          text-transform: uppercase;
        }

        .newsmenu {
          top: 10%;
          left: 36%;
          display: inline-block;
          position: relative;
          list-style: none;

          .salesli {
            margin-top: 15%;
          }

          span {
            font-family: "NotoSansCJKsc-Light";
            opacity: 0.6;
          }

          .newsitem {
            font-size: $font-16;


            .linkselected {
              opacity: 1 !important;
              font-weight: bolder;
              font-size: 16px;
            }

            h1 {
              font-size: 2em;
              font-weight: bold;
            }

            cursor: pointer;
            font-size: 14px;
            text-align: center;
            line-height: 14px;
            display: flex;

            a#newslink p.en-title,
            a#saleslink p.en-title {
              -ms-transform: rotate(-90deg); /* IE 9 */
              -webkit-transform: rotate(-90deg); /* Safari 3-8 */
              transform: rotate(-90deg);
            }

            a#newslink.linkselected,
            a#saleslink.linkselected {
              font-family: "NotoSansCJKsc-Light";
              font-weight: bold;
              font-size: 16px;
            }

            p.en-title {
              -ms-transform: rotate(-90deg);
              -webkit-transform: rotate(-90deg);
              transform: rotate(-90deg);
              display: inline-block;
              position: relative;
              margin-top: 45%;
              margin-left: -30%;
              width: 100%;
              height: 1%;
              white-space: nowrap;
              font-size: $font-12;
            }
          }
        }
      }

      .newsslider {
        position: absolute;
        width: 70vw;
        height: 75vh;
        box-sizing: border-box;
        top: 12%;
        right: 0;
        margin-right: 5%;
        padding-right: 2%;

        .newsBox,
        .salesBox {
          position: relative;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;
          align-items: flex-start;
          display: flex;


          .row {
            display: flex;
            flex-wrap: nowrap;
            position: relative;
            padding-top: 20px;


            .newscontent {
              box-sizing: border-box;
              width: 33vw;
              flex-shrink: 0;
              height: 35vh;
              padding: 0;
              max-width: 400px;
              display: inline-block;
              margin-right: 20px;
              .genwrapper {
                width: 100%;
                height: 100%;
                cursor: pointer;
                position: relative;

                .news.overlay {
                  height: 100%;
                  z-index: 0;
                }

                .overlay {
                  position: absolute;
                  display: block;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100vh;
                  z-index: 1;
                }

                .newsimgdiv {
                  height: 100%;
                  background-size: cover;
                  -webkit-background-size: cover;
                  -moz-background-size: cover;
                  -o-background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center center;
                  background-attachment: unset;
                }

                .generaltitle {
                  position: absolute;
                  top: 10px;
                  font-weight: bold;
                  left: 10px;
                  white-space: normal;
                  margin-top: 5px;
                  margin-bottom: 5px;
                  font-family: "NotoSansCJKsc-Light";
                  font-size: 12px;
                }

                .generaldate {
                  position: absolute;
                  top: 49px;
                  font-weight: bold;
                  left: 10px;
                  white-space: normal;
                  margin-top: 4px;
                  font-size: 12px;
                  font-family: "NotoSansCJKsc-Light";
                  opacity: 0.8;
                }
              }
            }
          }
        }
      }

      .entry {
        animation: slideEntrance 0.5s linear forwards;
        display: inline-block;
      }

      .newsdetailwrapper {
        opacity: 0;
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        transition: all 0.5s linear;
        left: 0;
        z-index: 1;

        .newsdetailwrapper-content {
          position: absolute;
          width: 90%;
          height: 85%;
          right: 5%;
          left: 5%;
          bottom: 0%;
          display: inline-block;

          .newsdetailwrapper-body {
            position: relative;
            float: left;
            box-sizing: border-box;
            width: 58vw;
            height: 100%;
            padding-right: 2px;
            overflow-y: scroll;
          }

          .newsdetailwrapper-preview {
            position: sticky;
            float: left;
            box-sizing: border-box;
            width: 27vw;
            height: 100%;
            margin-left: 5%;
            top: 0;

            .footer {
              height: 20%;
              position: relative;

              .right {
                position: absolute;
                right: 80px;
                padding-right: 80px;

                @import "../../assets/style/nextandpre.scss";
              }
            }
          }
        }
      }

      .open-detail {
        display: inline-block;
        animation: detailin 1s linear forwards;
      }
    }
  }

  @media only screen and (max-width: 1920px) {
    .newsslider,
    .salesslider {
      height: 70vh;
    }
  }
</style>