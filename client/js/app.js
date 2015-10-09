console.log('app.js loaded');
// $(document).ready(function(){
//   var colors = ['#0b00d1', '#56adfd', '#ff3727', '#72039f', '#08e3ab', '#ed139d', '#d1013f'];
//   function setColor(){
//     return colors[Math.floor(Math.random()*7)]
//   }
//   $('.entry').css('background-color', setColor(colors));
// });

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
