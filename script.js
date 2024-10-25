const info = {
  name: "Shun Sasaki",
  game: "Battery Charger Game",
  description: "Charge the battery to 100% to win!",
};

document.getElementById("profile").innerHTML = `
  <p><strong>Name:</strong> ${info.name}</p>
  <p><strong>Game:</strong> ${info.game}</p>
  <p><strong>Description:</strong> ${info.description}</p>
`;

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
