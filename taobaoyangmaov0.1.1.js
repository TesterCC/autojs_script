//淘宝养猫活动

var i = 0;
var j = 0;
var taskList = ['去搜索', '去围观', '去浏览', '去完成', '去施肥'];

// 手机高
var height = device.height; 
// 手机宽度
var width = device.width;
setScreenMetrics(width, height);

// 浏览速度速度
var speed = 1;

dialogs.alert("请确认无障碍和悬浮窗权限已开启\n自用修改版\n版本号：v0.1");
menu: while (true) {
    var choose = dialogs.select("请根据你的手机性能(卡不卡)以及网速选择速度", "都挺好的,整个快速的", "一般吧,正常执行就好", "网速有点差,稍微慢点吧", "我手机很砖,整个最慢的吧");
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
auto.waitFor();

sleep(1000 * speed);
//打开活动页面
// log("正在打开淘宝");
// launch("com.taobao.taobao");
// sleep(1000 * speed);
log("请手动点进养猫活动页面")
className("android.widget.Button").text("赚喵币").waitFor()

sleep(1000);
if (!textContains("淘宝成就点").exists()) {
    className("android.widget.Button").text("赚喵币").findOne().click()
    log("点击成功");
}
sleep(1500 * speed);
if (className("android.widget.Button").text("签到").exists()) {
    className("android.widget.Button").text("签到").click()
    sleep(200);
    log("签到成功");
} else { log("已签到"); }
sleep(1500 * speed);

taskList.forEach(task => {
    while (textContains(task).exists()) {
        log("开始做第" + (i+1) + "次任务！");
        var a = text(task).findOnce(j);
        switch (task) {
            case '去搜索':
            case '去围观':
            case '去浏览':
			case '去完成':
                sleep(500 * speed);
                a.click();
                sleep(1500 * speed);
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                sleep(2500 * speed);
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                sleep(8000 * speed);
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                textContains("完成").findOne(10000 * speed);
                i++;
                log("已完成第" + i + "次任务！")
                back();
                break;
			case '去施肥':
                sleep(500 * speed);
				className("android.widget.Button").text("施肥").findOne().click()
				log("施肥成功");
            default:
                log("default")
                break;
        }
        sleep(2000 * speed);
    }
});

log("任务貌似已经做完了\n如未完成，请重新运行");
exit();