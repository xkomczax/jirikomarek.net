---
layout: post
title: Malé prográmky v Linuxu
category: Linux
keywords:
published: true
---

Následující seznam si klade za cíl představit některé malé užitečné prográmky, které vám mohou v některých situacích značně ulehčit používání GNU/Linuxu.

## pngcrush

Pokud jste někdy potřebovali provést zmenšení velikosti obrázku ve formátu png, je program pngcrush to pravé pro vás. Samotný program zabírá pouze pár kB a změna velikosti bývá v řádech desítek procent. Po nainstalování se program pro agresivní, ale stále bezztrátovou komprimaci, spouští pomocí příkazu

```bash
pngcrush -reduce -brute puvodni-obrazek.png vysledny-obrazek.png
```

Program pngcrush dokáže měnit velikost souboru i jinými metodami. Pomocí níže uvedeného příkladu odstraníte ze souboru informace o vyvážení bílé (white balance), gamma, ICC a RGB paletě.

```bash
pngcrush - rem cHRM -rem gAMA -rem iCCP -rem sRGB puvodni-obrazek.png vysledny-obrazek.png
```

Pomocné informace a texty lze z obrázku vymazat pomocí

```bash
pngcrush -rem gAMA -rem alla -rem text puvodni-obrazek.png vysledny-obrazek.png
```

Máte-li v obrázku 10 barev, ale obsahuje-li paletu 256 barev (8-bit), lze ji redukovat na 4-bit s deseti barvami

```bash
pngcrush -bit_depth 4 -plte_len 10 puvodni-obrazek.png vysledny-obrazek.png
```

Kompresi lze provést i pokud vymažete informace obsahující rozlišení, čas poslední úpravy a textová metadata pomocí

```bash
pngcrush -res 96 -rem time -text b "Software" "pngcrush" puvodni-obrazek.png vysledny-obrazek.png
```

[Domovská stránka projektu](https://pmt.sourceforge.io/pngcrush/)

## Deborphan

Program deborphan vyhledává "sirotky" v systémech vycházejících z Debianu a používající jeho balíčkovací systém, jenž zbyli po odinstalování jiného programu a nejsou již k běhu žádného programu třeba. Například nainstalujeme-li si program jménem superhra, spolu s ní se nám nainstaluje i superhra-data. Po odinstalování pomocí

```bash
apt-get remove --purge superhra
```

se odinstaluje superhra, ovšem soubor superhra-data zůstává i nadále v systému. Nainstalujeme si tedy program deborphan a dáme příkaz deborphan, který nám vypíše, jaké kostlivce ve skříni skrývá náš systém a ty můžeme odstranit pomocí příkazu

```bash
apt-get remove --purge `deborphan`
```

Pozor, kolem slova deborphan nejsou klasické apostrofy, nýbrž znak, jenž se na anglické klávesnici nachází nalevo od jedničky!

Alternativně si lze soubory nechat vypsat pouze pomocí příkazu

```bash
deborphan
```

a následně je všechny smazat pomocí

```bash
apt-get remove --purge $(deborphan)
```

Následně je vhodné deborphan spustit ještě jednou, neboť díky odinstalovaným balíčkům se zrušily i jiné závislosti a opět tak přibydou nové balíčky k odstranění. Pro pohodlnější práci je možné použít grafickou nadstavbu [gtkorphan](http://www.marzocca.net/linux/gtkorphan.html).

## ExifTool

Tento program umí číst exif informace z různých souborů, a to nejen, jak by se dalo z názvu odvodit, ze souborů s obrázky, ale též zvládne velkou škálu hudebních a audiovizuálních souborů.

[Domovská stránka projektu](https://exiftool.org/)

## MP3blaster

Hudební přehrávač, jenž se od "konkurence" liší zejména tím, že pracuje v textovém režimu, tudíž je spustitelný bez nutnosti startu Xserveru. Je vhodný nejen chcete-li vypadat jako cool hacker, ale spíše neoplývá-li váš plechový miláček dostatečně vysokými čísly co se jeho parametrů týká. Program spustíte jednoduše napsáním "mp3blaster" v konzoli, okamžitě vás přivítá přehledné uživatelské rozhraní, kde je každá funkce dostatečně popsána. Pro start přehrávání stačí zmáčknout 2x klávesu F3 (začne prohledávat váš domovský adresář), ideálně ještě F6 a F7 pro náhodný výběr písně a pro opakování playlistu. Tip: pokud vám bude MP3blaster již po startu hlásit "failed to open sound device", doinstalujte si balíček oss-compat

[Domovská stránka projektu](http://www.mp3blaster.org/)

## rcconf

Prográmek sloužící k zobrazení služeb, jenž se spouští po startu a také umožňuje vybrané z nich vypnout. Po instalaci spustíte program pod rootem příkazem rcconf, najedete na službu, jenž si přejete vypnout, zmáčnete mezerník, změny potvrdíte enterem a služba se po startu již automaticky nespustí. Chcete-li program jednoduše vypnout bez provedení změn, zmáčknete klávesu esc.
