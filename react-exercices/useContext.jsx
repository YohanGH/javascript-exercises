/*
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    useContext.jsx                                      |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2024/04/18 08:23:24 by YohanGH           '__   _/_               #
#    Updated: 2024/04/18 08:23:24 by YohanGH          (___)=(___)              #
#                                                                              #
# **************************************************************************** #
*/

/**
 * Thème: Utilisation de `useContext` pour la gestion de l'état global en React
 *
 * `useContext` est un hook fourni par React pour permettre à des composants de s'abonner à des données de contexte
 * sans recourir à des composants intermédiaires. Cela simplifie l'accès aux données partagées à travers l'application,
 * permettant une structure de code plus propre et évitant le prop-drilling, où les données doivent être passées à travers
 * de multiples niveaux de composants.
 *
 * Ce hook est particulièrement utile dans les applications où des données telles que les préférences de l'utilisateur,
 * le thème de l'interface, ou l'état d'authentification doivent être accessibles de manière globale et réactive.
 *
 * Exemple d'utilisation de `useContext`:
 *
 * const value = useContext(MyContext);
 *
 * Ce simple appel permet à un composant de lire la valeur actuelle du contexte `MyContext`, rendant les données
 * disponibles immédiatement pour l'utilisation dans le rendu ou la logique du composant.
 */

/**
 * Exercice 1: Création d'un contexte pour un thème
 *
 * Objectif: Apprendre à créer et utiliser un contexte pour gérer le thème de l'interface utilisateur dans une application React.
 *
 * Instructions:
 * 1. Créez un contexte de thème avec `React.createContext`.
 * 2. Utilisez `useContext` dans un composant pour lire le thème actuel.
 * 3. Changez le thème en utilisant un bouton qui met à jour le contexte.
 */

import React, { useState, createContext, useContext } from 'react';

// Code...
// Création du contexte de thème

// Composant principal qui utilise le Provider

// Composant qui consomme le thème

/* ************************************************************************* */

/**
 * Exercice 2: Gestion de l'état d'authentification avec `useContext`
 *
 * Objectif: Utiliser `useContext` pour gérer et accéder à l'état d'authentification dans une application.
 *
 * Instructions:
 * 1. Créez un contexte d'authentification pour stocker les informations de l'utilisateur.
 * 2. Fournissez des fonctions pour se connecter et se déconnecter qui mettront à jour le contexte.
 * 3. Affichez l'état de connexion dans un composant consommateur.
 */

import React, { useState, createContext, useContext } from 'react';

// Code...


/* ************************************************************************* */

/**
 * Exercice 3: Utilisation de plusieurs contextes
 *
 * Objectif: Combiner plusieurs contextes pour gérer différents aspects de l'état de l'application.
 *
 * Instructions:
 * 1. Créez deux contextes différents, un pour la langue et un autre pour le thème.
 * 2. Utilisez `useContext` pour accéder à ces valeurs dans un même composant.
 * 3. Permettez aux utilisateurs de changer la langue et le thème via des boutons.
 */

import React, { useState, createContext, useContext } from 'react';

// Code...

