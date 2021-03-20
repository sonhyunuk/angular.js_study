angular
.module('app')
.config(['$stateProvider','$ocLazyLoadProvider', function($stateProvider,$ocLazyLoadProvider) {

    $stateProvider
    .state('app', {
        abstract:true,
         templateUrl: '../../layout/full.html'
    })
    .state('app.components', {
        url: "/components",
        template: '<ui-view></ui-view>'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/pages/auth/login/login.html'
      })
        // resolve: {
        //   loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        //     // you can lazy load controllers
        //     return $ocLazyLoad.load({
        //       files: ['app/pages/auth/login/login.controller.js']
        //     });
          
}]);