// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsName = movies
    .map((movie) => movie.director)
    .filter((director, index, arr) => arr.indexOf(director) === index);
  return directorsName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  );
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  //   console.log(movies);
  const averageScore = movies.reduce((acc, film) => {
    return acc + film.score;
  }, 0);
  //   console.log((averageScore / movies.length).toFixed(2));
  if (movies.length === 0) {
    return 0;
  } else {
    return +(averageScore / movies.length).toFixed(2);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre == "Drama");

  const dramaScore = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  if (dramaMovies.length === 0) {
    return 0;
  } else {
    return +(dramaScore / dramaMovies.length).toFixed(2);
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArr = movies.slice().sort((a, b) => a.year - b.year);

  return newArr.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
    } else {
      return newArr;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderedByNames = movies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    if (a.title === b.title) return 0;
  });

  return orderedByNames.slice(0, 20).map((title) => title["title"]);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const convertHoursToMinutes = movies.map((movie) => {
    return durationToMinute(movie);
  });

  function durationToMinute(movie) {
    if (typeof movie.duration === "number") {
      return movie;
    }

    const movieDuration = movie.duration;
    const timeString = movieDuration.split(" ");

    const minuteDuration = timeString.reduce((total, string) => {
      if (string.includes("h")) {
        const numHours = parseInt(string);
        return total + numHours * 60;
      } else {
        const numOfMinutes = parseInt(string);
        return total + numOfMinutes;
      }
    }, 0);

    movie.duration = minuteDuration;

    return movie;
  }

  return convertHoursToMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
