# Vigaro Atmajaya Premium Studio — v7

Buka `website/index.html` di browser, atau jalankan server statis: `cd website && python3 -m http.server 8000`.

## Wajib sebelum tayang
1. Ganti domain placeholder di SEO: `python3 website/tools/set-domain.py https://domainanda.com`
   (mengganti `DOMAINANDA.com` di index.html, robots.txt, sitemap.xml). Tanpa ini, gambar preview link (Open Graph / Twitter) tidak akan tampil saat dibagikan.
2. Pastikan WhatsApp `6289526341305` benar dan periksa ulang harga (objek `C` di `website/js/part1.js`, satuan ribuan rupiah).
3. Host lewat HTTPS. Tes preview link di Facebook Sharing Debugger / LinkedIn Post Inspector.

## Perubahan v7
**Performa**
- index.html turun dari ±4,1 MB menjadi ±5 KB. 71 gambar base64 dipindah ke `assets/img/*.webp` (WebP, maks 1600px, transparansi dipertahankan), 2 audio ke `assets/audio/`.
- CSS dan JS dipisah ke root website/ (style*.css) dan `js/` agar bisa di-cache browser.
- Gambar di-lazy-load, dengan fade-in dan penanganan gambar gagal muat.
- Font Playfair & Cormorant dimuat setelah idle, jadi render awal hanya menunggu Outfit & Great Vibes.

**SEO & branding**
- Title/description baru, canonical, robots, theme-color, Open Graph, Twitter/X card (summary_large_image), JSON-LD `ProfessionalService`.
- Favicon SVG, apple-touch-icon, ikon 192/512, manifest, `assets/og-image.jpg` (1200x630), robots.txt, sitemap.xml.
- Judul tab berubah mengikuti halaman. Tautan langsung seperti `#katalog` langsung melewati intro.

**UI/UX & aksesibilitas**
- Mobile: tab navigasi bisa digeser dan tab aktif otomatis ke tengah, area sentuh min. 44px, tombol CTA penuh lebar di hero, marquee disembunyikan agar tidak menabrak tombol WhatsApp.
- Skip link, fokus keyboard terlihat, logo bisa diakses keyboard, `aria-current` pada menu, label ARIA, dukungan `prefers-contrast` dan `prefers-reduced-motion`.
- Toast umpan balik saat membuka WhatsApp, efek tekan tombol, pesan `<noscript>`.
- Efek tilt/glow dikecualikan dari area demo agar tampilan demo tidak berubah.

**Dari v6 (tetap ada):** harga pasar baru, Hak Cipta & Merek Rp2.000.000 tanpa demo, animasi kartu/tombol/aurora.

## Struktur
`website/` index.html · style1-3.css · v7.css · `js/` · `assets/` (img, audio, ikon, OG) · `tools/set-domain.py` · robots.txt · sitemap.xml

## Catatan pengujian v7.1
- 150 kombinasi demo (semua kategori, varian, dan item contoh) dibuka otomatis: 0 error JavaScript, 0 gambar rusak, 0 file 404.
- Perbaikan: gambar latar demo sempat 404 karena path relatif ke CSS; sudah diperbaiki.
- Sitemap hanya berisi halaman utama (alamat `#` diabaikan mesin pencari).
- JavaScript tidak di-minify (tanpa alat build); aktifkan kompresi gzip/brotli di hosting.
