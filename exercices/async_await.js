// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   async_await.js                                      |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 15:49:07 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 15:50:07 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Utilisation d'async/await dans les Boucles en JavaScript
 *
 * La syntaxe async/await en JavaScript permet d'écrire du code asynchrone qui semble synchrone
 * ou bloquant, ce qui facilite la lecture et la compréhension du code. C'est particulièrement
 * utile lors de l'exécution de tâches asynchrones dans des boucles, permettant à chaque
 * itération d'attendre la résolution d'une promesse avant de passer à la suivante.
 *
 * Syntaxe de base pour utiliser async/await dans une boucle:
 * async function traitementDesItems(items) {
 *   for (const item of items) {
 *     await traitementAsynchrone(item);
 *   }
 * }
 */

/*
 * Exercice 1: Async/Await dans une boucle for...of
 *
 * Objectif: Utiliser async/await dans une boucle for...of pour traiter une liste d'items
 * de manière asynchrone, en attendant la fin de chaque traitement avant de passer au suivant.
 *
 * Instructions:
 * 1. Créez une fonction asynchrone qui accepte un tableau d'items.
 * 2. Utilisez une boucle for...of à l'intérieur de cette fonction pour itérer sur les items.
 * 3. Dans la boucle, utilisez await pour attendre un traitement asynchrone fictif pour chaque item.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Async/Await avec Array.prototype.map et Promise.all
 *
 * Objectif: Utiliser async/await avec Array.prototype.map pour traiter simultanément plusieurs
 * items de manière asynchrone, puis attendre que tous les traitements soient terminés.
 *
 * Instructions:
 * 1. Créez une fonction asynchrone qui accepte un tableau d'items.
 * 2. Utilisez .map pour créer un tableau de Promesses en appelant une fonction asynchrone pour chaque item.
 * 3. Utilisez await avec Promise.all pour attendre la résolution de toutes les Promesses.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Gestion des erreurs avec async/await dans les boucles
 *
 * Objectif: Démontrer comment gérer les erreurs lors de l'utilisation d'async/await dans des boucles,
 * en utilisant try...catch pour attraper et traiter les erreurs asynchrones survenant pendant le
 * traitement des items.
 *
 * Instructions:
 * 1. Dans votre fonction asynchrone, entourez votre boucle avec un bloc try...catch.
 * 2. Dans la boucle, utilisez await pour attendre un traitement asynchrone qui peut rejeter une erreur.
 * 3. Utilisez le bloc catch pour gérer les erreurs potentielles de chaque itération.
 */

// Code...
