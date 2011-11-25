$(document).ready(function() {
    var campaign_id;
    var campaign_ids = [];
    $.each($(".campaign_radio"), function(index, value) {
        var current_id = value.getAttribute('data-id');
        campaign_ids.push(current_id);

        if (localStorage.campaign_id == current_id)
            campaign_id = current_id;
    });

    if (!campaign_id)
        campaign_id = campaign_ids[0];
    
    localStorage.campaign_id = campaign_id;
    $("#pledge_campaign_id").val(campaign_id);
    $('#campaign_' + campaign_id).attr('checked', 'checked');

    $(".campaign_radio").click(function(){
        var value = $(this).attr("data-id");
        localStorage.campaign_id = value;
        $("#pledge_campaign_id").val(value);
    });
});