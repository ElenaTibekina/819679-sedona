var link = document.querySelector(".button-search");

var popup = document.querySelector(".modal-search");
var close = popup.querySelector(".button-search");

var form = popup.querySelector("form");
var dateFrom = popup.querySelector("[name=date-from]");
var dateTo = popup.querySelector("[name=date-to]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("date-from");
} catch (err) {
  isStorageSupport = false;
}


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  if (storage) {
    dateFrom.value = storage;
    dateTo.focus();
  } else {
    dateFrom.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!date-from.value || !date-to.value) {
    evt.preventDefault();
    console.log("Введите дату");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("date-from", date-from.value);
  }
}
});
