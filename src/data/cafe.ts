/**
 * Editable content for the internal concept preview.
 * Contact and hours follow the supplied research brief checked 22 October 2026.
 * Drinks describe supported categories, not an approved current item/price list.
 */
export const cafe = {
  name: "Twenty Eight Caffee",
  wordmark: "twenty eight",
  tagline: "Specialty coffee & more",
  address: "Strada Ion Câmpineanu nr. 23, București",
  phone: "0770 687 493",
  tel: "tel:+40770687493",
  email: "twentyeightcaffe@gmail.com",
  mailto: "mailto:twentyeightcaffe@gmail.com",
  maps: "https://www.google.com/maps/search/?api=1&query=Twenty+Eight+Caffee+Strada+Ion+Campineanu+23+Bucuresti",
  instagram: "https://www.instagram.com/twentyeightcaffee/",
  facebook: "https://www.facebook.com/twentyeightcaffee/",
  hours: [
    { days: "Luni–Vineri", opens: "08:00", closes: "23:00" },
    { days: "Sâmbătă–Duminică", opens: "09:00", closes: "23:00" },
  ],
  copy: {
    metadataTitle: "Twenty Eight Caffee — Cafea și felinare pe Câmpineanu",
    metadataDescription: "Cafea de specialitate, felinare și o fațadă pictată pe Ion Câmpineanu 23, București. Descoperă Twenty Eight Caffee și vezi cum ajungi.",
    heroTitle: "Cafea.\nFelinare.\nCâmpineanu.",
    heroIntro:
      "Twenty Eight Caffee, pe Ion Câmpineanu 23. Cafea de specialitate printre felinare și broderii.",
    heroLink: "Vezi interiorul",
    heroNote: ["Privește", "în sus."],
    heroCaption: "Metal, sticlă colorată și lumină.",
    heroAddressLabel: "Fațada cu flori pictate",
    heroStripNote: ["Turcoaz, broderii", "și felinare."],
    roomEyebrow: "Dincolo de fațadă",
    roomTitle: "Metal, sticlă\nși culoare.",
    roomBody:
      "Flori pictate la intrare, turcoaz pe pereți și broderii în interior. Deasupra meselor, felinare din metal perforat și sticlă colorată.",
    roomScrollNote: "Felinare, țesături și texturi",
    roomCaption: ["Broderii, metal", "și sticlă colorată."],
    drinksEyebrow: "La Twenty Eight",
    drinksTitle: "Din ceașcă\nîn pahar.",
    drinksIntro:
      "Cafea de specialitate, ceai, băuturi fără alcool, vin și cocktailuri.",
    drinksContact: "Ai întrebări despre băuturi?",
    eveningTitle: "Culoare pe ziduri.\nLumină prin metal.",
    eveningBody:
      "De la florile pictate pe fațadă la felinarele din interior.",
    visitEyebrow: "Twenty Eight Caffee",
    visitTitle: "Câmpineanu,\nnumărul 23.",
    visitIntro: "Fațada cu flori pictate, pe Ion Câmpineanu 23.",
    hoursLabel: "Program",
    contactLabel: "Telefon",
    arrivalCaption: "Vespa și fațada cu flori pictate.",
    arrivalNote: ["Culorile încep", "din stradă."],
    instagramLabel: "Twenty Eight pe Instagram",
    galleryLabel: "Detalii din Twenty Eight",
    directionsLabel: "Vezi cum ajungi",
    drinksLabel: "Explorează băuturile",
    callLabel: "Sună-ne",
  },
  drinks: [
    {
      id: "cafea",
      title: "Cafea",
      subtitle: "La espressor",
      description: "Cafea de specialitate la Twenty Eight.",
      items: ["Cafea de specialitate", "Băuturi pe bază de espresso"],
    },
    {
      id: "ceai",
      title: "Ceai & băuturi calde",
      subtitle: "La ceașcă",
      description: "O alternativă la cafea, servită caldă.",
      items: ["Ceai", "Băuturi calde"],
    },
    {
      id: "racoritoare",
      title: "Ceva răcoritor",
      subtitle: "Fără alcool",
      description: "Limonade, sucuri și alte răcoritoare.",
      items: ["Limonade", "Sucuri & răcoritoare"],
    },
    {
      id: "seara",
      title: "Vin & cocktailuri",
      subtitle: "La pahar",
      description: "Selecția de vinuri și cocktailuri a cafenelei.",
      items: ["Vin", "Cocktailuri"],
    },
  ],
  gallery: [
    { file: "doorway.jpg", title: "Dinspre Câmpineanu", caption: "Fațada pictată și mesele de lângă intrare.", alt: "Intrarea deschisă a Twenty Eight Caffee și mesele din interior" },
    { file: "lanterns.jpg", title: "Lumină prin metal", caption: "Felinare din metal perforat și sticlă colorată, pe fundal turcoaz.", alt: "Felinare luminoase suspendate în interiorul turcoaz" },
    { file: "silver-lamp.jpg", title: "Metal și sticlă", caption: "Ornamente, reflexii și inserții de sticlă colorată.", alt: "Felinar argintiu cu ornamente și sticlă colorată" },
    { file: "embroidery.jpg", title: "Broderie florală", caption: "Fire în nuanțe de prună, verde și negru.", alt: "Țesătură brodată cu motive florale în nuanțe de prună și verde" },
    { file: "vespa-burgundy.jpg", title: "Fațada de pe Câmpineanu", caption: "Vespa vișinie în fața florilor pictate.", alt: "Vespa vișinie în fața cafenelei cu motive florale pe fațadă" },
    { file: "vespa-pink.jpg", title: "Vespa de la terasă", caption: "Roz, crom și fațada Twenty Eight în fundal.", alt: "Vespa roz în fața terasei Twenty Eight Caffee" },
  ],
} as const;
