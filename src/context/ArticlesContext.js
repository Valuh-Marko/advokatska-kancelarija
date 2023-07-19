import React from "react";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";
import image6 from "../assets/images/image6.webp";
import image7 from "../assets/images/image7.webp";

const ArticlesContext = React.createContext();

export const ArticlesProvider = ({ children }) => {
  const articles = [
    {
      title: "Ugovor o doživotnom izdržavanju",
      desc: "Jedan od bitnih ugovora u naslednom pravu je svakako ugovor o doživotnom izdržavanju. Zaključenju ovog ugovora, kad je naravno reč o naslednom pravu, pristupa najveći broj ljudi, te se može reći da je ugovor o doživotnom izdržavanju svakako jedan od najznačajnijih i najčešćih ugovora u našem pravu. Isti je regulisan Zakonom o nasleđivanju. Ukoliko želite da obezbedite da se neko brine o vama u starosti i/ili bolesti do kraja vašeg života, svakako biste to ishodovali zaključenjem ove vrste ugovora. U slučaju da se obaveze propisane ugovorom ne izvršavaju na način na koji je to dogovoreno, i ovakav ugovor se može raskinuti, kao i svaki drugi dvostrani ugovor, jer jedna strane neispunjava svoju obavezu. Ono što je prvenstveno bitno napomenuti jeste da Ugovor o doživotnom izdržavanju mora biti zaključen u obliku solemnizovane isprave. Zaključenjem ovog ugovora, obavezuje se primalac izdržavanja da se posle njegove smrti na davaoca izdržavanja prenese svojina tačno određenih stvari ili prava, a davalac izdržavanja se obavezuje da ga, kao naknadu za to, izdržava i da se brine o njemu do kraja njegovog života i da ga posle smrti sahrani. Način na koji će se to činiti, zavisi od volja ugovarača. Vrlo je bitno napomenuti, a što je i javni beležnik posebno dužan da upozori ugovarače prilikom overe ovakvog ugovora, jeste da primalac izdržavanja bude svestan da imovina koja je predmet ovog ugovora ne ulazi u njegovu zaostavštinu i da se njom, nakon njegove smrti, ne mogu namiriti njegovi nužni naslednici. O tome mora da se stavi posebna napomena u klauzuli o potvrđivanju jer bi u suprotnom ugovor bio ništav. Česti su slučajevi u praksi da zakonski naslednici primaoca izdržavanja za postojanje ovakvog ugovora saznaju tek na ostavinskoj raspravi. Ukoliko isti smatraju da postoji neki od razloga za poništaj ugovora o doživotnom izdržavanju, zakonski naslednici primaoca izdržavanja imaju pravo da u roku od godinu dana od dana saznanja za ugovor, a najkasnije u roku od 3 godine od smrti primaoca izdržavanja podnesu zahtev za poništaj ugovora. Ukoliko vam je potrebna pravna pomoć za sastavljanje ugovora o doživotnom izdržavanju, raskid, zastupanje ili pak pravni savet u pogledu toga ko sve može zaključiti ovakav ugovor, pod kojim uslovima ili iz kojih razloga možete tražiti poništaj već zaključenog Ugovora o doživotnom izdržavanju, kontaktirajte nas kako biste na najbolji način zaštitili i ostvarili svoja prava.",
      image: image1,
    },
    {
      title: "Naplata duga po osnovu računa - faktura",
      desc: `Naplata potraživanja po osnovu računa ili faktura za isporučene proizvode ili pruženu
      uslugu predstavlja u nekim situacijama problem za svako lice koje se bavi prodajom ili
      pružanjem usluga. Republika Srbija ima određene propise koji regulišu ovu oblast i pružaju
      okvir za efikasnu naplatu potraživanja.
      Prvi korak u naplati potraživanja je ispostavljanje jasnih i preciznih računa ili faktura
      drugoj strani, kupcima. Račun ili faktura treba sadržati sve relevantne informacije, kao što su
      naziv i adresa prodavca i kupca, detaljan opis proizvoda ili usluga, količina, cena, datum
      izdavanja, rok plaćanja i detalji za uplatu.
      Kada dođe do kašnjenja ili neplaćanja računa, lice koje je isporučilo fakturu treba da
      preduzme odgovarajuće korake u skladu sa zakonskim propisima kako bi obezbedilo
      izvršenje obaveze po osnovu isporučenih računa.
      Prva mera koju lice mora da preduzme je da obavesti drugu stranu, kupca da postoji
      neplaćeni račun. Najčešće se druga strana obaveštava slanjem opomene u pisanoj formi,
      kojom se ukazuje na dospelu obavezu za plaćanje. Opomena treba biti jasna, mora da sadrži
      relevantne informacije o potraživanju i mora se ostaviti rok drugoj strani za dobrovoljno
      izvršenje plaćanja računa.
      Ukoliko druga strana, kupac ne izvrši plaćanje ni nakon opomene, ispunjeni su uslovi
      i može se pokrenuti sudski postupak radi naplate potraživanja. Sudski postupak može
      uključivati podnošenje tužbe protiv kupca ili pokretanje izvršnog postupka. U ovoj fazi, važno
      je imati adekvatnu dokumentaciju, kao što su originalni ugovori, računi, fakture ili druge
      relevantne dokaze o poslovnoj transakciji.
      Sudska presuda u korist poverioca omogućava sprovođenje izvršnog postupka, koji
      podrazumeva prinudnu naplatu potraživanja koje se sprovodi putem Javnih izvršitelja.
      Međutim, postupak naplate potraživanja može da se pokrene i samo na osnovu računa koji
      su sastavljeni shodno zakonskim propisima, a koji treba da budu u originalu ili kopiji vernoj
      originalu, jer oni predstavljaju verodostojnu ispravu po osnovu koje je moguće pokrenuti
      postupak prinudne naplate potraživanja. Na taj način se može izbeći višegodišnje vođenje
      sudskog postupka i odugvlačenje naplate neplaćenih računa.
      Moramo istaći da brzina i način naplate potraživanja varira od slučaja do slučaja i na
      isto utiče više faktora.
      Važno je naglasiti da je savetovanje sa advokatom od ključne važnosti u ovom
      procesu, kako bi se izvršila provera dokumentacije koje poverilac poseduje, dala procena
      uspešnosti naplate, a sve u cilju osiguranja poštovanja svih zakonskih propisa i pravila koja
      se odnose na naplatu potraživanja.`,
      image: image5,
    },
    {
      title: "Nezakonit otkaz",
      desc: `U Republici Srbiji, Zakon o radu predviđa i reguliše prava i obaveze zaposlenih i
      poslodavaca u vezi sa prekidom radnog odnosa. Svaki prekid radnog odnosa koji je u
      suprotnosti sa odredbama Zakona o radu predstavlja „Nezakonit otkaz“.
      Najčešće poslodavci prekidaju radni odnos za zaposlenima na način koji nije
      predviđen odredbama zakonskih propisa.
      Prema Zakonu o radu, poslodavac može prekinuti radni odnos samo u određenim
      situacijama koje su predviđene zakonom. Poslodavac je dužan da poštuje propisane
      procedure i pruži zaposlenom pravnu zaštitu.
      Ukoliko poslodavac prekine radni odnos na nezakonit način, zaposleni ima pravo da
      pokrene postupak za zaštitu svojih prava. Prvi korak je često pokušaj rešavanja spora kroz
      mirno i pregovaračko rešenje, kao što je razgovor sa poslodavcem ili posredovanje nadležnih
      organa. Ukoliko se ne postigne sporazum, zaposleni može pokrenuti radni spor pred
      nadležnim sudom.
      Moramo napomenuti da je zakonom predviđen rok u kojem mora da se pokrene
      sudski postupak radi poništaja nezakonitog otkaza. Taj rok iznosi 60 dana od dana prijema
      rešenja o otkazu ugovora o radu. U slučaju da zaposleni u roku od 60 dana od dana prijema
      rešenja o otkazu ugovora o radu ne pokrene odgovarajući sudski postupak radi poništaja
      otkaza ugovora o radu, zaposleni gubi pravo na sudsku zaštitu.
      U sudskom postupku Sud razmatra sve relevantne činjenice i dokaze u vezi sa
      otkazom i donosu odluku na osnovu utvrđenih činjeica u skladu sa zakonom. Ukoliko sud
      utvrdi da je otkaz bio nezakonit, poslodavac može da ima obavezu vraćanja zaposlenog na
      posao, isplatu odgovarajuće nadoknade za izgubljenu zaradu tokom nezakonitog otkaza, kao
      i druge pravne ili finansijske obaveze.
      Važno je napomenuti da je svaki slučaj nezakonitog otkaza jedinstven i zahteva
      individualnu procenu u skladu sa konkretnim okolnostima. Konsultacija sa advokatom
      specijalizovanim za radno pravo može biti od velike koristi kako bi se ostvarila prava
      zaposlenog i zaštitilo od nezakonitog postupanja poslodavca.`,
      image: image2,
    },
    {
      title: "Otkaz ugovora o radu od strane zaposlenog",
      desc: `Otkaz ugovora o radu od strane zaposlenog predstavlja jedan od načina prestanka
      radnog odnosa u smislu Zakona o radu Republike Srbije.
      Konkretno u pitanju je jednostrani raskid radnog odnosa od strane zaposlenog.
      Zaposleni ima pravo da otkaže ugovor o radu u skladu sa Zakonom o radu Republike Srbije i
      uslovima koji su propisani zakonom, Opštim aktom poslodavca ili ugovorom o radu koji je
      zaposleni sklopio sa poslodavcem.
      Način za raskid ugovora o radu od strane zaposlenog je podnošenje pisanog otkaza
      poslodavcu.
      Otkaz treba da bude u pisanom obliku i jasno izražen, da sadrži datum podnošenja,
      razloge otkaza i željeni datum prestanka radnog odnosa. Takođe, preporučljivo je da
      zaposleni sačuva kopiju otkaza kao i dokaz o podnošenju istog poslodavcu.
      Otkaz od strane zaposlenog mora biti podnet poslodavcu svojevoljno, bez ikakve
      zablude, prinude ili drugih mana volja.
      Otkaz koji zaposleni daje u pisanoj formi mora da sadrži i „Otkazni rok“. Otkazni rok
      predstavlja period koji zaposleni mora da nastavi da radi kod poslodavca nakon podnošenja
      otkaza, a čija dužina trajanja zavisi od više faktora i propisana je zakonom, kolektivnim
      ugovorom ili ugovorom o radu. Otkazni rok može biti i dogovoren između poslodavca i
      zaposlenog, ali ne sme biti kraći od zakonom propisanog minimalnog otkaznog roka, niti duži
      od zakonom propisanog maksimalnog roka.
      Nakon podnošenja otkaza, zaposleni ima pravo na isplatu svih neisplaćenih zarada,
      godišnjeg odmora, naknade za prekovremeni rad ili druge dospele beneficije. Poslodavac je
      dužan da izvrši obračun i isplati sve dugove prema zaposlenom u zakonom propisanom roku
      i shodno pozitivnim propisima.
      Važno je da zaposleni pre odluke o raskidu radnog odnosa bude upoznat sa
      odredbama ugovora o radu, opštim aktom poslodavca i zakonskim propisima vezanim za
      otkazivanje ugovora o radu od strane zaposlenog kako bi poznavao i zaštitio svoja prava i
      obaveze prilikom podnošenja otkaza.
      U ovakvim situacijama se uvek preporučuje konsultovanje advokata kako bi se radnik
      maksimalno zašitio prilikom raskida radnog odnosa.`,
      image: image3,
    },
    {
      title: "Naknada štete u slučaju povrede na radu",
      desc: `Naknada štete u slučaju povrede na radu predstavlja pravo radnika da zahteva
      nadoknadu za štetu koju je pretrpeo usled povrede ili bolesti nastale na radu ili u vezi sa
      radom. Ovo pravo je regulisano Zakonom o radu Republike Srbije, Zakonom o zdrastvenom
      osiguranju Republike Srbije, Zakonom o bezbednosti i zdravlju na radu i drugim pozitivnim
      propisima.
      Kada radnik pretrpi povredu na radu ili oboli od profesionalne bolesti, prvi korak je
      prijavljivanje povrede ili bolesti poslodavcu. Poslodavac je dužan da prijavi povredu ili bolest
      nadležnom organu za radnu inspekciju i osiguravajućem društvu sa kojim ima zaključen
      ugovor o osiguranju od povreda na radu i profesionalnih bolesti.
      Izveštaj o povredi na radu i profesionalnom oboljenju koji se dogode na radnom
      mestu, poslodavac je dužan da dostavi zaposlenom koji je pretrpeo povredu, kao i
      organizacijama nadležnim za zdravstveno i penzijsko i invalidsko osiguranje
      Nakon prijave, radnik ima pravo na lečenje i rehabilitaciju o trošku osiguranja, u
      skladu sa zakonom i propisima o zdravstvenom osiguranju. Ukoliko povreda na radu ili
      profesionalna bolest prouzrokuje privremenu sprečenost za rad, radnik ostvaruje pravo na
      novčanu nadoknadu za vreme privremene sprečenosti, koja se isplaćuje u visini određenoj
      propisima o osiguranju od povreda na radu.
      Radnik ima pravo na naknadu nematerijalnu štetu za pretrpljene fizičke bolove,
      duševne bolove, pretrpljeni strah, telesno oštećenje, narušeno zdravlje, smanjenje radne
      sposobnosti i druge štetne posledice povrede ili bolesti. Visina naknade štete zavisi od težine
      povrede ili bolesti, stepena invalidnosti, gubitka radne sposobnosti i drugih relevantnih
      faktora.
      Da bi ostvario pravo na naknadu štete, radnik treba da podnese zahtev poslodavcu ili
      direktno osiguravajućem društvu koje pruža osiguranje od povreda na radu i profesionalnih
      bolesti. Ukoliko postoji spor oko visine ili osnova isplate naknade štete, radnik može se
      obratiti sudu radi zaštite svojih prava.
      U praksi većina slučajeva naknade štete zbog povrede na radu završi na sudu.
      Važno je napomenuti da je svaki slučaj povrede na radu ili profesionalne bolesti
      jedinstven, te se uvek preporučuje konsultovanje i angažovanje advokata kako bi radnik
      maksimalno zaštitio i ostvario svoja prava zbog povrede na radu.`,
      image: image4,
    },
    {
      title: "Osnivanje firme",
      desc: `Osnivanje firme predstavlja proces registracije pravnog lica koji ima za cilj obavljanje
      određene privredne delatnosti i ostvarivanje poslovnih aktivnosti. Ovaj proces uključuje
      nekoliko koraka i zahteva poštovanje zakonskih propisa i procedura.
      Naš savet je da pre osnivanja firme detaljno proverite propise koje regulišu oblast u
      kojoj će firma da posluje, da istražite tržište, analizirate konkurenciju, pripremite poslovni plan
      i obezbediti neophodne resurse i kapital za pokretanje poslovanja.
      Nakon toga, sledeći korak u osnivanju firme je odabir pravne forme preduzeća. U
      Republici Srbiji postoje različite pravne forme, kao što su društvo sa ograničenom
      odgovornošću (DOO), akcionarsko društvo (AD), preduzetnik, itd. Ova odluka zavisi od vrste
      poslovanja kojom žeite da se bavite, ciljeva koje želite da ostvarite, kapitala kojim
      raspolažete i drugih faktora.
      Važno je napomenuti da svaka forma organizovanja firme nosi određene prednosti i
      mane, koje morate imati u vidu prilikom odlučivanja o izboru pravne forme u kojoj želite da
      bude vaša firma.
      Kada odaberete pravnu formu u kojoj ćete da poslujete sa budućom firmom, sledi
      registracija firme u Agenciji za privredne registre (APR).
      Zahtev za registraciju podnosi se elektronski i obuhvata prikupljanje potrebne
      dokumentacije, kao što su statut preduzeća, osnivački akt, rešenje o imenovanju direktora ili
      zastupnika, izjava o prihvatanju funkcije direktora/zastupnika, itd. Takođe, potrebno je uplatiti
      odgovarajuće takse i naknade za registraciju.
      Uz registraciju u APR-u, često je potrebno i ishodovanje drugih dozvola i dozvoljenih
      dokumenata, u zavisnosti od vrste delatnosti kojom želite da se buduća firma bavi. Na
      primer, za određene delatnosti može biti potrebna posebna dozvola, poput dozvole za
      obavljanje medicinske delatnosti ili dozvole za trgovinu određenom robom.
      Takođe, prilikom osnivanja firme, potrebno je otvoriti poslovni račun kod banke, kao i
      voditi računovodstvo i izveštavati nadležne organe o finansijskom stanju preduzeća.
      Nakon podnošenja zahteva APR ukoliko je sva dokumentacija pripremljena kako
      nalažu propisi, u kratkom roku donosi Rešenje o registraciji, te možete otpočeti sa Vašim
      poslovanjem.
      Važno je napomenuti da za pravna lica u Republici Srbiji važe određene obaveze
      koje se moraju ispoštovati shodno pozitivnim propisima ( dostavljanje finansijskih, statističkih
      izveštaja državnim institucijama).
      Za praćenje propisa i postupak otvaranje firme je preporuka da se angažuje advokat
      da bi se postupak sproveo brzo i efikasno.`,
      image: image6,
    },
    {
      title: "Nasilje u porodici",
      desc: `Kada se govori o nasilju u porodici najčešća pomisao je fizičko nasilje jednog člana porodice nad drugim članom. Međutim, bitno je napomenuti da se pod nasiljem u porodici, a u smislu Porodičnog zakona, podrazumeva svako ponašanje kojim jedan član porodice integritet duševno zdravlje ili spokojstvo drugog člana porodice. Dakle, pod nasiljem u porodici podrazumeva se, pored nanošenja ili povreda, i izazivanje straha pretnjom ubistva ili nanošenja telesnih povreda članu porodice ili njemu bliskom licu, prisiljavanje na seksualni odnos navođenje na seksualni odnos ili seksualni odnos sa licem koje nije navršilo 14 godina života ili nemoćnim lice, ograničavanje komuniciranja sa trećim licima, vređanje, kao i svako drugo drsko, bezobzirno i zlonamerno ponašanje.

      Pod članovima porodice ne smatraju se samo supružnici, deca, roditelji i ostali krvni srodnici kao što većina misli, već i supružnici tazbinskom ili adoptivnom srodstvu, odnosno lica koja vezuje hraniteljstvo, lica koja žive ili su živela u istom porodičnom domaćinstvu kao i vanbračni ili bivši vanbračni partneri i lica koja su međusobno bila ili su još uvek u emotivnoj ili seksualnoj vezi, odnosno zajedničko dete ili je dete na putu da bude rođeno, iako nikad nisu živela u istom porodičnom domaćinstvu. Dakle, sva nabrojana lica članove porodice u smislu Porodičnog zakona i ista su jedna od drugih zaštićena od nasilja u porodici, odnosno ista mogu odgovarati za krivično delo nasilje u porodici. Ukoliko trpite bilo koji vid nasilja u porodici prijavite policiji/javnom tužiocu ili kontaktirajte nas kako bismo to učinili umesto Vas i kako bismo vam pružili potrebnu pravnu zaštitu.

      Pored podnošenja krivične prijave protiv lica koje vrši nasilje u porodice, može se voditi i parnični postupak radi zaštite od nasilja porodici.

      Parnični postupak radi zaštite od nasilja u porodici

      U parničnom postupku Sud na osnovu podnete tužbe može odrediti jednu ili više mera zaštite od nasilja u porodici, i to:
      - izdavanje naloga za iseljenje iz porodičnog stana ili kuće, bez obzira na pravo svojine odnosno zakupa nepokretnosti; 
      - izdavanje naloga za useljenje u porodični stan ili kuću, bez obzira na pravo svojine odnosno zakupa nepokretnosti;
      - zabrana približavanja članu porodice na određenoj udaljenosti;
      - zabrana pristupa u prostor oko mesta stanovanja ili mesta rada člana porodice;
      - zabrana daljeg uznemiravanja člana porodice.

      Ukoliko Vam je radi zaštite od nasilja u porodici neophodno određivanje neke od nabrojanih mera, naš tim advokata Vam može pomoći da zaštitu ishodujete.
      Mera zaštite od nasilja u porodici može trajati najviše godinu dana, s tim što se može produžavati sve dok ne prestanu razlozi zbog određena.
      Takođe, mera zaštite od nasilja u porodici može prestati pre isteka vremena trajanja ako prestanu razlozi zbog kojih je mera bila određena.

      Postupak nakon prijave nasilja u porodici:

      Zakonom o sprečavanju nasilja u porodici propisan je način postupanja svakog organa nakon prijave.
      Policijski službenici su dužni da odmah obaveste nadležnog policijskog službenika o svakom nasilju u porodici ili neposrednoj opasnosti od njega, i imaju pravo da sami ili na zahtev nadležnog policijskog službenika dovedu mogućeg učinioca u nadležnu jedinicu policije radi vođenje postupka.
      Zadržavanje mogućeg učinioca u nadležnoj organizacionoj jedinici policije radi vođenja postupka može trajati najduže osam časova, u toku kojeg zadržavanja mogući učinilac mora biti poučen o pravima, te mu se mora omogućiti kontakt i korićenje pravne pomoći branioca.
      Nadležni policijski službenik mora mogućem učiniocu koji je doveden da pruži priliku da se izjasni o svim bitnim činjenicama, i da odmah proceni rizik neposredne opasnosti od nasilja u porodici. Ukoliko utvrdi da postoji rizik,  može naredbom izreći hitnu meru privremenog udaljenja učinioca iz stana i/ili meru privremene zabrane učiniocu da kontaktira žrtvu nasilja i prilazi joj.
      Javni tužilac vrednuje procenu rizika nadležnog policijskog službenika i donesi odluku o tome da li će podneti predlog sudu da se hitna mera produži, a koji predlog podnosi u roku od 24 časa od uručenja naređenja licu kome je izrečena mera. 
      Hitna mera izrečena od strane nadležnog policijskog službenika traje 48 časova od uručenja naređenja, a na predlog javnog tužioca, Sud može hitnu meru produžiti za još 30 dana.
      Ukoliko je potrebno hitno reagovati, naš tim advokata može Vam pomoći da dobijete neku od hitnih mera za zaštitu od nasilja.
      Ukoliko ranije izrečena mera više nije potrebna, možemo Vam pomoći i u postupku ukidanja iste.
      Nakon donošenja Zakona o sprečavanju nasilja u porodici dešavao se i veliki broj zloupotreba i lažnih prijava nasilja u porodici. U krivičnom postupku naš tim advokata može Vam pomoći da se odbranite od lažnih prijava za nasilje u porodici, kao i u parničnom postupku u kom je protiv Vas podneta tužba radi zaštite od nasilja u porodici.
      `,
      image: image7,
    },
  ];

  return (
    <ArticlesContext.Provider value={{ articles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesContext;
