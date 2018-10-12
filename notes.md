## Section 1: Integrate client and server and make the google auth logic implemented work on the react front end

1.  Clone the user-model from storyboard example express app:
2.  create-react-app client in story board server app
3.  Install concurrently
4.  Update Package.json: Run both client and server together
5.  Add the login link on react app
6.  Add the proxy in client/package.json to auto update the express routes path: eg;/auth/google irrespective of wether in local dev or production
7.  Note: when package.json updated: server doesn't auto restart., hence restart the server
8.  notice the error when clicked on sign in with Google
9.  copy the console link from error and update redirect URI to localhost:3000. test after a couple of minutes.
10. Note: in dev mode proxy is needed, however in production mode we don't have to change the proxy server path.
11. reason: In production create react app is not needed, run npm run build to generate a bundle js file which access the express app directly.
12. $ npm run build

### section 2: set up client react

1.  cd client
2.  delete files in src of client except registerService Worker.js
3.  install redux, react-router-dom react-redux
4.  create index.js in client/src
5.  namng convention: If a js file exports component use uppercase eg: App.js, if a js file does not export component use lowercase, eg: index.j
6.  cd back to server
7.  npm run dev

## section 3: Redux

- redux store contains all the states
- import provider from react-redux

## section4: react router

1.  In App.js import from react-router-dom
2.  create dummy components
3.  use react router dom
4.  update the app with browserRoutes and notice the Landing component appear on the hoem page
