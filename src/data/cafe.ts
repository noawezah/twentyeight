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
    heroTitle: "O cafea.\nO lume de detalii.",
    heroIntro:
      "Twenty Eight Caffee, pe Ion Câmpineanu 23. Un loc cu personalitate, pentru o cafea și o conversație în mijlocul orașului.",
    roomEyebrow: "Un loc de descoperit",
    roomTitle: "Privește puțin\nmai aproape.",
    roomBody:
      "Pereți turcoaz, țesături cu motive florale și lumină care trece prin felinare. Înăuntru, detaliile îți dau motive să mai rămâi.",
    drinksEyebrow: "Ce bem?",
    drinksTitle: "Ceva bun.\nÎn ritmul tău.",
    drinksIntro:
      "Cafea pentru pauza de zi, ceva răcoritor sau un pahar pentru o conversație care continuă.",
    eveningTitle: "Se schimbă lumina.\nRămâne conversația.",
    eveningBody:
      "Dinspre stradă se văd culorile. Dinăuntru, felinarele dau locului o altă lumină. Fă-ți timp pentru amândouă.",
    visitTitle: "Ne vedem\npe Câmpineanu.",
    visitIntro: "Oprește-te pentru o cafea. Rămâi pentru loc.",
    directionsLabel: "Vezi cum ajungi",
    drinksLabel: "Explorează băuturile",
    callLabel: "Sună-ne",
  },
  drinks: [
    {
      id: "cafea",
      title: "Cafea",
      subtitle: "Pauza de fiecare zi",
      description: "Cafeaua de specialitate stă în centrul Twenty Eight.",
      items: ["Cafea de specialitate", "Băuturi pe bază de espresso"],
    },
    {
      id: "ceai",
      title: "Ceai & băuturi calde",
      subtitle: "O pauză fără grabă",
      description: "Pentru momentele în care ai chef de ceva cald.",
      items: ["Ceai", "Băuturi calde"],
    },
    {
      id: "racoritoare",
      title: "Ceva răcoritor",
      subtitle: "O altă stare de spirit",
      description: "Băuturi fără alcool, pentru o pauză în oraș.",
      items: ["Limonade", "Sucuri & răcoritoare"],
    },
    {
      id: "seara",
      title: "Vin & cocktailuri",
      subtitle: "Încă o conversație",
      description: "Un pahar și timp petrecut împreună.",
      items: ["Vin", "Cocktailuri"],
    },
  ],
} as const;
