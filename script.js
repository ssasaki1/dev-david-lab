$(document).ready(function () {
  let battery = 0;

  $('#pushBtn').on('click', function () {
    if (battery < 100) {
      battery += 20;　
      $('#batteryLevel').text(`${battery}%`);
      $('#batteryLevel').css('background', `linear-gradient(to top, lightyellow ${battery}%, lightgray ${battery}%)`);
      if (battery === 100) {
        $('#gameState').text('You win! Battery is fully charged!');
      }
    }
  });

  $('#resetBtn').on('click', function () {
    battery = 0;
    $('#batteryLevel').text('0%');
    $('#batteryLevel').css('background', 'lightgray');
    $('#gameState').text('');
  });
});