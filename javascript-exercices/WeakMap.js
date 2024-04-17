// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   weakMap.js                                          |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/17 08:18:14 by YohanGH           '__   _/_              //
//   Updated: 2024/04/17 08:27:04 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Utilisation des WeakMaps en JavaScript
 *
 * Exercice 1: Créer et utiliser un WeakMap
 *
 * Objectif: Comprendre le comportement de WeakMap, en particulier la gestion de la mémoire et
 *           la limitation des types de clés acceptés.
 *
 * Instructions:
 * 1. Créez un WeakMap.
 * 2. Ajoutez-y des objets comme clés et associez-leur des valeurs.
 * 3. Essayez d'ajouter des types primitifs comme clés et observez ce qui se passe.
 */

//Code...
// Création d'un WeakMap

// Création d'objets pour utilisation comme clés

// Ajout d'objets dans le WeakMap avec des valeurs associées

// Tentative d'ajouter un type primitif comme clé

// Affichage pour confirmer les valeurs

/* ------------------------------------------------------------------------- */

/**
 * Thème: Utilisation des WeakSets en JavaScript
 *
 * Exercice 2: Comprendre la collecte des ordures avec WeakSet
 *
 * Objectif: Illustrer comment WeakSet permet une collecte des ordures plus flexible en ne
 *           retenant pas indéfiniment ses éléments.
 *
 * Instructions:
 * 1. Créez un WeakSet.
 * 2. Ajoutez-y des objets.
 * 3. Supprimez les références externes à un objet et observez le comportement du WeakSet après la collecte des ordures.
 */

// Code...
// Création d'un WeakSet

// Ajout d'objets au WeakSet

// Vérification de la présence d'objets

// Suppression de la référence à objetA

// Note: JavaScript ne permet pas de forcer ou d'observer directement la collecte des ordures.
//       L'effet ne peut être observé qu'indirectement ou dans des environnements contrôlés.

/* ------------------------------------------------------------------------- */

/**
 * Thème: Utilisation des WeakMap et WeakSet en JavaScript
 *
 * Exercice 3: Pratique avec WeakMap et WeakSet
 *
 * Objectif: Utiliser WeakMap et WeakSet dans un scénario pratique pour mieux comprendre leur utilité.
 *
 * Instructions:
 * 1. Créez un WeakMap pour gérer des métadonnées associées à des objets sans empêcher leur collecte.
 * 2. Utilisez un WeakSet pour suivre un ensemble d'objets qui peuvent être libérés automatiquement.
 */

// Code...
// Création d'un WeakMap pour les métadonnées

// Ajout de métadonnées

// Création d'un WeakSet pour suivre les objets

// Affichage des métadonnées

// Vérification des utilisateurs actifs

// Simulation de la suppression de user1

// Résumé de l'exercice
console.log(
	"Les métadonnées et la surveillance des utilisateurs actifs sont gérées sans interférer avec la collecte des ordures."
);
