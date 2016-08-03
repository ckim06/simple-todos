import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';
import template from './googleMap.html';
class MapCtrl {
    constructor($scope) {
      $scope.name = 'test';
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      }
}

export default angular.module('googleMap', [
  angularMeteor,
  'nemLogging',
  'uiGmapgoogle-maps'

])
  .component('googleMap', {
      templateUrl: 'imports/components/googleMap/googleMap.html',
      controller: ['$scope', MapCtrl],
      bindings: {
        location: '='
      }
  });
