
/* ===== VIGARO PREMIUM CONVERSION & MICRO-INTERACTION UPGRADE ===== */
(function(){
  const showcase = `
  <section class="showcase-wrap">
    <div class="showcase-head"><div><span class="eyebrow">BUKAN SEKADAR MOCKUP</span><h2 class="sil">Lihat website yang bisa langsung <i>dipakai.</i></h2><p>Setiap contoh bisa diklik dan dijelajahi. Rasakan pengalaman website dari sisi pelanggan, lalu lihat bagaimana admin mengelolanya.</p></div><a class="btn" href="#galeri" onclick="go('galeri');return false">Lihat semua karya ↗</a></div>
    <div class="showcase-grid">
      <article class="showcase-card sc-fnb"><div class="sc-image" style="background-image:url('${IMG.ss_fnb||IMG.fnb}')"><span>01 · FOOD & BEVERAGE</span><b>01</b></div><div class="sc-body"><div class="sc-meta">WEBSITE RESTORAN / CAFE</div><h3>Brand kuliner yang bikin lapar mata.</h3><p>Menu visual, detail produk, promo, lokasi, dan pemesanan langsung lewat WhatsApp.</p><div class="sc-bottom"><strong>Mulai Rp250 ribu · menu digital</strong><button onclick="demo('fnb',0,2)">Jelajahi demo <i>↗</i></button></div></div></article>
      <article class="showcase-card sc-shop"><div class="sc-image" style="background-image:url('${IMG.ss_jualan||IMG.jualan}')"><span>02 · E-COMMERCE</span><b>02</b></div><div class="sc-body"><div class="sc-meta">ONLINE STORE</div><h3>Toko online, bukan cuma katalog.</h3><p>Produk, keranjang, checkout, status pesanan, hingga dashboard pengelolaan toko.</p><div class="sc-bottom"><strong>Mulai Rp1,8 juta</strong><button onclick="demo('jualan',0,2)">Jelajahi demo <i>↗</i></button></div></div></article>
      <article class="showcase-card sc-edu"><div class="sc-image" style="background-image:url('${IMG.ss_edu||IMG.sistem}')"><span>03 · EDUCATION</span><b>03</b></div><div class="sc-body"><div class="sc-meta">WEBSITE SEKOLAH</div><h3>Informasi sekolah lebih profesional.</h3><p>Profil, berita, PPDB online, data siswa, dan panel admin dalam satu ekosistem.</p><div class="sc-bottom"><strong>Mulai Rp2,5 juta</strong><button onclick="demo('edu',0,2)">Jelajahi demo <i>↗</i></button></div></div></article>
      <article class="showcase-card sc-system"><div class="sc-image" style="background-image:url('${IMG.ss_adm||IMG.sistem}')"><span>04 · BUSINESS SYSTEM</span><b>04</b></div><div class="sc-body"><div class="sc-meta">WEB APP & DASHBOARD</div><h3>Operasional bisnis dalam satu layar.</h3><p>Login, role pengguna, database, laporan, dan pengelolaan data yang lebih rapi.</p><div class="sc-bottom"><strong>Mulai Rp2,5 juta</strong><button onclick="demo('sistem',0,3)">Jelajahi demo <i>↗</i></button></div></div></article>
    </div>
    <div class="showcase-foot"><div><span class="eyebrow">PUNYA KEBUTUHAN KHUSUS?</span><b>Jangan pilih berdasarkan harga saja. Pilih berdasarkan hasil yang bisnis Anda butuhkan.</b><small>Kami bantu petakan fitur, alur pengguna, tampilan, dan estimasi biaya sebelum pengerjaan.</small></div><a class="btn p" href="#kontak" onclick="go('kontak');return false">Diskusikan proyek saya ↗</a></div>
  </section>`;

  const oldHome=V.home;
  V.home=function(){
    let h=oldHome();
    h=h.replace('<div class="feat">', showcase+'<div class="feat">');
    return h;
  };

  // Strengthen the product detail explanation without changing existing prices.
  const oldItem=V.item;
  V.item=function(id,x){
    let h=oldItem(id,x);
    h=h.replace('Paket di kanan adalah pilihan upgrade, harga mulai tidak berubah. Domain & hosting dihitung terpisah di Kalkulator.',
      'Harga di atas adalah titik awal. Pilih level fitur sesuai kebutuhan—mulai dari website informatif sampai sistem dengan dashboard admin. Domain, hosting, dan integrasi pihak ketiga dikonfirmasi terpisah agar tidak ada biaya yang tiba-tiba muncul.');
    return h;
  };

  const style=document.createElement('style');
  style.textContent=`
  /* Home becomes a cinematic, scrollable sales landing page */
  .view:has(.showcase-wrap){display:block;overflow:auto;scrollbar-width:thin;scrollbar-color:#354152 transparent;padding-bottom:28px}
  .view:has(.showcase-wrap) .hero{min-height:430px;padding:18px 0 26px}
  .view:has(.showcase-wrap) .feat{margin:18px 0 0}
  .showcase-wrap{margin:44px 0 8px;padding:34px;border:1px solid rgba(190,210,240,.16);border-radius:26px;background:linear-gradient(145deg,rgba(18,25,35,.96),rgba(7,10,15,.92));box-shadow:0 30px 90px -55px rgba(140,175,230,.55);position:relative;overflow:hidden}
  .showcase-wrap:before{content:'';position:absolute;width:420px;height:420px;right:-180px;top:-240px;border-radius:50%;background:radial-gradient(circle,rgba(125,165,225,.18),transparent 68%);pointer-events:none}
  .showcase-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:24px;position:relative}
  .showcase-head h2{font-size:clamp(26px,4vw,46px);line-height:1.05;margin:10px 0}
  .showcase-head p{max-width:620px;color:var(--mu);font-size:14px;line-height:1.7}
  .showcase-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;position:relative}
  .showcase-card{min-width:0;border:1px solid #283342;border-radius:18px;overflow:hidden;background:linear-gradient(160deg,#151d28,#0b0f15);transition:transform .45s,border-color .45s,box-shadow .45s;display:flex;flex-direction:column}
  .showcase-card:hover{transform:translateY(-8px);border-color:#aabbd2;box-shadow:0 24px 50px -25px rgba(160,190,235,.45)}
  .sc-image{height:150px;background-size:cover;background-position:center;position:relative;isolation:isolate}
  .sc-image:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(3,6,10,.08),rgba(3,6,10,.72));z-index:-1}
  .sc-image span{position:absolute;left:12px;top:12px;font-size:9px;letter-spacing:.18em;color:#fff;background:rgba(5,8,12,.55);border:1px solid rgba(255,255,255,.2);padding:6px 9px;border-radius:99px;backdrop-filter:blur(8px)}
  .sc-image>b{position:absolute;right:12px;bottom:5px;font-size:44px;color:rgba(255,255,255,.22);font-weight:800}
  .sc-body{padding:17px;display:flex;flex-direction:column;flex:1}
  .sc-meta{font-size:9px;letter-spacing:.2em;color:#a9bad1}
  .sc-body h3{font-size:19px;line-height:1.15;margin:9px 0}
  .sc-body p{font-size:12px;line-height:1.65;color:var(--mu);min-height:60px}
  .sc-bottom{display:flex;flex-direction:column;gap:12px;margin-top:16px;padding-top:13px;border-top:1px solid var(--line)}
  .sc-bottom strong{font-size:14px;color:#fff}
  .sc-bottom button{border:0;background:none;color:#dce8f8;text-align:left;font:600 12px 'Outfit';letter-spacing:.04em;cursor:pointer;padding:5px 0;display:flex;justify-content:space-between}
  .sc-bottom button:hover{color:#fff}
  .showcase-foot{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 22px;margin-top:18px;border:1px solid rgba(190,210,240,.14);border-radius:16px;background:rgba(255,255,255,.025)}
  .showcase-foot>div{display:grid;gap:5px}.showcase-foot b{font-size:15px}.showcase-foot small{font-size:12px;color:var(--mu)}
  .view:has(.det) .det .pan:first-child{background:radial-gradient(ellipse at 15% 0%,rgba(150,180,220,.12),transparent 50%),linear-gradient(160deg,var(--card),#090c10)}
  .view:has(.det) .det .pan:first-child .note{border-left:2px solid #9eacc0;padding:10px 0 10px 13px;background:linear-gradient(90deg,rgba(160,185,220,.07),transparent);border-radius:0 10px 10px 0}
  .vc{box-shadow:0 10px 28px -24px #b9cce5}.vc.pop{background:linear-gradient(155deg,#182230,#0b1017);transform:translateY(-2px)}
  .vc .bt .btn.p{box-shadow:0 8px 25px -10px rgba(255,255,255,.65)}
  .btn,.cat,.item,.vc button,.tabs button,.back{transition:transform .25s,border-color .25s,background .25s,box-shadow .25s}
  .btn:active,.cat:active,.item:active,.vc button:active{transform:scale(.975)}
  @media(max-width:1100px){.showcase-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(max-width:640px){.showcase-wrap{padding:20px 14px;margin-top:28px}.showcase-head,.showcase-foot{align-items:flex-start;flex-direction:column}.showcase-grid{grid-template-columns:1fr}.sc-image{height:180px}.sc-body p{min-height:0}.view:has(.showcase-wrap) .hero{min-height:0}.view:has(.showcase-wrap) .feat{margin-bottom:12px}}
  `;
  document.head.appendChild(style);

  // Short, quiet tactile click sound only. No loop, no ambient track, no autoplay.
  let ac=null,last=0;
  function clickTone(){
    const now=performance.now(); if(now-last<65)return; last=now;
    try{
      if(!ac)ac=new (window.AudioContext||window.webkitAudioContext)();
      if(ac.state==='suspended')ac.resume();
      const t=ac.currentTime,o=ac.createOscillator(),g=ac.createGain(),f=ac.createBiquadFilter();
      o.type='sine';o.frequency.setValueAtTime(920,t);o.frequency.exponentialRampToValueAtTime(560,t+.055);
      f.type='lowpass';f.frequency.value=2200;
      g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.022,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+.105);
      o.connect(f);f.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+.12);
    }catch(e){}
  }
  window.sfx=clickTone;
  window.toggleMus=function(){/* Background music intentionally disabled. */};
  window.ivMusic=function(){/* Demo music intentionally disabled. */};
  document.addEventListener('click',e=>{
    const t=e.target.closest('button,a,[role="button"],.cat,.item,.gal figure,.thm,.sld');
    if(t)clickTone();
  },true);

  // Make package ordering feel immediate and remove friction with a ready-made brief.
  const oldPost=post;
  post=function(){
    oldPost();
    const pane=document.querySelector('.det .pan:last-child');
    if(pane&&!pane.querySelector('.order-confidence')){
      const box=document.createElement('div');box.className='order-confidence';
      box.innerHTML='<div class="oc-icon">✓</div><div><b>Sudah cocok dengan kebutuhan Anda?</b><span>Klik “Pilih Paket” untuk membuat ringkasan pesanan. Admin akan mengonfirmasi fitur, timeline, dan biaya final sebelum pengerjaan.</span></div>';
      const target=pane.querySelector('#rpb');if(target)target.insertAdjacentElement('afterend',box);
    }
  };
  const extra=document.createElement('style');extra.textContent='.order-confidence{display:flex;gap:12px;align-items:flex-start;margin:14px 2px 4px;padding:14px;border:1px solid rgba(190,210,240,.2);border-radius:14px;background:linear-gradient(120deg,rgba(190,210,240,.09),rgba(255,255,255,.02))}.oc-icon{width:27px;height:27px;flex:none;border-radius:50%;display:grid;place-items:center;background:#dfe8f4;color:#101722;font-weight:800}.order-confidence b{display:block;font-size:13px;margin-bottom:4px}.order-confidence span{display:block;color:var(--mu);font-size:11px;line-height:1.6}';document.head.appendChild(extra);
})();
