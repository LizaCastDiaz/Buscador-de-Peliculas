'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('series', [{
      id_articles: 11,
      id_series:1,
      title: "House of the Dragon",
      genre: "Sci-Fi & Fantasy,",
      year: 2022 ,
      rating: 9,
      seasons: 1,
      episodes: 8,
      new_episode: null,
      Overview: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm." 
   },
   {
    id_articles: 12,
    id_series:2,
    title: "Dahmer Monster: The Jeffrey Dahmer Story ",
      genre: "Crime",
      year: 2022 ,
      rating: 8,
      seasons: 2,
      episodes: 10,
      new_episode: null,
      Overview: "Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?"

   },
   {
    id_articles: 13,
    id_series:3,
    title: "Chainsaw Man",
      genre: "Comedy",
      year: 2022 ,
      rating: 4,
      seasons: 4,
      episodes: 6,
      new_episode: null,
      Overview: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash."

   },
   {
    id_articles: 14,
    id_series:4,
    title: "The Walking Dead House of the Dragon",
    genre: "Sci-Fi & Fantasy,",
    year: 2010 ,
    rating: 8,
    seasons: 11,
    episodes: 24,
    new_episode: null,
    Overview: "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way"

   },
   {
    id_articles: 15,
    id_series:5,
    title: "HouseGame of Thrones of the Dragon",
      genre: "Sci-Fi & Fantasy",
      year: 2011 ,
      rating: 9,
      seasons: 8,
      episodes: 6,
      new_episode: null,
      Overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond."
   },
   {
    id_articles: 16,
    id_series:6,
    title: "HoGuillermo del Toro's Cabinet of Curiosities use of the Dragon",
      genre: "Drama",
      year: 2021 ,
      rating: 7,
      seasons: 1,
      episodes: 8,
      new_episode: null,
      Overview: "Bizarre nightmares unfold in eight tales of terror in this visually stunning, spine-tingling horror collection curated by Guillermo del Toro."
   },
   {
    id_articles: 17,
    id_series:7,
    title: "Rick and Morty",
      genre: "Animation",
      year: 2013 ,
      rating: 9,
      seasons: 6,
      episodes: 10,
      new_episode: null,
      Overview: "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school."
   },
   {
    id_articles: 18,
    id_series:8,
    title: "Manifest",
      genre: "Mistery",
      year: 2018 ,
      rating: 7,
      seasons: 4,
      episodes: 20,
      new_episode: null,
      Overview: "After landing from a turbulent but routine flight, the crew and passengers of Montego Air Flight 828 discover five years have passed in what seemed like a few hours. As their new realities become clear, a deeper mystery unfolds and some of the returned passengers soon realize they may be meant for something greater than they ever thought possible."
   },
   {
    id_articles: 19,
    id_series:9,
    title: "Lisa ",
      genre: "Drama",
      year: 2021 ,
      rating: 9,
      seasons: 4,
      episodes: 50,
      new_episode: null,
      Overview: "We don't have an overview translated in English. Help us expand our database by adding one."
   },
   {
    id_articles: 10,
    id_series:10,
    title: "Grey's Anatomy",
    genre: "Drama",
    year: 2005 ,
    rating: 9,
    seasons: 19,
    episodes: 7,
    new_episode: null,
    Overview: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital."
   },
  ], {});
  
 

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
