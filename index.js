import{a as n,S as d,i as u}from"./assets/vendor-67BWzQEt.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(o){return n.get("https://pixabay.com/api/",{params:{key:"50859517-961673cab883b3cd43a6fc51d",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log(r)})}function h(o){return o.map(({largeImageURL:i,webformatURL:r,tags:a,likes:e,views:t,comments:s,downloads:c})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${i}">
                    <img class="card-img" src="${r}" alt="${a}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${e}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${t}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${s}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${c}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`).join("")}let l=null;function m(){if(l)return l.refresh();l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function p(){const o=document.querySelector(".gallery");o.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("hidden")}function g(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".form"),S=document.querySelector("input"),b=document.querySelector(".gallery");L.addEventListener("submit",q);function q(o){o.preventDefault();const i=S.value.trim();y(),p(),setTimeout(()=>{f(i).then(r=>{if(r.hits.length===0)return u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});b.innerHTML=h(r.hits),m()}).catch(r=>{console.log(r.message)}).finally(()=>{g()})},1e3)}
//# sourceMappingURL=index.js.map
