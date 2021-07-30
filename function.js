window.function = function (input){
  input = input.value;
  return input.AddressInput(InputAutocomplete);
}

  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoAkGCh5TcCPStJ1SvB_-WWLddmnL-tyM&libraries=places&callback=inputAutocomplete" async defer
  
  function inputAutocomplete () {
    autocomplete = new
google.maps.places.Autocomplete(

document.getElementById ('input')
          {
            types: [ '(address)', '(establishment)'],
            componentRestrictions: {
'country': ['US']}
            }
         );

autocomplete.addListener('place_changed',
place_changed);
  }
