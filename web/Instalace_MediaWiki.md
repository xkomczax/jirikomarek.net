---
layout: post
title: Instalace MediaWiki
category: Linux
keywords: mediawiki, php, zip, upload, video
published: true
---

## Upload MediaWiki na server

Máte-li k dispozici na serveru pouze FPT protokol a už ne SSH, pak je jednoduchou volbou, jak na něj dostat soubory MediaWiki k instalaci, je zabalit je jako .zip soubor (tj. rozbalit .tar.gz archiv a znovu jej zabalit jako zip) a pro rozbalení použít jednoduchý php skritp[1]:
```
<?php
system('unzip soubor.zip');
?>
```
FPT protokol jako takový totiž neumí rozbalovat zip soubory (i když někteří FTP klienti tuto možnost nabízejí, ale například FileZilla nikoliv). Další možností je použít některý z webových souborových managerů jako například ten integrovaný v cPanel.

Máte-li SSH přístup na server, pak lze rovnou použít [příkaz k rozbalení archivu]({{site.baseurl}}/web/Archivy_a_jejich_extrahování_v_Linuxu/).
## Problém s uploadem obrázků

Vyskytne-li se při uploadu obrázků následující chyba
```
Chyba při vytváření náhledu: Náhled nelze uložit na dané místo.
Error creating thumbnail: Unable to save thumbnail to destination
```
, stačí do souboru LocalSettings.php vložit následující řádky:
```
$wgEnableUploads = true;
$wgUseImageMagick = false;
$wgImageMagickConvertCommand = "/usr/bin/convert";
$wgTmpDirectory = "$IP/images/temp";
```
## Přesun do jiného adresáře

Je-li nutné přesunout již nainstalovanou MediaWiki v rámci domény do jiného adresáře, je nutné změnit hodnotu $wgScriptPath v souboru LocalSettings.php
## Změna oprávněných přístupů a editace wiki

Chceme-li změnit oprávnění pro to, kdo může vidět/editovat wiki, je opět nutné upravit soubor LocalSettings.php[4]. Zvolíme-li například při instalaci, že se bude jednat o soukromou wiki a chceme-li, aby byla čitelná (ale ne editovatelná) pro všechny ostatní, je třeba změnit hodnotu v LocalSettings.php na:
```
$wgGroupPermissions['*']['read'] = true;
```
## Používání videa v MediaWiki

Jako první je třeba dle instukcí nainstalovat rozšíření [HTML5video](https://www.mediawiki.org/wiki/Extension:HTML5video). Poté je možné do do adresáře "extensions/HTML5video/videos" uploadovat pomocí FTP klienta videa a ta následně vkládat do článků pomocí
```
<HTML5video width="640" height="480" autoplay="false">nazev-souboru-s-videem</HTML5video>
```
Pomocí rozšíření lze do MediaWiki vkládat i videa ze služby youtube.
## Tvorba náhledů v velkých obrázků

Vyskytne-li se po instalaci MediWiki problém, že se u větších obrázků nevytváří náhledy a systém hlásí následující chybu
```
Error creating thumbnail: Invalid thumbnail parameters
Chyba při vytváření náhledu: Neplatný parametr náhledu
```
, je nutné přidat do LocalSettings.php následující řádek
```
$wgMaxImageArea = 2.5e8;
```
## Vkládání obsahu kategorií do stránky

Je-li třeba vložit do stránky seznam článků z dané kategorie, je třeba použít rozsíření [DynamicPageList](https://www.mediawiki.org/wiki/Extension:DynamicPageList_%28third-party%29). [Příklad užití najdeme na stránkách stejně se jmenujícího, ale konkurenčního rozšíření](https://www.mediawiki.org/wiki/Extension:DynamicPageList_%28Wikimedia%29#Use)
```
<DynamicPageList>
category             = Linux
count                = 15
order                = ascending
addfirstcategorydate = true
</DynamicPageList>
```
Galerie je možné tvořit podobným způsobem, je nutné však změnit některé z parametrů
```
<DynamicPageList>
category = Demo
mode     = gallery
namespace= file
</DynamicPageList>
```
## Jak povolit Gadgety (Udělátka)

Novější verze MediaWiki mají [rozšíření Gadgets](https://www.mediawiki.org/wiki/Extension:Gadgets) již v sobě, povolují se klasicky přes
```
require_once "$IP/extensions/Gadgets/Gadgets.php";
```
Tím se ale zpřístupní pouze možnost jejich používání, nikoliv samotné Gadgety jak je známe například z Wikipedie! Ty je nutné nejprve uložit (například pro povolení gadgetu HotCat je nutné vložit na zvlášť novou stránku MediaWiki:Gadget-HotCat.js zdrojový kód
```
mw.loader.load( '//commons.wikimedia.org/w/index.php?title=MediaWiki:Gadget-HotCat.js&action=raw&ctype=text/javascript&smaxage=21600&maxage=86400' );
```
Poté je nutné přidat gadget do výběru (který se zobrazí na stránce Nastavení v uživatelově profilu) na speciální stránce MediaWiki:Gadgets-definition, například pro již zmiňované HotCat je nutné vložit řádek
```
* HotCat[ResourceLoader]|HotCat.js
```
a až nyní je možné daný gadget povolit v nastavení (pokud se neobjeví, je třeba obejít cache stránky).
## Krátké URL u MediaWiki

Chcete-li mít krátké a hezké URI u své instalace MediaWiki, použijte generátor z adresy shorturls.redwerks.org
## Hromadný upload souborů přes FTP

Chcete-li u své instalace MediaWiki povolit upload souborů, například obrázků, přes FTP, použijte rozšíření [UploadLocal](https://www.mediawiki.org/wiki/Extension:UploadLocal). Soubory samotné se pak uploadují do složky ./Extensions/UploadLocal/data (nezměníte-li to nastavením v LocalSettings.php na jinou) a soubory připravené k uploadu jsou k vidění na stránce Special:UploadLocal. Rozšíření umí pracovat pouze se soubory, nikoliv s vnořenými složkami.

<center><b><a href="../">Přehled technických článků</a></b></center>
