import React from "react";

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
  const ourTeam = [
    {
      title: "Davor Maric",
      logo: "",
      img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
      desc: `Advokat Davor Marić je rođen 1989. godine u Sarajevu. Nakon završene Gimnazije „Jovan Jovanović Zmaj“ u Novom Sadu upisuje Pravni Fakultet Univerziteta u Novom Sadu 2008. Godine – smer opšti, na kojem i diplomira 08.02.2013. godine.
      Pripravničku vežbu je obavljao u Višem sudu u Novom Sadu, zatim u advokatskoj kancelariji Nebojša Karanović i advokatskoj kancelariji Zoran Trbuk.
      Zvanje Master pravnika stiče 30.10.2014. godine nakon što je odbranio završni master rad na temu „Pozitivne obaveze država u pogledu zaštite prava na život“ na Pravnom fakultetu Univerziteta u  Novom Sadu.
      Pravosudni ispit je položio 29.06.2016. godine, a advokatski ispit je položio 25.11.2016. godine.
      Od 14.02.2017. godine je upisan u imenik advokata i član je Advokatske komore Vojvodine.
      Poseduje sertifikate za odbranu maloletnih učinilaca krivičnih dela i zastupanje maloletnih oštećenih lica, sertifikat za zastupanje klijenata u medijaciji, sertifikat o završenoj obuci pravna zaštita od nasilja u porodici.
      Pored maternjeg srpskog jezika govori još i engleski jezik, a služi se ruskim jezikom.`,
      email: "nesto@nesto.com",
      phone: "060 000 00 00",
      social: "nekiLinkedIn",
    },
    {
      title: "Milan Nedic",
      logo: "",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      desc: `Милан Недић је рођен у Новом Саду 1988. године. Након завршене средње школе, 2007. године уписује  Правни факултет Универзитета у Новом Саду – Смер унутрашњих послова и на истом дипломира 2011. године.  Приправничку вежбу започиње 2012. године у Основном суду у Новом Саду и у том периоду је задужен за израду судских одлука у истражној, кривичној и парничној реферади. Након положеног правосудног испита 2014. године, радио је на радном месту секретара Предшколске установе „Љуба Станковић“ у Беочину, после чега се 2015. године уписује у Именик адвоката Адвокатске коморе Војводине.

      Поседује сертификат за одбрану малолетних учиониоца кривичних дела и заступање малолетних лица као оштећених кривичним делом. `,
      email: "nesto@nesto.com",
      phone: "060 000 00 00",
      social: "nekiLinkedIn",
    },
    {
      title: "Dijana Biro",
      logo: "",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      desc: `Advokat Dijana Biro rođena je 1991. godine u Kikindi. Nakon završetka gimnazije „Dušan Vasiljev“ u Kikindi, upisuje Pravni fakultet za privredu i pravosuđe u Novom Sadu, na kom je i diplomirala 2014. godine. Tokom studiranja učestvovala je na takmičenju u besedništvu, i uspešno završila kurseve sa temama „Imovinski odnosi bračnih i vanbračnih partnera“ i „Metodologija izrade presude u parničnom postupku“. Po završetku studija, pripravničku vežbu obavlja u Višem sudu u Novom Sadu, radeći u svojstvu sudijskog pripravnika na prvostepenom krivičnom i  prvostepenom parničnom odeljenju, drugostepenom parničnom odeljenju, kao i na odeljenju za maloletnike. Pravosudni ispit ispit polaže 2018. godine, a advokatski ispit 2019. godine, koje godine i osniva  svoju advokatsku kancelariju. Dijana Biro poseduje sertifikat za odbranu maloletnih učinilaca krivičnih dela i zastupanje maloletnih lica oštećenih krivičnim delima.`,
      email: "nesto@nesto.com",
      phone: "060 000 00 00",
      social: "nekiLinkedIn",
    },
  ];
  const latinSayings = [
    {
      latin: "Alteri stipulari nemo potest",
      translate: "Niko ne može svojom izjave volje obavezati drugog",
    },
    {
      latin: "Ambulatoria est voluntas defuncti usque ad vitae supremum exitum",
      translate: "Volja ostavioca je promenljiva do zadnjeg časa života",
    },
    {
      latin: "Causa est origo et materia negotii",
      translate: "Causa je izvor i sadržaj pravnog posla",
    },
    {
      latin: "Contractus contrahentibus lex esto",
      translate: "Ugovor neka bude stranama zakon",
    },
    {
      latin: "Pacta sunt servanda",
      translate: "Ugovor neka bude stranama zakon",
    },
    {
      latin: "Culpa lata dolo aequiparatur",
      translate: "Teški nehat izjednačava se sa namerom",
    },
    {
      latin: "Dicat testator et erit lex",
      translate: "Što odredi ostavilac postaće zakon",
    },
    {
      latin: "Dies interpelat pro homine",
      translate: "Rok opominje umesto čoveka",
    },
    {
      latin: "Errantis consensus nullus est",
      translate: "Ništava je saglasnost lica koje je u zabludi",
    },
    {
      latin: "Ex nudo pacto non nascitus obligation",
      translate: "Iz proste saglasnosti volja ne nastaje obligacija",
    },
    {
      latin: "Falsa demonstration non nocet",
      translate: "Netačan opis ne škodi",
    },
  ];
  const fieldsOfWork = [
    {
      type: "Ugovorno pravo",
      desc: "Konsultacije, prouačavanje i izrada svih vrsta ugovora: ugovor o kupoprodaji nepokretnosti  (stana, kuće, pracele), ugovor o kupoprodaji pokretnih stvari, ugovor o doživotnom izdržavanju, ugovor o zakupu, ugovor o poklonu, ugovor o zajmu itd, sačinjavanje svih vrsta izjava i specijalnih punomoći, postupak pred javnim beležnikom ",
      img: "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Naknada štete",
      desc: "Zastupanje u svim postupcima naknade materijalne i nematerijalne štete prilkom saobraćajne nezgode, povrede nastale na javnoj površini, povrede nastale od strane životinja, povrede časti i ugleda, povreda na radu, zbog neispunjenja ugovornih obaveza, zbog izgubljene dobiti, neisplaćene zarade, umanjenje imovine, zastupanje pred sudom i pred osiguravajućim društvima.",
      img: "https://images.unsplash.com/photo-1675093022653-59233299f8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    },
    {
      type: "Radno Pravo",
      desc: "Konsultacije, proučavanje i analiza spornih radnopravnih situacija, izrada opštih i pojedinačnih radnopravnih akata, i zastupanje u sudskim postupcima. Ostvarivanje prava zaposlenih u slučaju nezakonitog prestanka radnog odnosa, naplata potraživanja po osnovu rada, naknada štete prouzrokovane u toku rada.",
      img: "https://images.unsplash.com/photo-1573496130103-a442a3754d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
    {
      type: "Privredno pravo",
      desc: "Osnivanje i registracija preduzetnika i pravnih lica, promena pravne forme privrednog društva i rešavanje statusnih pitanja, izrada opštih i posebnih pravnih akata, postupak registracije i zaštite patenta, zastupanje u privrednim sporovima, privrednim prestupima i stečajnim postupcima i likvidaciji.",
      img: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      type: "Stvarno i građansko pravo",
      desc: `Zastupamo klijenate u parničnim, vanparničnim i drugim postupcima gde prilikom konsultacija dajemo procenu mogućnosti uspeha u postupku.
      Konsultacije i zastupanje u predmetima iz porodičnog prava u postupcima razvoda braka, poveravanje maloletne dece roditeljima, alimentacija, podela zajedničke imovine itd, kao i u postupcima iz naslednog prava i to sastavljanje zaveštanja, ugovora o doživotnom izdržavanju, pokretanje ostavinskog postupka, zastupanje u ostavinskom postupku.
      Konsultacije I zastupanje u postupcima proglašenja nestalog lica za umrlo, , lišenje poslovne sposobnosti.
      Savetovanje i zastupanje u oblasti gradnje i dobijanja neophodnih dozvola pred nadležnim organima
      Pravna analiza u oblasti nepokretnosti, zastupanje u vezi sa uknjižbom nepokretnosti, zastupanje i savetovanje u imovinsko - pravnim sporovima, u postupku eksproprijacije, deoba zajedničke imovine, uređenje međa. 
      `,
      img: "https://images.unsplash.com/photo-1621778455241-f35f8cf63d64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1265&q=80",
    },
    {
      type: "Krivično I prekršajno pravo",
      desc: "Odbrana punoletnih i maloletnih okrivljenih u krivičnom postupku i prekršajnom postupku, zastupanje oštećenih punoletnih i maloletnih lica u krivičnom postupku",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Upravno pravo",
      desc: "Pružamo pravnu pomoć zastupanja i savetovanja u pravnim stvarima u postupcima pred svim organima uprave kao što su Poreska uprava, Uprave carina i drugih republičkih, pokrajinskih ili lokalnih organa uprave.",
      img: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Postupak naplate potraživanja",
      desc: "Konsultacije i vođenje postupka prinudne naplate potraživanja na osnovu verodostojne i izvršne isprave pred javnim izvršiteljima",
      img: "https://images.unsplash.com/photo-1606933987885-1834b4d326bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Ostalo",
      desc: "Konsultacije, prouačavanje, izrada, vođenje postupka u svim ostalim pravnim stvarima?",
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <GeneralContext.Provider value={{ ourTeam, latinSayings, fieldsOfWork }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
