import { IProduct } from './IProduct';

export const products: IProduct[] = [
  {
    name: 'Monstera',
    price: 40,
    description:
      'The Monstera is considered a trendsetter among houseplants. The Swiss Cheese plant with its large, striking leaves, is not only present in homes, it has also provided decoration on wallpaper, posters and clothing for some years.',
    image: './assets/images/monstera.jpg',
    availability: true,
    smallD: 'Also known as Swiss Cheese Plant',
  },
  {
    name: '3 Succulents',
    price: 15,
    description:
      'In botany, succulent plants, also known as succulents, are plants with parts that are thickened, fleshy, and engorged, usually to retain water in arid climates or soil conditions. The word succulent comes from the Latin word sucus, meaning "juice" or "sap".',
    image: './assets/images/succulents.jpg',
    availability: true,
    smallD: 'You will receive 3 random small Succulents',
  },
  {
    name: 'Bonsai Tree',
    price: 30,
    description:
      'Bonsai is the Japanese art of growing and shaping miniature trees in containers, developed from the traditional Chinese art form of penjing ',
    image: './assets/images/bonsai.jpg',
    availability: true,
    smallD: 'Our most elegant plant',
  },
  {
    name: 'Orchid',
    price: 30,
    description:
      'Orchids are plants that belong to the family Orchidaceae, a diverse and widespread group of flowering plants with blooms that are often colourful and fragrant. Orchids are cosmopolitan plants that are found in almost every habitat on Earth except glaciers.',
    image: './assets/images/orchid.jpg',
    availability: true,
    smallD:
      'Colour may vary depending on our stock. If a specific colour is desired, contact us.',
  },
  {
    name: 'Palm Tree',
    price: 40,
    description:
      'Palms are one of the best known and most widely planted tree families. They have held an important role for humans throughout much of history. ',
    image: './assets/images/palm.jpg',
    availability: true,
    smallD: 'The classic palm tree',
  },
  {
    name: 'Tulips',
    price: 15,
    description:
      'Tulips are spring-blooming perennial herbaceous bulbiferous geophytes in the Tulipa genus. Their flowers are usually large, showy, and brightly coloured, generally red, orange, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally.',
    image: './assets/images/tulips.jpg',
    availability: true,
    smallD: 'Will bring fresh colour to any room',
  },
];
