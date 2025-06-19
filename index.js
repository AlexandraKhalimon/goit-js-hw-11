import{a as l,S as n,i as d}from"./assets/vendor-67BWzQEt.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(o){return l.get("https://pixabay.com/api/",{params:{key:"50859517-961673cab883b3cd43a6fc51d",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{console.log(t)})}function f(o){return o.map(({largeImageURL:i,webformatURL:t,tags:a,likes:e,views:r,comments:s,downloads:c})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${i}">
                    <img class="card-img" src="${t}" alt="${a}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${e}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${r}</p>
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
        </li>`).join("")}function h(){new n(".gallery a",{captionsData:"alt",captionDelay:250})}const m=document.querySelector(".form"),p=document.querySelector("input");document.querySelector("button");const y=document.querySelector(".gallery");m.addEventListener("submit",g);function g(o){o.preventDefault();const i=p.value.trim();u(i).then(t=>{if(t.hits.length===0)return d.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});console.log(t.hits),y.insertAdjacentHTML("beforeend",f(t.hits)),h()}).catch(t=>{console.log(t)})}
//# sourceMappingURL=index.js.map
