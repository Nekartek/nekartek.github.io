$(document).keydown(function(e){
    switch(e.which) {
        case 37:
            if($('.arrow-icon.left-icon')){
                $('.arrow-icon.left-icon').click();
            }
            break;
        case 39:
            if($('.arrow-icon.right-icon')){
                $('.arrow-icon.right-icon').click();
            }
            break;
    };
});