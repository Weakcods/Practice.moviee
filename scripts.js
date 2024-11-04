document.addEventListener("DOMContentLoaded", () => {
    const movieCardsContainer = document.getElementById("movie-cards");
    const movieDetailsContainer = document.getElementById("movie-details-container");
    const similarMoviesContainer = document.getElementById("Similar-container");
    const apiKey = "5ccfcd51a63cd605bc86418a0842cab3"; // Your TMDB API key

    // Function to display movie details
    function displayMovieDetails(movie) {
        document.getElementById("movie-title").textContent = movie.title;
        document.getElementById("movie-overview").textContent = movie.overview;
        document.getElementById("movie-release").textContent = `Release Date: ${movie.release_date}`;
        document.getElementById("movie-rating").textContent = `Rating: ${movie.vote_average}`;
        document.getElementById("movie-vote-count").textContent = `Votes: ${movie.vote_count}`;
        document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieDetailsContainer.style.display = "block"; // Show details container
    }

    // Sample movie data (could be replaced by a fetched API response)
    const movieData = {
        "results": [
          {
              "adult": false,
              "backdrop_path": "/lcCNS7vyofFpJV7fl92ipIdNmGi.jpg",
              "genre_ids": [
                28,
                878,
                12
              ],
              "id": 399579,
              "original_language": "en",
              "original_title": "Alita: Battle Angel",
              "overview": "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
              "popularity":55.404,
              "poster_path": "/xRWht48C2V8XNfzvPehyClOvDni.jpg",
              "release_date": "2019-01-31",
              "title": "Alita: Battle Angel",
              "video": false,
              "vote_average": 7.2,
              "vote_count": 9061
          },
          {
            "adult": false,
            "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
            "genre_ids": [878, 28, 12],
            "id": 912649,
            "original_language": "en",
            "original_title": "Venom: The Last Dance",
            "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
            "popularity": 5729.834,
            "poster_path": "/k42Owka8v91trK1qMYwCQCNwJKr.jpg",
            "release_date": "2024-10-22",
            "title": "Venom: The Last Dance",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 380
          },
            {
                "id": 1184918,
                "original_language": "en",
                "original_title": "The Wild Robot",
                "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
                "popularity": 4543.334,
                "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
                "release_date": "2024-09-12",
                "title": "The Wild Robot",
                "video": false,
                "vote_average": 8.56,
                "vote_count": 2058
            },
            {
                "id": 1034541,
                "original_language": "en",
                "original_title": "Terrifier 3",
                "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
                "popularity": 4006.976,
                "poster_path": "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
                "release_date": "2024-10-09",
                "title": "Terrifier 3",
                "video": false,
                "vote_average": 7.4,
                "vote_count": 332
              },
              {
                "id": 698687,
                "original_language": "en",
                "original_title": "Transformers One",
                "overview": "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
                "popularity": 3297.568,
                "poster_path": "/qrwI2T844nrBUv3eDwQZRDdgSFs.jpg",
                "release_date": "2024-09-11",
                "title": "Transformers One",
                "video": false,
                "vote_average": 8.1,
                "vote_count": 458
              },
              {
                
                "id": 933260,
                "original_language": "en",
                "original_title": "The Substance",
                "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
                "popularity": 2092.279,
                "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
                "release_date": "2024-09-07",
                "title": "The Substance",
                "video": false,
                "vote_average": 7.3,
                "vote_count": 1057
              },
              {
                "id": 1196470,
                "original_language": "fr",
                "original_title": "Survivre",
                "overview": "A couple celebrates their son’s birthday in the middle of the ocean on their boat. A violent storm hits and it brings up hungry creatures from the depths and they fight for their survival.",
                "popularity": 1527.359,
                "poster_path": "/7fR3KxswtY8OHHZuOUB9td58CRX.jpg",
                "release_date": "2024-06-19",
                "title": "Survive",
                "video": false,
                "vote_average": 4.733,
                "vote_count": 30
              },
              {
                "id": 889737,
                "original_language": "en",
                "original_title": "Joker: Folie à Deux",
                "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
                "popularity": 1512.612,
                "poster_path": "/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg",
                "release_date": "2024-10-01",
                "title": "Joker: Folie à Deux",
                "video": false,
                "vote_average": 5.8,
                "vote_count": 1127
              },
              {
                "id": 1029235,
                "original_language": "en",
                "original_title": "Azrael",
                "overview": "In a world where no one speaks, a devout female hunts down a young woman who has escaped her imprisonment. Recaptured by its ruthless leaders, Azrael is due to be sacrificed to pacify an ancient evil deep within the surrounding wilderness.",
                "popularity": 1086.456,
                "poster_path": "/qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg",
                "release_date": "2024-09-27",
                "title": "Azrael",
                "video": false,
                "vote_average": 6.2,
                "vote_count": 106
              },
              {
                "id": 917496,
                "original_language": "en",
                "original_title": "Beetlejuice Beetlejuice",
                "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
                "popularity": 961.943,
                "poster_path": "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
                "release_date": "2024-09-04",
                "title": "Beetlejuice Beetlejuice",
                "video": false,
                "vote_average": 7.182,
                "vote_count": 1631
              },
              {
                "id": 616446,
                "original_language": "en",
                "original_title": "Brothers",
                "overview": "A reformed criminal's attempt at going straight is derailed when he reunites with his sanity-testing twin brother on a road trip for the score of a lifetime. Dodging bullets, the law, and an overbearing mother along the way, they must heal their severed family bond before they end up killing each other.",
                "popularity": 835.45,
                "poster_path": "/Akweo95FGyDpucYVT81h0SbX8Ky.jpg",
                "release_date": "2024-10-10",
                "title": "Brothers",
                "video": false,
                "vote_average": 6.4,
                "vote_count": 122
              },
              {
                "id": 1159311,
                "original_language": "ja",
                "original_title": "僕のヒーローアカデミア THE MOVIE ユアネクスト",
                "overview": "In a society devastated by the effects of an all-out war between heroes and villains, a mysterious giant fortress suddenly appears, engulfing towns and people one after another. Then, a man reminiscent of All Might, the 'symbol of peace', stands in front of Izuku and his friends...",
                "popularity": 768.673,
                "poster_path": "/8rdB1wkheEMMqcY8qLAKjCMPcnZ.jpg",
                "release_date": "2024-08-02",
                "title": "My Hero Academia: You're Next",
                "video": false,
                "vote_average": 6.7,
                "vote_count": 32
              },
              {
                "id": 1125510,
                "original_language": "es",
                "original_title": "El hoyo 2",
                "overview": "After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.",
                "popularity": 737.244,
                "poster_path": "/hf94ySIzdP3KwHau9VSWh7b7Qu2.jpg",
                "release_date": "2024-09-27",
                "title": "The Platform 2",
                "video": false,
                "vote_average": 5.7,
                "vote_count": 752
              },
              {
                "id": 663712,
                "original_language": "en",
                "original_title": "Terrifier 2",
                "overview": "A year after the Miles County massacre, Art the Clown is resurrected by a sinister entity. Art returns home, where he must hunt down and destroy teenage Sienna and her younger brother Jonathan on Halloween. As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
                "popularity": 671.805,
                "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
                "release_date": "2022-10-06",
                "title": "Terrifier 2",
                "video": false,
                "vote_average": 6.8,
                "vote_count": 1910
              },
              {
                "id": 978796,
                "original_language": "en",
                "original_title": "Bagman",
                "overview": "For centuries and across cultures, parents have warned their children of the legendary Bagman, who snatches innocent children and stuffs them into his vile, rotting bag—never to be seen again. Patrick McKee narrowly escaped such an encounter as a boy, which left him with lasting scars throughout his adulthood. Now, Patrick’s childhood tormentor has returned, threatening the safety of his wife Karina and son Jake.",
                "popularity": 638.685,
                "poster_path": "/pkKcIP2B2ILAh4lGKyn9YkO0L1t.jpg",
                "release_date": "2024-09-20",
                "title": "Bagman",
                "video": false,
                "vote_average": 6.6,
                "vote_count": 47
              },
              {
                "id": 1100782,
                "original_language": "en",
                "original_title": "Smile 2",
                "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
                "popularity": 607.211,
                "poster_path": "/aE85MnPIsSoSs3978Noo16BRsKN.jpg",
                "release_date": "2024-10-16",
                "title": "Smile 2",
                "video": false,
                "vote_average": 6.9,
                "vote_count": 235
            },
            {
                "adult": false,
                "backdrop_path": "/ktzhr2m6y98PtwOdfOtTA0X232m.jpg",
                "genre_ids": [16, 878, 28, 18],
                "id": 15137,
                "original_language": "ja",
                "original_title": "ヱヴァンゲリヲン新劇場版：序",
                "overview": "After the Second Impact, Tokyo-3 is being attacked by giant monsters called Angels that seek to eradicate humankind. The child Shinji’s objective is to fight the Angels by piloting one of the mysterious Evangelion mecha units. A remake of the first six episodes of GAINAX’s famous 1996 anime series. The film was retitled “Evangelion: 1.01” for its DVD release and “Evangelion: 1.11” for a release with additional scenes.",
                "popularity": 20.834,
                "poster_path": "/pETU4GurpeEjBOM8oytMH0yNBHx.jpg",
                "release_date": "2007-09-01",
                "title": "Evangelion: 1.0 You Are (Not) Alone",
                "video": false,
                "vote_average": 7.6,
                "vote_count": 939
            },
            {
              "adult": false,
              "backdrop_path": "/oXs8kp1oX5N0Mte6U8UUAwmLwt6.jpg",
              "genre_ids": [28, 12, 878, 53],
              "id": 154,
              "original_language": "en",
              "original_title": "Star Trek II: The Wrath of Khan",
              "overview": "The starship Enterprise and its crew is pulled back into action when old nemesis, Khan, steals a top secret device called Project Genesis.",
              "popularity": 20.363,
              "poster_path": "/uPyLsKl8Z0LOoxeaFXsY5MxhR5s.jpg",
              "release_date": "1982-06-04",
              "title": "Star Trek II: The Wrath of Khan",
              "video": false,
              "vote_average": 7.444,
              "vote_count": 1896
            },
            {
              "adult": false,
              "backdrop_path": "/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
              "genre_ids": [18, 28, 80, 53],
              "id": 155,
              "original_language": "en",
              "original_title": "The Dark Knight",
              "overview": "Batman raises the stakes in his war on crime...",
              "popularity": 163.729,
              "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
              "release_date": "2008-07-16",
              "title": "The Dark Knight",
              "video": false,
              "vote_average": 8.5,
              "vote_count": 32785
            },
            {
              "adult": false,
              "backdrop_path": "/skQN2UMQKQnOTmwplcYMx6ZF4jS.jpg",
              "genre_ids": [12, 35, 878],
              "id": 165,
              "original_language": "en",
              "original_title": "Back to the Future Part II",
              "overview": "Marty and Doc are at it again...",
              "popularity": 37.211,
              "poster_path": "/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",
              "release_date": "1989-11-22",
              "title": "Back to the Future Part II",
              "video": false,
              "vote_average": 7.765,
              "vote_count": 12675
          },
          {
            "adult": false,
            "backdrop_path": "/vr6n6ZFUZvedvIlhfYcbCWcaKyW.jpg",
            "genre_ids": [
              12,
              14,
              28
            ],
            "id": 58,
            "original_language": "en",
            "original_title": "Pirates of the Caribbean: Dead Man's Chest",
            "overview": "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.",
            "popularity": 153.577,
            "poster_path": "/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
            "release_date": "2006-07-06",
            "title": "Pirates of the Caribbean: Dead Man's Chest",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 15834
          },
          {
            "adult": false,
            "backdrop_path": "/oGzToOBTRdXVOrHj8r0VgK3d2sU.jpg",
            "genre_ids": [
              14,
              10751,
              35
            ],
            "id": 400650,
            "original_language": "en",
            "original_title": "Mary Poppins Returns",
            "overview": "Mary Poppins returns to the Banks family and helps them evade grave dangers by taking them on magical, musical adventures.",
            "popularity": 21.252,
            "poster_path": "/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
            "release_date": "2018-12-13",
            "title": "Mary Poppins Returns",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 3281
          },
          {
            "adult": false,
            "backdrop_path": "/7hDdW3C17pi4MdSeYXs8bwIVA78.jpg",
            "genre_ids": [
              12,
              14,
              27
            ],
            "id": 244,
            "original_language": "en",
            "original_title": "King Kong",
            "overview": "Adventurous filmmaker Carl Denham sets out to produce a motion picture unlike anything the world has seen before. Alongside his leading lady Ann Darrow and his first mate Jack Driscoll, they arrive on an island and discover a legendary creature said to be neither beast nor man. Denham captures the monster to be displayed on Broadway as King Kong, the eighth wonder of the world.",
            "popularity": 24.553,
            "poster_path": "/lHlnxKL5GbgRibyRFI7n1Ey850i.jpg",
            "release_date": "1933-03-15",
            "title": "King Kong",
            "video": false,
            "vote_average": 7.599,
            "vote_count": 1454
          },
          {
            "adult": false,
            "backdrop_path": "/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg",
            "genre_ids": [
              12,
              14
            ],
            "id": 673,
            "original_language": "en",
            "original_title": "Harry Potter and the Prisoner of Azkaban",
            "overview": "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
            "popularity": 226.565,
            "poster_path": "/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
            "release_date": "2004-05-31",
            "title": "Harry Potter and the Prisoner of Azkaban",
            "video": false,
            "vote_average": 8.018,
            "vote_count": 21452
          },
          {
            "adult": false,
            "backdrop_path": "/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg",
            "genre_ids": [
              12,
              14
            ],
            "id": 674,
            "original_language": "en",
            "original_title": "Harry Potter and the Goblet of Fire",
            "overview": "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools—the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named.",
            "popularity": 180.648,
            "poster_path": "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
            "release_date": "2005-11-16",
            "title": "Harry Potter and the Goblet of Fire",
            "video": false,
            "vote_average": 7.812,
            "vote_count": 20558
          },
          {
            "adult": false,
            "backdrop_path": "/vcj47nTm1fDlkxUwDb2GgYbKDDW.jpg",
            "genre_ids": [
              12,
              28,
              53
            ],
            "id": 682,
            "original_language": "en",
            "original_title": "The Man with the Golden Gun",
            "overview": "Cool government operative James Bond searches for a stolen invention that can turn the sun's heat into a destructive weapon. He soon crosses paths with the menacing Francisco Scaramanga, a hitman so skilled he has a seven-figure working fee. Bond then joins forces with the swimsuit-clad Mary Goodnight, and together they track Scaramanga to a Thai tropical isle hideout where the killer-for-hire lures the slick spy into a deadly maze for a final duel.",
            "popularity": 28.623,
            "poster_path": "/xVkbKwGnBVNQ122GN5bCTMyPbWz.jpg",
            "release_date": "1974-12-04",
            "title": "The Man with the Golden Gun",
            "video": false,
            "vote_average": 6.439,
            "vote_count": 2008
          },
          {
            "adult": false,
            "backdrop_path": "/kjby7cr8JnIPkfqMGKutOFrM2at.jpg",
            "genre_ids": [
              35,
              10751,
              12
            ],
            "id": 772,
            "original_language": "en",
            "original_title": "Home Alone 2: Lost in New York",
            "overview": "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas Eve.",
            "popularity": 91.372,
            "poster_path": "/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
            "release_date": "1992-11-15",
            "title": "Home Alone 2: Lost in New York",
            "video": false,
            "vote_average": 6.745,
            "vote_count": 9487
          },
          {
            "adult": false,
            "backdrop_path": "/n7p6UTAZtkeoHkwCO42BEQaMFJY.jpg",
            "genre_ids": [
              18,
              878,
              12
            ],
            "id": 644,
            "original_language": "en",
            "original_title": "A.I. Artificial Intelligence",
            "overview": "David, a robotic boy—the first of his kind programmed to love—is adopted as a test case by a Cybertronics employee and his wife. Though he gradually becomes their child, a series of unexpected circumstances make this life impossible for David.",
            "popularity": 30.575,
            "poster_path": "/zxUhHQxKRbVLsaHR1V81SWYADOl.jpg",
            "release_date": "2001-06-29",
            "title": "A.I. Artificial Intelligence",
            "video": false,
            "vote_average": 7.044,
            "vote_count": 6096
          },
          {
            "id": 1771,
            "original_language": "en",
            "original_title": "Captain America: The First Avenger",
            "overview": "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
            "popularity": 44.525,
            "poster_path": "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
            "release_date": "2011-07-22",
            "title": "Captain America: The First Avenger",
            "video": false,
            "vote_average": 7,
            "vote_count": 21304
          },
          {
            "adult": false,
            "backdrop_path": "/zv1xOEQzebKyku349qDZ085FZlO.jpg",
            "genre_ids": [
              10752,
              36,
              10749,
              18,
              28
            ],
            "id": 676,
            "original_language": "en",
            "original_title": "Pearl Harbor",
            "overview": "The lifelong friendship between Rafe McCawley and Danny Walker is put to the ultimate test when the two ace fighter pilots become entangled in a love triangle with beautiful Naval nurse Evelyn Johnson. But the rivalry between the friends-turned-foes is immediately put on hold when they find themselves at the center of Japan's devastating attack on Pearl Harbor on Dec. 7, 1941.",
            "popularity": 40.168,
            "poster_path": "/y8A0Cvp8WQmZ3bjbnsL53lY0dsC.jpg",
            "release_date": "2001-05-21",
            "title": "Pearl Harbor",
            "video": false,
            "vote_average": 6.94,
            "vote_count": 6430
          },
        ]
    };

// Display current movies
    movieData.results.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieCardsContainer.appendChild(movieCard);
    });

    function createMovieCard(movie) {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        // Add a double-click event listener to each movie card
        movieCard.addEventListener('dblclick', (event) => {
            event.stopPropagation();
            displayMovieDetails(movie); // Show movie details
        });

        const poster = document.createElement("div");
        poster.classList.add("movie-poster");
        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        img.alt = `${movie.title} Poster`;
        poster.appendChild(img);

        const info = document.createElement("div");
        info.classList.add("movie-info");

        const title = document.createElement("div");
        title.classList.add("movie-title");
        title.textContent = movie.title;

        const release = document.createElement("div");
        release.classList.add("movie-release");
        release.textContent = `Release: ${movie.release_date}`;

        const rating = document.createElement("div");
        rating.classList.add("movie-rating");
        rating.textContent = `Rating: ${movie.vote_average}`;

        info.appendChild(title);
        info.appendChild(release);
        info.appendChild(rating);
        movieCard.appendChild(poster);
        movieCard.appendChild(info); 

        return movieCard;
    }

    // Function to display movie details
    function displayMovieDetails(movie) {
        document.getElementById("movie-title").textContent = movie.title;
        document.getElementById("movie-overview").textContent = movie.overview;
        document.getElementById("movie-release").textContent = `Release Date: ${movie.release_date}`;
        document.getElementById("movie-rating").textContent = `Rating: ${movie.vote_average}`;
        document.getElementById("movie-vote-count").textContent = `Votes: ${movie.vote_count}`;
        document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        // Fetch similar movies
        fetchSimilarMovies(movie.id);

        movieDetailsContainer.style.display = "block"; // Show details container
    }

    // Function to fetch and display similar movies
    function fetchSimilarMovies(movieId) {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              similarMoviesContainer.innerHTML = ''; // Clear existing similar movies
              const similarMovies = data.results.slice(0, 15); // Get only the first 5 similar movies
              if (similarMovies.length > 0) {
                  similarMovies.forEach(similarMovie => {
                      const similarMovieCard = createMovieCard(similarMovie);
                      similarMovieCard.classList.add("similar-movie-card"); // Add the specific class for styling
                      similarMovieCard.addEventListener('dblclick', () => displayMovieDetails(similarMovie));
                      similarMoviesContainer.appendChild(similarMovieCard);
                  });
              } else {
                  similarMoviesContainer.innerHTML = '<p>No similar movies found.</p>';
              }
          })
          .catch(error => console.error('Error fetching similar movies:', error));
  }
  
});




