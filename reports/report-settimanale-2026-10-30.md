# Report settimanale — Il Fenicio Gin — 2026-10-30 (venerdì)

**Fase:** pre-lancio, shop in lista d'attesa. Sesta settimana con gli stessi blocchi tecnici (rete monitor, OAuth Stripe). Vendite/ordini: n/d.

## 1. Stato sito 🟡 (invariato)
- **Monitor fermo:** ultimo report monitor 15/10; nessun report 16–30/10. Disponibilità e link Stripe mai verificati (proxy 403 su `ilfeniciogin.it` e `buy.stripe.com`).
- **Stripe:** nessun daily dal 15/10; connettore non autorizzato. Conformità 27/10 non eseguibile lato Stripe.
- **Sito (da audit 24/10 e conformità 27/10):** 14 miglioramenti UX (4 urgenti, es. `img/hero.jpg` 4,8 MB); `termini.html` dice spedizione "sempre gratuita" (regola attesa: da 3 bottiglie) e cita Klarna (non atteso); waitlist non raggiungibile dalla home; GA prima del consenso cookie.
- **Visibilità organica (29/10): praticamente nulla**, anche sulla query di brand. Sito probabilmente non indicizzato.

## 2. Social 🟡
- **Piano pubblicato: non verificabile** dal repo (nessuna conferma di pubblicazione). Controllare a mano IG/FB/TikTok.
- **Creato questa settimana:** piano IG/FB 26/10–1/11 (Reel ora solare, carosello botaniche, Reel/TikTok Halloween elegante 29/10) + piano-settimana con 6 post + report trend giornalieri (24–30/10).
- **Rischio ricorrente:** le caption riportano 39,90 € ma il prezzo non è deciso (vedi sotto). Due piani paralleli per la stessa settimana.
- **Manca** il piano 2–8/11 (tema: Natale/regali, Black Friday del 27/11 da valutare).

## 3. Mercato
- **Prezzi (29/10):** Malfy 37,65 €, Hendrick's 38,74 €, Gin Mare ~33,66 €, craft italiani 39,50–42,80 €, Monkey 47 ≈ 55 €+ a 70 cl. Il Fenicio a 44,90 € è sopra i premium noti: posizionamento **da rivedere**. Costo d'acquisto 22–23 € → margine lordo ≈ 14 € a 44,90 €.
- **Prezzo incoerente ovunque:** 39,90 € (social/ricerca), 41,90 € (Stripe), 44,90 € (analisi 29/10).
- **Trend:** gin 3ª categoria spirits in Italia (328,7 M€, 18,2 M litri nel 2025, ca. +25% a volume in 5 anni; Beverfood); Italia primo mercato UE per gin premium (IWSR). Portofino: e-commerce diretto +26% H1 2026.
- **Novità competitor:** Edgar Sopper (Montenegro) premium; Macaronesian Gin distribuito in Italia (Horeca + e-commerce) dal 1/10/2025; Malfy in mano a Pernod Ricard.
- **E-commerce:** IWSR prevede l'Italia tra i mercati con più crescita online per alcolici. Retailer concorrenti: spedizione gratuita sopra 99 € (Corso101, Bottle of Italy), da 5,90 € altrimenti. Tannico (Campari/Moët Hennessy) leader.
- Fonti parziali o datate: cautela.

## 4. Top 3 priorità settimana prossima
1. **Decidere prezzo (39,90 / 41,90 / 44,90 €) e spedizione**, allinearli su Stripe, `termini.html` (anche Klarna) e social; archiviare i prodotti "(Copy)"; togliere i prezzi dalle caption nel frattempo.
2. **Sbloccare monitor e Stripe:** consentire `ilfeniciogin.it` e `buy.stripe.com` nella network policy e riautorizzare il connettore Stripe. Senza, il lancio è alla cieca.
3. **Visibilità e sito:** Search Console + sitemap (richiesta indicizzazione), comprimere `hero.jpg`, link waitlist dalla home, consenso cookie prima di GA.

## 5. Opportunità da non perdere
**Cofanetto regalo Natale D2C** (bottiglia + 2 bicchieri/tonica, fascia 45–60 €), con la waitlist come base e contenuti ricetta a 2–3 ingredienti. Evita il confronto di prezzo con i marchi scontati e sfrutta il trend D2C (+26% Portofino). Per essere online a fine novembre servono prezzo, spedizione e shop chiusi entro la prima settimana di novembre. In parallelo: verificare con commercialista/ADM accise, vendita a distanza e verifica età.

*Fonti: repo reports/ e social/; [Beverfood](https://www.beverfood.com/edgar-sopper-premium-dry-gin-etna-sicilia/), [Vinetur/IWSR](https://www.vinetur.com/2025111393275/varma-spirits-wines-inicia-su-expansion-internacional-con-macaronesian-gin-en-italia-el-mayor-mercado-europeo-de-ginebra-premium.html), [Gambero Rosso](https://www.gamberorosso.it/vino/tre-bicchieri/e-commerce-italiano-previsioni-iwsr/), [Dissapore](https://www.dissapore.com/spesa/i-migliori-shop-per-comprare-alcolici-online/).*
