---
layout: post
title: Sbírka tipů a triků pro Open/LibreOffice
description: Přidání nadpisu do obsahu, zobrazení čísla stránek až od určité strany, nezalomitelné mezery a další triky pro Open/LibreOffice.
category: Linux
published: true
redirect_from: /web/Sbírka_tipů_a_triků_pro_Open⁄LibreOffice
---

## Přidání vlastního (nečíslovaného) nadpisu do obsahu

Pokud potřebujeme při vytváření obsahu v OpenOffice/LibreOffice přidat mezi standardní nadpisy i nějaký vlastní, budeme postupovat následovně. Vybereme z menu "Vložit" -> "Rejstříky a tabulky" -> "Rejstříky a tabulky..." -> v kartě "Rejstřík/tabulka" zaklikneme tlačítko "Další styly", čímž se nám aktivuje tlačítko vpravo od této položky (označené jako "...") - klikneme na něj, klikneme na styl který chceme, aby byl v obsahu a posuneme jej pomocí tlačítka dole na úroveň, na které chceme, aby se zobrazoval. Takže chceme-li například aby náš vlastní nadpis s názvem "Nepodstatný nadpis" byl zobrazen ve stejné úrovni jako nadpis 3. úrovně, vybereme jej a posuneme jej na pozici číslo 3. Nyní stačí dokončit dokončit tvorbu obsahu. Tento postup je možný i s vytvořeným obsahem, stačí kliknout kamkoliv na obsah pravým tlačítkem myši, vybrat volbu "Upravit rejstřík/tabulku" a aplikovat výše zmíněný postup.
## Zobrazení čísla stránek až od určité strany

