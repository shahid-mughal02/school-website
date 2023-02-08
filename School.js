$(document).ready(function(){
    $('.card-header a').click(function(){
        $(this).css('background-color','rgba(0, 0, 0, 0)');
        $(this).css('color','white');
    });
    /* Tooltip */
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    /* For Toat */
    $(function(){
        $('#showBtn').click(function(){
            $('#myToast').toast('show');
        })
        /* $('#hideBtn').click(function(){
            $('#myToast').toast('hide');
        }) */
        });
});