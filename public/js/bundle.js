!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=io("/");function o(){return navigator.mediaDevices.getUserMedia({audio:!0,video:!0})}function r(e,t){const n=document.getElementById(e);n.srcObject=t,n.play()}$("#div-chat").hide(),n.on("danh-sach-online",e=>{$("#div-chat").show(),$("#div-dangky").hide(),$("#remoteStream").hide(),e.forEach(e=>{const{peerID:t,ten:n}=e;$("#ulUser").append(`<li style="color: green;" id="${t}">${n}</li>`)}),n.on("co-nguoi-dung-moi",e=>{const{peerID:t,ten:n}=e;$("#ulUser").append(`<li style="color: green;" id="${t}">${n}</li>`)}),n.on("ai-do-ngat-ket-noi",e=>{$("#"+e).remove()})}),n.on("dang-ky-that-bai",()=>{alert("Username đã tồn tại, vui lòng chọn username khác!!!")});const i=new Peer({key:"peerjs",host:"9000-db336d0d-ebf9-4d00-bdf6-60648bd95e43.ws-us02.gitpod.io",secure:!0,port:443});i.on("open",e=>{$("#btnSignUp").click(()=>{const t=$("#txtUsername").val();n.emit("nguoi-dung-dang-ky",{peerID:e,ten:t})})}),i.on("call",e=>{$("#remoteStream").show(),o().then(t=>{e.answer(t),r("localStream",t),e.on("stream",e=>r("remoteStream",e))})}),$("#ulUser").on("click","li",(function(){const e=$(this).attr("id");$("#remoteStream").show(),o().then(t=>{r("localStream",t);i.call(e,t).on("stream",e=>r("remoteStream",e))})}))}]);