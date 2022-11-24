const auth = new Auth();

// Event listener to log out of the page when the logout button is clicked
document.querySelector(".logout").addEventListener("click", (e) => {
  auth.logOut();
});