Potřebujete-li zobrazit stránkování v patičce až od určité strany, můžete postupovat například podle následujícího návodu. Napřed si vytvoříme zápatí ("Vložit" -> "Zápatí" -> "Vše") a do něj umístíme čísla stránek ("Vložit" -> "Pole" -> "Číslo stránky"). Tím se nám vloží čísla stránek všude od první do poslední stránky (máme-li všude výchozí styl stránek). Nyní si vytvoříme dva nové styly stránek (F11 - 4. ikona zleva s názvem "Styly stránky" - klikneme pravým tlačítkem myši do volného prostoru okna a vybereme možnost "Nový" - pojmenujeme jej např. "nestrankovano1", poté postup opakujeme a vytvoříme "nestrankovano2". U stylu "nestrankovano2" vybereme, že další styl bude "nestrankovano1", poté klikneme pravým tlačítkem myši na "nestrankovano1" a vybereme, že dalším stylem bude "nestrankovano2". Tímto rekurzivně dosáhneme toho, že po aplikování stylu "nestrankovano1" bude automaticky použit na další stranu styl "nestrankovano2" a poté opět "nestrankovano1"... Klikneme tedy normálně do textu na první straně a v okně "Styly strany" dvojklikem aktivujeme styl "nestrankovano1". V celém dokumentu by nám tak mělo zmizet stránkování. Najedeme si na stánku, kde chceme, aby stránkování opět začalo, klikneme na začátek stránky a z hlavního menu vybereme "Vložit" -> "Ruční zalomení" -> vybereme "Zalomení stránky" a dole u položky "Styl" vybereme "Výchozí". Tím docílíme toho, že rekurze bude přerušena a následující styl bude "Výchozí" - tj. s číslováním stránek.
## Jak nastavit v OpenOffice/LibreOffice bílé pozadí pracovní plochy při používání tmavého tématu vzhledu u GTK

Používáte-li tmavý vzhled tématu pro vaše GTK aplikace, ale chcete, aby plocha, na které v OpenOffice/LibreOffice pracujete byla bílá, v hlavním menu "Nástroje" -> "Možnosti" -> "Zpřístupnění" odškrtněte volbu "Automaticky detekovat, zda je v operačním systému aktivní vysokokontrastní zobrazení". Nyní si stačí v "Možnosti" -> "Vzhled" vybrat barvu pozadí (i jiných prvků), které chceme.
## Automatické přidání nezalomitelných mezer za spojky a na jiná místa

Běžně se v OpenOffice/LibreOffice přidává nezalomitelná mezera pomocí zkratky "Ctrl+Shift+mezerník". Potřebujete-li ale tyto nezalomitelné mezery automaticky přidat za spojky a na jiná místa, kde je to typografickým zvykem, [www.openoffice.cz/file/4_1_1/ stáhněte si rozšíření Vlnka]. To si posléze nainstalujte tak, že spustíte OpenOffice/LibreOffice, v hlavním menu najdete položku "Nástroje" ("Tools") -> "Správce rozšíření" ("Extension Manager") -> "Přidat" ("Add"), vyberete celý stažený .zip archiv (ten předtím nerozbalujte!) a kliknete na otevřít. Poté stačí OpenOffice/LibreOffice restartovat a v hlavním menu najdete položku "Čeština" ("Czech") -> "Vlnka" ("Wavelet"). Kliknutím na tuto položku se vám zobrazí malé okénko, kde vyberete za kterými všemi položkami se mají přidat mezery, kliknete na OK, proběhne nahrazení mezer v celém dokumentu a v tom samém okně kde jste vybírali kde se mají mezery přeměnit na pevné se zobrazí přehledná statistika.
## Kontrola českého pravopisu v OpenOffice/LibreOffice

Chcete-li, aby se vám automaticky kontrolovala česká gramatika v OpenOffice/LibreOffice, zajděte na [web s příslušným rozšířením](https://extensions.openoffice.org/en/project/dict-cs) a [zde klikněte ke stažení daného rozšíření](http://sourceforge.net/projects/aoo-extensions/files/1078/0/dict-cs-2.0.oxt/download). Chvíli počkejte než se soubor začne stahovat a pak jej buďto přímo otevřete v OpenOffice/LibreOffice, nebo soubor uložený na disku spusťte v OpenOffice/LibreOffice. Zobrazí se vám dotaz zda-li rozšíření chcete nainstalovat, vy samozřejmě dáte že ano, odsouhlasíte licenci (jedná se o soubor svobodných licencí, není se čeho bát) a můžete začít kontrolu pravopisu používat. V menu "Nástroje" -> "Jazyky" vyberete "Pro celý text" (chcete-li aby se kontroloval komplet celý text) a zvolte z nabídky "čeština".
## Jak zmrazit řádky a sloupce v OpenOffice/LibreOffice

Potřebujete-li v OpenOffice/LibreOffice znehybnit pár řádků či sloupců, vyberte jednoduchým kliknutím buňku, která následuje po řádku a/nebo sloupci, který chcete zmrazit. Poté jděte do hlavního menu -> "Okno" ("Window") -> "Ukotvit" ("Freeze"). Tím dojde k ukotvení řádků/sloupců nad/před vybranou buňkou. Chcete-li tedy vybrat pouze první řádek, jděte do pole A2, pokud pouze první sloupec, klikněte na pole B1. Pokud chcete provést opačný postup, opět jděte do hlavního menu -> "Okno" ("Window") -> odškrtněte volbu "Ukotvit" ("Freeze").
## Přeškrtnutý text v OpenOffice/LibreOffice

Chcete-li v OpenOffice/LibreOffice přešrtnout písmo, označte si text který má být přeškrtnutý, klikněte na něj pravým tlačítkem myši a vyberte z nabídky "Styl"("Style") -> "Přeškrtnuté"("Strikethrough")
## Řazení seznamu podle abecedy v OpenOffice/LibreOffice

Potřebujeme-li v OpenOffice/LibreOffice seřadit nějaký seznam podle abecedy (může jít například o seznam literatury), označíme myší celou oblast která se má řadit, z hlavní lišty vybereme "Nástroje" ("Tools") -> "Řadit" ("Sort") a tady vybereme podle čeho má řazení probíhat. V nejjednodušším případě, chceme-li pouze seřadit vše vzestupně podle prvního písmena abecedy, necháme nastavení tak jak je a klikneme na tlačítko "OK". Je třeba překontrolovat vybraný jazyk, protože u anglické verze těchto programů je přednastavena angličtina, pro kterou je písmeno "CH" složeninou "C" a "H" a patří tedy mezi "CG" a "CI", nikoliv mezi "H" a "I". Možnosti natavení jsou však obecně daleko širší.
## Nezalomitelý spojovník v OpenOffice/LibreOffice

Chcete-li, aby se slovo se spojovníkem uprostřed na konci řádku nezalomilo, vložte tam místo normálního spojovníku nezalomitelný spojovník. Ten lze vytvořit podobně jako nezalomitelnou mezeru současným stiskem kláves Ctrl+Shift+-, kde "-" je buďto klasický spojovník nebo tlačítko mínus na numerické klávesnici. Zalomení pak proběhne před a nebo po celém takto vytvořeném slově.
## Horizontální čára v OpenOffice/LibreOffice

Chcete-li vytvořit horizontální čáru v Open/LibreOffice, napište tři pomlčky či podtržítka a zmáčkněte Enter. Znaky se automaticky převedou na linii, která vede přes celou šířku dokumentu.

Dvojitá čára vznikne vložením a odentrováním tří rovnítek, hvězdiček, vlnovek nebo znaků #.

<center><b><a href="../">Přehled technických článků</a></b></center>
