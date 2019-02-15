var btn = document.getElementById('press');
var p = document.getElementById('p');

var resHandler = function(data) {
  console.log(data);
  p.innerHTML = data.year;
}

var errorHandler = function(err) {
  console.log(err);
  p.innerHTML = 'ERROR!';
}

jQuery.get('http://localhost:3000/api/time', resHandler, errorHandler);
