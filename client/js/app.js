console.log('app.js loaded');

angular.module('MiniBlog', []);

angular.module('MiniBlog')
       .controller('BlogsController', ['$scope', '$http', function($scope, $http){

         $scope.blogs = [];
         $scope.newBlog = {};

         $scope.getBlog = function(){
           $http.get('/api/blogs').then(function(response){
             $scope.blogs = response.data
           });
         };

         $scope.createBlog = function(){
           $http.post('/api/blogs', $scope.newBlog).then(function(response){
             $scope.blogs.push(response.data);
             document.getElementById('form').reset();
           })
         };

         $scope.removeBlog = function(blog){
           var url = '/api/blogs/' + blog._id;
           $http.delete(url).then(function(response){
             $scope.getBlog();
           })
         };

         $scope.getBlog();

       }]);
