---
layout: post
title: Diktafon RCA VR530R, VOC soubory a Linux
description: Návod na použití diktafonu RCA VR530R a na práci s VOC soubory v Linuxu.
category: Linux
published: true
redirect_from: /web/Diktafon_RCA_VR530R,_VOC_soubory_a_Linux/
---

V časové tísni a bez možnosti vybírat si jsem zakoupil diktafon značky RCA s označením VR5330R. Tento přístroj se chlubí 2GB vnitřní paměti s možností nahrátí až 800 hodin záznamu. Ovšem hned na začátek je nutné podotknout, že oněch 800 hodin je možné dosáhnout při použití formátu s tokem 5.6kbps, chceme-li střední kvalitu 32kbps, pak už se nám na přístroj vleze pouze 140 hodin a v nejvyšší kvalitě, 64kbps WMA můžeme nahrávat 70 hodin. Nutno podotknout, že pro první dvě volby, tedy 5.6kbps a 32kbps, je použit nezdokumentovaný propertiální formát, jehož přípona je .VOC (neplést se soubory Creative Labs Sound, které mají stejnou příponu).

Přístroj samotný obsahuje vestavěný mikrofon, reproduktor, výstup na externí mikrofon a sluchátka (oboje 3,5mm jack), řadu ovládacích tlačítek (jejich srozumitelný popis naleznete v manuálu), černobílý LCD display, kontrolní červenou diodu, dvě tužkové AAA baterie (indikátor stavu nabití je na LCD display) a hlavně vysunovací USB konektor, kterým lze zařízení připojit k PC jako USB mass-storage. Na samotném disku pak nalezneme čtyři složky - A,B,C a D, do kterých probíhá samotné nahrávání, složku User Manuals s (nečekaně) uživatelským manuálem (v mém případě pouze anglickým, přestože krabička od zařízení je popsána anglicky a (zřejmě) španělsky. Dalšími soubory jsou RCA Digital Voice Manager Installer.dmg - instalační soubor oblužného software pro Mac (verze 10.5 a 10.6) a rcaDVM7_setup.exe, to samé pro systémy Windows (podporovány jsou podle popisku XP SP2, Vista a Seven).

V Linuxu není v běžných programech možno .VOC soubory přehrát, je tedy nutno hledat na internetu. Problém s přehráváním řešil již před léty na stroji od stejného výrobce Dave Coffin a výsledkem jeho snahy byl [prográmek devoc.c](https://www.dechifro.org/rca/devoc.c), který vydal pod svobodnou GPL2 licencí ([kopie pro případ, že by jej autor smazal](https://github.com/xkomczax/devoc)). Program po stažení jednoduše přeložíte pomocí

```bash
gcc -o devoc devoc.c
```

Program poté pod rootem (či použitím sudo) přesunete do patřičné složky (v Debianu)

```bash
mv devoc /usr/local/bin
```

Poté už stačí spustit samotný program

```bash
devoc soubor.VOC
```

a tím se vytvoří (16 bitový) soubor.WAV, který lze spustit ve všech běžných přehrávačích.

Soubor lze také jen přehrát pomocí

```bash
devoc -p soubor.VOC
```

, je však nutné mít nainstalován balíček Sound Exchange. Ten se v Debianu nainstaluje pomocí

```bash
apt-get install sox
```

Další triky s formátem VOC lze najít například na webu [administratosphere.wordpress.com](https://administratosphere.wordpress.com/2011/01/27/converting-voc-audio-files-from-digital-recorders/).

<center><b><a href="../">Přehled technických článků</a></b></center>
