// The two menus Toui's runs. Vasastan has its own numbering and its own (lower) prices;
// Hinsholmen and Mölndal share one menu. Both reference the same dish records.

export type ProteinId = 'kyckling' | 'tofu' | 'vegetarisk' | 'biff' | 'rakor' | 'blackfisk' | 'mix';

export interface Protein {
  id: ProteinId;
  sv: string;
  en: string;
  /** vegetarian as served — drives the veg filter */
  veg?: boolean;
  shellfish?: boolean;
}

export const PROTEINS: Protein[] = [
  { id: 'kyckling', sv: 'Kyckling', en: 'Chicken' },
  { id: 'tofu', sv: 'Tofu', en: 'Tofu', veg: true },
  { id: 'vegetarisk', sv: 'Vegetarisk', en: 'Vegetarian', veg: true },
  { id: 'biff', sv: 'Biff', en: 'Beef' },
  { id: 'rakor', sv: 'Räkor', en: 'Shrimps', shellfish: true },
  { id: 'blackfisk', sv: 'Bläckfisk', en: 'Squid', shellfish: true },
  { id: 'mix', sv: 'Mix', en: 'Mix', shellfish: true },
];

export interface MenuItem {
  /** the number printed on this menu — differs between the two menus */
  no: string;
  dish: string;
  /** set when the dish costs the same whatever you pick; otherwise the protein sets the price */
  price?: number;
}

export interface MenuSection {
  id: string;
  sv: string;
  en: string;
  note?: string;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  prices: Record<ProteinId, number>;
  sections: MenuSection[];
  extras: { sv: string; en: string; price: number }[];
}

const VASASTAN: Menu = {
  id: 'vasastan',
  prices: { kyckling: 120, tofu: 115, vegetarisk: 115, biff: 130, rakor: 130, blackfisk: 130, mix: 140 },
  // Photographed sections lead; the special menu (which they never shot) sits at the end.
  sections: [
    {
      id: 'forratt', sv: 'Förrätt & grillspett', en: 'Starters & skewers',
      items: [
        { no: '—', dish: 'giew-tad', price: 80 },
        { no: '1a', dish: 'satay', price: 120 },
        { no: '1b', dish: 'yakitori', price: 120 },
      ],
    },
    {
      id: 'friterat', sv: 'Friterat', en: 'Fried',
      items: [
        { no: '2a', dish: 'touis-varrullar', price: 110 },
        { no: '2b', dish: 'varrullar', price: 80 },
        { no: '3', dish: 'tofu', price: 80 },
        { no: '4', dish: 'rakor', price: 130 },
        { no: '5', dish: 'blackfiskringar', price: 110 },
        { no: '6', dish: 'thai-wings', price: 120 },
        { no: '7', dish: 'revben', price: 130 },
      ],
    },
    {
      id: 'gryta', sv: 'Gryta', en: 'Soup & curry',
      note: 'Serveras med ris.',
      items: [
        { no: '8', dish: 'tom-yam-kung', price: 130 },
        { no: '9', dish: 'panang' },
        { no: '10', dish: 'kaeng-phed' },
        { no: '11', dish: 'kaeng-kheo-hvan' },
        { no: '12', dish: 'kaeng-koa-sapparod' },
        { no: '13', dish: 'kaeng-massaman' },
      ],
    },
    {
      id: 'nudlar', sv: 'Nudlar', en: 'Noodles',
      note: 'Serveras utan ris.',
      items: [
        { no: '14', dish: 'phad-thai' },
        { no: '15', dish: 'aggnudlar' },
        { no: '16', dish: 'phad-si-eio' },
        { no: '17', dish: 'touis-amazing' },
        { no: '18b', dish: 'touis-fantasy-nudlar', price: 140 },
        { no: '19', dish: 'touis-special' },
        { no: '20', dish: 'glasnudlar' },
      ],
    },
    {
      id: 'ris', sv: 'Stekt ris', en: 'Fried rice',
      items: [
        { no: '21', dish: 'kaow-phad' },
        { no: '22', dish: 'kaow-phad-bai-kaprao' },
      ],
    },
    {
      id: 'wok', sv: 'Wok', en: 'Wok',
      note: 'Serveras med ris.',
      items: [
        { no: '23', dish: 'phad-pak-rummit' },
        { no: '24', dish: 'phad-preu-hvann' },
        { no: '25', dish: 'phad-med' },
        { no: '26', dish: 'phad-satay' },
        { no: '27', dish: 'phad-pong-kra-ree' },
        { no: '28', dish: 'phad-king' },
        { no: '29', dish: 'phad-kimao' },
        { no: '30', dish: 'phad-bai-kaprao' },
        { no: '31', dish: 'phad-phed' },
        { no: '18a', dish: 'touis-fantasy', price: 140 },
      ],
    },
    {
      id: 'sallad', sv: 'Sallad', en: 'Salad',
      items: [
        { no: '32', dish: 'laab-kai', price: 140 },
        { no: '33', dish: 'yam-talay', price: 140 },
      ],
    },
    {
      id: 'special', sv: 'Specialmeny', en: 'Special menu',
      note: 'Fasta priser — protein ingår.',
      items: [
        { no: 'S1', dish: 's1-nuggets', price: 50 },
        { no: 'S2', dish: 's2-nuggets-varrullar', price: 80 },
        { no: 'S3', dish: 's3-nuggets-blackfisk', price: 100 },
        { no: 'S4', dish: 's4-blackfisk-varrullar', price: 80 },
      ],
    },
  ],
  extras: [
    { sv: 'Kyckling', en: 'Chicken', price: 25 },
    { sv: 'Biff', en: 'Beef', price: 30 },
    { sv: 'Räkor, 3 st.', en: 'Shrimps, 3 pcs.', price: 30 },
    { sv: 'Ris eller nudlar', en: 'Rice or noodles', price: 20 },
    { sv: 'Extra grönsaker i maten', en: 'Extra vegetables', price: 15 },
    { sv: 'Jordnötssås', en: 'Thai peanut sauce', price: 25 },
    { sv: 'Sötsur sås', en: 'Sweet chili sauce', price: 20 },
    { sv: 'Sötsur sås, liten', en: 'Sweet chili sauce, small', price: 10 },
    { sv: 'Extra cashewnötter i maten', en: 'Extra cashews in the food', price: 15 },
    { sv: 'Cashewnötter i burk', en: 'Cashews in a box', price: 25 },
    { sv: 'Räkchips', en: 'Prawn crackers', price: 25 },
  ],
};

