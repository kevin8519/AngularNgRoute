var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider) {
                
                 $routeProvider.caseInsensitiveMatch=true;
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "Templates/courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "Templates/students.html",
                        controller: "studentsController"
                    })
                
                .otherwise({
            redirectTo: "/home"
        })
             /*$locationProvider.html5Mode(true);*/
            })
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
             .controller("studentsController", function($scope,$route) {
                 
                var students= [
                { name: "Ben", gender: "Male", salary: 55000, city: "London" },
                { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
                { name: "Mark", gender: "Male", salary: 57000, city: "London" },
                { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
                { name: "Todd", gender: "Male", salary: 60000, city: "London" },
            ];

                $scope.students =students;
                 $scope.reLoadData=function(){
                   $route.reload();  
                 }
        $scope.$on("$routeChangeStart", function (event, next, current) {
        if (!confirm("Are you sure you want to navigate away from this page to "
                                                    + next.$$route.originalPath))
        {
            event.preventDefault();
        }
    });                      
             });