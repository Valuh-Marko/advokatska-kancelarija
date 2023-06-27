import React from 'react'
import { Header } from '../Header/Header'
import { DividerCenter } from '../Decoratives/divider-center';
import './articles.scss';

export const Articles = () => {
  return (
    <>
      <Header isArticles={true} />
      <div className="c-our-work">
        <h2 className="c-out-work__heading">
          Ugovor o <br /> doživotnom izdržavanju
        </h2>
        <DividerCenter />
        <p>
          Jedan od bitnih ugovora u naslednom pravu je svakako ugovor o doživotnom izdržavanju. Zaključenju ovog ugovora, kad je naravno reč o naslednom pravu, pristupa najveći broj ljudi, te se može reći da je ugovor o doživotnom izdržavanju svakako jedan od najznačajnijih i najčešćih ugovora u našem pravu. Isti je regulisan Zakonom o nasleđivanju. Ukoliko želite da obezbedite da se neko brine o vama u starosti i/ili bolesti do kraja vašeg života, svakako biste to ishodovali zaključenjem ove vrste ugovora. U slučaju da se obaveze propisane ugovorom ne izvršavaju na način na koji je to dogovoreno, i ovakav ugovor se može raskinuti, kao i svaki drugi dvostrani ugovor, jer jedna strane neispunjava svoju obavezu. Ono što je prvenstveno bitno napomenuti jeste da Ugovor o doživotnom izdržavanju mora biti zaključen u obliku solemnizovane isprave. Zaključenjem ovog ugovora, obavezuje se primalac izdržavanja da se posle njegove smrti na davaoca izdržavanja prenese svojina tačno određenih stvari ili prava, a davalac izdržavanja se obavezuje da ga, kao naknadu za to, izdržava i da se brine o njemu do kraja njegovog života i da ga posle smrti sahrani. Način na koji će se to činiti, zavisi od volja ugovarača. Vrlo je bitno napomenuti, a što je i javni beležnik posebno dužan da upozori ugovarače prilikom overe ovakvog ugovora, jeste da primalac izdržavanja bude svestan da imovina koja je predmet ovog ugovora ne ulazi u njegovu zaostavštinu i da se njom, nakon njegove smrti, ne mogu namiriti njegovi nužni naslednici. O tome mora da se stavi posebna napomena u klauzuli o potvrđivanju jer bi u suprotnom ugovor bio ništav. Česti su slučajevi u praksi da zakonski naslednici primaoca izdržavanja za postojanje ovakvog ugovora saznaju tek na ostavinskoj raspravi. Ukoliko isti smatraju da postoji neki od razloga za poništaj ugovora o doživotnom izdržavanju, zakonski naslednici primaoca izdržavanja imaju pravo da u roku od godinu dana od dana saznanja za ugovor, a najkasnije u roku od 3 godine od smrti primaoca izdržavanja podnesu zahtev za poništaj ugovora. Ukoliko vam je potrebna pravna pomoć za sastavljanje ugovora o doživotnom izdržavanju, raskid, zastupanje ili pak pravni savet u pogledu toga ko sve može zaključiti ovakav ugovor, pod kojim uslovima ili iz kojih razloga možete tražiti poništaj već zaključenog Ugovora o doživotnom izdržavanju, kontaktirajte nas kako biste na najbolji način zaštitili i ostvarili svoja prava.
        </p>
      </div>
    </>
  )
}
