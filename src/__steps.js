/**
 *    ----------------------------------------
 *    -----------   INITIAL SETUP  -----------
 *    ----------------------------------------
 * 1. visit:console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app(create config)
 * 4. install firebase $ npm install firebase
 * 5. add config file to your project 
 * 6. Don't share firebase to public by pushing third party apps
 *    ----------------------------------------
 *    -----------   INTEGRATION  -------------
 *    ----------------------------------------
 * 7. visit: Docs > Build > Authorization > Web > Get Started
 * 8. export app from firebase.console.js : export default app
 * 9. Login.jsx: import get auth from firebase/auth
 * 10. Create const auth = get auth(app)
 *    ----------------------------------------
 *    ----------   PROVIDER SETUP  -----------
 *    ----------------------------------------
 * 11. visit : Docs > Build > Authorization > Web > google
 * 12. Login.jsx: import GoogleAuthProvider from firebase/auth
 * 13. create const provider = new GoogleAuthProvider()
 * 14. use signInWithPopup and pass auth and provider
 * 15. activated sign in method (google, facebook, twitter)
 * 16. 
 */