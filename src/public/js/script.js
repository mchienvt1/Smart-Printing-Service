// Show Alert
const showAlert = document.querySelector("[show-alert]");
if(showAlert) {
  const time = parseInt(showAlert.getAttribute("data-time"));
  const closeAlert = showAlert.querySelector("[close-alert]");

  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, time);

  closeAlert.addEventListener("click", () => {
    showAlert.classList.add("alert-hidden");
  });
}
// End Show Alert

// search printer
// Filter
var state = [];
let url = new URL(window.location.href);


var cbs = document.querySelectorAll('[name="checkboxFilter"]');

for (i = 0; i < cbs.length; i++) {
  cbs[i].addEventListener("click", function() {
    // Take URL 
    const [URL, qm] = url.href.split("?")
    if(qm) {
      var arrayQm = qm.split("=")
      if (arrayQm[0] == "keyword") url.href = URL + '?' + qm.split("&")[0];
      else url.href = URL + '?';
    } else url.href = URL + '?';

    // Add Array 
    const [filterKey, filterValue] = this.value.split("-");
    if (this.checked) {
      if (filterKey == "state") {
        state.push(filterValue);
      }
    }

    if(state.length > 0) {
      for (i = 0; i < state.length; i++) {
        url.href += "&state=" + state[i];
      }
    }
    window.location.href = url.href;
  })
}