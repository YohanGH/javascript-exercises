// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Object_properties.js                                |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 15:57:28 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 15:58:21 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Parcourir les Propriétés d'un Objet en JavaScript
 *
 * En JavaScript, parcourir les propriétés d'un objet est une opération courante qui peut être
 * réalisée de différentes manières. L'une des méthodes les plus directes est d'utiliser la boucle
 * for...in, qui itère sur toutes les propriétés énumérables d'un objet, y compris celles héritées
 * de la chaîne de prototype.
 *
 * Syntaxe de base pour parcourir les propriétés d'un objet:
 * for (let cle in monObjet) {
 *   console.log(cle, monObjet[cle]);
 * }
 */

/*
 * Exercice 1: Utilisation de for...in pour itérer sur les propriétés d'un objet
 *
 * Objectif: Démontrer comment utiliser la boucle for...in pour parcourir et afficher
 * toutes les propriétés énumérables (et leurs valeurs) d'un objet donné.
 *
 * Instructions:
 * 1. Créez un objet avec plusieurs propriétés.
 * 2. Utilisez une boucle for...in pour itérer sur les propriétés de l'objet.
 * 3. Pour chaque propriété, affichez son nom (clé) et sa valeur.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Vérification de l'appartenance des propriétés
 *
 * Objectif: Utiliser la boucle for...in en combinaison avec la méthode hasOwnProperty
 * pour filtrer et afficher uniquement les propriétés propres de l'objet (en excluant les
 * propriétés héritées de la chaîne de prototype).
 *
 * Instructions:
 * 1. Créez un objet qui hérite d'un autre objet ou utilisez l'héritage de prototype.
 * 2. Utilisez for...in pour parcourir l'objet.
 * 3. À l'intérieur de la boucle, utilisez hasOwnProperty pour vérifier si la propriété
 *    appartient à l'objet lui-même et non à son prototype. Affichez uniquement ces propriétés.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Utilisation de Object.keys pour obtenir les clés de l'objet
 *
 * Objectif: Montrer une alternative à for...in en utilisant Object.keys pour obtenir un tableau
 * des noms des propriétés propres (non héritées) d'un objet, puis parcourir ce tableau.
 *
 * Instructions:
 * 1. Créez un objet avec plusieurs propriétés.
 * 2. Utilisez Object.keys pour obtenir un tableau des clés de l'objet.
 * 3. Parcourez ce tableau avec une boucle (par exemple, for...of ou forEach) et affichez
 *    le nom et la valeur de chaque propriété.
 */

// Code...
