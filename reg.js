const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function auth(){
  window.location.assign("index.html");
};
// const loginBtn = document.getElementById("login-btn");

// loginBtn.addEventListener("click", () => {
//   window.location.href = 'file:///D:/Projet federe/index.html';
// });

