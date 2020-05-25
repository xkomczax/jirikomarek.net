---
layout: post
title: Sbírka tipů a triků pro GoldenDict a StarDict
category: Linux
keywords:
published: true
---

GoldenDict a jeho předchůdce StarDict jsou svobodné slovníky, které lze zdarma stáhnout pro Linux či Windows. V obou dvou slovnících lze používat slovníky určené i pro jiné programy, neboť zvládají čtení více formátů souborů se slovníky.
## Slovníky pro GoldenDict a StarDict

* [Michal Čihař na svém webu](https://cihar.com/software/slovnik/) nabízí zdarma předkompilované binární soubory Anglicko - Český, Česko - Anglický. Pokud v tomto slovníku něco chybí, můžete to sami přidat na adrese [www.svobodneslovniky.cz](https://www.svobodneslovniky.cz/). Slovník je šířen pod svobodnou licencí GNU FDL. Používáte-li operační systém Linux, konkrétně distribuci Debian, můžete využít i jeho apt repozitář. Tamtéž je k nalezení i český slovník cizích slov
* Slušnou sbírku slovníků lze najít na adrese [babylon.com/free-dictionaries](https://www.babylon-software.com/free-dictionaries/)
* Slovníky s menším počtem slov, ale ve velkém počtu různých jazyků, jsou na adrese [dicts.info](https://www.dicts.info/)
* Wiktionary, sesterský projekt svobodné encyklopedie Wikipedie, je také možné využít.

## Google Translate text-to-speech v GoldenDict v Linuxu

Jste-li uživatelem operačního systému Linux a chcete-li si nechat vyslovovat text přes dotazy na servery Googlu, zajděte do "Edit" -> "Dictionaries" -> "Programs", přidejte nový pomocí "Add", v položce "Type" vyberte "Audio" a do pole "Command line" vložte
```
bash -c "p=$(echo "%GDWORD%" |sed 's/ /+/g');wget -U Mozilla -q -O - "$@" translate.google.com/translate_tts?ie=UTF-8\&tl=en\&q=$p|mpg123 -"
```
Chcete-li, aby se vám slovíčka předčítala v jiném jazyce, nahraďte ve výše uvedeném textu zkratku pro angličtinu, "en", zkratkou pro jiný jazyk, například "fr" pro francouzštinu, "de" pro němčinu či "nl" pro nizozemštinu. Pro francouzštinu pak takový řádek vypadá
```
bash -c "p=$(echo "%GDWORD%" |sed 's/ /+/g');wget -U Mozilla -q -O - "$@" translate.google.com/translate_tts?ie=UTF-8\&tl=fr\&q=$p|mpg123 -"
```
Nakonec nezapomeňte, před uložením změn, tyto prográmky aktivovat zaškrtnutím příslušné volby před každým řádkem. Pro běh je nutné mít nainstalovaný wget a mpg123.

<center><b><a href="../">Přehled technických článků</a></b></center>
