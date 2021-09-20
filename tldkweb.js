

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
html += '<button type="button" style="background-color:#f3bf88" onclick="showCenterTip(Global.hero.name);">点我摸一次鸡儿</button>';

gndiv.id = "xyz";
gndiv.setAttribute("align", "center");
gndiv.style.display = "none";
gndiv.style.width = (document.documentElement.clientWidth / 4) + "px";
gndiv.style.height = (document.documentElement.clientWidth / 2) + "px";
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
