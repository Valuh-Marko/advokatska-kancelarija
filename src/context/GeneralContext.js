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
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Naknada štete",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1675093022653-59233299f8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    },
    {
      type: "Radno Pravo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1573496130103-a442a3754d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
    {
      type: "Opšta parnica",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1596574027151-2ce81d85af3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    },
    {
      type: "Porodično i nasledno pravo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Vanparnica",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Privredno pravo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      type: "Stvarno i građansko pravo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1621778455241-f35f8cf63d64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1265&q=80",
    },
    {
      type: "Krivično I prekršajno pravo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Upravno pravo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Postupak naplate potraživanja",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
      img: "https://images.unsplash.com/photo-1606933987885-1834b4d326bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "Ostalo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam magni placeat, ab exercitationem officia?",
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
