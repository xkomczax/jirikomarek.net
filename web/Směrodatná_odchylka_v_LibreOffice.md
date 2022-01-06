---
layout: post
title: Směrodatná odchylka v Open/LibreOffice
description: Návod na vytvoření směrodatné odchylky v OpenOffice/LibreOffice, vytvoření grafu, vložení odchylky do grafu a vytvoření směrodatné odchylky pro více sloupců.
category: Linux
published: true
redirect_from: Směrodatná_odchylka_v_Open⁄LibreOffice
---

## Vytvoření grafu

K vložení směrodatné odchylky do grafu v OpenOffice/LibreOffice je nejprve nutné vytvořit daný graf. Vybereme tedy oblast dat, která chceme do grafu zahrnout, klikneme na "Vložit" ("Insert") -> "Objekt" ("Object") -> "Graf" ("Chart"). Toho samého se dá docílit kliknutím na danou ikonu v nástrojové liště. Stejně tak i data můžeme vybrat až později.
## Vložení směrodatné odchylky do grafu

Nyní, když máme vytvořený graf, stačí na něj dvakrát kliknout, čímž se přepneme do editačního módu grafu. Poté jdeme do hlavního menu -> "Vložit" ("Insert") -> "Chybové úsečky Y" ("Y Error Bars"). Tady vybereme buďto:

* "Konstantní hodnota" ("Constant Value"), kde dole zadáme jaká bude směrodatná odchylka pro všechny hodnoty
* "Procentuálně" ("Percentage"), což značí kolik procent z hodnoty je odchylka
* V dalším poli můžeme vybrat, zda-li námi volená hodnota je "Standardní chyba" ("Standard error"), "Směrodatná odchylka" ("Standard Deviation"), "Rozptyl" ("Variance") nebo "Hranice chyby" ("Error Margin")
* V posledním políčku můžeme vybrat rozsah buněk, ze kterých se bude směrodatná odchylka brát. To se hodí v případě, že pro každou hodnotu máte jedinečnou již definovanou směrodatnou odchylku

Úplně poslední zaškrtávací políčko slouží ke sjednocení hodnoty jak pro kladnou tak zápornou hodnotu směrodatné odchylky. Stejně tak si můžete v okně vpravo vybrat, která z těchto hodnot má být do grafu vykreslována.
## Směrodatná odchylka pro více sloupců

Máte-li ovšem graf složený z více sloupců, kde ke každému sloupci existuje i vlastní směrodatná odchylka, musíte ji přiřadit jinak. Dvojklikem na graf se přepněte do editačního módu grafu, kliknutím vyberte první ze sloupců, ke kterému chcete směrodatnou odchylku přiřadit, klikněte na něj pravým tlačítkem myši, čímž se vám zobrazí menu. Z něj vyberte "Vložit chybové úsečky Y" ("Insert Y Error Bars"), zde vyberte hodnotu pro první sloupec, dejte "OK" a poté obdobně pokračujte u dalších sloupců. Máte-li opravdu velký počet dat a jsou-li strukturována stejným způsobem, stačí si pouze zkopírovat pomocí Ctrl+C číselně vyjádřenou hodnotu pozic buněk a v dalším kroku je již nemusíme ručně vybírat, ale stačí pouze změnit názvy sloupců (tedy například v "$Sheet1.$C$2:$C$4" stačí vyměnit písmena "C" za "E" je-li další směrodatná odchylka ve sloupci ob jedno.

<center><b><a href="../">Přehled technických článků</a></b></center>
