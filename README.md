tomee-angular-startup
==================

Based on the tomee rest-example at : [tomee rest-example]


### Requirement

* [NodeJS][node]
* [Karma][karma]
* [Grunt][grunt]
* [Bower][bower]


Usage 
-----
For now, if you are working on windows, please run it from cmd and not from git bash, cygwin or what else.



	mvn clean package tomee:run

The rest api is accessible from /api.
Open your browser at http://localhost:8080/.
	

Without building the angular app:

	mvn clean package tomee:run -P skipFrontBuild



Front Developpement: wihtout redeploy on tomee
-------------------

The code of the web project is located at src/main/web/.  

The idea here is to  use a nodejs based web server to host the Angular application (on a different port) during developpement.

With this configuration, you don't need to bother with live reloading in the java environnement. Indeed, there is a proxy configured to redirect all requests from localhost:9000/api to localhost:8080/api allowing you to hit the Tomee REST API without further configuration.


Ok, now just launch the server with : 

	grunt server

The application should start on port 9000.

Build the Angular App
---------------------

What I mean by "build" is :  update the webapp directrory  (src/main/webapp) from the code locate at src/main/web and prepare the web app for production (css,image,javascript minification, ...)

This is done by maven when you are packaging the app. (default profile)

You can also do this from the src/main/web directory by asking grunt.

	grunt build --f



[node]: http://nodejs.org "NodeJs"
[karma]: http://karma-runner.github.io "Karma"
[phantomjs]: http://phantomjs.org/ "PhantomJS"
[yo]: http://yeoman.io/ "Yeoman"
[grunt]: http://gruntjs.com/ "Grunt"
[bower]: https://github.com/bower/bower "Bower"
[generator-angular]: https://github.com/yeoman/generator-angular
[tomee rest-example]: http://tomee.apache.org/examples-trunk/rest-example/README.html 

