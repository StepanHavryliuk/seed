<template>
  <div style="postion:relative">
    <div id="projectdetails" class="projectdetails">
      <div
        class="bg-body animated fadeIn"
        :style="{ backgroundImage: 'url(' + project_image + ')' }"
      >
        <div class="left-barup animated fadeIn delay-4s"></div>

        <span class="console" style="z-index: 999999;">
          <span class="left_arrow" @click="back()"></span>
        </span>

        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed whole animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
        <div class="boxed half animated fadeIn delay-half"></div>
      </div>
      <div class="page-wrapper">
        <div class="drawer-left">
          <div>
            <div class="back-arrow">
              <button class="exit">
                <div class="a1"></div>
                <div class="a2"></div>
              </button>
            </div>
            <div class="line11"></div>
            <div class="brand">
              <img :src="brand_image" alt class="animated fadeIn" />
            </div>
            <div class="drawer-menu">
              <a class="ripple" v-for="(item,index) in drawermenu" :key="index" @click="tab(index)">
                <span class="chnavleft" v-text="item.des"></span>
                <span class="engnavleft" v-text="item.name"></span>
              </a>
            </div>
            <div class="projectaddress">
              <div class="projectaddresslabel">项目地址:</div>
              <div class="projectaddressvalue" v-text="project_address"></div>
              <div class="projectcontactlabel">置业热线:</div>
              <div class="projectcontactvalue" v-text="project_contact">020-3263 6888</div>
            </div>
            <div class="line22"></div>
          </div>
        </div>
        <!-- 选项卡内容-->
        <div class="drawer-right first" v-show="tabindex==0">
          <div class="grid-box-wrap">
            <div class="grid-box-top">
              <div class="hor">
                <div class="grid-box grid-box-top-sm-horzontal hor"></div>
                <div class="grid-box grid-box-md-1 hor"></div>
                <div class="grid-box grid-box-bottom-sm-horzontal hor"></div>
              </div>
              <div class="vert">
                <div class="grid-box grid-box-sm-vertical-left vert"></div>
                <div class="grid-box grid-box-sm-vertical-left-2 vert"></div>
                <div class="grid-box grid-box-sm-vertical-right vert"></div>
                <div class="grid-box grid-box-sm-vertical-mid-1 vert"></div>
                <div class="grid-box grid-box-sm-vertical-mid-2 vert"></div>
              </div>
            </div>
          </div>
          <div class="right-panel">
            <div class="right-panel-inner scrollmenow">
              <div
                class="simplebar-content"
                style="padding: 0px; height: 95%; overflow-y:scroll;"
                @mousemove="mousemove"
              >
                <section
                  v-for="(text, index) in development_details.about_chinese_title"
                  :key="index"
                >
                  <h1
                    class="fadefromleft"
                    data-in-effect="fadeIn"
                  >{{development_details.about_chinese_title[index]}}</h1>
                  <h2
                    class="fadefromleft"
                    data-in-effect="fadeIn"
                  >{{development_details.about_english_title[index]}}</h2>
                  <p
                    class="fadefromleft"
                    data-in-effect="fadeIn"
                  >{{development_details.about_chinese_text[index]}}</p>
                  <p
                    class="fadefromleft"
                    data-in-effect="fadeIn"
                  >{{development_details.about_english_text[index]}}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="drawer-right second" v-show="tabindex==1">
          <div class="blue-overlay"></div>
          <div class="animated fadeIn" id="theplanimgc">
            <div style="height: 100%; width: 100%;">
              <img :src="theplan" style="cursor: pointer;" />
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="drawer-right third" v-show="tabindex==2">
          <div class="blue-overlay"></div>
          <div class="animated fadeIn" id="localityimgc">
            <div style="height: 100%; width: 100%;">
              <img :src="locality_image" style="cursor: pointer;" />
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="drawer-right four" v-show="tabindex==3">
          <div class="blue-overlay"></div>
          <div class="photoviewer">
            <img :src="gallery_image_single" class="imgviewer animated fadeIn" />
          </div>
          <div class="right-side"></div>
          <div class="right-side-bg animated fadeIn">
            <div class="galleryrepeater" style="height: 100%;">
              <div
                data-simplebar-auto-hide="false"
                data-simplebar="init"
                class="gallery"
                style="height: 100%;"
              >
                <div
                  class="simplebar-content"
                  style="padding: 0px; height: 100%; overflow:  scroll;"
                >
                  <div
                    v-for="(image, index) in gallery_image"
                    class="img1"
                    :style="{ backgroundImage: 'url(' + image.url + ')' }"
                    @mouseover="gallery_image_single = image.url"
                    :key="index"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 5 -->
        <div class="drawer-right five" v-show="tabindex==4">
          <div class="bar-bg animated fadeInRight delay-half"></div>
          <div class="right-bar animated fadeInRight delay-1s">
            <div>
              <div class="floorplan-container">
                <div style="height: 100%; width: 100%;">
                  <img
                    src="http://www.seedland.cc/wp/wp-content/uploads/2018/10/A户型-86㎡-两房两厅一卫.jpg"
                    class="floorplan animated fadeIn delay-1s"
                    style="cursor: pointer;"
                  />
                </div>
              </div>
              <div class="crosses animated fadeIn delay-2s">
                <p id="cross-tl">+</p>
                <p id="cross-bl">+</p>
                <p id="cross-tr">+</p>
                <p id="cross-br">+</p>
              </div>
              <div class="line-l"></div>
              <div class="line-r"></div>
              <div class="line-tr"></div>
              <div class="line-br"></div>
              <div class="minilineSide">
                <div class="dot animated fadeIn delay-2s"></div>
              </div>
              <div class="right-text animated fadeIn delay-2s">
                <div class="flat-details">
                  <h2>false</h2>
                </div>
                <div class="flatbuttons">
                  <button class="flatbuttonsleft">&lt;</button>
                  <button class="flatbuttonsright">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 6 -->
        <div class="drawer-right six" v-show="tabindex==5">
          <!---->
          <div>
            <div class="right-panel">
              <div class="right-panel-inner scrollmenow">
                <div class="top-overlay"></div>
                <div class="construction-text-container">
                  <section>
                    <h1>网页进行建设中</h1>
                    <h1>PAGE UNDER CONSTRUCTION</h1>
                  </section>
                </div>
                <div class="bottom-overlay"></div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <!-- 7 -->
        <div class="drawer-right seven" v-show="tabindex==6">
          <div class="page-clearfix">
            <span style="z-index: 2; position: relative;">项目动态 HAPPENINGS</span>
          </div>
          <!---->
          <div class="right-panel">
            <div class="right-panel-inner scrollmenow">
              <div class="top-overlay"></div>
              <div class="construction-text-container">
                <section>
                  <h1>网页进行建设中</h1>
                  <h1>PAGE UNDER CONSTRUCTION</h1>
                </section>
              </div>
              <div class="bottom-overlay"></div>
            </div>
          </div>
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawermenu: [
        { name: "ABOUT", des: "项目简介" },
        { name: "THE PLAN", des: "项目规划" },
        { name: "LOCALITY", des: "项目区域" },
        { name: "GALLERY", des: "楼盘相册" },
        { name: "FLAT TYPE", des: "精品户型" },
        { name: "WATCH", des: "项目视频" },
        { name: "HAPPENINGS", des: "项目动态" }
      ],
      tabindex: 0,
      brand_image: null,
      project_address: null,
      project_contact: null,
      project_image: null,
      // 1
      development_details: {},
      // 2
      theplan: null,
      // 3
      locality_image: null,
      // 4
      gallery_image: null,
      gallery_image_single: null
    };
  },
  props: ["id"],
  created() {
    this.$axios
      .get("http://www.seedland.cc/wp/wp-json/development-part/part/" + this.id)
      .then(response => {
        this.development_details = response.data[0];
        this.project_image = response.data[0].background_imageurl;
        this.theplan = response.data[0].d_the_plan;
        this.brand_image = response.data[0].logourl;
        this.project_address = response.data[0].address;
        this.project_contact = response.data[0].contact_no;
        this.locality_image = response.data[0].d_locality;
        this.gallery_image = response.data[0].d_gallery;
        this.video = response.data[0].d_watch;
        this.categoryPostId = response.data[0].d_happenings[0];
        this.gallery_image_single = response.data[0].d_gallery[0].url;
      });
  },
  methods: {
    mousemove(event) {
      let heightParts = window.innerHeight / 2;
      let toBottom = window.innerHeight - heightParts;
      let toAbove = window.innerHeight - heightParts * 1.5 + 70;
      let contents = document.querySelectorAll(".simplebar-content");
      if (event.pageY > toBottom) {
        contents.forEach(function(content) {
          content.scrollTop += 3;
        });
      } else {
        contents.forEach(function(content) {
          content.scrollTop -= 3;
        });
      }
    },
    tab(index) {
      this.tabindex = index;
    },
    back() {
      this.$emit("fun", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.projectdetails {
  /* font-family:'Roboto',sans serif; */
 
  .boxed {
    box-sizing: border-box;
    position: relative;
    float: left;
    background-color: transparent;
    /* border: 1px solid #fafafa54; */
    border-bottom: 1px solid rgba(250, 250, 250, 0.33);
    border-right: 1px solid rgba(250, 250, 250, 0.33);
    transition: width 2s;
    transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
  }
  .bg-body {
    display: inline-block;
    position: absolute;
    background-size: 90% 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    animation: panning 4s forwards;
    .left-barup {
      position: absolute;
      width: 50%;
      height: 100%;
      left: 0px;
      background: linear-gradient(
        to right,
        rgba(0, 0, 20, 0.64) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    .console {
      color: #fafafa;
      opacity: 0.7;
      position: absolute;
      left: 5%;
      top: 0;
      /*z-index: 10;*/
      cursor: pointer;
      .left_arrow {
        border: solid white;
        border-width: 0 3px 3px 0;
        display: block;
        padding: 12px;
        transform: rotate(136deg);
        -webkit-transform: rotate(136deg);
        margin-top: 30px;
      }
    }

    .animated.delay-half {
      -webkit-animation-delay: 500ms;
      animation-delay: 500ms;
    }
    .half {
      width: calc(100% / 6);
      height: calc(100% / 6);
      position: relative;
      padding: 0px;
    }
    .whole {
      width: calc(100% / 6);
      height: calc(100% / 3);
    }
  }
  .page-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    background-size: 110%;
    animation: panning 4s forwards;
    .drawer-left {
      width: calc(100% / 7);
      height: 100%;
      /* background-color: rgba(0,0,50,0.5); */
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 99999 !important;
      position: relative;
      .back-arrow {
        width: 100%;
        height: calc(100vh / 7);
        .exit {
          cursor: pointer;
          border: none;
          position: relative;
          left: 32%;
          top: 24%;
          height: 41px;
          background-color: transparent;
          display: none;
          .a1 {
            width: 16px;
            border-bottom: 2px solid #fafafa;
            transform-origin: 0%;
            transform: rotate(-40deg);
          }
          .a2 {
            border-top: 2px solid #fafafa;
            transform-origin: 0%;
            transform: rotate(40deg);
          }
        }
      }
      .line11 {
        position: absolute;
        width: 99%;
        border: 1px solid #fafafa;
        top: calc(100% / 10);
      }
      .brand {
        width: 100%;
        height: calc(100vh / 9);
        img {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
        }
      }
      .drawer-menu {
        width: 100%;
        z-index: 1;
        position: relative;
        .ripple {
          background-position: center;
          transition: background 0.8s;
          &:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        }
        a.ripple {
          height: 4%;
        }
        a {
          display: block;
          text-align: center;
          color: #fafafa;
          text-decoration: none;
          padding: 20px;
          .chnavleft {
            float: left;
            text-align: right;
            width: 50%;
            padding-right: 5%;
            box-sizing: border-box;
            font-size: 14px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          .engnavleft {
            float: left;
            width: 50%;
            text-align: left;
            font-family: "DIN-Bold";
            font-size: 9px;
            position: relative;
            padding-top: 2%;
            left: 5%;
            top: 50%;
            transform: translateY(-50%);
            font-weight: 900;
          }
        }
      }
      .projectaddress {
        padding: 15px;
        position: absolute;
        bottom: calc(60% / 10);
        padding-left: 15px;
        .projectaddresslabel,
        .projectcontactlabel {
          padding-left: 5px;
          font-family: "NotoSansCJKsc-Medium";
          font-size: 10px;
          padding-top: 5px;
          padding-bottom: 5px;
          font-weight: 900;
        }
        .projectaddressvalue,
        .projectcontactvalue {
          padding-left: 5%;
          font-family: "NotoSansCJKsc-Thin";
          font-size: 14px;
          color: white;
          padding-bottom: 5px;
        }
      }
      .line22 {
        position: absolute;
        width: 99%;
        border: 1px solid #fafafa;
        bottom: calc(70% / 10);
      }
    }
    .drawer-right {
      flex: 1;
      overflow: hidden;
      color: #fafafa;
      height: 100%;
      top: 1px;
      width: 100%;
      position: absolute;
      .grid-box-wrap {
        width: 60%;
        float: left;
        box-sizing: border-box;
        height: 100%;
        .grid-box-top {
          width: 100%;
          float: left;
          box-sizing: border-box;
          height: 100%;
          .grid-box {
            float: left;
            box-sizing: border-box;
          }
          .hor {
            animation: slideRight 1s 2s linear forwards;
            display: none;
          }
          .grid-box-top-sm-horzontal {
            width: 0%;
            /* height: 100px; */
            border-bottom: 0.04em solid rgba(255, 255, 255, 0.45);
            position: absolute;
            /* display: none; */
            transition: all 1.7s;
            top: calc(100% / 10);
          }
          .grid-box-md-1 {
            width: 0%;
            border-top: 0.04em solid rgba(255, 255, 255, 0.45);
            position: absolute;
            top: calc(100% / 2);
            /* display: none; */
            transition: all 1.7s;
          }
          .grid-box-bottom-sm-horzontal {
            width: 0%;
            /* height: 100px; */
            border-top: 0.04em solid rgba(255, 255, 255, 0.45);
            position: absolute;
            bottom: calc(100% / 10);
            /* display: none; */
            transition: all 1.7s;
          }
          .vert {
            /* animation: slideDown 1s 2s linear forwards; */
            animation: slideDown 0.1s linear forwards;
          }
          .grid-box-sm-vertical-left {
            height: 0%;
            border-right: 0.04em solid rgba(255, 255, 255, 0.45);
            position: absolute;
            transition: all 1.7s;
            left: calc(100% / 6);
            top: 1px;
            width: 1px;
          }
          .grid-box-sm-vertical-left-2 {
            display: none;
            height: 0%;
            border-right: 0.04em solid rgba(255, 255, 255, 0.45);
            position: absolute;
            transition: all 1.7s;
            left: calc(100% / 5);
            top: 1px;
            width: 1px;
          }
          .grid-box-sm-vertical-right {
            display: none;
            height: 0%;
            border-left: 0.04em solid rgba(255, 255, 255, 0.45);
            position: absolute;
            right: calc(100% / 2.5);
            transition: all 1.7s;
            top: 1px;
            width: 1px;
          }
          .grid-box-sm-vertical-mid-1 {
            top: 1px;
            width: 1px;
            border: 0.04em solid rgba(255, 255, 255, 0.22);
            height: 0%;
            position: absolute;
            left: calc(100% / 3);
          }
          .grid-box-sm-vertical-mid-2 {
            top: 1px;
            width: 1px;
            border: 0.04em solid rgba(255, 255, 255, 0.22);
            height: 0%;
            position: absolute;
            right: calc(100% / 2);
          }
        }
      }
      .right-panel {
        width: 34.4%;
        height: 100vh;
        background-color: rgba(26, 56, 87, 0.86);
        overflow: hidden;
        padding-left: 50px;
        padding-right: 50px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        .right-panel-inner {
          color: #fff;
          top: 10%;
          bottom: 10%;
          right: 10%;
          left: 10%;
          position: absolute;
          height: 90%;
          section {
            margin-bottom: 50px;
            padding-right: 50px;
            animation: fadeInLeft 1s linear forwards;
          }
        }
      }
      // 2
      #theplanimgc img {
        height: 90%;
        position: relative;
        max-height: 80%;
        max-width: 90%;
      }
      // 3
      #localityimgc img {
        width: auto;
        max-width: 50vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      //
      img.imgviewer {
        position: absolute;
        width: auto;
        max-width: 50%;
        right: -10%;
        left: 5%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .right-side {
        float: right;
        height: calc(90% / 1.3);
        width: 130px;
        background-color: rgba(255, 255, 255, 0.1);
        /* border: 1px solid rgba(255, 255, 255, 0.9); */
        right: 5%;
        position: absolute;
        filter: blur(2px);
        overflow: hidden;
        padding: 10px;
        top: 20%;
      }
      .right-side-bg {
        float: right;
        height: calc(90% / 1.3);
        width: 130px;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        right: 5%;
        position: absolute;
        overflow-y: auto;
        padding: 10px;
        top: 20%;
      }
      .img1 {
        width: 100%;
        height: calc(100% / 5);
        height: 20%;
        position: relative;
        background-size: cover;
        animation: fadeIn 0.5s 1s linear forwards;
      }
      .bar-bg {
        height: 100%;
        width: calc(100% / 1.715);
        background-color: rgba(0, 0, 50, 0.5);
        float: right;
        position: absolute;
        top: 1px;
        animation: fadeIn 1s linear forwards;
      }
      .right-bar {
        /* display: none; */
        position: absolute;
        width: 50%;
        height: 100%;
        right: 0px;
        top: 0px;
        background-color: rgba(0, 0, 50, 0.5);
        .floorplan-container {
          top: 13%;
          height: calc(100vh / 1.5);
          width: calc(100vw / 3.1);
          position: absolute;
          box-sizing: border-box;
          img.floorplan.animated {
            max-width: 80%;
            width: auto;
            height: auto;
            max-height: 80%;
            display: block;
            margin: auto;
            position: relative;
          }
        }
      }
    }
    .drawer-right.four,
    .drawer-right.four .photoviewer {
      height: 100%;
      width: 100%;
    }
  }
}
</style>