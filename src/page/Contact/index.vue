<template>
  <div class="contact">
    <!-- desktop menu -->
    <div id="contact-wrap">
      <div class="blur" v-bind:class="{ black: showContact }">
        <div id="section-1">

          <div class="footer-logo moveToTop" v-show="showContact == true">
            <img class="" src="./image/logo-white.png">
          </div>

          <div class="all-rights moveToTop" v-show="showContact == true">
            <span
              id="copyright-top">©2018 版权所有：广州实地房地产开发有限公司.  </span>
          </div>

          <div class="bottom-right-section moveToTop" v-show="showContact == true">
            <div v-on:click="showContact = true"> 联系<i class="down" v-on:click="showContact = true"></i></div>
          </div>


          <div class="bottom-left-menu">
            <div class="selectdiv">
              <select id="adress" v-on:change="changeAddress">
                <option v-for="(office, index) in officeDetail"
                        :value="office.postId"
                        :data-locationname="office.location_name"
                        :data-chinese_address_line_1="office.chinesestr"
                        :data-english_address_line_1="office.englishstr"
                        :data-phone_number="office.phone_number"
                        :data-fax_number="office.fax_number">
                  {{office.location_name}}
                </option>
              </select>
            </div>

            <div class="address">
              <div class="address-info-1">
                <p v-html="firstlocationchinese_address_line_1">
                </p>
              </div>
            </div>
            <div class="contact-number">
				<span class="contact-info-1">
        {{firstlocationphone_number}}
        </span>
              <span class="contact-info-2">
        {{firstlocationfax_number}}
        </span>
            </div>

            <div class="footer-logo">
              <img class="" src="./image/logo-white.png">
            </div>

          </div>

          <div class="all-rights">
            <span id="copyright">©2018 版权所有：广州实地房地产开发有限公司.<br>粤ICP备13058296号</span>
          </div>

          <div class="bottom-right-menu">
            <ul>
              <li class="menuclickabout"><a> 关于实地</a></li>
              <li class="menuclickdevelopment"><a> 地产开发</a></li>
              <li class="menuclicknews"><a> 最新消息</a></li>
              <li class="menuclicknews"><a> 加入我们</a></li>
              <li class="menuclicknews"><a> 廉洁举报</a></li>
            </ul>
          </div>


          <div class="bottom-right-section">
            <div v-on:click="showContact = true">联系 <i class="down"></i></div>
          </div>

        </div>

        <div id="section-2" class="contactform animated fadeInUp" v-show="showContact == true">
          <div class="up" v-on:click="showContact = false">
            <img src="./image/up-arrow.png">
          </div>

          <div class="form-wrap">
            <p class="form-title animate-text"> 在线留言</p>
            <form id="myform">

              <div class="form-group halfleft animate-line">
                <label><span class="asterisk"></span>*姓名:</label>
                <input type="text" class="inputs name animate" v-model="name" style="width: 80%;"/>
              </div>
              <div class="form-group halfright">
                <label><span class="asterisk"></span>*称呼</label>
                <div class="selectdiv">
                  <select name="salutation" v-model="salutation">
                    <option value="先生 MR">先生 MR.</option>
                    <option value="小姐 MS">小姐 MS.</option>
                  </select>
                </div>
              </div>

              <div class="form-group  animate-line">
                <label><span class="asterisk"></span>*公司名称:</label>
                <input type="text" id="firstname" class="inputs companyname animate" v-model="company"
                       style="width: 60%;"/>
              </div>
              <div class="form-group animate-line">
                <label><span class="asterisk"></span>*联系手机:</label>
                <input type="text" class="inputs contactno animate" v-model="contact" style="width: 85%;"
                />

              </div>
              <div class="form-group md animate-line">
                <label><span class="asterisk"></span>*邮箱:</label>
                <input type="email" class="inputs email animate" v-model="email" style="width: 80%;"/>
              </div>

              <div class="form-group ">
                <label><span class="asterisk"></span>*咨询/留言类别:</label>
                <div class="selectdiv" style="width: 350px;">
                  <select v-model="type">
                    <option value="请选择先">请选择</option>
                    <option value="住宅项目">住宅项目</option>
                    <option value="商务项目">商务项目</option>
                    <option value="物业服务">物业服务</option>
                    <option value="其他意见与反馈">其他意见与反馈</option>
                    <option value="商务合作洽谈">商务合作洽谈</option>
                  </select>
                </div>
              </div>

              <div class="form-group full-1 ">
                <label><span class="asterisk"></span>*留言内容:</label>
                <textarea></textarea>
              </div>


              <div class="form-group sm submit-line submit-line-top">
                <input class="animated delay-1.5s fadeIn" type="submit" id="submit" value="提交"
                       style="display: inline-block;"
                       v-bind:class="{ disabled: type == '' ||  salutation == '' || message == '' || name == '' || company == '' || contact == '' || email == ''}"
                       v-on:click.prevent="submitContact">
                <span class="cross">+</span>
                <span class="cross">+</span>
                <span class="cross">+</span>
                <span class="cross">+</span>
              </div>
            </form>

          </div>
        </div>

      </div>


    </div>

  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        officeDetail: null,
        firstlocationchinese_address_line_1: null,
        firstlocationenglish_address_line_1: null,
        firstlocationphone_number: null,
        firstlocationfax_number: null,
        showContact: false,
        address: null,
        showMenu: false,
        type: '请选择先',
        salutation: '先生 MR',
        message: '',
        name: '',
        company: '',
        email: '',
        contact: '',
        captcha: ''
      }
    },
    created() {
      this.$axios
        .get('http://www.seedland.cc/wp/wp-json/template-part/part/4')
        .then((response) => {
          this.officeDetail = response.data.footer;
          this.firstlocationchinese_address_line_1 = this.officeDetail[0].firstlocationchinese_address_line_1;
          this.firstlocationenglish_address_line_1 = this.officeDetail[0].firstlocationenglish_address_line_1;
          this.firstlocationphone_number = this.officeDetail[0].firstlocationphone_number;
          this.firstlocationfax_number = this.officeDetail[0].firstlocationfax_number;
        })
    },
    methods: {
      changeAddress(e) {
        let index = e.target.selectedIndex;
        this.firstlocationchinese_address_line_1 = this.officeDetail[index].firstlocationchinese_address_line_1;
        this.firstlocationenglish_address_line_1 = this.officeDetail[index].firstlocationenglish_address_line_1;
        this.firstlocationphone_number = this.officeDetail[index].firstlocationphone_number;
        this.firstlocationfax_number = this.officeDetail[index].firstlocationfax_number;
      },
      resetAll() {
        this.type = '请选择先';
        this.salutation = '先生 MR';
        this.message = '';
        this.name = '';
        this.company = '';
        this.email = '';
        this.contact = '';
      },

      submitContact() {
        if (this.type == '' || this.salutation == '' ||this. message == '' || this.name == '' || this.company == '' || this.contact == '' || this.email == '') {
          alert('请输入完整的信息\n');
        }else{
          this.$axios
            .post('http://www.seedland.cc/wp-en/wp/wp-json/submit-contactus/submit', {
              type: this.type,
              salutation: this.salutation,
              message: this.message,
              name: this.name,
              company: this.company,
              email: this.email,
              contact: this.contact,
              captcha: this.captcha,
            })
            .then((response) => {
              console.log(response);
              if (response.data == 'false') {
                alert('错验证码\nWrong Verification Code');
              }
              this.resetAll();
              this.showContact = false;
            })
        }


      }

    }
  }


