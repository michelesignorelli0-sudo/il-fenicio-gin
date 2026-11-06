# Report settimanale — Il Fenicio Gin — 2026-11-06 (venerdì)

**Fase:** pre-lancio, shop in lista d'attesa. Settima settimana con gli stessi blocchi (rete monitor, OAuth Stripe). Vendite/ordini: n/d.

## 1. Stato sito 🟡 (invariato, nessun dato nuovo)
- **Monitor fermo:** ultimo report monitor 15/10 (nessuno dal 16/10). Disponibilità sito e 6 link Stripe mai verificati: `ilfeniciogin.it` e `buy.stripe.com` bloccati dal proxy (403). Non significa che siano giù.
- **Stripe:** nessun daily dal 15/10; connettore non autorizzato (OAuth). Zero visibilità su vendite, pagamenti falliti, dispute, saldo.
- **Conformità (3/11):** `termini.html` dice spedizione "sempre gratuita" (regola attesa: da 3 bottiglie) e cita Klarna (da verificare su Stripe). Prezzi/prodotti Stripe non confrontabili.
- **Briefing 2/11:** `shop.html` è "In arrivo", ma il repo contiene 6 link Stripe → decidere se lo shop è aperto o in waitlist.
- **UX (audit 31/10):** nessuna modifica al sito dal 24/10; 15 punti aperti (5 urgenti): `hero.jpg` 4,8 MB (PNG con estensione .jpg), GA prima del consenso cookie, nessuna CTA waitlist in home, hero senza proposta di valore, claim superlativi non dimostrati.
- **Visibilità organica (5/11): assente**, anche sulla query di brand; sito non indicizzato.

## 2. Social 🟡
- **Piano pubblicato: non verificabile dal repo** (nessuna conferma). Controllare a mano IG/FB/TikTok.
- **Creato:** piano 2–8/11 (7 post: Fenicio Tonic, ginepro, behind the scenes, Hot Gin Old Fashioned, UGC #IlFenicioCambiaColore, anteprima/waitlist, slow Sunday) + trend giornalieri 1–6/11.
- **Rischi:** caption con prezzo 39,90 € non coerente col resto; post 6 con CTA da allineare allo stato dello shop; citare solo botaniche confermate.
- **Manca** il piano 9–15/11 (San Martino 11/11, Fiera di Chieri fino al 10/11, ATP Finals Torino dal 15/11) e il teaser Black Week (dal 23/11).

## 3. Mercato
- Gin = 3ª categoria spirits in Italia: 328,7 M€ e 18,2 M litri nel 2025; Italia 6° paese al mondo per valore e primo mercato UE per gin premium (IWSR); premium/super premium verso ~10% CAGR (previsione datata).
- **Prezzi (5/11):** big online scontati (Malfy 18–28 € in promo, Hendrick's ~39 €, Gin Mare ~28–34 €); artigianali italiani 35–50 € (mediana ~45 €). **Prezzo del Fenicio incoerente:** 39,90 € (social/ricerca) vs 41,90 € (Stripe) vs 44,90 € (analisi). Margine reale dopo IVA 22% ≈ 14 € a bottiglia con costo 22–23 € → non scendere.
- **Concorrenza:** nuovi premium con grandi gruppi dietro (Villa Ascenti/Diageo, Edgar Sopper/Montenegro, Campari 19 botaniche, Macaronesian Gin in Italia, Malfy/Pernod).
- **E-commerce:** IWSR vede l'Italia tra i mercati a maggior crescita online per alcolici (+~0,5 M acquirenti online nel 2024). Spedizione gratuita tipica sopra 49–99 € (Corso101, Bottle of Italy: 5,90 € sotto 99 €); Aqva LVCE chiede 11,99 €. Campari/Moët Hennessy JV su Tannico.

## 4. Top 3 priorità per la prossima settimana
1. **Sbloccare i dati (30 min, una tantum):** riautorizzare Stripe da claude.ai > Connettori e consentire `ilfeniciogin.it` + `buy.stripe.com` nella rete dell'ambiente; senza questo monitor, daily e conformità restano ciechi da 3 settimane.
2. **Decidere e allineare shop e prezzo:** lancio o waitlist? Un solo prezzo (39,90 / 41,90 / 44,90 €) su sito, Stripe, social; spedizione e Klarna coerenti nei Termini (consiglio: 44,90 €, bundle 2 bott. ~84 €, spedizione gratuita sopra soglia).
3. **Quick win sito prima di spingere traffico:** `hero.jpg` → WebP ≤250 KB, Consent Mode v2 per GA, CTA waitlist in home/nav, nuova hero con proposta di valore; poi inviare sitemap a Google Search Console per l'indicizzazione.

## 5. Opportunità da non perdere
**Regalo di Natale 2026:** gift-set/bundle + pagina dedicata + outreach a editoriali "migliori gin per Natale" (es. Beverfood, Dissapore) prima del picco di dicembre. Il differenziatore (gin che cambia colore) è perfetto per il regalo e per i contenuti social; la finestra per PR e SEO ("gin italiano artigianale", "regalo gin") si chiude entro fine novembre.
