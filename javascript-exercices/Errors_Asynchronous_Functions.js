// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Errors_Asynchronous_Functions.js                    |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 16:21:04 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 16:21:48 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Gestion des Erreurs dans les Fonctions Asynchrones avec Async/Await
 *
 * Les fonctions asynchrones avec async/await offrent une syntaxe claire et concise pour écrire
 * du code asynchrone en JavaScript. L'utilisation de try...catch dans ce contexte permet de gérer
 * les erreurs de manière élégante, similaire à la gestion d'erreurs dans les fonctions synchrones.
 *
 * Syntaxe de base pour gérer les erreurs avec async/await:
 * try {
 *   const resultat = await uneOperationAsynchrone();
 * } catch (erreur) {
 *   // gestion de l'erreur
 * }
 */

/*
 * Exercice 1: Gestion simple d'erreur avec async/await
 *
 * Objectif: Utiliser try...catch pour gérer les erreurs survenues lors de l'exécution d'une
 * opération asynchrone avec await.
 *
 * Instructions:
 * 1. Créez une fonction asynchrone qui utilise await pour attendre le résultat d'une Promesse.
 * 2. Utilisez try...catch pour capturer et gérer toute erreur qui pourrait survenir lors de l'attente de la Promesse.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Gestion d'erreurs multiples avec async/await
 *
 * Objectif: Gérer plusieurs erreurs potentielles qui pourraient survenir lors de l'exécution
 * séquentielle de plusieurs opérations asynchrones.
 *
 * Instructions:
 * 1. Dans une fonction asynchrone, effectuez plusieurs opérations asynchrones en utilisant await,
 *    chacune pouvant échouer et rejeter une erreur.
 * 2. Utilisez un seul bloc try...catch pour capturer les erreurs de toutes ces opérations.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Gestion fine d'erreurs spécifiques avec async/await
 *
 * Objectif: Capturer des types d'erreurs spécifiques pour appliquer des traitements d'erreur
 * différenciés selon le type ou le contenu de l'erreur.
 *
 * Instructions:
 * 1. Dans le bloc catch d'une fonction asynchrone, utilisez des conditions pour vérifier le type
 *    ou le contenu de l'erreur capturée.
 * 2. Appliquez un traitement d'erreur spécifique en fonction du type ou du contenu de l'erreur.
 */

// Code...
