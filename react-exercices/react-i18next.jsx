/*
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    react-i18next.jsx                                   |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2024/04/18 08:36:55 by YohanGH           '__   _/_               #
#    Updated: 2024/04/18 08:36:55 by YohanGH          (___)=(___)              #
#                                                                              #
# **************************************************************************** #
*/

/**
 * Thème: Internationalisation des Applications React avec `react-i18next`
 *
 * L'internationalisation, souvent abrégée en i18n, est le processus de planification et d'implémentation
 * de fonctionnalités qui permettent à une application de fonctionner pour les utilisateurs du monde entier.
 * Cela implique généralement la traduction de l'interface utilisateur et la gestion des formats locaux pour
 * les dates, les nombres, et d'autres données spécifiques à chaque culture ou langue.
 *
 * `react-i18next` est une des bibliothèques les plus populaires pour l'internationalisation des applications React.
 * Elle offre une intégration facile avec les applications React et supporte les fonctionnalités telles que le
 * chargement paresseux des traductions, le pluriel, la mise en forme des dates et des nombres, et bien d'autres.
 *
 * Utiliser `react-i18next` permet non seulement de rendre votre application accessible à un public mondial mais
 * également d'améliorer l'expérience utilisateur en proposant des contenus dans la langue de l'utilisateur, ce qui
 * peut augmenter significativement l'engagement et la satisfaction des utilisateurs.
 *
 * Exemple de base pour configurer `react-i18next`:
 *
 * 1. Installation de la bibliothèque:
 *    npm install react-i18next i18next
 *
 * 2. Configuration de base et utilisation dans l'application:
 *    (Voir les exemples dans les exercices suivants)
 */

/**
 * Exercice 1: Configuration de base de `react-i18next`
 *
 * Objectif: Mettre en place une configuration de base pour utiliser `react-i18next` dans une application React.
 *
 * Instructions:
 * 1. Configurez i18next avec un fichier de traductions pour deux langues: anglais et français.
 * 2. Créez un composant simple qui utilise la traduction.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Code...

/* ************************************************************************* */

/**
 * Exercice 2: Changement de langue à la volée
 *
 * Objectif: Permettre à l'utilisateur de changer la langue de l'application en utilisant `react-i18next`.
 *
 * Instructions:
 * 1. Ajoutez des boutons pour changer la langue entre l'anglais et le français.
 * 2. Utilisez le hook `useTranslation` pour rendre la traduction et changer la langue.
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

// Code...

/* ************************************************************************* */

/**
 * Exercice 3: Utilisation avancée de la mise en forme des nombres et des dates
 *
 * Objectif: Montrer comment utiliser `react-i18next` pour formater les nombres et les dates selon la locale.
 *
 * Instructions:
 * 1. Formatez un nombre en format monétaire.
 * 2. Affichez une date formatée selon la langue sélectionnée.
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

// Code...
