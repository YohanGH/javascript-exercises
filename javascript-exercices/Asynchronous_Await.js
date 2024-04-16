// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Asynchronous_Await.js                               |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 16:03:03 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 16:03:48 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Fonctions Asynchrones et Await en JavaScript
 *
 * En JavaScript, une fonction asynchrone est déclarée avec le mot-clé async et permet l'utilisation
 * du mot-clé await à l'intérieur pour attendre la résolution d'une Promesse. Cela rend le code
 * asynchrone plus lisible et facile à écrire, similaire à un style synchrone.
 *
 * Syntaxe de base pour déclarer une fonction asynchrone et utiliser await:
 * async function fetchData() {
 *   const data = await fetch('url');
 *   return data;
 * }
 */

/*
 * Exercice 1: Définition et appel d'une fonction asynchrone simple
 *
 * Objectif: Créer une fonction asynchrone qui utilise await pour attendre la réponse d'une
 * requête fetch.
 *
 * Instructions:
 * 1. Déclarez une fonction asynchrone qui fait une requête fetch à une URL spécifique.
 * 2. Utilisez await pour attendre que la Promesse retournée par fetch soit résolue, et assignez
 *    le résultat à une variable.
 * 3. Renvoyez les données reçues ou traitez-les à l'intérieur de la fonction.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Gestion des erreurs dans les fonctions asynchrones
 *
 * Objectif: Utiliser try...catch à l'intérieur d'une fonction asynchrone pour gérer les erreurs
 * qui peuvent survenir lors de l'attente d'une Promesse.
 *
 * Instructions:
 * 1. À l'intérieur de votre fonction asynchrone, entourez le code utilisant await avec un bloc
 *    try...catch.
 * 2. Dans le bloc catch, traitez l'erreur, par exemple, en affichant un message d'erreur dans la console.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Chaînage de plusieurs opérations asynchrones
 *
 * Objectif: Démontrer comment chaîner plusieurs opérations asynchrones en utilisant await pour
 * attendre chaque opération dans une fonction asynchrone.
 *
 * Instructions:
 * 1. Dans une fonction asynchrone, effectuez plusieurs requêtes fetch consécutives, en utilisant
 *    await pour attendre la résolution de chaque Promesse avant de passer à la suivante.
 * 2. Assurez-vous de gérer correctement les erreurs pour chaque opération asynchrone.
 */

// Code...
