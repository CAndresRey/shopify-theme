(()=>{var e={383:(e,t,o)=>{const{formatMoney:r}=o(557),{$Q:n,$Qll:s}=o(864),{stringToHTML:a}=o(553),{toggleDataActive:c,dataToggle:i}=o(146);e.exports={stringToHTML:a,formatMoney:r,toggleDataActive:c,dataToggle:i,$Q:n,$Qll:s}},557:e=>{function t(e,t){return void 0===e?t:e}function o(e,o,r,n){if(o=t(o,2),r=t(r,"."),n=t(n,","),isNaN(e)||null==e)return 0;const s=(e=(e/100).toFixed(o)).split(".");return s[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,`$1${r}`)+(s[1]?n+s[1]:"")}e.exports={formatMoney:(e,t)=>{"string"==typeof e&&(e=e.replace(".",""));const r=/\{\{\s*(\w+)\s*\}\}/,n=t||"${{amount}}",s=function(e,t){let r="";switch(e){case"amount":r=o(t,2);break;case"amount_no_decimals":r=o(t,0);break;case"amount_with_comma_separator":r=o(t,2,".",",");break;case"amount_no_decimals_with_comma_separator":r=o(t,0,".",",");break;default:r=""}return r}(n.match(r)[1],e);return`${n.replace(r,s).replace("$","€")} EUR`}}},864:e=>{e.exports={$Qll:(e,t)=>[...(t||document).querySelectorAll(e)],$Q:(e,t)=>(t||document).querySelector(e)}},553:e=>{e.exports={stringToHTML:e=>{if((()=>{if(!window.DOMParser)return!1;const e=new DOMParser;try{e.parseFromString("x","text/html")}catch(e){return!1}return!0})()){return(new DOMParser).parseFromString(e,"text/html").body}const t=document.createElement("div");return t.innerHTML=e,t}}},146:(e,t,o)=>{const{$Q:r}=o(864);function n(e,t){const{dataset:o,id:n}=e,a=(({active:e})=>"true"===e)(o);o.active=a?"false":"true",t&&((e,t,o)=>{const n=`overlay--${e}`,a=o.parentNode;if(t)a.removeChild(r(`#${n}`));else{const t=document.createElement("div");t.setAttribute("id",n),t.classList.add("overlay"),a.insertBefore(t,o),s(`#${n}`,`#${e}`,{overlay:!0})}})(n,a,e)}const s=(e,t,o={})=>{if(!r(e))return;const{overlay:s,closeSelector:a}=o;r(e).addEventListener("click",(()=>{n(r(t),s)})),a&&r(a).addEventListener("click",(()=>{n(r(t),s)}))};e.exports={toggleDataActive:s,dataToggle:n}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}(()=>{"use strict";var e=o(383);const t=(0,e.$Q)(".categories-menu"),r=(0,e.$Qll)(".categories-menu__item"),n=e=>{window.scrollTo({top:e,behavior:"smooth"})},s=t=>{(0,e.$Qll)(".categories-menu__item",t).forEach((e=>{e.classList.remove("isClicked")}));(0,e.$Qll)(".categories-container",t).forEach((e=>{e.classList.remove("show"),e.classList.add("hide")}))},a=e=>{const t=e.dataset.handle;e.classList.add("isClicked"),c(t)},c=e=>{const t=document.querySelector(`.categories-container[data-handle="${e}"]`);t.classList.remove("hide"),t.classList.add("show"),i()},i=()=>{const e="VOIR PLUS";document.querySelectorAll(".block-container__content").forEach((t=>{const o=t.querySelector(".block-container__description").innerHTML;if(!o.includes("<p>...</p>"))return;const[r,n]=l(o);d(t,r,n,e);t.querySelectorAll(".dots").forEach((t=>{t.onclick=()=>{u(t,"VOIR MOINS",e)}}))}))},l=e=>{const[t,o]=e.split("<p>...</p>");return[t,o]},d=(e,t,o,r)=>{e.querySelector(".block-container__description").innerHTML=`\n    ${t}\n    <span class="show">${o}</span>\n    <span class="dots">${r}</span>\n  `},u=(e,t,o)=>{const r=e.closest(".block-container__description"),n=r.querySelector(".show"),s=r.querySelector(".dots");n.classList.toggle("show-less"),s.innerText=n.classList.contains("show-less")?t:o};t&&(window.addEventListener("load",i()),r.forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentNode.parentNode;s(t),a(e),window.innerWidth<767&&n(t.offsetTop)}))})))})()})();
//# sourceMappingURL=faq.js.map