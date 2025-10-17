import{a as S,S as q,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const E="52715870-cb8cb03de1263a77a911b462a",B="https://pixabay.com/api/";async function y(s,t=1,o=15){try{return(await S.get(B,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}})).data}catch(a){throw console.error("Помилка запиту:",a),a}}const g=document.querySelector(".gallery"),h=document.querySelector(".load-more"),c=document.querySelector(".loader");function L(s){const t=s.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="" loading="lazy">

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
    `).join("");g.insertAdjacentHTML("beforeend",t)}function x(){g.innerHTML=""}function w(){c.textContent="Loading images, please wait...",c.classList.add("active")}function d(){c.textContent="",c.classList.remove("active")}function M(){h.style.display="inline-block"}function v(){h.style.display="none"}const p=document.querySelector(".form"),P=document.querySelector(".load-more");let l="",i=1;const u=15;let m=0,b=new q(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",async s=>{if(s.preventDefault(),l=p.elements["search-text"].value.trim(),!l){n.warning({title:"Empty request",message:"Please enter a search term."});return}x(),i=1,v(),w();try{const t=await y(l,i,u);if(d(),t.hits.length===0){n.warning({title:"No results",message:"Sorry, no images found for your request."});return}L(t.hits),b.refresh(),m=t.totalHits,i*u<m?M():n.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0})}catch{d(),n.error({title:"Error",message:"Something went wrong. Please try again later."})}});P.addEventListener("click",async()=>{i+=1,w();try{const s=await y(l,i,u);d(),L(s.hits),b.refresh();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),i*u>=m&&(v(),n.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0}))}catch{d(),n.error({title:"Error",message:"Failed to load more images."})}});
//# sourceMappingURL=index.js.map
