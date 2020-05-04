export let showModalType = "show";
export let hideModalType = "hide";
export let urlSourceType = "url"
function createShowAction(){
    return {
        type:showModalType
    }
}

function createHideAction(){
    return {
        type:hideModalType
    }
}

export function createUrlSourceAction(url){
    return {
        type:urlSourceType,
        payload:url
    }
}