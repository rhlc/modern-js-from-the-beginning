// init github
const github = new Github();

// init user
const ui = new UI();

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;
  if (userText !== '') {
    // make http call
    github.getUser(userText).then((data) => {
      console.log(data);
      if (data.profile.message === 'not found') {
        // show alert
        ui.showAlert('user not found', 'alert alert-danger');
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
