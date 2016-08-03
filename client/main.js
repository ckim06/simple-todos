import angular from 'angular';
import angularMeteor from 'angular-meteor';
import '../imports/components/googleMap/googleMap';


angular.module('crimeApp', [
  angularMeteor,
  'googleMap'
]);
