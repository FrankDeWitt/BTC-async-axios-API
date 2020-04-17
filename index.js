const apiKey = '13a9810709396d46190a426868190652';

const getMovies = async (type) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=es-ES`);
    const peliculas = res.data.results

    var div = document.getElementById('cartelera');
    div.innerHTML = "";

    peliculas.forEach(pelicula => {
       
        div.innerHTML += "<div class='col-lg-4 col-md-4 col-6 mb-3'>" +
                            "<div class='card'>" +
                                "<img class='img-fluid img-thumbnail' src='https://image.tmdb.org/t/p/w220_and_h330_face/" + pelicula.poster_path + "' alt='" + pelicula.original_title + "'>" +
                                "<div class='card-body'>" +
                                    "<h5 class='card-title'>" + pelicula.original_title + "</h5>" +
                                        "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>" +
                                        "<div data-toggle='modal' data-target='#exampleModal" + pelicula.id + "' class='btn btn-secondary' target='_blank'>Ver resumen</>" +
                                " </div>" +
                                "</div>" +
                                "<div class='modal fade' id='exampleModal" + pelicula.id + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>" +
                                    "<div class='modal-dialog' role='document'>" +
                                        "<div class='modal-content'>" +
                                            "<div class='modal-header'>" +
                                                "<h5 class='modal-title' id='exampleModalLabel'>" + pelicula.original_title + " <small class='text-muted'>" + pelicula.release_date + "</small></h5> " +
                                                "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
                                                "<span aria-hidden='true'>&times;</span>" +
                                                "</button>" +
                                            "</div>" +
                                            "<div class='modal-body'>" +
                                                "<p class='lead text-center'>" + pelicula.overview + "</p>" +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>" 
    })
}

