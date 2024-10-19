# Platform analytics

De **Platform analytics** module beidt uitgebreide inzichten in het gebruik en de effectiviteit van interactieve elementen op het platform.
Met behulp van verschillende datapunten zoals impressies, hover-gedrag, en klikactiviteit kunnen beheerders gedetailleerde analyses uitvoeren.
Dit helpt bij het optimaliseren van de gebruikerservaring en het verbeteren van de effectiviteit van de interface.

## Feature flag voor de zichtbaarheid

In deze analytics module wordt een **feature flag** gebruikt om de zcihtbaarheid van de analytics te beheren.
Deze flag stelt webmasters in staat om te bepalen of de analytics module al dan niet zichtbaar is voor henzelf of andere webmasters.
Dit betekent dat beheerdes kunnen kiezen wanneer en voor wie de analytics functionaliteit wordt ingeschakeld, bijvoorbeeld tijdens een testfase of voor specifieke doelgroepen.
Deze feature flag beinvloedt alleen de toegankelijkheid van de analytics zelf in de backend, zonder de verzameling van gegevens te beinvloeden.

## Exporteren van de analytische gegevens doormiddel van de export button

De module bevat oon een header action knop waarmee webmasters de verzamelde analytics gegevens eenvoudig kunnen exporteren.
Dit biedt de mogelijkheid om een back-up te maken of data te analyseren in externe tools.
De export kan verschillende formaten ondersteunen, zoals CSV of Excel *(.xlsx)*, afhandelijk van de configuratie van de module.

### Voorbeeld

Wanneer de webmaster/developer op de exportknop klikt. worden de huidige analytics gegevens geexporteerd naar het gekozen formaat.
Dit biedt snelle toegang tot de gegevens buiten het platform en maakt verdere analyse mogelijk.

## Gebruik van console commando's

Webmaster mt SSH toegang tot de CLI van de server kunnen de module beheren via verschillende **Console commando's**, die extra controle en flexibiliteit bieden vanuit de CLI.

### Flushen van de gegevens

Dit commando verwijdert alle verzamelde gegevens uit de analytics-tabel, wat handig is voor onderhoud of het resetten van de module.

```bash
php artisan pan:flush
```

### Weergeven van de analytics in de CLI

Dit commando toont de actuele analytics gegevens in de command line interface, wat handig is voor snelle inzichten zonder de web interface te gebruiken.

```bash
php artisan pan
```

### Activeren of deactiveren van de feature flag

Met dit commando kan de feature flag handmatig worden geactiveerd of gedeactiveerd via de parameters `enable` en `disable`, wat bepaalt of de analytics module zichtbaar is.

:::tabs
== Activeren

```bash
php artisan feature:manage enable AnalyticsView
```

== Deactiveren

```bash
php artisan feature:manage disable AnalyticsView
```

:::

## Impressies en hover gedrag

Een belangrijk aspect van de analytics module is het bijhouden van het aantal impressies.
Dit toont hoe vaak een element op het scherm is weergegeven voor gebruikers.
Impressies geven een algemeen beeld van de zichtbaarheid van content of knoppen, wat cruciaal is om te begrijpen hoeveel mensen een bepaald onderdeel
van de interface daadwerkelijk zien.

Daarnaast wordt het hover-gredrag vastgesteld, waarbij gemeten wordt hoe vaak gebruikers met hun muis over element gaan zonder erop te klikken.
Dit gedrag geeft belangrijke inzichten in de mate van interesse die een gebruiker toont voor een interactief element.
De **hover ratio** helpt verder om te zien welk percentage van de impressies leidt tot hover-activiteit, wat kan wijzen op een sterkte (of zwakker)
aantrekkingskracht van het element.

## Clicks en clickratio

Naast impressies en hovers worden ook de daadwerkelijke clicks gemeten.
Dit datapunt toont hoe vaak een gebruiker op een element klikt nadat het is weergegeven.
Clicks zijn vaak een van de belangrijkste indicatoren voor success, vooral wanneer het gaat om call-to-action knoppen of links.

De **clickratio** geeft een beeld van de verhouding tussen impressies en klikken, wat helpt om de effectiviteit van een element te beoorderen.
Een hoge clickratio wijst op een element dat gebruikers effectief aanzet tot actie, terwijl een lage clickratio suggereert dat verbeteringen nodig zijn om het element aantrekkelijker te maken.

## Analyse en optimalisatie

Door de gegevens over impressies, hober- en klikgedrag te analyseren, kunnen beheerders inzicht krijgen in de prestaties van specifieke elementen op het platform.
Elementen die veel impressies en hover-activiteit genereren maar een lage clickratio hebben, kunnen bijvoorbeeld worden geidentificeerd las kanshebber voor optimalisatie.
Het gebruik van de feature flag voor de zichtbaarheid van analytics maakt het mogelijk om deze statistieken gefaseerd te introduceren en te testen.

## Conslusie

De platform analytics module biedt beeerders krachtige tools om gebruikersgedrag te analyseren en platform elementen te optimaliseren. Door het meten van impressies, hovers en clicks
in combinatie met de mogelijkheid om de zichtbaarheid van de analytics module te beheren via een feature flag.
Op basis van deze datagestuurde inzichten krijgen webmasters en developers de controle om verbeteringen door te voeren.

De console commando's voor het flushen van gegevens, het weergeven van analytics in de CLI, en het activeren of deactiveren van de feature flag met specifieke parameters maken het beheer eenvoudig en efficient.
