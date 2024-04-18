/*
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    Error_Boundary.jsx                                  |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2024/04/18 18:54:44 by YohanGH           '__   _/_               #
#    Updated: 2024/04/18 18:54:44 by YohanGH          (___)=(___)              #
#                                                                              #
# **************************************************************************** #
*/

/**
 * Thème: Utilisation de l'Error Boundary en React
 *
 * L'Error Boundary en React est un mécanisme pour capturer les erreurs JavaScript dans les composants enfants
 * et ainsi empêcher toute l'application de se crasher. Au lieu de cela, l'Error Boundary affiche une interface
 * utilisateur de repli pour les composants qui ont rencontré des erreurs lors de leur rendu. Cette approche
 * est essentielle pour améliorer la résilience des applications et l'expérience utilisateur en gérant les erreurs
 * d'exécution de manière élégante.
 *
 * Un Error Boundary est un composant classique de React qui implémente les méthodes du cycle de vie
 * `static getDerivedStateFromError()` ou `componentDidCatch()`. Le premier est utilisé pour rendre un état de repli
 * après une erreur, tandis que le second est utilisé pour enregistrer les informations sur l'erreur.
 *
 * Exemple de base d'un Error Boundary:
 * ```jsx
 * class ErrorBoundary extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = { hasError: false };
 *   }
 *
 *   static getDerivedStateFromError(error) {
 *     // Mettre à jour l'état pour que le prochain rendu montre l'UI de repli.
 *     return { hasError: true };
 *   }
 *
 *   componentDidCatch(error, errorInfo) {
 *     // Vous pouvez aussi logguer l'erreur sur un service de reporting d'erreurs
 *     logErrorToMyService(error, errorInfo);
 *   }
 *
 *   render() {
 *     if (this.state.hasError) {
 *       // Vous pouvez rendre n'importe quelle UI de repli
 *       return <h1>Something went wrong.</h1>;
 *     }
 *
 *     return this.props.children;
 *   }
 * }
 * ```
 */

/**
 * Exercice 1: Création d'un simple Error Boundary
 *
 * Objectif: Implémenter un Error Boundary simple qui affiche une interface utilisateur de repli en cas d'erreur.
 *
 * Instructions:
 * 1. Créez un Error Boundary qui attrape les erreurs dans les composants enfants.
 * 2. Utilisez cet Error Boundary pour englober un composant enfant qui lance volontairement une erreur.
 */


/* ************************************************************************* */

/**
 * Exercice 2: Error Boundary avec redirection
 *
 * Objectif: Implémenter un Error Boundary qui redirige vers une page spécifique ou un état en cas d'erreur.
 *
 * Instructions:
 * 1. Créez un Error Boundary qui redirige l'utilisateur vers une page d'accueil ou affiche une interface spécifique
 *    lorsque une erreur est capturée.
 */

/* ************************************************************************* */

/**
 * Exercice 3: Error Boundary avec logs d'erreurs
 *
 * Objectif: Implémenter un Error Boundary qui enregistre les détails des erreurs dans un service externe.
 *
 * Instructions:
 * 1. Créez un Error Boundary qui capture les erreurs et les informations détaillées sur les erreurs, puis les loggue dans une console ou un service de monitoring d'erreurs.
 */


