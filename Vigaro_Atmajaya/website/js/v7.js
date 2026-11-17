/* v7: SEO dinamis, aksesibilitas, lazy-load, feedback */
(()=>{const M=document.getElementById('main'),$=s=>document.querySelector(s);
const TT={home:'Beranda',katalog:'Katalog Layanan & Harga',galeri:'Galeri Demo Website',hitung:'Kalkulator Harga',tentang:'Keunggulan',backend:'Demo Backend',kontak:'Kontak'};
const BASE='Vigaro Atmajaya Premium Studio';
// skip link + landmark
const sk=document.createElement('a');sk.className='vg-skip';sk.href='#main';sk.textContent='Lewati ke konten utama';document.body.prepend(sk);
M.setAttribute('tabindex','-1');M.setAttribute('role','main');
const nav=$('#nav');nav&&nav.setAttribute('aria-label','Navigasi utama');
const logo=$('.logo');if(logo){logo.setAttribute('role','button');logo.setAttribute('tabindex','0');logo.setAttribute('aria-label','Vigaro Atmajaya, ke beranda');logo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();logo.click()}})}
const fab=$('.fab');fab&&fab.setAttribute('aria-label','Chat WhatsApp Vigaro Atmajaya');
// toast
const tt=document.createElement('div');tt.id='vgtt';tt.setAttribute('role','status');tt.setAttribute('aria-live','polite');document.body.appendChild(tt);
let tm;window.vgToast=m=>{tt.textContent=m;tt.classList.add('on');clearTimeout(tm);tm=setTimeout(()=>tt.classList.remove('on'),2600)};
document.addEventListener('click',e=>{const a=e.target.closest('a[href*="wa.me"]');if(a)vgToast('Membuka WhatsApp…')},true);
// gambar: lazy + fade + error state
function imgs(){M.querySelectorAll('img:not([data-vz])').forEach((im,i)=>{im.dataset.vz=1;
 if(!im.alt)im.alt='';im.decoding='async';
 if(i>1&&!im.loading)im.loading='lazy';
 if(!im.complete){im.classList.add('vg-lz');im.addEventListener('load',()=>im.classList.add('ok'),{once:true});im.addEventListener('error',()=>{im.classList.remove('vg-lz');im.classList.add('vg-bad')},{once:true})}})}
// navigasi: aria-current, scroll tab aktif, judul halaman dinamis
function sync(){const h=(location.hash.slice(1)||'home');const base=h.split('-')[0];
 const key=TT[h]?h:(h.startsWith('c-')||h.startsWith('i-')?'katalog':'home');
 document.title=(key==='home'?'Vigaro Atmajaya — Jasa Pembuatan Website, Web App, AI & IoT':TT[key]+' | '+BASE);
 nav&&nav.querySelectorAll('button').forEach(b=>{const on=b.classList.contains('on');on?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current');if(on&&b.scrollIntoView&&nav.scrollWidth>nav.clientWidth)nav.scrollTo({left:b.offsetLeft-24,behavior:'smooth'})})}
new MutationObserver(()=>{imgs();sync()}).observe(M,{childList:true});
if(nav)new MutationObserver(sync).observe(nav,{subtree:true,attributes:true,attributeFilter:['class'],childList:true});
addEventListener('hashchange',sync);imgs();sync();
// font tambahan dimuat setelah idle agar render awal ringan
const lf=()=>{const l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap';document.head.appendChild(l)};
(window.requestIdleCallback||setTimeout)(lf,{timeout:3000});
// tautan langsung (#katalog dst.) melewati intro
if(location.hash.length>1&&typeof enter==='function'&&$('#intro'))setTimeout(enter,60);
// Esc menutup dialog sudah ditangani aplikasi; kembalikan fokus ke konten saat pindah halaman
addEventListener('hashchange',()=>setTimeout(()=>M.focus({preventScroll:true}),400));
})();
