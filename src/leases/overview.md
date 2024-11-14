# Verhuringen

(todo opbouwen van de introductie)

## Statussen

Elke verhuuraanvraag doorloopt een reeks statussen, en afhankelijk van de huidige status kan een aanvraag slechts naar bepaalde volgende statussen worden overgezet.
Dit voorkomt ongeldige overgangen en zorgt voor een gestructureerd proces. Hieronder worden de mogelijke statusovergangen in detail uitgelegd:

### Status: nieuwe aanvraag

Wanneer een potentiële huurder het reserveringsformulier invult op de informatiepagina van het domein, komt de aanvraag binnen als een **Nieuwe Aanvraag**.
Dit is de eerste status van het verhuurproces en geeft aan dat een aanvraag in afwachting is van verdere actie.

**Mogelijke overgangen**

- **Optie (offerte)**: Als de domeinbeheerder de aanvraag in behandeling neemt en een offerte opstelt, wordt de status veranderd naar "Optie (offerte)".
- **Optie**: De huurder wernst geen offerte en wenst direct over te gaan met de benodigde stappen om de verhuring te bevestigen.
- **Bevestigd**: De huurder is de groepwerking of bv leiding die intern een verhuur heeft geregeld voor een kampvuur avond bv.
- **Geannuleerd**: De huuder of beheerde kan de aanvraag op dit punt nog annuleren. (bv: wanneer de opgegeven periode niet meer beschikbaar is)

### Status: optie (offerte)

De status **Optie (offerte)** wordt gebruikt wanneer een offerte is opgemaakt en verzonden naar de potentiele huurder.
De huurder kan vervolgens beslissen om de optie te bevestigen of te annuleren.

**Mogelijke overgangen**

- **Optie**: Als de huurder akkoord gaat met de offerte en besluit verder te gaan met de reservering en de nodige zaken zoals het ondertekenen van het contract en betalen van een waarbord,
wordt de status omgezet naar "Optie"
- **Geannuleerd**: De aanvraag kan geannuleerd worden door de huurder of de beheerder als de huurder afziet van de reservering. Of de afgesproken voorwaarden niet nageleefd worden.

### Status: optie

Wanneer de aanvraag de status **Optie** bereikt, betekent dit de reservering voorlopig is vastgelegd, maar nog niet definitief is.
Dit geeft de huurder een bepaalde tijd om de reservering definitief te bevestigen doormiddel van de afgesproken voorwaarden in orde te brengen en na te leven.

**Mogelijke overgangen**

- **Bevestigd**: Als de huurder binnen de gestelde termijn de reservering bevestigt, veranderd de status naar "Bevestigd".
- **Geannuleerd**: Als de huurder afziet van de reservering, of als de bevestigingstermijn verloopt zonder actie, wordt de status naar "Geannuleerd" gezet.

### Status: bevestigd

De status **Afgesloten** betekent dat de verhuurperiode is voltooid en dat er geen verdere acties meer nodig zijn. Dit markeert het einde van het verhuurproces.

**Mogelijke overgangen**

- **Afgesloten**: Na afloop van de verhuurperiode wordt de status omgezet naar "Afgesloten".
- **Geannuleerd**: In uitzonderlijke gevallen, zoals overmacht of wederzijdse overeenstemming, kan de reservering alsnog worden geannuleerd.

### Status: afgesloten

De status **Afgesloten** betekent dat de verhuurperiode is voltooid en dat er geen verdere acties meer nodig zijn. Dit markeert het einde van het verhuurproces.

**Mogelijke overgangen**

- Geen *(proces voltooid)*

### Status: geannuleerd

De status **Geannuleerd** wordt gebruikt wanneer een aanvraag of reservering op elk moment in het proces wordt geannuleerd. Dit kan gebeuren door de huurder of beheerder, afhankelijk van de omstandigheden.

**Mogelijke overgangen**

- Geen *(proces voltooid)*

### Overzicht van toegestane statusovergangen

De tabel hieronder geeft een overzicht van de verschillende statussen die een verhuuraanvraag kan doorlopen en welke mogelijke statusovergangen op elk moment in het proces beschikbaar zijn.

| Huidige status      | Mogelijke vervolg statussen                      |
| :------------------ | :----------------------------------------------- |
| Nieuwe aanvraag     | Optie (offerte), Offerte, Bevestigd, Geannuleerd |
| Optie (offerte)     | Optie, Gannuleerd                                |
| Optie               | Bevestigd, Geannuleerd                           |
| Bevestigd           | Afgesloten, Geannuleerd                          |
| Afgesloten          | Geen (proces voltooid)                           |
| Geannuleerd         | Geen (proces beëindigd)                          |
