# Overzicht van de notitie feature 

De notitie feature is ontworpen om de communicatie en het beheer binnen het verhuringssysteem te verbeteren.
Deze functionaliteit stelt gebruikers in staat om belangrijke opmerkingen en informatie te documenteren voor zowel huurders als 
specifieke verhuur.

De functionaliteit is opgedeeld in de documentatie in de volgende delen.

- Permissies
- Notities voor huurder
- Notities voor verhuringen 
- Zichtbaarheid van een notitie
- Automatisch verwijderen van notities

## Voordelen van deze feature

- **Verbeterde communicatie:** Door notities toe te voegen, kunnen gebruikers belangrijke informatie documenteren en delen, wat de communicatie en samenwerking verbetert.
- **Efficientie:** Met notities kan informatie snel worden geraadpleegd en bijgewerkt, wat tijd bespaart en het beheerproces stroomlijnt.
- **Betere klantenservice:** Door notities over huurders en hun voorkeuren bij te houden, kunnen scoutsgroepen een meer gepersonaliseerde en efficiente service bieden.
 
## Permissies

Omdat notities bij een verhuring en of huurder van gevoelige aard kunnen zijn hebben we dit stukje van de applicatie opgebouwd onder een authorisatie policy. 
Deze authorisatie policy definieert wie onder welke omstandigheden een notitie kan bekijken, bewerken en of verwijderen. We documenteren deze met de woorden 
`deny` voor weigering en `allow` als toelating.

De meer algemene informatie voor de permissies kan je [hier](/users/permissions) vinden.

### Omtrent de notities van een verhuring 

Bij het beheren van de notities van een verhuring is het van belang om te bepalen welke informatie gedeeld kan worden en met wie. 
Deze notities bevatten vaak details over de staat van de verhuur, afspraken over betalingen, en eventuele opmerkingen over schade of reparaties. 
Het is belangrijk om de privacy van de huurder te respecteren en gevoelige informatie alleen te delen met partijen die daartoe bevoegd zijn. 

Daarom hebben de notities opgebouwd van enkele permissies hieronder definieren we een tabel met alle permissies en info omtrent wie wat kan met de notities
die betrekking hebben tot de verhuring. 

| &nbsp;                                     | **viewAny**     | **view**        | **create**        | **update**                    | **destroy**                   |
|:------------------------------------------ | :-------------- | :-------------- | :---------------- | :---------------------------- | :---------------------------- |
| **Gebruikers**                             | `deny`          | `deny`          | `deny`            | `deny`                        | `deny`                        |
| **Raad van bestuur** <sup><i>(2)</i></sup> | `allow`         | `allow`         | `allow`           | `allow` <sup><i>(1)</i></sup> | `allow` <sup><i>(1)</i></sup> |
| **Administrator** <sup><i>(2)</i></sup>    | `allow`         | `allow`         | `allow`           | `allow` <sup><i>(1)</i></sup> | `allow` <sup><i>(1)</i></sup> |  
| **Webmaster** <sup><i>(2)</i></sup>        | `allow`         | `allow`         | `allow`           | `allow`                       | `allow`                       |

<small>***1.*** De authorisatie laat het alleen toe om de manipulatie uit te voeren wanneer de geauthenticeerde gebruiker de autheur is van de notitie.</small>

<small>***2.*** Een gebruiker in deze groep zal de authorisatie krijgen indien hij/zij is aangesteld om de verhuring dat is gelinkt aan de notitie op te volgen en te begeleiden.</small>

### Omtrent de notities van een huurder


## Notities voor huurders 

De volgende functionaliteiten zijn van toepassing op het notitie systeem dat gerelateerd is aan de huurders. 

### Toevoegen van notities

Gebruikers kunnen notities toevoegen aan het profiel van een huurder. Dit kan nuttig zijn voor het bijhouden van relevante informatie 
zoals speciale wensen, eerdere ervaringen of contactinformatie. Of inbreuken van een bepaalde grote die worden meegenomen 
naar verdere verhuur aanvragen.

## Bewerken en verwijderen van notities

Notities kunnen indien nodig bewerkt of verwijderd, waardoor de informatie actueel en relevant blijft. Voor iedereen en er tussen de 
beheerders een zekere transparantie ontstaat.

### Bekijken van notities 

Alle notities die aan een huurder zijn gekoppeld kunnen eenvoudig worden bekeken door gebruikers. Geen verdere permissies zijn 
nodig hiervoor. Omdat we sterk geloven dat de notities zichtbaar moeten zijn voor elke beheerder.

## Notities voor de verhuringen

De notitie feature is ontworpen om de communicatie en het beheer van een verhuring te verbeteren.
Deze functionaliteit stelt gebruikers in staat om belangrijke opmerkingen en informatie te documenten met specifieke toespitsing op
de verhuringen in de applicatie. 

### Toevoegen van notities

Tijdens het beheren van een specieke verhuring kunnen gebruikers notities toevoegen die relevant zijn voor de specifieke verhuur. 
Dit kan een betrekking hebben op afspraken, betalingsinformatie, of bijzonderhden over de verhuur (denk aan bv meegeleverde tafels).
Om een notitie aan verhuringen toe te voegen zijn geen specifieke permissies of gebruikersgroepen vereist.

### Bekijken van notities 

Gebruikers van de applicaties kunnen alle notities inkijken die gekoppeld zijn aan de verhuring. Dit zorgt voor de nodige transparantie. 

### Bewerken en verwijderen van notities

Notities die zijn gekoppeld aan een verhuring kunnen ook worden bewerkt en of verwijderd. Zodat de informatie accuraat blijft

## Gebruiksscenario

### Huurders

Stel dat een huurder Jan Jansen in dit voorbeeld, vaak specifieke eisen heeft voor de inrichting van de gehuurde ruimte. 
Een beheerde kan dan een notitie toevoegen aan het huurdersprofiel van jan waarin deze eisen worden vermeld.
Wanneer jan opnieuw een reservering aanvraagt, kan de beheerder deze notitie raadplegen en ervoor zorgen dat aan zijn wensen wordt voldaan.

### Verhuringen 

Een scoutsgroep verhuurt hun lokaal/domain aan een externe partij voor een weekend of kamp. 
Tijdens de verhuur is er afgesproken dat de huurder een extra vergoeding betaalt voor het gebruik van bepaalde faciliteiten. 
De beheerder kan een notitie toevoegen aan deze specifieke verhuurtransactie waarin de detauls van deze afspraak worden vastgelegd.
Dit zorgt ervoor dat alle betrokkenen duidelijk op hoogte zijn van de voorwaarden.

## Conclusie 

De notitie feature is een waardevolle toevoeging zzn het verhuringssysteem voor scoutsgroepen, waarmee gebruikers belangrijke informatie 
kunnen vastleggen en beheren. Of het nu gaat om notities over huurders of specifieke verhuurtransacties, deze functionaliteit draagt 
bij aan een verbeterde communicatie, efficientie en klantenservice binnen het systeem.

