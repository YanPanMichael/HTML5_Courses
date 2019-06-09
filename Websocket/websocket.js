var socket;
var t;
var MAX = 3;
var count = 0;

// readyState属性返回实例对象的当前状态，共有四种: 
// CONNECTING：值为0，表示正在连接。
// OPEN：值为1，表示连接成功，可以通信了。
// CLOSING：值为2，表示连接正在关闭。
// CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
var reconnection = function() {
  count = count + 1;
  console.log("reconnection...【" + count + "】");
  //1与服务器已经建立连接
  if (count >= MAX || socket.readyState === 1) {
    clearTimeout(t);
  } else {
    //3已经关闭了与服务器的连接
    if (socket.readyState === 3) {
      connection();
    }
    //0正尝试与服务器建立连接,2正在关闭与服务器的连接
    t = setTimeout(function() {
      reconnection();
    }, 100);
  }
};

var onopen = function() {
  console.log("open...");
};

var onclose = function() {
  console.log("close...");
};

var onmessage = function(e) {
  console.log("message...");
  if (e.data === "") return;
  var toUserId = document.getElementById("toUserId").value;
  document.getElementById("content").innerHTML =
    document.getElementById("content").innerHTML +
    "<br/>" +
    toUserId +
    "说：" +
    e.data;
  console.log(toUserId + "说：" + e.data);
};

var onerror = function() {
  console.log("error...");
  reconnection();
};

var connection = function() {
  var url =
    "ws://" + window.location.host + "/ycxcode/websocket/commodity";
  socket = new WebSocket(url);
  socket.onopen = onopen;
  socket.onmessage = onmessage;
  socket.onclose = onclose;
  socket.onerror = onerror;
};
