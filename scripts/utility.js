const allBtn = document.getElementsByClassName("add-btn");

for (const Btn of allBtn) {
  ticketBtn.addEventListener("click", function (e) {
    console.log(ticketBtn.parentNode);
  });
}
