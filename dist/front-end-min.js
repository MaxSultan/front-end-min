!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["front-end-min"]=t():e["front-end-min"]=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Mini:()=>n});const n=function(){function e(e){return new Promise(((t,n)=>{let o=new FileReader;o.onload=()=>{t(o.result)},o.onerror=e=>{n(e)},o.readAsDataURL(e)}))}function t(t){const n={};return new Promise(((o,r)=>{t.toBlob((t=>{n.objUrl=window.URL.createObjectURL(t),n.blob=t,e(t).then((e=>{n.dataUrl=e,o(n)})).catch((()=>{r(Error("could not convert to blob"))}))}),MIME_TYPE,quality)}))}function n(e,t,n,o){return new Promise(((r,i)=>{let a=new Image;a.onerror=function(){URL.revokeObjectURL(this.src),i(Error("Cannot load Image"))},a.onload=function(){URL.revokeObjectURL(this.src);const[e,i]=function(e,t,n,o){let r=e.width,i=e.height,a=r/i;const c=e=>Math.round(e*a);return t?n&&o?a>1?(i=o,r=c(o)):a<1?(i=c(n),r=n):1===a&&(o<n?(i=o,r=c(o)):(r=n,i=c(n))):!n&&o?(i=o,r=c(o)):!o&&n&&(i=c(n),r=n):n&&o?(i=o,r=n):!n&&o?i=o:!o&&n&&(r=n),[r,i]}(a,t,n,o),c=document.createElement("canvas");c.width=e,c.height=i;const d=document.createElement("canvas");d.height=.5*i,d.width=.5*e,r({canvas:c,canvas2:d,img:a,newWidth:e,newHeight:i})},a.src=window.URL.createObjectURL(e)}))}function o(e,t,n,o,r,i){return new Promise((a=>{const c=t.getContext("2d"),d=n.getContext("2d");"bi-linear"===o?c.drawImage(e,0,0,r,i):(d.drawImage(e,0,0,n.width,n.height),d.drawImage(e,0,0,.5*n.width,.5*n.height),c.drawImage(n,0,0,.5*n.width,.5*n.height,0,0,t.width,t.height)),a(t)}))}return{compressResizeBlobify:function(e,{aspectRatioPreserved:r=!0,inputWidth:i,inputHeight:a,smoothingOptions:c="bi-linear",quality:d=.7}){const s={};return new Promise(((d,l)=>{n(e,r,i,a).then((({canvas:e,canvas2:n,img:r,newWidth:i,newHeight:a})=>{o(r,e,n,c,i,a).then((e=>{s.canvas=e,t(s.canvas).then((({dataURL:e,objUrl:t,blob:n})=>{s.dataURL=e,s.objUrl=t,s.blob=n,d(s)}))}))})).catch((e=>l(e)))}))},smoothCanvas:o,resize:n,canvasToBlob:t,blobToDataUrl:e,blobToDataUrl:e}}();return t})()}));