# Simple Node Web Server

Sometimes, I don't want to configure Apache or Tomcat to run a pure javascript web application. In those cases, I use this simple node web server.

## Install

```
git clone https://github.com/anserran/simplenodeserver.git // Clone the repository
cd simplenodeserver
npm install // Install dependencies
node app // Start the server
```

## Running the web app

Now, you only need to create symbolic links in the public folder to execute javascript applications. For example, if you have a game compiled wiht libgdx GWT-Backend, and the output is in ~/mygame/gwt/war, you just:

```
ln -s ~/mygame/gwt/war /path/to/simplenodeserver/repostiory/public/mygame
```

Now, you can access the game web application in locahost:3000/mygame

