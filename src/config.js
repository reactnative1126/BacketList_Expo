import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDppX7xLFTZGl_PIzeCwz5AiYIylcWukxw",
    authDomain: "bucketlist-ec5b6.firebaseapp.com",
    databaseURL: "https://bucketlist-ec5b6.firebaseio.com",
    projectId: "bucketlist-ec5b6",
    storageBucket: "bucketlist-ec5b6.appspot.com",
    messagingSenderId: "672384743425",
    appId: "1:672384743425:web:20fbfe9cb53bdc34a22800",
    measurementId: "G-10ZMZ3ZGTS"
};
// authDomain, databaseURL, storageBucket, messagingSenderID, appID, measurementID are probably wrong and were directly copied from Isabella's spike exercise
let app = Firebase.initializeApp(config);
export const db = app.database();