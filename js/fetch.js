fetch('https://ghibliapi.herokuapp.com/films')
    .then(resp => resp.json())
    .then(allAnimes => {
        function getAnimes() {
            allAnimes = allAnimes;
            let animes = document.querySelector('#animes');
            for (let item of allAnimes) {
                animes.innerHTML += `
                    <div class="col-md space">
                        <div class="card " style="width: 17rem;">
                            <img src="${item.image}" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title text-body">${item.original_title}</h5>
                            <h5 class="card-title text-body">${item.title}</h5>
                            <label  class="btn btn-primary" onclick="getInfoAnime('${item.id}')"> Ver Más</label>
                            </div>
                        </div>
                    </div>
            `;
            }
        }
        getAnimes();

    });
// cuando se pulsa en "agregar a favoritos"
function getInfoAnime(id) {
    let url = 'https://ghibliapi.herokuapp.com/films/' + id;
    console.log(url);
    fetch(url)
        .then(resp => resp.json())
        .then(infoAnime => {
            let animeInfoAdd = document.querySelector('#infoAnime');
            animeInfoAdd.innerHTML = `
            <div class="container">
                
            <div class="card " style="width: 95%;">
            <img src="${infoAnime.movie_banner}" class="card-img-top" >
            <div class="card-body" style="background-color: #CCE5FF">
                <h4 class="card-title text-body">Titulo Original: <br/>${infoAnime.original_title}</h4>
                <h5 class="card-title text-body">Traducción:<br/>${infoAnime.title}</h5>
                <h5 class="card-title text-body">Puntuación: ${infoAnime.rt_score}</h5>
                <h5 class="card-title text-body">Fecha de Lanzamiento: ${infoAnime.release_date}</h5>
                <p class="card-text texto">${infoAnime.description}</p>
                <button type="button" class="btn btn-secondary" onclick="location.href='index'">Regresar</button>
                </div>
                </div>
                `;
        }).catch(e => {
            console.log(e.request);
        });
}