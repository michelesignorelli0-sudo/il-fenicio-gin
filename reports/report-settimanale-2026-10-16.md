# Report settimanale — Il Fenicio Gin — 2026-10-16 (venerdì)

**Fase:** ancora pre-lancio. Shop in lista d'attesa. Vendite/ordini: n/d (Stripe cieco). Quarta settimana senza i due blocchi tecnici risolti (rete monitor, OAuth Stripe).

## 1. Stato sito 🟡 (invariato)
- **Monitor 9–15/10: sempre giallo.** `ilfeniciogin.it` e `buy.stripe.com` bloccati dal proxy (403): disponibilità e 6 link Stripe **mai verificati**. Segnalato dal 02/10, non risolto.
- **Stripe non autorizzato:** daily e conformità (13/10) non eseguiti. Ultimo dato valido: 07/10 (0 ordini, 0 dispute).
- **Prezzo ancora incoerente:** Stripe 41,90 € · analisi prezzi 44,90 € (raccomandato, promo max -10%) · social/ricerca 39,90 €. Sul sito nessun prezzo.
- **Spedizione:** non è chiaro se "sempre gratuita" (policy dei Termini) o "gratis da 3 bottiglie"; nessuna shipping option su Stripe.
- **Fatto:** commit f1a9729 (pulizia immagini orfane, Klarna nei Termini).
- **Aperti:** 6 prodotti "(Copy)" su Stripe, audit UX (waitlist non raggiungibile dalla home, GA prima del consenso cookie).
- **Visibilità organica: critica** (15/10): il brand non compare per "il fenicio gin" né per keyword premium/artigianale.

## 2. Social 🟡
- **Piano pubblicato: non verificabile.** Esistono il piano 12–18/10 (5 post: lun, mar, gio Catania Gin Days, ven lista d'attesa, dom UGC) e il piano-settimana 7 post; nel repo nessuna conferma di pubblicazione. Controllare a mano IG/FB/TikTok.
- **Post/idee creati:** 5 report trend (12–16/10); il 16/10 idee Halloween ("La pozione", reveal viola).
- **Rischio:** il post del 16/10 riporta 39,90 € con shop chiuso e prezzo non deciso. Niente prezzi nelle caption finché non confermato.
- Audio/hashtag TikTok e Reels da verificare in Creative Center prima di pubblicare.

## 3. Mercato
- **Gin in Italia (2025):** 3ª categoria spirits, 328,7 M€ e 18,2 M litri; premium/super premium in crescita; Italia 1° mercato UE per gin premium (IWSR via Varma Spirits). Preferenza per profili mediterranei. Cifre da comunicati: cautela.
- **E-commerce spirits:** IWSR prevede crescita online dell'Italia tra le più dinamiche al 2028 (+~0,5 M acquirenti online nel 2024). Tannico (Campari/Moët Hennessy) leader con >30% di quota; Bottle of Italy e Amazon presidiano il resto.
- **Competitor:** Edgar Sopper (Montenegro, Etna), Portofino Light (bassa gradazione), Macaronesian Gin via OnestiGroup (on-trade + e-commerce), Malfy (Pernod Ricard) in forte promo.
- **Eventi:** Catania Gin Days 16–17/10 in corso; Halloween 31/10.

## 4. Top 3 priorità settimana prossima
1. **Sbloccare il monitoraggio:** consentire `ilfeniciogin.it` e `buy.stripe.com` nella network policy e riautorizzare il connettore Stripe (claude.ai > connettori).
2. **Decidere prezzo e spedizione e allinearli ovunque:** 44,90 € (raccomandato) vs 39,90/41,90; poi aggiornare Stripe, Termini, social; archiviare i prodotti "(Copy)".
3. **Visibilità:** sistemare i due problemi UX (waitlist dalla home, consenso cookie/GA), pubblicare contenuti SEO "gin italiano premium", chiedere indicizzazione (Search Console).

## 5. Opportunità da non perdere
**Natale / regali + Halloween come ponte.** Campagna regalo (bundle bottiglia + tonica, max -10% a Black Friday) costruita partendo dalla lista d'attesa: l'hook "gin che cambia colore" è perfetto per Halloween (31/10) e per il regalo originale. Per esserci a novembre serve chiudere prezzo/spedizione e sito entro fine ottobre.
