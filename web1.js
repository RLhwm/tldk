

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
div.style.backgroundImage = 'url(https://res-wxqq-tldk.fengzhangame.net/1046/res/assets/ui/rolehead/27.png)'
//div.style.borderWidth = "20px";
div.style['background-size'] = "cover";
div.style['background-repeat'] = "no-repeat";
div.style.borderColor = "#000";
div.style.width = "50px";
div.style.height = "50px";
div.style.position = "absolute";
div.style['font-size'] = "20px";
div.style['text-align'] = "contain";
div.style.cursor = "pointer"
div.style.top = (document.documentElement.clientHeight - div.offsetHeight) / 2 + "px"

let disx = 0;
let disy = 0;
var flag = false;
var cur = {
    x: 0,
    y: 0
}
var nx, ny, dx, dy, x, y;
function down() {
    flag = true;
    var touch;
    if (event.touches) {
        touch = event.touches[0];
    } else {
        touch = event;
    }
    cur.x = touch.clientX;
    cur.y = touch.clientY;
    dx = div.offsetLeft;
    dy = div.offsetTop;
}
function move() {
    if (flag) {
        var touch;
        if (event.touches) {
            touch = event.touches[0];
        } else {
            touch = event;
        }
        nx = touch.clientX - cur.x;
        ny = touch.clientY - cur.y;
        x = dx + nx;
        y = dy + ny;
        div.style.left = x + "px";
        div.style.top = y + "px";
        //阻止页面的滑动默认事件
        document.addEventListener("touchmove", function () {
            event.preventDefault();
        }, false);
    }
}
function end() {
    flag = false;
}
div.addEventListener("mousedown", function () {
    down();
}, false);
div.addEventListener("click", function () {
    //alert("aa");
    //打开菜单();
}, false);
div.addEventListener("touchstart", function () {
    down();
}, false)
div.addEventListener("mousemove", function () {
    move();
}, false);
div.addEventListener("touchmove", function () {
    move();
}, false)
document.body.addEventListener("mouseup", function () {
    end();
}, false);
div.addEventListener("touchend", function () {
    end();
}, false);
//div.style.z-index = "99999";	//iframe的z-index设为-1

//把div追加到body  
document.getElementsByTagName("body").item(0).appendChild(div);

//创建一个空的全部大小的div用作拖动,
kdiv = document.createElement("div");
kdiv.style.width = "100%";
kdiv.style.height = "100%";
//kdiv.style.display="none";
kdiv.addEventListener("click", function () {
    打开菜单();
});
div.appendChild(kdiv);



//用作功能
gndiv = document.createElement("div");

html = '<a style="padding: 0px 2px 0px 0px;float: right;color:#c53d43;" href="javascript:关闭菜单()">x</a><br>';
html += '<a>小叶子</a></br>';
html += '<button type="button" style="background-color:#f3bf88" onclick="shuaLC()">刷楼层数</button>';
html+='</br>';
html+='<button type="button" style="background-color:#f3bf88" onclick="每日任务()">每日任务(部分)</button>';
html+='</br>';
html+='<button type="button" style="background-color:#f3bf88" onclick="dsj()">世界BOSS</button>';
html+='</br>';
html+='<button type="button" style="background-color:#f3bf88" onclick="khb()">开红包</button>';
html+='</br>';
html+='<button type="button" style="background-color:#f3bf88" onclick="dgs()">打怪兽</button>';
html+='</br>';
html+='<button type="button" style="background-color:#f3bf88" onclick="kkc()">开卡册</button>';
html+='</br>';
html+='<button type="button" style="background-color:#f3bf88" onclick="changeHero()">变身</button>';
html+='</br>';
html+='<button type="button" style="background-color:#f3bf88" onclick="sendStr2()">功能说明</button>';
html+='</br>';


gndiv.id = "xyz";
gndiv.setAttribute("align", "center");
gndiv.style.display = "none";
gndiv.style.width = (document.documentElement.clientWidth / 3) + "px";
gndiv.style.height = (window.screen.height/2.5) + "px";
gndiv.style.background = "#9e9478"
gndiv.style.overflow = "hidden";
gndiv.style['overflow-y'] = "scroll";
gndiv.style['overflow-x'] = "hidden";


gndiv.innerHTML = html
div.appendChild(gndiv);


