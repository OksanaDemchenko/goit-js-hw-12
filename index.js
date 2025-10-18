import{a as q,S as M,i as l}from"./assets/vendor-BNibzuFn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const B="52715870-cb8cb03de1263a77a911b462a",$="https://pixabay.com/api/";async function v(s,e=1,o=15){try{return(await q.get($,{params:{key:B,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o}})).data}catch(i){throw console.error("Помилка запиту:",i),i}}const f=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".load-more"),h=new M(".gallery a",{captionsData:"alt",captionDelay:250}),a=document.createElement("div");a.classList.add("load-more-text");a.textContent="Images are loading, please wait...";a.style.display="none";a.style.textAlign="center";a.style.marginTop="8px";n&&n.insertAdjacentElement("afterend",a);function x(s){if(!f)return;const e=s.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy"/>
        </a>
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
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),g()}function P(){f&&(f.innerHTML="")}function A(){c&&(c.textContent="Images are loading, please wait...",c.classList.add("active"))}function L(){c&&(c.textContent="",c.classList.remove("active"))}function E(){n&&(n.style.display="block")}function S(){n&&(n.style.display="none")}function C(){n&&(n.style.display="none"),a&&(a.style.display="block")}function w(){n&&(n.style.display="block"),a&&(a.style.display="none")}function g(){h&&h.refresh()}const b=document.querySelector(".form"),I=document.querySelector(".load-more");let u="",d=1;const p=15;let y=0;b.addEventListener("submit",async s=>{if(s.preventDefault(),u=b.elements["search-text"].value.trim(),!u){l.warning({title:"Empty request",message:"Please enter a search term."});return}P(),d=1,S(),A();try{const e=await v(u,d,p);if(L(),e.hits.length===0){l.warning({title:"No results",message:"Sorry, no images found for your request."});return}x(e.hits),g(),y=e.totalHits,d*p<y?E():l.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0})}catch(e){L(),l.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(e)}});I.addEventListener("click",async()=>{d+=1,C();try{const s=await v(u,d,p);w(),x(s.hits),g();const e=document.querySelector(".gallery .gallery-item");if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}d*p>=y?(S(),l.info({title:"End of results",message:"You've reached the end of search results.",position:"bottomLeft",timeout:5e3,close:!0})):E()}catch(s){w(),l.error({title:"Error",message:"Failed to load more images."}),console.error(s)}});
//# sourceMappingURL=index.js.map
