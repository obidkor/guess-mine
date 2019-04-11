(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDNEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEL0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxJQUhaO0FBS0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRjZCLE1BR3JCQyxLQUhxQixHQUdYRixLQUhXLENBR3JCRSxLQUhxQjtBQUk3Qiw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBEOztBQVNPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHRCxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZZCxRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUM5QkYsU0FBUyxDQUFDZ0IsT0FBRCxFQUFVZCxRQUFWLENBRHFCO0FBQUEsQ0FBekI7Ozs7QUFHUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3V0XCIgOiBcInNlbGZcIn1cIj4ke1xuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXG4gIH06PC9zcGFuPiAke3RleHR9XG4gICAgYDtcbiAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xufTtcblxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+XG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XG5cbmlmIChzZW5kTXNnKSB7XG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcbn1cbiJdfQ==
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOGIzYjYxYjMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG4iXX0=
},{"./chat":1,"./login":3,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBSCxRQUFRLEVBQUk7QUFDeEI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTE4sRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUM1QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGNEIsTUFHcEJxQixLQUhvQixHQUdWRCxLQUhVLENBR3BCQyxLQUhvQjtBQUk1QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xuXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcblxuY29uc3QgbG9nSW4gPSBuaWNrbmFtZSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG4gIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XG59O1xuXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xufSBlbHNlIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQ2hDWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBRGdCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgMTQ5LCAwKVwiKTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

var stopPainting = function stopPainting() {
  painting = false;
};

var startPainting = function startPainting() {
  painting = true;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
};

var handleColorClick = function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var handleModeClick = function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

var handleCanvasClick = function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJJTklUSUFMX0NPTE9SIiwiQ0FOVkFTX1NJWkUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwiY29sb3IiLCJjdXJyZW50Q29sb3IiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUND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QS9CO0FBQUEsQ0FBMUI7Ozs7QUFDQSxJQUFNMkIsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHM0IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZWlCLElBQUksQ0FBQ2pCLEtBQUQsQ0FBbkI7QUFBQSxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNDb2xvclwiKTtcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcblxuY29uc3QgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XG5cbmNhbnZhcy53aWR0aCA9IENBTlZBU19TSVpFO1xuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xuXG5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuY3R4LmZpbGxTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHgubGluZVdpZHRoID0gMi41O1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBmaWxsaW5nID0gZmFsc2U7XG5cbmNvbnN0IHN0b3BQYWludGluZyA9ICgpID0+IHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn07XG5cbmNvbnN0IHN0YXJ0UGFpbnRpbmcgPSAoKSA9PiB7XG4gIHBhaW50aW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSwgY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICB9XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xufTtcblxuY29uc3Qgb25Nb3VzZU1vdmUgPSBldmVudCA9PiB7XG4gIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xuICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgaWYgKCFwYWludGluZykge1xuICAgIGJlZ2luUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlXG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUNvbG9yQ2xpY2sgPSBldmVudCA9PiB7XG4gIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbn07XG5cbmNvbnN0IGhhbmRsZU1vZGVDbGljayA9ICgpID0+IHtcbiAgaWYgKGZpbGxpbmcgPT09IHRydWUpIHtcbiAgICBmaWxsaW5nID0gZmFsc2U7XG4gICAgbW9kZS5pbm5lclRleHQgPSBcIkZpbGxcIjtcbiAgfSBlbHNlIHtcbiAgICBmaWxsaW5nID0gdHJ1ZTtcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiUGFpbnRcIjtcbiAgfVxufTtcblxuY29uc3QgZmlsbCA9IChjb2xvciA9IG51bGwpID0+IHtcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn07XG5cbmNvbnN0IGhhbmRsZUNhbnZhc0NsaWNrID0gKCkgPT4ge1xuICBpZiAoZmlsbGluZykge1xuICAgIGZpbGwoKTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuZmlsbCwgeyBjb2xvcjogY3R4LmZpbGxTdHlsZSB9KTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlQ00gPSBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5pZiAoY2FudmFzKSB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlQ00pO1xufVxuXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaChjb2xvciA9PlxuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljaylcbik7XG5cbmlmIChtb2RlKSB7XG4gIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yIH0pID0+IGZpbGwoY29sb3IpO1xuIl19
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlayerUpdate = void 0;
var board = document.getElementById("jsPBoard");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxPQUFPLEVBQUk7QUFDNUJKLEVBQUFBLEtBQUssQ0FBQ0ssU0FBTixHQUFrQixFQUFsQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3hCLFFBQU1DLGFBQWEsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FELElBQUFBLGFBQWEsQ0FBQ0UsU0FBZCxhQUE2QkgsTUFBTSxDQUFDSSxRQUFwQyxlQUFpREosTUFBTSxDQUFDSyxNQUF4RDtBQUNBWixJQUFBQSxLQUFLLENBQUNhLFdBQU4sQ0FBa0JMLGFBQWxCO0FBQ0QsR0FKRDtBQUtELENBUEQ7O0FBU08sSUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCWixVQUFVLENBQUNZLE9BQUQsQ0FBM0I7QUFBQSxDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BCb2FyZFwiKTtcblxuY29uc3QgYWRkUGxheWVycyA9IHBsYXllcnMgPT4ge1xuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICBwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGxheWVyRWxlbWVudC5pbm5lclRleHQgPSBgJHtwbGF5ZXIubmlja25hbWV9OiAke3BsYXllci5wb2ludHN9YDtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJFbGVtZW50KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBhZGRQbGF5ZXJzKHNvY2tldHMpO1xuIl19
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxPQUFPLEVBQUk7QUFBQSxnQkFDakJDLE1BRGlCO0FBQUEsTUFDNUJDLE1BRDRCLFdBQzVCQSxNQUQ0QjtBQUVwQ0wsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsc0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDJCQUEvQjtBQUNELENBVk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVOZXdNZXNzYWdlIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCwgaGFuZGxlRmlsbGVkIH0gZnJvbSBcIi4vcGFpbnRcIjtcbmltcG9ydCB7IGhhbmRsZVBsYXllclVwZGF0ZSB9IGZyb20gXCIuL3BsYXllcnNcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IGFTb2NrZXQgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICBzb2NrZXQgPSBhU29ja2V0O1xuICBzb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xuICBzb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xuICBzb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5wbGF5ZXJVcGRhdGUsIGhhbmRsZVBsYXllclVwZGF0ZSk7XG59O1xuIl19
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])