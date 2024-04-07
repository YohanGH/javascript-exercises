// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   Send_Form.js                                        |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 16:05:37 by YohanGH           '__   _/_              //
//   Updated: 2024/04/06 16:06:15 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Prévention de l'Envoi de Formulaire en JavaScript
 *
 * Lors du développement de formulaires web, il est souvent nécessaire d'empêcher l'envoi
 * standard du formulaire pour effectuer un traitement en JavaScript, comme la validation des
 * données côté client, ou l'envoi des données de formulaire via AJAX. Pour ce faire, JavaScript
 * offre une méthode pour intercepter l'événement d'envoi du formulaire et empêcher son
 * comportement par défaut.
 *
 * Syntaxe de base pour empêcher l'envoi d'un formulaire:
 * form.addEventListener('submit', function(event) {
 *   event.preventDefault();
 * });
 */

/*
 * Exercice 1: Empêchement de l'envoi d'un formulaire
 *
 * Objectif: Attacher un gestionnaire d'événements à un formulaire pour empêcher son envoi
 * lors du clic sur le bouton de soumission.
 *
 * Instructions:
 * 1. Sélectionnez le formulaire à l'aide de document.querySelector ou tout autre sélecteur DOM.
 * 2. Attachez un gestionnaire d'événements pour l'événement 'submit'.
 * 3. Utilisez event.preventDefault() dans le gestionnaire pour empêcher l'envoi du formulaire.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Validation de formulaire personnalisée
 *
 * Objectif: Utiliser la prévention de l'envoi du formulaire pour effectuer une validation
 * personnalisée des champs de formulaire avant d'autoriser l'envoi.
 *
 * Instructions:
 * 1. Dans le gestionnaire d'événements 'submit', effectuez des vérifications sur les champs
 *    du formulaire pour valider les données saisies par l'utilisateur.
 * 2. Si les données sont valides, permettez l'envoi du formulaire en utilisant une méthode
 *    de votre choix (par exemple, envoi AJAX ou submission manuelle du formulaire).
 * 3. Si les données ne sont pas valides, affichez des messages d'erreur et continuez à empêcher
 *    l'envoi du formulaire.
 */

// Code...

/* ------------------------------------------------------------------------- */
/*
 * Exercice 3: Envoi de formulaire via AJAX après validation
 *
 * Objectif: Après avoir empêché l'envoi standard du formulaire et validé les données, effectuer
 * un envoi de formulaire asynchrone via AJAX.
 *
 * Instructions:
 * 1. Suite à la validation réussie des données de formulaire dans le gestionnaire d'événements 'submit',
 *    préparez les données du formulaire pour l'envoi.
 * 2. Utilisez l'API Fetch ou XMLHttpRequest pour envoyer les données de manière asynchrone.
 * 3. Traitez la réponse du serveur et informez l'utilisateur que l'envoi a été réussi ou non.
 */

// Code...
