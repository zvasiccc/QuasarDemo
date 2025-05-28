# Demonstracija Quasar Frameworka

## Sadržaj
- [Instalacija i pokretanje](#instalacija-i-pokretanje)
- [Uvod u Quasar i njegove prednosti](#uvod-u-quasar-i-njegove-prednosti)
- [Komponente specificne za Quasar](#komponente-specificne-za-quasar)



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
Glavna prednost Quasara je sto ima dosta ugradjenih gotovih komponenti spremnih za koriscenje, kao sto su dugmici, inputi, notifikacije, dijalozi. Ove nadogradnje umnogome olaksavaju i ubrzavaju rad.
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

## Komponente specificne za Quasar
