//Choix de la pierre
const pierre = document.getElementById("pierre");
//Choix de la feuille
const feuille = document.getElementById("feuille");
//Choix du ciseau 
const ciseau = document.getElementById("ciseau");

scoreJoueur = 0;
scoreOrdinateur = 0;

//Choix du reset
const resetButton = document.getElementById("reset");

// Evenement de clic pour la pierre
pierre.addEventListener("click", updateScoreJoueur);

// Evenement de clic pour la feuille
feuille.addEventListener("click", updateScoreJoueur);

// Evenement de clic pour le ciseau
ciseau.addEventListener("click", updateScoreJoueur);

//Evenement de clic pour un reset
resetButton.addEventListener("click", function () {
  location.reload(); // Recharge la page pour réinitialiser le jeu
});

function Score() {
  if (resultat.innerText === "L'utilisateur remporte la manche !") {
    scoreJoueur++;
  }
  else if (resultat.innerText === "L'ordinateur remporte la manche !") {
    scoreOrdinateur++;
  }
}

//Affichage du résultat
const resultat = document.getElementById("resultat");

// Fonction pour mettre à jour l'affichage
function updateScoreJoueur() {
  const choixJoueur = this.id; // Récupère l'id de l'élément cliqué (pierre, feuille ou ciseau)
  const choixOrd = genererChoixOrdinateur();

  affichageChoixJoueur.innerText = choixJoueur;
  affichageChoixOrdinateur.innerText = choixOrd;

  determinerGagnant(choixJoueur, choixOrd);
  console.log("Choix du joueur : " + choixJoueur);
  console.log("Choix de l'ordinateur : " + choixOrd);
}

// On cible l'endroit où le texte doit s'afficher dans le HTML
const affichageChoixJoueur = document.getElementById("affichageChoixJoueur");
const affichageChoixOrdinateur = document.getElementById("affichageChoixOrdinateur");

// Fonction pour générer le choix de l'ordinateur
function genererChoixOrdinateur() {
  const choixDisponibles = ["pierre", "feuille", "ciseau"];
  const choixAleatoire = Math.floor(Math.random() * choixDisponibles.length);
  return choixDisponibles[choixAleatoire];
}

// Fonction pour déterminer la logique du jeu 
function determinerGagnant(choixJoueur, choixOrdinateur) {
  if (choixJoueur === choixOrdinateur) {
    resultat.innerText = "Egalité !";
  }
  else if (choixJoueur === "pierre" && choixOrdinateur === "ciseau")
    resultat.innerText = "L'utilisateur remporte la manche !";
  else if (choixJoueur === "feuille" && choixOrdinateur === "pierre")
    resultat.innerText = "L'utilisateur remporte la manche !";
  else if (choixJoueur === "ciseau" && choixOrdinateur === "feuille")
    resultat.innerText = "L'utilisateur remporte la manche !";

  else if (choixOrdinateur === "pierre" && choixJoueur === "ciseau")
    resultat.innerText = "L'ordinateur remporte la manche !";
  else if (choixOrdinateur === "feuille" && choixJoueur === "pierre")
    resultat.innerText = "L'ordinateur remporte la manche !";
  else if (choixOrdinateur === "ciseau" && choixJoueur === "feuille")
    resultat.innerText = "L'ordinateur remporte la manche !";
}