const SODRA: Menu = {
  id: 'sodra',
  prices: { kyckling: 135, tofu: 135, vegetarisk: 130, biff: 145, rakor: 145, blackfisk: 145, mix: 155 },
  sections: [
    {
      id: 'forratt', sv: 'Grillspett', en: 'Grill',
      note: 'Serveras med ris.',
      items: [
        { no: '1a', dish: 'satay', price: 135 },
        { no: '1b', dish: 'yakitori', price: 135 },
      ],
    },
    {
      id: 'friterat', sv: 'Friterat', en: 'Fried',
      note: 'Serveras med ris utom 2a & 2c.',
      items: [
        { no: '2a', dish: 'touis-varrullar', price: 125 },
        { no: '2b', dish: 'varrullar', price: 90 },
        { no: '2c', dish: 'tofu', price: 90 },
        { no: '3', dish: 'revben', price: 150 },
        { no: '4', dish: 'thai-wings', price: 135 },
        { no: '5', dish: 'rakor', price: 145 },
        { no: '6', dish: 'blackfiskringar', price: 125 },
      ],
    },
    {
      id: 'ris', sv: 'Stekt ris', en: 'Fried rice',
      items: [
        { no: '7', dish: 'kaow-phad' },
        { no: '8', dish: 'kaow-phad-bai-kaprao' },
      ],
    },
    {
      id: 'nudlar', sv: 'Nudlar', en: 'Noodles',
      note: 'Serveras utan ris.',
      items: [
        { no: '9', dish: 'glasnudlar' },
        { no: '10', dish: 'touis-special' },
        { no: '11', dish: 'touis-amazing' },
        { no: '12', dish: 'touis-fantasy-nudlar', price: 155 },
        { no: '13', dish: 'phad-si-eio' },
        { no: '14', dish: 'phad-thai' },
        { no: '15', dish: 'aggnudlar' },
      ],
    },
    {
      id: 'gryta', sv: 'Gryta', en: 'Soup & curry',
      note: 'Serveras med ris.',
      items: [
        { no: '16', dish: 'tom-yam-kung' },
        { no: '17', dish: 'panang' },
        { no: '18', dish: 'kaeng-phed' },
        { no: '19', dish: 'kaeng-kheo-hvan' },
        { no: '20', dish: 'kaeng-koa-sapparod' },
        { no: '21', dish: 'kaeng-massaman' },
      ],
    },
    {
      id: 'wok', sv: 'Wok', en: 'Wok',
      note: 'Serveras med ris utom nr 34.',
      items: [
        { no: '22', dish: 'phad-namman-hoi' },
        { no: '23', dish: 'phad-pak-rummit' },
        { no: '24', dish: 'phad-preu-hvann' },
        { no: '25', dish: 'phad-med' },
        { no: '26', dish: 'phad-satay' },
        { no: '27', dish: 'phad-pong-kra-ree' },
        { no: '28', dish: 'phad-king' },
        { no: '29', dish: 'phad-kimao' },
        { no: '30', dish: 'phad-bai-kaprao' },
        { no: '31', dish: 'phad-phed' },
        { no: '32', dish: 'touis-fantasy', price: 155 },
      ],
    },
    {
      id: 'sallad', sv: 'Sallad', en: 'Salad',
      items: [
        { no: '33', dish: 'yam-talay', price: 155 },
        { no: '34', dish: 'yum-nue', price: 155 },
        { no: '35', dish: 'laab-kai', price: 155 },
      ],
    },
    {
      id: 'thai', sv: 'Thailändsk meny', en: 'Thai special menu',
      items: [{ no: '36', dish: 'kuay-tiaw-nuea', price: 155 }],
    },
  ],
  extras: [
    { sv: 'Kyckling', en: 'Chicken', price: 25 },
    { sv: 'Biff', en: 'Beef', price: 30 },
    { sv: 'Räkor, 3 st.', en: 'Shrimps, 3 pcs.', price: 30 },
    { sv: 'Ris', en: 'Rice', price: 20 },
    { sv: 'Nudlar', en: 'Noodles', price: 25 },
    { sv: 'Extra grönsaker i maten', en: 'Extra vegetables', price: 15 },
    { sv: 'Jordnötssås', en: 'Thai peanut sauce', price: 25 },
    { sv: 'Sweet chilisås', en: 'Sweet chili sauce', price: 20 },
    { sv: 'Extra cashewnötter i maten', en: 'Extra cashews in the food', price: 15 },
    { sv: 'Extra cashewnötter i burk', en: 'Cashews in a box', price: 25 },
    { sv: 'Räkchips', en: 'Prawn crackers', price: 30 },
  ],
};

export const MENUS: Record<string, Menu> = { vasastan: VASASTAN, sodra: SODRA };
