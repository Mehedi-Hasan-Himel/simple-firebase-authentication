/*
* Steps to use firebase.
* 1. Create a project on console.firebase.google.com
* 2. install firebase $ yarn add firebase
* 3. Register web app in firebase 
* 4. Copy firebase init with config from firebase project settings into a file firebase.init.js
* 5. export default app firebase.init.js
* 6. import getAuth from firebase/auth and create const auth = getAuth(app)
* 7. import app firebase init.js into your app.js
* 8. Turn on google authentication (firebase > authentication > enable google sign in) 
* 9. create googl provider 
* 10. use signInWithPopUp and pass auth and provider 
* 11. handle .then() (if successful) and .catch() error (if error) 
*/
