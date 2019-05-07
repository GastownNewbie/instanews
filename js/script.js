// connect to NYT API for news articles



$('#news-select').on('change', function () {
    $('.header').addClass('shrink');
    $('.site-main').addClass('grow');
    $(".logo").addClass("margin")

    const selected = $(this).val();
    if (selected !== '') {
        // console.log('change');
        // console.log('The value you picked is: ' + selected);
        //:selected $('value.text').val('');


        $.ajax({
            method: 'get',
            url: 'https://api.nytimes.com/svc/topstories/v2/' +  selected + '.json?api-key=IUALhLCmsVYpEVPVBz1PSFSRnqPN2qpJ'


        })

       
            .done(function (data) {
                // preload gif set to hide
                $('.news-articles').empty();

            const filteredData = data.results.filter(function(article){
                    return article.multimedia[4] !== undefined;}).slice(0, 12);



            
 
                $.each(filteredData, function (index, value) {
                    $(".news-articles").append(`
                        <li class="article">
                         <a href="${value.url}" target="_blank">
                         <img class="article-pic" src="${value.multimedia[4].url}"/>
                         </a>
                            <p class="article-text">${value.abstract}</p>
                        </li>
                    `);
                    

                    console.log(value);
                })
            }).fail(function () {
                console.log('fail');
                // preload gif set to hide
            })

            .always(function(){
                // working with the preload gif set to show
              });
           

    }// if selected !== ''
});// on change event



//Bits of the puzzle I may need to come back to:
//<img src = ${value.url}>
// <h3>${value.title}</h3>
//<p><img src = ${value.url}></p>
// note to self, throwing an error re url with arts, business, science, politics but not with other two categories selected??
