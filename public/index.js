var initialize = function() {
  var coords = {lat:51.50, lng: -0.127};
  var zoom = 10;
  var container = document.querySelector('#world-map');
  var worldMap = new MapWrapper(container, coords, zoom);
  console.log("world map", worldMap);
}

var app = function(){
  var url ='https://restcountries.eu/rest/v2';
  var request = new XMLHttpRequest();
  request.open("GET", url);

  var getData = function() {
    var jsonString = request.responseText;
    var countries = JSON.parse(jsonString);
    console.log("countries", countries);

    regions(countries);
    var regionsList = regionList();
    var allRegions = [ "Africa", "Americas", "Asia", "Europe", "Oceania", "Polar", "Unknown"];
    allRegions.forEach(function(region) {
      // countryListPerRegion(countries, region);
      countrySelect(region, countries);
     
     
    });
    var selectCountry = document.querySelector('select');
    selectCountry.addEventListener('change', handleSelectCountry(countries));
    selectCountry.addEventListener('click',handleSelectCountry);

    // var moreDetails = new CountryDetails();

  }

  request.addEventListener('load', getData);
  

  request.send();

}

  var regions = function(countries) {
    var regions = [];
    var ul = document.getElementById('world-countries');
    countries.forEach(function(country) {
          regions.push(country.region);
        })
  }

  var regionList = function() {
    var regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar", "Unknown"];
    var ul = document.getElementById('world-countries');
    regions.forEach(function(region) {
      var li = document.createElement('li');
      li.classList.add('region');
      li.id =region;
      li.innerText = region;
      ul.appendChild(li);
      console.log("regions", li);
    })
  }

  // var countryListPerRegion = function(countries, region) {
  //   var li = document.getElementById(region);
  //   countries.forEach(function(country) {
  //     var ol = document.createElement('ol');
  //     ol.innerText = country.name;
  //     ol.classList.add('country');
  //     ol.id = country.name;
  //     if ((country.region === region) || (country.region === "" && region === "Unknown")) {
  //       li.appendChild(ol);
  //     }
  //   }) 
  // }

  var countrySelect = function(region, countries) {
    var li = document.getElementById(region);
    var select = document.createElement('select');
    li.appendChild(select);
    countries.forEach(function(country) {
      var option = document.createElement('option');
      option.innerText = country.name;
      option.classList.add('country');
      option.id = country.name;
      if ((country.region === region) || (country.region === "" && region === "Unknown")) {
        select.appendChild(option);
      }
    }) 
    
  }

  var handleSelectCountry = function(countries) {
    countries.forEach(function(country) {
      var option = document.getElementById(country);
      var pTag = document.createElement('pTag');
      option.appendChild(pTag);
      pTag.innerText = country.population;
    })
  }

  
window.addEventListener('load', initialize);
window.addEventListener('load', app);



