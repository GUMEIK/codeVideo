import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React, { Component } from 'react'    
import style from './index.css'
import ModalCom from '../modal'
import {store} from '../../store/store'
// 头部菜单
const { Header, Footer, Sider, Content } = Layout;
class LayoutCom extends Component {
    render() {
        return (
        <Layout >
            <Header 
            style={{
                backgroundColor:"#fff",
                height:"55px"
            }}
            >
            {this.props.Header}
            </Header>
            <Layout
            style={{
                position:"fixed",
                top:55,
                right:0,
                bottom:0,
                left:0
            }}
            >
                <Sider
                collapsible={true}
                theme="light"
                style={{backgroundColor:"#fff",overflow:"hidden"}}
                >
                    {this.props.leftMenu}
                </Sider>
                <Content>
                    {/* <ModalCom/> */}
                    {this.props.isShowModal && <ModalCom/>}
                    {this.props.content}
                </Content>    
            </Layout>
            {/* <Footer>Footer</Footer> */}
        </Layout>
        )
    }
}

function mapStateToProps(state){
    return{
        isShowModal:state.videoControl.isShowModal,
        source:state.videoControl.url
    }
  }
  function mapDispatchToProps(dispatch){
    return {
        show(){
            dispatch({
              type:"show"
            });
        },
        hide(){
            dispatch({
              type:"hide"
            });
        }
    }
  }
  
  export default class LayoutComWrapper extends React.Component{
    state = mapStateToProps(store.getState())
    constructor(props){
        super(props);
        store.subscribe(()=>{
            console.log(store.getState())
            this.setState(mapStateToProps(store.getState()));
        })
    }
    render(){
        const event = mapDispatchToProps(store.dispatch)
        return (
                <LayoutCom  {...this.props} {...this.state} {...event}/>
        )
    }
  }
  