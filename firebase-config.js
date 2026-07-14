// ⚠️ IMPORTANT: This is a NEW, SEPARATE Firebase project for the Nijo Castle tour.
// Do NOT reuse the "osaka-castle-tour" project or its config here.
//
// Steps to fill this in:
// 1. Go to https://console.firebase.google.com/
// 2. Click "Add project" (with the same Google account as before is fine —
//    it just needs to be a DIFFERENT project, e.g. named "nijojo-tour")
// 3. Once created, go to Build > Realtime Database > Create Database
//    - Choose a region close to Japan (e.g. asia-southeast1, same as before is fine)
//    - Start in test mode for now (we'll lock down rules later)
// 4. Go to Project Settings (gear icon) > General > Your apps > Add app > Web (</>)
// 5. Register the app (nickname e.g. "nijojo-tour-web") and copy the config object below

const firebaseConfig = {
  apiKey: "AIzaSyCiuXt3jLmxatl2bHanvOkCymV6pmSjtyI",
  authDomain: "nijojo-tour.firebaseapp.com",
  databaseURL: "https://nijojo-tour-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nijojo-tour",
  storageBucket: "nijojo-tour.firebasestorage.app",
  messagingSenderId: "57401388270",
  appId: "1:57401388270:web:da637f16a248af0d7dd7ff",
  measurementId: "G-0TEBYXKRTD"
};

// Realtime Database path used for this tour's sync state.
// Kept distinct from Osaka Castle's paths ("siege_tour" etc.) by design.
const DB_PATH = "nijojo_tour/state";
