# Conformità Sito–Stripe – 2026-10-06

Account: IL FENICIO SRL (livemode). Fonti: shop.html, index.html, il-gin.html, termini.html; Stripe API (payment links, products, payment method configurations).

## Stato generale: DISALLINEATO (lieve, nessun blocco vendite)

Il sito non è ancora in vendita: `shop.html` è una pagina "Sta arrivando" con lista d'attesa (web3forms), senza prezzi né link di acquisto. Gli unici riferimenti commerciali sono in `termini.html`.

## Riepilogo verifiche

| Controllo | Sito | Stripe | Esito |
|---|---|---|---|
| Prezzi | Nessun prezzo esposto (IVA 22% inclusa citata nei Termini) | 6 payment link attivi, €41,90/bottiglia (qty 1–6), EUR, tassa automatica attiva | Non confrontabile / nessun conflitto |
| Prodotto | "Il Fenicio Gin 700ml 40% vol" | 7 prodotti attivi, descrizione "Gin Premium Italiano · 700ml · 40% Vol" | Coerente, ma 6 duplicati "(Copy)" |
| Spedizione | Termini §2: "La spedizione è sempre gratuita"; solo Italia | `shipping_options` vuoto (nessun costo), paesi consentiti: solo IT | Coerente con i Termini; **non** esiste soglia "gratis da 3 bottiglie" né sul sito né su Stripe |
| Metodi di pagamento | Visa, Mastercard, Amex, Apple Pay, Google Pay (Termini §3) | card ON, Apple Pay ON, Google Pay ON; Klarna ON | Coerente; Klarna non dichiarato sul sito |
| Termini di vendita | Accettazione Termini | ToS obbligatori nei payment link | Coerente |

## Discrepanze trovate

1. **Soglia spedizione gratuita (3 bottiglie)**: la regola indicata come riferimento non è presente. Sito: spedizione sempre gratuita; Stripe: nessuna tariffa di spedizione configurata (quindi gratuita per qualsiasi quantità). Il comportamento è coerente tra sito e Stripe, ma diverso dalla condizione attesa.
2. **Klarna abilitato su Stripe** (config. default) ma non elencato tra i metodi accettati nei Termini §3.
3. **Prodotti duplicati su Stripe**: 6 prodotti attivi chiamati "(Copy) … Il fenicio Gin" oltre a quello principale "Il Fenicio Gin" (prod_VIkq2WdkUuDO55). Rischio di confusione e report sporchi.
4. **Prodotti Stripe con `type: service`** e senza immagini: la merce fisica è classificata come servizio (tax code txcd_41020002 da verificare con il commercialista).
5. **Link di acquisto non collegati al sito**: nessun `buy.stripe.com` nelle pagine HTML (coerente con pre-lancio; da collegare al lancio).
6. Non verificabile via API: abilitazione effettiva di American Express (rientra in "card", non c'è toggle separato) e disponibilità Apple Pay/Google Pay per dominio.

## Azioni raccomandate

- Decidere la politica spedizioni: se vale "gratis da 3 bottiglie", aggiungere tariffa spedizione a pagamento per 1–2 bottiglie su Stripe (shipping_options) e aggiornare Termini §2; altrimenti confermare "sempre gratuita".
- Disattivare Klarna in Stripe oppure aggiungerlo ai Termini §3.
- Archiviare i 6 prodotti "(Copy)" e rinominare/correggere il prodotto principale (tipo bene fisico, immagine).
- Al lancio, collegare in shop.html i 6 payment link (€41,90 × qty) e riverificare i prezzi esposti.
- Verificare in Dashboard il dominio per Apple Pay e l'abilitazione Amex.
