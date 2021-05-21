// --------------
// TP ALGORITHMIE
// --------------

// CONSEIL 1:
// RELIRE VOS EXERCICES
// ILS FONT OFFICE DE DOCUMENTATION

// CONSEIL 2:
// BIEN LIRE LES ENONCES

// --------------
// Exercice 01______OOOKKKKK_____
// --------------

// Créer une fonction, qui prendra en paramètre deux nombres
// Et qui affichera dans le terminal la multiplication de ces 2 nombres
// Exemple: mult(5, 3) => nous affichera 15

// function multiply(a, b) {
//   console.log(a * b);
// }
// multiply(5, 3);
// --------------
// Exercice 02____OOOOKKKKK______
// --------------

// Déclarer un array, avec plusieurs nombres
// ex: [1, 8, 588, 64, 25]
// Afficher dans le terminal, chaque nombre multiplié par 4
// var array = [1, 8, 588, 64, 25];
// for (i = 0; i < array.length; i++) {
//   array[i] = array[i] * 4;
// }
// console.log(array);
// --------------
// Exercice 03_____OKKKK_______
// --------------

// Créer un objet avec pour clés votre prénom et votre age (vous avez le droit de tricher pour votre age).
// Exemple:
// var user = {
//   firstName: 'Julien',
//   age: 24
// }
// Si la valeur de la clé age est supérieur à 28, afficher dans le terminal ("Je suis dans la fleur de l'age")
// // Sinon, afficher ("Je suis en train de me bonifier")
// var user = {};
// user.prenom = "papa";
// user.age = 5;
// console.log(user);

// user.age > 28
//   ? console.log("Je suis en train de me bonifier")
//   : console.log("je suis dans la fleur de l'age");
// --------------
// Exercice 04____OKKKKK____
// --------------

// var users = [
//   {
//     firstname: "john",
//     age: 34,
//   },
//   {
//     firstname: "clara",
//     age: 26,
//   },
//   {
//     firstname: "sarah",
//     age: 29,
//   },
// ];

// // A l'aide de cet array
// // Afficher dans le terminal la somme de leur age.

// var ageTotal = 0;
// for (i = 0; i < users.length; i++) {
//   ageTotal += users[i].age;
// }
// console.log("La somme des ages est de :" + " " + ageTotal + " " + "ans");
// --------------
// Exercice 05_____OK_______
// --------------

// Déclarer un array, avec plusieurs prénoms
// ex: ['ikram', 'adline', 'amina', 'miriame']
// Afficher dans le terminal, une String regroupant ces prénoms séparés par --
// ATTENTION: le dernier prénom ne sera PAS suivi de --
// ex: "ikram--adline--amina--miriame"

//  var array = ["ikram", "adline", "amina", "miriame"];

// var str = "";
// for (i = 0; i < array.length; i++) {
//   if (i === array.length - 1) {
//     str += array[i];
//   } else str += array[i] + "--";
// }
// console.log(str);
// --------------
// Exercice 06____OK__________
// --------------

// Créer un array avec plusieurs chiffres/nombres de votre choix
// ex: ([4, 6, 2, 122, 9, 63])
// Créer une fonction qui nous indiquera le nombre le plus petit, ainsi que le plus grand
// Et affichera le résultat dans la console:
// résultat attendu: Le plus petit nombre est ... et le plus grand est ...
// var array = [4, 6, 2, 122, 9, 63];

// var init = array[0];
// var init2 = array[1];

// for (i = 0; i < array.length; i++) {
//   if (array[i] < init) {
//     init = array[i];
//   }
//   if (array[i] > init2) {
//     init2 = array[i];
//   }
// }
// console.log(
//   "Le chiffre le plus petit est " +
//     "" +
//     init +
//     " " +
//     "et leplus grand est " +
//     "" +
//     init2
// );
// --------------
// Exercice07 __OK____
// --------------

