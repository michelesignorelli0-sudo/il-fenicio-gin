# Report settimanale — Il Fenicio Gin — 2026-10-02 (venerdì)

**Fase:** pre-lancio. Shop "In arrivo" con lista d'attesa. Vendite Stripe: 0 (nessun ordine il 01 e 02/10).

## 1. Stato sito 🟡
- **Controlli live non eseguibili** (monitor 01 e 02/10): `ilfeniciogin.it` e `buy.stripe.com` non sono nella allowlist di rete dell'ambiente. Non indica un down, ma non abbiamo alcuna verifica reale di raggiungibilità o dei link.
- **Spedizione incoerente:** `termini.html` il 01/10 diceva "gratuita da 3 bottiglie", il 02/10 "sempre gratuita". Su Stripe nessuna shipping option su nessun link.
- **Prezzo incoerente su 3 fonti:** Stripe 41,90 € (il 30/09 era 39,90 €), analisi prezzi 44,90 €, caption social "39,90€". Sul sito nessun prezzo pubblicato.
- **Stripe da ripulire** (conformità 30/09): 6 prodotti/payment link duplicati (5 "(Copy)"), tutti attivi e acquistabili con l'URL, prodotto tipo `service`. Klarna attivo su Stripe, ma rimosso dai Termini.
- **Audit UX (01/10):** 14 miglioramenti, 4 urgenti. La waitlist non è raggiungibile dalla home. GA parte prima del consenso cookie (rischio GDPR). L'hero non comunica il differenziatore "cambia colore". Manca prova sociale.
- **Legale:** correzioni a privacy, cookie e termini applicate il 30/09.

## 2. Social
- **Piano pubblicato: non risulta.** In `social/` ci sono solo i report trend del 01 e 02/10, nessun piano editoriale né evidenza di post pubblicati.
- **Idee pronte (02/10):** Reel "reveal" (Skyfall remix), TikTok "Suspect", carosello "Savoury", countdown Halloween (Story ogni venerdì, Reel finale il 31/10).
- **Da sistemare prima di pubblicare:** la caption "Suspect" cita il prezzo 39,90 €, che oggi non è confermato. Il prezzo non va comunicato finché lo shop è chiuso.

## 3. Mercato
- **Gin 2025 in Italia:** terza categoria spirits, 328,7 M€ e 18,2 M litri, +25% in volume in 5 anni. L'Italia è il principale mercato premium gin dell'UE, con preferenza per i profili mediterranei. Fonte: [Milano Finanza](https://www.milanofinanza.it/news/gin-mediterraneo-202406041251478517) e altre (ricerca web, dati non verificati direttamente).
- **Artigianale:** circa 20–25% del segmento, crescita 8–10% annuo, doppia rispetto al mass market. I consumatori pagano 2–5 volte di più per i piccoli lotti.
- **Competitor:** Malfy (Pernod Ricard), Portofino, Caprisius, Panarea. Hendrick's e Gin Mare si trovano scontati a 28–39 €, quindi 44,90 € è alto per un brand senza notorietà (analisi prezzi 01/10).
- **E-commerce:** l'Italia è tra i mercati online alcolici più dinamici (+20% globale 2023–2028). Tannico ha oltre il 30% di quota, e Bottle of Italy (22.000 prodotti) e Vino.com sono i marketplace da valutare come canale. Il rilevamento di [Gambero Rosso](https://www.gamberorosso.it/vino/tre-bicchieri/e-commerce-italiano-previsioni-iwsr/) conferma la crescita.
- **Visibilità organica:** il brand non compare su Google per "il fenicio gin" né per le keyword premium/artigianale.

## 4. Top 3 priorità per la prossima settimana
1. **Fissare prezzo e spedizione, poi allineare tutto.** Scegliere un prezzo (39,90 / 41,90 / 44,90 con sconto lancio barrato) e la policy spedizione, quindi uniformare Termini, Stripe e social. Archiviare i 5 duplicati Stripe e disattivare i link finché lo shop è chiuso.
2. **Spingere la waitlist.** Applicare i fix UX urgenti: CTA hero verso la lista, form email in home, claim "cambia colore" nell'hero. Mettere il consenso cookie davanti a gtag.
3. **Partire con social e SEO.** Pubblicare 2–3 contenuti dalle idee del 02/10 (Reel reveal, countdown Halloween), senza prezzo. Verificare l'indicizzazione su Search Console e inviare la sitemap.

*Anche da sbloccare:* aggiungere `ilfeniciogin.it` e `buy.stripe.com` alla allowlist, altrimenti i monitor restano ciechi.

## 5. Opportunità da non perdere
**Regalistica natalizia e B2B.** Ottobre è il momento per box regalo e bundle (gin + tonica/bicchiere) e per aprire pre-ordini aziendali. Il SEO richiede settimane per indicizzarsi, quindi serve partire ora per arrivare al Black Friday (27/11). Abbinare una pagina "Regali Natale" alla waitlist con offerta early-bird e candidarsi alle liste editoriali "migliori gin artigianali italiani" (Dissapore, Scatti di Gusto, Mentelocale), dove oggi non siamo presenti.

*Fonti: report in `reports/` e `social/` del repo; ricerche web del 02/10/2026.*
