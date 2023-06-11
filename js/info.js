// URL에서 영화 제목을 추출하여 디코딩합니다
const urlParams = new URLSearchParams(window.location.search);
const movieTitle = decodeURIComponent(urlParams.get("id"));

// 영화 정보를 가져와서 페이지에 표시합니다
fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    const movie = data.find((movie) => movie.title === movieTitle);

    if (movie) {
      const posterElement = document.getElementById("movie-poster");
      const titleElement = document.getElementById("movie-title");
      const starElement = document.getElementById("movie-star");
      const directorElement = document.getElementById("movie-director");
      const castElement = document.getElementById("movie-cast");
      const releaseYearElement = document.getElementById("movie-release-year");
      const nationalElement = document.getElementById("movie-nation");
      const plotElement = document.getElementById("movie-plot");
      const trailerElement = document.getElementById("movie-trailer");
      const ottElement = document.getElementById("movie-ott");

      // ott 이미지
      for (let i = 0; i < movie.ott.length; i++) {
        const imgElement = document.createElement("img");
        imgElement.src = movie.ott[i];
        imgElement.classList.add("ott-image");
        ottElement.appendChild(imgElement);
      }

      trailerElement.src = movie.trailer;
      posterElement.src = movie.poster;

      titleElement.textContent = movie.title;
      starElement.textContent = movie.star;
      directorElement.textContent = movie.director;
      castElement.textContent = movie.cast.join(", ");
      releaseYearElement.textContent = movie.release_year;
      nationalElement.textContent = movie.nation;
      plotElement.textContent = movie.plot;
    } else {
      console.error("영화 정보를 찾을 수 없습니다:", movieTitle);
    }
  })
  .catch((error) => {
    console.error("영화 정보를 불러오는 도중 오류가 발생했습니다:", error);
  });

const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
};


