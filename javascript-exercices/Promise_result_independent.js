// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Promise_result_independent.js                       |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 16:09:32 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 16:10:54 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Exécution de Code Indépendamment du Résultat d'une Promise en JavaScript
 *
 * En JavaScript, l'objet Promise représente une opération qui n'a pas encore été complétée,
 * mais qui est attendue dans le futur. Les Promises peuvent se résoudre avec succès ou échouer,
 * et il est souvent nécessaire d'exécuter du code après qu'une Promise a été résolue ou rejetée,
 * indépendamment du résultat. Pour ce faire, on peut utiliser la méthode finally() d'une Promise,
 * qui s'exécute après que la Promise a été soit résolue, soit rejetée.
 *
 * Syntaxe de base pour exécuter du code indépendamment du résultat d'une Promise:
 * maPromise.then(resultat => {
 *   // Code exécuté en cas de succès
 * }).catch(erreur => {
 *   // Code exécuté en cas d'échec
 * }).finally(() => {
 *   // Code toujours exécuté, indépendamment du résultat de la Promise
 * });
 */

/*
 * Exercice 1: Utilisation de finally avec une Promise simple
 *
 * Objectif: Démontrer l'utilisation de finally pour exécuter du code après la résolution
 * ou le rejet d'une Promise, indépendamment de son résultat.
 *
 * Instructions:
 * 1. Créez une Promise qui se résout avec succès ou échoue aléatoirement.
 * 2. Utilisez then pour traiter le cas de réussite et catch pour le cas d'échec.
 * 3. Ajoutez finally pour exécuter du code qui doit s'exécuter après la résolution de la Promise,
 *    quel que soit son résultat.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Nettoyage de ressources avec finally
 *
 * Objectif: Utiliser finally pour effectuer des opérations de nettoyage, comme la libération de ressources
 * ou la réinitialisation de l'état de l'application, après qu'une opération asynchrone soit terminée.
 *
 * Instructions:
 * 1. Imaginez une opération asynchrone qui nécessite des ressources, comme une connexion à une base de données.
 * 2. Simulez cette opération avec une Promise.
 * 3. Utilisez finally pour simuler la libération des ressources utilisées par l'opération asynchrone.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Chaînage de Promises avec utilisation de finally
 *
 * Objectif: Illustrer comment finally peut être intégré dans une chaîne de Promises pour exécuter du code
 * de nettoyage ou de finalisation après plusieurs opérations asynchrones.
 *
 * Instructions:
 * 1. Créez une chaîne de Promises en utilisant then pour plusieurs opérations asynchrones en séquence.
 * 2. Ajoutez catch à la fin de la chaîne pour gérer tout échec survenant lors des opérations précédentes.
 * 3. Utilisez finally pour exécuter du code de finalisation après l'ensemble des opérations asynchrones,
 *    indépendamment de leur résultat individuel.
 */

// Code...
