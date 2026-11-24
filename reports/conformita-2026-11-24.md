# Conformità Sito–Stripe — 2026-11-24

## Stato generale: NON VERIFICABILE lato Stripe (trattare come DISALLINEATO fino a verifica)

Il connettore Stripe richiede un nuovo login (connessione rifiutata, come il 2026-11-17): prodotti, prezzi, payment link, shipping rates e metodi di pagamento Stripe **non sono stati letti**. Il confronto sito↔Stripe non è stato eseguito.

## Dati rilevati sul sito (invariati rispetto al 17/11)
- **shop.html**: modalità "in arrivo" con lista d'attesa (web3forms). Nessun prezzo, nessun payment link/checkout Stripe. Unico prodotto: Il Fenicio Gin 700ml 40% vol.
- **index.html / il-gin.html / perche-noi.html**: nessun prezzo.
- **termini.html**: prezzi in € IVA 22% inclusa (nessun importo); "La spedizione è sempre gratuita"; pagamenti via Stripe con Visa, Mastercard, American Express, Apple Pay, Google Pay e Klarna.

## Discrepanze / incoerenze
1. **Spedizione**: termini.html dice "sempre gratuita", ma la regola da verificare è "gratuita da 3 bottiglie"; lo stesso paragrafo dice anche "spese di spedizione, se applicabili, indicate separatamente" (contraddittorio).
2. **Metodi di pagamento**: i Termini citano anche Klarna (non nella lista di controllo); tutti i metodi vanno confermati in Stripe.
3. Lo shop non è attivo, ma i Termini descrivono già un flusso di acquisto.

## Azioni raccomandate
- Rifare il login al connettore Stripe (impostazioni connettori claude.ai) e rieseguire il controllo.
- Decidere la politica di spedizione e uniformare termini.html e Stripe.
- Verificare in Stripe: prodotto, prezzo, payment link, shipping rates, metodi (Visa, MC, Amex, Apple Pay, Google Pay, Klarna).
