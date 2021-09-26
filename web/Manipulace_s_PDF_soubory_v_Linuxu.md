---
layout: post
title: Manipulace s PDF soubory v Linuxu
category: Linux
keywords: pdf, linux, pdfjam, pdfsam, jpg
published: true
---

Občas se stane, že odněkud seženeme PDF soubor, který je nějakým způsobem pro nás nepoužitelný. Leží například otočený na bok o 90°, jde o nascanovanou dvoustranu nebo se jedná o několik PDF souborů, které bychom chtěli spojit do jednoho či naopak bychom chtěli jeden soubor rozdělit na více. O tom všem je tento návod.

## Otočení PDF souboru

První co si ukážeme je rotace PDF souboru. K tomu slouží utilitka "pdf90", respektive "pdf180" a "pdf270", které jsou součástí balíčku "pdfjam". Manuálovou stránku najdeme on-line například [zde](https://linux.die.net/man/1/pdf90). Použití je následovné:

```bash
pdf90 --suffix '-otoceno' --batch soubor.pdf
```

, což otočí "soubor.pdf" o 90° a přidá za název koncovku "otoceno", tudíž se soubor bude jmenovat "soubor-otoceno.pdf". Lze použít pro více souborů. Utilitky "pdf180" a "pdf270" fungují naprosto shodně.

## Rozřezání stránek v PDF

Máme-li (například) nascanovanou dvojstranu knihy a my chceme, aby byla vždy jedna strana po druhé, použijeme program Briss. Jedná se o malý program napsaný v jazyce Java, stačí jej tedy [stáhnout](https://sourceforge.net/projects/briss/files/), rozbalit a máme-li nainstalovanou v systému Javu, v příkazové řádce zadáme

```bash
java -jar briss-X.X.X.jar
```

, kde "X.X.X" je číslo verze a program se spustí. Z hlavního menu vybereme "File" -> "Load File" -> vybereme požadovaný soubor -> zobrazí se nám dotaz které stránky chceme z výběru vyloučit (dáme "Cancel" chceme-li zpracovat celý soubor) a už se nám ukáže celý soubor nakopírovaný ve vrstvách na jednu či pár stran. Na každé straně vybereme, co má být první a co druhá stránka (označujeme modrým čtvercem, se kterým se dá hýbat za tmavé rohové části. Nové se vytváří prostým tažením levého tlačítka myši po požadované ploše. Stránka se maže kliknutím levého tlačítka myši na příslušný čtverec a výběrem požadované akce). Pak stačí dát "Action" -> "Crop PDF" (či "Action" -> "Preview" nejsme-li si výsledkem příliš jisti) a zobrazí se nám destinace k uložení. Tím máme soubor rozdělen tak, že každá fyzická stránka v knize je jedna strana v novém souboru.

## Rozdělování a spojování PDF souborů

K rozdělování či spojování více PDF souborů slouží program [PdfSam](https://pdfsam.org/). Tento program je k dispozici k instalaci minimálně v distribucích Debian a Ubuntu, předpokládám že problém s ním nebude ani v jiných distribucích. Po spuštění programu s nám ukáže klasická obrazovka, kde v levé části klikneme na "Split" (chceme-li rozdělovat), v pravé části okna klikneme na "Add", vybereme soubor který chceme rozdělit, poté v sekci "Split options" vybereme jak chceme soubor rozdělit, níže vybereme kam jej máme uložit a v jakém formátu (plus další nastavení) a pak stačí kliknout na "Run" a výsledek je hotov. Spojování je obdobné: v levé části klikneme na "Merge/Extract", v pravé části klikneme na "Add" a přidáme soubory které chceme sloučit, poté je dáme do pořadí v jakém je chceme spojit a poté, co máme nastaveno vše potřebné klikneme na "Run". Toť vše :-)

## Zmenšení velikosti PDF souboru

Dostaneme-li soubor v pdf, jehož velikost potřebujeme zmenšit (aby jej bylo možné vložit na transportní médium, šel otevřít ve čtečce, ...), můžeme na to použít následující příkaz programu Ghostscript

```bash
gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=nastaveni -sOutputFile=vysledny-soubor.pdf puvodni-soubor.pdf
```
, kde místo "nastaveni" zadáte některý z následujících možností (bez uvozovek)

```bash
"/screen" - nejnižší kvalita, nejmenší velikost
"/ebook" - střední kvalita, střední velikost
"/printer" nebo "/prepress" - nejvyšší kvalita, největší velikost
```

a místo "vysledny-soubor.pdf" a "puvodni-soubor.pdf" jméno, které má nést výsledný soubor, respektive které již nese zdrojový soubor.

## Vytvoření PDF souboru z JPG obrázků

Chceme-li vytvořit PDF soubor z obrázků ve formátu JPG, stačí k tomu jednoduchá utilitika convert z balíčku ImageMagick. Pokud tento balíček ještě nemáte nainstalovaný na počítači, proveďte jeho instalaci, například v Debianu pod rootem pomocí příkazu

```bash
apt-get install imagemagick
```

Poté už použijte jeho utilitu convert

```bash
convert *.jpg vysledny-soubor.pdf
```

, kdy program convert vezme všechny souboru s příponou .jpg z aktuální složky a vytvoří z něj vysledny-soubor.pdf, který je již v PDF formátu. Pomocí convert však lze spojovat i pouze vybrané obrázky. V tom případě je nutno je vypsat všechny, například

```bash
convert obrazek-1.jpg obrazek-2.jpg obrazek-3.jpg vysledny-soubor.pdf
```

Daný příkaz vytvoří vysledny-soubor.pdf pouze ze tří vyjmenovaných souborů

<center><b><a href="../">Přehled technických článků</a></b></center>
