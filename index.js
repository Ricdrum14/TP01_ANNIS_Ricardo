


//pour la confirmation du mot de passe
document.querySelector("form").addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm_password").value;
  
    if (password !== confirm) {
      e.preventDefault(); // empêche l’envoi
      alert("❌ Les mots de passe ne correspondent pas !");
    }
  });

  
const email = document.getElementById("email");

email.addEventListener("blur", () => {
  const regex = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i;
  if (!regex.test(email.value)) {
    alert("⚠️ Merci de saisir un email valide !");
  }
});



const telephone = document.getElementById("telephone");

telephone.addEventListener("input", () => {
  telephone.value = telephone.value.replace(/[^0-9]/g, ""); // supprime les caractères non numériques
});


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.body.innerHTML = `
      <div class="summary">
        <h2>✅ Inscription réussie !</h2>
        <p>Merci de vous être inscrit(e).</p>
      </div>
    `;
  });
  