# Report settimanale — Il Fenicio Gin — 2026-11-20 (venerdì)

**Fase:** pre-lancio, shop in lista d'attesa. Nona settimana con gli stessi blocchi (rete monitor, OAuth Stripe). Vendite/ordini: n/d.

## 1. Stato sito 🟡 (invariato)
- **Monitor fermo:** ultimo report monitor 15/10, nessuno questa settimana. Sito `ilfeniciogin.it` e link Stripe mai verificati (proxy 403 dal sandbox: non significa che siano giù). Confermato dal briefing del 16/11.
- **Stripe:** connettore non autorizzato (login "refused" il 17/11). Zero visibilità su vendite, pagamenti, dispute. Nessun daily dal 15/10.
- **Conformità (17/11):** confronto sito↔Stripe non eseguito. `termini.html` dice spedizione "sempre gratuita" (regola attesa: da 3 bottiglie, e il testo si contraddice) e cita Klarna (da verificare). I Termini descrivono già un acquisto che lo shop (waitlist, nessun prezzo/checkout) non offre.
- **UX (audit 14/11):** 12 punti, 4 urgenti: `hero.jpg` 4,8 MB, Google Analytics attivo prima del consenso (rischio GDPR), nessuna CTA waitlist in home, claim non dimostrati.
- **Visibilità organica (19/11): assente**, anche sulla query di brand. Sito probabilmente non indicizzato.

## 2. Social 🟡
- **Piano 16–22/11 creato** (`piano-2026-11-16`, 5 post; `piano-settimana-2026-11-15`, 7 post) + trend giornalieri fino al 20/11. **Pubblicazione effettiva non verificabile dal repo**: controllare a mano IG/FB/TikTok.
- Ancora due piani paralleli per la stessa settimana: scegliere uno solo.
- **Prezzo incoerente:** 39,90 € (social, briefing, ricerca mercato) vs 44,90 € (analisi prezzi del 19/11).
- Il post 5 (22/11) è un teaser Black Week con offerta ancora da definire.
- **Manca** il piano 23–29/11 (Black Week, Black Friday 27/11). Idea pronta nel trend del 20/11: countdown sobrio in Story + "Gin Tonic Debate".

## 3. Mercato
- Gin = 3ª categoria spirits in Italia (328,7 M€, 18,2 M litri nel 2025); premium/super premium in crescita mentre gli spirits totali calano. Italia 2º mercato europeo del gin premium-plus dopo il Regno Unito (da verificare alla fonte).
- **Prezzi (19/11):** big brand online 27–39 € spesso scontati; artigianali italiani 35–54 €. Raccomandazione: tenere il listino e usare sconti mirati (waitlist -10%).
- **Competitor/novità:** Hendrick's nuova release (cacao e arancio), Malfy con bottiglia rinnovata, Edgar Sopper Premium, Gin Niro, Portofino Light; trend low/zero ABV e RTD. Tutti i nuovi lanci italiani puntano sul "territorio": il Fenicio deve rendere esplicita la storia fenicia + cambio colore.
- **Ricerca web di oggi:** nessun dato 2025-26 nuovo. Statista/IWSR: e-commerce ~6% dell'off-trade spirits entro il 2025 (previsione 2024). Dati datati, solo indicativi.
  Fonti: [Milano Finanza](https://www.milanofinanza.it/news/gin-mediterraneo-202406041251478517), [Spirits Selection](https://spiritsselection.com/en/the-post-covid-spirits-market-in-italy/), [GEL Proximity](https://gelproximity.com/en/?p=3732), [Statista](https://www.statista.com/statistics/1309656/italy-online-alcohol-purchasing-channels)

## 4. Top 3 priorità settimana prossima
1. **Black Week (dal 23/11): decidere offerta, prezzo e stato shop** (39,90 vs 44,90 €; waitlist con codice -10% o bundle regalo). Poi allineare sito, `termini.html` (spedizione, Klarna) e social prima del Black Friday 27/11.
2. **Sbloccare la visibilità:** riautorizzare Stripe (claude.ai > Connettori), consentire `ilfeniciogin.it` e `buy.stripe.com` nella rete dell'ambiente, e nel frattempo 10 min di check manuale del sito. Registrare il sito su Google Search Console e inviare la sitemap.
3. **Fix tecnici urgenti:** hero.jpg → webp <250 KB, Consent Mode per GA, CTA waitlist in home. Più il piano social 23–29/11.

## 5. Opportunità da non perdere
**Natale 2026 con kit regalo + waitlist:** i 40 giorni da Black Week al 24/12 sono la finestra regali. Un bundle (bottiglia + tonica/bicchieri) con pre-order per chi è in lista d'attesa genera le prime vendite senza svalutare il listino, e il cambio colore è il gancio "regalo che sorprende" già pronto nei contenuti social. Competitor scontati: non inseguirli sul prezzo.
