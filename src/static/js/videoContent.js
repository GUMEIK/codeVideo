// 用对象来描述视频封面card
let contentArr = [
    {
        title:"vue课程",
        source:"http://www.msse.vip/video/test.mp4",
        description:"描述"
    },{
        title:"react课程",
        source:"http://www.msse.vip/video/test2.mp4",
        description:"描述"
    },{
        title:"测试",
        source:"http://www.msse.vip/video/test2.mp4",
        description:"你猜我想说点儿啥"
    }
]

let testArr = [
    {
        title:"fjdakfjkhadskjfhadskjhf",
        source:"http://www.msse.vip/video/test.mp4",
        description:"描述"
    },{
        title:"react课程",
        source:"http://www.msse.vip/video/test2.mp4",
        description:"描述"
    }
]
export function returnArrVideoContent(params){
    let arr;
    switch(params){
        case "redux":
            arr=contentArr;
            break;
        case "test":
            arr = testArr;
            break;
    }
    return arr;
}
