import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");

// let promiseOfModal = new Promise(function (resolve) {
//   window.setTimeout(function () {
//     resolve(modal);
//   }, 1000 * 60);
// });
function resolveAfter60Seconds() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(modal);
    }, 1000 * 60);
  });
}

const promiseOfModal = async () => {
  const result = await resolveAfter60Seconds();
  console.log("User has been on the page for 60 seconds", result);
  modal.style.display = "block";
};
promiseOfModal();

// promiseOfModal.then(function (val) {
//   console.log("User has been on the page for 60 seconds");
//   val.style.display = "block";
// });

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});
