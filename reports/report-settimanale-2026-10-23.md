# Report settimanale — Il Fenicio Gin — 2026-10-23 (venerdì)

**Fase:** ancora pre-lancio, shop in lista d'attesa. Quinta settimana con gli stessi due blocchi tecnici aperti (rete monitor, OAuth Stripe). Vendite/ordini: n/d.

## 1. Stato sito 🟡 (invariato)
- **Monitor fermo:** l'ultimo report monitor nel repo è del 15/10; nessun report 16–23/10. Sempre giallo: `ilfeniciogin.it` e `buy.stripe.com` bloccati dal proxy (403), disponibilità e 6 link Stripe **mai verificati**.
- **Stripe:** ultimo daily 15/10, non eseguito (connettore non autorizzato). Nessun dato su ordini, pagamenti, dispute.
- **Incoerenze aperte:** prezzo (39,90 € social/ricerca · 41,90 € Stripe · 44,90 € raccomandato; sul sito nessun prezzo); spedizione ("sempre gratuita" in `termini.html:74` vs soglia 3 bottiglie); 6 prodotti "(Copy)" su Stripe; UX (waitlist non raggiungibile dalla home, GA prima del consenso cookie).
- Visibilità organica critica (ultima verifica 15/10).

## 2. Social 🟡
- **Piano pubblicato: non verificabile** dal repo (nessuna conferma di pubblicazione). Controllare a mano IG/FB/TikTok.
- **Creato:** piano IG/FB 19–25/10 (4 post: Reel "Il colpevole" 20/10, carosello serve d'autunno 22/10, ora solare 24/10, Halloween 31/10 da programmare giovedì 29) + piano-settimana 19–25/10 (6 post, anche TikTok) + 5 report trend (19–23/10; oggi idee "Suspect", "Subtle foreshadowing", ora solare).
- **Rischio:** le caption riportano 39,90 € con shop chiuso e prezzo non deciso. Togliere i prezzi finché non confermato. Due piani paralleli per la stessa settimana: scegliere uno.
- Prossimo piano (26/10–1/11) non ancora nel repo: serve quello Halloween.

## 3. Mercato
- **Gin in Italia 2025:** 3ª categoria spirits, 328,7 M€ e 18,2 M litri; ~+25% a volume in 5 anni; Italia 1° mercato UE per gin premium (IWSR, >511.000 casse da 8,4 L). Fonti in parte promozionali: cautela.
- **E-commerce:** IWSR prevede crescita tra le più rapide al 2028 (+~0,5 M acquirenti online nel 2024). Tannico (Campari/Moët Hennessy) >30% di quota; Bottle of Italy in crescita (autodichiarato 3,47 M€ nel 2024); Amazon presente.
- **Competitor:** Edgar Sopper (Montenegro, annunciato 30/06/2026), Portofino (Light Edition, vendite dirette online +26% H1), Malfy (Pernod Ricard), Macaronesian Gin in Italia.
- **Ricerca 21/10:** fascia craft italiano online ~30–40 €; Il Fenicio al limite alto; i grandi marchi scontati sui comparatori.
- Date: ora solare dom 25/10, Halloween sab 31/10.

## 4. Top 3 priorità settimana prossima
1. **Sbloccare il monitoraggio:** consentire `ilfeniciogin.it` e `buy.stripe.com` nella network policy e riautorizzare il connettore Stripe (claude.ai > connettori).
2. **Decidere prezzo e spedizione e allinearli ovunque** (Stripe, Termini, social); togliere i prezzi dalle caption nel frattempo; archiviare i prodotti "(Copy)".
3. **Halloween + sito:** pubblicare il Reel Halloween (programmare entro gio 29/10), correggere waitlist dalla home e consenso cookie/GA, richiedere indicizzazione su Search Console.

## 5. Opportunità da non perdere
**Bundle regalo Natale D2C** (bottiglia + tonica/bitter, ricette speziate autunno/inverno), con Halloween come ponte e lista d'attesa come base. Portofino mostra che il diretto cresce (+26%); un bundle evita il confronto prezzo coi marchi scontati. Per esserci a novembre servono prezzo, spedizione e shop chiusi entro fine ottobre. In parallelo: verifica normativa vendita online alcolici (verifica età, accise, spedizioni) con consulente/ADM.

*Fonti: Beverfood, Vinetur/IWSR, Gambero Rosso, Beverage Daily, repo reports/ e social/.*
