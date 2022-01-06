---
layout: post
title: Sbírka tipů a triků pro Firefox
description: návod na zrychlení běhu Firefoxu a jak na mizející položky ve Firefox toolbaru.
category: Linux
published: true
redirect_from: Sbírka_tipů_a_triků_pro_Firefox⁄Iceweasel
---

##Zrychlení běhu Firefoxu provedením operace VACUUM nad jeho databází

Zavřete Firefox, jděte do složky svého profilu a v něm spustě příkaz
```
for z in `ls *.sqlite`; do echo "VACUUM;" | sqlite3 $z; done
```

<center><b><a href="../">Přehled technických článků</a></b></center>

## Mizející položky v toolbaru Firefoxu

Pokud vám po uzavření a opětovném otevření Firefoxu mizí ikony z toolbaru, chyba může být v poškozeném souboru Localstore.rdf. Ten se nachází v domovském adresáři vašeho profilu, na Linuxu je to tedy

```
~./mozilla/Firefox/NAZEV.PROFILU/
```

Tento soubor je třeba nahradit. To lze udělat po vypnutí Firefoxu jeho smazáním (či ještě lépe jeho přejmenováním) a následně novým spuštěním. Při tomto spuštění se soubor Localstore.rdf vytvoří znovu, přidané ikony z toolbaru v něm však logicky nebudou. Před touto operací je tedy vhodné udělat si screenshot obrazovky, aby bylo přidávání jednotlivých položek do toolbaru posléze jednodušší.