</script>

<style lang="scss" scoped>
  .contact {
    width: 100%;
    height: 100%;

    #contact-wrap {
      width: 100%;
      height: 100%;
      position: relative;

      .blur {
        width: 100%;
        height: 100%;


        .selectdiv {
          position: relative;

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

          &::after {
            content: url(./image/chevron-down-small.png);
            font: 35px "Consolas", monospace;
            color: #fff;
            right: 65px;
            top: 10px;
            padding: 0 0 2px;
            position: absolute;
            pointer-events: none;
          }

        }

        #section-1 {
          width: 100%;
          height: 100%;


          .bottom-left-menu {
            position: absolute;
            display: block;
            bottom: 35px;
            left: 65px;
            font-size: 18px;


            .address {
              .address-info-1 {
                width: 400px;
                line-height: 20px;
                margin-bottom: 20px;
              }

              margin-top: 30px;
            }

            .contact-number {
              margin-top: 30px;
            }

            .footer-logo {
              margin-top: 70px;

              img {
                width: 270px;
              }
            }
          }

          .all-rights {
            position: absolute;
            bottom: 30px;
            left: 41vw;
            text-align: center;
          }

          .bottom-right-menu {
            position: absolute;
            display: block;
            bottom: 150px;
            right: 65px;

            li {
              color: #fff;
              padding: 10px;
              cursor: pointer;
              font-size: 14px;

              a {
                color: white;
                font-size: 14px;
              }
            }
          }

          .bottom-right-section {
            position: absolute;
            right: 5%;
            bottom: 30px;
            font-size: 25px;
            letter-spacing: 10px;

            i.down {
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
              border: solid white;
              border-width: 0 3px 3px 0;
              display: inline-block;
              padding: 6px;
              position: absolute;
              top: 4px;
              right: -35px;
            }
          }
        }

        #section-2 {
          z-index: 888;
          transition: all 0.5s;
          height: 90vh;
          background-color: #0b4f78;
          top: 10vh;
          padding-left: 50px;
          padding-right: 50px;
          position: absolute;
          width: 100%;
          float: left;
          box-sizing: border-box;
          display: block;
          left: 0;

          .up {
            width: 30px;
            height: 30px;
            margin: 0 auto;
            display: block;
            padding-top: 15px;
          }

          #myform .selectdiv {
            display: inline-block;
            margin-left: 10px;
            width: 40%;
            position: relative;

            &:after {
              top: 14px;
              right: 24px;
            }
          }

          .inputs {
            border: none;
            padding-top: 15px;
            padding-bottom: 10px;
            background-color: rgba(255, 255, 255, 0);
            color: white;
          }

          .form-wrap {
            width: 70%;
            display: block;
            margin: 0 auto;

            .form-group {
              margin-bottom: 10px;
            }

            .halfleft {
              margin-right: 2%;
              float: left;
              box-sizing: border-box;
              width: 48%;

            }

            .halfright {
              margin-top: -1%;
              margin-left: 2%;
              float: left;
              box-sizing: border-box;
              width: 48%;
              margin-bottom: 10px;
            }

            .animate-line {
              &:after {
                display: block;
                content: '';
                border-bottom: solid 1px #fff;
                animation: bottom_border 0.6s linear 0s;
                width: 100%;
                -webkit-animation-fill-mode: forwards;
                -moz-animation-fill-mode: forwards;
                -o-animation-fill-mode: forwards;
                -ms-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
              }
            }

            .full-1 {
              textarea {
                color: white;
                width: 100%;
                height: 150px;
                background: transparent;
              }
            }

            .form-title {
              color: #fff;
              font-size: 20px;
              padding-top: 50px;
              padding-bottom: 25px;
            }

            label {
              font-size: 23px;
            }
          }

          .form-group.sm.submit-line.submit-line-top {
            width: auto;
            float: right;
            box-sizing: border-box;
            position: relative;

            .cross {
              position: absolute;

              &:nth-of-type(1) {
                top: -10px;
                left: -3px;
              }

              &:nth-of-type(2) {
                top: -10px;
                right: -3px;
              }

              &:nth-of-type(3) {
                bottom: -10px;
                left: -3px;
              }

              &:nth-of-type(4) {
                bottom: -10px;
                right: -3px;
              }
            }


          }

          #submit {
            display: none;
            font-size: 30px;
            animation-duration: 2s;
            cursor: pointer;
            border: 1px solid #fff;
            width: 100%;
            padding: 10px 50px;
            background: rgba(221, 221, 221, 0.49019607843137253);
          }


        }
      }
    }


  }

</style>



