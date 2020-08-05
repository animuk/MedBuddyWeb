// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days });
    };
    
}]);

weatherApp.service('patientService', ['$resource', function($resource) {
   
    this.GetPatient = function() {
        var patientAPI = $resource("https://d4i3z5rbvi.execute-api.us-east-1.amazonaws.com/default/patientservicefunc");

        patientResult = patientAPI.get({ TableName: 'Patient_Data' });
        console.log(patientResult);
    
        return patientResult
    };
    
}]);