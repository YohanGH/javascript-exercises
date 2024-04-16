// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Error_Management.js                                 |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 12:51:13 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 12:54:43 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Gestion des Erreurs en JavaScript
 *
 * La gestion des erreurs en JavaScript est cruciale pour le développement d'applications
 * robustes. JavaScript fournit une syntaxe try...catch qui permet de "tenter" d'exécuter
 * un bloc de code, et si une erreur se produit, "d'attraper" cette erreur dans le bloc catch,
 * permettant ainsi au script de continuer son exécution sans interruption.
 *
 * Syntaxe de base:
 * try {
 *   // Code susceptible de générer une erreur
 * } catch (erreur) {
 *   // Code exécuté si une erreur survient dans le bloc try
 *   console.log(erreur);
 * }
 */

/*
 * Exercice 1: Attraper une erreur simple
 *
 * Objectif: Utiliser try...catch pour gérer une erreur de référence non définie.
 *
 * Instructions:
 * 1. Dans le bloc try, accédez à une variable qui n'a pas été définie.
 * 2. Dans le bloc catch, affichez l'erreur dans la console.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Gérer spécifiquement une erreur de type
 *
 * Objectif: Démontrer la gestion des erreurs en vérifiant le type d'erreur capturé.
 *
 * Instructions:
 * 1. Dans le bloc try, tentez de convertir une chaîne de caractères en JSON en utilisant JSON.parse
 *    avec une chaîne malformée pour provoquer une erreur de syntaxe JSON.
 * 2. Utilisez le bloc catch pour vérifier si l'erreur est une instance de SyntaxError et affichez
 *    un message spécifique dans ce cas. Sinon, affichez l'erreur générale.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Utilisation de finally
 *
 * Objectif: Utiliser finally pour exécuter du code après un bloc try...catch, quel que soit
 * le résultat de l'exécution.
 *
 * Instructions:
 * 1. Englobez un bloc de code avec try...catch qui tente de faire quelque chose de risqué,
 *    comme diviser par zéro.
 * 2. Dans le bloc finally, affichez un message indiquant que l'exécution est terminée, 
 *    quel que soit le résultat de l'opération.
 */

// Code...
