!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){const n="linear";document.addEventListener("DOMContentLoaded",(function(){WebAssembly.instantiateStreaming||(WebAssembly.instantiateStreaming=async(e,t)=>{const n=await(await e).arrayBuffer();return await WebAssembly.instantiate(n,t)}),async function(){const e=new Go;let t=await WebAssembly.instantiateStreaming(fetch("generator.wasm"),e.importObject);e.run(t.instance)}().then(()=>{let e=[],t=!1;function a(a){a.length&&(e=a,async function a(r){if(t&&!0!==r)return;t=!0;const c=e[0];if(e=e.slice(1),await async function(e){let t=document.createElement("h1");t.classList.add("hidden"),t.textContent=e.text,i.appendChild(t);let a=s();a.classList.add("animate-"+e.animationDurationMs),e.animationTiming===n&&a.classList.add("animate-linear");a.classList.add("fade-out-down"),o(e.animationDurationMs).then(()=>{a.remove()}),t.classList.add("fade-in-down"),t.classList.add("animate-"+e.animationDurationMs),e.animationTiming===n&&t.classList.add("animate-linear");t.classList.remove("hidden"),await o(e.animationDurationMs),t.classList.remove("fade-in-down"),t.classList.remove("animate-"+e.animationDurationMs),t.classList.remove("animate-linear")}(c),e.length)a(!0);else if(t=!1,c.copyToClipboard){let e=s();e.title="Copy to Clipboard",e.addEventListener("click",(d=e,()=>{navigator.clipboard.writeText(d.innerText).then((function(){l.classList.add("animate-700"),l.classList.add("popup-show"),l.children[0].classList.add("animate-700"),l.children[0].classList.add("clip-show"),l.children[1].classList.add("animate-700"),l.children[1].classList.add("check-show"),o(700).then(()=>{l.classList.remove("popup-show"),l.children[0].classList.remove("clip-show"),l.children[1].classList.remove("check-show")})}),(function(e){console.error("Async: Could not copy text: ",e)}))}),!1),e.classList.add("pointer")}var d}())}const i=document.getElementById("textcontainer");function s(){return i.children[1]}function o(e){return new Promise(t=>setTimeout(t,e))}async function r(e){let t=[];for(const a of e)t.push({text:a,animationDurationMs:200,animationTiming:n,copyToClipboard:!0});a(t)}function c(e){return async()=>{let t=[];for(let n=0;n<5;n++)t.push(e());await r(t)}}document.getElementsByClassName("category animal")[0].addEventListener("click",c(NameGenerator.animal),!1),document.getElementsByClassName("category docker")[0].addEventListener("click",c(NameGenerator.dockerName),!1),document.getElementsByClassName("category marvel")[0].addEventListener("click",c(NameGenerator.marvelCharacter),!1),document.getElementsByClassName("category dc")[0].addEventListener("click",c(NameGenerator.dcCharacter),!1),document.getElementsByClassName("category game-of-thrones")[0].addEventListener("click",c(NameGenerator.got),!1),document.getElementsByClassName("category harry-potter")[0].addEventListener("click",c(NameGenerator.hp),!1),document.getElementsByClassName("category star-wars")[0].addEventListener("click",c(NameGenerator.sw),!1);let l=document.getElementById("popup");setTimeout(()=>{e.length||a([{text:"PICK A CATEGORY",animationDurationMs:500}])},1e3);let d=document.getElementsByClassName("categories")[0];d.style.opacity=1,d.classList.add("fade-in-up")})}))},function(e,t,n){}]);