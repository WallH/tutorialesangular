import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas = [
    {
      titulo: "Aquaman",
      img: "assets/img/aquaman_v_dd_ka_tt_2160x2880_300dpi_en_5c92f7b3.jpg",
      sinopsis: "Aquaman debe recuperar el legendario Tridente de Atlan para salvar a la ciudad subacuática de Atlantis, y al mundo de la superficie, de su hermano hambriento de poder.",
      encines: 0, // 0:No| 1:Si | 2:Pronto estreno,
      precio: 15,
    },
    {
      titulo: "Batman hush",
      img: "assets/img/batman_keyart_2000x30002_2_0.jpg",
      sinopsis:"Batman: Hush es una película animada estadounidense de 2019 producida por Warner Bros. Animation y distribuido por Warner Bros. Basada en la historia del cómic del mismo nombre y es la décima tercera entrega del Universo de Películas Animadas de DC y la trigésima quinta película del DC Universe Animated Original Movies.",
      encines: 1, // 0:No | 1: Si | 2: Pronto estreno
      precio: 15,
    },
    {
      titulo: "Birds of prey",
      img:  "assets/img/birdsofprey_atfeoohq_v_dd_ka_tt_2000x3000_300dpi_mx_7c50aa15.jpg",
      sinopsis: "Primera película en solitario de la súpervillana de DC Cómics Harley Quinn. Esta adaptación de los cómics Birds Of Prey de DC nos presenta a Harley Quinn (Margot Robbie) después de separarse del Joker. Tras su emancipación, la villana decide aliarse con otras tres superheroínas para formar el grupo 'Aves de presa'. Además de Quinn, esta asociación está formada por Black Canary (Jurnee Smolett-Bell), Huntress (Mary Elizabeth Winstead) y Renee Montoya (Rosie Perez). Las cuatro heroínas trabajarán juntas para tratar de salvar la vida de una joven, llamada Cassandra Cain (Ella Jay Basco), amenazada por un malvado criminal conocido como Máscara Negra (Ewan McGregor).",
      encines: 1,
      precio: 15,
    },
    {
      titulo: "Wonder Woman 84",
      img: "assets/img/wonderwoman1984_posterweb_2000x3000.jpg",
      sinopsis: "Son los años 80. Un futuro muy distinto al que había conocido, y en el que Diana Prince (Gal Gadot) echa en falta a compañeros del pasado. En este nuevo capítulo, la princesa de Themyscira entablará amistad con Barbara Ann Minerva (Kristen Wiig), una arqueóloga que trabaja para Max Lord (Pedro Pascal), megalómano empeñado en recopilar artefactos antiguos con la creencia de que estos le harán tan poderosos como un Dios. Cuando de forma sorprendente e inesperada Steve Trevor (Chris Pine) vuelva a la vida, Diana deberá hacer frente a Minerva, que se ha convertido en la peligrosa villana Cheetah tras vender su alma a una poderosa deidad. Esta segunda entrega de las aventuras de Wonder Woman, la superheroína de DC Comics creada por William Moulton Marston, es la continuación de la película Wonder Woman (2017).",
      encines: 2,
      precio: 15,
    },
    {
      titulo: "Superman: man of Tomorrow",
      img: "assets/img/superman_the_man_of_tomorrow.jpg",
      sinopsis: "Clark Kent, un interino del periódico Daily Planet, lleva su afán de ganar experiencia en el trabajo cuando Lobo y Parasite fijan su atención en la ciudad de Metrópolis.",
      encines: 0,
      precio: 15,
    },
    {
      titulo:"Superman red son",
      img: "assets/img/superman-1.jpg",
      sinopsis: "Una vez que Krypton es destruido, el navío de Kal-El aterriza en la Unión Soviética, donde fue criado para combatir la ideología marxista como el mayor protector de Rusia: Superman. Mas conforme el héroe de Rusia empieza a crear caos en el mundo entero representando a los soviéticos, las fuerzas internacionales deben intervenir para salvar al planeta.",
      encines: 0,
      precio: 15,
    },
    {
      titulo: "Batman ninja",
      img: "assets/img/batmanninja_v_dd_ka_tt_2000x3000_300dpi_es_5c4953bf.jpg",
      sinopsis: "Batman, junto a sus aliados y enemigos, se ve transportado desde la moderna Gotham hasta el Japón feudal. Film animado coproducido entre Japón y EEUU que cuenta con guión de Kazuki Nakashima (Kill La Kill) and diseño de personajes Takashi Okazaki (Afro Samurai). Se estrenará en 2018. ",
      encines: 0,
      precio: 15,
    },
    {
      titulo: "JOKER",
      img: "assets/img/joker_v_dd_ka_tt_2000x3000_300dpi_mx_98d2fbda.jpg",
      sinopsis: "Joker mostrará por primera vez los orígenes del icónico archienemigo por excelencia de Bruce Wayne/Batman. La historia sigue de cerca la vida de Arthur Fleck (Joaquin Phoenix), un hombre con problemas psiquiátricos que vivirá una serie de acontecimientos que le harán convertirse en uno de los grandes villanos de DC Comics. El Príncipe Payaso del Crimen se cruzará en el camino de Thomas Wayne (Brett Cullen) y se acercará a su hijo, el futuro Caballero Oscuro en su versión joven (Dante Pereira-Olson).",
      encines: 0,
      precio: 15,
    },
    {
      titulo: "Wonder Woman",
      img: "assets/img/wonderwoman_2017_v_dd_ka_tt_2000x3000_300dpi_mx.jpg",
      sinopsis: "En la protegida y paradisíaca isla tropical de Themyscira, Diana Prince (Gal Gadot) es una princesa guerrera amazona que ha sido criada por su madre, la reina Hippolyta (Connie Nielsen), y sus tías, la General Antíope (Robin Wright) y Menalippe (Lisa Loven Kongsli). Diana ha sido entrenada para ser una luchadora invencible. Pero, mientras Hippolyta quiere proteger a su hija del mundo exterior, Antíope quiere que esté preparada para salir fuera de la isla.",
      encines: 0,
      precio: 15,
    },
    {
      titulo: "Shazam",
      img: "assets/img/shazam_keyart_2000x3000_0_0.jpg",
      sinopsis: "Todos llevamos un superhéroe en nuestro interior. Solo es preciso un poco de magia para sacarlo. Es lo que le ocurre a Billy Batson (Asher Angel), un joven huérfano de 14 años, normal y corriente, al que le cambia la vida un encuentro con un viejo hechicero. Y es que, a partir de ahora, cada vez que Billy grita la palabra 'Shazam!' se convierte en el superhéroe adulto Shazam (Zachary Levi). Aunque con un niño en su interior, el poderoso cuerpo de Shazam hace lo que cualquier adolescente con superpoderes haría",
      encines: 0,
      precio: 15,
    },
    {
      titulo: "The suicide squad",
      img: "assets/img/elescuadronsuicida.jpg",
      sinopsis: "Mientras el gobierno no tiene claro cómo responder a una visita alienígena a la Tierra con intenciones malignas, Amanda 'El Muro' Waller (Viola Davis), la líder de la agencia secreta A.R.G.U.S., ofrece una curiosa solución. Esta Oficial de Inteligencia estadounidense cree que la respuesta es reclutar a los villanos más crueles, con habilidades letales y mágicas, para que trabajen para ellos.",
      encines: 0,
      precio: 15,
    },
    {
      titulo: "Batman begins",
      img: "assets/img/bmbegins_v_dd_ka_tt_2000x3000_300dpi_mx_d70b1fba.jpg",
      sinopsis:"¿Cómo Bruce Wayne (Christian Bale), un joven multimillonario de Gotham, se convirtió en un superhéroe que logra luchar contra el crimen? Los flashbacks de su infancia privilegiada le recuerdan cómo desarrolló un terrible miedo a los murciélagos. Cuando era joven, Wayne perteneció a los ninjas. Sus líderes, Al Ghul de Ra y Henri Ducard le enseñaron la fuerza, la resistencia y el mal, contra el que debe luchar. De regreso a Gotham, tras la pérdida de sus padres filantrópicos en un crimen sin sentido, Wayne elabora una identidad secreta con un solo objetivo: poder salvar Gotham de la corrupción delictiva. Aquí da comienzo la leyenda de Batman.",
      encines: 0,
      precio: 15,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
