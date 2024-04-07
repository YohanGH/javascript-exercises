// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Parallel_Promises.js                                |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 15:54:54 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 15:55:30 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Exécution Parallèle de Promesses en JavaScript
 *
 * JavaScript permet l'exécution parallèle de plusieurs Promesses et la récupération de leurs
 * résultats grâce à Promise.all. Cette méthode prend un tableau de Promesses et retourne une
 * nouvelle Promesse qui se résout lorsque toutes les Promesses du tableau sont résolues, ou se
 * rejette dès qu'une des Promesses est rejetée.
 *
 * Syntaxe de base pour exécuter des Promesses en parallèle:
 * Promise.all([premierePromise, deuxiemePromise])
 *   .then(resultats => {
 *     // succès : 'resultats' est un tableau contenant les valeurs de résolution de toutes les Promesses
 *   })
 *   .catch(erreur => {
 *     // une ou plusieurs Promesses ont été rejetées
 *   });
 */

/*
 * Exercice 1: Utilisation de Promise.all pour exécuter des Promesses en parallèle
 *
 * Objectif: Démontrer comment utiliser Promise.all pour exécuter plusieurs opérations
 * asynchrones en parallèle et traiter leurs résultats ensemble.
 *
 * Instructions:
 * 1. Créez plusieurs fonctions qui retournent des Promesses.
 * 2. Utilisez Promise.all pour exécuter ces Promesses en parallèle.
 * 3. Utilisez .then pour accéder aux résultats une fois toutes les Promesses résolues.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Gestion des erreurs avec Promise.all
 *
 * Objectif: Gérer les cas où une ou plusieurs Promesses dans l'ensemble passées à
 * Promise.all sont rejetées.
 *
 * Instructions:
 * 1. Incluez dans l'ensemble de Promesses passées à Promise.all au moins une Promesse
 *    qui sera rejetée.
 * 2. Utilisez .catch pour gérer le rejet et effectuer une action, comme afficher une erreur.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Promise.allSettled pour gérer les résultats et rejets
 *
 * Objectif: Utiliser Promise.allSettled pour exécuter plusieurs Promesses en parallèle,
 * sans que l'exécution soit interrompue par le rejet d'une Promesse.
 *
 * Instructions:
 * 1. Utilisez Promise.allSettled avec un ensemble de Promesses qui peuvent être résolues ou rejetées.
 * 2. Utilisez .then pour traiter les résultats, qui incluent le statut (fulfilled ou rejected) et
 *    la valeur de chaque Promesse.
 */

// Code...
