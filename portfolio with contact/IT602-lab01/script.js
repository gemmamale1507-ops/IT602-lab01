const body = document.body;
const darkToggle = document.getElementById("darkToggle");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const form = document.getElementById("contactForm");
const cardList = document.getElementById("cardList");

darkToggle.onclick = () => {
  body.classList.toggle("dark");
};

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};

function loadData() {
  const data = JSON.parse(localStorage.getItem("contacts")) || [];
  cardList.innerHTML = "";

  data.forEach(item => {
    cardList.innerHTML += `
      <div class="card">
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Contact:</strong> ${item.contact}</p>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>Message:</strong> ${item.message}</p>
      </div>
    `;
  });
}

form.onsubmit = e => {
  e.preventDefault();
  form.reset();
  alert("Message submitted successfully!");
};

