import{a as p,i as n,S as f}from"./assets/vendor-Cfo6Mknl.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH0SURBVHgB1ZpRbsIwDIYdtIpXrrSTbDcYO8HKDXajHWFHGW+UpCLD2oxaCBA7dhs+adJU0fT/SEnsggMB3vs3ANce/12BEs5B2zTNBpgsgEkI4eN4uU9QDI/ECO3f2Dwc58V4AbwQGCKdibtgeO9DHPx9xxiLZwHHwLGGY0tm4iZW4QlTCevwhInEVOEJVYmpwxMqEnOFJ4ok5g5PiCRqCU+wJGoLT2RJ1BqeuCkhDb/b+de+71+gkNxxUhJd161BGp69OiQYvnlCiZ9RNdo0T8/OuS0wkFaRksIQs2HGwaHVaAaAwX4fWtE6DZe3LY4FDEaZpQJSidLwqgJcCY3w6gK5ElrhTQTuSWiGNxO4JqEd3lQAEhLa4RFTASQloRUeGY7LfqySw2IBMeeYCtozkKitWPtEDma3UOoDW7JjTypwa7XRllAXyFkqNSVUBTjrvJaEmoBkk9KQUBEo2WFLJa4K5PbBw46MG/6aRG57+t+VjTayUwcWQv/FbeaPXdVmuWxaYILn4LmcczAbZhwd7Dq/PttwHqapP818onap/rHKxW1bq0RWeKI2CVZ4ohYJUXhibomi8MRcEirhiaklVMMTU0mYhCesJUzDE1YSpeFZPzXAgZ0D3W/Rz+DWViwBxFJCUhiyH6tIqsgMtodDfJdUtb/jJi40Hp51BAAAAABJRU5ErkJggg==";document.querySelector(".form-input");const h=15;async function u(r,e){try{const t=await p.get("https://pixabay.com/api/",{params:{key:"49360520-b72380be0a18495ea370d4b42",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:h}});if(t.data.hits.length===0)return n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:A,maxWidth:"432px"}),{totalPages:0,hits:[]};const l=parseInt(t.data.totalHits);return{totalPages:Math.ceil(l/h),hits:t.data.hits}}catch(t){return n.show({message:`An unexpected error occurred: ${t.message||t}`,backgroundColor:"#ef4040",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:A}),{totalPages:0,hits:[]}}}const w=document.querySelector(".gallery"),y=new f(".gallery-link",{captionsData:"alt"});function m(r){if(!(r===void 0||r.length===0)){const e=r.map(t=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${t.largeImageURL}">
                        <img           
                            class="gallery-image"
                            src="${t.webformatURL}"
                            alt="${t.tags}"                   
                        />
                    </a>
                    <div class="card">
                        <div class="card-item">
                            <h3 class="card-name">Likes</h3>
                            <p class="card-number">${t.likes}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Views</h3>
                            <p class="card-number">${t.views}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Comments</h3>
                            <p class="card-number">${t.comments}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Downloads</h3>
                            <p class="card-number">${t.downloads}</p>
                        </div>
                    </div>
                </li>
            `).join("");w.insertAdjacentHTML("beforeend",e),y.refresh()}}const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI5SURBVHgB7ZmBUcMwDEU/TNARwgSFCcgI3QA2gA2SDSgTdAWYoGWCwgQNE7RMIOxLDhTHie1WdtK7vrvc+S6yJVmKY8tAJIioUM++eV5wTmiDqUuJc6GZdZM9powycKaeXD1L6ke/W2BKNIYXPbPex67pk2FMlAFPDsO1oVvH+weMAdk/VO1MSXUqzZgsT6+dpV/aVUopXFlmMg/o/2hxZIUUWGZ+yWc7YJwZdT/4uJFoZo5T4kSalOM8IwZq4MwI+xJCGJHYHxNRHyWFkfNiSpp02klG1qaEKxBf+qhepeJEQQ224LOPSFD7n5L79LmGHzlrvyMer6ztteXwdWDO2m+Ix4a17yGFEVr5FeJfT8a/A58+Vz5CerS/DgpEJFSXbwpNFqcDRsocEJ9Dj24rPhEYzQFDtxUfBzLWrhAfcQf4ID+IT8Xaty7hKUbgm7XPMoUq1p67hH0c4IN8Ij4Va2c4FeMv7MxJAX3Bf+OhwWZig4Xp9d66uFKIz3iK9LHpGtzUuRzIWfsL6eC67oYEXQ5w79dIh3cEBqE2GRJhfnt0zBbeOEZukRhqlyTzPrmhFOJHug+khx9dw4oITQiTrv8WG46vUlC7AhetCuFhx5rZUdpkrno6aqMzTAu9zb5Rp8zWmaTzDSjjC0zPeI1OoWJQgtrlw6lS4MIFOcSKVDo5Q+SlCmSSha1NgKzY1lzSgZDthtjtjhjUvWXpY7Q/uxPq3qN1jKexb+d9oHovxbfDa6pvI8VL878gIll2sxgwlgAAAABJRU5ErkJggg==",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgB7VnRcYMwDFU7ASMwQkZgg3aDdoOyQdigdIJkg2SDjNAR3A0Y4RUac1GEDbZxwdzl3Tkf9ZMj23qW1BA98EB6AJC149iORo9DO3LaClpnFYb4pi2gdfQddpSUMrowEadf6dGjC6eMUoWO+x5K/y0Tm/qkFKFPn+ONzRVirqDU0ImUOXgwzF/Y/IVSgkG4uYFjvaFVYYjxeoTLBa2SEHTrxF44lY9wu802jF/RmggJCxFuDdbM0DA8m452F6wtaEwIV4dWXwvtxdz6zyruhXsQc6ZyohScmt8elhQ0JoQrQqTHWXDWETSG9U5p4BynNqB5JZtfRtBwEK4Ijx61hTuawWM7L5/NVwuvNGygtHCXEzRGhCt4JhG/jPBPjPc/zyoc6h3GLQwbKEb43c02U7c1x/lBo+LAl9hN2FSMG7fxgWfGxfWJlMgcbBTjx2l8EFgG4z4kGkebwufWnID7pHTysFPMzvk/EohZJ8FDuLEcgeNT7bqYYgvVnrZcN2dP2/mNDzwaFYv9Tts1vrGMuXUSEuhfMafxQWCjEhtBOupEI04/p5WAkDoJjvWOwzp73Dqy4KQE0fhMkT84OfT0O4cxREUBgKug4dCoeHxpY9iAUza2rCcbn8xEiibc2BvQa9obH8TMfjRIRD28EqFhTbugEUm44gtr3ERcUQTA1PhgRr2zNGBqfERsVZQ4RHgqEqef7s8/GhB6fcL1xclpm/h5bj++aLuo/j61kBW2A4XUf7J9YCv4BY5CiS+DlKsPAAAAAElFTkSuQmCC",B=document.querySelector(".form-input"),E=document.querySelector(".form-btn"),b=document.querySelector(".gallery"),d=document.querySelector(".loader"),i=document.querySelector(".gallery-btn");let s=1,c="";i.addEventListener("click",R);E.addEventListener("click",async r=>{if(r.preventDefault(),b.innerHTML="",s=1,c=B.value.trim(),i.classList.add("hidden"),!c){n.show({message:"Please enter a search query!",backgroundColor:"#ffa000",messageColor:"white",position:"topRight",transitionIn:"fadeIn",maxWidth:"432px",iconUrl:I});return}d.classList.remove("hidden");try{const e=await u(c,s);if(e.totalPages===0)return;e.totalPages>=s&&m(e.hits),e.totalPages>s&&i.classList.remove("hidden")}catch(e){n.show({message:`An unexpected error occurred: ${e.message||e}`,backgroundColor:"#ef4040",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:A})}finally{d.classList.add("hidden")}});async function R(){if(c===""){n.show({message:`An unexpected error occurred: ${error.message||error}`,backgroundColor:"#ef4040",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:A});return}d.classList.remove("hidden"),window.scrollBy({top:100,behavior:"smooth"}),i.classList.add("hidden"),s+=1;const r=await u(c,s);m(r.hits),d.classList.add("hidden"),i.classList.remove("hidden"),x(),s>=r.totalPages&&(i.classList.add("hidden"),n.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#09f",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:U}))}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*e.height,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
