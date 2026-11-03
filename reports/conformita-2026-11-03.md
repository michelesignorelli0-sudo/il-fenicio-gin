# Conformità Sito-Stripe - 2026-11-03

**Stato generale: DISALLINEATO / VERIFICA STRIPE NON ESEGUITA**

Il connettore Stripe richiede autenticazione (OAuth) e non era utilizzabile: nessun dato Stripe (prodotti, prezzi, payment link, metodi di pagamento) è stato letto. Il confronto è quindi solo parziale.

## Cosa risulta sul sito
- `shop.html`: pagina "coming soon" con lista d'attesa (Web3Forms). **Nessun prezzo, nessun payment link/checkout Stripe.** Unico prodotto: Il Fenicio Gin 700ml 40% vol.
- `index.html`: nessun prezzo.
- `termini.html`: prezzi in € IVA inclusa 22% (nessun importo); "La spedizione è sempre gratuita"; pagamenti: Visa, Mastercard, American Express, Apple Pay, Google Pay e **Klarna**; ordine perfezionato via Stripe.

## Discrepanze
1. **Spedizione**: i termini dicono "sempre gratuita" (e al contempo "spese di spedizione, se applicabili"), mentre la regola attesa è gratuita da 3 bottiglie. Incoerenza testuale interna e rispetto alla regola.
2. **Klarna** è citato nei Termini ma non nell'elenco atteso (Visa, Mastercard, Amex, Apple Pay, Google Pay): da verificare se abilitato su Stripe.
3. **Prezzi/prodotti/metodi di pagamento vs Stripe**: non verificabili (Stripe non autorizzato; non erano comunque presenti prezzi sul sito).

## Azioni raccomandate
- Riautorizzare il connettore Stripe dalle impostazioni connettori di claude.ai (problema già presente nei report del 14 e 15/10) e rieseguire il controllo.
- Allineare i Termini alla politica di spedizione reale (gratuita da 3 bottiglie, oppure sempre gratuita) e configurare di conseguenza le shipping rates su Stripe.
- Verificare in Stripe i metodi abilitati (carte, Apple Pay, Google Pay, Klarna) e rimuovere/aggiungere Klarna nei Termini.
- Quando lo shop andrà online, pubblicare prezzi sul sito e confrontarli con i Price Stripe.
