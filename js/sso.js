function onSignIn(googleUser) {
              var profile = googleUser.getBasicProfile();
              console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
              console.log('Name: ' + profile.getName());
              console.log('Image URL: ' + profile.getImageUrl());
              console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

              $("#profileinfo").append("<h2>Sup " + profile.getName() + ", welcome home my friend</h2>");
              $("#profileinfo").append("<img style='width:250px;height:250px' src='" + profile.getImageUrl() + "'><br><br>");
              $("#profileinfo").append("<p>Your email is: " + profile.getEmail() + "</p>");

}

function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
}

function signOut() {
               var auth2 = gapi.auth2.getAuthInstance();
               auth2.signOut().then(function () {
                 console.log('User signed out.');
               $("#profileinfo").empty();
               $("#profileinfo").append("<h2>Goodbye old friend</h2>");
               });
}

