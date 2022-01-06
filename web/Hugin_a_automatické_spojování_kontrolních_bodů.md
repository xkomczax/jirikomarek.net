---
layout: post
title: Tvorba panoramat pomocí programu Hugin a spojování kontrolních bodů
description: Jakým způsobem vytvořit panorama z vašeho fotoaparátu či zrcadlovky přímo na počítači pomocí free programu Hugin.
category: Linux, Grafika
published: true
---

V roce 2022 už [Hugin](http://hugin.sourceforge.net/) umí spojovat obrázky automaticky. Na ukázky panoramat je možné se podívat v mé [fotogalerii](/).  

Hugin je zdarma dostupný program, pomocí kterého můžete ze série fotek jednu velkou. Návod jak na to by vydal na samostatný článek, nám pro začátek stačí konstatování, že je třeba, aby se části dvou po sobě navazujících fotek překrývaly (cca. jednou třetinou, ale může být samozřejmě i více či někdy stačí méně. Záleží na situaci.). Máme-li takové fotky nachystány, otevřeme Hugin a zobrazí se nám hlavní obrazovka programu. Tady klikneme na "Load images...", kde vybereme fotky, jenž se mají spojovat (více fotek vybereme stisknutím Ctrl + levé tlačítko myši) a dáme volbu "Open". Nyní překlikneme na záložku "control points", kde ručně vybereme body, které chceme spojit. Čím více jich zadáme, tím samozřejmě lépe, ovšem vše záleží na naší ochotě klikat. Je vhodné vybírat body pokud možno z co největšího prostoru. Pozor na pohybující se předměty (lidé, vozidla, ...), které jsou na každé z fotek na jiném místě. Ty z výběru raději vynecháme.

Máme-li již vybráno dostatečné množství kontrolních bodů, přepneme opět na záložku "Assistant" a klikneme na volbu "Align...". Tady se nám zobrazí preview celého panoramatu a my máme možnost změnit například v záložce "Projection" způsob zobrazení vašeho panoramatu, v záložce "Move and drag" můžete s obrázkem "gumově hýbat" a tím ovlivňovat jeho zakřivení a v záložce "Crop" najdete mimo jiné velice užitečnou volbu a tou je "Autocrop", kdy po kliknutí na toto tlačítko se vám celé panorama ořeže tím způsobem, že na obrázku nezůstane žádné nevyplněné místo, pouze poskládaná fotografie.

Pokud jste si již předběžně fotografii dostatečně upravili, můžete nyní toto okno zavřít a v hlavním menu kliknout na tlačítko "Create panorama...", které vám již nabídne možnost kam výsledný obrázek uložit a začne s jeho tvorbou. Doba tvorby výsledného panoramatu závisí na počtu obrázků, které jste dali ke zpracování, jeho velikosti a samozřejmě na výkonu vašeho počítače. Někdy je třeba se skutečně obrnit trpělivostí, ale výsledek stojí za to.

Výsledné panorama se uloží ve formátu tif, je vhodné jej tedy převést do nějakého jiného formátu, což uděláte například pomocí grafického editoru GIMP.

## Automatické spojování kontrolních bodů
Pokud jste již nějaké to panorama v Hugin vytvořili, pravděpodobně vás po nějakém čase přestalo bavit ručně spojovat body a nejraději byste to nějakým způsobem zautomatizovali. To je možné, dokonce v té největší možné míře, tj. že pouze klikneme na tlačítko "Align..." a body se nám spojí. Je ovšem třeba k otevření této volby doinstalovat některý z automatických detektorů. Jejich výčet najdeme na oficiálním webu v podmenu "Control Point Detectors". Pro mne nejzajímavější je "Autopano-sift-C", neboť je open-source (ovšem zatížen patenty, které sice u nás neplatí, ale kvůli kterým nesmí být distribuován v Linuxových distribucích) a na rozdíl od svého předchůdce, "Autopano-sift", není psán v MONO, ale v jazyce C. V Debian GNU/Linuxu je možno jej nainstalovat přidáním repozitáře deb-multimedia, do našeho /etc/apt/source.list je tedy nutno přidat řádek (záleží na verzi, tento platí pro současný Debian testing)

```bash
deb http://www.deb-multimedia.org wheezy main non-free
```

Poté stačí provést klasicky upgrade a následně instalaci pomocí

```bash
apt-get upgrade apt-get install autopano-sift-c
```

Jinou možností je stáhnout si balíček přímo z webu deb-multimedia.org a nainstalovat příkazem

```bash
dpkg -i autopano-sift-c
```

Nyní stačí v programu Hugin pouze otevřít fotky pomocí "Load images..." a poté rovnou můžete kliknout na "Align..." a vybrané obrázky se vám samy spojí.
Jak na zmenšené obrázky

Ve výchozím nastavení zmenšuje Hugin velikost výsledných panoramat na 75%. Pokud chcete mít panoramata v původní velikost, zajděte do Soubor -> Nastavení -> Asistent (File -> Preferences -> Assistant) a změnte hodnotu ze 75 na 100.

<center><b><a href="../">Přehled technických článků</a></b></center>
