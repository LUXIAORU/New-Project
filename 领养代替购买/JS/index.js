/*  申请表格弹框 */
function openDialog(){
    document.getElementById('adoption_applycation').style.display='block';
    document.getElementById('fade').style.display='block'
}
function closeDialog(){
    document.getElementById('adoption_applycation').style.display='none';
    document.getElementById('fade').style.display='none'
}

function openHome(){
    document.getElementById('home_applycation').style.display='block';
    document.getElementById('fade').style.display='block'
}
function closeHome(){
    document.getElementById('home_applycation').style.display='none';
    document.getElementById('fade').style.display='none'
}



/*上传相片事件*/
//ondragover事件回调函数
function allowDrop(ev) {
 //解禁当前元素为可放置被拖拽元素的区域
 ev.preventDefault();
}
//ondrop事件回调函数
function fileDrop(e) {
	//解禁当前元素为可放置被拖拽元素的区域
    e.preventDefault();
	
	//获取图片展示区域对象output
    var output = document.getElementById("output");
	//将图片展示区域的内容清空
    output.innerHTML = "";

    //获取从本地拖拽放置的文件对象数组files
	var files = e.dataTransfer.files;

	//使用for循环遍历同时被拖拽并放置到指定区域的所有文件
    for (var i = 0,f; f = files[i]; i++) {
		//(1)创建带有相框的图片
		//获取当前图片文件的URL来源
        var imgURL = window.webkitURL.createObjectURL(f);
        //创建图片对象img
		var img = document.createElement("img");
		//设置图片对象img的src属性为当前图片文件URL地址
        img.setAttribute("src", imgURL);
		//设置图片对象img的宽度为330像素
        img.setAttribute("width", "300");
		//设置图片对象img的高度为270像素
        img.setAttribute("height", "200");

        //设置相框对象photo
		var photo = document.createElement("div");
		//为相框对象添加class="photoframe",以加载相框背景图片
        photo.setAttribute("class", "photoframe");
		//将图片添加相框对象中
/*                    photo.appendChild(img);*/

        //设置相框对象photo
		var photo = document.createElement("div");
		//为相框对象添加class="photoframe",以加载相框背景图片
        photo.setAttribute("class", "photoframe");
		//将图片添加相框对象中
        photo.appendChild(img);

		output.appendChild(photo);
    }
}



//画布实现绘制文字
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.font="48px 华文琥珀";//设置字体
ctx.fillStyle = "#fb623a";
ctx.fillText("宠物领养/找家",10,100,280);

var canvas=document.getElementById("About-Us");
var ctx=canvas.getContext("2d");
ctx.font="48px 华文琥珀";//设置字体
ctx.fillStyle = "#fff";
ctx.fillText("关于我们",10,130,300);

var canvas=document.getElementById("About-Web");
var ctx=canvas.getContext("2d");
ctx.font="48px 华文琥珀";//设置字体
ctx.fillStyle = "#fff";
ctx.fillText("关于网站",10,130,300);

var canvas=document.getElementById("message-board");
var ctx=canvas.getContext("2d");
ctx.font="48px 华文琥珀";//设置字体
ctx.fillStyle = "#fff";
ctx.fillText("留言板",10,130,300);



//从Web存储中读取页面访问次数
var count1 = localStorage.getItem('count1');

//判断如果数据为空，则初始化为0
if (count1 == null)
    count1 = 0;

//在页面上显示数据
document.getElementById("time1").innerHTML = count1;
//使用Web存储技术保存页面访问次数
localStorage.setItem('count1', parseInt(count1) + 1);

function MessageInfo() {
    var lStorage = window.localStorage;
    var message_2 = window.document.getElementById("message_2");
    if (window.localStorage.myBoard) {
        message_2.value = window.localStorage.myBoard;
    }
    else {
        var info = "还没有留言";
        message_2.value = "还没有留言";
    }
}

function AddInfo() {
    var info = window.document.getElementById("message_1");
    var lStorage = window.localStorage;
    if (lStorage.myBoard) {
        var date = new Date();
        lStorage.myBoard += message_1.value + "\n发表时间：" + date.toLocaleString() + "\n";
    }
    else {
        var date = new Date();
        lStorage.myBoard = message_1.value + "\n发表时间：" + date.toLocaleString() + "\n";
    }
    MessageInfo();
}
function ClearInfo() {
    window.localStorage.removeItem("myBoard");
    MessageInfo();
}
MessageInfo();

