function unlockPricing() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter name and email");
    return;
  }

  document.getElementById("pricing").classList.remove("hidden");
  window.location.href = "#pricing";
}
