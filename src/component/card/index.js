import { Card } from 'antd';
import React, { Component } from 'react'
import {store} from '../../store/store'
import {createUrlSourceAction} from '../../store/action/video'
const { Meta } = Card;
class CardCom extends Component {
    render() {
        return (
        <div>
            <Card
            onClick={()=>{
                // 1.使modal显示
                // 2.将url传递给视频组件
                console.log(this.props.source)
                // store.dispatch(createUrlSourceAction("http://www.msse.vip/video/test.mp4"))
                this.props.changeUrl(this.props.source);
                // this.props.show()
            }}
            hoverable
            style={{ width: 240,margin:15 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title={this.props.title} description={this.props.description} />
            </Card>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isShowVideoModal:state.isShowModal
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
            })
        },
        changeUrl(URL){
            dispatch(createUrlSourceAction(URL))
        }
    }
  }


  export default class CardComWrapper extends React.Component{
    state = mapStateToProps(store.getState())
    constructor(props){
        super(props);
        store.subscribe(()=>{
            this.setState(mapStateToProps(store.getState()));
        })
    }
    render(){
        const event = mapDispatchToProps(store.dispatch)
        return (
                <CardCom {...this.props} {...this.state} {...event}/>
        )
    }
  }
  