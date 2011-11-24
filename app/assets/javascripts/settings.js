$(document).ready(function() {
    $(".campaign_radio").click(function(){
        var value = $(this).attr("data-id");
        $("#pledge_campaign_id").val(value);
    });
});