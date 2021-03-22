angular.module('app')
  .controller("ngController", function ($scope) {
    $scope.arrData = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Orange" },
      { id: 4, name: "Mango" }];
  });
