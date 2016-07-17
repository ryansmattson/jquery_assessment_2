$(function(){

  var numberOfClicks = 0;

  $('.click-me').on('click', function(event){
    event.preventDefault();

    console.log('click me button');

    numberOfClicks += 1;

    $('body').append('<div class="button-div" data-button-toggle="1">Here are the number of clicks: ' + numberOfClicks +
                        '<button class="change-color-button btn-lg">Change Color</button>' +
                        '<button class="remove-button btn-lg">Remove</button>' +
                        '</div>');
  })

  $('body').on('click', '.change-color-button', function(event){
    event.preventDefault();

    dataAttribute = $(this).parent().data('button-toggle');

    console.log('data-attribute:', dataAttribute);

    if (dataAttribute == 1){
      $(this).parent().css('background-color', 'red');
      $(this).parent().data('button-toggle', 2);
    }
    if (dataAttribute == 2){
      $(this).parent().css('background-color', 'green');
      $(this).parent().data('button-toggle', 1);
    }
  })

  $('body').on('click', '.remove-button', function(event){
    event.preventDefault();

    $(this).parent().remove();
  })

})//end
