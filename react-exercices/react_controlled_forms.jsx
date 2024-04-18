/*
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    react_controlled_forms.jsx                          |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2024/04/18 18:50:53 by YohanGH           '__   _/_               #
#    Updated: 2024/04/18 18:50:53 by YohanGH          (___)=(___)              #
#                                                                              #
# **************************************************************************** #
*/

/**
 * Thème: Création de Formulaires Contrôlés en React
 *
 * En React, les formulaires contrôlés sont une technique recommandée pour gérer les saisies des formulaires.
 * Dans cette approche, les valeurs des éléments de formulaire (comme les champs de saisie, les cases à cocher,
 * et les boutons radio) sont contrôlées par le state du composant React. Cela signifie que chaque modification
 * de l'entrée est capturée par des gestionnaires d'événements en React et reflétée dans l'état du composant.
 *
 * Les avantages des formulaires contrôlés incluent :
 * - Une source unique de vérité pour les données du formulaire, ce qui simplifie le suivi des modifications,
 *   la validation et la soumission du formulaire.
 * - Une meilleure intégration avec d'autres fonctionnalités de React, telles que le state et les mises à jour
 *   de l'interface utilisateur basées sur les données.
 *
 * Exemple de base d'un formulaire contrôlé:
 * ```jsx
 * class MyForm extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: ''};
 *     this.handleChange = this.handleChange.bind(this);
 *     this.handleSubmit = this.handleSubmit.bind(this);
 *   }
 *
 *   handleChange(event) {
 *     this.setState({value: event.target.value});
 *   }
 *
 *   handleSubmit(event) {
 *     alert('A name was submitted: ' + this.state.value);
 *     event.preventDefault();
 *   }
 *
 *   render() {
 *     return (
 *       <form onSubmit={this.handleSubmit}>
 *         <label>
 *           Name:
 *           <input type="text" value={this.state.value} onChange={this.handleChange} />
 *         </label>
 *         <input type="submit" value="Submit" />
 *       </form>
 *     );
 *   }
 * }
 * ```
 */

/**
 * Exercice 1: Création d'un formulaire de connexion
 *
 * Objectif: Construire un formulaire de connexion contrôlé qui gère l'entrée de l'identifiant et du mot de passe.
 *
 * Instructions:
 * 1. Créez un formulaire contrôlé avec des champs pour l'identifiant et le mot de passe.
 * 2. Utilisez le state pour stocker et mettre à jour les valeurs des champs.
 * 3. Affichez une alerte avec les informations de connexion lorsque le formulaire est soumis.
 */


/* ************************************************************************* */

/**
 * Exercice 2: Formulaire d'inscription avec validation
 *
 * Objectif: Créer un formulaire d'inscription avec des validations de base pour chaque champ.
 *
 * Instructions:
 * 1. Construisez un formulaire avec des champs pour le nom, l'email, et le mot de passe.
 * 2. Implémentez des validations simples, par exemple, vérifiez que aucun champ n'est vide avant de soumettre.
 * 3. Affichez des messages d'erreur appropriés sous chaque champ en cas d'erreur de validation.
 */


/* ************************************************************************* */

/**
 * Exercice 3: Formulaire dynamique avec plusieurs champs
 *
 * Objectif: Construire un formulaire dynamique qui permet à l'utilisateur d'ajouter ou de supprimer des champs de saisie.
 *
 * Instructions:
 * 1. Créez un formulaire qui commence avec un seul champ de saisie.
 * 2. Ajoutez des boutons pour permettre à l'utilisateur d'ajouter de nouveaux champs ou de supprimer des champs existants.
 * 3. Gérez l'état de tous les champs dynamiquement et soumettez toutes les valeurs lors de la soumission du formulaire.
 */

