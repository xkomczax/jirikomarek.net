---
layout: post
title: VirtualBox a Debian 64bit na laptopu Lenovo T520
category: Linux
keywords:
published: true
---

Tento článek se zabývá instalací Debianu 64bit ve VirtualBoxu na hostitelském počítači s Debianem 64bit. Zajímá-li vás instalace Windows 7 na hostitelský počítač s Debianem, [přejděte na daný článek]({{site.baseurl}}/web/VirtualBox_a_Windows_7/).

## Instalace VirtualBoxu

Jako první si nainstalujeme samotný VirtualBox. V Debianu k tomu slouží příkaz pod rootem
```
apt-get install virtualbox
```
Po nainstalování může VirtualBox začít protestovat, že nejsou nainstalované hlavičkové soubory a Dynamic Kernel Module Support Framework. To lze vyřešit pod rootem provedením příkazu
```
apt-get install linux-headers-$(uname -r|sed 's,[^-]*-[^-]*-,,')
```
Nyní můžete spustit již jako obyčejný uživatel VirtualBox.
## Vytvoření nového virtuálního počítače

Po úspěšném nainstalování a spuštění se zobrazí úvodní obrazovka VirtualBoxu, ve které kliknete na "Nový"("New"), čímž se spustí průvodce přidáním virtuálních počítačů. Pro svůj počítač si vyberete jméno, zvolíte některou z nabízených možností o jaký operační systém se jedná (známější operační systémy a Linuxové distribuce jsou ve výběru zahrnuty), zadáte kolik chcete vyhradit operační paměti a místa na disku a tento virtuální disk vytvoříte. Poté nově vytvořený počítač spustíte a ten se vás zeptá na obraz, ze kterého má běžet. Tady si zvolíte iso vaší oblíbené Linuxové distribuce či jiný obraz disku a poté již pokračujete v běžné činnosti vybraného operačního systému
## 64bit systém na laptopech Lenovo

Pokud budete chtít v laptopech Lenovo s 64bit procesorem spouštět ve VirtualBoxu (či jiném virtualizačním nástroji jako je KVM, QEMU či VMware), musíte nejdříve povolit tuto možnost v BIOSu. Po zapnutí PC zmáčkněte modré "ThinkVantage" tlačítko, vyberte z nabídnutého seznamu přechod do BIOSu, tady vyberte "Config" -> "CPU" -> "VT-mode" -> "enabled". Poté zadejte "Save & Exit" a po restartování počítače a spuštění operačního systému bude VirtualBox schopen virtualizovat i 64bitové systémy.
## Vytvoření sdílených složek

Pro přenos souborů mezi hostitelských a virtuálním počítačem slouží ve VirtualBoxu sdílené složky. Pro jejich používání je třeba nejprve doinstalovat "Přídavky pro hosta"("Guest Additions"). Nejprve však musíme v hostitelském počítači nainstalovat potřebné balíčky přes[2]
```
apt-get install build-essential module-assistant
```
pod rootem, případně pokud ještě nemáme nainstalované hlavičkové soubory, můžeme je nainstalovat pomocí příkazu výše či pomocí
```
m-a prepare
```
Poté nainstalujeme "Přídavky pro hosta"("Guest Additions") ve spuštěném virtuálním počítači v nástrojové liště VirtualBoxu kliknutím na "Zařízení"("Devices") -> "Instalovat Přídavky pro hosta..."("Install Guest Additions..."). Tím se stáhne cca. 50MB obraz, který následně ve virtuálním počítači připojíme příkazem
```
mount /media/cdrom
```
Poté spustíme příkaz
```
sh /media/cdrom/VBoxLinuxAdditions.run
```
, čímž spustíme vlastní instalaci Guest Additions a pokračujeme podle instrukcí na obrazovce. Po nainstalování Guest Additions vybereme v nástrojové liště VirtualBoxu "Zařízení"("Devices")-> "Nastavení sdílené složky..."("Shared Folders Settings..."), u položky "Složky počítače("Machine folders") klikneme na tlačítko pluska, kterým přidáme sdílenou složku, tady vybereme složku v hostitelském počítači, kterou chceme použít jako sdílenou, můžeme ještě navíc změnit jméno či zatrhnout jednu z nabízených voleb a klikneme na "OK". Poté provedeme ve virtuálním počítači příkaz, který se zobrazoval jako nápověda již při vytváření sdílené složky
```
mount -t vboxsf JMENO /CESTA-KE-SLOZCE
```
, kde JMENO je jméno, které jsme zadali při vytváření (pokud jste nic nezadávali, složka se jmenuje stejně jako složka na hostitelském počítači) a /CESTA-KE-SLOZCE je cesta ke složce v hostitelském počítači. Takže například
```
mount -t vboxsf sdilena /home/pepa/sdilena
```
Tím se připojí do složky téhož jména vybraná složka. Pozor! Složku si napřed v místě, kde chcete aby se připojila, musíte ručně vytvořit. Můžete použít příkaz
```
mkdir JMENO-SLOZKY
```
, takže v příkladu, který jsem uváděl, bych zadal příkaz
```
mkdir sdilena
```
## Přetažení minipanelu ve virtuálním počítači na vrch obrazovky

Používáte-li některý z počítačů ve VirtualBoxu v celoobrazovkovém (fulscreen) režimu, možná vám nevyhovuje umístění minipanelu sloužící k vyvolání nabídky VirtualBoxu, které je ve výchozím nastavení dole, pod systémovou lištou. Sám jsem občas při výběru okna jiného programu omylem tuto lištu vyvolal a po kliknutí jsem udělal jinou akci než aktivaci vybraného okna. Tento panel lze přesunout nahoru z hlavního menu VirtualBoxu "Počítač"("Computer") -> "Nastavení"("Settings") -> "Uživatelské rozhraní"("User interface") -> "Pokročilé"("Advanced") -> zaškrtnout volbu "Malá nástrojová lišta"("Mini ToolBar"): "Zobrazit nahoře na obrazovce"("Show At Top Of Screen").

<center><b><a href="../">Přehled technických článků</a></b></center>
