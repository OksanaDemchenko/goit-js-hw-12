import{a as S,S as q,i as a}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const E="52715870-cb8cb03de1263a77a911b462a",B="https://pixabay.com/api/";async function y(s,t=1,r=15){try{return(await S.get(B,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:r}})).data}catch(n){throw console.error("Помилка запиту:",n),n}}const g=document.querySelector(".gallery"),h=document.querySelector(".controls"),c=h.querySelector(".loader"),L=h.querySelector(".load-more"),x=new q(".gallery a",{captionsData:()=>"",captionDelay:250});function w(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="" loading="lazy">

          <div class="gallery-categories">
            <span>Likes</span>
            <span>Views</span>
            <span>Comments</span>
            <span>Downloads</span>
          </div>

          <div class="gallery-stats">
            <span>${r.likes}</span>
            <span>${r.views}</span>
            <span>${r.comments}</span>
            <span>${r.downloads}</span>
          </div>
        </a>
      </li>
    `).join("");g.insertAdjacentHTML("beforeend",t),x.refresh()}function M(){g.innerHTML=""}function b(){c.textContent="Loading images, please wait...",c.style.display="block"}function d(){c.textContent="",c.style.display="none"}function P(){L.style.display="inline-block"}function v(){L.style.display="none"}const m=document.querySelector(".form"),$=document.querySelector(".load-more");let l="",i=1;const u=15;let f=0;m.addEventListener("submit",async s=>{if(s.preventDefault(),l=m.elements["search-text"].value.trim(),!l){a.warning({title:"Empty request",message:"Please enter a search term."});return}M(),i=1,v(),b();try{const t=await y(l,i,u);if(d(),t.hits.length===0){a.warning({title:"No results",message:"Sorry, no images found for your request."});return}w(t.hits),f=t.totalHits,i*u<f?P():a.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0})}catch{d(),a.error({title:"Error",message:"Something went wrong. Please try again later."})}});$.addEventListener("click",async()=>{i+=1,b();try{const s=await y(l,i,u);d(),w(s.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),i*u>=f&&(v(),a.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0}))}catch{d(),a.error({title:"Error",message:"Failed to load more images."})}});
//# sourceMappingURL=index.js.map
