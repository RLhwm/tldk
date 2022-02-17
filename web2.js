    //创建一个div  
  var div = document.createElement("div");
  div.id = "xyzxfc";
  //为div创建属性class = "viewPoint"  
  var divattr = document.createAttribute("class");
  divattr.value = "xyzxfc";
  //把属性class = "viewPoint"添加到div  
  div.setAttributeNode(divattr);

  //为div添加样式  
  var style = document.createAttribute("style");
  div.setAttributeNode(style);
  div.style.backgroundImage='url(https://res-wxqq-tldk.fengzhangame.net/1046/res/assets/ui/rolehead/27.png)'
  //div.style.borderWidth = "20px";
  div.style['background-size']="cover";
  div.style['background-repeat']="no-repeat";
  div.style.borderColor = "#000";
  div.style.width = "50px";
  div.style.height = "50px";
//头像大小
  div.style.position = "absolute";
  div.style['font-size'] = "20px";
  div.style['text-align'] = "contain";
  div.style.cursor = "pointer"
  div.style.top=(document.documentElement.clientHeight-div.offsetHeight)/2+"px"

  let disx = 0;
  let disy = 0;
  var flag = false;
    var cur = {
        x:0,
        y:0
    }
  var nx,ny,dx,dy,x,y;
  function down(){
        flag = true;
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        cur.x = touch.clientX;
        cur.y = touch.clientY;
        dx = div.offsetLeft;
        dy = div.offsetTop;
    }
    function move(){
        if(flag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            nx = touch.clientX - cur.x;
            ny = touch.clientY - cur.y;
            x = dx+nx;
            y = dy+ny;
            div.style.left = x+"px";
            div.style.top = y +"px";
            //阻止页面的滑动默认事件
            document.addEventListener("touchmove",function(){
                event.preventDefault();
            },false);
        }
    }
    function end(){
        flag = false;
    }
    div.addEventListener("mousedown",function(){
        down();
    },false);
    div.addEventListener("click",function(){
        //alert("aa");
        //打开菜单();
    },false);
    div.addEventListener("touchstart",function(){
        down();
    },false)
    div.addEventListener("mousemove",function(){
        move();
    },false);
    div.addEventListener("touchmove",function(){
        move();
    },false)
    document.body.addEventListener("mouseup",function(){
        end();
    },false);
    div.addEventListener("touchend",function(){
        end();
    },false);
  //div.style.z-index = "99999";	//iframe的z-index设为-1

  //把div追加到body  
  document.getElementsByTagName("body").item(0).appendChild(div);

  //创建一个空的全部大小的div用作拖动,
  kdiv=document.createElement("div");
  kdiv.style.width="100%";
  kdiv.style.height="100%";
  //kdiv.style.display="none";
  kdiv.addEventListener("click",function(){
        打开菜单();
    });
  div.appendChild(kdiv);


  
  //用作功能
  gndiv = document.createElement("div");
  
  html = '<a style="padding: 0px 2px 0px 0px;float: right;color:#c53d43;" href="javascript:关闭菜单()">x</a><br>';
  html+='<a>小叶子</a></br>';
  html+='<button type="button" style="background-color:#f3bf88" onclick="Boss(1)">打一次boss</button>';
html+='</br>';
  html+='<button type="button" style="background-color:#f3bf88" onclick="dyz(3)">英雄远征3</button>';
html+='</br>';
  html+='<button type="button" style="background-color:#f3bf88" onclick="dyz(4)">英雄远征4</button>';
html+='</br>';
  html+='<button type="button" style="background-color:#f3bf88" onclick="水晶副本()">水晶副本</button>';
html+='</br>';
  html+='<button type="button" style="background-color:#f3bf88" onclick="每日任务()">每日任务(部分)</button>';
html+='</br>';
  html+='<button type="button" style="background-color:#f3bf88" onclick="dsj()">世界BOSS</button>';
html+='</br>';
html += '<button type="button" style="background-color:#f3bf88" onclick="shuaLC()">刷楼层数</button>';
html+='</br>';
html += '<button type="button" style="background-color:#f3bf88" onclick="sjjl()">随机挂件</button>';
html+='</br>';
html += '<button type="button" style="background-color:#f3bf88" onclick="shuaLC()">刷楼层数</button>';
html+='</br>';
html += '<button type="button" style="background-color:#f3bf88" onclick="shuaLC()">刷楼层数</button>';
html+='</br>';
html += '<button type="button" style="background-color:#f3bf88" onclick="shuaLC()">刷楼层数</button>';
html+='</br>';
html+='</br>';
html+='</br>';
  
  gndiv.id = "xyz";
  gndiv.setAttribute("align", "center");
  gndiv.style.display="none";
  gndiv.style.width = (document.documentElement.clientWidth/3)+"px";
  gndiv.style.height = (window.screen.height/2.2)+"px";
