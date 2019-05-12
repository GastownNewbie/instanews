! [Image](https://www.theparisreview.org/blog/wp-content/uploads/2014/10/ntnyt.jpg)

# Insta News Project
Insta News draws the API from the New York Times to display the latest articles, by topic. This website is project number three for my intensive course in web development at Red Academy. Brief note: the NY Times limits the articles you may view to five per month, if you are not a subscriber. 


## Built With
- JQuery
- SASS


## Getting Started
Sign up for a developer account with the NY Times and get your own API:
[https://developer.nytimes.com/](https://developer.nytimes.com/)

It was an amazing discovery to me to learn how to use JQuery to select articles, in the categories of your choosing.

const selected = $(this).val();
        if (selected !== '') {
            $.ajax({
                method: 'get',
                url: 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json?api-key=IUALhLCmsVYpEVPVBz1PSFSRnqPN2qpJ'


## Contact
Gay Stephenson [@gaystephenson](https://twitter.com/gaystephenson)

Project Link [https://github.com/GastownNewbie/instanews.git](https://github.com/GastownNewbie/instanews.git)

## Acknowlegments
Thanks to our patient and talented teachers, Jim Bennett and Ben Organ.