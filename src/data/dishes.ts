// Every dish Toui's cooks, defined once.
// The three restaurants use two different menus with DIFFERENT numbering for the same food
// (Vasastan's no. 7 REVBEN is Hinsholmen's no. 3), so the dish is the record and the number
// lives on the menu that references it. Descriptions are transcribed verbatim from the
// restaurant's own menus — nothing here is invented, allergens included.

export type Allergen = 'notter' | 'skaldjur' | 'agg' | 'gluten';

export interface Dish {
  /** stable key — menus reference dishes by this, never by number */
  slug: string;
  /** the name as printed on their menu */
  name: string;
  sv: string;
  en: string;
  /** file in /dish, without extension */
  img?: string;
  /** named in their own description */
  allergens?: Allergen[];
  /** the dish is chilli-hot by recipe, independent of the mild/medel/stark choice */
  spicy?: boolean;
  /** can be ordered vegetarian by choosing tofu or vegetables as the protein */
  vegSelectable?: boolean;
  /** served without rice */
  noRice?: boolean;
}

export const DISHES: Record<string, Dish> = {
  // — grillspett —
  satay: {
    slug: 'satay', name: 'Satay', img: '1a', allergens: ['notter'],
    sv: 'Grillade kycklingspett. Jordnötsås.',
    en: 'Grilled chicken skewers. Peanut sauce.',
  },
  yakitori: {
    slug: 'yakitori', name: 'Yakitori', img: '1b',
    sv: '6 st. grillade kycklingspett. Soja, sötsursås.',
    en: '6 pcs. grilled chicken skewers. Soy, sweet and sour sauce.',
  },

  // — friterat —
  'touis-varrullar': {
    slug: 'touis-varrullar', name: "Toui´s vårrullar", img: '2a', allergens: ['notter'], noRice: true,
    sv: '4 st. hemmagjorda vårrullar med kycklingfärs, glasnudlar, vitkål, morot, purjolök, lök, vitlök, peppar & soja. Sötsursås eller jordnötssås.',
    en: '4 pcs. homemade spring rolls with minced chicken, glass noodles, cabbage, carrot, leek, onion, garlic, pepper & soy. Sweet and sour or peanut sauce.',
  },
  varrullar: {
    slug: 'varrullar', name: 'Vegetariska vårrullar', img: '2a', allergens: ['notter'], vegSelectable: true,
    sv: '13 st. utan ris, eller 10 st. med ris. Sötsursås eller jordnötssås.',
    en: '13 pcs. without rice, or 10 pcs. with rice. Sweet and sour or peanut sauce.',
  },
  tofu: {
    slug: 'tofu', name: 'Tofu', img: '2c', allergens: ['notter'], vegSelectable: true,
    sv: 'Friterad tofu med sötsursås, krossade jordnötter & färsk koriander.',
    en: 'Fried tofu with sweet and sour sauce, crushed peanuts & fresh coriander.',
  },
  revben: {
    slug: 'revben', name: 'Revben', img: '3',
    sv: 'Friterade revbensspjäll. Sötsursås.',
    en: 'Fried pork ribs. Sweet and sour sauce.',
  },
  'thai-wings': {
    slug: 'thai-wings', name: 'Thai Wings', img: '4',
    sv: 'Friterade kycklingvingar. Sötsursås.',
    en: 'Fried chicken wings. Sweet and sour sauce.',
  },
  rakor: {
    slug: 'rakor', name: 'Friterade räkor', img: '5', allergens: ['skaldjur', 'notter'],
    sv: 'Friterade räkor med vitlök. Sötsursås eller jordnötsås.',
    en: 'Fried shrimp with garlic. Sweet and sour or peanut sauce.',
  },
  blackfiskringar: {
    slug: 'blackfiskringar', name: 'Bläckfiskringar', img: '6', allergens: ['skaldjur'],
    sv: 'Friterade bläckfiskringar. Sötsursås.',
    en: 'Fried squid rings. Sweet and sour sauce.',
  },
  'giew-tad': {
    slug: 'giew-tad', name: 'Giew Tad', img: '00_GIEWTAD',
    sv: 'Friterad kyckling-wonton, krispig och god som snacks eller förrätt.',
    en: 'Fried chicken wonton, crispy and good as a snack or appetizer.',
  },

  // — stekt ris —
  'kaow-phad': {
    slug: 'kaow-phad', name: 'Kaow Phad', img: '7', allergens: ['agg'], vegSelectable: true,
    sv: 'Stekt ris med gullök, broccoli, morot, koriander, tomat & ägg.',
    en: 'Fried rice with onion, broccoli, carrot, coriander, tomato & eggs.',
  },
  'kaow-phad-bai-kaprao': {
    slug: 'kaow-phad-bai-kaprao', name: 'Kaow Phad Bai Kaprao', img: '8', allergens: ['agg'], spicy: true, vegSelectable: true,
    sv: 'Stekt ris med basilika, gullök, chili, vitlök, paprika, ägg & ostronsås.',
    en: 'Fried rice with basil, onion, chili, garlic, peppers, eggs & oyster sauce.',
  },

  // — nudlar —
  glasnudlar: {
    slug: 'glasnudlar', name: 'Glasnudlar', img: '9', allergens: ['agg'], noRice: true, vegSelectable: true,
    sv: 'Wokade glasnudlar med ägg, morot, vitkål, tomat & selleri.',
    en: 'Stir-fried glass noodles with eggs, carrot, cabbage, tomato & celery.',
  },
  'touis-special': {
    slug: 'touis-special', name: "Toui´s Special", img: '10', spicy: true, noRice: true, vegSelectable: true,
    sv: 'Wokad med äggnudlar, färsk chili, bambuskott, morot, basilika & paprika.',
    en: 'Stir-fried with egg noodles, fresh chili, bamboo shoots, carrot, basil & paprika.',
  },
  'touis-amazing': {
    slug: 'touis-amazing', name: "Toui´s Amazing", spicy: true, noRice: true, vegSelectable: true,
    sv: 'Wokade långa platta risnudlar med specialsås, böngroddar, purjolök & färsk chili.',
    en: 'Stir-fried long flat rice noodles with special sauce, bean sprouts, leeks & fresh chili.',
  },
  'touis-fantasy-nudlar': {
    slug: 'touis-fantasy-nudlar', name: "Toui´s Fantasy — nudlar", img: '12', allergens: ['skaldjur'], spicy: true, noRice: true,
    sv: 'Wokade skaldjur (musslor, räkor & bläckfisk) med äggnudlar, gullök, sötbasilika, chili, vitlök, paprika & ostronsås.',
    en: 'Stir-fried seafood (mussels, shrimp & squid) with egg noodles, yellow onion, sweet basil, chili, garlic, peppers & oyster sauce.',
  },
  'phad-si-eio': {
    slug: 'phad-si-eio', name: 'Phad Si Eio', img: '13', allergens: ['agg'], noRice: true, vegSelectable: true,
    sv: 'Wokade långa platta risnudlar med ägg, morot, broccoli, vitkål & sojasås.',
    en: 'Stir-fried long flat rice noodles with eggs, carrot, broccoli, cabbage & soy sauce.',
  },
  'phad-thai': {
    slug: 'phad-thai', name: 'Phad Thai', img: '14', allergens: ['notter', 'agg'], noRice: true, vegSelectable: true,
    sv: 'Wokade risnudlar med specialsås. Krossade jordnötter, böngroddar, purjolök & ägg.',
    en: 'Stir-fried rice noodles with special sauce. Crushed peanuts, bean sprouts, leeks & eggs.',
  },
  aggnudlar: {
    slug: 'aggnudlar', name: 'Äggnudlar', img: '15', allergens: ['agg'], noRice: true, vegSelectable: true,
    sv: 'Wokade äggnudlar med morot, vitkål & purjolök.',
    en: 'Stir-fried egg noodles with carrot, cabbage & leek.',
  },

  // — gryta —
  'tom-yam-kung': {
    slug: 'tom-yam-kung', name: 'Tom Yam Kung', img: '16', allergens: ['skaldjur'], spicy: true,
    sv: 'Räksoppa med limeblad, citrongräs, champinjon, gullök, tomat, koriander, kokosmjölk, galangal & citron.',
    en: 'Shrimp soup with lime leaves, lemongrass, mushroom, yellow onion, tomato, coriander, coconut milk, galangal & lemon.',
  },
  panang: {
    slug: 'panang', name: 'Panang', img: '17', spicy: true, vegSelectable: true,
    sv: 'Gryta med panängcurry, kokosmjölk, paprika & gullök.',
    en: 'Thai Panang curry with coconut milk, paprika & onion.',
  },
  'kaeng-phed': {
    slug: 'kaeng-phed', name: 'Kaeng Phed', img: '18', spicy: true, vegSelectable: true,
    sv: 'Gryta med rödcurry, bambuskott, thaibasilika, zucchini & kokosmjölk.',
    en: 'Thai red curry with bamboo shoots, Thai basil, zucchini & coconut milk.',
  },
  'kaeng-kheo-hvan': {
    slug: 'kaeng-kheo-hvan', name: 'Kaeng Kheo Hvan', img: '19', spicy: true, vegSelectable: true,
    sv: 'Gryta med gröncurry, bambuskott, zucchini, kokosmjölk & thaibasilika.',
    en: 'Thai green curry with bamboo shoots, zucchini, coconut milk & Thai basil.',
  },
  'kaeng-koa-sapparod': {
    slug: 'kaeng-koa-sapparod', name: 'Kaeng Koa Sapparod', img: '20', spicy: true, vegSelectable: true,
    sv: 'Gryta med rödcurry, ananas, gullök, kokosmjölk & limeblad.',
    en: 'Thai red curry with pineapple, onion, coconut milk & lime leaves.',
  },
  'kaeng-massaman': {
    slug: 'kaeng-massaman', name: 'Kaeng Massaman', allergens: ['notter'], vegSelectable: true,
    sv: 'Gryta med massamancurry, potatis, kokosmjölk, gullök & jordnötter.',
    en: 'Thai Massaman curry with potatoes, coconut milk, yellow onion & peanuts.',
  },

  // — wok —
  'phad-namman-hoi': {
    slug: 'phad-namman-hoi', name: 'Phad Namman Hoi', vegSelectable: true,
    sv: 'Wokad med ostronsås, gullök, paprika & champinjoner.',
    en: 'Stir-fried with oyster sauce, onion, peppers & mushrooms.',
  },
  'phad-pak-rummit': {
    slug: 'phad-pak-rummit', name: 'Phad Pak Rummit', img: '23', vegSelectable: true,
    sv: 'Wokad med paprika, purjolök, morot, gullök, broccoli, böngroddar & ostronsås.',
    en: 'Stir-fried with peppers, leeks, carrots, yellow onions, broccoli, bean sprouts & oyster sauce.',
  },
  'phad-preu-hvann': {
    slug: 'phad-preu-hvann', name: 'Phad Preu Hvann', img: '24', vegSelectable: true,
    sv: 'Wokad med ananas, paprika, tomat, gurka, morot, gullök & sötsursås.',
    en: 'Stir-fried with pineapple, pepper, tomato, cucumber, carrot, yellow onion & sweet and sour sauce.',
  },
  'phad-med': {
    slug: 'phad-med', name: 'Phad Med', img: '25', allergens: ['notter'], vegSelectable: true,
    sv: 'Wokad med cashewnötter, champinjon, gullök, vitlök, vitkål, paprika & ostronsås.',
    en: 'Stir-fried with cashews, mushrooms, yellow onion, garlic, cabbage, peppers & oyster sauce.',
  },
  'phad-satay': {
    slug: 'phad-satay', name: 'Phad Satay', img: '26', allergens: ['notter'], vegSelectable: true,
    sv: 'Wokad med jordnötsås, gullök, morot, vitkål & paprika.',
    en: 'Stir-fried with peanut sauce, yellow onion, carrot, cabbage & peppers.',
  },
  'phad-pong-kra-ree': {
    slug: 'phad-pong-kra-ree', name: 'Phad Pong Kra Ree', img: '27', allergens: ['agg'], vegSelectable: true,
    sv: 'Wokad med gulcurry, ägg, gullök, paprika & purjolök.',
    en: 'Stir-fried with yellow curry, egg, yellow onion, paprika & leek.',
  },
  'phad-king': {
    slug: 'phad-king', name: 'Phad King', img: '28', vegSelectable: true,
    sv: 'Wokad med ingefära, gullök, purjolök, champinjon & paprika.',
    en: 'Stir-fried with ginger, yellow onion, leek, mushroom & pepper.',
  },
  'phad-kimao': {
    slug: 'phad-kimao', name: 'Phad Kimao', img: '29', spicy: true, vegSelectable: true,
    sv: 'Wokad med basilika, färsk chili, bambuskott & paprika.',
    en: 'Stir-fried with basil, fresh chili, bamboo shoots & peppers.',
  },
  'phad-bai-kaprao': {
    slug: 'phad-bai-kaprao', name: 'Phad Bai Kaprao', img: '30', spicy: true, vegSelectable: true,
    sv: 'Wokad med basilika, färsk chili, gullök, paprika & ostronsås. Kan lagas med kycklingfärs.',
    en: 'Stir-fried with basil, fresh chili, yellow onion, paprika & oyster sauce. Can be made with minced chicken.',
  },
  'phad-phed': {
    slug: 'phad-phed', name: 'Phad Phed', img: '31', spicy: true, vegSelectable: true,
    sv: 'Wokad med rödcurry, thaibasilika, bambuskott, paprika & gullök.',
    en: 'Stir-fried with red curry, Thai basil, bamboo shoots, peppers & yellow onion.',
  },
  'touis-fantasy': {
    slug: 'touis-fantasy', name: "Toui´s Fantasy", img: '32', allergens: ['skaldjur'], spicy: true,
    sv: 'Wokade skaldjur (musslor, räkor & bläckfisk) med gullök, sötbasilika, chili, vitlök, paprika & ostronsås.',
    en: 'Stir-fried seafood (mussels, shrimp & squid) with yellow onion, sweet basil, chili, garlic, paprika & oyster sauce.',
  },

  // — sallad —
  'yam-talay': {
    slug: 'yam-talay', name: 'Yam Talay', img: '33', allergens: ['skaldjur'], spicy: true,
    sv: 'Kryddig skaldjurssallad med blandade skaldjur, gullök, tomater, selleri, koriander, chili & limesaft.',
    en: 'Spicy seafood salad with mixed seafood, yellow onions, tomatoes, celery, coriander, chili & lime juice.',
  },
  'yum-nue': {
    slug: 'yum-nue', name: 'Yum Nue', spicy: true,
    sv: 'Thailändsk biffsallad med limesaft, rödlök, tomat, gurka, chili & koriander.',
    en: 'Thai spicy beef salad with lime juice, red onion, tomato, cucumber, chili & coriander.',
  },
  'laab-kai': {
    slug: 'laab-kai', name: 'Laab Kai', img: '35', spicy: true,
    sv: 'Thailändsk kycklingfärssallad med rödlök, rostat krossat ris, limesaft & torkad krossad chili.',
    en: 'Thai minced chicken salad with red onion, roasted crushed rice, lime juice & dried crushed chili.',
  },
  'kuay-tiaw-nuea': {
    slug: 'kuay-tiaw-nuea', name: 'Kuay Tiaw Nuea', noRice: true,
    sv: 'Thailändsk nudelsoppa. Risnudlar, högrev, choy, böngroddar, koriander, salladslök & köttbullar.',
    en: 'Thai beef noodle soup. Rice noodles, chuck, choy, bean sprouts, coriander, spring onion & meatballs.',
  },

  // — Vasastans specialmeny —
  's1-nuggets': {
    slug: 's1-nuggets', name: 'Chicken Nuggets',
    sv: '5 st. chicken nuggets.', en: '5 pcs. chicken nuggets.',
  },
  's2-nuggets-varrullar': {
    slug: 's2-nuggets-varrullar', name: 'Chicken Nuggets & vegetariska vårrullar',
    sv: '4 st. chicken nuggets & 6 st. vegetariska vårrullar.',
    en: '4 pcs. chicken nuggets & 6 pcs. vegetarian spring rolls.',
  },
  's3-nuggets-blackfisk': {
    slug: 's3-nuggets-blackfisk', name: 'Chicken Nuggets & bläckfiskringar', allergens: ['skaldjur'],
    sv: '5 st. chicken nuggets & 5 st. bläckfiskringar.',
    en: '5 pcs. chicken nuggets & 5 pcs. fried squid rings.',
  },
  's4-blackfisk-varrullar': {
    slug: 's4-blackfisk-varrullar', name: 'Bläckfiskringar & vegetariska vårrullar', allergens: ['skaldjur'],
    sv: '5 st. bläckfiskringar & 5 st. vegetariska vårrullar.',
    en: '5 pcs. fried squid rings & 5 pcs. vegetarian spring rolls.',
  },
};

export const ALLERGEN_LABEL: Record<Allergen, string> = {
  notter: 'Nötter',
  skaldjur: 'Skaldjur',
  agg: 'Ägg',
  gluten: 'Gluten',
};
