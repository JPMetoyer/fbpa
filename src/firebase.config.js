import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'




const firebaseConfig = {
    apiKey: "AIzaSyCpJu2qgqDB_bWOx_RqXGQ100OWqwaM4aQ",
    authDomain: "gamedaygrillz-7d975.firebaseapp.com",
    databaseURL: "https://gamedaygrillz-7d975-default-rtdb.firebaseio.com",
    projectId: "gamedaygrillz-7d975",
    storageBucket: "gamedaygrillz-7d975.appspot.com",
    messagingSenderId: "950769713989",
    appId: "1:950769713989:web:46184e0dd811fd48ed342c"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};