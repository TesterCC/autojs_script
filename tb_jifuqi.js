// 浏览速度速度
var speed = 1;

dialogs.alert("请确认无障碍和悬浮窗权限已开启\n自用版本号：v0.1.1");
menu: while (true) {
    var choose = dialogs.select("请根据你的手机性能(卡不卡)以及网速选择速度", "最快", "正常", "略慢", "最慢");
    switch (choose) {
        case -1:
            toast("请选择");
            continue menu;
        case 0:
            toast("即将快速执行脚本");
            speed = 0.75;
            break menu;
        case 1:
            toast("即将一般速度执行脚本");
            speed = 1;
            break menu;
        case 2:
            toast("即将低速执行脚本");
            speed = 1.5;
            break menu;
        case 3:
            toast("即将缓慢执行脚本");
            speed = 2;
            break menu;

        default:
            break;
    }
}

console.show();

// main logic
auto.waitFor();
 
var height = device.height;
 
var width = device.width;
 
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release)
 
setScreenMetrics(width, height);
 
toast("设备高"+height);
 
autoplay();
 
 
function swipe22s(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(speed*random(900,1500));
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(speed*2500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(speed*random(6500,10000));
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(speed*8000);
        if(textContains("完成").exists()){
            back();
        } else {
        sleep(speed*2200);
        back();
        }
        sleep(speed*random(700,1500));
    }
    toast("完成[" + act + "]检测");
    sleep(speed*random(1800,2000));
}
 
    
function autoplay(){
    if(textEndsWith("签到").exists()){
        textEndsWith("签到").findOne().click();
        sleep(speed*1600);
        toast("签到成功");
    }
    sleep(speed*random(1600,2000));
    toast("完成[签到]检测");
 
    swipe22s("去浏览");
    swipe22s("去搜索");
    
    toast("结束");
}