---
layout: post
title: Mapy zdarma a geocaching na GPS navigaci Garmin Oregon 650
description: Jak dostat mapy na navigaci Garmin a jak tam stáhnout kešky.
category: Linux
published: true
---

Outdoorová GPS navigace Garmin Oregon 650 nabízí krom jiného i nástroje pro geocaching.

## Stahování "kešek" ve Windows

Jako první je nutné nainstalovat program GeoGet. Ten je možné stáhnout z adresy [geoget.ararat.cz](http://geoget.ararat.cz/doku.php), což je domovská stránka programu. Už koncovka .cz ukazuje, že se jedná o produkt z českých luhů a hájů, nicméně program je dostupný též v angličtině. Jako další je nutná instalace pluginu [GPX Garmin](http://geoget.ararat.cz/doku.php/user:skript:gpxgarmin), který slouží k následnému generování keší pro novější navigace Garmin.

Po nainstalování programu GeoGet a pluginu GPX Garmin je již možné se v programu GeoGet přihlásit k GeoCaching účtu a začít stahovat kešky. To se děje přes hlavní menu -> Databáze -> Import -> Stáhnout kešky... Tímto se otevře malé okénko, ve kterém kliknete na druhou záložku "Středový bod a poloměr", kam vložíte souřadnice místa, okolo kterého chcete nechat kešky stahovat. Tyto souřadnice se dají získat několika způsoby. Nejjednodušší je na mapy.cz vybrat záložku "Body a měření" -> "Vlastní bod na mapě -> kliknout do mapy na místo, okolo kterého se mají kešky stahovat. Souřadnice, které takto získáme v okénku níže pak jednoduše zkopírovat do schránky pomocí "Ctrl + c" a v programu GeoGet kliknout na tlačítko "Vložit". Poté je nutné kliknout ještě na vedlejší tlačítko "Zapsat"! Nížeji je možné zadat v jak velkém okruhu se mají kešky stahovat a klikněte na tlačítko "OK".

Program bude chvíli stahovat a po čase se objeví okénku, které ohlásí, kolik koší stáhl, kolik nových přidal a kolik jich aktualizoval. Klikněte na tlačítko "Zobrazit", čímž se v hlavním okně objeví seznam kešek.

Ty se posléze exportují do formátu, který přečte i navigace Garmin kliknutím v hlavním menu na "Seznam" -> "Export...", v právě vyskočeném okně vyberte možnost "GPS - GPX Garmin - pro nové Garmin GPS" a vyskočí na vás okno, ve kterém můžete zvolit, kam chcete kešky uložit. V zařízeních Garmin je nutné je ukládat do složky /GARMIN/Garmin/GPX/


**TIP**: Pojmenovávejte .gpx souboy tak, aby bylo zřejmé, k jakému datu a místu se vztahují, tj. například: *2015-05-11-prerov-25km.gpx*. Pokud totiž budete chtít aktualizovat danou oblast a/nebo navšívit místo v jejím okolí, víte, jak stará jsou data (2015-05-11) a k jaké oblasti se vztahují (*prerov-25km*).

## Mapy OpenStreetMap v navigaci Garmin Oregon 650

Chcete-li zdarma používat mapy OpenStreetMap (které jsou k dispozici zdarma a pod svobodnou licencí) ve vaší navigaci Garmin Oregon 650, jděte na stránku [garmin.openstreetmap.nl](http://garmin.openstreetmap.nl/), tam si vyberte zemi (či při ručním výběru zaškrtnutím políčka "Enable manual tile selection" vybrané části světa), kterou chcete stáhnout a kliknětě na "Download map now!" (v případě vlastního výběru vložte emailovou adresu a pak poctivě čekejte než vám dojde email, že mapa je vygenerovaná. Může jít o hodiny nebo i o dny). Pak máte na výběr několik možností co stáhnout. Tento popis se bude týkat přímého nahrátí na zařízení. K tomu je třeba stáhnout soubor s názvem "osm_generic_gmapsupp.zip", u kterého je popisek "Compressed file containing a single image that can be placed directly onto the SD-card of the GPS. Unzip first!". Podle této rady tedy po stažení soubor rozbalte a soubor s názvem "gmapsupp.img" přesuňte na SD kartu do složky garmin (není-li na kartě přítomná, vytvořte ji). Pozor, nevkládejte mapu přímo do zařízení. Pak už jen zařízení odpojte a danou mapu využívejte.

Bude-li vám v mapě něco chybět, neváhejte a [data doplňte](https://wiki.openstreetmap.org/wiki/Cs:Beginners%27_guide) ;-)

<center><b><a href="../">Přehled technických článků</a></b></center>
