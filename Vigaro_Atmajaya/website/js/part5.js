
(()=>{const M=document.getElementById('main');
const bar=document.createElement('div');bar.id='vgp';document.body.appendChild(bar);
const names=['Website Bisnis','Toko Online','Undangan Digital','Web App & Sistem','Chatbot AI','Monitoring IoT','Hak Cipta & Merek'];
const mq=document.createElement('div');mq.id='vgmq';const row=names.map(n=>'<span>'+n+' <i>✦</i></span>').join('');mq.innerHTML='<div>'+row+row+row+row+'</div>';
const ft=document.querySelector('footer');ft&&ft.parentNode.insertBefore(mq,ft);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
const _vc=window.vcards;if(_vc){window.vcards=vcards=function(id,x){const h=_vc(id,x);return id==='hc'?h.replace(/<button[^>]*onclick="demo\([^>]*>[^<]*<\/button>/g,''):h}}
function nodemo(){M.querySelectorAll('[onclick*="demo(\'hc\'"]').forEach(b=>b.remove())}
const fine=matchMedia('(hover:hover)').matches;
function enhance(){nodemo();
 M.querySelectorAll('.view > *, .view [class*="grid"] > *, .vc, [class*="card"], tr').forEach((el,i)=>{if(el.dataset.vg)return;el.dataset.vg=1;
  if(!el.matches('tr')){el.classList.add('vg-rv');el.style.transitionDelay=Math.min(i%8,7)*60+'ms';io.observe(el)}});
 M.querySelectorAll('.vc,[class*="card"],[class*="tile"]').forEach(el=>{if(el.dataset.tl)return;el.dataset.tl=1;
  const g=document.createElement('span');g.className='vg-gl';el.appendChild(g);
  if(!fine)return;
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
   el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');
   el.style.transform='perspective(900px) rotateX('+((.5-y)*7)+'deg) rotateY('+((x-.5)*9)+'deg) translateZ(0)'});
  el.addEventListener('pointerleave',()=>{el.style.transform=''})});
 M.querySelectorAll('.btn.p,.btn.w').forEach(b=>{if(b.dataset.mg||!fine)return;b.dataset.mg=1;
  b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.14)+'px,'+((e.clientY-r.top-r.height/2)*.22)+'px)'});
  b.addEventListener('pointerleave',()=>{b.style.transform=''})})}
new MutationObserver(()=>requestAnimationFrame(enhance)).observe(M,{childList:true,subtree:true});enhance();
M.addEventListener('scroll',e=>{const t=e.target;if(t.scrollHeight>t.clientHeight)bar.style.width=(t.scrollTop/(t.scrollHeight-t.clientHeight)*100)+'%'},true);
})();
