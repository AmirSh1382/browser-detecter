let $ = document

// functions ///////////////////////
function detectUserBrowser(){
    let browserInfo = navigator.userAgent
    let userBrowser = null

    if(browserInfo.match(/edg/i)){
        userBrowser = "edge"
    }else if (browserInfo.match(/firefox/i)){
        userBrowser = "firefox"
    }else if(browserInfo.match(/opr/i)){
        userBrowser = "opera"
    }else if(browserInfo.match(/chrome/i)){
        userBrowser = "chrome"
    }else if(browserInfo.match(/safari/i)){
        userBrowser = "safari"
    }

    let mainBrowserIcon = $.querySelector(`.${userBrowser}`)

    mainBrowserIcon ? mainBrowserIcon.style.opacity = 1 : null;
}



// eventlisteners ////////////////
window.addEventListener("load" , detectUserBrowser)