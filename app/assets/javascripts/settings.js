$(document).ready(function() {

// settings
    $("input[name=campaign]").change(function() {
        var selection =$(this).val();
        var charity_text = $("#"+selection).html();
        $("#charity_text").val(charity_text);
        $("#charity_name").val(selection);
    });
});