/*Searchhhhhhh a movie ---------*/

document.addEventListener("DOMContentLoaded", () => {
  const movieCardsContainer = document.getElementById("movies");
  const searchButton = document.getElementById("searchButton");
  const movieSearchInput = document.getElementById("movieSearch");
  const imageBaseUrl = "https://image.tmdb.org/t/p/w200";
  const apiKey = "5ccfcd51a63cd605bc86418a0842cab3"; // Replace with your TMDB API key

  searchButton.addEventListener("click", () => {
      const movieTitle = movieSearchInput.value.trim();
      if (movieTitle) {
          searchMovies(movieTitle);
      }
  });

  async function searchMovies(title) {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`);
      const data = await response.json();
      displayMovies(data.results);
  }

  function displayMovies(movies) {
      movieCardsContainer.innerHTML = ""; // Clear previous results

      if (movies.length === 0) {
          movieCardsContainer.innerHTML = "<p>No results found.</p>";
          return;
      }

      movies.forEach(movie => {
          const movieCard = document.createElement("div");
          movieCard.classList.add("movie-card");

          const poster = document.createElement("div");
          poster.classList.add("movie-poster");
          const img = document.createElement("img");
          img.src = `${imageBaseUrl}${movie.poster_path}`;
          img.alt = `${movie.title} Poster`;
          poster.appendChild(img);

          const info = document.createElement("div");
          info.classList.add("movie-info");

          const title = document.createElement("div");
          title.classList.add("movie-title");
          title.textContent = movie.title;

          const release = document.createElement("div");
          release.classList.add("movie-release");
          release.textContent = `Release: ${movie.release_date}`;

          const rating = document.createElement("div");
          rating.classList.add("movie-rating");
          rating.textContent = `Rating: ${movie.vote_average}`;

          info.appendChild(title);
          info.appendChild(release);
          info.appendChild(rating);

          movieCard.appendChild(poster);
          movieCard.appendChild(info);

          movieCardsContainer.appendChild(movieCard);
      });
  }
});

//----------------------- clearr btnnn--------------------
document.addEventListener("DOMContentLoaded", () => {
  const movieSearchInput = document.getElementById("movieSearch");
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");

  // Show or hide the clear button based on input
  movieSearchInput.addEventListener("input", () => {
      clearButton.style.display = movieSearchInput.value ? "inline-flex" : "none";
  });

  // Clear the input when the clear button is clicked
  clearButton.addEventListener("click", () => {
      movieSearchInput.value = "";
      clearButton.style.display = "none"; // Hide the clear button
      movieSearchInput.focus(); // Refocus on the input
  });

  // Add your search button functionality here
  searchButton.addEventListener("click", () => {
      const query = movieSearchInput.value;
      // Add the search logic here
  });
});



//-----------------searchhh enhanceeee----
const searchButton = document.getElementById('searchButton');
const movieSearch = document.getElementById('movieSearch');

searchButton.addEventListener('click', () => {
    const query = movieSearch.value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        const title = card.querySelector('.movie-title').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block'; // Show card if it matches
        } else {
            card.style.display = 'none'; // Hide if it doesn't match
        }
    });
});
