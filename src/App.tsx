import { useState } from "react"
import "./App.css";
import PersonList from "./PersonList";
import { PersonProps } from "./PersonCard"


function App() {
 
    return (
      <div className="App">
          <h1> Movie Challenge </h1>
        <PersonList apiResponse={initialApiResponse}/>
      
      </div>
     
    );
    
  }
  
  export default App;

interface ApiResponse {
  page: number;
  results: PersonProps[];
}


const initialApiResponse: ApiResponse = {


  "page": 1,
  "results": [
      {
          "adult": false,
          "backdrop_path": "/criPrxkTggCra1jch49jsiSeXo1.jpg",
          "genre_ids": [
              878,
              12,
              28
          ],
          "id": 609681,
          "original_language": "en",
          "original_title": "The Marvels",
          "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
          "popularity": 3327.208,
          "poster_path": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
          "release_date": "2023-11-08",
          "title": "The Marvels",
          "video": false,
          "vote_average": 6.374,
          "vote_count": 1165
      },
      {
          "adult": false,
          "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
          "genre_ids": [
              35,
              80
          ],
          "id": 955916,
          "original_language": "en",
          "original_title": "Lift",
          "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
          "popularity": 1745.578,
          "poster_path": "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
          "release_date": "2024-01-10",
          "title": "Lift",
          "video": false,
          "vote_average": 6.422,
          "vote_count": 464
      },
      {
          "adult": false,
          "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
          "genre_ids": [
              35,
              10751,
              14
          ],
          "id": 787699,
          "original_language": "en",
          "original_title": "Wonka",
          "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
          "popularity": 1643.733,
          "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
          "release_date": "2023-12-06",
          "title": "Wonka",
          "video": false,
          "vote_average": 7.198,
          "vote_count": 1290
      },
      {
          "adult": false,
          "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
          "genre_ids": [
              36,
              10752,
              18
          ],
          "id": 753342,
          "original_language": "en",
          "original_title": "Napoleon",
          "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
          "popularity": 1478.114,
          "poster_path": "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
          "release_date": "2023-11-22",
          "title": "Napoleon",
          "video": false,
          "vote_average": 6.502,
          "vote_count": 1370
      },
      {
          "adult": false,
          "backdrop_path": "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
          "genre_ids": [
              18,
              36
          ],
          "id": 906126,
          "original_language": "es",
          "original_title": "La sociedad de la nieve",
          "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
          "popularity": 1228.617,
          "poster_path": "/2e853FDVSIso600RqAMunPxiZjq.jpg",
          "release_date": "2023-12-13",
          "title": "Society of the Snow",
          "video": false,
          "vote_average": 8.056,
          "vote_count": 1219
      },
      {
          "adult": false,
          "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
          "genre_ids": [
              28,
              12,
              14
          ],
          "id": 572802,
          "original_language": "en",
          "original_title": "Aquaman and the Lost Kingdom",
          "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
          "popularity": 1092.699,
          "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
          "release_date": "2023-12-20",
          "title": "Aquaman and the Lost Kingdom",
          "video": false,
          "vote_average": 6.579,
          "vote_count": 598
      },
      {
          "adult": false,
          "backdrop_path": "/ruKNVJFViAyR4jguVboFXTskMOe.jpg",
          "genre_ids": [
              53,
              28,
              27
          ],
          "id": 1028703,
          "original_language": "en",
          "original_title": "The OctoGames",
          "overview": "8 contestants compete in 8 deadly, classic children's games. They seek fame beyond their wildest dreams, competing for the chance to take over the YouTube channel of the famous yet elusive masked YouTuber known only as \"JaxPro\".",
          "popularity": 960.836,
          "poster_path": "/qGz5rffXhegQH5PGUDiObqoOt06.jpg",
          "release_date": "2022-10-07",
          "title": "The OctoGames",
          "video": false,
          "vote_average": 4.333,
          "vote_count": 24
      },
      {
          "adult": false,
          "backdrop_path": "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
          "genre_ids": [
              28,
              35,
              10749
          ],
          "id": 848187,
          "original_language": "en",
          "original_title": "Role Play",
          "overview": "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
          "popularity": 901.652,
          "poster_path": "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
          "release_date": "2023-12-14",
          "title": "Role Play",
          "video": false,
          "vote_average": 5.819,
          "vote_count": 177
      },
      {
          "adult": false,
          "backdrop_path": "/dvNrgldueQciabkYmlCnyhmaPoO.jpg",
          "genre_ids": [
              28,
              9648,
              53,
              27
          ],
          "id": 899445,
          "original_language": "en",
          "original_title": "Deep Fear",
          "overview": "A solo trip aboard a yacht takes a terrifying turn when a woman encounters three drug traffickers clinging to the shattered remains of a boat. They soon force her to dive into shark-infested waters to retrieve kilos of cocaine from the sunken wreck.",
          "popularity": 822.395,
          "poster_path": "/ruujFw7J0Nd3BSjbN3QODym82Qs.jpg",
          "release_date": "2023-10-18",
          "title": "Deep Fear",
          "video": false,
          "vote_average": 5.34,
          "vote_count": 75
      },
      {
          "adult": false,
          "backdrop_path": "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
          "genre_ids": [
              16,
              12,
              14
          ],
          "id": 508883,
          "original_language": "ja",
          "original_title": "君たちはどう生きるか",
          "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
          "popularity": 809.96,
          "poster_path": "/jDQPkgzerGophKRRn7MKm071vCU.jpg",
          "release_date": "2023-07-14",
          "title": "The Boy and the Heron",
          "video": false,
          "vote_average": 7.469,
          "vote_count": 782
      },
      {
          "adult": false,
          "backdrop_path": "/ay0PJQZizDXk0pzhoGX4v7K9h7A.jpg",
          "genre_ids": [
              28,
              53
          ],
          "id": 1214314,
          "original_language": "en",
          "original_title": "One More Shot",
          "overview": "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
          "popularity": 733.247,
          "poster_path": "/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg",
          "release_date": "2024-01-12",
          "title": "One More Shot",
          "video": false,
          "vote_average": 6.667,
          "vote_count": 66
      },
      {
          "adult": false,
          "backdrop_path": "/oQ429AcD85ttxvOxAaYpETnAsW0.jpg",
          "genre_ids": [
              28,
              10752
          ],
          "id": 918692,
          "original_language": "ru",
          "original_title": "Гранит",
          "overview": "Mozambique requests from Russia is being helped in the fight against militants of the \"Islamic State\" and a special group led by a commander with the call sign Granit is coming to the country.",
          "popularity": 706.209,
          "poster_path": "/zLJn4U2qlWIzlFP5SsyFJUDQjfs.jpg",
          "release_date": "2021-12-29",
          "title": "Granit",
          "video": false,
          "vote_average": 6.0,
          "vote_count": 8
      },
      {
          "adult": false,
          "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
          "genre_ids": [
              28,
              53
          ],
          "id": 866398,
          "original_language": "en",
          "original_title": "The Beekeeper",
          "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
          "popularity": 614.077,
          "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
          "release_date": "2024-01-10",
          "title": "The Beekeeper",
          "video": false,
          "vote_average": 7.545,
          "vote_count": 166
      },
      {
          "adult": false,
          "backdrop_path": "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
          "genre_ids": [
              16,
              878,
              28
          ],
          "id": 1155089,
          "original_language": "en",
          "original_title": "Justice League: Crisis on Infinite Earths Part One",
          "overview": "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!",
          "popularity": 581.414,
          "poster_path": "/zR6C66EDklgTPLHRSmmMt5878MR.jpg",
          "release_date": "2024-01-09",
          "title": "Justice League: Crisis on Infinite Earths Part One",
          "video": false,
          "vote_average": 7.836,
          "vote_count": 117
      },
      {
          "adult": false,
          "backdrop_path": "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
          "genre_ids": [
              28,
              53
          ],
          "id": 927107,
          "original_language": "en",
          "original_title": "The Bricklayer",
          "overview": "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
          "popularity": 546.753,
          "poster_path": "/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
          "release_date": "2023-12-14",
          "title": "The Bricklayer",
          "video": false,
          "vote_average": 6.418,
          "vote_count": 61
      },
      {
          "adult": false,
          "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
          "genre_ids": [
              18,
              36
          ],
          "id": 872585,
          "original_language": "en",
          "original_title": "Oppenheimer",
          "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
          "popularity": 531.021,
          "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          "release_date": "2023-07-19",
          "title": "Oppenheimer",
          "video": false,
          "vote_average": 8.116,
          "vote_count": 6281
      },
      {
          "adult": false,
          "backdrop_path": "/e0M3WVJm4nBrAg0LbJq0gdKi3U7.jpg",
          "genre_ids": [
              18,
              878,
              28
          ],
          "id": 695721,
          "original_language": "en",
          "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
          "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
          "popularity": 513.299,
          "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
          "release_date": "2023-11-15",
          "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 1557
      },
      {
          "adult": false,
          "backdrop_path": "/j6HmtpElHPSkoRIGNlkcqC5aU9g.jpg",
          "genre_ids": [
              80
          ],
          "id": 101251,
          "original_language": "en",
          "original_title": "El Padrino II: Border Intrusion",
          "overview": "",
          "popularity": 509.587,
          "poster_path": "/yHtPjWgO3wCnY21qKL3NjbBbthx.jpg",
          "release_date": "2008-01-01",
          "title": "El Padrino II: Border Intrusion",
          "video": false,
          "vote_average": 6.25,
          "vote_count": 4
      },
      {
          "adult": false,
          "backdrop_path": "/nIiSCZvxDeCeXrOJnpbmRB8FcKH.jpg",
          "genre_ids": [
              28,
              80,
              18
          ],
          "id": 79026,
          "original_language": "en",
          "original_title": "El padrino",
          "overview": "In the streets of East Los Angeles, Manny is a formidable drug dealer. Impressed by his extravagant lifestyle and prowess, his young son, Kilo, yearns to follow in his footsteps. Kilo resolves to learn how to prosper in the drug world, and his new life as a dealer begins. In a world where a man wants everything, he may end up with nothing.",
          "popularity": 496.256,
          "poster_path": "/10J7EQ8WvMYku8lcZrLewV2Ko4I.jpg",
          "release_date": "2004-09-27",
          "title": "El padrino: The Latin Godfather",
          "video": false,
          "vote_average": 6.878,
          "vote_count": 37
      },
      {
          "adult": false,
          "backdrop_path": "/riuTxOEKQ9lfvSan2vwaOPipwtr.jpg",
          "genre_ids": [
              35,
              18
          ],
          "id": 621587,
          "original_language": "en",
          "original_title": "Next Goal Wins",
          "overview": "Dutch coach Thomas Rongen attempts the nearly impossible task of turning the American Samoa soccer team from perennial losers into winners.",
          "popularity": 495.713,
          "poster_path": "/xTQCL1zGugIck8MgvJ2lXSrxENR.jpg",
          "release_date": "2023-11-16",
          "title": "Next Goal Wins",
          "video": false,
          "vote_average": 6.48,
          "vote_count": 124
      }
  ],
  "total_pages": 42432,
  "total_results": 848637
}



