---
layout: post
title: Konfigurační soubory pro Matomo/Piwik a Piwigo
description: Jak pracovat s konfiguračními soubory u open-source nástroje na měření návštěvnosti Matomo/Piwik a svbobodné webové galeri Piwigo
category: Linux
published: true
redirect_from: /web/Konfigurační_soubory_pro_Piwik_a_Piwigo
---

Jelikož jsem na webu používal pro sledování provozu aplikaci Piwik/Matomo a pro svoji galerii podobně znějící aplikaci Piwigo, při přesunu webu jsem musel měnit i jejich konfiguraci. Pro vlastní zapamatování a případné další lidi se stejným problémem zde dávám seznam souborů, které je při migraci třeba změnit.

## Piwik/Matomo

U programu Piwik po přesunu na nový stroj stačí pouze změnit adresu MySQL serveru a přihlašovací údaje do databáze. Ty najdeme v souboru
```
./piwik/config/config.ini.php
```
## Piwigo

U Piwigo musíme změnit jak přístupové údaje do databáze, tak i složku, ve které je program umístěn. Přístupové údaje do databáze se nacházejí v souboru
```
./local/config/database.inc.php
```
Složka s umístěním je "natvrdo" uložena v souborech ve složce
```
./templates_c
```
Je tedy nutno buďto ručně projít soubor po souboru, tento řetězec v každém z nich vyhledat a nahradit, nebo to můžeme udělat hromadně, v Debianu například pomocí
```
find . -name "*.php" -print | xargs sed -i 's/xxx/yyy/g'
```
, kde "xxx" je původní řetězec a "yyy" je hodnota, kterou jej chceme nahradit.
## Blokování referrer spamu v Piwik/Matomo

Ve verzi 2.2.1 analytického softwaru Piwik byla přidána zajímavá a důležitá vlastnost. Tou je možnost blokovat tzv. Referrer spam, tedy roboty, kteří se tváří jako běžný návštěvník, ale ve skutečnosti na webu nic nedělají, pouze snižují možnost rozumně použít statistiku. Ve fórech Piwik se často skloňoval server semalt.com, jehož robot přicházel ze všech končin světa. Blokaci je možné provést v nastavení vaší stránky, tedy "Settings" -> "Websites" -> u vybrané stránky klikněte na "Edit" -> do kolonky "Excluded Parameters" napište jméno serveru které má být blokováno -> uložte kliknutím na "Save". Podobně lze vyloučit i IP adresy nebo jejich rozsah v kolonce "Excluded IPs" na stejném místě. Zapisovat lze jak konkrétní IP adresu, tak i rozsah pomocí znaku "*".
## Přesun Piwik/Matomo na novou doménu

Přesunout Piwik na novou doménu není obecně nic složitého, stačí pouze překopírovat soubory a vše by mělo fungovat jak dříve. Pokud jde o přesun v rámci domény (tj. například z adresáře do jinéh), stačí pouze překopírovat soubory a vše by mělo fungovat. Ještě před přesunem je vhodné v administraci v nastavení změnit důvěryhodné domény pro přihlašovánív
## Přesun Piwigo na novou doménu

Podobně jako Piwik, ani u Piwigo není zásadnější problém s přesunem na novou doménu. V administraci není třeba nic měnit, pouze pokud se vyskytne po přesunu chybová hláška a Piwigo se nenačte, je na místě smazat v _data/templates_c všechny php soubory (POZOR! Ve složce se nachází i jeden html soubor. Ten nemazat.). Jde o dočasné soubory šablon používaných Piwigo a tudíž dojde k jejich automatické obnově.
## Integrace Piwik/Matomo do MediaWiki

Spolupráce MediaWiki s Piwik je velice jednoduchá, stačí použít [patřičné rozšíření](https://www.mediawiki.org/wiki/Extension:Matomo).

<center><b><a href="../">Přehled technických článků</a></b></center>
