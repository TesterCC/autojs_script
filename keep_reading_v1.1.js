// keep reading v1.1.1 -- finished
var keep_time = 61;
dialogs.alert("当当刷阅读时长工具\n请确认已进入具体书籍阅读界面\n自用版本号：v1.1.1");
menu: while (true) {
    var choose = dialogs.select("请选择阅读时间", "15", "30", "45", "60","180");
    switch (choose) {
        case -1:
            toast("请选择");
            continue menu;
        case 0:
            toast("阅读15mins");
            keep_time = 15;
            break menu;
        case 1:
            toast("阅读30mins");
            keep_time = 30;
            break menu;
        case 2:
            toast("阅读45mins");
            keep_time = 45;
            break menu;
        case 3:
            toast("阅读60mins");
            keep_time = 60;
            break menu;
        case 4:
            toast("阅读180mins");
            keep_time = 180;
            break menu;

        default:
            keep_time = 61;
            break;
    }
}

console.show();
auto.waitFor();

//launch("com.dangdang.reader");

console.log("开始阅读");

function wakeup_swipe() {
    
    device.wakeUp();
    swipe(850,1200,250,1200,500);
    sleep(10000);
    swipe(850,1200,250,1200,500);
    sleep(10000);
    swipe(850,1200,250,1200,500);
    sleep(10000);
    swipe(250,1200,850,1200,500);
    sleep(10000); 
    swipe(250,1200,850,1200,500);
    sleep(10000); 
    swipe(250,1200,850,1200,500);
    sleep(10000); 
}


function start_task_reading() {

    var count = 0;

    for (var i = keep_time; i>0; i--){

        wakeup_swipe();
        count = count + 1;
        toast("count is: " + count);
        console.log("第" + count + "轮滚动");  
    }
    
    console.log("script execute finish..");
    toast("阅读任务结束");
    exit();

}

start_task_reading();