# Nutsverbruik bij een verhuring

Welkom bij de gebruikershandleiding voor het nutsverbruik systeem van de scoutsdomein verhuur applicatie. 
Dit systeem helpt u om het verbruik van water, gas en elektriciteit tijdens verhuurperiodes efficiënt te beheren en bij te houden.
Deze handleiding biedt gedetailleerde instructies over hoe u het systeem kunt gebruiken, van inloggen tot het genereren van rapporten.
De verbruiken die we momenteel tracken zijn Gas, Water en elektriciteit.

## Configuratie

Om het systeem omtrent de verbruiksstatistieken wat flexibeler te maken, hebben we ondersteunende configuratie
toegevoegd en het systeem opgebouwd als een optionele feature. Alle configuratie is gedefinieerd in de config/sijot-verhuur.php file.

```
'utilities' => [
    'gas' => '1.50',
    'water' => '1.50',
    'electricity' => '1.50',
],

'features' => [
    Features::utilityMetrics(),
    //...
],

```
Om de prijzen aan te passen wijzigd u gewoon de waardes in de utilities array.
En om de feature uit te schakelen verwijderd u gewoon de `Features::utilityMetrics()` lijn in de configuratie.

## Overzicht van tracking data en verklaring

Om het overzicht van het nutsoverzicht te bewaren maken we gebruik van twee types data. Deze bestaan uit input variable en gecalculeerde gegevens.
Hieronder vindt.u een overzicht van alle variable en waardes en een korte uitleg omtrent de variable. De namen en type zijn in het Engels omdat we besloten hebben om 
deze te documenteren op basis van de database kolom benaming:

| Naam             | Type          | Beschrijving                                               |
|:-----------------|:--------------|:-----------------------------------------------------------|
| `lease_id`       | **biginit**   | De unieke ID van de verhuring waaraan de data is gekoppeld |
| `naam`           | **string**    | De naam van het nutsverbruik.                              |
| `start_value`    | **decimal**   | De meterstand bij de start van een verhuring               |
| `end_value`      | **decimal**   | De meterstand bij het einde van een verhuring              |
| `unit_price`     | **decimal**   | De eenheids prijs van het verbruik                         |
| `usage_total`    | **decimal**   | Het total verbruik tijdens een verhuring                   |
| `billing_amount` | **decimal**   | De berekende verbruikskost tijdens de verhuur              |
| `created_at`     | **timestamp** | Het tijdstip wanneer het verbruik is toegevoegd.           |
| `updated_at`     | **timestamp** | Het tijdstup wanneer het verbruik laast gewijzigd is.      |

## Initialiseren van verbruiksgegevens

De gebruikers gegevens kunnen pas toegevoegd en bewerkt worden als de verhuring voldoet aan de volgende vereisten. 

- De verhuring moet de status als bevestigd of afgelopen hebben.
- De gebruiker in kwestie moet de rol als `webmaster` of `raad van bestuur` hebben.
- De feature moet geactiveerd zijn in de projectconfiguratie.

Standaard worden de statistieken omtrent het nutsverbruik niet geïnitialiseerd. Omdat in het systeem ook verhuringen van de eigen werking worden opgeslagen, 
En deze zijn niet onderworpen aan de regels die we opstellen omtrent het nutsverbruik tijdens verhuringen. Echter dat dit toch moest zijn kan een gebruiker die voldoet aan de juiste criteria. 
Op de knop 'Verbruik initialiseren' klikken om te starten met het registreren van het nutsverbuik.

## Aanpassen van de gegevens

De verbruikstatistieken kunnen ten alle tijden gewijzigd worden indien ze niet zijn gefinaliseerd door een geautoriseerde gebruiker. 
Indien deze gefinaliseerd zijn kunnen deze ook niet meer aangepast worden. Omdat ze bij het finaliseren zijn ingebracht in de facturatie.

Het verbruik kunt u simpelweg aanpassen door de start en eind waarde in te geven de rest word automatisch berekend door de applicatie. Met als eenheidprijs de waarde waarmee de statistieken zijn geïnitialiseerd.

## Registratie van verbruik

> *Lees ook het stukje omtrent het nutsverbruik in de [facturatie documentatie](/leases/billing)*

Na het aanpassen van het verbruik kunt u deze registreren in de applicatie.
Bij het registreren van het verbruik word geacht dat de gegevens compleet zijn en kunnen deze gegevens niet meer aangepast worden. 

Indien u een webmaster bent of een lid in de raad van bestuur kunt u in de verhuringsinformatie pagina.
onder het tabblad verhruik op de knop 'Verbruik registreren' klikken. Vervolgens krijgt u nog een confirmatie dialoog te zien. 
En indien u daar bevestigd is de registratie van het verbruik afgerond.

Moest u toch een fout hebben gemaakt en of te vroeg de registratie hebben uitgevoerd kan u altijd aan een webmaster vragen om de verbruiksdata 
terug vrij te geven voor de bewerking ervan.

## Veel gestelde vragen (FAQ)

#### Kan ik verbruiksgegevens voor meerdere verhuringsperiodes tegelijkertijd invoeren?

Nee, verbruiksgegevens meoten per verhuurperiode afzonderlijk worden ingevoerd.
Dit zorgt voor naurkeurige tracking en rapportage.

#### Waarom zie ik de verbruikstabel niet in de verhuringsinformatie?

De verbruiksregistratie kan alleen worden uitgevoerd wanneer de verhuring in knwestie geregistreerd staat als bevestigd of afgelosten.


## Conclusie
Het nutsverbruik systeem binnen de scoutsdomein verhuur applicatie is ontworpen om u te helpen bij het efficiënt beheren en registreren van nutsverbruik tijdens verhuurperiodes. 
Volg de instructies in deze handleiding om optimaal gebruik te maken van het systeem. Voor verdere vragen of ondersteuning, raadpleeg de technische documentatie of neem contact op met de systeembeheerder.
