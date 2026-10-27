# Conformità sito-Stripe — 2026-10-27

**Stato generale: NON VERIFICABILE (connettore Stripe non autorizzato)**

## Lato sito (verificato)
- shop.html è una pagina "In Arrivo" (lancio in preparazione, solo iscrizione newsletter): nessun prodotto acquistabile.
- shop.html e index.html non contengono prezzi, né payment link Stripe.
- termini.html: "La spedizione è sempre gratuita" (nessuna soglia di 3 bottiglie, in contrasto con la regola attesa "gratuita da 3 bottiglie").
- termini.html: metodi di pagamento dichiarati: Visa, Mastercard, American Express, Apple Pay, Google Pay e **Klarna** (Klarna non è nell'elenco atteso).

## Lato Stripe
Il server MCP Stripe richiede autenticazione OAuth: nessun prodotto, prezzo, payment link o metodo di pagamento leggibile. Confronto non eseguito.

## Discrepanze interne al sito
1. Spedizione sempre gratuita (termini) vs. gratuita da 3 bottiglie (regola attesa).
2. Klarna citato nei termini.

## Azioni raccomandate
- Riautorizzare il connettore Stripe nelle impostazioni connettori di claude.ai.
- Allineare il testo sulla spedizione e su Klarna con la configurazione reale Stripe.
