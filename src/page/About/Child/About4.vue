<template>
  <div style="height:100%; position: relative;">
    <div>
      <div class="subcontainer structure">
        <div class="left">
          <div class="subpage title">
            <div class="en">STRUCTURE</div>
            <div class="cn" v-show="this.$i18n.locale=='zh-CN'">集团架构</div>
          </div>
        </div>
        <div class="right">
          <div class="title logo">
            <img src="@/assets/images/logo-white-encn.png"/>
          </div>
          <h2 class="tree-diagram-title">实地地产[总部]</h2>
          <p class="tree-diagram-sub-title">SEEDLAND HEADQUARTERS</p>
          <div id="tree-diagram">
            <div class="tree"></div>
          </div>

          <div id="tree-diagram-names">

            <!--<Bar>-->
            <div class="tree-timeline-names-wrapper">
              <div class="tree-item-warp">
                <template v-for="(item, i) in structure">

                  <div class="tree-diagram-names_line" v-if="!(i % 5)"></div>
                  <div class="tree-item">
                    <p v-text="item.name">投资拓展中心</p>
                  </div>
                </template>

              </div>
            </div>
            <!--</Bar>-->
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
        structure: [
          {
            name: '投资拓展中心'
          },
          {
            name: '调研中心'
          },
          {
            name: '计划运营中心'
          },
          {
            name: '工程管理中心'
          },
          {
            name: '成本管理中心'
          },
          {
            name: '招标采购中心'
          },
          {
            name: '融资管理中心'
          },
          {
            name: '资金管理中心'
          },
          {
            name: '财务管理中心'
          },
          {
            name: '开发报建中心'
          },
        ]
      };

    },
    props: ["structureFirstCol", "structureSecondCol"],
    created() {

    },

  };
</script>

<style lang="scss" scoped>
  @import "@/assets/style/color.scss";

  .subcontainer {
    width: 100vw;
    margin-top: 3%;
    padding-left: 5%;
    padding-right: 50%;
    display: block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: #fff;
    height: 100vh;

    p {
      padding: 0;
      margin: 0;
    }

    .left {
      vertical-align: top;
      max-width: 375px;
      width: 30%;
      display: inline-block;

      .subpage.title {
        padding-bottom: 100px;
        font-size: 17px;
        white-space: nowrap;

        .en {
          font-family: "DIN-Regular";
          font-size: 18px;
          letter-spacing: 3px;
          margin-bottom: 10px;

          .cn {
            font-family: "NotoSansCJKsc-Light", sans-serif;
            font-size: 18px;
          }
        }
      }
    }

    .right {
      display: inline-block;
      width: 68vw;
      padding-right: 80px;
      position: absolute;
      color: #fff;

      .tree-diagram-title, .tree-diagram-sub-title {
        text-align: center;
      }

      .title {
        font-family: "NotoSansCJKsc-Light", sans-serif;
        font-size: 68px;
      }

      .title.logo {
        display: block;
        position: relative;
        padding-bottom: 25px;

        img {
          width: 28%;
        }
      }

      #tree-diagram {
        width: 0;
        margin: auto;
        box-sizing: border-box;
        text-align: center;

        &:before {
          display: block;
          border-radius: 50%;
          width: 15px;
          height: 15px;
          content: "";
          border: 2px solid rgba(242, 242, 242, 0.52);
          margin-left: -6px;
        }

        .tree {
          width: 2px;

          &:before {
            width: 2px;
            height: 20px;
            max-height: 120px;
            display: block;
            content: "";
            color: white;
            background: rgba(242, 242, 242, 0.52);
          }
        }

      }

      #tree-diagram-names {
        padding: 0 10%;
        width: 100% !important;
        height: 65vh;
        white-space: nowrap;
        font-size: 14px;

        .tree-diagram-names_line {
          width: 80%;
          margin: 0 10%;
          height: 2px;
          background: rgba(242, 242, 242, 0.52);
        }

        .tree-timeline-names-wrapper {
          width: 100%;
          height: calc(100% - 2px);


          .tree-item-warp {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: flex-start;

            .tree-item {
              width: 20%;
              height: 16%;
              text-align: center;

              &:before {
                content: "";
                display: inline-block;
                width: 2px;
                height: 20px;
                background: rgba(242, 242, 242, 0.52);
              }
            }
          }


        }
      }
    }
  }
</style>