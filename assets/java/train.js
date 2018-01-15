
 //Using firebase.
    var config = {
    apiKey: "AIzaSyDmvfGdZ4y0A6G2tBiNClVuPxiKAUVU3tU",
    authDomain: "train-time-6db2e.firebaseapp.com",
    databaseURL: "https://train-time-6db2e.firebaseio.com",
    projectId: "train-time-6db2e",
    storageBucket: "train-time-6db2e.appspot.com",
    messagingSenderId: "1024535833041"
  };
  

    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();

    // Initial Values
    var train = "";
    var place = "";
    var next = 0;
    var arrival = "";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();
      
      // Grabbed values from text-boxes
      name = $("#trainInput1").val().trim();
      email = $("#placeInput1").val().trim();
      age = $("#nextInput1").val().trim();
      comment = $("#arrivalInput1").val().trim();

      // Code for "Setting values in the database"
      database.ref().push({
        train: train,
        place: place,
        next: next,
        arrival: arrival
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      

      // Change the HTML to reflect
      $("#trainInput1").text(snapshot.val() .train);
      $("#placeInput1").text(snapshot.val().place);
      $("#nextInput1").text(snapshot.val() .next);
      $("#arrivalInput1").text(snapshot.val() .arrival);
});
      // Handle the errors
   // function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);
    // });

