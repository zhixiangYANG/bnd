<template>
  <div class="index-page">
    <div class="banner">
      <el-carousel arrow="never" height="541px" autoplay>
        <el-carousel-item v-for="(img, index) in bannerList" :key="index">
          <img :src="img.url" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="business ">
      <div class="businessContent main">
        <div class="businessWord">
          <router-link to="/business">
            <h3>业务布局</h3>
            <h5>BUSINESS</h5>
          </router-link>
        </div>
        <div class="businessPic">
          <ul>
            <li class="li1">
              <div class="box">
                <img src="../../assets/images/xqcIcon.png" />
                <span>薪起程</span>
                <div class="bgbox">
                  <p>
                    薪起程App是一款多功能性软件，能提供查询工资、工资提现、企业用车、企业用油、在线签约、车辆租赁、工资专户等。
                  </p>
                  <a href="">查看更多</a>
                  <span class="bg"></span>
                </div>
              </div>
            </li>
            <li class="li2">
              <div class="box">
                <img src="../../assets/images/jjjIcon.png" />
                <span>吉吉居</span>
                <div class="bgbox">
                  <p>
                    吉吉居，中国最大的无线智慧社区平台之一。综合了智能门禁、金融理财、购房投资、物业服务、商圈消费优惠、友邻......
                  </p>
                  <a href="">查看更多</a>
                </div>
              </div>
            </li>
            <li class="li3">
              <div class="box">
                <img src="../../assets/images/srtIcon.png" />
                <span>数融通</span>
                <div class="bgbox">
                  <p>
                    专注于RFID物联网技术在智慧工厂领域的应用。通过多年的自主研发，已实现拥有知识产权的智能硬件、以及配套的工厂AI......
                  </p>
                  <a href="">查看更多</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="news">
      <div class="newsTitle">
        <router-link to="/newsCenter">
          <h3>新闻中心</h3>
          <h5>NEWS</h5>
        </router-link>
      </div>
      <div class="newsBox main">
        <div class="newsList">
          <ul>
            <li>
              <div class="info">
                <div class="title">
                  <a href="#">薪快讯--广东省移动电商协会一行莅临博纳德考察</a>
                </div>
                <div class="newsInfo">
                  11月16日广东省电商协会会长刘正秀及众多会员企业家莅临博纳德参观指导。博纳德集团营销中心陈锦总监，陈思岚总监等领导进行了热情接待并陪同参观。
                </div>
              </div>
              <div class="date">
                <em>18</em>
                <span>11</span>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="title">
                  <a href="#">跨界联合--顺德邮政储蓄牵手薪起程</a>
                </div>
                <div class="newsInfo">
                  11月8号下午，顺德邮政储蓄银行部分区域行长一行人齐聚博纳德对薪起程服务平台考察学习，营销副总裁吕修兰女士及营销中心部分同事进行热情接待。
                </div>
              </div>
              <div class="date">
                <em>09</em>
                <span>11</span>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="title">
                  <a href="#">薪快讯--遍地开花，江门品勤正式 运营</a>
                </div>
                <div class="newsInfo">
                  10月27日，菜鸟品勤江门分拨自动化系统设备正式启动上线。江门市委林应武、常务副市长许晓雄、副市长蔡德威，鹤山市领导武培进、林贤进、冯伟华，菜鸟华南区负责人......
                </div>
              </div>
              <div class="date">
                <em>30</em>
                <span>10</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="newsCarousel">
          <el-carousel :interval="5000" autoplay height="320px">
            <el-carousel-item v-for="(img, index) in newsPic" :key="index">
              <a href="#">
                <img :src="img.url" />
              </a>
              <div class="bgtitle">
                <a href="#">{{ img.info }}</a>
                <span class="bgbg"></span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div class="customer">
      <div class="customerTitle">
        <router-link to="/groupInfo">
          <h3>集团客户</h3>
          <h5>GROUP CUSTOMER</h5>
        </router-link>
      </div>
      <div class="logoGroup">
        <div class="groupList">
          <el-carousel arrow="hover" height="337px">
            <el-carousel-item v-for="(img, index) in customerList" :key="index">
              <img :src="img.url" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList: [
        { url: require('../../assets/images/banner.jpg') },
        { url: require('../../assets/images/banner02.jpg') },
        { url: require('../../assets/images/banner.jpg') }
      ],

      customerList: [
        { url: require('../../assets/images/customer-01.jpg') },
        { url: require('../../assets/images/customer-02.jpg') },
        { url: require('../../assets/images/customer-01.jpg') },
        { url: require('../../assets/images/customer-02.jpg') }
      ],

      newsPic: [
        {
          url: require('../../assets/images/focusPic01.jpg'),
          info: '薪快讯--广东省移动电商协会一行莅临博纳德考察'
        },
        {
          url: require('../../assets/images/focusPic02.jpg'),
          info: '跨界联合--顺德邮政储蓄牵手薪起程'
        },
        {
          url: require('../../assets/images/focusPic03.jpg'),
          info: '薪快讯--遍地开花,江门品勤正式运营'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.index-page {
  .banner {
    overflow: hidden;
    img {
      position: absolute;
      float: left;
      width: 100%;
      height: 100%;
      vertical-align: top;
    }

    .el-carousel__button{
      display: block;
    opacity: 1;
    width: 100px;
    height: 5px;
    background-color: #fff;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
    }

     .is-active{
     .el-carousel__button{
       background-color:#059ce5;
     }
    }
  }

  .business {
    width: 100%;
    height: 468px;
    background: url('../../assets/images/bgYwbj.jpg');

    .businessWord {
      text-align: center;
      padding-top: 50px;
      a {
        text-decoration: none;
        color: #666;
      }

      a:hover {
        color: #cc0000;
      }
      h3 {
        font-size: 45px;
        font-weight: normal;
        margin-bottom: 10px;
      }
      h5 {
        font-size: 24px;
        color: #999;
        font-weight: normal;
        font-family: 'Arial';
      }
    }

    .businessPic ul {
      margin: 0 -15px;
      overflow: hidden;
      padding: 30px 0 50px;

      li {
        float: left;
        margin: 0 15px;
        height: 240px;

        .box {
          width: 380px;
          height: 240px;
          display: block;
          position: relative;

          span {
            position: absolute;
            bottom: 30px;
            left: 50%;
            z-index: 9;
            font-size: 30px;
            color: #fff;
            margin-left: -45px;
            text-shadow: 2px 2px 5px #333;
          }

          .bgbox {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 100;
            background: rgba(0, 0, 0, 0.5);

            p {
              margin-top: 50px;
              font-size: 18px;
              color: #fff;
              padding: 0 15px;
              line-height: 1.5;
            }

            a {
              display: block;
              width: 120px;
              height: 30px;
              border: 1px solid #fff;
              text-align: center;
              line-height: 30px;
              text-decoration: none;
              color: #fff;
              margin: 50px auto;
            }

            a:hover {
              color: yellow;
              border: 1px solid yellow;
            }
          }
        }
      }

      li:hover {
        .bgbox {
          display: block;
        }
      }
    }
  }

  .news {
    width: 100%;
    height: 507px;
    margin-top: 50px;

    .newsTitle {
      text-align: center;
      margin-bottom: 30px;
      a {
        text-decoration: none;
        color: #666;
      }

      a:hover {
        color: #cc0000;
      }
      h3 {
        font-size: 45px;
        font-weight: normal;
        margin-bottom: 10px;
      }
      h5 {
        font-size: 24px;
        color: #999;
        font-weight: normal;
        font-family: 'Arial';
      }
    }

    .newsList {
      width: 678px;
      height: 379px;
      float: left;

      li {
        overflow: hidden;
        border-bottom: 1px #eee dotted;
        margin-bottom: 20px;
        padding-bottom: 20px;

        .info {
          float: right;
          width: 570px;
          margin-left: 25px;

          .title {
            margin-bottom: 10px;
            a {
              font-size: 18px;
              font-weight: bold;
              color: #666;
              text-decoration: none;
            }

            a:hover {
              color: #cc0000;
              text-decoration: underline;
            }
          }

          .newsInfo {
            color: #999;
            text-indent: 2em;
            font-size: 14px;
            line-height: 1.3;
          }
        }

        .date {
          float: left;
          width: 81px;
          height: 81px;
          border: 1px #eee solid;
          text-align: center;
          border-radius: 5px;

          em {
            display: block;
            height: 60px;
            line-height: 60px;
            font-size: 30px;
            color: #666;
          }

          span {
            height: 30px;
            background-color: #ffbf14;
            display: block;
            line-height: 30px;
            color: #fff;
            font-size: 18px;
          }
        }
      }
    }

    .newsCarousel {
      width: 480px;
      height: 320px;
      overflow: hidden;
      position: relative;
      float: right;

      .bgtitle {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        height: 60px;
        line-height: 30px;

        a {
          position: relative;
          top: 8px;
          z-index: 9;
          text-align: center;
          color: #fff;
          display: block;
          text-decoration: none;
          font-size: 14px;
        }

        .bgbg {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          height: 60px;
          width: 100%;
          background: #000;
          filter: alpha(opacity=80);
          opacity: 0.8;
        }
      }

       .el-carousel__button{
      display: block;
    opacity: 1;
    width: 50px;
    height: 1px;
    background-color: #fff;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
    }

     .is-active{
     .el-carousel__button{
       background-color:#ffbf14;
     }
    }
    }
  }

  .customer {
    width: 100%;
    height: 415px;

    .customerTitle {
      text-align: center;
      a {
        text-decoration: none;
        color: #666;
      }

      a:hover {
        color: #cc0000;
      }
      h3 {
        font-size: 45px;
        font-weight: normal;
        margin-bottom: 10px;
      }
      h5 {
        font-size: 24px;
        color: #999;
        font-weight: normal;
        font-family: 'Arial';
      }
    }

    .logoGroup {
      width: 100%;
      .groupList {
        width: 1270px;
        margin: 0 auto;
        overflow: hidden;
      }
    }
  }
}
</style>
