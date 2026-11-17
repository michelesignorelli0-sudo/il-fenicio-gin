# Conformità Sito–Stripe — 2026-11-17

## Stato generale: NON VERIFICABILE (lato Stripe) — nessuna discrepanza lato sito rilevata, ma 2 incoerenze interne

Il connettore Stripe ha richiesto nuovo login ("refused"): prodotti, prezzi, payment link e metodi di pagamento Stripe **non sono stati letti**. Il confronto sito↔Stripe non è stato eseguito.

## Dati rilevati sul sito
- **shop.html**: modalità "in arrivo" con lista d'attesa (web3forms). **Nessun prezzo, nessun payment link/checkout Stripe.** Unico prodotto: Il Fenicio Gin 700ml 40% vol.
- **index.html / il-gin.html**: nessun prezzo.
- **termini.html**: prezzi in € IVA 22% inclusa (nessun importo indicato); "La spedizione è sempre gratuita"; pagamenti via Stripe con Visa, Mastercard, American Express, Apple Pay, Google Pay e **Klarna**.

## Discrepanze / incoerenze
1. **Spedizione**: il sito (termini.html) dichiara spedizione *sempre gratuita*, mentre il controllo richiede "gratuita da 3 bottiglie". Inoltre lo stesso paragrafo dice "spese di spedizione, se applicabili, indicate separatamente" — contraddittorio. Da allineare con la configurazione Stripe (shipping rates) quando verificabile.
2. **Metodi di pagamento**: i termini citano anche **Klarna**, non presente nell'elenco da verificare; Amex/Apple Pay/Google Pay/Klarna vanno confermati in Stripe.
3. Lo shop non è attivo: i Termini descrivono già un flusso di acquisto non ancora presente.

## Azioni raccomandate
- Rifare il login al connettore Stripe (impostazioni connettori claude.ai) e rieseguire il controllo.
- Decidere la politica di spedizione e uniformare termini.html (e Stripe).
- Verificare in Stripe: prodotto Il Fenicio Gin, prezzo, payment link, shipping rates, metodi (Visa, MC, Amex, Apple Pay, Google Pay, Klarna).
