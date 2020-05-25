---
layout: post
title: Sbírka tipů a triků pro OpenStreetMap
category: OpenStreetMap
keywords: OpenStreetMap, JOSM, renderování, Merkaartor
published: true
---

[OpenStreetMap](http://www.openstreetmap.org/) je svobodná mapa světa, která je tvořeny dobrovolníky pod [svobodnou Open Data Commons Open Database License](http://opendatacommons.org/licenses/odbl/). Díky tomu ji může každý editovat ([přes webové rozhraní, off-line editory, editory pro chytrý telefon, ...](https://wiki.openstreetmap.org/wiki/Editors)).

## Smazání prázdných nodů pomocí editoru Merkaartor

Pokud během svých editací narazíte (například pomocí nástroje na kontrolu chyb KeepRight) na větší množství nodů, které nemají žádný tag, lze je hromadně smazat pomocí editoru Merkaartor. První si stáhnete požadovanou plochu, na které se prázdné nody nacházejí. Pak přidáte nový filtr pomocí "Layers" -> "Add new Filter layer". Zobrazí se vám nová vrstva v levém horním okně pod vrstvou stažené mapy. Dvakrát na tuto vrstvu klepnete a zobrazí se vám malé okno, kde jsou dvě vstupní pole. Jméno není třeba vyplňovat/měnit (ale můžete), nicméně do pole "Filter" zadejte hodnotu

```
not (Type is Node) or Parent(Type is Way or Type is Relation) or [*] is *
```

a klikněte na tlačítko OK. Poté tuto vrstvu zneviditelněte kliknutím na oko vlevo od ní, díky čemuž uvidíte jen ty nody, které mají prázdnou hodnotu. Pozor! Můžete však stále označovat všechny body. Proto nyní klikněte pravým tlačítkem myši na tuto novou vrstvu a zadejte "Readonly", čímž docílíte toho, že označovat půjdou už jen prázdné body. Ty tedy tažením myši přes oblast kde leží označíte a pomocí tlačítka delete smažete. Výslednou změnu poté nahrajete na server pomocí tlačítka "Upload".

Samotné prázdné nody vznikají často použitím právě editoru Merkaartor, který pokud mažete nějaký objekt, který má svoji část i v oblasti, kterou jste si nestáhli, odmítne v těchto nestažených oblastech smazat nody k němu patřící, neboť neví, zda-li nejsou vázány na nějaké další cesty. Dávejte si tedy pozor při mazání větších objektů, abyste jej měli vždy celý ve stažené oblasti.

## Jak spojovat překrývající se plochy v JOSM

Vytvoříte-li nějakým způsobem v JOSM dvě plochy, které se překrývají a chcete-li je spojit (například když používáte plugin Tracer), je možné tak učinit pomocí pluginu BuilingsTools. Ten nainstalujte do JOSM přes "Edit" -> "Preferences" -> "Configure available plugins", vyhledejte plugin "Building Tools" a nainstalujte jej. Poté musíte restartovat JOSM, aby plugin začal fungovat. Poté postupujte následovně:

1. Vytvořte si několik ploch, které budou mít alespoň jednu překrývající se plochu. To se vám podaří například když budete vytvářet budovy pomocí výše zmíněného pluginu Tracer
2. Označte všechny plochy (budovy), které chcete spojit. Dělejte tak pomocí nástroje pro výběr za současného držení tlačítka "Shift" při výběru jednotlivých oblastí
3. Spojte vybrané plochy pomocí klávesový zkratky "Shift + J"
4. Smažte zbytečné body, například ty, které jsou na jinak rovné hraně, ale vznikly v místech, kde byl původně začátek druhé budovy
5. Hotovo :-)

![gallery]({{site.baseurl}}/web/media/buildingstools-1.png)
![gallery]({{site.baseurl}}/web/media/buildingstools-2.png)
![gallery]({{site.baseurl}}/web/media/buildingstools-3.png)
![gallery]({{site.baseurl}}/web/media/buildingstools-4.png)
![gallery]({{site.baseurl}}/web/media/buildingstools-5.png)

Podobného efektu lze dosáhnout pomocí editoru Merkaartor, který má funkci "Join areas" již v základní instalaci. Narozdíl od pluginu BuildingTools v JOSM však Merkaartor neumí tímto způsobem vytvářet polygony.

<center><b><a href="../">Přehled technických článků</a></b></center>
