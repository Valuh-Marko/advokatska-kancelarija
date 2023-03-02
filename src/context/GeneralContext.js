import React from "react";

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
  const ourTeam = [
    {
      title: "Davor Maric",
      logo: "",
      img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate ipsum nisi autem veritatis nam quasi placeat dolor nobis eaque modi quod, est, a facilis, iure voluptate commodi unde alias facere minima saepe. Cupiditate ut officiis consequuntur, illum fuga veritatis.",
    },
    {
      title: "Milan Nedic",
      logo: "",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate ipsum nisi autem veritatis nam quasi placeat dolor nobis eaque modi quod, est, a facilis, iure voluptate commodi unde alias facere minima saepe. Cupiditate ut officiis consequuntur, illum fuga veritatis.",
    },
    {
      title: "Dijana Biro",
      logo: "",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate ipsum nisi autem veritatis nam quasi placeat dolor nobis eaque modi quod, est, a facilis, iure voluptate commodi unde alias facere minima saepe. Cupiditate ut officiis consequuntur, illum fuga veritatis.",
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
