// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Proxies.js                                          |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 16:11:27 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 16:12:05 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Utilisation des Proxies en JavaScript
 *
 * En JavaScript, l'objet Proxy est utilisé pour définir un comportement personnalisé pour
 * des opérations fondamentales (par exemple, l'accès aux propriétés, l'affectation, l'énumération,
 * la fonction d'appel, etc.). Un proxy peut intercepter et redéfinir ces opérations pour un objet
 * cible grâce à un gestionnaire (handler) qui fournit des fonctions pièges (trap functions).
 *
 * Syntaxe de base pour créer un Proxy qui intercepte l'accès à une propriété:
 * const handler = {
 *   get: (obj, prop) => prop in obj ? obj[prop] : 'Non trouvé'
 * };
 * const proxy = new Proxy(objet, handler);
 */

/*
 * Exercice 1: Intercepter l'accès aux propriétés avec un Proxy
 *
 * Objectif: Créer un Proxy pour intercepter les tentatives d'accès aux propriétés d'un objet
 * et retourner une valeur personnalisée si la propriété n'existe pas.
 *
 * Instructions:
 * 1. Définissez un objet cible avec quelques propriétés.
 * 2. Créez un gestionnaire avec une fonction piège get qui retourne la valeur de la propriété
 *    si elle existe, ou une chaîne de caractères 'Non trouvé' si la propriété n'existe pas.
 * 3. Créez un Proxy pour l'objet en utilisant le gestionnaire défini.
 * 4. Testez l'accès à différentes propriétés de l'objet via le Proxy.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Modification des valeurs avant de les retourner
 *
 * Objectif: Utiliser un Proxy pour modifier les valeurs des propriétés d'un objet avant de les retourner.
 *
 * Instructions:
 * 1. Créez un gestionnaire avec une fonction piège get qui modifie la valeur d'une propriété
 *    (par exemple, en multipliant les nombres par 2 ou en mettant les chaînes de caractères en majuscules)
 *    avant de la retourner.
 * 2. Appliquez ce comportement à un objet cible via un Proxy.
 * 3. Accédez aux propriétés de l'objet via le Proxy et observez les modifications appliquées.
 */

// Code...

/* ------------------------------------------------------------------------- */
/*
 * Exercice 3: Validation des affectations de propriétés avec un Proxy
 *
 * Objectif: Utiliser un Proxy pour valider les valeurs affectées aux propriétés d'un objet.
 *
 * Instructions:
 * 1. Définissez un gestionnaire avec une fonction piège set qui valide la valeur avant de l'affecter
 *    à une propriété (par exemple, en vérifiant le type de la valeur ou en appliquant une plage de valeurs
 *    valides).
 * 2. En cas de valeur invalide, lancez une erreur. Sinon, affectez la valeur à la propriété et retournez true.
 * 3. Créez un Proxy pour un objet cible en utilisant ce gestionnaire.
 * 4. Testez l'affectation de différentes valeurs aux propriétés de l'objet via le Proxy.
 */

// Code...
