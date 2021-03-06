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

## section5: customise header component

1.  create a header class component
2.  add materialize css and show react style on materialize UI. however since its all js based styling its difficult to customize when compared to css styling
3.  add npm install materialize-css@next to client package.json
4.  check if materialize is installed in node modules and import the materialize.min.css and import in index.js

## section 6: show current user on Login

1.  add container to div on App component
2.  check if user is logged in
3.  add a route(api/current_user) to auth.js in server
4.  how data is fetched into react-redux app
5.  Create an action creater that makes ajax call to api/current_user on express server: refer slide 58
6.  add proxy rules for current user api
7.  install axios library: to make ajax call to server and redux thunk to maintain asynchronous actions
8.  install these libraries in client

## section 7: Redux Thunk

1.  Add reduxThunk to index.js
2.  create action/index.js - action creaters
3.  update client package.json to handle api/current_user proxy : use api/\* to direct anything followed by api to be directed to route 5000
4.  generate action creators
5.  add action creator (fetchUser) to app component - find the location whch cares about user logged in:(since user login featured is checked across the app, App.js is the best place to include fetchUser action creator)
6.  Refer the slide: React API call to server, data fetched and state updated
7.  start the server $ npm run dev
8.  notice in the console the react dispatch action with the type fetch_user and the payload with the google login info

## section 7b: check return state from reducer - change the content on header absed on if the user is logged in or not

1.  Note: eg: User log in process will take a while than expected sometime based on say netwrok speed, under this circumstance what needs to be shown say on the header component needs to be determined: hence we need to hadle three situation from redux: ref slide: Reducer return state: User Login Check

## section 8: How to connect a component to redux store and fetch auth piece of state to find if user is logged in or not

1.  import connect helper from redux store
2.  define map state and props function
3.  define pieces of info that we care about in the function: for example in this case it would be the auth state
4.  Note: update the internet speed next to online tab in network section.
    a. log out and log back in: notice the content on the left corener of the header changes from from logged out -> still deciding - log-in: this rapid change of content is not good for the user, they would have no clue whats happening:
    Soultion

## section 9: Landing page component:

1.  Update the logo on the header with the link tag to navigate to a different route rendered by react router: note: Link tag is a inbuilt library from react router

## section 10: Stripe

1.  Make checkout stripe lib work well with react https://github.com/azmenak/react-stripe-checkout/blob/master/package.json
2.  cd client
3.  npm install --save react-stripe-checkout
4.  stripe api keys:
5.  cd ..
6.  npm run dev
    5: put api keys at right place on server side and client side:
7.  server side-> congig-> dev and prod
8.  on front end of app : we have es2016 modules -> on es2015 we cant execute any logic to check if dev or production before importing:
    eg: if (prod) {
    import 'prod'
    } else {
    import 'dev'
    }
    this is not allowed.
9.  solution : client side only cares about PublishableKey

- create react app environment variables
  https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables
  Note: You must create custom environment variables beginning with REACT*APP*

10. create 2 files in client directory:
1.  .env.development
1.  .env.production

11) react stripe checkout: https://github.com/azmenak/react-stripe-checkout/blob/master/package.json

12. implement Payment.js
13. after clicking pay with card notice the object in console. onky the last 4 digits of card is received not entire. if you ever want to verify the user in your app you can only use those 4 digits but you will never have access to the entire credit card

14. find npm packages on https://www.npmjs.com/
    https://stripe.com/docs/api?lang=node
    get the charge object : https://stripe.com/docs/api/charges/object?lang=node

15. on the server side:
    1.  run npm install--save stripe
    2.

## note:

1.  react-stripe-checkout is used on client side to implement the button, get the card details and the token generated is passed on to the server side stripe

## Section 12: Add credits to User

1.  run npm install --save body-parser
2.  handletoken function at the client side call post method ('/billing/api/stripe') which calls a backend server to capture the info from the stripe checkout form
3.
