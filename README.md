
<img src="https://www.theparisreview.org/blog/wp-content/uploads/2014/10/ntnyt.jpg"
     alt="picture of a newspaper, title not the new york times"
     style="float: left; margin-right: 10px;" />

# Insta News Project
Insta News draws on the API from the New York Times displaying the latest articles, by topic. The Insta News website is project number three and part of my intensive course in web development at Red Academy. Brief web content note: the NY Times limits the articles you may view to five per month, if you are not a subscriber. 


## Built With
- JQuery
- SASS
- Gulp


## Getting Started
Sign up for a developer account with the NY Times and get your own API:
[https://developer.nytimes.com/](https://developer.nytimes.com/)

Use JQuery to select articles in the categories of your choosing.

`const selected = $(this).val();
        if (selected !== '') {
            $.ajax({
                method: 'get',
                url: 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json?api-key=IUALhLCmsVYpEVPVBz1PSFSRnqPN2qpJ'`


## Contact
Gay Stephenson [@gaystephenson](https://twitter.com/gaystephenson)

Project Link [https://github.com/GastownNewbie/instanews.git](https://github.com/GastownNewbie/instanews.git)


## Acknowlegments
Thanks to our talented and patient teachers, Jim Bennett and Ben Organ.