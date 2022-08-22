var kefucontent = document.createElement("div");
var my_host = window.location.host;
kefucontent.id = 'kefu-hh';
let kefu_url = `https://www.xpwabp.com:6600/entry/register/?agent_code=6860174`

// let bobtylink_app = 'https://www.huohuvip77.app:32102/?i_code=6280709'
// let bobtylink_pc = 'https://www.huohuvip134.com:30111/register/?i_code=6280709'
// let bobtylink_h5 = 'https://www.huohuvip107.com:30501/entry/register/?i_code=6280709'
// let my_domain = 'https://www.huohuvip75.app:30112/?i_code=6280709'
// let bob_vpn = 'https://wangquan.emc256.com'


// let bytylink_app = 'https://www.ob120.app:31207/?i_code=1153378'
// let bytylink_pc = 'https://www.ob239.com:31207/register/?i_code=1153378'
// let bytylink_h5 = 'https://www.oub109.com:31207/entry/register/?i_code=1153378'
// let my_bob_domain = 'http://obvip2624.com'

// let bianfu_link = 'https://www.hhbet38.com:10024/entry/register/?i_code=6280709'
// let bianfu_code = '11538945'
// let apk_link = 'https://www.hhbet38.com:10024/entry/register/?i_code=6280709'
// let vpn_link = 'https://www.hhbet38.com:10024/entry/register/?i_code=6280709'

// let ios_link = 'https://www.hhbet40.com:10024/?i_code=6280709'
// let is_h5 = 'is-h5-no'


