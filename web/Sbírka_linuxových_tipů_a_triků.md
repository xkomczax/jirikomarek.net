---
layout: post
title: Sbírka linuxových tipů a triků
category: Linux
keywords:
published: true
redirect_from:
- /web/OpenNIC_a_jeho_zprovoznění_v_Linuxu
- /web/Pár_tipů_k_používání_programu_JAlbum
---

## Nefunkční DNS po startu počítače

Pokud vám po startu počítače nefunguje web (můžete pingnout IP adresu, ale ne webovou adresu, tj. funguje vám

```
ping -c 4 8.8.8.8
```

, ovšem nikoliv

```
ping -c 4 google.com
```

, máte problém s nastavením DNS. Jednoduché řešení je v Debianu editovat soubor /etc/resolv.conf, do kterého přidáte dva řádky

```
nameserver 8.8.8.8
nameserver 8.8.4.4
```

Tímto si napevno nastavíte pro DNS dotazy servery googlu.

## Ošklivé fonty v KDM a v Qt programech běžících pod rootem

```
cp /home/USER/.fonts.conf /etc/fonts/local.conf
```

## Start privoxy po startu Debianu

Aby bezproblémově fungovala kombinace Firefox + Tor + Privoxy, po každém apt-get dist-upgrade zadat:

```
mv /etc/rc.2/SXXprivoxy /etc/rc.2/S99privoxy
```

Jinak je nutno startovat Privoxy ručně zkrze příkaz:

```
/etc/ini.d/privoxy start
```

## Zapnutí / vypnutí chybových hlášek v PHP

```
vim /etc/php5/apache2/php.ini
display_errors = On/Off
```

## Zjištění verze balíčku

```
apt-cache policy BALÍČEK
```

## Povolení klikání, horizontální skrolování a prostřední tlačítko v pravém horním rohu na touchpadu

```
cp /lib/udev/rules.d/66-xorg-synaptics.rules /etc/udev/rules.d/

vim 66-xorg-synaptics.rules
+ ENV{x11_options.TapButton1}="1"
+ ENV{x11_options.HorizEdgeScroll}="true"
+ ENV{x11_options.RTCornerButton}="2"
```

## Změna cz qwerty / us klávesnice pomocí shiftů v Openboxu

```
setxkbmap -option grp:switch,grp:shifts_toggle 'us,cz(qwerty)'
```
## Zprovoznění Javy po přeinstalaci z GNU verze na Sun verzi
```
update-java-alternatives --jre --set java-1.6.0-sun
```

## Povolení klikání na touchpadu
```
synclient TapButton1=1
```
##Převod kódování u celého souboru
```
iconv -f puvodni_kodovani -t nove_kodovani soubor_s_puvodnim_kodovanim.txt > soubor_s_novym_kodovanim.txt
```
## Vyhledání nainstalovaných balíčků v systému

Seznam všech programů
```
dpkg --list
```
Chceme-li vyhledat konkrétní balíček, použijeme příkaz
```
dpkg --list | grep cast-nazvu-balicku
```
## Vyhledávání balíčků v systému vhodných pro instalaci

Chceme-li najít všechny balíčky obsahující část výrazu, ať již nainstalovaných či možných k instalaci, zadáme příkaz
```
dpkg --list 'cast-nazvu-balicku-*'
```
V tabulce se nám ukáže zda-li je nainstalován, plný název balíčku, verze nainstalovaného balíčku a u naistalovaných balíčků jejich popis.

## Uvolnění místa v Debian-based systémech (Ubuntu, Linux Mint, ...)

Používáte-li systém, jenž je založen na Debianu a jeho balíčkovacím systému apt (například Ubuntu, Kubuntu a další deriváty, Linux Mint, DSL, Xandos, Mepis či jiné), můžete uvolnit někdy až překvapivě velké množství místa na disku vymazáním balíčků, které se stáhly na disk kvůli instalaci. K tomu slouží příkaz
```
apt-get clean
```

## Ztlumení reproduktorů po zasunutí sluchátek

Pokud chcete, aby po zasunutí sluchátek přestal vycházet zvuk z reproduktorů, v alsamixeru v XFCE4 si v záložce "Switcher" zaškrtněte volbu "Headphone Jack Sense"

## Červený obraz u videí na YouTube po instalaci Debin Wheezy

Pokud se vám u videí na youtube.com po instalaci začal zobrazovat přes přehrávaný obraz jakoby červený filtr, klikněte na jakýkoliv flash objekt (třeba na právě přehrávané video) pravým tlačítkem myši, vyberte volbu "Settings" a odšrktněte volbu "Enable hardware acceleration".

## Synchronizace času

Nainstalujte si balíčky ntp a ntpdate a poté spusťte příkaz
```
ntpq -p
```
## Zprovoznění přesměrování přes mod_rewrite u Apache2 na Debianu

V mé instalaci Debianu nebylo automaticky zapnutý mod_rewrite u Apache2, tudíž nešlo ani přesměrovávat webové stránky pomocí souboru .htaccess. Ke zprovoznění je neprve dobré si zjistit, zda-li máme mod_rewite v Apache2 načten. Ideální je vytvořit si webovou stránku, do které se napíše následující jednoduchý php skript:
```
<?php
phpinfo();
?>
```
Tento skript si uložíme jako normální php skript, otevřeme v prohlížeči a zkontrolujem, zda-li je mod_rewrite načten. Je třeba také, aby byl načten i mod_proxy. Nejsou-li, musíme jej neprve načíst. Jednoduše toho lze dosáhnout příkazem
```
a2enmod rewrite
a2enmod proxy
```
Před další kontrolou je třeba restartovat Apache2
```
/etc/init.d/apache2 restart
```
Nyní zkontrolujeme jsou-li oba moduly načteny a je-li tomu tak, můžeme zkusit použít přesměrování přes .htaccess. Nebude-li nám stále fungovat, zkontrolujeme soubor /etc/apache2/sites-enabled/000-default. Najdeme-li v něm
```
AllowOverride None
```
, změníme tuto volbu na
```
AllowOverride All
```
Nyní opět zrestartujeme Apache2 pomocí
```
/etc/init.d/apache2 restart
```
a přesměrování by mělo již plně fungovat.

## Jak stahovat hromadně soubory z webové stránky

Možná jste se již někdy ocitli v situaci, kdy jste navštívili webovou stránku, na které bylo velké množství souborů, které jste si chtěli stáhnout a pracně jste klikali na všechny odkazy. To však není třeba, v GNU/Linuxu na to stačí použít program wget a pomocí něj automatizovaně stáhnout všechny požadované soubory najednou. Chcete-li například najednou stáhnout všechny písničky ve formátu mp3 z vašeho oblíbeného webu, stačí mít naistalovaný program wget (který je standardní součástí snad všech linuxových distribucí) a v terminálu napsat
```
wget -nd -r -l1 --no-parent -A.mp3 http://www.example.com/music/
```
Tímto příkazem se spustí program wget, který bude nebude tvořit adresář (-nd), bude stahovat rekruzivně (-r), stahování bude probíhat do úrovně 1 (-l1), nebude stahovat soubory se zdroji (--no-parent) a stahovat bude pouze ty soubory, které končí koncovkou .mp3 (-A.mp3) z webu example.com/music/.

## Nefungující přehrávání internetového rádio streamu

Pokud vám nejde hned po instalaci Debianu (nebo Ubuntu či jiné linuxové distribuce) přehrávat internetová rádia v Exaile a používáte multimediální framework GStreamer a při pokusu o přehrátí vám vypíše hlášku Your GStreamer installation is missing a plug-in, řešením je instalace dodatečných pluginů. Tu provedete příkazem
```
apt-get install gstreamerX.XX-plugins-bad
```
, kde X.XX je číslo verze GStreamer.

## Doplňování názvů balíčků v Debian-like distribucích

V linuxových distribucích funguje doplňování příkazů v bashi pomocí klávesy Tab po instalaci balíčku bash-completion. Ovšem v Debianu (a potenciálně i v jiných distrubucích od něj odvozených jako je Ubuntu, Mint či jiné) defaultně po instalaci nefunguje doplňování například u apt-get, kde nefunguje doplňování parametrů ani názvů balíčků. Tohle lze povolit jednoduchou úpravou souboru /etc/bash.bashrc (změny nunto provádět pod uživatelem root). Najdete si tam řádky, které doplňování zaručují, ale jsou zakomentované (použitím znaku # na začátku řádku) a ty odkomentujeme (smažeme #). V mém případě (Debian Wheeze) se jednalo o řádky 32, 33 a 34, ovšem tato informace se může ve vaší instalaci lišit. Výsledek poté vypadá následovně:
```
# enable bash completion in interactive shells
if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
    . /etc/bash_completion
fi
```

## Hromadné otáčení fotek podle EXIF informací

Máte-li větší sbírku obrázků, které sice váš prohlížeč fotografií dokáže rotovat dle informací uložených v EXIF hlavičce, ale vy je chcete přesto mít otočené skutečně (třeba kvůli prohlížečům které to neumí nebo kvůli publikaci na webu), stačí jít do adresáře ve kterém máte tyto fotky uložené a provést tento příkaz[9]

```
for i in *.jpg; do jhead -autorot $i; done
```
## Převod jpg do pdf

Potřebujete-li překonvertovat jpg soubory ve složce do jednoho pdf souboru, stačí použít následující příklad (vyžaduje nainstalovaný ImageMagick)
```
convert *.jpg soubor.pdf
```
## Nefunkční KDE po připojení a konfiguraci druhé obrazovky

Pokud si připojíte druhý monitor a budete jej konfigurovat přes nastavení displaye v KDE, může se vám stát, že po restartu PC vám KDE sice naběhne, ale zmizí vám celá plocha a i nově spuštěné programy se budou zobrazovat mimo ni. V tom případě hledejte problém v konfiguračním souboru
```
plasma-desktop-appletsrc
```
, který se nachází v
```
~./kde/share/config/
```
Tento soubor je možno smazat a následně restartovat celé KDE ovšem s tím, že ztratíte informace o plasmoidech umístěných na ploše. Jelikož se ale jedná o dost rozsáhlý konfigurační soubor, jeho odstranění a opětovné nastavení plamoidů může být daleko snažší než snaha hledat problém uvnitř. Při novém startu si KDE soubor znovu vytvoří.

## Změna velikosti a kvality obrázku
```
mogrify -scale XXX% -quality XXX% XXX.XXX
```
## Hromadné přejmenování souborů v Debianu

Pokud chcete v Debianu nebo jeho derivátech hromadně přejmenovat soubory, lze k tomu použít utilitku rename. Použití je následovné[11]
```
rename "s/puvodni-jmeno/nove-jmeno/g" *.PRIPONA
```
## Vynucená kontrola disku pomocí fsck po restartu počítače

Potřebujete-li vynutit kontrolu disku pomocí utility fsck po (re)startu počítače, vytvořte pod superuživatelem (root) v kořenovém adresáři (/) soubor forcefsck pomocí příkazu
```
touch /forcefsck
```
a následně počítač restartujte, například pomocí příkazu
```
reboot
```
## Odstranění hlášení o aktualizacích v KDE

Otravuje-li vám život v KDE hlášení o aktualizaci, jednoduchým způsobem jak jej navždy "vypnout" je odinstalování balíčku update-notifier-kde, který je za něj zodpovědný. V Debianu stačí v konzoli pod superuživatelem (rootem) spustit příkaz
```
apt-get remove --purge update-notifier-kde
```
## Nastavení výchozího prohlížeče v Linuxu

Chcete-li v Linuxu změnit nastavení výchozího prohlížeče, zadejte pod superuživatelem (rootem) v konzoli příkaz
```
update-alternatives --config x-www-browser
```
Zobrazí se vám nabídka s nainstalovanými prohlížeči, ze kterého číselnou volbou vyberete "ten pravý"
## Nefunkční lyrics script v Amaroku

Pokud vám v Amaroku2 nefunguje lyrics script na stahování textů k písničkám, nainstalujte si balíčky s ruby
```
apt-get install ruby1.8 libgtk2-ruby1.8
```
## Hromadné nahrazování ve více souborech

Potřebujete-li hromadně nahradit ve více souborech například řetězec "xxx" řetězcem "yyy", spusťte v konzoli příkaz
```
find . -name "*.php" -print | xargs sed -i 's/xxx/yyy/g'
```
## Jak vypnout nutnost rootovského hesla při vsunutí USB flash disku v Debianu

Chcete-li mountovat flash či jiný externí disk v Debianu a zobrazuje-li se vám hláška, která vás nabádá k zadání hesla, lze to vypnout editací souboru (pod rootem)
```
/usr/share/polkit-1/actions/org.freedesktop.udisk2.policy
```
Tam najděte příslušné řádky (jde o hezky čitelný soubor) a hodnoty u vámi vybraných akcí v nich změňte na
```
<allow_any>yes</allow_any>
<allow_inactive>yes</allow_inactive>
<allow_active>yes</allow_active>
```
## Špatně nastavené locales při spouštění DigiKamu

Zahlásí-li vám DigiKam při startu následující hlášku
```
Your locale has changed since this album was last opened. Old locale: UTF-8, new locale: ISO-8859-1 If you have recently changed your locale, you need not be concerned. Please note that if you switched to a locale that does not support some of the filenames in your collection, these files may no longer be found in the collection. If you are sure that you want to continue, click 'Yes'. Otherwise, click 'No' and correct your locale setting before restarting digiKam.
```
, nastavte si locales pod rootem spuštěním
```
dpkg-reconfigure locales
```
Především si vyberte jazyk, jehož absence by mohla být zdrojem problému.
## Nefunkční klávesové zkratky v KDE5

Pokud se vám v KDE5 zobrazuje hláška
```
The key sequence 'XXX' is ambiguous. Use 'Configure Shortcuts' from the 'Settings' menu to solve the ambiguity. No action will be triggered.
```
, v souboru .config/kdeglobals vymažte v sekci "Shortcuts" všechny duplikáty. Ty se v konfiguraci objevili, pokud jste se snažili změnit nastavení klávesových zkratek v nastavení.

## Restart zaseknuté KDE5 Plasmy

Zasekne-li se Plasma (např. nejde rozbalit ovládání hlasitosti nebo se nezobrazují aktuálně spuštěné programy), je třeba ji restartovat. To lze udělat stiskem kláves Alt+F2 a vložením dvojice příkazů
```
kquitapp5 plasmashell && kstart plasmashell
```
Plasma na chvíli zmizí úplně, ale po pár vteřinách se opět objeví zpět a funkční.

## Instalace LispWorks Personal Edition na Debianu

Vyplňte formulář a [stáhněte binárku pro Linux](http://www.lispworks.com/downloads/index.html), spusťte lwlper-licence.sh a lwlper-install.sh, poté si přidejte i386 architekturu do seznamu zdrojů a nainstalujte libgtk2.0-0:i386.
LispWorks spusťte pomocí příkazu
```
/usr/local/lib/LispWorksPersonal/lispworks-personal-6-1-1-x86-linux
```

<center><b><a href="../">Přehled technických článků</a></b></center>
