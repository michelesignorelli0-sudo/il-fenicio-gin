# Report settimanale — Il Fenicio Gin — 2026-10-09 (venerdì)

**Fase:** ancora pre-lancio. Shop "In arrivo" con lista d'attesa. Vendite Stripe: 0 (6 e 7/10). L'8 e il 9/10 il controllo Stripe non è stato eseguito (connettore da riautorizzare).

## 1. Stato sito 🟡 (invariato, nessun controllo live possibile)
- **Monitor 6–9/10: sempre giallo.** `ilfeniciogin.it` e `buy.stripe.com` restano fuori dalla allowlist di rete: nessuna verifica reale di raggiungibilità o dei 6 link. Era già segnalato il 02/10 e non è stato risolto.
- **Stripe cieco da 2 giorni:** il connettore richiede nuova autorizzazione OAuth (daily 08 e 09/10 non eseguiti). Ultimo dato valido (07/10): 0 ordini, 0 dispute, 6 link attivi a 41,90 €.
- **Prezzo ancora incoerente su 4 fonti:** Stripe 41,90 €, analisi prezzi 44,90 € (promo lancio 39,90 €), ricerca mercato e report trend 39,90 €. Sul sito nessun prezzo.
- **Spedizione:** `termini.html:74` dice "sempre gratuita"; su Stripe nessuna shipping option. La soglia "gratis da 3 bottiglie" non esiste da nessuna parte.
- **Stripe da ripulire (conformità 06/10):** 6 prodotti "(Copy)" duplicati, prodotti di tipo `service` (tax code da far verificare), Klarna attivo ma non nei Termini §3.
- **Visibilità organica (08/10):** praticamente nulla. Il brand non compare per "il fenicio gin" né per le keyword premium/artigianale.
- Gli audit UX (01 e 03/10) restano aperti: nessuna evidenza di fix applicati (waitlist non raggiungibile dalla home, GA prima del consenso cookie).

## 2. Social 🟡
- **Piano pubblicato: sì sulla carta, nessuna evidenza di pubblicazione.** C'è il piano 5–11/10 (5 post: Reveal, Suspect, Botaniche, Drink d'autunno, Gin tonic domenica), ma nel repo non c'è alcuna conferma che i post siano usciti. Va verificato a mano su IG/FB.
- **Post creati:** 4 report trend (6–9/10) con idee pronte: "Subtle foreshadowing", "Suspect", countdown Halloween (31/10), drink speziati d'autunno.
- **Rischio:** i report trend citano ancora 39,90 € mentre lo shop è chiuso e il prezzo non è deciso. Nessun prezzo nelle caption finché non è confermato.
- Dati trend TikTok/Reels non aggiornati: verificare audio in Creative Center prima di pubblicare.

## 3. Mercato
- **Gin in Italia (2025):** terza categoria spirits, 328,7 M€ e 18,2 M litri, +25% in volume in 5 anni. L'Italia è il primo mercato UE per il gin premium (IWSR, oltre 511.000 casse da 8,4 L, citate da Varma Spirits). Preferenza per profili mediterranei. Fonti: [Milano Finanza](https://www.milanofinanza.it/news/gin-mediterraneo-202406041251478517), [Vinetur](https://www.vinetur.com/2025111393275/varma-spirits-wines-inicia-su-expansion-internacional-con-macaronesian-gin-en-italia-el-mayor-mercado-europeo-de-ginebra-premium.html).
- **Concorrenza:** Portofino Dry Gin tra i leader premium e dichiara +26% di e-commerce diretto nel primo semestre. Gruppo Montenegro spinge Edgar Sopper (Etna): la premiumizzazione passa dal legame col territorio, quindi la storia fenicia/mediterranea è il nostro asset. Fonte: [Beverfood](https://www.beverfood.com/edgar-sopper-premium-dry-gin-etna-sicilia/).
- **Prezzi (08/10):** craft italiani 33–42 €; Hendrick's e Gin Mare online scontati a 28–39 €. Il listino a 44,90 € è alto per un brand senza notorietà né recensioni.
- **E-commerce spirits:** IWSR vede l'Italia tra i mercati online più dinamici fino al 2028 (+20% di valore globale 2023–28). Canali da valutare: Tannico (oltre 30% di quota, controllato in parte da Campari), Bottle of Italy, Vino.com, La Casa degli Spiriti, Bottega Alcolica. Fonte: [Gambero Rosso](https://www.gamberorosso.it/vino/tre-bicchieri/e-commerce-italiano-previsioni-iwsr/).
- **Normativa:** la vendita a distanza di alcolici ha aspetti fiscali (accise) e di verifica età ancora da far validare da un consulente.
- _Le cifre vengono in gran parte da comunicati e articoli di settore, non da report IWSR o Nielsen verificati._

## 4. Top 3 priorità per la settimana prossima
1. **Sbloccare i monitor.** Riautorizzare il connettore Stripe (claude.ai → connettori) e aggiungere `ilfeniciogin.it` e `buy.stripe.com` alla allowlist di rete. Senza questo restiamo ciechi da una settimana.
2. **Decidere prezzo e spedizione, poi allineare tutto.** Scegliere il listino (39,90 / 41,90 / 44,90 con promo di lancio) e la policy spedizioni. Poi uniformare Stripe, Termini e social, archiviare i 6 duplicati "(Copy)" e sistemare Klarna.
3. **Fare uscire i contenuti e spingere la waitlist.** Confermare cosa è stato pubblicato del piano 5–11/10, programmare i post della settimana (senza prezzo, con countdown Halloween) e applicare i fix UX urgenti: CTA waitlist in home e consenso cookie prima di GA.

## 5. Opportunità da non perdere
**Pacchetto regalo di Natale + candidatura alle liste editoriali.** Le ricerche "regalo gin" crescono da fine ottobre e il SEO impiega settimane a indicizzarsi: se si parte ora si arriva al Black Friday (27/11). Preparare un bundle (gin + tonica o bicchieri) a 49–59 € con offerta early-bird per la waitlist. In parallelo, inviare kit stampa e campione a Dissapore, Scatti di Gusto e Mentelocale per le prossime edizioni delle liste "migliori gin artigianali italiani", dove oggi non compariamo.

_Fonti: report in `reports/` e `social/` del repo; ricerche web del 09/10/2026._