function 打开菜单() {
    kdiv.style.display = "none";
    gndiv.style.display = "";

}
function 关闭菜单() {
    kdiv.style.display = "";
    gndiv.style.display = "none";
}

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
    setTimeout("Msg.CG_WANBA_CDK_GET(107)", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_WANBA_VIP_FULI_GET()", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_TASK_GET(1)", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_HUNTER_GET();", time + 220);
    time = time + 220;
    setTimeout("Msg.CG_HUNTER_START();", time + 220);
    time = time + 220;;
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

function shuaLC() {
showCenterTip("自行选择圣物传送卷轴后再使用！");
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

function dsj() {
    flag5 = 0;
    showCenterTip("已开启世界BOSS抢夺\n请在主城等待活动开启");
    Msg.CG_CHAT(1,'世界BOSS冲冲冲！！！','');
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

function sendStr2(){
Msg.CG_CHAT(1,'小可爱的仙女棒','');
var str1 = 'emmmmm，没啥说的\n‘刷楼层数’字面意思，携带传送卷轴后使用，可快速增加面板探索总层数。\n‘每日任务’自动完成部分每日任务\n‘世界BOSS’请在活动开始前使用。\n‘变身’仅供自慰娱乐。\n‘开红包’自动开启1200个红包。\n‘开卡册’自动开启200个卡牌册\n‘打怪兽’自动使用350个鞭炮。\n这些都是免费功能，欲体验更多功能，请联系攻略群群主购买激活卡,创作不易，多多支持！\n(贪婪攻略群：916875699)\n‘英雄远征’、‘打BOSS’、‘水晶副本’、‘自动刷图’、‘自动刷强化石’、‘自动卡停’等功能会员专属，不支持白嫖，谢谢。'
UpNoticePanel2.instance.setMsg('功能说明', str1);
};

function khb() {
showCenterTip("1200个红包开启中···\n请勿操作背包！！！");
for(var i = 1;i<BagData.bagData.length;i++){
if(BagData.bagData[i].name=="红包"){
f=i+1;
}
};
for(var j = 1;j<1201;j++){
setTimeout("Msg.CG_ITEM_USE("+f+",0,0)",1000+220*j);
};
};
function kkc() {
showCenterTip("200个卡册开启中···\请勿操作背包！！！");
for(var i = 1;i<BagData.bagData.length;i++){
	if(BagData.bagData[i].name=="神秘卡牌册"){
	f2=i+1;
	}
	};
for(var j = 1;j<201;j++){
	setTimeout("Msg.CG_ITEM_USE("+f2+",0,0)",1000+220*j);
	};
};

function dgs() {showCenterTip("350个鞭炮使用中···\n请稍后");
for(var i = 1;i<351;i++){
setTimeout("Msg.CG_HOLIDAY_KICK_MONSTER_DO_KICK()",220*i);
};
};

function changeHero(){
showCenterTip("仅供娱乐！！！");
AttrTip.showTip(999999999);
for(var j =0;j<BagData.equipData.length;j++){
BagData.equipData[j].color=11;
}
Global.hero.zhandouli =9999999999;
UIManager.mainUI.updateZhanli();
Global.hero.atkMax = 99999999;
Global.hero.atkMin= 99999999;
Global.hero.def= 99999999;
Global.hero.baoji= 99999999;
Global.hero.chuantou= 99999999;
Global.hero.darkAtk= 99999999;
Global.hero.darkDef= 99999999;
Global.hero.fireAtk= 99999999;
Global.hero.fireDef= 99999999;
Global.hero.hp= 99999999;
Global.hero.hpRecover= 99999999;
Global.hero.hpMax= 99999999;
Global.hero.lightAtk= 99999999;
Global.hero.lightDef= 99999999;
Global.hero.luck= 99999999;
Global.hero.lv= 999;
Global.hero.magic= 99999999;
Global.hero.mpMax= 99999999;
Global.hero.mp= 99999999;
Global.hero.mpRecover= 99999999;
Global.hero.shanbi= 100;
Global.hero.waterAtk= 99999999;
Global.hero.waterDef= 99999999;
Global.hero.woodAtk= 99999999;
Global.hero.woodDef= 99999999;
Global.hero.yuanbao= 99999999;
Global.hero.yinliang= 99999999;

Global.hero._viewInfo.horse=9021

for(var i = 0;i<BagData.bagData.length;i++){
BagData.bagData[i].cnt=9999999
}
setTimeout("Msg.CG_CAVE_ENTER(1);", 3100);
setTimeout("Msg.CG_CAVE_LEAVE();Global.hero.mp= 99999999;", 3300);
};
