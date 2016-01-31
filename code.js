$(document).ready(main);

var runOnce = false;

function main() {

    function getCamperNews() {
        $.getJSON('http://www.freecodecamp.com/news/hot', function(news) {
            formatNews(news);
        })
    }

    function formatNews(news) {
        var ctr = Math.min(24, news.length);
        for (var i = 0; i < news.length; i++) {
            var current = news[i];
            var html = "<div class='col-md-3 entry'>";
            html += "<img src='" + current.author.picture + "' class='img-responsive img-circle headshot' /><br>";
            var headline = (current.headline.length > 28) ? current.headline.substring(0, 28) + '...' : current.headline;
            html += "<a href='" + current.link + " class='headline'><span class='headline'>" + headline + "</span></a><br>";
            html += "<span class='author'>by " + current.author.username + "</span><br>";
            html += "<span class='upvotes'> " + current.upVotes.length + "</span>";
            html += "</div>";
            $('.camperNews').append(html);
        }
    }

    if (!runOnce) {
        getCamperNews();
        runOnce = true;
    }

}