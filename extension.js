/*global $jquery */
/*global document */
$jquery(document).ready(function () { 
    $jquery('.commit-group .commit-title a.message').each(function() {
        var that = this;
        appAPI.request.get(this.href,
            function(msg) {
                $jquery(that).parent().parent().append($jquery(msg).find('#files').css({marginTop:5}));
            }
        );
    });
});