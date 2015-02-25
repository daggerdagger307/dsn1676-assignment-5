var $form = $('form');
var $input = $('#input');
var $list = $('.list');

$form.on('submit', function(eventObject) {
        eventObject.preventDefault();

    var $theH1 = $('<h1>');
    $theH1.html($input.val());
    $theH1.append('<button>Button</button>');
    $list.append($theH1);

    $input.val('');
});


         
         
         
         
 