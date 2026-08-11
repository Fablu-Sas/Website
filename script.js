const translations = {
  en: {
    "nav.about":"About","nav.products":"Products","nav.contact":"Contact",
    "hero.eyebrow":"Independent mobile software studio",
    "hero.title":"Apps made to be useful.<br><span>Games made to be fun.</span>",
    "hero.text":"Fablu is a French software company creating mobile applications for iOS and Android, with a focus on productivity and games.",
    "hero.button":"Discover our first app","hero.contact":"Contact us",
    "about.eyebrow":"About Fablu","about.title":"Building our own products.",
    "about.copy":"Fablu SAS is a French software company developing its own mobile applications. We enjoy turning ideas into polished, practical experiences for phones and tablets.",
    "about.f1.title":"Mobile first","about.f1.text":"Applications designed for iOS and Android.",
    "about.f2.title":"Productivity","about.f2.text":"Tools that make everyday tasks easier to manage.",
    "about.f3.title":"Games","about.f3.text":"Fun and engaging experiences built with the same care.",
    "products.eyebrow":"Our first product","products.status":"Coming soon",
    "products.title":"Your collection. Your binders. Your decks.",
    "products.description":"Lotustome is an offline virtual binder for managing your Magic: The Gathering collection. Keep track of different versions of your cards, organize cards into multiple binders or decks, and browse your collection wherever you are.",
    "products.scryfall":"Card visualization and current card data are provided through the Scryfall API. Fablu is not sponsored by or affiliated with Scryfall.",
    "products.disclaimer.title":"Important",
    "products.disclaimer.text":"Fablu does not own the artwork, names, rules text, or other intellectual property appearing on Magic: The Gathering cards. These rights belong to their respective owners, including Wizards of the Coast. Lotustome is an independent collection-management application and is not affiliated with or endorsed by Wizards of the Coast.",
    "contact.eyebrow":"Get in touch","contact.title":"Have a question?","contact.text":"For enquiries about Fablu or our applications, send us an email.",
    "footer.description":"French mobile software company","footer.legal":"Legal notice"
  },
  fr: {
    "nav.about":"À propos","nav.products":"Produits","nav.contact":"Contact",
    "hero.eyebrow":"Studio indépendant d'applications mobiles",
    "hero.title":"Des apps utiles.<br><span>Des jeux qui donnent envie de jouer.</span>",
    "hero.text":"Fablu est une société française de développement logiciel qui crée des applications mobiles pour iOS et Android, avec un intérêt particulier pour la productivité et les jeux.",
    "hero.button":"Découvrir notre première app","hero.contact":"Nous contacter",
    "about.eyebrow":"À propos de Fablu","about.title":"Nous créons nos propres produits.",
    "about.copy":"Fablu SAS est une société française de développement logiciel qui crée ses propres applications mobiles. Nous aimons transformer des idées en expériences soignées et pratiques pour smartphones et tablettes.",
    "about.f1.title":"Mobile avant tout","about.f1.text":"Des applications conçues pour iOS et Android.",
    "about.f2.title":"Productivité","about.f2.text":"Des outils qui simplifient les tâches du quotidien.",
    "about.f3.title":"Jeux","about.f3.text":"Des expériences amusantes et engageantes, conçues avec la même attention.",
    "products.eyebrow":"Notre premier produit","products.status":"Bientôt disponible",
    "products.title":"Votre collection. Vos classeurs. Vos decks.",
    "products.description":"Lotustome est un classeur virtuel hors ligne permettant de gérer votre collection Magic: The Gathering. Suivez les différentes versions de vos cartes, organisez-les dans plusieurs classeurs ou decks et consultez votre collection où que vous soyez.",
    "products.scryfall":"La visualisation des cartes et les données à jour sont fournies grâce à l'API Scryfall. Fablu n'est ni sponsorisé ni affilié à Scryfall.",
    "products.disclaimer.title":"Important",
    "products.disclaimer.text":"Fablu ne possède pas les illustrations, noms, textes de règles ni les autres propriétés intellectuelles présentes sur les cartes Magic: The Gathering. Ces droits appartiennent à leurs propriétaires respectifs, notamment Wizards of the Coast. Lotustome est une application indépendante de gestion de collection et n'est ni affiliée ni approuvée par Wizards of the Coast.",
    "contact.eyebrow":"Contact","contact.title":"Une question ?","contact.text":"Pour toute demande concernant Fablu ou nos applications, contactez-nous par e-mail.",
    "footer.description":"Société française de logiciels mobiles","footer.legal":"Mentions légales"
  }
};

let lang = localStorage.getItem("fablu-language") || "en";

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.getElementById("language-toggle").textContent = lang === "en" ? "FR" : "EN";
  localStorage.setItem("fablu-language", lang);
}

document.getElementById("language-toggle").addEventListener("click", () => {
  lang = lang === "en" ? "fr" : "en";
  applyLanguage();
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage();
