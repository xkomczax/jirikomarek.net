---
layout: post
title: GPS logger BT-Q1000X, OpenStreetMap a Linux
description: Jak trasovat svůj pohyb pomocí GPS loggeru BT-Q1000X.
category: Linux
published: true
redirect_from: /web/GPS_logger_BT-Q1000X,_OpenStreetMap_a_Linux/
---

Nedávno jsem se náhodou stal majitelem GPS loggeru [BT-Q1000X](http://www.qstarz.com/download.php?t=4&m=BT-Q1000X). Přístroj je docela jednoduchý, na boku má akorát možnost přepnutí do tří režimů - vypnuto, navigace a logování. V pozici vypnuto je přístroj vypnut, v pozici navigace přístroj sice neloguje, ale po spojení s chytrým telefonem nebo například PDA může spolu s patřičným softwarem navigovat. Nadto v tomto režimu přenáší zalogovaná data do počítače, což nás bude později zajímat. Poslední možnost je logování, do které přepínáme ve chvíli, kdy chceme, aby přístroj zaznamenával naši trasu. Krom toho je vepředu přístroje červené tlačítko, které po stisknutí zaznamená do paměti místo, kde jsme jej zmáčkli.

Chceme-li přístroj začít používat k trasování cest a jejich následnému přenosu do OpenStreetMap, prvně musíme nějakou trasu projít a zalogovat. Vyjdeme tedy na volné prostranství (ideálně ne vedle vysokých budov a nikoliv v lese, obzvláště ne v hustém), abychom měli přímou viditelnost na oblohu a tedy na satelity, ze kterých přijímá přístroj signál. Po zapnutí přístroje (ať už do polohy navigace či logování) chvíli svítí oranžová kontrolka se satelity, což značí, že se hledají satelity na zaměření signálu. Při této incializaci je skutečně vhodné být na otevřeném prostranství (alespoň náměstí či mýtina), po zaměření polohy začne tato oranžová kontrolka blikat, což značí, že poloha byla zaměřena. Pak už stačí přepnout do polohy logování a můžeme se vydat po vytyčené trase. Až ji celou projdem, můžeme přístroj vypnout a vydat se domů k počítači.

Doma propojíme přístroj s počítačem pomocí mini-USB kabelu. V Linuxu budeme ke stažení dat potřebovat (například) Perlovský program mktbabel, který je šířen pod GPL licencí a je v nalezení minimálně v repozitářích Ubuntu a Debianu. Po jeho nainstalování a přepnutí přístroje do polohy navigace můžeme zaznamenaná data stáhnout pomocí příkazu

```bash
mtkbabel -p /dev/ttyACM0 -f gpsdata -t -w -c
```

Tímto se stáhnou do počítače čtyři soubory - gpsdata.bin, gpsdata.gpx, gpsdata_trk.gpx a gpsdata_wpt.gpx. Může se vám ale také stát, že po zadání výše vypsaného příkazu se vám zobrazí následující hláška a nic se nestáhne:

```bash
ERROR: Opening serial device /dev/ttyACM0: Permission denied at /usr/bin/mtkbabel line 1748.
```

Jedná se o chybu ([minimálně v Debianu](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=613378)), kterou lze vyřešit změnou práv pomocí příkazu provedeného pod superuživatelem

```bash
chmod 666 /dev/ttyACM0
```

Tím se změní vlastnická práva a výše uvedený příkaz by měl již fungovat. Pokud chceme data rovnou z přístroje vymazat, použijeme příkaz

```bash
mtkbabel -p /dev/ttyACM0 -E
```

, čímž vymažeme veškerá data z přístroje.

Nyní již můžeme zapnout náš oblíbený editor pro OpenStreetMap, kde klikneme na File - Import - a vybereme soubor gpsdata.gpx. Na ploše se nám zobrazí body, které jsme během předchozí cesty zaznamenali, stačí jen kliknout na tlačítko "Download" a vybrat mapu území, na kterém jsme se pohybovali. Tím se nám do počítače stáhne již vytvořená mapa a my například kliknutím na tlačítko "Road" vytvoříme spojením jednotlivých zaznamenaných bodů cestu, kterou jsme předtím prošli. V levém dolním rohu jí ještě přiřadíme parametry a po kliknutí na tlačítko "Upload" se zobrazí výzva k zadání uživatelského jména a hesla, které si předtím vytvoříme [na stránce projektu](https://www.openstreetmap.org/) a data nahrajeme na server. Námi nově nahrané objekty se nezobrazují ihned po uploadu, ale jejich aktualizace trvá nějakou chvíli, z praxe zhruba do deseti minut.

<center><b><a href="../">Přehled technických článků</a></b></center>
