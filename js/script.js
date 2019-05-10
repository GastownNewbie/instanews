
$(function () {

    $("#loader").hide();
    // change header size when news selected
    $('#news-select').on('change', function () {
        $('.header').addClass('shrink');
        $('.site-main').addClass('grow');
        $(".logo").addClass("margin");
        $("#loader").show();




        // connect to NYT API for news articles

        const selected = $(this).val();
        if (selected !== '') {
            $.ajax({
                method: 'get',
                url: 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json?api-key=IUALhLCmsVYpEVPVBz1PSFSRnqPN2qpJ'

            })
                .done(function (data) {
                    $('.news-articles').empty();

                    $("#loader").hide();


                    // filter news articles to show those with pics and show 12 articles

                    const filteredData = data.results.filter(function (article) {
                        return article.multimedia[4] !== undefined;
                    }).slice(0, 12);

                    $.each(filteredData, function (index, value) {
                        $(".news-articles").append(`
                        <li class="article">
                         <a href="${value.url}" target="_blank">
                         <img class="article-pic" src="${value.multimedia[4].url}"/>
                         </a>
                            <p class="article-text">${value.abstract}</p>
                        </li>
                    `);
                    })
                }).fail(function () {

                    // preload gif set to hide
                })
                .always(function () {
                   
                    // working with the preload gif set to show
                });

        }// end of if statement

    });// end of on change
});