const sInfor = document.getElementById("search");
const sBaidu = document.getElementById("baidu");
const sGoogle = document.getElementById("google");
const sBing = document.getElementById("bing");
const sGitHub = document.getElementById("github");
const sScholar = document.getElementById("scholar");
const sZhihu = document.getElementById('zhihu');
const sPaper = document.getElementById('paperswithcode');
const sPan = document.getElementById('wangpan');
const sTaoBao = document.getElementById('taobao');
const sYouTube = document.getElementById('youtube')
const sBilibili = document.getElementById("bilibili");
const sFanyi = document.getElementById("fanyi");


//isEmpty;
let isEmpty = function (obj) {
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
        return true;
    }
    if (typeof obj === 'string') {
        let reg = new RegExp("^([ ]+)|([　]+)$");
        //判断有空格，如果有空格，删除左边空格；
        if (reg.test(obj)) {
            obj = obj.replace(/(^\s*)/g, "");
        }

        if (obj === "") {
            return true;
        }


    }
    return false;
}
//doAction 搜索跳转方法
/*  
p：搜索网址前段 
n: 搜到网址后段
h: 搜索首页
*/
let doAction = function (p, n, s) {
    if (isEmpty(sInfor.value)) {
        window.open(s);
    } else {
        window.open(p + sInfor.value + n);
    }

}

//拼接网址
let p = '';
let n = '';
let s = ''

//快捷键
document.onkeydown = function (e) { // 回车提交表单
    // 兼容FF和IE和Opera
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) { // Search
        p = 'https://cn.bing.com/search?q=';
        n = '&ensearch=1&FORM=BESBTB'
        s = 'https://www4.bing.com/?scope=web&FORM=BESBTB';
        doAction(p, n, s);

    }

    else if (code == 112 && e.ctrlKey) { // Ctrl + F1, ReadPaper
        s = "https://readpaper.com/";
        window.open(s);
    }

    else if (code == 113 && e.ctrlKey) { // Ctrl + F2, 微信公众平台
        s = "https://mp.weixin.qq.com/";
        window.open(s);
    }

    else if (code == 114 && e.ctrlKey) { // Ctrl + F3, Kaggle
        s = "https://www.kaggle.com/";
        window.open(s);
    }

    else if (code == 116 && e.ctrlKey) { // Ctrl + F5, youTube
        s = "https://www.youtube.com/";
        window.open(s);
    }

    else if (code == 117 && e.ctrlKey) { // Ctrl + F6, iconfont
        s = "https://www.iconfont.cn/";
        window.open(s);
    }


    else if (code == 112 && e.shiftKey) { // Shift + F1, 腾讯云
        s = "https://cloud.tencent.com/login";
        window.open(s);
    }

    else if (code == 113 && e.shiftKey) { // Shift + F2, 阿里云
        s = "https://account.aliyun.com/login/qr_login.htm";
        window.open(s);
    }

    else if (code == 114 && e.shiftKey) { // Shift + F3, Ucloud
        s = "https://passport.ucloud.cn/login";
        window.open(s);
    }

    else if (code == 115 && e.shiftKey) { // Shift + F4, 华为云
        s = "https://auth.huaweicloud.com/authui/login.html#/login";
        window.open(s);
    }


}

//Google
sGoogle.onclick = function () {
    p = "https://www.google.com/search?q=";

    n = "&gws_rd=cr&nfpr=1&newwindow=1&num=30";

    s = 'https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
    doAction(p, n, s);

}

//BaiDu
sBaidu.onclick = function () {
    p = "https://www.baidu.com/s?wd=";
    doAction(p, '', p);
};

//Bing
sBing.onclick = function () {
    p = 'https://cn.bing.com/search?q=';
    n = '&ensearch=1&FORM=BESBTB'
    s = 'https://www4.bing.com/?scope=web&FORM=BESBTB';
    doAction(p, n, s);
}

//GitHub
sGitHub.onclick = function () {
    p = 'https://github.com/search?q=';
    n = '';
    s = 'https://github.com'
    doAction(p, n, s);
}

//Gitee
sScholar.onclick = function () {
    p = 'https://scholar.google.com/scholar?q=';
    n = '';
    s = 'https://scholar.google.com/'
    doAction(p, n, s);
}

//Zhihu
sZhihu.onclick = function () {
    p = 'https://www.zhihu.com/search?q=';
    n = '&type=content&utm_content=search_hot';
    s = 'https://www.zhihu.com/'
    doAction(p, n, s);
}
//jd
sPaper.onclick = function () {
    p = 'https://paperswithcode.com/search?q=';
    n = '';
    s = 'https://paperswithcode.com/'
    doAction(p, n, s);
}
//TaoBao
sTaoBao.onclick = function () {
    p = 'https://s.taobao.com/search?q=';
    n = '&taoke_type=1';
    s = 'https://s.taobao.com/';
    doAction(p, n, s);
}
//WangPan
sPan.onclick = function () {
    p = 'https://www.dashengpan.com/#/main/search?keyword=';
    n = '';
    s = 'https://www.dashengpan.com/';
    doAction(p, n, s);
}

//YouTube
sYouTube.onclick = function () {
    p = 'https://www.youtube.com/results?search_query=';
    doAction(p, n, p);
}

//Bilibili
sBilibili.onclick = function () {
    p = 'https://search.bilibili.com/all?keyword=';
    n = '';
    s = 'https://search.bilibili.com'
    doAction(p, n, s);
}

//翻译
sFanyi.onclick = function () {
    p = 'https://fanyi.baidu.com/#auto/zh/';
    n = '';
    s = 'https://fanyi.baidu.com/';
    doAction(p, n, s);
}
console.log("                                  ");
console.log("   - 欢迎来到JackCC's ToolTik -     ");
console.log("===============================");
console.log("                          ");
console.log("       Nice to meet you ~      ");
console.log("                          ");
console.log("===============================")

