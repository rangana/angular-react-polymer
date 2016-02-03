# React POC

This is a modified version of React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).

## To use

There in only the nodejs simple server implementations included. It serve static files from `public/` and handle requests to `/api/comments` to fetch or add data. Start the server with one of the following:

### Install bower dependencies

in terminal switch to the public folder where `bower.json` file is located and run following command

```sh
bower install
```

### Install Node dependencies

in terminal switch to the root folder of the project where `package.json` file is located and run following command

```sh
npm install
```

### Run the node server

in terminal switch to the root folder of the project where `server.js` file is located run the following in the command

```sh
node server.js
```

And visit <http://localhost:3000/>. to see the project running

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
