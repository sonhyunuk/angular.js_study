angular
  .module('app')
  .config(['$stateProvider', '$ocLazyLoadProvider', function ($stateProvider, $ocLazyLoadProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: '../../layout/full.html'
      })
      .state('app.components', {
        url: "/components",
        template: '<ui-view></ui-view>'
      })
      .state('app.components.table', {
        url: "/user",
        templateUrl: '../../pages/user/user.html',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['../../pages/user/user.js']
            });
          }]
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/pages/auth/login/login.html'
      })
  }]);