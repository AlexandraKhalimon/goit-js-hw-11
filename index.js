import{a as f,S as h,i as l}from"./assets/vendor-67BWzQEt.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(o){return f.get("https://pixabay.com/api/",{params:{key:"50859517-961673cab883b3cd43a6fc51d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{console.log(t)})}function p(o){const i=document.querySelector(".gallery"),t=o.map(({largeImageURL:a,webformatURL:e,tags:r,likes:s,views:n,comments:d,downloads:u})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${a}">
                    <img class="card-img" src="${e}" alt="${r}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${s}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${n}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${d}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${u}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`).join("");i.innerHTML=t,y()}let c=null;function y(){if(c)return c.refresh();c=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function S(){document.querySelector(".loader").classList.add("hidden")}const q=document.querySelector(".form"),b=document.querySelector("input");q.addEventListener("submit",v);function v(o){o.preventDefault();const i=b.value.trim();if(!i){l.warning({message:"Sorry, fill in the search query to start work.",position:"topRight"});return}L(),g(),m(i).then(t=>{if(t.hits.length===0)return l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});p(t.hits)}).catch(t=>{console.log(t.message),l.error({message:`Error:${t.message}`,color:"red",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
