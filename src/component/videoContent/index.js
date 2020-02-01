import React, { Component } from 'react'
import CardCom from '../card'
import {contentArr,dealVideoContent,returnArrVideoContent} from '../../static/js/videoContent'
export default class VideoContent extends Component {
    render() {
        console.log(returnArrVideoContent("redux"))
        return (
            <div  style={{
                display:"flex",
                justifyContent:"space-around",
                flexWrap:"wrap"
            }}>
                { 
                    // 生成视频页
                    contentArr.map((el,index)=><CardCom
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
