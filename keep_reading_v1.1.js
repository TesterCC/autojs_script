// keep reading v1.1 -- finished
var keep_time = 61
dialogs.alert("当当自用刷阅读时间脚本\n请确认已进入具体书籍界面\n自用版本号：v1.1");
menu: while (true) {
    var choose = dialogs.select("请选择阅读时间", "10", "20", "30", "45");
    switch (choose) {
        case -1:
            toast("请选择");
            continue menu;
        case 0:
            toast("阅读10mins");
            keep_time = 10;
            break menu;
        case 1:
            toast("阅读20mins");
            keep_time = 20;
            break menu;
        case 2:
            toast("阅读30mins");
            keep_time = 30;
            break menu;
        case 3:
            toast("阅读45mins");
            keep_time = 45;
            break menu;

        default:
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
        console.log("count is: " + count);
        console.log("i --> " + i);  
    }
    
    console.log("script execute finish..");
    toast("阅读任务结束");
    exit();

}

start_task_reading();