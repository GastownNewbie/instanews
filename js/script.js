// connect to NYT API for news articles
$.ajax({
    method: 'get',
    url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=IUALhLCmsVYpEVPVBz1PSFSRnqPN2qpJ'

})
  .done(function(data){
    console.log(data);
    $.each(data.results, function(index, value) {
    $(".news-articles").append(value.section);
        console.log(value);
    })


  }).fail(function(){
      console.log('fail');
  });


  $('#news-select').on('change', function() {
    const selected = $(this).val();
    if (selected !== '') {
      console.log('The value you picked is: ' + selected);
    }
  });
