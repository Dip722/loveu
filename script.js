const hearts=document.querySelector(".hearts");

function createHeart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤";

h.style.left=Math.random()*100+"%";

h.style.animationDuration=4+Math.random()*4+"s";

h.style.fontSize=18+Math.random()*28+"px";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(createHeart,250);

const btn=document.getElementById("openBtn");

const envelope=document.getElementById("envelope");

const msg=document.getElementById("loveMessage");

const music=document.getElementById("bgmusic");

btn.onclick=()=>{

music.play();

envelope.style.transform="translateY(-600px) rotate(-10deg)";

setTimeout(()=>{

envelope.style.display="none";

msg.classList.add("show");

},1200);

}

document.onclick=e=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.animationDuration="2s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},2000);

}