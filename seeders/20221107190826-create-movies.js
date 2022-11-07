'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movies', [
      {
      id_articles: 1,
      id_movies: 1,
      title: "The Peripheral",
      genre:"Drama",
      release_date:"2022-10-06",   
      rating:83,
      synopsis: "Stuck in a small Appalachian town, a young woman’s only escape from the daily grind is playing advanced video games. She is such a good player that a company sends her a new video game system to test…but it has a surprise in store. It unlocks all of her dreams of finding a purpose, romance, and glamour in what seems like a game…but it also puts her and her family in real danger.After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      director: "Scott B. Smith",
      duration: 120,

    },
    {
      id_articles: 2,
      id_movies: 2,
      title: "Blade of the 47 Ronin ",
      genre:"Action",
      release_date:"2022-10-30",   
      rating: 6,
      synopsis: "In this sequel to a new class of warriors emerges among the Samurai clans to keep a sought-after sword from falling into the wrong hands.ter being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      director: "Ron Yuan",
      duration: 150,
    },
    {
      id_articles: 3,
      id_movies: 3,
      title: "Orphan: First Kill",
      genre:"Horror",
      release_date:"2022-10-16",   
      rating:7,
      synopsis: "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
      director: "William Brent Bell",
      duration: 172,
    },

    {
      id_articles: 4,
      id_movies: 4,
      title: "The Battle at Lake Changjin: Water Gate Bridge ",
      genre:"Drama",
      release_date:"2022-9-16",   
      rating: 6,
      synopsis: "In the follow-up to The Battle At Lake Changjin, brothers Wu Qianli and Wu Wanli undertake a new task for the People's Volunteer Army, defending a bridge part of the American troops' escape route from the advancing Chinese.",
      director: "Tsui Hark",
      duration: 170,
    },
    {
      id_articles: 5,
      id_movies: 5,
      title: "Thor: Love and Thunder ",
      genre:"Action",
      release_date:"2019-9-16",   
      rating: 7,
      synopsis: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor",
      director: "Taika Waititi",
      duration: 132,
    },
    {
      id_articles: 6,
      id_movies: 6,
      title: "The School for Good and Evil",
      genre:"Drama",
      release_date:"2002-5-16",   
      rating: 7,
      synopsis: "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains ",
      director: "Paul Feigz",
      duration: 180,
    },
    {
      id_articles: 7,
      id_movies: 7,
      title: "Code Name Banshee",
      genre:"Action",
      release_date:"2011-01-06",   
      rating: 5,
      synopsis: "Caleb, a former government assassin in hiding, who resurfaces when his protégé, the equally deadly killer known as Banshee, discovers a bounty has been placed on Caleb's head.",
      director: "Jon Keeyes",
      duration: 162,
    },
    {
      id_articles: 8,
      id_movies: 8,
      title: "The Godfather ",
      genre:"Crime",
      release_date:"1972-11-26",   
      rating: 9,
      synopsis: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      director: "Francis Ford Coppola",
      duration: 150,
    },
    {
      id_articles: 9,
      id_movies: 9,
      title: "Schindler's List",
      genre:"Drama",
      release_date:"1993-10-06",   
      rating: 8,
      synopsis: " The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II",
      director: "Steven Spielberg",
      duration: 200,
    },
    {
      id_articles: 10,
      id_movies: 10,
      title: "Titanic",
      genre:"Drama",
      release_date:"1997-10-06",   
      rating: 9,
      synopsis: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
      director: "James Cameron",
      duration: 190,
    },
    
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
