# Conformità Sito–Stripe – 2026-10-13

## Stato generale: NON VERIFICABILE (verifica Stripe impossibile)

Il connettore Stripe MCP richiede nuova autenticazione (OAuth) e non era utilizzabile in questa esecuzione: prodotti, prezzi, payment link e metodi di pagamento Stripe **non sono stati letti**. Il confronto completo non è stato eseguito.

## Lato sito (verificato)
- `shop.html`: ancora pagina pre-lancio ("Avvisami al lancio"), nessun prezzo e nessun link `buy.stripe.com`.
- Nessun prezzo in € nelle pagine HTML. Nessuna modifica a shop/index/termini dal report del 2026-10-06 (ultime modifiche: solo hero parallax).
- `termini.html`: prezzi in € IVA 22% inclusa; spedizione sempre gratuita, solo Italia; pagamenti: Visa, Mastercard, Amex, Apple Pay, Google Pay (via Stripe).
- Nessuna soglia "gratis da 3 bottiglie" sul sito.

## Ultimo stato Stripe noto (2026-10-06, non riverificato)
- 6 payment link a €41,90/bottiglia, 7 prodotti (6 duplicati "(Copy)"), nessuna tariffa di spedizione, solo IT, carte/Apple Pay/Google Pay ON, Klarna ON non dichiarato.

## Azioni raccomandate
- Riautorizzare il connettore Stripe nelle impostazioni connettori di claude.ai, così il controllo di martedì prossimo funziona.
- Restano aperte le azioni del 2026-10-06: decidere politica spedizioni (soglia 3 bottiglie vs sempre gratuita), Klarna, archiviare i prodotti "(Copy)", collegare i payment link al lancio.