//功能框调整宽高
  gndiv.style.background="#9e9478"
  gndiv.style.overflow="hidden";
  gndiv.style['overflow-y']="scroll";
  gndiv.style['overflow-x']="hidden";
  gndiv.style.overflow = "scroll";

  gndiv.innerHTML = html
  div.appendChild(gndiv);


function 打开菜单(){
  kdiv.style.display="none";
  gndiv.style.display="";

}
function 关闭菜单(){
  kdiv.style.display="";
  gndiv.style.display="none";
}

function Boss(lcc) {
    showCenterTip("BOSS击杀进行中······请稍后");
    MapManager.mapLv = -2;
    oopop = 0;
    flag = 0;
    flag2 = 0;
    flag3 = 0;
    breaklv = lcc;
    setInterval(function() {
        if (MapManager.mapLv > -1 && flag != 2) {
            //AutoGameManager.start();
            AutoTask.autoNext();
            Global.hero.speed = 99999;
        }
        if (MapManager.mapLv % 10 == 0) {
            flag = 1;
            flag2 = 1;
        } else if (MapManager.mapLv == -2 && flag == 1) {
            Global.hero.initPos(28, 25);
            Global.hero.end_x = Global.hero.x;
            Global.hero.end_y = Global.hero.y;
            setTimeout(" AutoGameManager.start();", 1000);
            breaklv += 10;
            flag = 2;
            setTimeout("Msg.CG_CAVE_LEAVE();", 12000);
        } else {
            if (oopop == 2) {
                AutoTask.autoNext();
                setTimeout(" AutoTask.autoNext();", 1000);
                setTimeout(" AutoTask.autoNext();", 3000);
                oopop = 1;
            }
            if (Global.hero.end_x < 0 && oopop == 0) {
                Msg.CG_CAVE_ENTER(breaklv);
                MapManager.mapLv = 2;
                oopop = 2;
            }
        }
        if (Global.hero.end_x < 0 && flag2 == 1) {
            flag2 = 2;
            flag3 = 0;
        }
    },
    2000);
};

function dyz(d) {
    showCenterTip("英雄远征进行中······请稍后");
    Msg.CG_YXYZ_QUERY(d);
    setTimeout("Msg.CG_AUTOFIGHT_FLAG(8);", 400);
    for (var i = 1; i < 21; i++) {
        if (i % 4 != 0) {

            setTimeout("Msg.CG_YXYZ_ENTER(" + d + ", " + i + ", 0, '')", 1000 + 210 * i);
        } else {
            setTimeout("Msg.CG_YXYZ_LINGQU(" + d + ", " + i + ")", 1000 + 210 * i);
        }
    };
};

function 水晶副本 () {
    showCenterTip("水晶副本进行中······请稍后");
    flag4 = 0;
    Global.hero.speed = 9999;
    setInterval(function() {
        if (MapManager.map_type == 0 && flag4 == 0) {
            Msg.CG_DAILY_COPY_ENTER(3);
            flag4 = 1;
        } else if (MapManager.map_type == 1 && flag4 == 1) {
            AutoGameManager.start();
            flag4 = 2
        }
    },
    1500);
};

