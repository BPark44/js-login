class Auth {
  constructor() {
    document.querySelector("body").style.display = "none"; // This ensures that a glimpse is never given into the dashboard
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
  }

  validateAuth(auth) {
    if (auth != 1) {
      window.location.replace("/");
    } else {
      document.querySelector("body").style.display = "block"; //This reinstates the page upon authentication
    }
  }

  logOut() {
    const auth = localStorage.removeItem("auth");
    window.location.replace("/");
  }
}
