---
layout: post
title: Archivy a jejich extrahování v Linuxu
description: Návody na práci s commandline archivovacími nástroji v Linuxu: Zip, Rar, Bzip2, Gzip, 7-zip
category: Linux
published: true
redirect_from: /web/Archivy_a_jejich_extrahování_v_Linuxu/
---

Následující výčet není kompletní manuálovou stránkou pro práci s archivy, ale jsou v něm vysvětleny postupy jak rozbalit nejběžnější archivní soubory pod operačním systémem GNU/Linux.

## Zip
Souborový formát zip je šířen pod GNU/GPL licencí, tudíž balíček najdete snad v každé distribuci. Někdy je však třeba doinstalovat balíčky zip a unzip. Samotné rozbalení zip archivu provedete příkazem

```bash
unzip archiv.zip
```

## Rar
U formátu rar je situace mírně složitější, neboť díky softwarovým patentům, které platí v některých zemích (např. USA či Japonsko), je možnost distribuce takovéhoto software těžší. Například v systému Debian je nutno přidat si před instalací balíčků rar a unrar do souboru /etc/apt/source.list (soubor, ve kterém jsou zapsány zdroje našeho softwaru) nějaký non-free miror. Rozbalení archivu provedeme příkazem

```bash
unrar e archiv.rar
```

V případě, že se jedná o zaheslovaný rar archiv (který ne všechny rozbalovací utility s grafickým rozhraním jsou schopny otevřít) budeme navíc dotázáni na heslo. Chceme-li rozbalit archiv a ponechat systém složek, musíme použít jiný přepínač:

```bash
unrar x archiv.rar
```

## Bzip2
Ve většině případů se vám nejspíše nepodaří narazit na samotný bzip2, ale bude pravděpodobně použit spolu se souborovým formátem tar. Tar tu v tomto případě slouží ke sloučení více souborů do jednoho, bzip2 ke kompresi na menší velikost. Výsledný soubor mívá příponu soubor.tar.bz2 či soubor.tbz nebo soubor.tbz2. Rozbalení provedeme pomocí

```bash
tar jxvf archiv.tar.bz2
```

## Gzip
Gzip byl původně vyvynut jako svobodná náhrada pro zip (odtud i název - GnuZIP). Stejně jako Bzip2 jej najdeme nejčastěji spolu se souborovým formátem tar. Přípona bývá buďto soubor.tar.gz nebo soubor.tgz. Rozbalí se pomocí

```bash
tar zxvf archiv.tar.gz
```

## 7-zip
Formát 7z, přestože z technického hlediska se nejedná o vůbec špatné dílo, není až tak rozšířený, přesto se s ním občas můžete potkat. Pro extrahování tohoto archivu je nutno mít nainstalován balíček "p7zip" a na vytváření archivů s vyšší kompresí ještě balíček "p7zip-full". Samotné extrahování provádíme příkazem

```bash
7za e archiv.7z
```

<center><b><a href="../">Přehled technických článků</a></b></center>
