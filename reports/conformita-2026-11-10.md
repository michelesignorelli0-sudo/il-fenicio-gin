# Conformità Sito–Stripe — 2026-11-10

**Stato generale: NON VERIFICABILE / DISALLINEATO (parziale)**

## Limite della verifica
Il server MCP Stripe richiede autenticazione (OAuth non completata): nessun dato Stripe (prodotti, prezzi, payment link, metodi di pagamento) è stato letto. Il confronto con Stripe non è stato possibile.

## Cosa risulta dal sito
- `shop.html`: nessun prezzo, nessun payment link Stripe. È una pagina "lista d'attesa" (prodotto 700ml, 40% vol; vendita non ancora attiva).
- `index.html`: nessun prezzo.
- `termini.html`: prezzi in € IVA inclusa 22%; "La spedizione è sempre gratuita" (nessuna soglia di 3 bottiglie); metodi di pagamento: Visa, Mastercard, American Express, Apple Pay, Google Pay e **Klarna**.

## Discrepanze
1. Condizione di spedizione: il task prevede spedizione gratuita da 3 bottiglie; `termini.html` dice "sempre gratuita" (e nella stessa frase parla di spese "se applicabili" – contraddittorio).
2. Klarna è citato nei termini ma non nell'elenco di metodi atteso (Visa, MC, Amex, Apple Pay, Google Pay): da verificare se è abilitato in Stripe.
3. Nessun prezzo pubblicato sul sito: nulla da confrontare con Stripe finché lo shop non è attivo.

## Azioni raccomandate
- Autorizzare il connettore Stripe in claude.ai e rilanciare il controllo.
- Allineare il testo delle spese di spedizione in `termini.html` alla policy reale (gratuita sempre vs da 3 bottiglie).
- Verificare in Stripe l'abilitazione di Amex, Apple Pay, Google Pay, Klarna.