function 每日任务 () {
    showCenterTip("每日任务完成中······请稍后");
    var time = 100;
    time = time + 220;
    for (var i = 1; i < 5; i++) {
        setTimeout("Msg.CG_LIANSAI_MOBAI(9," + i + ");", time + 220 * i);
    };
    time = time + 220 * i;
    for (var i = 1; i < 8; i++) {
        setTimeout("Msg.CG_SIGN_GET(1, " + i + ")", time + 220 * i);
        if (i >= 7) {
            setTimeout("Msg.CG_SIGN_GET(2,1);", time + 220 * i);
        }
    };
    time = time + 220 * i;
    setTimeout("Msg.CG_TASK_GET(1)", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_HUNTER_GET();", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_HUNTER_START();", time + 220);
    time = time + 220;
    //setTimeout("Msg.CG_HUNTER_END();", time+ 220);
    time = time + 220;
    setTimeout("Msg.CG_LIFESTONE_UP();", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_SUITEQUIP_SHOP_EXCHANGE(1, 2);", time + 220);
    time = time + 220;
    for (var i = 1; i < 11; i++) {
        setTimeout("Msg.CG_RONGLIAN_LIST([" + 1 + "]);", time + 220 * i);
    };
    time = time + 220 * i;
    setTimeout("Msg.CG_DRAW_GET(1,10)", time+ 220);
    time = time + 220;
    setTimeout("Msg.CG_STRENGTHEN_PUT(0,0);", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_BLOOD_HUNTER_OP(8, '');", time + 220);
    time = time + 220;
    for (var i = 1; i < 15; i++) {
        setTimeout("Msg.CG_TASK_GET(" + i + ")", time + 220 * i);
    };
    time = time + 220 * i;
    for (var i = 1; i < 5; i++) {
        setTimeout("Msg.CG_DEGREE_GET(" + i + ")", time + 220 * i);
    };
    time = time + 220 * i;
};

function dsj() {
    flag5 = 0;
    showCenterTip("已开启世界BOSS抢夺，请在主城等待活动开启");
    setInterval(function() {
        if (MapManager.map_type == 0 && flag5 == 0) {
            Msg.CG_ACTIVITY_ENTER(1);
        } else if (MapManager.diff == 21 && flag5 == 0) {
            Global.hero.speed = 99999;
            AutoGameManager.start();
            flag5 = 1;
        }
    },
    300);
};

function shuaLC() {
showCenterTip("自行选择圣物卷轴后再使用！");
    setInterval(function() {
        if (MapManager.map_type == 0) {
	MapManager.mapLv = 0;
	Msg.CG_CAVE_ENTER(1);
        } else if (MapManager.mapLv <3) {
	Msg.CG_SHENGWU_CAVE_USE(3,Global.hero.x,Global.hero.y);
        } else {
	Msg.CG_CAVE_LEAVE();
	}
    },
    300);
};

function sjjl() {
showCenterTip("挂件生成中······请稍后");
var num = Math.floor(Math.random() * 2) + 1;
var t = Math.floor(Math.random() * 5) + 1;
if(num==1){
Msg.CG_JINGLING_BATTLE(t)
	}else{
Msg.CG_FIGHT_JINGLING_BATTLE(t);
}
};




var rankme1=0;
function GC_WORLDBOSS_BILLBOARD_MINI(list, nameMe, rankMe) {
        UIManager.bossHp.GC_WORLDBOSS_BILLBOARD_MINI(list, nameMe, rankMe);
	//console.log(rankMe);
	rankme1 = rankMe;
    }
    ActivityHandler.GC_WORLDBOSS_BILLBOARD_MINI = GC_WORLDBOSS_BILLBOARD_MINI;


var GuildPvpResult = (function (_super) {
    __extends(GuildPvpResult, _super);
    function GuildPvpResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GuildPvpResult, "instance", {
        get: function () {
            if (GuildPvpResult._instance == null) {
                GuildPvpResult._instance = new GuildPvpResult;
            }
            return GuildPvpResult._instance;
        },
        enumerable: true,
        configurable: true
    });
    GuildPvpResult.prototype.onFirst = function () {
        var _this = this;
        this.di = new CopyOverMask;
        this.di.transparent = 0.8;
        this.addChildAt(this.di, 0);
        this.di.onClick = function () {
            _this.setVisible(false);
            //Msg.CG_CAVE_LEAVE();
        };
        this.onClick = function () {
            _this.setVisible(false);
            //Msg.CG_CAVE_LEAVE();
        };
        this.ani = new UIPart();
        this.sp.addChild(this.ani);
        this.ani.x = this.zdlupbg.x + this.zdlupbg.width / 2;
        this.ani.y = this.zdlupbg.y + this.zdlupbg.height / 2 - 200;
        this.txtGongxian.y -= 9;
        this.txtScore.y -= 9;
    };
    GuildPvpResult.prototype.onShow = function () {
        this.ani.setRes("fx/fx_zhandoujieguo");
        if (this.ret == 1) {
            this.ani.part.setAnimation(0, "shengli", false);
        }
        else {
            this.ani.part.setAnimation(0, "shibai", false);
        }
    };
    GuildPvpResult.prototype.GC_UNION_BOSS_END = function (ret, hurt, gongxian) {
        this.txtScore.text = hurt + "";
        this.txtGongxian.text = gongxian + "";
        this.ret = ret;
        this.setVisible(true);
	Msg.CG_CHAT(6,rankme1+' - '+GuildPvpResult.instance.ret+' - '+GuildPvpResult.instance.txtScore._text/100000000,'');
    };
    GuildPvpResult.prototype.onResize = function () {
        this.x = (System.stageRight - 640) / 2;
    };
    return GuildPvpResult;
}(GuildPvpResultLyt));
