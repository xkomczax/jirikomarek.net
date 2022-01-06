---
layout: post
title: VirtualBox a Windows 7
description: Návod na instalaci Windows 7 ve VirtualBoxu na hostitelském počítači s Debianem.
category: Linux
published: true
---

Tento článek se zabývá instalací Windows 7 ve VirtualBoxu na hostitelském počítači s Debianem. Zajímá-li vás instalace Debianu 64bit na hostitelský počítač s Debianem 64bit, [přejděte na daný článek]({{site.baseurl}}/web/VirtualBox_a_Debian_64bit_na_laptopu_Lenovo_T520).

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

Po úspěšném nainstalování a spuštění se zobrazí úvodní obrazovka VirtualBoxu, ve které kliknete na "Nový"("New"), čímž se spustí průvodce přidáním virtuálních počítačů. Pro svůj počítač si vyberete jméno, zvolíte některou z nabízených možností o jaký operační systém se jedná (známější operační systémy a Linuxové distribuce jsou ve výběru zahrnuty), zadáte kolik chcete vyhradit operační paměti a místa na disku a tento virtuální disk vytvoříte. Poté nově vytvořený počítač spustíte a ten se vás zeptá na obraz, ze kterého má běžet. Tady si zvolíte iso Windows 7 a začneme jeho instalací.
## Chybějící ovladače k CD/DVD mechanice

Při instalaci Windows 7 ve VirtualBoxu na vás může vyskočit následující hláška
```
A required CD/DVD drive device driver is missing. If you have a driver floppy disk, CD, DVD, or USB flash drive, please insert it now.
Note: If the Windows installation media is in the CD/DVD drive, you can safely remove it for this step.
```
Řešením je ukončení instalace Windows 7, vypnutí virtuálního počítače a následně ve VirtualBoxu jít do "Nastavení"("Settings") -> "Úložiště"("Storage") -> vybrat CD/DVD mechaniku -> zaškrtnout volbu "Přímý přístup"("Passthrough") a poté znovu spustit Windows 7 a dokončit instalaci.
## Vytvoření sdílených složek

Pro přenos souborů mezi hostitelských a virtuálním počítačem slouží ve VirtualBoxu sdílené složky. Pro jejich používání je třeba nejprve doinstalovat "Přídavky pro hosta"("Guest Additions"). Nejprve však musíme v hostitelském počítači nainstalovat potřebné balíčky přes[2]
```
apt-get install build-essential module-assistant
```
pod rootem, případně pokud ještě nemáme nainstalované hlavičkové soubory, můžeme je nainstalovat pomocí příkazu výše či pomocí
```
m-a prepare
```
Poté nainstalujeme "Přídavky pro hosta"("Guest Additions") ve spuštěném virtuálním počítači v nástrojové liště VirtualBoxu kliknutím na "Zařízení"("Devices") -> "Instalovat Přídavky pro hosta..."("Install Guest Additions..."). Zobrazí se nám okno s průběhem stahování a instalace a na jeho konci na nás vyskočí okénko, ve kterém budeme dotázáni zda-li chceme "Přídavky pro hosta"("Guest addittions") připojit. Klikneme na "Připojit". V ten okamžik jsou dostupné jako vyměnitelné zařízení ve složce "Tento počítač"("Computer") a po otevření této složky spustíme dvojklikem "VBoxWindowsAddittions". Zobrazí se klasický průvodce instalací, které projdeme kliknutím na "Next" -> "Next" -> "Install" -> "Finish" a restartujeme počítač. Po nainstalování "Přídavků pro hosta"("Guest Additions") vybereme v nástrojové liště VirtualBoxu "Zařízení"("Devices") -> "Nastavení sdílené složky..."("Shared Folders Settings..."), u položky "Složky počítače"("Machine folders") klikneme na tlačítko pluska, kterým přidáme sdílenou složku, tady vybereme složku v hostitelském počítači, kterou chceme použít jako sdílenou, můžeme ještě navíc změnit jméno či zatrhnout jednu z nabízených voleb a klikneme na "OK". Poté otevřeme správce souborů, vybereme z levého sloupce "Síť"("Network") a po chvilce načítání by se nám měla zobrazit ikona s popiskem "VBOXSVR". V té již najdeme námi vybranou sdílenou složku, u které můžeme případně táhnutím na plochu vytvořit zástupce.
## Povolení Intel VT-x v BIOSu

Budete-li chtít dát virtuálnímu počítači ve VirtualBoxu více jader, může na vás vyskočit hláška
```
Nepodařilo se otevřít sezení k virtuálnímu počítači Windows 7
VT-X is disabled in the BIOS. (VERR_VMX_MSR_VMXON_DISABLED)
```
V tom případě je nutné dostat se do BIOSu (restartovat PC a poté při jeho startu zmáčknout F1 nebo jinou klávesu přepínající do BIOSu) a v něm najít položku tuto volbu povolující. U laptopů Lenovo je nutné stisknout modré tlačítko "ThinkVantage" -> z nabídky vybrat volbu "F1 to enter the BIOS Setup Utility" -> "Config" -> "CPU" -> najed na položku "Intel (R) Virtualization Technology" -> stisknout "Enter" -> ve vyběhnuvším menu vybrat pomocí šipek "Enabled" a potvrdit volbu klávesou "Enter". Poté je nutné vše uložit pomocí klávesy "F10" -> potvrdit uložení změn a následně je nutné počítač VYPNOUT!!! K projevení změn totiž nestačí pouze restartovat, nýbrž je nutné počítač skutečně vypnout.

<center><b><a href="../">Přehled technických článků</a></b></center>
