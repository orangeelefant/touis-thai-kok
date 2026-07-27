// The three restaurants. Addresses, phones and hours transcribed from their own pages.

export interface Hours {
  /** 0 = Monday … 6 = Sunday. null = closed */
  day: string;
  open: string | null;
  close: string | null;
}

export interface Location {
  slug: string;
  name: string;
  area: string;
  street: string;
  postal: string;
  city: string;
  phone: string;
  mobile: string;
  menu: 'vasastan' | 'sodra';
  intro: string;
  parking: string;
  nearby: string;
  photos: string[];
  geo: { lat: number; lng: number };
  mapUrl: string;
  hours: Hours[];
}

const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
const hrs = (spec: [string, string][]): Hours[] =>
  spec.map(([open, close], i) => ({ day: days[i], open: open || null, close: close || null }));

export const LOCATIONS: Location[] = [
  {
    slug: 'vasastan',
    name: 'Vasastan',
    area: 'Göteborg',
    street: 'Föreningsgatan 34',
    postal: '411 27',
    city: 'Göteborg',
    phone: '031-41 30 00',
    mobile: '0731-46 11 19',
    menu: 'vasastan',
    intro:
      'Tio sittplatser, öppen wok och en meny som lagas från grunden när du beställer. Vi ligger ett kvarter från Vasaparken, mitt emellan universitetet och Linnéstaden.',
    parking: 'Parkering finns på gatan utanför, på Föreningsgatan och Aschebergsgatan.',
    nearby: 'Nära Vasaparken & Göteborgs universitet',
    photos: ['vasastan-exterior', 'vasastan-interior', 'vasastan-room'],
    geo: { lat: 57.6924, lng: 11.9707 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=F%C3%B6reningsgatan+34,+411+27+G%C3%B6teborg',
    hours: hrs([
      ['11.00', '20.00'], ['11.00', '20.00'], ['11.00', '20.00'], ['11.00', '20.00'],
      ['11.00', '21.00'], ['12.00', '21.00'], ['12.00', '20.00'],
    ]),
  },
  {
    slug: 'hinsholmen',
    name: 'Hinsholmen',
    area: 'Västra Frölunda',
    street: 'Tandkullegatan 11',
    postal: '426 79',
    city: 'Västra Frölunda',
    phone: '031-46 63 26',
    mobile: '076-870 76 89',
    menu: 'sodra',
    intro:
      'Vår restaurang nära havet i Hinsholmen. Samma wok, samma recept — med gott om parkering runt knuten och strandpromenaden några minuter bort.',
    parking: 'Goda parkeringsmöjligheter runtomkring restaurangen.',
    nearby: 'Nära havet och Hinsholmens brygga',
    photos: ['hinsholmen-exterior', 'hinsholmen-interior', 'hinsholmen-food'],
    geo: { lat: 57.6323, lng: 11.8894 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tandkullegatan+11,+426+79+V%C3%A4stra+Fr%C3%B6lunda',
    hours: hrs([
      ['11.00', '20.30'], ['11.00', '20.30'], ['11.00', '20.30'], ['11.00', '20.30'],
      ['11.00', '21.00'], ['11.00', '21.00'], ['11.00', '20.30'],
    ]),
  },
  {
    slug: 'molndal',
    name: 'Mölndal',
    area: 'Krokslätts Torg',
    street: 'Krokslättsgatan 6',
    postal: '431 67',
    city: 'Mölndal',
    phone: '031-18 05 70',
    mobile: '070-951 26 83',
    menu: 'sodra',
    intro:
      'På Krokslätts Torg, med parkering runtomkring. Vardagslunch, avhämtning på vägen hem eller ett bord för hela sällskapet — allt lagas när du beställer.',
    parking: 'Goda parkeringsmöjligheter runtomkring restaurangen.',
    nearby: 'På Krokslätts Torg',
    photos: ['molndal-exterior', 'molndal-interior', 'molndal-street'],
    geo: { lat: 57.6605, lng: 12.0134 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Krokslättsgatan+6,+431+67+M%C3%B6lndal',
    hours: hrs([
      ['11.00', '20.30'], ['11.00', '20.30'], ['11.00', '20.30'], ['11.00', '20.30'],
      ['11.00', '21.00'], ['12.00', '21.00'], ['12.00', '20.30'],
    ]),
  },
];

export const byslug = (slug: string) => LOCATIONS.find((l) => l.slug === slug)!;

/** tel: href — strip everything but digits, keep the Swedish country code */
export const tel = (n: string) => '+46' + n.replace(/\D/g, '').replace(/^0/, '');
