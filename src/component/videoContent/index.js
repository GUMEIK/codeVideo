import React, { Component } from 'react'
import CardCom from '../card'
import {returnArrVideoContent} from '../../static/js/videoContent'
import {store} from '../../store/store'
 class VideoContent extends Component {
    render() {
        console.log(returnArrVideoContent(this.props.videoContent))
        let videoContentArr = returnArrVideoContent(this.props.videoContent);
        return (
            <div  style={{
                display:"flex",
                justifyContent:"space-around",
                flexWrap:"wrap"
            }}>
                { 
                    // 生成视频页
                    videoContentArr && videoContentArr.map((el,index)=><CardCom
                    title={el.title}
                    description={el.description}
                    source={el.source}
                    key={index}
                    />)
                }  
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        videoContent:state.videoContent
    }
  }
  function mapDispatchToProps(dispatch){
    return {
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
                <VideoContent {...this.state} {...event}/>
        )
    }
  }

//   root
// www.xxx.com/fjkj/fjkjadk