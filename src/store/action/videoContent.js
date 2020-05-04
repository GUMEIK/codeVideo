export let changeContentType = "changeVideoContentType";

// 传入要切换的内容
export function createChangeContentAction(stringContent){
    return {
        type:changeContentType,
        payload:stringContent
    }
}