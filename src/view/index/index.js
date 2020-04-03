/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-16 16:17:45
 * @LastEditors: your name
 * @LastEditTime: 2020-04-03 11:47:46
 */
import React from 'react'
import './index.less'
import { getLatestRelease, findDictByType, applicationForEntry, getCodeInfo, increaseClickRate } from "@/api/index.js"
import tsIcon from '@/asstes/images/logo@2x.png';
import topLogo from '@/asstes/images/bnner.png';
import juhepingtai from '@/asstes/images/juhepingtai.png';
import shangdian from '@/asstes/images/shangdian.png';
import yaoqinghaoyou from '@/asstes/images/yaoqinghaoyou.png';
import { Toast } from 'antd-mobile';
import xingming from '@/asstes/images/xingming.png';
import shouji from '@/asstes/images/shouji.png';
import tianxie from '@/asstes/images/tianxie.png';
import call from '@/asstes/images/phone.png';
function isWeiXin () {
  if (navigator.userAgent.match(/(MicroMessenger|micromessenger);?/i)) {
    return true; // 是微信端
  } else {
    return false;
  }
}
let s = decodeURIComponent(window.location.search);
function GetQueryString (url) {
  // eslint-disable-next-line no-new-object
  var obj = new Object();
  var scan_url = url.split("?")[1];
  var strs = scan_url.split("&");
  for (var x in strs) {
    var arr = strs[x].split("=");
    obj[arr[0]] = arr[1];
  }
  return obj;
}
//检测是否在微信
class Mask extends React.Component {
  render () {
    return <div className="mask" onClick={this.props.onClick}>
      <img src={tsIcon} alt="" className="shareLogo" />
    </div>
  }
}

//功能列表
class List extends React.Component {
  render () {
    return <div className="listWrap">
      <div className="list">
        <img src={shangdian} alt="" className="list-logo" />
        <p className="list-title">全流程信息化服务助力实体门店降本增效</p>
      </div>
      <div className="list">
        <img src={juhepingtai} alt="" className="list-logo" />
        <p className="list-title">蜂火侠异业联盟消费优惠聚合平台</p>
      </div>
      <div className="list">
        <img src={yaoqinghaoyou} alt="" className="list-logo" />
        <p className="list-title">邀请好友成功即获得返现金、体验金</p>
      </div>
    </div>
  }
}

//form表单
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      name: '',
      content: '',
      limit: 11
    }
    this.setPhone = this.setPhone.bind(this)
    this.setName = this.setName.bind(this)
    this.setContent = this.setContent.bind(this)
  }
  setName (event) {
    let value = event.target.value
    this.setState({
      name: value
    })
  }
  setContent (event) {
    let value = event.target.value
    this.setState({
      content: value
    })
  }
  setPhone (event) {
    let value = event.target.value
    if (!isNaN(value)) {
      value.length > this.limit ? this.setState({
        phone: value.slice(0, this.limit)
      }) : this.setState({
        phone: value
      });
    }
  }
  render () {
    return <div className="table">
      <div className="tab-item">
        <img src={xingming} alt="" className="tab-logo" />
        <input type="text" className="tab-input" placeholder="请填写姓名" onChange={this.setName} value={this.state.name} />
      </div>
      <div className="tab-item">
        <img src={shouji} alt="" className="tab-logo" />
        <input type='text' pattern="[0-9]*" maxLength="11" className="tab-input" placeholder="请填写手机号码" onChange={this.setPhone} value={this.state.phone} />
      </div>
      <div className="tab-item">
        <img src={tianxie} alt="" className="tab-logo" style={{ alignSelf: "start", marginTop: '15px' }} />
        <textarea maxLength="50" className="tab-txet" placeholder="请填写咨询内容" onChange={this.setContent} value={this.state.content} />
      </div>
    </div>
  }
}

//首页组件
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      inviteCode: '',
      tel: '17633369350'
    }
    this.child = React.createRef();
    this.onloadDown = this.onloadDown.bind(this)
    this.hideShow = this.hideShow.bind(this)
    this.getData = this.getData.bind(this)
  }
  componentDidMount () {
    findDictByType({
      type: 'inviteCodePhone'
    }).then((result) => {
      if (result) {
        this.setState({
          tel: result.result.dictDetailList[0].value
        })
      }
    }).catch((err) => {

    });
    console.log(s)
    if (s) {
      if (GetQueryString(s)['param']) {
        getCodeInfo({
          param: GetQueryString(s)['param']
        }).then((result) => {
          if (result) {
            this.setState({
              inviteCode: result.result.inviteCode
            })
            this.count(1)
          }
        }).catch((err) => {

        });
      }
    }

  }
  getData () {
    const { phone, name, content } = this.child.current.state
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
      Toast.fail('手机号输入有误!', 2);
      this.child.current.setState({
        phone: '',
      })
      return false;
    }
    if (!name) {
      Toast.fail('请输入您的姓名!', 2);
      return false;
    }
    if (this.state.inviteCode) {
      this.count(2)
    }
    applicationForEntry({
      phone, contactName: name, content
    }).then((result) => {
      Toast.success('申请成功!', 2);
    }).catch((err) => {

    });
  }
  count (type) {
    increaseClickRate({
      inviteCode: this.state.inviteCode,
      type: type
    }).then((result) => {

    }).catch((err) => {

    });
  }
  onloadDown (e) {
    e.preventDefault();
    if (this.state.inviteCode) {
      this.count(3)
    }
    if (isWeiXin()) {
      this.setState(state => ({
        show: true
      }))
    } else {
      getLatestRelease({
        appDictId: 3
      }).then((result) => {
        if (result) {
          if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            window.location.href = result.result.iosUrl; //ios app协议
          }
          if (navigator.userAgent.match(/android/i)) {
            window.location.href = result.result.androidUrl; //android 下载地址
          }
        }
      }).catch((err) => {

      });
    }

  }
  hideShow (e) {
    this.setState((state) => ({
      show: false
    }))
  }
  render () {
    return <div className="wrap">
      <img src={topLogo} alt="" className="toplogo" onClick={this.onloadDown} />
      <List />
      {this.state.show && <Mask onClick={this.hideShow} />}
      <Form ref={this.child} />
      <div className='button-transparent' onClick={this.getData}>申请入驻</div>
      <div className="telInfo" onClick={() => {
        if (this.state.inviteCode) { this.count(4) }
      }}>
        <div className="showTel">联系电话：{this.state.tel}</div>
        <a href={`tel:${this.state.tel}`} className="call">
          <div className="call">
            <img src={call} alt="" className="callLogo" />
          拨号咨询
          </div>
        </a>
      </div>
    </div>
  }
}

export default Index;