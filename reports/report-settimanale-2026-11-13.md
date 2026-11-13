# Report settimanale — Il Fenicio Gin — 2026-11-13 (venerdì)

**Fase:** pre-lancio, shop in lista d'attesa. Ottava settimana con gli stessi blocchi (rete monitor, OAuth Stripe). Vendite/ordini: n/d.

## 1. Stato sito 🟡 (invariato)
- **Monitor fermo:** ultimo report monitor 15/10. Sito `ilfeniciogin.it` e 6 link Stripe mai verificati (proxy 403 sul sandbox: non significa che siano giù).
- **Stripe:** nessun daily dal 15/10, connettore non autorizzato (OAuth). Zero visibilità su vendite, pagamenti, dispute, saldo.
- **Conformità (10/11):** `termini.html` dice spedizione "sempre gratuita" (regola attesa: da 3 bottiglie) e cita Klarna (da verificare). Shop.html in "lista d'attesa" ma il repo contiene 6 link Stripe → stato shop da decidere.
- **UX (audit 7/11):** 14 punti (4 urgenti): `hero.jpg` 4,8 MB, Google Analytics caricato prima del consenso cookie (rischio GDPR), CTA waitlist assente, claim non dimostrati.
- **Visibilità organica (12/11): assente** anche sulla query di brand.

## 2. Social 🟡
- **Piano 9–15/11 creato** (`piano-2026-11-09`, `piano-settimana-2026-11-08`) + trend giornalieri fino al 13/11. **Pubblicazione effettiva non verificabile dal repo**: controllare a mano IG/FB/TikTok.
- Due piani paralleli per la stessa settimana (5 vs 7 post): scegliere uno solo.
- Prezzo nei caption: 39,90 € (social) vs 44,90 € (analisi prezzi) → allineare prima di pubblicare "idea regalo" del 15/11.
- **Manca** il piano 16–22/11 (ATP Finals Torino dal 15/11, Eurochocolate 13–22/11) e il teaser Black Week (dal 23/11).

## 3. Mercato
- Gin = 3ª categoria spirits in Italia (328,7 M€, 18,2 M litri nel 2025); premium/super premium in crescita in controtendenza al calo generale degli spirits.
- **Prezzi (12/11):** big brand online 28–40 € con promo; artigianali italiani 46–54 € a listino. 44,90 € è in linea con gli artigianali ma sopra i big. Margine a 44,90 € ≈ 14 €/bottiglia; a 39,90 € ≈ 10 €.
- **Competitor:** Edgar Sopper Premium (Gruppo Montenegro), Gin Niro, Portofino Light, Hendrick's nuova release, Martin Miller's 0,0%. Filone dominante: gin mediterraneo/territoriale, low-ABV, RTD.
- **Ricerca web di oggi:** poche cifre aggiornate. Milano Finanza: premium italiani (Malfy, Portofino, Grand Tour) in crescita a doppia cifra. Statista: spirits at-home Italia 1,31 Mld € (2024); e-commerce ~6% off-trade globale entro 2025 (IWSR, previsione 2024); shipping centrale per gli e-shop. Dati datati: trattare come indicativi.
  Fonti: [Milano Finanza](https://www.milanofinanza.it/news/gin-mediterraneo-202406041251478517), [Spirits Selection](https://spiritsselection.com/en/the-post-covid-spirits-market-in-italy/), [Statista](https://www.statista.com/outlook/emo/beverages/alcoholic-drinks/spirits/italy/), [GEL Proximity](https://gelproximity.com/en/?p=3732)

## 4. Top 3 priorità settimana prossima
1. **Sbloccare la visibilità:** riautorizzare Stripe (claude.ai > Connettori) e consentire `ilfeniciogin.it` / `buy.stripe.com` nella rete dell'ambiente; 10 min di check manuale del sito e dei link nel frattempo.
2. **Decidere stato shop + prezzo** (aperto vs waitlist; 39,90 € vs 44,90 €) e allinearli a sito, `termini.html` (spedizione, Klarna) e social, prima del Black Friday (27/11).
3. **Fix tecnici urgenti del sito:** hero.jpg → webp <250 KB, Consent Mode per GA, CTA waitlist in home.

## 5. Opportunità da non perdere
**Natale/Black Week con bundle regalo:** confezione regalo o kit 2 bottiglie (o gin + vermouth/bitter per il filone Negroni) a 39,90–49,90 €. Supera le soglie di spedizione gratuita dei marketplace (~99 €) e sfrutta il cambio colore come "regalo con effetto wow". Teaser da pubblicare dal 20/11.
