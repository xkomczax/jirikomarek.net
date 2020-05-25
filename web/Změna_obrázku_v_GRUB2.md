---
layout: post
title: Změna obrázku v GRUB2
category: Linux
keywords:
published: true
---

Pokud se vám nelíbí monotónní vzhled zavaděče GRUB2, existuje možnost jej změnit a doplnit o nějaký ten líbivý obrázek.

Ze všeho nejdříve je nutno nainstalovat si balíček jménem grub2-splashimages, jenž stáhne do složky /usr/share/images/grub sérii povedených fotografií ve formátu ".tga". K dalším experimentům si můžeme vybrat některou z tohoto balíčku, případně si vytvořit vlastní obrázek ve formátu .tga (do tohoto formátu dokáže ukládat například známý editor fotografií GIMP) či použít známější .png. Je vhodné, aby byl obrázek uložen v rozlišení, jaké používá váš zavaděč (tj. ve většině případů to bude defaultně 640x480, pokud si toto nastavení nezměníte).

Máme-li již připraven obrázek, jenž chceme nastavit jako defaultní při startu našeho pc, můžeme se dát do editace. Je třeba otevřít pomocí libovolného textového editoru jako uživatel root soubor /etc/grub.d/05_debian_theme a v něm najít řádek, který zhruba odpovídá řetězci:
```
WALLPAPER="/usr/share/images/desktop-base/moreblue-orbit-grub.png"
```
(u mne se jednalo o řádek číslo 10). Ten popisuje, že GRUB2 standardně hledá obrázek morule-orbit-grub.png ve složce /usr/share/images/desktop-base. My ale potřebujem, aby hledal ve složce /usr/share/images/grub náš obrázek. Změníme tedy příslušný řádek na
```
WALLPAPER="/usr/share/images/grub/nas-obrazek.png"
```
Nyní již tedy GRUB2 ví kde a co má hledat a je třeba jej aktualizovat. To uděláme pomocí příkazu
```
update-grub
```
Tento příkaz funguje v Debian-based distribucích (tj. Debian, Ubuntu, Mint, ...), v jiných distribucích se tato aktualizace děje prý pomocí
```
grub-mkconfig -o /boot/grub/grub.cfg
```
Nyní stačí již restartovat a výsledek naší práce vidíme na vlastní oči.

Pokud jsme si však vybrali obrázek, jenž svou barevností splývá se standartním písmem zavaděče, je třeba ještě změnit barvu písma. To provedeme pomocí editace řádků
```
set menu_color_normal=cyan/blue set menu_color_highlight=white/blue
```
, jenž se u mne nacházely na 18., respektive 19. pozici. První jmenovaný vypovídá, že barva popředí bude azurová a barva pozadí modrá a druhý to, že barva právě vybraného řádku bude bílá a pozadí modré. Tyto hodnoty můžeme měnit, ovšem pouze v rozsahu barev podporovaných GRUB2, tj.:
```
black
blue
green
cyan
red
magenta
brown
light-gray
```
Pro popředí navíc můžeme použít:
```
dark-gray
light-blue
light-green
light-cyan
light-red
light-magenta
yellow
white
```
To je vše, nyní stačí opět aktualizovat GRUB2 pomocí výše zmíněných příkazů a po restartu se kochat vámi vytvořeným dílem.
