import React,{ReactDOM} from 'react';

import logo from './logo.svg';
import './App.css';
import HeaderMenu from './component/headerMenu'
import LayoutCom from './component/layout/index'
import LeftMenu from './component/leftMenu'
import CardCom from './component/card'
import VideoCom from './component/video'
import VideoContent from './component/videoContent'
import { Button } from 'antd';
import ModalCom from './component/modal'
import './store/store'
import {store} from './store/store'
import {Provider} from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
    <div className="App" style={{
      width:"100%",
      height:"100%"
    }}>
      {/* layout组件接受Header属性，作为头部属性 */}
     <LayoutCom 
     Header={<HeaderMenu/>}
     leftMenu={<LeftMenu/>}
    //  content={<VideoContent/>}
    // content={<VideoCom/>}
    content={
    <div>
    <VideoContent/>  
    {/* <ModalCom/> */}
    </div>
    }
     />
     
    </div>
    </Provider>
    )
  }
}

