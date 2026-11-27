# Report settimanale — Il Fenicio Gin — 2026-11-27 (venerdì, Black Friday)

**Fase:** pre-lancio, shop in lista d'attesa. Decima settimana con gli stessi blocchi (rete monitor, OAuth Stripe). Vendite/ordini: n/d.

## 1. Stato sito 🟡 (invariato, ma oggi è Black Friday)
- **Monitor fermo:** ultimo report monitor 15/10. `ilfeniciogin.it` e i 6 link Stripe non verificati dal 15/10 (proxy 403 dal sandbox: non significa che siano giù). Terza settimana consecutiva senza health check (briefing 23/11).
- **Stripe:** connettore da ri-autorizzare (conformità 24/11: "refused"). Nessuna visibilità su vendite/pagamenti/dispute da oltre 6 settimane.
- **Conformità (24/11):** `termini.html` dice spedizione "sempre gratuita" (atteso: da 3 bottiglie; testo contraddittorio) e cita Klarna; i Termini descrivono un acquisto che lo shop (waitlist) non offre.
- **UX (21/11):** nessuna modifica al sito dal 14/11 — 4 punti urgenti ancora aperti: `hero.jpg` 4,8 MB, Google Analytics prima del consenso (rischio GDPR), nessuna CTA waitlist in home, claim non dimostrati.
- **Visibilità organica (26/11): assente** anche sulla query di brand. Mancano JSON-LD e probabilmente indicizzazione.

## 2. Social 🟡
- **Piano 23–29/11 creato** (`piano-2026-11-23`, 5 post; `piano-settimana-2026-11-22`, 7 post) + trend giornalieri fino a oggi. **Pubblicazione effettiva non verificabile dal repo**: controllare a mano IG/FB/TikTok.
- Ancora due piani paralleli per la stessa settimana.
- **Placeholder [OFFERTA] ancora nei post Black Friday (27/11) e teaser:** nessuna offerta definita nel repo. Il post "Non in saldo" è coerente col non scontare, ma va chiuso con una CTA waitlist.
- **Prezzo incoerente:** 39,90 € (social, briefing, ricerca) vs 44,90 € (analisi prezzi 26/11). Decidere un listino unico.
- Manca il piano 30/11–6/12 (Cyber Monday 30/11, Avvento, Immacolata 8/12).

## 3. Mercato
- **Gin italiano:** 3ª categoria spirits (328,7 M€, 18,2 M litri nel 2025); premium/super premium in crescita mentre gli spirits totali calano (report 23/11).
- **Prezzi (26/11):** big brand 34–39 € spesso scontati; craft italiani 37–55 €. Con 44,90 € siamo nel range craft, sopra i big; la raccomandazione resta: listino fermo, sconti mirati (primi ordini 39,90 € / bundle), mai sotto ~37 €.
- **Ricerca web di oggi (standard, dati datati):** nessuna cifra 2026 sul gin premium in Italia. Spirits Selection (post-Covid): gin = categoria più venduta, super premium +10%, brand leader Gin Mare/Hendrick's/Malfy/Monkey 47. GEL Proximity (2024): e-commerce ~6% del volume off-trade spirits nel 2025; la logistica di spedizione decide il successo. Rivenditori dedicati: Spirit Academy, MySpirits, Tannico, Vino.com. Vendere online richiede P.IVA e ATECO 47.91.10.
- **Competitor:** Hendrick's cacao-arancio, Malfy nuova bottiglia, Edgar Sopper Premium; trend low/zero ABV e RTD.
- Fonti: [Spirits Selection](https://spiritsselection.com/en/the-post-covid-spirits-market-in-italy/), [GEL Proximity](https://gelproximity.com/en/?p=3732), [Milano Finanza](https://www.milanofinanza.it/news/gin-mediterraneo-202406041251478517), [Trovaprezzi](https://www.trovaprezzi.it/grappe-liquori-aperitivi/offerte/premium-gin).

## 4. Top 3 priorità per la prossima settimana
1. **Sbloccare la visibilità operativa (lunedì):** ri-autorizzare Stripe nei connettori claude.ai, aggiungere `ilfeniciogin.it` e `buy.stripe.com` alla allowlist di rete, fare un test d'acquisto/test-mode di un link Stripe. Poi rilanciare monitor e conformità.
2. **Decidere prezzo e offerta Cyber Monday/Natale (entro lunedì mattina):** listino unico (39,90 vs 44,90 €), offerta waitlist (es. -10% o bundle), sostituire i placeholder [OFFERTA], pubblicare il piano 30/11–6/12 (uno solo).
3. **Quick win sito (conversione + compliance):** CTA "Entra nella lista d'attesa" in home, hero in WebP (<250 KB), GA dietro consenso, correggere spedizione/Klarna in `termini.html`, aggiungere JSON-LD.

## 5. Opportunità da non perdere
**Finestra regali di Natale (Cyber Monday → ultimi ordini ~15–18/12):** costruire una campagna "lista d'attesa → pre-ordine regalo" con bundle (bottiglia + tonica premium) e spedizione gratuita sopra soglia, rilanciata con il Reel "il regalo che non è in saldo". Il mercato è in crescita premium e il 94% degli italiani compra per Black Friday/Natale (PwC/Codacons): senza checkout attivo si raccolgono almeno email per il lancio.

_Limiti: dati vendite/Stripe e stato sito non disponibili; ricerche web in modalità standard con fonti spesso datate._
