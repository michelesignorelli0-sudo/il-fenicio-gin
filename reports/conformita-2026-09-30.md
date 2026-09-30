# Conformità Sito ↔ Stripe — 2026-09-30

**Stato generale: DISALLINEATO**

Account Stripe: IL FENICIO SRL (live). Fonti: `shop.html`, `index.html`, `termini.html` vs. prodotti, prezzi, payment link e configurazione metodi di pagamento Stripe.

## Sintesi dei dati

**Sito**
- `shop.html` è una pagina "coming soon" con lista d'attesa: nessun prezzo, nessun link di acquisto Stripe (nessun `buy.stripe.com` nei file HTML). Prodotto citato: Il Fenicio Gin, 700ml, 40% vol.
- `index.html`: nessun prezzo.
- `termini.html`: prezzi in € IVA inclusa 22%; spedizione gratuita da 3 bottiglie; spedizione solo in Italia, 24/48h; pagamento via Stripe con Visa, Mastercard, American Express, Apple Pay, Google Pay.

**Stripe (live)**
- 6 prodotti attivi, tutti "Gin Premium Italiano · 700ml · 40% Vol": 1 chiamato "Il fenicio Gin" + 5 duplicati "(Copy) … Il fenicio Gin". Tutti di tipo `service`.
- 6 prezzi, tutti € 39,90 one-time, tax_behavior `inclusive`.
- 6 payment link attivi (uno per prodotto), tutti con: spedizione solo IT, `shipping_options` vuoto, automatic tax attiva, accettazione termini obbligatoria.
- Metodi di pagamento: carte ON, Apple Pay ON, Google Pay ON, **Klarna ON**; nessun altro.

## Discrepanze

| # | Sito | Stripe | Gravità |
|---|------|--------|---------|
| 1 | Spedizione gratuita da 3 bottiglie (termini.html §3); "spese di spedizione, se applicabili, indicate prima del completamento" | Nessuna shipping option su nessun payment link; nessuna regola di quantità/soglia. Ogni link vende 1 sola riga prodotto senza spedizione né logica "3 bottiglie gratis" | Alta |
| 2 | Un solo prodotto (Il Fenicio Gin) | 6 prodotti/prezzi/payment link duplicati, 5 con nome "(Copy) …" (visibile al cliente nel checkout) | Alta |
| 3 | Shop non ancora aperto (lista d'attesa, in attesa di autorizzazioni) | 6 payment link live e attivi, acquistabili da chiunque conosca l'URL | Media |
| 4 | Metodi accettati: carte (Visa/MC/Amex), Apple Pay, Google Pay | Abilitato anche **Klarna**, non dichiarato nei termini | Media |
| 5 | Prodotto fisico (bottiglia) | Tipo `service`, senza `shippable`, senza dimensioni/peso | Bassa |
| 6 | Prezzo: nessun prezzo pubblicato sul sito | € 39,90 IVA incl. su tutti i prezzi — non verificabile, coerente solo come "IVA inclusa" (termini) | Info |

Nota: non è stato possibile verificare i singoli circuiti carta (Visa/MC/Amex) separatamente: Stripe li abilita tutti con "card" (ON). Apple Pay e Google Pay sono ON.

## Azioni raccomandate

1. Creare una shipping rate gratuita (soglia: quantità ≥ 3) e una a pagamento per 1–2 bottiglie; abilitare la selezione quantità (adjustable quantity) sul payment link e allegare le shipping option. Verificare che le spese corrispondano ai Termini.
2. Mantenere un solo prodotto "Il Fenicio Gin" e un solo payment link; archiviare i 5 duplicati "(Copy)" e disattivare i relativi link e prezzi.
3. Finché lo shop non è aperto, disattivare il payment link oppure confermare che l'URL non è pubblico.
4. Disattivare Klarna in Stripe oppure aggiungerlo ai Termini §3.
5. Impostare il prodotto come bene fisico (tipo `good`, shippable) con peso/dimensioni.
6. Al lancio pubblicare prezzo e link Stripe su `shop.html` e ri-eseguire questa verifica.
