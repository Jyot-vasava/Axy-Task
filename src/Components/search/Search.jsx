import $ from 'jquery';
// import donenv  from 'dotenv';
// donenv.config();

export default function Search() {
  const handleSearch = () => {
  const query = document.getElementById('searchInput').value;
  const apiKey = 'xGEPE6tttRwQozJDBATz3k6RCa8nCW4s';
  const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=5`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const gifsContainer = document.getElementById('gifsContainer');
      gifsContainer.innerHTML = ''; 
      data.data.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        gifsContainer.appendChild(img);
      })
    })
    .catch(error => console.error('Error fetching GIFs:', error));
}

  return (
    <div>
      <input type="text" id="searchInput" placeholder="Search for GIFs" />
      <button onClick={handleSearch}>Search</button>
      <div id="gifsContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}></div>
    </div>
  );
}

//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });