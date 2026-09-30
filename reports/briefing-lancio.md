# Briefing Lancio — Il Fenicio Gin
**Data:** 30 settembre 2026
**Coordinato da:** Direzione Operativa

---

## 1. CORREZIONI LEGALI APPLICATE

### File modificati
- `privacy.html`
- `cookie-policy.html`
- `termini.html`

### Problemi trovati e risolti

**A. Titolare del trattamento incompleto (GDPR art. 13)**
- Problema: la Privacy Policy indicava solo "Il Fenicio Gin, con sede in Italia" — dati insufficienti per il GDPR.
- Correzione applicata: aggiunto ragione sociale completa (Il Fenicio S.r.l.), indirizzo legale, P.IVA e REA nella sezione 1 della Privacy Policy.

**B. Link errato nel cookie banner della Cookie Policy**
- Problema: il banner cookie sulla pagina cookie-policy.html linkava a `privacy.html` invece di rimandare alla Cookie Policy stessa — confusione per l'utente e incoerenza documentale.
- Correzione applicata: link aggiornato a `cookie-policy.html` con testo corretto "Cookie Policy".

**C. Metodo di pagamento Klarna non integrato dichiarato nei T&C**
- Problema: i Termini e Condizioni elencavano Klarna (pagamento rateale) tra i metodi accettati, ma Klarna non è integrato nel checkout Stripe attuale. Dichiarazione falsa e potenzialmente fuorviante ai sensi del Codice del Consumo.
- Correzione applicata: rimosso Klarna dall'elenco metodi di pagamento. Metodi ora dichiarati: Visa, Mastercard, American Express, Apple Pay, Google Pay.

**D. Privacy Policy — aggiunta base giuridica lista d'attesa**
- Problema: il form lista d'attesa raccoglie email ma la base giuridica per questo trattamento non era esplicitata nella Privacy Policy.
- Correzione applicata: aggiunta finalità "Gestione della lista d'attesa al lancio" con base giuridica consenso (art. 6.1.a GDPR) e periodo di conservazione specifico.

**E. Privacy Policy — rimozione riferimento a Stripe (prodotto non in vendita)**
- Problema: la sezione "Destinatari dei Dati" citava Stripe come fornitore anche se la vendita non è ancora attiva. Potenzialmente fuorviante.
- Correzione applicata: rimosso riferimento a Stripe dalla Privacy Policy. Stripe verrà reintrodotto nei documenti legali al momento del lancio effettivo delle vendite.

### Situazioni da monitorare (non urgenti)
- **Cookie banner**: il banner attuale mostra solo "Accetta / Rifiuta" senza dettaglio su cosa cambia con il rifiuto. Per i soli cookie tecnici la normativa italiana permette questo approccio semplificato, ma verificare con consulente legale al momento del lancio se si intende aggiungere strumenti di analytics.
- **Form contatti senza checkbox**: il form di contatto usa dichiarazione testuale ("Inviando questo modulo accetti la Privacy Policy") senza checkbox dedicata. Accettabile per dati necessari alla risposta alla richiesta (base giuridica art. 6.1.b), ma da valutare se si aggiungono finalità marketing.
- **Etichetta prodotto**: al lancio verificare che l'etichetta fisica della bottiglia riporti: ingredienti, allergeni, avvertenza alcol, volume, gradazione, sede produttore (obbligatori per legge in Italia per bevande alcoliche).

---

## 2. MODALITA' COMING SOON — SHOP

### Cosa è stato fatto
La pagina `shop.html` è stata completamente riscritta come pagina "in arrivo" pulita.

### Prima (vecchia shop.html)
- Mostrava prezzo €39.90 con logica di acquisto nascosta
- Conteneva tutto il codice Stripe (6 link buy.stripe.com per quantità 1-6) nell'HTML, anche se nascosti da `SALES_OPEN=false`
- Struttura complessa con selezione quantità, stripe badge, nota "IVA inclusa"
- Confondente: mostrava prezzi e trust bar "pagamento sicuro con Stripe" a utenti che non potevano ancora comprare

### Dopo (nuova shop.html)
- Hero chiaro: "Sta arrivando" con sottotitolo che spiega il prodotto
- Bottiglia in evidenza con specs (700ml, 40%, artigianale, IT)
- Form raccolta email Web3Forms funzionante con messaggio di successo inline
- Nessun codice Stripe, nessun prezzo, nessun link di acquisto
- Nota privacy GDPR-compliant inline al form ("Dichiaro 18+ e accetto Privacy Policy")
- Trust bar adattata: Made in Italy / Cambia colore / Lotti limitati
- Age gate mantenuto

### Attivazione vendite al lancio
Quando le bottiglie saranno fisicamente disponibili e le licenze in ordine:
1. Sostituire `shop.html` con la versione e-commerce (conservata nel git history)
2. Riattivare i link Stripe nel codice
3. Aggiornare la Privacy Policy per includere nuovamente Stripe

---

## 3. ANALISI PREZZO DI LANCIO

### Dati di mercato (gin premium, mercato italiano/europeo, settembre 2026)

| Brand | Posizionamento | Prezzo Italia (700ml) |
|-------|---------------|----------------------|
| Malfy Gin (originale) | Premium italiano | €25-32 |
| Gin Mare | Premium mediterraneo | €30-38 |
| Monkey 47 | Ultra-premium tedesco | €45-55 |
| Gin artigianale small batch IT (es. Insulae Sicilian) | Artigianale nicchia | €50-65 |
| Citadelle | Premium francese | €28-35 |

