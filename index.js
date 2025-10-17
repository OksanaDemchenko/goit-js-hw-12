import{a as E,S as m,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const $="52715870-cb8cb03de1263a77a911b462a",x="https://pixabay.com/api/";async function g(s,t=1,o=15){try{return(await E.get(x,{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}})).data}catch(a){throw console.error("Помилка запиту:",a),a}}const h=document.querySelector(".gallery"),w=document.querySelector(".controls"),c=w.querySelector(".loader"),L=w.querySelector(".load-more");let B=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const t=s.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy">

          <div class="gallery-categories">
            <span>Likes</span>
            <span>Views</span>
            <span>Comments</span>
            <span>Downloads</span>
          </div>

          <div class="gallery-stats">
            <span>${o.likes}</span>
            <span>${o.views}</span>
            <span>${o.comments}</span>
            <span>${o.downloads}</span>
          </div>
        </a>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){h.innerHTML=""}function v(){c.textContent="Loading images, please wait...",c.style.display="block"}function d(){c.textContent="",c.style.display="none"}function P(){L.style.display="inline-block"}function S(){L.style.display="none"}const y=document.querySelector(".form"),C=document.querySelector(".load-more");let l="",i=1;const u=15;let f=0,q=new m(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",async s=>{if(s.preventDefault(),l=y.elements["search-text"].value.trim(),!l){n.warning({title:"Empty request",message:"Please enter a search term."});return}M(),i=1,S(),v();try{const t=await g(l,i,u);if(d(),t.hits.length===0){n.warning({title:"No results",message:"Sorry, no images found for your request."});return}b(t.hits),q.refresh(),f=t.totalHits,i*u<f?P():n.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0})}catch{d(),n.error({title:"Error",message:"Something went wrong. Please try again later."})}});C.addEventListener("click",async()=>{i+=1,v();try{const s=await g(l,i,u);d(),b(s.hits),q.refresh();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),i*u>=f&&(S(),n.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0}))}catch{d(),n.error({title:"Error",message:"Failed to load more images."})}});
//# sourceMappingURL=index.js.map
