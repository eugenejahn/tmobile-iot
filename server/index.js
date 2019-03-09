const result = require('dotenv').config()
const envConfig = result.parsed
var admin = require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://propane-passkey-233318.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("tmobile");

var positionRef = ref.child("position");

function insertValue(){
  positionRef.push().set({
    latitude: 47.578682,
    longitude: 122.166860117,
    date: Date.now()
  });
  return
}

insertValue();

//
//
// ref.on("child_changed", function(snapshot) {
//   var changedPost = snapshot.val();
//   console.log("The updated post title is " + changedPost);
// });
//
// var count = 0;
//
// ref.on("child_added", function(snap) {
//   count++;
//   console.log("added:", snap.key);
// });
