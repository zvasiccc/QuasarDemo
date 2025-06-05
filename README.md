# Kreiranje korisnickog interfejsa koriscenjem Quasar frameworka

## Sadržaj
- [Instalacija i pokretanje](#instalacija-i-pokretanje)
- [Uvod u Quasar i njegove prednosti](#uvod-u-quasar-i-njegove-prednosti)
- [Stilizovanje u Quasaru](#stilizovanje-u-quasaru)
- [Komponente specificne za Quasar](#komponente-specificne-za-quasar)
- [QButton](#qbutton)
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
Projekat ima arhitekturu koju mozemo menjati prema nasim potrebama.
Komponente se jednostavno prave, sto znaci da je moguce praviti dosta manjih komponenti koje ce se kasnije iskoristiti, time se sprecava ponavljanje koda, i povecava code reusability.
Takodje je moguce napraviti zajednicke komponente koje se mogu koristi u drugim quasar projektima. To je moguce i Vue projektima ali quasar nudi boot fajlove za automatsku inicijalizaciju, ugradjene alate i podesavanja za distribuciju komponenti kao paketa.
Quasar koristi fajl "routes.ts" za podesavanje rutiranja, sto znaci da je vrlo fleksibilno zato sto programer sam bira naziv url rute i koja ce se komponenta prikazati sto omogucava potpunu kontrolu nad rutama. 

Quasar je jedan od najbrzih i efikasnijih frontend frameworka zahvaljujuci raznim tehnikama za optimizaciju prilikom buildovanja aplikacije:
- Dinamicko ucitavanje komponenti - komponente se ucitavaju samo kada su stvarno potrebne (lazy loading)
- Razbija kod u manje delove (code splitting)
- Iz koda se automatski izbacuju delove koji se ne koriste (tree shaking)
- Radi se kompresija statickih fajlova i uklanjanje nepotrebnog koda iz js i css fajlova(manje podataka za prenos znaci brzi prenos)

## Stilizovanje u Quasaru
Komponente u Quasaru dolaze sa bogatom podrskom za animacije i dizajn bez dodatnog css-a.
Ukoliko nekoj quasar komponenti dodamo na primer atribut class="q-ma-sm" to bi znacilo:
- "q" je prefiks koji nam govori da se radi o ugradjenoj quasar klasi,
- "ma" deo je skracenica od Margin(m) i All(a). Sto znaci dodaje se margina na sve 4 strane u odnosu na dugme. Oznaka na primer "ml" bi znacila da se dodaje margina samo na levoj strani komponente. 
- "sm" je velicina margine, skracenica od small. Velicine idu postupno od extra small(xs) do extra large(xl). 

Isti principi vaze ako se umesto margine podesava pading(p).

Boje mogu da se uzimaju iz Quasar palete koja pruza najcesce koriscene boje kao sto su na primer "positive" (prepoznatljiva zelena nijansa) 
"negative" (prepoznatljiva crvena nijasna), "info", "warning" ... 
Takodje boje mogu da se uzimaju iz Quasar Color liste koja pruza 19 razlicitih boja, od kojih svaka ima 14 nijansi. 
Na primer "red-2" je crvena boja ali sa vrlo malo zasicenja, dok je "red-14" jarka crvena boja. Isto vazi iz za plavu,zelenu,zutu,narandzastu i sve ostale boje iz liste.

Postoje atributi za:
- boju pozadine i boju teksta (class="bg-blue text-black ") 
- debljinu i velicinu fonta(class="text-weight-thin")
- poravnanje, velicina i stil teksta ( class="text-bold text-left") 
- flexbox i layout ( row, column, justify-center, no-wrap...)
- border 

Quasar koristi Material Design Icons, nalaze se na linku https://fonts.google.com/icons. Svaka ikona sadrzi icon-name, i dovoljno je samo upisati ime zeljene ikone u quasar komponenti i odgovaraju ikona ce se prikazati unutar komponente.

Primer stilizovanja Quasar komponente bez css-a:
    <q-btn class="q-ma-sm" label="Dodaj" icon="add" color="positive" text-color="deep-purple-8" @click="funkcijaDodaj()" />

## Komponente specificne za Quasar

### QButton

Za izradu dugmadi se koristi ugradjena komponenta q-btn koja nudi dodatne mogucnosti i podesavanja u odnosu na standardne komponente. Omogucava jednostavnu integraciju sa ikonama, rad sa konturama, oblicima, i jednostavno podesavanje razlicitih stilova dugmeta.              

Primer quasar dugmeta sa atributima specificnim za Quasar: 
    <q-btn label="Settings" icon-right="build" color="purple" text-color="red" 
    outline rounded  unelevated ripple size="lg" @click="handleClick()" />

icon-right="build" - ikona se nalazi na desnoj strani dugmeta i naziv ikone je build (alat)
outline - dugme nije celo obojeno u ljubicasto (zato sto je color="purple") nego ce samo njegove ivice biti ljubicaste, dok ce tekst unutardugmeta biti crven (zato sto je text-color="red") 
rounded - dugme je zaokrugljeno 
unelevated - dugme izgleda kao deo povrsine, i nece imati efekat podizanja sa povrsine tj 3D efekat
ripple - na klik se iz dugmeta pojavljuje "talas" koji se siri iz sredine dugmeta

![settings-button](./images/settings-button.png)

### QInput

q-input je Quasar input komponenta. To je prosirena verzija standardnog input elementam sa dodatnim funkcionalnostima i vizuelnim efektima
radi boljeg korisnickog iskustva. 

Karakteristike QInput komponente:

- Podrzava razne tipove polja kao sto su text, number, email, password i textarea(viselinijski unos texta). Koriscenjem jednog od ovih 
parametara se moze definisati ponasanje polja kao i njegova vizuelna reprezentacija.
- Ima ugradjenu validaciju kroz atribut "rules". Rules sintaksa se sastoji od 2 dela. U prvom delu se nalazi niz uslova koje korisnicki unos 
mora da zadovolji da bi se smatrao validnim, a u drugom delu se nalazi poruka koja se ispisuje ukoliko uslovi nisu zadovoljeni.
Jedna od cescih primena je kod polja koja zahtevaju obavezni unos: 
    :rules="[val => val && val.length > 0 || 'Polje je obavezno']"
- Prepend-icon(s leve strane) i append-icon(s desne strane) se lako mogu koristiti ikonice za vizuelnu pomoc korisniku ali i za
neke funkcionalnosti u input polju, na primer ciscenje unosa ili prikazivanje/sakrivanje lozinke.
- Quasar omogucava prikaz dodatnih infomacija korisniku koje se prikazuju ispod input polja, preko atributa "hint" ili "error message".
- Mask se koisti za unose koji zahtevaju tacno odredjen format, kao sto su datumi i brojevi telefona.
    <q-input mask="###-###" />
Korisnik u ovom inputu moze da unosi samo brojeve(# dozvoljava samo cifru 0-9) i oni ce se automatski unositi u formatu 000-000
- Postoje i ugradjeni dogadjaji koji mogu da se "hvataju" i kada se desi odredjeni dogadjaj u QInputu da se poziva odredjena funkcija:
@input - svaki put kada korisnik unese nesto u input polje
@focus - kada korisnik fokusira polje
@blur - kada korisnik vise nije fokusiran na polje

### QDialog

QDialog je Quasar komponenta namenjena za prikaz dijaloga, upozorenja ili bilo kog sadrzaja u iskacucem prozoru(pop-up).
Dijalog u Quasaru se moze koristiti na 2 nacina, prvi je koriscenjem q-dialog komponente a drugi je pozivanjem dijaloga iz Quasar API-ja pomocu $q.dialog()
q-dialog je vrlo fleksibilan sto se tice sadrzaja, moze sadrzati cele strane, sa kompleksnim html-om i javascript-om. Moze sadrzati druge 
qusar komponente, padajuce menije, tabele, liste...
Zbog ugradjenih atributa olaksava rad sa podacima programeru, a korisnik moze da interaguje sa tim prozorom bez napustanja trenutne stranice cime se poboljsava korisnicko iskustvo.
Atribut "persistent" znaci da se dijalog ne zatvara klikom van dijaloga vec iskljucivo preko dugmeta predvidjenog za to.
Moguce je postaviti automatski fokus na prvi input u dijalogu pomocu metode .focus() sto moze biti korisno prilikom popunjavanja raznih vrsta   formulara. 
Quasar dijalog je povezan dvosmerno preko v-modela sa odredjenom boolean promenljivom, promenlijva se obicno dinamicki postavlja na true, i 
tada se otvara dijalog, a prilikom zatvaranja dijaloga se ta promenljiva postavlja na false. 
Postoji i direktiva v-close-popup koji umesto programera vodi racuna o zatvaranju i tada nema potrebe za postavljanjem promenljive na false, o tome vodi racuna Quasar. 
Dijalog moze emitovati rezultate korisnickih akcija(npr. korisnikov klik na "OK" ili "Cancel") i omogucava programsku obradu pomocu .onOk(), 
.onCancel() i .onDismiss() metoda.

