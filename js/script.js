fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const movieInfoContainer = document.getElementById('movie-info-container');

    data.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-info');
      movieElement.innerHTML = `
        <img src="${movie.poster}" class="movie-poster" loading='lazy'>
        <h2>${movie.title}</h2>
        <p>${movie.release_year} · ${movie.nation}</p>
        <p>평점 ★ ${movie.star}</p>
      `;

      movieElement.addEventListener('click', () => {
        // 해당 영화의 정보가 담긴 HTML 페이지로 이동
        window.location.href = 'movie.html?id=' + encodeURIComponent(movie.title);
      });

      movieInfoContainer.appendChild(movieElement);
    });
  })
  .catch(error => {
    console.error('영화 정보를 불러오는 도중 오류가 발생했습니다:', error);
  });
