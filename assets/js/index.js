const $ = document.querySelector.bind(document);
const $S = document.querySelector.bind(document);
const modalSignin = $(".modal-signin");
const modalSignup = $(".modal-signup");
const modalSigninContainer = $(".modal-signin-container");
const modalSignupContainer = $(".modal-signup-container");
const modalCloseSignin = $(".close-signin");
const modalCloseSignup = $(".close-signup");
const menunav = $(".nav");
const signup = $("#btn-signup");
const signin = $("#btn-signin");
const iconmenus = $(".s-icon-menu");
const menuhide = $(".menu-hide");
const menuhidecontainer = $(".menu-hide-container");
const lycf = $(".img-lycf");

isSign = false;

function showModal(modal) {
  modal.classList.add("open");
}

function hideModal(modal) {
  modal.classList.remove("open");
}
// Xử lý login
signin.onclick = function () {
  showModal(modalSignin);
};
modalSignin.onclick = function () {
  hideModal(modalSignin);
};
modalSigninContainer.onclick = function (e) {
  e.stopPropagation();
};
modalCloseSignin.onclick = function () {
  hideModal(modalSignin);
};
// Xử lý signup
signup.onclick = function () {
  showModal(modalSignup);
};
modalSignup.onclick = function () {
  hideModal(modalSignup);
};
modalSignupContainer.onclick = function (e) {
  e.stopPropagation();
};
modalCloseSignup.onclick = function () {
  hideModal(modalSignup);
};
//
iconmenus.onclick = function () {
  menuhide.classList.add("open");
};
menuhide.onclick = function () {
  menuhide.classList.remove("open");
};

// function changeImg() {
//     var index = 1
//     var imgs = [
//         "/assets/imgs/ly1.png",
//         "/assets/imgs/ly2.png",
//         ""
//     ]
//     lycf.src = imgs[index]
//     index++
//     if (index > 1) {
//         index = 0

//     }
// }
// lycf.onclick = function() {
//     changeImg()
// }
