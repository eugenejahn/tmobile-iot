const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const cors = require('cors');
const app = express();


var db = admin.database();
var ref = db.ref("tmobile");

var positionRef = ref.child("position");

function insertValue(){
  return positionRef.push().set({
    latitude: 47.578682,
    longitude: 122.166860117,
    date: Date.now()
  });

}

function getAllLocation(){
  return positionRef
     .once('value')
}

app.use(cors({ origin: false }));

app.post('/', (req, res) => {insertValue().then(r => res.send('success'))});
app.get('/', (req, res) => {getAllLocation().then(r => res.send(r))});


exports.nolostLove = functions.https.onRequest(app);
// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });
