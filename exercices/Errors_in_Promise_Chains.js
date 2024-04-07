// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Errors_in_Promise_Chains.js                         |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 12:57:43 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 12:58:38 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Gestion des Erreurs dans les Chaînes de Promesses en JavaScript
 *
 * La gestion des erreurs est essentielle lors du travail avec des Promesses en JavaScript.
 * Une Promesse représente une valeur qui peut être disponible maintenant, dans le futur,
 * ou jamais. Lorsque nous chaînons des opérations asynchrones avec des Promesses, il est
 * crucial de gérer correctement les erreurs pour éviter les interruptions et assurer un
 * comportement prévisible de l'application.
 *
 * Syntaxe de base pour la gestion des erreurs dans une chaîne de Promesses:
 * someAsyncOperation()
 *   .then(result => {
 *     // Traitement en cas de succès
 *   })
 *   .catch(erreur => {
 *     // Gestion de l'erreur
 *   });
 */

/*
 * Exercice 1: Attraper une erreur dans une simple Promesse
 *
 * Objectif: Utiliser .then() et .catch() pour gérer le succès et l'erreur d'une Promesse.
 *
 * Instructions:
 * 1. Créez une Promesse qui se résout avec un succès après un délai, ou rejette une erreur.
 * 2. Utilisez .then() pour traiter le succès.
 * 3. Utilisez .catch() pour gérer l'erreur.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Gestion des erreurs dans une chaîne de Promesses
 *
 * Objectif: Gérer les erreurs qui peuvent survenir à n'importe quel point dans une chaîne de Promesses.
 *
 * Instructions:
 * 1. Créez une chaîne de Promesses avec plusieurs appels .then().
 * 2. Dans l'un des gestionnaires .then(), rejetez une erreur.
 * 3. Utilisez un seul .catch() à la fin de la chaîne pour gérer toutes les erreurs potentielles.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Utilisation de .finally dans les chaînes de Promesses
 *
 * Objectif: Utiliser .finally pour exécuter du code après une chaîne de Promesses, indépendamment du résultat.
 *
 * Instructions:
 * 1. Après avoir créé une chaîne de Promesses avec .then() et .catch(), ajoutez un .finally() à la fin.
 * 2. Utilisez .finally() pour exécuter un nettoyage ou une logique de fin, comme afficher un message dans la console.
 */

// Code...
