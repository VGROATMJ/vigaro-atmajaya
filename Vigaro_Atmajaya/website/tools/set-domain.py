#!/usr/bin/env python3
"""Pakai: python3 tools/set-domain.py https://namadomain.com  -> mengganti DOMAINANDA.com di semua file SEO."""
import sys,pathlib
d=sys.argv[1].rstrip('/').replace('https://','').replace('http://','')
root=pathlib.Path(__file__).resolve().parent.parent
for f in ['index.html','robots.txt','sitemap.xml']:
    p=root/f;p.write_text(p.read_text(encoding='utf-8').replace('DOMAINANDA.com',d),encoding='utf-8')
print('Domain diset ke',d)
