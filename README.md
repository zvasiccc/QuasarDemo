# Demonstracija Quasar Frameworka

## Sadržaj
- [Instalacija i pokretanje](#instalacija-i-pokretanje)
- [Uvod u Quasar i njegove prednosti](#uvod-u-quasar-i-njegove-prednosti)
- [Stilizovanje u quasaru](#stilizovanje-u-quasaru)
- [Komponente specificne za Quasar](#komponente-specificne-za-quasar)
  - [QBtn](#qbtn)
  - [QInput](#qinput)
  - [QDialog](#qdialog)



## Instalacija i pokretanje
Potrebno je pratiti sledece korake da bi se ovaj projekat pokrenuo na lokalnoj masini

Neophodno je imati instalirano: 
Node.js
npm(automatski dolazi sa instalacijom Node.js)
Quasar CLI - instalira se cdm komandom: npm install -g @quasar/cli

Pokretanje projekta:
-u cmd uneti komandu: git clone https://github.com/zvasiccc/QuasarDemo.git  - cime se klonira repozitorijum 
-u cmd uneti komandu: cd QuasarDemo - cime cete uci u odgovarajuci direktorijum
-u cmd uneti komandu: npm install - da biste instalirali zavisnosti
-u cmd uneti komandu: quasar dev - cime pokrecete projekat koji je dostupan na adresi http://localhost:9000/

## Uvod u Quasar i njegove prednosti
    Quasar je framework koji je svojevrsna nadogradnja na vec postojeci framework Vue. Ima sve mogucnosti koje ima i Vue i jos dodatnih.
Koristi se za izradu single page aplikacija i korisnickih interfejsa.
    Glavna prednost Quasara je sto ima dosta ugradjenih gotovih komponenti spremnih za koriscenje, kao sto su dugmici, inputi, notifikacije,
dijalozi. Ove nadogradnje umnogome olaksavaju i ubrzavaju rad.
    Vrlo je lak za ucenje, koristi SFC(single file component) pristup sto znaci da jedan fajl sadrzi i html i css i skriptu(logiku).
Quasar ima veoma dobro organizovanu arhitekturu koju mozemo menjati prema nasim potrebama.
Komponente se jednostavno prave, sto znaci da je moguce praviti dosta manjih komponenti koje ce se kasnije iskoristiti, time se sprecava ponavljanje koda, i povecava code reusability.
Takodje je moguce napraviti zajednicke komponente koje se mogu koristi u drugim quasar projektima. To je moguce i Vue projektima ali quasar nudi boot fajlove za automatsku inicijalizaciju, ugradjene alate i podesavanja za distribuciju komponenti kao paketa.
Quasar koristi fajl "routes.ts" za podesavanje rutiranja, sto znaci da je vrlo fleksibilno zato sto programer sam bira naziv url rute i koja ce se komponenta prikazati sto omogucava potpunu kontrolu nad rutama. 

    Quasar je jedan od najbrzih i efikasnijih frontend frameworka zahvaljujuci raznim tehnikama za optimizaciju prilikom buildovanja aplikacije:
-Dinamicko ucitavanje komponenti - komponente se ucitavaju samo kada su stvarno potrebne (lazy loading)
-Razbija kod u manje delove (code splitting)
-Iz koda se automatski izbacuju delove koji se ne koriste (tree shaking)
-Radi se kompresija statickih fajlova i uklanjanje nepotrebnog koda iz js i css fajlova(manje podataka za prenos znaci brzi prenos)

## Stilizovanje u Quasaru
    Komponente u Quasaru dolaze sa bogatom podrskom za animacije i dizajn bez dodatnog css-a.
    Ukoliko nekoj quasar komponenti dodamo na primer atribut class="q-ma-sm" to bi znacilo:
- "q" je prefiks koji nam govori da se radi o ugradjenoj quasar klasi,
- "ma" deo je skracenica od Margin(m) i All(a). Sto znaci dodaje se margina na sve 4 strane u odnosu na dugme. Oznaka na primer "ml" bi znacila da se dodaje margina samo na levoj strani dugmeta. 
- "sm" je velicina margine, skracenica od small. Velicine idu postupno od extra small(xs) do extra large(xl). 

Isti principi vaze ako se umesto margine podesava pading(p).

Boje mogu da se uzimaju iz Quasar palete koja pruza najcesce koriscene boje kao sto su na primer "positive" (prepoznatljiva zelena nijansa) 
"negative" (prepoznatljiva crvena nijasna), "info", "warning" ... 
Takodje boje mogu da se uzimaju iz Quasar Color liste koja pruza 19 razlicitih boja, od kojih svaka ima 14 nijansi. 
Na primer "red-2" je crvena boja ali sa vrlo malo zasicenja, dok je "red-14" jarka crvena boja. Isto vazi iz za plavu,zelenu,zutu,narandzastu i sve ostale boje iz liste.

Primer stilizovanja Quasar dugmeta bez css-a:
        <q-btn class="q-ma-sm" label="Dodaj" icon="add" color="positive" text-color="deep-purple-8" @click="funkcijaDodaj()" />

## Komponente specificne za Quasar

### QBtn

    Za izradu dugmadi se koristi ugradjena komponente <q-btn> koja nudi dodatne mogucnosti i podesavanja u odnosu na standardne komponentedugme. Omogucava jednostavnu integraciju sa ikonama, rad sa konturama, oblicima, i jednostavno podesavanje razlicitih stilova dugmeta.              

    Primer quasar dugmeta sa atributima specificnim za Quasar: 
        <q-btn label="Settings" icon-right="build" color="purple" text-color="red" outline rounded unelevated ripple size="lg" @click="handleClick()" />

    icon-right="build" - ikona se nalazi na desnoj strani dugmeta i naziv ikone je build (alat)
    outline - dugme nije celo obojeno u ljubicasto (zato sto je color="purple") nego ce samo njegove ivice biti ljubicaste, dok ce tekst unutar dugmeta biti crven (zato sto je text-color="red") 
    rounded - dugme je zaokrugljeno 
    unelevated - dugme izgleda kao deo povrsine, i nece imati efekat podizanja sa povrsine tj 3D efekat
    ripple - na klik se iz dugmeta pojavljuje "talas" koji se siri iz sredine dugmeta

    ![alt text](images/Settings_button.png)

### QInput

### QDialog

