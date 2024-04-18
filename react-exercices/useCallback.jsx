/*
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    useCallback.jsx                                     |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2024/04/17 08:42:33 by YohanGH           '__   _/_               #
#    Updated: 2024/04/17 08:42:33 by YohanGH          (___)=(___)              #
#                                                                              #
# **************************************************************************** #
*/

/**
 * Thème: Optimisation des Composants React avec `useCallback` et `useMemo`
 *
 * `useCallback` et `useMemo` sont deux hooks essentiels en React pour améliorer les performances des composants
 * fonctionnels. Ces hooks permettent de contrôler la création de fonctions et la mémoire cache de valeurs coûteuses,
 * ce qui peut aider à prévenir des rendus inutiles et des recalculs coûteux.
 *
 * `useCallback` est un hook qui mémorise une fonction de callback entre les rendus d'un composant. Cela est
 * particulièrement utile lorsque des fonctions sont passées en tant que props à des composants enfants optimisés
 * qui ne se rerender que si leurs props changent.
 *
 * `useMemo`, d'autre part, mémorise le résultat d'une fonction coûteuse. Si les dépendances de la fonction n'ont
 * pas changé depuis le dernier rendu, React ressortira la valeur mémorisée au lieu de recalculer la fonction.
 *
 * Ensemble, `useCallback` et `useMemo` permettent aux développeurs de contrôler avec précision le comportement de
 * re-rendu et d'optimiser les performances des applications React.
 *
 * Exemple d'utilisation de `useCallback`:
 * const memoizedCallback = useCallback(
 *   () => {
 *     doSomething(a, b);
 *   },
 *   [a, b],
 * );
 *
 * Exemple d'utilisation de `useMemo`:
 * const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 */


/**
 * Thème: Optimisation avec useCallback dans React
 *
 * Exercice 1: Utilisation de useCallback pour mémoriser une fonction
 *
 * Objectif: Démontrer comment useCallback peut être utilisé pour empêcher la recréation inutile de fonctions
 *           lors des re-rendus qui peuvent affecter les performances si la fonction est passée comme prop à des
 *           composants enfants profonds ou utilisée dans des dépendances d'effet.
 *
 * Instructions:
 * 1. Créez un composant fonctionnel qui inclut un bouton.
 * 2. Utilisez `useCallback` pour mémoriser une fonction qui affiche un message dans la console lorsque le bouton est cliqué.
 * 3. Assurez-vous que la fonction n'est pas recréée à chaque rendu du composant.
 */

// Code...

/* ************************************************************************* */

/**
 * Thème: Optimisation avec useMemo dans React
 *
 * Exercice 2: Utilisation de useMemo pour mémoriser une valeur coûteuse
 *
 * Objectif: Montrer comment useMemo peut être utilisé pour mémoriser le résultat d'une opération coûteuse
 *           et éviter que cette opération soit recalculée à chaque rendu.
 *
 * Instructions:
 * 1. Créez un composant qui accepte un nombre en prop.
 * 2. Utilisez `useMemo` pour calculer le factoriel de ce nombre, une opération coûteuse.
 * 3. Affichez le résultat calculé.
 */

// Code...

/* ************************************************************************* */

/**
 * Thème: Utilisation combinée de useCallback et useMemo dans React
 *
 * Exercice 3: Combinaison de useCallback et useMemo dans un scénario
 *
 * Objectif: Illustrer comment `useCallback` et `useMemo` peuvent être combinés pour optimiser les performances
 *           d'un composant qui dépend à la fois de fonctions et de calculs coûteux.
 *
 * Instructions:
 * 1. Créez un composant qui accepte un tableau de nombres.
 * 2. Utilisez `useMemo` pour calculer et mémoriser la somme des nombres.
 * 3. Utilisez `useCallback` pour créer une fonction qui alerte la somme des nombres.
 * 4. Incluez un bouton qui utilise cette fonction lorsqu'il est cliqué.
 */

// Code...
