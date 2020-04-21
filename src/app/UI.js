export class UI {
    
    constructor() {
        this.grid = document.getElementById('cartelera');
    }

    render(movies) {
        this.grid.innerHTML = '';
        Object.keys(movies.data.results).forEach((key) => {
            const movie = movies.data.results[key];
            this.grid.innerHTML += "<div class='col-lg-4 col-md-4 col-6 mb-3'>" +
                                 "<div class='card'>" +
                                     "<img class='img-fluid img-thumbnail' src='https://image.tmdb.org/t/p/w220_and_h330_face/" + movie.poster_path + "' alt='" + movie.original_title + "'>" +
                                     "<div class='card-body'>" +
                                         "<h5 class='card-title'>" + movie.original_title + "</h5>" +
                                             "<div data-toggle='modal' data-target='#exampleModal" + movie.id + "' class='btn btn-secondary' target='_blank'>Ver resumen</>" +
                                     " </div>" +
                                     "</div>" +
                                     "<div class='modal fade' id='exampleModal" + movie.id + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>" +
                                         "<div class='modal-dialog' role='document'>" +
                                             "<div class='modal-content'>" +
                                                 "<div class='modal-header'>" +
                                                     "<h5 class='modal-title' id='exampleModalLabel'>" + movie.original_title + " <small class='text-muted'>(" + movie.release_date + ")</small></h5> " +
                                                     "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
                                                     "<span aria-hidden='true'>&times;</span>" +
                                                     "</button>" +
                                                 "</div>" +
                                                 "<div class='modal-body'>" +
                                                     "<p class='lead text-center'>" + movie.overview + "</p>" +
                                                 "</div>" +
                                             "</div>" +
                                         "</div>" +
                                     "</div>" +
                                 "</div>" +
                             "</div>" 
        });
    }
}