// Créer une fonction qui va calculer le nombre de 'a' dans une String
// (afficher le résultat dans le terminal. Exemple: "Il y a ... de lettres 'a' dans la phrase")
// Puis remplacer tous les 'a' d'une String par des 'z'
// ex: "Sayonara! Oui, j'ai des origines japonaises."
// résultat attendu: "Szyonzrz! Oui, j'zi des origines jzponzises."

// var compte = 0;

// function nombreDeFois(str) {
//   var temp = [];
//   var un = "x";
//   for (i = 0; i < str.length; i++) {
//     temp +=
//     compte++;

//     if (str[i]=== "a")
//     temp = str.replace(/a/g, "z");
//   }
//   console.log("Il y a" + " " + compte + " " + " lettres 'a' dans la phrase");
//   console.log(temp);
// }
// nombreDeFois("Sayonara! Oui, j'ai des origines japonaises.");

// --------------
// Exercice 08
// --------------

// Créer un array avec plusieurs chiffres/nombres de votre choix
// Créer une fonction qui, TOTALEMENT AU HASARD
// nous MULTIPLIERA ou DIVISERA ces nombres les uns à la suite des autres
// exemple1: [1, 4, 32, 8] => 1 * 4 / 32 * 8 = 1024
// exemple2: [1, 4, 32, 8] => 1 / 4 * 32 * 8 = 64

// var array = [1, 4, 32, 8];
// function auHasard(tableau) {
//   var tempArray = [];

//   for (i = 0; i < tableau.length; i++) {
//     var alea = Math.round(Math.random(tableau[i]) * 1);
//     tempArray += array[i];

//     //choix entre 0 et 0.4 arbitraire pour vérifier le else
//     if (0 < alea < 0.45) {
//       tempArray *= array[i];
//     } else {
//       tempArray /= array[i];
//     }
//   }
//   console.log(array);
//   console.log(tempArray);
// }

// auHasard(array);
// --------------
// Exercice 09 --- _______OK_______
// --------------

// Un utilisateur vient de s'inscrire sur votre site.
// Malheureusement, il inscrit son prénom de façon 'hasardeuse'
// ex: oLivieR
// Créer une fonction, qui prendra en paramètre un prénom
// Cette fonction mettra la première lettre en majuscule
// Puis le reste du prénom en minuscule.
// résultat attendu: Olivier

// function rectifPrenom(prenom) {
//   var majuscule = prenom[0].toUpperCase();
//   var reste = prenom.slice(1).toLowerCase();
//   console.log(majuscule + reste);
// }

// rectifPrenom("rOldFdDDGHFVCDFGSDFVCEGRd");
// --------------
// Exercice 10 _____presque ok _______
// --------------

// Créer une fonction qui fait office de calculatrice
// Cette fonction peut additionner, multiplier, soustraire, ou diviser 2 nombres
// Elle accepte 3 paramètres:
// Les 2 premiers paramètres seront vos chiffres/nombres
// Le 3ème paramètre sera le signe représentant le calcul.
// ex: (5, 10, '*') => résultat: 50
// ex: (8, 4, '+') => résultat: 12
// ex: (77, 33, '-') => résultat: 44
// ATTENTION: si un calcul n'est pas réalisable, indiquez: 'Calcul impossible'
// ex: (8, 'k', '-') => résultat: 'Calcul impossible'
// ex: (13, '45', 'plus') => résultat: 'Calcul impossible'
// // Aide: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// function calculatrice(nb1, nb2, signe) {
//   var operation = 0;

//   if (signe === "*") {
//     operation = nb1 * nb2;
//   }
//   if (signe === "+") {
//     operation = nb1 + nb2;
//   }

//   if (signe === "/" && nb2 != 0) {
//     operation = nb1 / nb2;
//   }
//   if (signe === "-") {
//     operation = nb1 - nb2;
//   }
//   if (signe != "-" && signe != "+" && signe != "*" && signe != "/") {
//     console.log("Choisir un bon opérateur pour le calcul entre (+ - * / )");
//   }

//   console.log("Le resultat de votre operation est" + " " + operation);
// }

// calculatrice(0, 18, "+");
