// Vérification mot de passe
const form = document.querySelector("form");
const button = form.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault(); // empêche l’envoi du formulaire

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm_password").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;

  // Vérif mot de passe
  if (password !== confirm) {
    alert("❌ Les mots de passe ne correspondent pas !");
    return;
  }

  // Vérif email
  const regex = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i;
  if (!regex.test(email)) {
    alert("⚠️ Merci de saisir un email valide !");
    return;
  }

  // Vérif téléphone (uniquement chiffres)
  if (!/^[0-9]+$/.test(telephone)) {
    alert("⚠️ Merci de saisir uniquement des chiffres pour le téléphone !");
    return;
  }

  // Si tout est bon → message succès
  document.body.innerHTML = `
    <div class="summary">
      <h2>✅ Inscription réussie !</h2>
      <p>Merci de vous être inscrit(e).</p>
    </div>
  `;
});
