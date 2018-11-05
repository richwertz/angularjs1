var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'


]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/partials/ArtistDirectory_search.html',
            controller: 'SearchController'
        })
        .when('/details/:itemId', {
            templateUrl: 'js/partials/ArtistDirectory_details.html',
            controller: 'DetailsController'
        });
}]);

/*

So, routeProvider is going to be set up right here. When the URL is just a slash, it's going to load up this template and that template is going to be managed by this controller. Let's go ahead and save this. And hopefully, we've done everything correctly. And when we take a look at our page, voilà, it looks exactly the same as before. But notice that now when I load my page we actually get a URL that has slash at the end and even a pound sign.

So, this is a little bit different. Everything after the hashtag is the route that we're currently using. And you can see that there's a slash here. So, that is the default sort of slash, and when we use that slash it's going to load up my HTML from this file, and it's going to load up my controller from this object right here. And that object of course is what I defined in controllers.js. There it is right here.

    And what this means is that, if we want to, We can actually specify different URLs. So, say if I modify this to list ... I want to save that. And notice that now when I just go to the homepage it's not doing anything, but if I type in list as the URL it's going to show me the list. And that means that I can define different URLs and ask them to do different things depending on the content that I want to show. And that's really powerful. Let's go ahead and switch this back to the main URL.

    And we'll come back here, and we'll delete this list part of the URL. So, you can see that that is really powerful because we can have different URLs mean different things, and load up different content as well as be controlled by different controllers.

*/

/*

var myApp = angular.module('myApp', [*this area is for dependencies*]);

*/



