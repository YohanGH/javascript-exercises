/*
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    React_portal.jsx                                    |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2024/04/17 09:09:19 by YohanGH           '__   _/_               #
#    Updated: 2024/04/17 09:09:19 by YohanGH          (___)=(___)              #
#                                                                              #
# **************************************************************************** #
*/

/**
 * Thème: Utilisation des Portals en React
 *
 * Les Portals offrent une solution idéale pour rendre des composants React en dehors de la hiérarchie DOM du
 * composant parent. Cette fonctionnalité est extrêmement utile pour les cas d'usage comme les modales, les popups,
 * et les tooltips, où les éléments doivent être affichés en dehors du flux normal du document tout en restant
 * dans l'arbre de composants React pour le state et la gestion des événements.
 *
 * Utiliser un Portal permet de contrôler le placement d'un composant dans le DOM indépendamment de sa position
 * dans la hiérarchie des composants React. Cela aide à éviter les problèmes de CSS overflow et de z-index, et
 * facilite la gestion des cas où un composant doit "sortir" de son conteneur.
 *
 * Exemple de base pour créer un Portal :
 * ReactDOM.createPortal(
 *   // Élément JSX à rendre,
 *   // Noeud DOM cible où l'élément doit être monté
 * );
 *
 * L'exemple ci-dessus montre comment `ReactDOM.createPortal` prend deux arguments. Le premier est l'élément JSX
 * que vous souhaitez rendre, et le second est un nœud DOM dans lequel cet élément doit être inséré dans le DOM.
 * Cela permet de déplacer visuellement un composant dans un autre endroit du DOM sans perturber son état ou son
 * comportement au sein de l'arborescence des composants React.
 */


/**
 * Thème: Utilisation des Portals en React
 *
 * Exercice 1: Création d'une modale simple avec React Portal
 *
 * Objectif: Apprendre à utiliser les React Portals pour rendre une modale en dehors du DOM parent.
 *
 * Instructions:
 * 1. Créez un composant modale qui affiche un message et un bouton pour fermer la modale.
 * 2. Utilisez React Portal pour montrer la modale en dehors de la hiérarchie DOM du composant parent.
 * 3. Assurez-vous que la modale est rendue dans un élément spécifique du DOM qui est hors de l'arborescence principale.
 */

// Code...

/* ************************************************************************* */

/**
 * Thème: Utilisation des Portals en React
 *
 * Exercice 2: Utilisation d'un Portal pour un tooltip
 *
 * Objectif: Démontrer comment les React Portals peuvent être utilisés pour créer des tooltips
 *           qui s'affichent en dehors de la hiérarchie DOM du composant parent.
 *
 * Instructions:
 * 1. Créez un composant tooltip qui affiche du texte au-dessus d'un élément lorsqu'on passe la souris dessus.
 * 2. Utilisez React Portal pour rendre le tooltip dans un endroit approprié du DOM, indépendamment de sa position dans la hiérarchie des composants.
 */

// Code...


/* ************************************************************************* */

/**
 * Thème: Utilisation des Portals en React
 *
 * Exercice 3: Création d'un Popup de confirmation avec React Portal
 *
 * Objectif: Utiliser les Portals pour créer un popup de confirmation qui s'affiche en dehors du flux normal du DOM.
 *
 * Instructions:
 * 1. Créez un composant Popup qui demande une confirmation de l'utilisateur (par exemple, pour une suppression).
 * 2. Utilisez React Portal pour rendre le Popup dans un élément spécifique du DOM, indépendamment de la position du composant dans l'arborescence.
 * 3. Fournissez des boutons pour accepter ou annuler l'action.
 */

// Code...
