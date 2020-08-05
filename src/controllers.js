// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService','patientService', function($scope, $location, cityService, patientService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };

    $scope.patientList = patientService.GetPatient();
    //console.log($scope);
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function($scope, $resource, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);