
$(document).ready(() => {

    $('#mobile_navbar_btn').click(() => {

        if($('#mobile_navbar_wrapper').hasClass('show')) {
            $('#mobile_navbar_wrapper').removeClass('show');
        } else {
            $('#mobile_navbar_wrapper').addClass('show');
        }

    })

});
