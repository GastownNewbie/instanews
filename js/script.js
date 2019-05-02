// connect to NYT API for news articles



$('#news-select').on('change', function () {
    const selected = $(this).val();
    if (selected !== '') {
        console.log('change');
        console.log('The value you picked is: ' + selected);

        $.ajax({
            method: 'get',
            url: 'https://api.nytimes.com/svc/topstories/v2/' +  selected + '.json?api-key=IUALhLCmsVYpEVPVBz1PSFSRnqPN2qpJ'


        })
            .done(function (data) {
                console.log(data);
                $.each(data.results, function (index, value) {
                    $(".news-articles").append(`
                        <li>
                            <h3>${value.title}</h3>
                            <p>${value.abstract}</p>
                            <p>${value.multimedia, [0]}</>
                        </li>
                    `);
                    console.log(value);
                })
            }).fail(function () {
                console.log('fail');
            });

    }// if selected !== ''
});// on change event
//<img src=${value.url}>
