// 快捷键设置

document.onkeydown = keyDown;

function keyDown(event) {  // 检测案件
    var e = event || window.event;  // 标准化事件对象

    if (e.ctrlKey && e.keyCode == 112){ // Ctrl + F1, ReadPaper
        window.open("https://readpaper.com/");
    }
    else if (e.ctrlKey && e.keyCode == 113){ // Ctrl + F2, 微信公众平台
        window.open("https://mp.weixin.qq.com/");
    }
    else if (e.ctrlKey && e.keyCode == 114){ // Ctrl + F3, Kaggle
        window.open("https://www.kaggle.com/");
    }

    else if (e.ctrlKey && e.keyCode == 116){ // Ctrl + F5, youTube
        window.open("https://www.youtube.com/");
    }
    else if (e.ctrlKey && e.keyCode == 117){ // Ctrl + F6, iconfont
        window.open("https://www.iconfont.cn/");
    }



    else if (e.shiftKey && e.keyCode == 112){ // Shift + F1, 腾讯云
        window.open("https://cloud.tencent.com/login");
    }
    else if (e.shiftKey && e.keyCode == 113){ // Shift + F2, 阿里云
        window.open("https://account.aliyun.com/login/qr_login.htm");
    }
    else if (e.shiftKey && e.keyCode == 114){ // Shift + F3, Ucloud
        window.open("https://passport.ucloud.cn/login");
    }
    else if (e.shiftKey && e.keyCode == 115){ // Shift + F4, 华为云
        window.open("https://auth.huaweicloud.com/authui/login.html#/login");
    }


}