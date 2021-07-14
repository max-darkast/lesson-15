class FormControl {
  validate(fName, lName) {
    if (fName.value.length === " " || lName.value.length === " ") {
      this.getError(fName, lName);
    } else {
      console.log("fields look good");
    }
  }

  send(fName, lName) {
    return `${fName.value} ${lName.value}`;
  }

  getError(fName, lName) {
    fName.classList.add("_error");
    lName.classList.add("_error");
  }

  changeName(fName, lName, guestName) {
    this.validate(fName, lName);
    let fullName = this.send(fName, lName);
    guestName.innerHtml = fullName;
  }

  destroy(fName, lName, guestName) {
    fName.value = "";
    lName.value = "";
    guestName.innerText = "guest";
  }
}
export const form = new FormControl();
