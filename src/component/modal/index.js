import { Modal, Button } from 'antd';
import React from 'react'
import CardCom from '../card'
import VideoCom from '../video'
import {store} from '../../store/store'
import {Provider} from 'react-redux'
import Test from '../test'
class ModalCom extends React.Component {
  state = { visible: true };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    store.dispatch({
      type:"hide"
    })
  };

  render() {
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal with customized button props
        </Button> */}
        <Modal
          title="谷美-视频播放页"
          visible={this.state.visible}
          // visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          width="80%"
          // style={{height:"80%"}}
          // destroyOnClose={true}
        footer={null}

        >
            {/* <VideoCom/> */}
            {/* 11111111111111 */}
            <VideoCom  source={this.props.source} />
            {/* <Test/> */}
            {/* <h1>fhhdfhhfhfh</h1> */}
        </Modal>
      </div>
    );
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

export default class ModalComWrapper extends React.Component{
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
              <ModalCom  {...this.state} {...event}/>
      )
  }
}