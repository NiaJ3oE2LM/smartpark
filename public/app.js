angular.module('starter', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
      .when('/map',{
        templateUrl:'/app/map',
        controller:'mapCtrl'
      })
      .when('/about',{
        templateUrl:'/app/about'
        //controller controllerAS
      })
<<<<<<< HEAD
=======
      .when('/user',{
        templateUrl:'/app/user',
        controller: 'userCtrl'
      })
>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
      .when('/contact',{
        templateUrl:'/app/contact'
        //controller controllerAS
      })
      //TODO aggiungere login e user page
<<<<<<< HEAD
      /*.when('/user',{
        templateUrl:'/app/user'
        //controller controllerAS
      })
=======
      /*
>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
      .when('/login',{
        templateUrl:'/app/login'
        //controller controllerAS
      })*/
      .otherwise('/about');
})
