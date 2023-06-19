fetch('movies2.json')
  .then(response => response.json())
  .then(data => {
    const movieInfoContainer = document.getElementById('movie-info-container2');

    data.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-info');
      
      const posterContainer = document.createElement('div');
      posterContainer.classList.add('poster-container');

      const moviePoster = document.createElement('img');
      moviePoster.src = movie.poster;
      moviePoster.classList.add('movie-poster');
      moviePoster.loading = 'lazy';

      const movieTitle = document.createElement('h2');
      movieTitle.classList.add('movie-title');
      movieTitle.textContent = movie.title;

      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.innerHTML = `
        <h2>${movie.title}</h2>        
        <p>${movie.release_year} · ${movie.nation}</p>
        <p>${movie.genre}</p>
        <p>★ ${movie.star}</p>       
      `;

      posterContainer.appendChild(moviePoster);
      posterContainer.appendChild(movieTitle);
      posterContainer.appendChild(overlay);
      movieElement.appendChild(posterContainer);

      // 클릭한 포스터에 맞는 영화로 이동하는 로직
      movieElement.addEventListener('click', () => {
        window.location.href = 'movie.html?id=' + encodeURIComponent(movie.title);
      });

      movieInfoContainer.appendChild(movieElement);
    });
  })
  .catch(error => {
    console.error('영화 정보를 불러오는 도중 오류가 발생했습니다:', error);
  });

  
