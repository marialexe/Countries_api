var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

// MapWrapper.prototype = {
//   viewWorldMap:  function() {
//     var ul = document.getElementById('world-countries');
//     var div = document.createElement('div');
//     div.id = "world-map";
//     ul.appendChild(div);
//     }
// }