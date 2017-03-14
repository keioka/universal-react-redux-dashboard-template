# About Template

This dashboard is created for users who need custom support.

# Goal

Build dashboard which is reuseable.

# TODO
- server side rendering
- serverless
- test
- travis CI
- postcss (*csslint)
- progressive web app
- local

# Dependecies


|Name|Description|
|---|---|
|React|Library for view|
|Redux|state container for JavaScript apps based on flux data flow pattern|
|Express|Sinatra inspired web development framework for node.js|
|Webpack|Module bundler which packs CommonJs/AMD modules|


and more...

# Folder Structure

### public
extracted css files and bundled js file goes here.

I prefered using name "public" over "dist", or "build" because it sounds more traditional and common for all developers.

### src

#### Config
##### - webpack
All webpack config files go here.

##### - firebaseConfig.js

firebaseConfig.js is config file for firebase data base.

```javascript
export const firebaseConfig = {
  apiKey: 'YOUR API KEY',
  authDomain: 'YOUR AUTH DOMAIN',
  databaseURL: 'YOUR DATABASE URL',
  storageBucket: 'YOUR STORAGE BUCKET HERE'
};
```


#### client
`client/index.js` is entry point to bundle all files for client.

#### server
`server/index.js` is entry point to bundle all files for server side rendering.

#### Shared
`/shared` is shared filed with client and server.

- components: Components directory stores UI Elements.

- containers: As separting components which are connected to redux store is best paractice, they are stored inside container.

- layouts: layouts are also components but handle layout part.

- middleware: redux middleware.

- firebase: firebase module here.

- helper: helper is for manipulating data. ex:) date transformation

- redux: redux directory contains auth, chat, customer, organization, and transaction.

#### service

Service directory is optional but neccesary for serverless applications. I use a framework called serverless which is serverless framework and allows us to compose and deploy functions on FaaS service such as AWS lambda.


