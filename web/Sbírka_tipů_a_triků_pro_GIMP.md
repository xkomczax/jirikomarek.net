---
layout: post
title: Sbírka tipů a triků pro GIMP
category: Linux
keywords: gimp, makra, rgb, cmyk
published: true
---

[GIMP](http://www.gimp.org/) je svobodný grafický program, který je zdarma a legálně dostupný pro Windows, Mac, Linux a další UNIXové operační systémy. Existuje pro něj obsáhlá dokumentace, ve které jsou popsány všechny funkce programu, tutoriály a samozřejmě i FAQ, nebo-li často kladené otázky. Plus je možno najít spoustu návodů přes vyhledávače. U většiny z nich je ale zapotřebí znalost angličtiny.

## Makra v GIMPu

Přestože GIMP neumí nahrávat klasická makra, existuje možnost, jak si zjednodušit často opakované operace. Tento nástroj se jmenuje GimpScripter a najdete jej na GitHubu, kde je také návod jak jej nainstalovat. Stačí si pouze stáhnout zip archiv, rozbalit a obsah složky přesunout v Linuxu do adresáře "~.gimp-2.8/plug-ins" (platí pro GIMP 2.8, pro starší či novější verze je nutno přesouvat do ekvivalentního adresáře). Poté uděláte soubor "plugin-gimpscripter.py" spustitelným, například pomocí příkazu
```
chmod +x ~/.gimp-2.8/plug-ins/plugin-gimpscripter.py
```
či přes grafické rozhraní kliknutím na vlastnosti souboru a zatržením patřičného klikátka. Poté stačí restartovat GIMP a zobrazí se vám dole v menu pod "Filters" ("Filtry") nová položka "Gimpscripter".

Kliknutím na něj se vám zobrazí třísloupcové okno, kde v prvním okně vyberete operaci, jenž chcete provést, v druhém se tato operace zobrazí v řadě a ve třetím sloupci nastavíte její hodnoty. Můžete takto použít kombinaci různých filtrů, ale i dalších operací z GIMPu. Až přidáte všechny operace, které chcete, aby ve vašem makru figurovaly, makro si pojmenujete a kliknete na tlačítko "OK". Zobrazí se informační okno, ve kterém se píše, že pokud budete chtít makro smazat, musíte jej podle názvu najít ve složce "~.gimp-2.8/plug-ins/" (kde jej také můžete případně editovat) a hlavně, pokud chcete makro začít používat, musíte nejdříve restartovat GIMP. Po restartu se vám v horním menu zobrazí nová položka "Shortcuts", ve které jsou všechna vaše makra.

## Export z RGB do CMYK v GIMPu v Linuxu

Pracujete-li s programem GIMP a potřebujete-li udělat převod obrázku z barevného modelu RGB do CMYK, hodí se na to [plugin Separate+](http://cue.yellowmagic.info/softwares/separate-plus/index.html). V Debianu jej najdete jako součást balíčku gimp-plugin-registry, který stačí nainstalovat a daná funkcionalita se vám zobrazí v GIMPu. Najdete ji v hlavním menu pod záložkou "Obrázek" ("Image") -> "Separate". K exportu potřebujete ovšem nějaké barevné profily, které se dají sehnat různými způsoby. Nejjednodušší je instalace balíčku "icc-profiles" a "icc-profiles-free. Chcete-li mít možnost používat i profily od Adobe, stáhněte si je z jejich webu (poznámka: ICC profily jsou otevřené formáty, tudíž jsou kompatibilní napříč platformami. Neděste se tedy slovíčka Windows při stahování). Poté rozbalte archiv a nakopírujte je do "/usr/share/color/icc/", případně do "~/.color/icc/". Další možností je vzít tyto profily z jiného operačního systému. Máte-li koupeny například Windows 7, jděte do složky "C:\Windows\System 32\spool\drivers\color\" a zkopírujte její obsah do výše zmíněných adresářů v Linuxu.

Poté vyberete vrstvu, u které chcete provést konverzi (pokud máte více vrstev, je nutné je nejdříve sloučit v jednu) a pak už stačí jenom dát "Obrázek" ("Image") -> "Separate" -> "Separate", vyberete vhodný vstupní barevný profil (nejspíše Adobe RGB (1998). Pokud máte obrázek s již vestavěným RGB profilem, zatrhněte volbu "Give priority to embedded profile"), vhodný výstupní profil (záleží co preferuje tiskárna. Osobně mám ale nejlepší zkušenosti s ISO Coated V2 (ECI) co se výsledného vzhledu týče), dle rady vývojářů zatrhněte volbu "Use BPC algorithm", vyberte metodu renderování (nutno vyzkoušet, která bude dávat nejlepší výsledky. U mne to byla zatím vždy výchozí "Perceptual"). Poslední volbu, "Make CMYK pseudo-composite", zatrhněte v případě, že chcete výsledek ještě nechat někým schválit. Jindy je totiž výsledek separace zobrazen pomocí čtyř šedých vrstev. Po kliknutí na "OK" a chvíli práce se vám zobrazí nový obrázek se čtyřmi vypreparovanými CMYK vrstvami. Takto vzniklý obrázek lze vyexportovat pomocí "Obrázek" ("Image") -> "Separate" -> "Export" a vyberete jeden z podporovaných formátů (JPEG, TIFF nebo PSD). Takto vyexportovaný obrázek bude opět hezky barevný.

Potřebujete-li ověřit správnou barevnost obrázku po provedení separace, vezměte obrázek s CMYK vrstvami a klikněte na "Obrázek" ("Image") -> "Separate" -> "Proof", vyberte profil vašeho monitoru (nevíte-li nebo není-li ve výběru, zadejte Adobe RGB) a profil separovaného obrázku (či lépe, zatrhněte volbu "Give priority to attached profile") a vyberte mód: porovnáváte-li s obrázkem na monitoru, nechejte "Normal", porovnáváte-li s již vytištěným, dejte "Simulate media white"). Poté už jen klikněte na "OK" a zobrazí se vám výsledný obrázek jak jej uvidíte po exportu/tisku.

Chcete-li u obrázku měnit výsledné barvy, doporučuje se zahýbat s křivkami. V žádném případě nepřejmenovávat nebo mazat vrstvy!

Plugin Separate+ má jistá omezení: neumí exportovat alpha kanál (průhlednost) a také při exportu dochází ke ztrátám některých informací. V prvním případě lze použít command-line utilitku convert z balíčku ImageMagick.
## Bělení zubů a očí v GIMPu

Návod na bělení zubů či očí je jednoduchý. Otevřete si fotku usmívajícího se člověka, kliknete pravým tlačítkem na kartu s vrstvami, dáte "Nová vrstva" ("New layer") -> v položce "Typ vyplňování vrstvy" ("Layer fill type") zvolíte "Průhledností" ("Transparency") -> nahoře v této kartě zvolíte v položce "Režim" ("Mode") "Sytost" ("Saturation") -> vyberete kreslící nástroj "Štětec" ("Brush") a pomocí černé barvy obkreslíte plochu zubů či očí. Pravděpodobně bude takto upravená fotka vypadat nepřirozeně, takže bude lepší zmenšit její krytí. To uděláme opět nahoře v kartě vrstvy, kde nastavíme "Krytí" ("Opacity") na odpovídající hodnotu, řekněme někde mezi 50-80%.

Stejnou technikou, ale použitím jiné barvy, lze například vyplnit rty či více zmodrat oči. Budete-li někoho takto "malovat rtěnkou", nezapomeňte rozmazat okraje takovéto "malůvky".
## Odstranění chromatické aberace (fialových okrajů)

K odstranění chromatické aberace (fialových okrajů, anglicky též purple fringe) slouží plugin [Purple Fringe Fix](http://registry.gimp.org/node/185). Ten stačí z odkazované stránky stáhnout, vložit do složky se skripty (v Debianu se jedná o "/usr/share/gimp/2.0/scripts/") a poté obnovit skripty ("Filters" -> "Script-Fu" -> "Refresh Scripts"). Tento skript poté naleznete v hlavním menu v položce "Script-Fu" -> "Darla" -> "Purple Fringe Fix".

<center><b><a href="../">Přehled technických článků</a></b></center>
