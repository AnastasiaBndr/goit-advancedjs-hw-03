import{i as d,S as m}from"./assets/vendor-DpVPnhEv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const c=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0}),f="https://pixabay.com/api/?key=38590711-cd4e1138b2603dfebaf6d7de9&";function y(i){return i.length===0?Promise.reject("Sorry, there are no images matching your search query. Please try again!"):(c.append("q",i.trim().toLowerCase()),fetch(f+c.toString()).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{d.error({message:`${e}`,closeOnClick:!0,position:"topRight",displayMode:0,progressBar:!1})}))}function g(i){return i.map(({comments:a,downloads:o,likes:t,largeImageURL:r,previewURL:s,previewWidth:L,views:u})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${r}">
                    <img
                        class="gallery-image"
                        src="${s}"
                        alt="image"
                        />
                    </a>
                    <div class="image-descriptions-container">
                        <div class="small-descriptions-container">
                            <p>Likes</p>
                            <p>${t}</p>
                        </div>
                        <div class="small-descriptions-container">
                            <p>Views</p>
                            <p>${u}</p>
                        </div>
                        <div class="small-descriptions-container">
                            <p>Comments</p>
                            <p>${a}</p>
                        </div>
                        <div class="small-descriptions-container">
                            <p>Downloads</p>
                            <p>${o}</p>
                        </div>
                    </div>
                    </li>
    `).join("")}const h=document.querySelector("form"),l=document.querySelector(".gallery"),v=document.querySelector('input[type="text"]'),p=document.querySelector(".loader");let n;const b=async i=>{i.preventDefault(),l.innerHTML="",p.classList.add("visible"),n&&n.refresh(),setTimeout(function(){y(v.value).then(e=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");l.innerHTML=g(e.hits),n=new m(".gallery a",{captions:!0,captionsData:"alt",captionSelector:"img",captionPosition:"outside",captionDelay:250,overlayOpacity:.8,styles:"../css/styles.css"})}).catch(e=>d.error({message:`${e.message?e.message:e}`,closeOnClick:!0,position:"topRight",displayMode:0,progressBar:!1,backgroundColor:"#EF4040",messageColor:"white",iconColor:"white",maxWidth:"432px"})).finally(p.classList.remove("visible"))},1e3)};h.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