var ybty_link = {
    bobApp:      'https://www.hqkblz.com:6443/?agent_code=',// 全站app
    bobtyApp:    'https://www.hqkblz.com:6443/?agent_code=',//体育app
    bobPc:       "https://www.4r2na.com:9900/register/?agent_code=",//
    bobH5:       'https://www.w9cnts.com:6600/register/?agent_code=',//H5
    bobqpApp:    'https://www.hqkblz.com:6443/?agent_code=',//棋牌app 
    
    
    byApp:      'https://www.boyu1041.com:30112/?i_code=',// 全站app
    bytyApp:    'https://www.boyu1041.com:30112/?i_code=',// 体育app
    byPc:       'hhttps://www.boyu1010.com:30111/register/?i_code=',
    byH5:       'https://www.boyuvip170.com:30894/entry/register/?i_code=',
    
    
    
    
}
if(window.innerWidth<768) is_h5 = 'is-h5-yes'
kefucontent.innerHTML = `
<style>
    #body {
        color: #0b0000;
    }
    #kefu-hh{
        position:fixed;
        bottom:40px;
        right:6px;
        z-index:100000;
        width:80px;
        font-size:12px;
        text-align:center;
    }
    #kefu-hh .kf-item{
        background: #fff;
        margin-bottom: 10px;
        padding: 10px 0;
        border-radius: 10px;
        box-shadow: 1px 1px 3px 0px #00000026;
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(6%, #FFF), color-stop(74%, #e5edff), color-stop(102%, #FFF));
    }
    #kefu-hh .kf-item-text{
        color:#404261;
        margin-top: 3px;
    }
    #kefu-hh .kf-item-small{
        color:#f76532;
        margin-top: 3px;
        font-weight:800;
    }
    .kefu-img img{
        max-width:100%;
        width:40px;
        height:40px;
        border-radius:50%;
        margin:0 auto;
    }
    .kefu-img:hover .kf-item-text{
        color:#f76532;
    }
    .kefu-img a{
        text-decoration: none;
        color:#404261;
    }
    #kefu-home-detail-open{
        position: fixed;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.6);
        left:0;
        top:0;
        display: flex;
        align-items: center;
        justify-content: center;
        display: block;
        padding: 0 3px;
        z-index: 15000;
        box-sizing: border-box;
      }
      #kefu-home-detail-open .detail-content{
        min-width: 300px;
        background: #fff;
        min-height:400px;
        position: relative;
        max-width: 500px;
        z-index: 10;
        border-radius: 10px;
        margin:0 auto;
        margin-top: 10%;
        padding-bottom: 10px;
        box-sizing: border-box;
      }
      #kefu-home-detail-open .detail-content h1{
        margin: 0;
        text-align: center;
        font-size: 20px;
        padding:13px;
        background: #511e0c;
        color: #fff;
        border-radius: 5px 5px 0 0;
        position:relative;
      }
      #kefu-home-detail-open .detail-content h1 img{
          position:absolute;
          right:0;
          top:0;
      }
      #kefu-home-detail-open .detail-content span.close{
        position: absolute;
        left: 50%;
        bottom: -55px;
        cursor: pointer;
        font-size: 14px;
        color: #fff;
        width: 100px;
        text-align: center;
        background: #f76532;
        height: 40px;
        line-height: 40px;
        margin-left: -50px;
        border-radius: 5px;
        opacity: 1;
      }
      #kefu-home-detail-open .detail-content .regist-buttons a{
        color: #f76532;
        font-weight: 800;
        height:35px;
        line-height:35px;
        border:1px solid #f76532;
        border-radius:3px;
        font-size: 14px;
        display: inline-block;
        padding:0 7px;
      }
      .gg-content{
        padding: 0 10px;
        line-height: 20px;
        text-align: left;
        font-size: 14px;
        font-weight: 700;
      }
      .gg-content p{
          margin-top:10px;
          padding:0;
      }
      .gg-content a{
          color: #f76532;
      }
      .download-gg{
        margin:20px 0;
      }
      .download-gg h2{
          margin:0;
          padding:0;
          font-size: 18px;
          font-weight:800;
      }
      .regist-buttons a{
        margin-top:5px;
        transition:all ease 0.3s;
      }
      #kefu-home-detail-open .detail-content .regist-buttons a:hover{
          background:#f76532;
          color:#fff;
      }
      .close-gg{
        height: 100%;
        font-size:14px;
        padding: 0 10px;
        color:#fff;
        position: absolute;
        right: 10px;
        top:0px;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .is-h5-yes{
        display:none !important;
    }
</style>

<div id="kefu-home-detail-open">
    <div class="detail-content">
        <h1>
            <span>BOB体育官网公告</span>  
            <small onclick="closeKEFUGG()" class="close-gg">
                关闭
            </small>
        </h1>
        <div class="gg-content">
           <p>1、【BOB体育官网公告】注册首冲联系客服送彩金<a href="${kefu_url}" target="_blank">联系客服</a> </p>
           <!--<p>2、知名平台用户可平移 赠送免费体验金 <a href="${kefu_url}" target="_blank">立即领取 </a></p>-->
           <p>2、<span style="color:red;">【备战世界杯】</span> 更多优惠彩金 限时领取 2023年1月15日</p>
           <p>3、注册、充值、提款、下载等问题，请联系网页上在线客服，能急速为您解决难题。</br>
        </div>
        
        <div class="download-gg">
            <h2>BOB体育-注册链接</h2>
            <div class="regist-buttons">
                <a onclick="ybty_visit_newopen('bobH5','6860174')" target="_blank">BOB体育-H5</a> 
                <a onclick="ybty_visit_newopen('bobApp','6860174')" target="_blank">APP下载</a>
                <a onclick="ybty_visit_newopen('bobApp','6860174')" target="_blank">苹果IOS</a>
                <a onclick="ybty_visit_newopen('bobPc','6860174')" class="${is_h5}" target="_blank">BOB体育电脑</a>
            </div>
        </div>
       <div class="download-gg">
            <h2>博鱼体育-注册链接</h2>
            <div class="regist-buttons">
                <a onclick="ybty_visit_newopen('byH5','3567222')" target="_blank">博鱼体育H5</a>
                <a onclick="ybty_visit_newopen('byApp','3567222')" target="_blank">博鱼体育APP</a>
                <a onclick="ybty_visit_newopen('byPc','3567222')" class="${is_h5}" target="_blank">博鱼体育PC</a>
               <!-- <a href="" target="_blank">永久防封</a>-->
            </div>
        </div>
        <div>
            2021年6月9日发布-BOB体育致谢！
        </div>
        <span class="close" onclick="closeKEFUGG()">
            关闭
        </span>
    </div>
</div>
<!--
<div class="kefu-img kf-item">
   <a href="https://www.baacloud34.com/shiyong.php" target="_blank">
        <div><img src="https://img.alicdn.com/imgextra/i2/2204198663261/O1CN01QuGTGV1LBa2zHGO28_!!2204198663261.jpg_430x430q90.jpg"></div>
        <div class="kf-item-text">免费VPN</div>
        <div class="kf-item-small">防止页面打不开使用</div>
   </a>
</div>-->

`;
document.body.appendChild(kefucontent);
let detailOpenDom = document.querySelector('#kefu-home-detail-open');
var closeKEFUGG = function(){
    detailOpenDom.style.display = 'none'
}
//加注代码
function ybty_visit(key,code) {
    window.location.href = ybty_link[key]+code;
}
function ybty_visit_newopen(key,code) {
    window.open(ybty_link[key]+code) 
}
function ybty_kf(url) {
    window.open(url)
}
function getMyUrl(key,code){
   return ybty_link[key]+code;
}
// function deviceYBRegist(code){
//   if(window.innerWidth<768){
//       window.open(ybty_link['bobH5']+code);
//     }else{
//       window.open(ybty_link['bobPc']+code); 
//     } 
// }
// function deviceLYRegist(code){
//   if(window.innerWidth<768){
//       window.open(ybty_link['byH5']+code); 
//     }else{
//       window.open(ybty_link['byPc']+code); 
//     }
// }

// function deviceLYRegist(code){
//   if(window.innerWidth<768){
//       window.open(ybty_link['hthH5']+code); 
//     }else{
//       window.open(ybty_link['hthPc']+code); 
//     }
// }
