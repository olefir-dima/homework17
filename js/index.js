document.addEventListener("DOMContentLoaded", () => {
  updatePage();
});

function saveName() {
  const nameInput = document.getElementById("nameInput");
  const userName = nameInput.value.trim();

  if (userName !== "") {
    localStorage.setItem("userName", userName);
    updatePage();
  }
}

function removeName() {
  localStorage.removeItem("userName");
  updatePage();
}

function updatePage() {
  const greeting = document.getElementById("greeting");
  const removeBtn = document.getElementById("removeBtn");
  const nameContainer = document.getElementById("nameContainer");
  const nameInput = document.getElementById("nameInput");
  const userName = localStorage.getItem("userName");

  if (userName) {
    greeting.textContent = `Hello, ${userName}!`;
    nameContainer.style.display = "none";
    removeBtn.style.display = "block";
  } else {
    greeting.textContent = "Hi, what is your name?";
    nameInput.value = "";
    nameContainer.style.display = "block";
    removeBtn.style.display = "none";
  }
}
