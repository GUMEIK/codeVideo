const baseUrl = `http://www.msse.vip/gumeik/Files/video`
// 用对象来描述视频封面card
let contentArr = [
    {
        title:"vue课程",
        source:`${baseUrl}/redux/000%e6%ad%a4%e7%bd%91%e9%a1%b5%e9%a1%b9%e7%9b%ae%e6%a6%82%e8%bf%b0.mp4`,
        description:"描述"
    },{
        title:"react课程",
        source:`${baseUrl}/test2.mp4`,
        description:"描述"
    },{
        title:"测试",
        source:`${baseUrl}/video/test2.mp4`,
        description:"你猜我想说点儿啥"
    }
]

let testArr = [
    {
        title:"页面测试1",
        source:`${baseUrl}/test.mp4`,
        description:"描述"
    },{
        title:"页面测试2",
        source:`${baseUrl}/test2.mp4`,
        description:"描述"
    }
]
let reduxContentArr = [
    {
        title:"001 redux三大件",
        description:"初始redux",
        source:""+ baseUrl +"/redux/redux%e4%b8%89%e4%bb%b6%e5%a5%97.mp4"
    },{
        title:"002 redux-action",
        description:"了解action的多种创建形式",
        source:""+ baseUrl +"/redux/redux-action.mp4"
    },{
        title:"003 redux-store",
        description:"了解store的subscribe(订阅),全面回顾store",
        source:""+ baseUrl +"/redux/redux-store.mp4"
    },{
        title:"004 redux-reducer",
        description:"了解reducer的合并以及其原理",
        source:""+ baseUrl +"/redux/redux-reducer.mp4"
    },{
        title:"005 redux中间件之redux-logger",
        description:"了解日志redux日志记录中间件",
        source:""+ baseUrl +"/redux/redux-logger.mp4"
    },{
        title:"006 redux中间件之redux-chunk",
        description:"了解用来处理副作用的中间件，掌握副作用action的书写",
        source:""+ baseUrl +"/redux/redux-chunk.mp4"
    },{
        title:"007 redux收官",
        description:"redux核心知识回顾，框架总结",
        source:""+ baseUrl +"/redux/redux%e7%bb%93%e6%9d%9f.mp4"
    }
]
export function returnArrVideoContent(params){
    let arr;
    switch(params){
        case "redux":
            arr=reduxContentArr;
            break;
        case "test":
            arr = testArr;
            break;
    }
    return arr;
}
