// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Iterators.js                                        |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 12:33:46 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 12:45:45 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Itérateurs en JavaScript
 *
 * Les itérateurs sont des mécanismes permettant de parcourir les éléments d'une
 * collection (comme un tableau ou une chaîne de caractères) de manière séquentielle.
 * En JavaScript, un itérateur est un objet qui implémente l'interface Iterator avec
 * une méthode next() qui retourne le prochain élément de la collection sous la forme
 * d'un objet {value, done}.
 *
 */

/*
 * Exercice 1: Création d'un itérateur simple pour un tableau
 *
 * Objectif: Créer un itérateur pour un tableau contenant quelques nombres et
 * utiliser cet itérateur pour parcourir le tableau.
 *
 */

const nombres = [1, 2, 3, 4, 5];
// Créez un itérateur pour le tableau 'nombres' ici


// Utilisez l'itérateur pour parcourir le tableau 'nombres' et affichez chaque élément


// Conseil: Utilisez nombres[Symbol.iterator]() pour créer l'itérateur et utilisez une
// boucle while pour parcourir les éléments tant que {done: false}.

/* ------------------------------------------------------------------------- */

/**
 * Exercice 2: Implémenter un itérateur personnalisé
 *
 * Objectif: Créer un itérateur personnalisé pour un objet représentant une plage
 * de nombres (par exemple, de 1 à 5), permettant de parcourir ces nombres.
 */

function creerIterateurPlage(debut, fin) {

}

// Utilisation de l'itérateur personnalisé
const itPlage = creerIterateurPlage(1, 5);

/* ------------------------------------------------------------------------- */

/**
 * Exercice 3: Itérateur avec logique conditionnelle
 *
 * Objectif: Étendre l'itérateur personnalisé de l'exercice précédent pour inclure
 * une logique conditionnelle, par exemple, en ne retournant que les nombres pairs de la plage.
 */

function creerIterateurPlagePairs(debut, fin) {

}

// Utilisation de l'itérateur modifié
const itPlagePairs = creerIterateurPlagePairs(1, 10);


