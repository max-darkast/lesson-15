import form from "../lesson 15/module/form";

const $fName = document.querySelector("input[name=first-name]");
const $lName = document.querySelector("input[name=last-name]");
const $guestName = document.querySelector("span[class=text]");

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("send"))
    form.changeName(fName, lName, guestName);

  if (target.classList.contains("clear")) form.destroy(fName, lName, guestName);
});
