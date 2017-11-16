My Files
===========
 - A NodeJS application for files' information.
 - ReactJS Application with ServerSideRendering


Run the app from command line

```
DEBUG=myfiles:* npm start
```

### ReactJS on Server
 
 - On Server, this is done with [react-dom-server][3] and `renderToString`
 - On Client, this is done with [ReactDOM.hydrate()][4] instead of `render()`

#### ReactJS rendering on Server

To use React 

```
npm install react react-dom --save
```

To Use JSX

```
npm install babel-register babel-preset-react --save
```

React component [Without ES6][1] is done using [create-react-class][2] module

```
npm install create-react-class --save
```

#### ReactJS rendering on Client

Its the usual client-side setup. In this project the setup is inside `public/javascripts/react/client/` folder. To create the client side application

```
npm install
npm run 2js
npm run pack
```

The setup is inside the `public/javascripts/react/client/package.json` file.
































[1]: https://reactjs.org/docs/react-without-es6.html
[2]: https://www.npmjs.com/package/create-react-class
[3]: https://reactjs.org/docs/react-dom-server.html#rendertostring
[4]: https://reactjs.org/docs/react-dom.html#hydrate


