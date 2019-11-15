<template>
  <div id="menu" >
    <div class="navbar">
      <div class="left"></div>
      <div class="right">
        <div class="hamburger" @click="drawer = true">
          <img src="../../assets/images/hamburger.png" />
        </div>
      </div>
    </div>
    <div style="width:100%; height:100%" v-show="drawer === true">
      <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        @close="close"
        :modal-append-to-body="false"
        size="20%"
      >
        <div class="desktopmenu side-nav animated">
          
          <div class="menu">
            <div
              class="link-wrap"
              :class="{active:index==activeIndex}"
              v-for="(i,index) in lis"
              :key="index"
              @click="navto(index)"
            >
              <div class="menu-left" v-text="`0${index+1}`"></div>
              <a href="#landing">
                <div class="menu-mid menuclickhome">
                  <div class="menuen" v-text="i.cn" v-show="$i18n.locale=='zh-CN'"></div>
                  <div class="menuen" v-text="i.en"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      lis: [
        { en: "HOME", cn: "主页" },
        { en: "ABOUT", cn: "关于实地" },
        { en: "DEVELOPMENT", cn: "地产开发" },
        { en: "LATEST NEWS", cn: "最新消息" },
        { en: "JOIN US", cn: "加入实地" },
        { en: "WHISTLEBLOWER", cn: "廉洁举报" },
        { en: "CONTACT", cn: "联系我们" }
      ]
    };
  },
  props: ["activeIndex"],
  methods: {
    close() {
      this.drawer = false;
    },
    navto(index) {
      this.EventBus.$emit("menuto", index);
    }
  }
};
</script>
<style lang="scss">
  #menu{
    position: absolute;
    right: 0px;
    top: 8px;
    z-index: 888;
    width: 100px;
    height: 100px;


    .navbar {
      clear: both;

      .hamburger {
        float: right;
        margin-right: 50px;
        margin-top: 18px;
        img {
          vertical-align: bottom;
          width: 25px;
        }
      }
    }
  }

// ui框架样式
.el-drawer.rtl {
  background: rgba(0, 0, 0, 0.85);
}
.el-drawer__close-btn {
  font-size: 48px !important;
  color: #fff !important;
  font-weight: 300;
}
.desktopmenu {
  .link-wrap {
    width: 100%;
    float: left;
    margin-bottom: 10px;
    .menu-left {
      width: 10%;
      float: left;
      box-sizing: border-box;
      padding: 10px 5px 10px 5px;
      color: #fff;
    }
    .menu-mid {
      width: 50%;
      float: left;
      box-sizing: border-box;
      text-align: left;
      padding: 0px 0px 10px 15px;
      color: #fff;
      cursor: pointer;
      border-left: 1px solid #ffffff69;
      .menuen {
        padding-top: 5px;
        font-size: 12px;
      }
      .menu-right {
        width: 32%;
        float: left;
        box-sizing: border-box;
        padding: 10px 5px 10px 5px;
      }
    }
  }
  .link-wrap.active {
    .menu-left,
    .menu-mid {
      color:skyblue;
    }
  }
}
</style>

