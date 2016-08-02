import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './map.html';
class MapCtrl {
    constructor($scope) {
        $scope.viewModel(this);
}

export default angular.module('map', [
  angularMeteor
])
  .component('map', {
      templateUrl: 'imports/components/map/map.html',
      controller: ['$scope', MapCtrl]
  });
