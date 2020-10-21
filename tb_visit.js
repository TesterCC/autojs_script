var speed = 1;

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
      speed = 1.25;
      break menu;
    case 3:
      toast("即将缓慢执行脚本");
      speed = 1.5;
      break menu;

    default:
      break;
  }
}

console.show();   // print debug info
auto.waitFor();
toast("开始运行daily task脚本...");


