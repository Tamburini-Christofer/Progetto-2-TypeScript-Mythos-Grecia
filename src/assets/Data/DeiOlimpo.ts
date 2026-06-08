type TipoDivinità = 'Olimpo' | 'Titano' | 'Eroe' | 'Creatura';

type Potere = 'Fulmine' | 'Mare' | 'Guerra' | 'Saggezza' | 'Amore' | 'Morte' | 'Fuoco';

export interface Divinita {
  id: number;
  numeroCarta: number;
  tipo: TipoDivinità;

  nomeGreco: string;
  nomeItaliano: string;
  nomeRomano: string;

  dominio: string;
  descrizione: string;

  potere?: Potere;
}

export const divinitaOlimpiche: Divinita[] = [
  {
    id: 1,
    numeroCarta: 1,
    tipo: 'Olimpo',
    nomeGreco: 'Ζεύς',
    nomeItaliano: 'Zeus',
    nomeRomano: 'Giove',
    dominio: 'Re degli dèi, cielo e fulmine',
    descrizione: "Sovrano dell'Olimpo e padre di dèi e uomini.",
    potere: 'Fulmine',
  },
  {
    id: 2,
    numeroCarta: 2,
    tipo: 'Olimpo',
    nomeGreco: 'Ἥρα',
    nomeItaliano: 'Era',
    nomeRomano: 'Giunone',
    dominio: 'Matrimonio e famiglia',
    descrizione: 'Regina degli dèi e protettrice del matrimonio.',
    potere: 'Saggezza',
  },
  {
    id: 3,
    numeroCarta: 3,
    tipo: 'Olimpo',
    nomeGreco: 'Ποσειδῶν',
    nomeItaliano: 'Poseidone',
    nomeRomano: 'Nettuno',
    dominio: 'Mari, terremoti e cavalli',
    descrizione: 'Signore degli oceani e fratello di Zeus.',
    potere: 'Mare',
  },
  {
    id: 4,
    numeroCarta: 4,
    tipo: 'Olimpo',
    nomeGreco: 'Δήμητρα',
    nomeItaliano: 'Demetra',
    nomeRomano: 'Cerere',
    dominio: 'Agricoltura e raccolti',
    descrizione: 'Dea della fertilità della terra.',
    potere: 'Amore',
  },
  {
    id: 5,
    numeroCarta: 5,
    tipo: 'Olimpo',
    nomeGreco: 'Ἀθηνᾶ',
    nomeItaliano: 'Atena',
    nomeRomano: 'Minerva',
    dominio: 'Saggezza e strategia',
    descrizione: 'Dea della sapienza e della guerra strategica.',
    potere: 'Saggezza',
  },
  {
    id: 6,
    numeroCarta: 6,
    tipo: 'Olimpo',
    nomeGreco: 'Ἄρης',
    nomeItaliano: 'Ares',
    nomeRomano: 'Marte',
    dominio: 'Guerra e battaglia',
    descrizione: 'Dio della guerra brutale e della forza.',
    potere: 'Guerra',
  },
  {
    id: 7,
    numeroCarta: 7,
    tipo: 'Olimpo',
    nomeGreco: 'Ἀπόλλων',
    nomeItaliano: 'Apollo',
    nomeRomano: 'Apollo',
    dominio: 'Sole, arti e profezia',
    descrizione: 'Dio della luce, musica e profezia.',
    potere: 'Fuoco',
  },
  {
    id: 8,
    numeroCarta: 8,
    tipo: 'Olimpo',
    nomeGreco: 'Ἄρτεμις',
    nomeItaliano: 'Artemide',
    nomeRomano: 'Diana',
    dominio: 'Caccia e natura selvaggia',
    descrizione: 'Dea della caccia e protettrice degli animali.',
    potere: 'Amore',
  },
  {
    id: 9,
    numeroCarta: 9,
    tipo: 'Olimpo',
    nomeGreco: 'Ἀφροδίτη',
    nomeItaliano: 'Afrodite',
    nomeRomano: 'Venere',
    dominio: 'Bellezza e amore',
    descrizione: 'Dea dell’amore e della bellezza.',
    potere: 'Amore',
  },
  {
    id: 10,
    numeroCarta: 10,
    tipo: 'Olimpo',
    nomeGreco: 'Ἥφαιστος',
    nomeItaliano: 'Efesto',
    nomeRomano: 'Vulcano',
    dominio: 'Fuoco e forgia',
    descrizione: 'Dio del fuoco e degli artigiani.',
    potere: 'Fuoco',
  },
  {
    id: 11,
    numeroCarta: 11,
    tipo: 'Olimpo',
    nomeGreco: 'Ἑρμῆς',
    nomeItaliano: 'Ermes',
    nomeRomano: 'Mercurio',
    dominio: 'Messaggeri, viaggi e commercio',
    descrizione: 'Messaggero degli dèi e guida delle anime.',
    potere: 'Fulmine',
  },
  {
    id: 12,
    numeroCarta: 12,
    tipo: 'Olimpo',
    nomeGreco: 'Ἑστία',
    nomeItaliano: 'Estia',
    nomeRomano: 'Vesta',
    dominio: 'Focolare domestico',
    descrizione: 'Dea della casa e del focolare.',
    potere: 'Fuoco',
  },
];
