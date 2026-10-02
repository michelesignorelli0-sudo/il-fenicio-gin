# Il Fenicio — Sito web

Sito vetrina di **Il Fenicio S.r.l.**, gin artigianale premium italiano.
Il sito presenta il prodotto, il brand e i contatti; lo shop è attualmente in
modalità "In Arrivo" con raccolta iscrizioni a una lista d'attesa.

## Stack

Sito **statico**, senza framework né build step:

- HTML5 (una pagina per sezione)
- CSS vanilla (`css/style.css`, `css/fonts.css` con font self-hosted)
- JavaScript vanilla (`js/main.js`)
- Form di contatto e lista d'attesa gestiti via [Web3Forms](https://web3forms.com)
- Analytics: Google Analytics 4 (GA4), caricato **solo previo consenso cookie**

Nessuna dipendenza npm: i file vengono serviti così come sono.

## Struttura

```
.
├── index.html            Home
├── il-gin.html           Il prodotto / le botaniche
├── perche-noi.html       Brand e valori
├── shop.html             "In Arrivo" + lista d'attesa
├── contatti.html         Form di contatto
├── privacy.html          Privacy Policy
├── cookie-policy.html    Cookie Policy
├── termini.html          Termini e Condizioni di vendita
├── css/                  Fogli di stile e font CSS
├── fonts/                Font self-hosted (Cormorant Garamond, Jost)
├── img/                  Immagini del sito
├── js/main.js            Logica: age-gate, navigazione, animazioni, GA4 consenso
├── robots.txt
├── sitemap.xml
└── .github/workflows/deploy.yml   Deploy automatico FTP
```

Le cartelle `reports/`, `social/` contengono materiale di lavoro interno.

## Consenso cookie e Google Analytics

GA4 (ID `G-PS4LVTMPPV`) **non viene caricato** finché l'utente non accetta i
cookie tramite il banner. La logica è centralizzata in `js/main.js`
(`fenicioLoadAnalytics`): lo script `gtag.js` viene aggiunto dinamicamente solo
se `localStorage.fenicio_cookie === 'accepted'`. Alla pressione di "Accetta" il
banner richiama la funzione; al "Rifiuta" nulla viene caricato.

## Age gate

Un overlay di verifica età (18+) viene mostrato alla prima visita e la scelta è
memorizzata in `localStorage` (`fenicio_age_ok`). Se il markup non è presente
nella pagina, viene iniettato da `js/main.js`, così funziona su tutte le pagine.

## Sviluppo locale

Essendo un sito statico è sufficiente aprire i file in un browser, oppure
servire la cartella con un server statico, ad esempio:

```bash
python3 -m http.server 8000
```

e aprire `http://localhost:8000`.

## Deploy

Il deploy è automatico tramite GitHub Actions (`.github/workflows/deploy.yml`):
a ogni push sui branch `main`/`master` il contenuto del repository viene
pubblicato via FTP sull'hosting (Hostinger), nella cartella
`/domains/ilfeniciogin.it/public_html/`.

Le credenziali FTP sono gestite tramite i secrets del repository:
`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
