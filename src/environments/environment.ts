// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyBjFx-huVHSDkIaBDH3QMMXJFV8CtlNXUI',
      authDomain: 'todo-list-app-firebase.firebaseapp.com',
      databaseURL: 'https://todo-list-app-firebase.firebaseio.com',
      projectId: 'todo-list-app-firebase',
      storageBucket: 'todo-list-app-firebase.appspot.com',
      messagingSenderId: '477606101879',
      appId: '1:477606101879:web:acebbe3b875d17fa0c9772'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
