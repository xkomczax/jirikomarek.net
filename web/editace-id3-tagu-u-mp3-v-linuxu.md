---
layout: post
title: Editace ID3 tagů u MP3 v Linuxu
description: Krátký popis jednotlivých linuxových nástrojů pro práci s hudebními soubory v Linuxu.
category: Linux
published: true
redirect_from: /web/Editace_ID3_tagů_u_MP3_v_Linuxu/
---

Pokud nepoužíváte počítač pouze a jen k pracovním účelům, ale máte jej zároveň i jako multimediální centrum se sbírkou písniček v MP3, OGG, WMA, FLAC, AAC nebo jiných formátech (či multimediálních kontejnerech), nejspíše oceníte, když vám váš oblíbený přehrávač hudby dokáže daný song nejen přehrát, ale zobrazit o něm minimálně jméno interpreta a název songu. Problém nastává v okamžiku, kdy tato informace chybí nebo je zanesena špatně. Hodně přehrávačů má zabudovanou možnost tyto informace upravit rovnou v něm, ale toto pravidlo není stoprocentní, nemluvě o dalších informacích, které přehrávače často neumí upravit či o hromadném přejmenovávání, které se stává u sbírky se stovkami songů vyloženě utrpením. Existují však řešení, jak tyto takzvané ID3 tagy editovat externími programy, které jsou na tuto činnost specializované a tudíž zvládají často mnohem více než přehrávače. Níže jsou uvedeny některé z nich, které se dají použít na operačním systému GNU/Linux.

## EasyTAG

Abecedně prvním v seznamu je program EasyTAG. Jedná se o grafický nástroj napsaný pomocí GTK+. Po prvním spuštění vás přivítá rozhraní obsahující nepřeberné množství voleb. Hlavní okno je rozděleno do tří částí - vlevo se stromovou adresářovou strukturou, uprostřed se songy z vybrané složky a v pravo v údaji o vybraném songu. Dole pod tím vším najdeme ještě okénko, ve kterém se zobrazuje log z vykonaných operací. Drobností, kterou však nelze nezmínit, je změna barvy songu v prostředním sloupci, u něhož byla provedena editace. Na první pohled drobnost, ovšem ve skutečnosti se jedná dle mého o vynikající nápad.

V samotném editačním okně ovšem již tolik voleb není. Změnit lze pole titulek, umělec, album, CD, rok, číslo songu, žánr, komentář, skladatel, původní umělec, autorská práva, URL a enkodér. Krom toho všeho lze navíc song i přejmenovat, což se výborně hodí, pokud máte skladby s vyplněnými ID3 tagy, ale nepojmenované. Velice příjemná je i možnost přepnutí se do druhé záložky, ve které je možno manipulovat s obrázky přiřazenými k songu. Nevýhoda naopak spočívá v absenci dalších ID3 tagů a nemožnosti je změnit.

Podporovány jsou z výše jmenovaného soubory MP3, FLAC a OGG, podporován není WMA a AAC.

## Ex Falso

Ex Falso nabízí na první pohled méně voleb než zmiňovaný EasyTAG, zcela chybí takové věci jako horní lišta, nastavení programu de-facto též není, ale vše je uspořádáno přehledně a hlavně program dle mého plní svůj účel jak má. Stromová struktura se nachází vlevo nahoře, pod ní jsou songy z daného adresáře a zbylá část, tedy více než tři čtvrtě plochy zabírá samotná plocha s ID3 tagy k editaci.

ID3 tagů je zobrazeno nepřeberně, de-facto kolik se jich v daném souboru nachází. Ovšem některé nejsou z neznámého důvodu zobrazeny, jedná se například o tag URL. Chybí také možnost manipulovat s obrázky. Největší výhodou je ale možnost editovat více souborů zároveň. Z vlastní zkušenosti vím, že ani stovky souborů nejsou na slabém stroji žádný problém. Samotná editace více souborů probíhá tak, že si vlevo označítě soubory jenž chcete editovat a vpravo se vám zobrazí ID3 tagy jako u jednotlivých songů, ovšem jsou-li (a často logicky bývají) některé hodnoty jiné, zobrazí se informace, že tento tag je u songů jiný (ale lze ten jeden u všech změnit na nějakou hodnotu, hodí se například chcete-li dát stejné jméno alba všem souborůmy ve složce) či u kolika je a u kolika chybí.

Další záložka skrývá možnost přidat ID3 tagy podle jména souboru, v další máte možnost přejmenovávat soubory a v poslední je možno přidat automaticky číslo písniček, kdy stačí zadat hodnotu od které se má začínat a celkový počet skladeb a pak už je možno s vybranými soubory pouze táhnutím manipulovat a tím měnit hodnotu ID3 tagu číslo songu.

Podporovány jsou údajně formáty MOD, MP3, MP4, MPC, SPC, TRUEAUDIO, WAV, WAVPACK, WMA a XIPH, moje zkušenost hovoří o podpoře MP3, FLAC, OGG a WMA, nikoliv však o AAC.

## ExifTool

ExifTool by do tohoto výčtu neměl správně ani patřit, neboť metadata u hudebních formátů umí pouze číst, nikoliv s nimi manipulovat. Je ovšem dobré o něm vědět a nejste-li si jisti, jaká všechna metadata se u daného (nejen) hudebního souboru nacházejí, není nic snažšího než v konzoli zadat příkaz

```bash
exiftool vase-oblibena-pisnicka.mp3
```

O tomto prográmku píšu [více v jiném článku na tomto webu](/web/male-programky-v-linuxu/).

## eyeD3

Posledním dnes představeným programem bude eyeD3. Spíš než o program se jedná o pythonovský skript, který pomocí daných parametrů manipuluje s vybranými ID3 tagy. O výhodách a nevýhodách programů bez grafického rozhraní by se dalo diskutovat, ovšem ví-li člověk jak jej má použít, bude mu skutečně výborným pomocníkem.

Samotný program zvládá editaci údajně pouze formátu MP3, podporovány jsou ID3 tagy verze 1.0, 1.1, 2.3 a 2.4, ale ve skutečnosti je schopen pracovat s jakýmkoliv formátem, do kterého lze zapisovat ID3 tagy.

Program má nepřeberné množství funkcí, informace o nich můžete vyvolat napsáním příkazu

```bash
eyeD3 --help
```

či na manuálových stránkách, například zde.

Jelikož je daný text v angličtině, zde dám pouze styl a příklad zápisu Zobrazení nápovědy:

```bash
eyeD3 --help
</souce>
Vykonání příkazu:
<source lang="bash">
eyeD3 příkaz soubor
eyeD3 příkaz složka
```

, tudíž například

```bash
eyeD3 --artist=Karel Gott oblibena-pisnicka.mp3
```

změní interpreta u souboru oblibena-pisnicka.mp3 na hodnotu Karel Gott. Příkaz

```bash
eye3D --genre=Techno moje-slozka-s-muzikou
```

PŘIDÁ VŠEM SOUBORŮM (tj. třeba i textovým souborům, které se budou ve složce nacházet!!!) ve složce moje-slozka-s-muzikou ID3 tag žánr s hodnotou Techno.

V době psaní článku (červen 2011) byly dostupné balíčky výše zmíněných programů minimálně pro distribuce Debian a Ubuntu, u ostatních distribucí, jako je OpenSUSE, Mandriva či Red Hat nemám jistotu.

<center><b><a href="../">Přehled technických článků</a></b></center>
