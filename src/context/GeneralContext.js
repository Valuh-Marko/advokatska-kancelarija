import React from "react";
import davor from "../assets/images/davor-maric.webp";
import milan from "../assets/images/milan-nedic.webp";
import dijana from "../assets/images/dijana-biro.webp";

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
  const ourTeam = [
    {
      title: "Advokat",
      name: "Davor Marić",
      logo: "https://i.imgur.com/RO32zRk.png",
      img: davor,
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
      title: "Advokat",
      name: "Milan Nedić",
      logo: "https://i.imgur.com/1rdielh.png",
      img: milan,
      desc: `Milan Nedić je rođen u Novom Sadu 1988. godine. Nakon završene srednje škole, 2007. godine upisuje Pravni fakultet Univerziteta u Novom Sadu, usmerenje unutrašnji poslovi, čiju diplomu dobija 2011. godine. Tokom izvođenja pripravničke vezbe u Osnovnom sudu u Novom Sadu, bio je zadužen za izradu sudskih odluka u istražnoj, krivičnoj i parničnoj referadi. Polaganjem pravosudnog ispita 2014. godine, počinje sa radom na mestu sekretara Predškolske ustanove "Ljuba Stanković" u Beočinu. U Imeniku advokata Advokatske komore Vojvodine se nalazi od 2015. godine.
      Poseduje sertifikat za odbranu maloletnih učinioca krivičnih dela i zastupanje maloletnih lica kao oštećenih krivičnim delom.`,
      email: "nesto@nesto.com",
      phone: "060 000 00 00",
      social: "nekiLinkedIn",
    },
    {
      title: "Advokat",
      name: "Dijana Biro",
      logo: "https://i.imgur.com/NYOgynA.png",
      img: dijana,
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
      type: "Nezavisno",
      desc: "u skladu sa svojim uverenjima, zasnovanim na pozitivnom pravu, pravnoj nauci i praksi, međunarodnim pravnim standardima, statutu i Kodeksu",
      img: "https://i.imgur.com/6A9x1Yl.jpg",
    },
    {
      type: "Stručno ",
      desc: "sa znanjem za koje smo stekli kvalifikacije i sa višegodišnjim iskustvom u pravosuđu i drugim granama prava",
      img: "https://imgur.com/9EL2d3N.jpg",
    },
    {
      type: "Savesno",
      desc: "pri čemu vodimo računa da zastupanje bude brižljivo, marljivo, odlučno i blagovremeno. Bez odlaganja ukazujemo na sve povrede prava i druga kršenja zakona na štetu klijenata. Interese klijenata stavljamo ispred sopstvenih interesa, interesa drugih učesnika u postupku i trećih lica.",
      img: "https://imgur.com/V1hBNhE.jpg",
    },
    {
      type: "Objektivno i odgovorno",
      desc: "gde u svakom pojedinačnom predmetu klijenta obavestimo potpuno, otvoreno i iskreno o pravnoj oceni slučaja, proceni izgleda za uspeh i izvršavanju ili neizvršavanju svojih obaveza",
      img: "https://imgur.com/kBCnnes.jpg",
    },
  ];

  return (
    <GeneralContext.Provider value={{ ourTeam, latinSayings, fieldsOfWork }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
