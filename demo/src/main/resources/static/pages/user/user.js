angular.module('app')
  .controller("ngController", function ($scope,$http) {
    $scope.msgList=[];
      $http({
        method:"get",
        url:"/test",
      }).success(function(data){
        // data를 콘솔에 출력해 보기
        console.log(data);  
        $scope.list = data;
      });
  });
