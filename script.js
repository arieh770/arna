console.log("Site ARNA chargé");
alert("Bienvenue sur le catalogue !");

let compteur = 0;

// on récupère tous les boutons "Ajouter au panier"
const boutons = document.querySelectorAll(".ajout-panier");

// on récupère le compteur dans le header
const compteurSpan = document.getElementById("compteur");

// on ajoute un clic à chaque bouton
boutons.forEach((bouton) => {
    bouton.addEventListener("click", () => {
        compteur++;
        compteurSpan.textContent = compteur;
    });
});