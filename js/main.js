var $form = $('.form');
var $name = $('.main-input');
var $list = $('.list');

$form.on('submit', function (e) {
        e.preventDefault();
    
    var $li = $('<li class="main-list">').html($name.val());
    var $clear = $('<button class="clear">X</botton>');
    
    
$clear.on('click', function () {
    $li.remove('li');
    });
    
    $list.on('click', 'li', function () {
        $(this).addClass('complete');
    
});
    
    $li.append($clear);
    $list.prepend($li);
    $name.val('');
    
});





    
         
         
         
 