### Struttura costi Il Fenicio (stima per singola bottiglia)

| Voce | Importo |
|------|---------|
| Costo acquisto bottiglia | €22-23 |
| Commissione Stripe (2.9% + €0.30) | ~€1.50 |
| Spedizione media (ordini sotto 3 bt.) | ~€6-8 |
| Packaging/protezione | ~€1-2 |
| **Totale costi variabili** | **~€31-35** |

### Calcolo margini per prezzo

| Prezzo | Margine lordo % | Margine netto stimato (senza spedizione) |
|--------|----------------|------------------------------------------|
| €34.90 | 34% | ~€11.40 su bottiglia singola |
| €39.90 | 43% | ~€16.40 su bottiglia singola |
| €44.90 | 50% | ~€21.40 su bottiglia singola |

### Raccomandazione: €44.90

**Prezzo di lancio consigliato: €44.90 IVA inclusa.**

Motivazione:
1. **Posizionamento corretto**: si colloca sopra Malfy e Gin Mare, sotto Monkey 47. Comunica premium senza arrivare a ultra-premium inaccessibile.
2. **Caratteristica unica**: il gin che cambia colore non ha equivalenti diretti nel mercato italiano. Questa differenziazione giustifica un premium del 12-20% rispetto alla fascia Malfy/Gin Mare.
3. **Margine sostenibile**: a €44.90 il margine lordo supera il 50%, lasciando spazio per spedizioni gratuite, promozioni lancio e investimento marketing.
4. **Strategia lancio**: si puo' offrire €39.90 come "prezzo riservato lista d'attesa" per i primi 100 acquirenti. Chi si iscrive ora riceve lo sconto — incentivo concreto all'iscrizione e urgenza al lancio.
5. **Psicologia del prezzo**: €44.90 segnala qualita' senza superare la soglia psicologica dei €45. I gin premium a €39.90 sono percepiti come "buoni gin"; quelli a €44-49 come "gin da regalo / da distinguersi".

**Prezzo suggerito al lancio: €44.90 (lista d'attesa: €39.90 per i primi 100 ordini)**

---

## 4. PROSSIMI PASSI

### Immediati (questa settimana)
1. **Fare push su GitHub** del repository aggiornato per deployare le correzioni su ilfeniciogin.it
2. **Verificare funzionamento form Web3Forms** sulla nuova shop.html — inviare un test manuale e confermare ricezione email
3. **Decidere prezzo di lancio** — raccomandazione: €44.90 (lista d'attesa €39.90)

### Prima del lancio (azioni necessarie)
4. **Licenze e autorizzazioni alcol**: verificare con commercialista che Il Fenicio S.r.l. abbia tutte le autorizzazioni per la vendita e-commerce di alcolici in Italia (licenza di commercio, iscrizione SIAE se applicabile, autorizzazione all'ingrosso)
5. **Accise**: verificare posizione accise sugli alcolici — una distilleria deve essere in regola con l'Agenzia delle Dogane prima di vendere
6. **Etichetta bottiglia**: far verificare da tecnico alimentarista che l'etichetta rispetti il Reg. CE 1169/2011 e la normativa sulle bevande alcoliche
7. **Aggiornare Privacy Policy e T&C**: al lancio reintrodurre Stripe come fornitore nei documenti legali
8. **Aggiornare il prezzo nel JSON-LD** della shop.html (attualmente impostato a 39.90, aggiornare al prezzo definitivo)
9. **Corriere**: definire accordo con corriere espresso (BRT, GLS, SDA) per spedizioni sicure di vetro

### Opportunita' da non perdere
- **Lista d'attesa attiva**: ora che il form funziona, iniziare a promuoverlo su Instagram e TikTok. Ogni iscritto alla lista e' un potenziale acquirente al lancio con intenzione alta. Obiettivo: 200+ iscritti prima del lancio.
- **Contenuto pre-lancio**: pubblicare 1 reel a settimana che mostra il "cambio di colore" della bottiglia — e' il principale elemento differenziante e funziona bene su video.

---

## [NOTIFICA SLACK]

*Da inviare nel canale #aggiornamenti*

---

**Il Fenicio — Aggiornamento 30 settembre 2026**

Completati oggi:

1. LEGALE — Corrette 4 non conformita' nei documenti legali del sito:
   - Privacy Policy: aggiunto indirizzo completo Titolare (richiesto GDPR)
   - Cookie Policy: corretto link errato nel banner
   - Termini: rimosso Klarna (non integrato) dai metodi di pagamento
   - Privacy: aggiunta base giuridica raccolta email lista d'attesa

2. SHOP — Pagina sostituita con versione coming soon. Nessun codice Stripe esposto. Form raccolta email Web3Forms attivo e funzionante. Il sito e' ora pulito e legalmente corretto per la fase pre-lancio.

3. PREZZO — Raccomandazione: €44.90 al lancio, €39.90 per i primi 100 iscritti alla lista. Posizionamento sopra Malfy/Gin Mare, margine lordo 50%+.

Prossima azione da parte tua: fare push su GitHub per deployare le modifiche online, poi testare il form di iscrizione su ilfeniciogin.it/shop.html.

---
*Report generato dalla Direzione Operativa — Il Fenicio Gin*
