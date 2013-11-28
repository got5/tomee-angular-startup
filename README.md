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

Without building the angular app

	mvn clean package tomee:run -P skipFrontBuild


open your browser at http://localhost:8080/

The rest api is accessible from /api and the web app is at / 


Front Developpement: wihtout redeploy on tomee
-------------------

The code of the web project is located at src/main/web/  

The idea here is to  use a nodejs based web server to host the front app on a different port during developpement.

With this configuration, you don't need to bother with live reloading in the java environnement. Indeed, there is a proxy configured to redirect all requests from localhost:9000/api to localhost:8080/api allowing you to hit the Tomee REST API without further configuration.



You need to configure and download some dependencies and tools. To be able to run all this,  Node, Bower, Grunt are required. 


Some of those can be install from Node.

	sudo npm install -g yo grunt-cli bower karma
	sudo npm install -g generator-angular generator-karma

### Note that those command are already done from maven compile phase.

	
	npm install
	bower install



Ok, now just launch the server with : 

	grunt server

and your application start on port 9000.

Build the Angular App
---------------------

What I mean by build is update the web app in the maven java EE project (src/main/webapp) from code locate at (src/main/web) and prepare the web app for production.

This is done when you package your app with maven 

you can also do this from the sr/main/web directory by asking grunt

	grunt build --f



[node]: http://nodejs.org "NodeJs"
[karma]: http://karma-runner.github.io "Karma"
[phantomjs]: http://phantomjs.org/ "PhantomJS"
[yo]: http://yeoman.io/ "Yeoman"
[grunt]: http://gruntjs.com/ "Grunt"
[bower]: https://github.com/bower/bower "Bower"
[generator-angular]: https://github.com/yeoman/generator-angular
[tomee rest-example]: http://tomee.apache.org/examples-trunk/rest-example/README.html 

