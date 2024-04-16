// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Processing_promises.js                              |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 16:13:37 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 16:14:23 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Traitement des Promesses en JavaScript
 *
 * Les Promesses en JavaScript sont des objets représentant l'achèvement ultérieur (ou l'échec)
 * d'une opération asynchrone. Elles fournissent une manière plus propre et plus fonctionnelle de
 * gérer des opérations asynchrones par rapport aux callbacks traditionnels. Une Promesse peut se
 * trouver dans l'un des trois états suivants: en attente (pending), réalisée (fulfilled) ou rejetée (rejected).
 *
 * Syntaxe de base pour traiter une Promesse réussie ou rejetée:
 * maPromise.then(resultat => {
 *   // Code exécuté en cas de succès
 * }).catch(erreur => {
 *   // Code exécuté en cas d'échec
 * });
 */

/*
 * Exercice 1: Gestion de base d'une Promesse
 *
 * Objectif: Utiliser then et catch pour traiter le succès ou l'échec d'une Promesse.
 *
 * Instructions:
 * 1. Créez une Promesse qui se résout avec succès ou échoue en fonction d'une condition.
 * 2. Utilisez then pour définir ce qui doit être fait en cas de succès de la Promesse.
 * 3. Utilisez catch pour définir le traitement en cas d'échec de la Promesse.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Chaînage de Promesses
 *
 * Objectif: Démontrer comment chaîner plusieurs traitements avec then pour des opérations asynchrones successives.
 *
 * Instructions:
 * 1. Créez une séquence d'opérations asynchrones en utilisant des Promesses.
 * 2. Utilisez then pour ajouter plusieurs gestionnaires de succès, chacun passant son résultat au suivant.
 * 3. Ajoutez un gestionnaire catch à la fin de la chaîne pour gérer une éventuelle erreur survenue dans l'une des Promesses.
 */

// Code..

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Utilisation de finally dans les Promesses
 *
 * Objectif: Utiliser finally pour exécuter du code après qu'une Promesse a été traitée, qu'elle soit réussie ou rejetée.
 *
 * Instructions:
 * 1. Après avoir utilisé then et catch pour gérer respectivement le succès et l'échec d'une Promesse, utilisez finally.
 * 2. Dans finally, placez le code qui doit s'exécuter après la résolution de la Promesse, indépendamment de son résultat.
 */

// Code...
