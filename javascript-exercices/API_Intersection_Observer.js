// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   API_Intersection_Observer.js                        |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/04/06 16:00:46 by YohanGH           '__   _/_              //
//   Updated: 2024/04/07 09:20:48 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/**
 * Thème: Utilisation de l'API Intersection Observer en JavaScript
 *
 * L'API Intersection Observer permet de détecter quand un élément cible entre dans le viewport
 * du navigateur ou en sort, offrant une manière performante d'effectuer des opérations basées
 * sur la visibilité des éléments, comme le chargement paresseux d'images ou l'implémentation
 * de l'analyse du comportement de défilement des utilisateurs.
 *
 * Syntaxe de base pour utiliser l'API Intersection Observer:
 * const observer = new IntersectionObserver(callback);
 * observer.observe(document.getElementById('element'));
 */

/*
 * Exercice 1: Création d'un Intersection Observer de base
 *
 * Objectif: Utiliser l'API Intersection Observer pour détecter l'entrée et la sortie d'un élément
 * spécifique dans le viewport.
 *
 * Instructions:
 * 1. Sélectionnez un élément du DOM à observer.
 * 2. Créez une instance de IntersectionObserver, en fournissant une fonction de rappel qui sera
 *    exécutée chaque fois que l'élément observé entre dans ou sort du viewport.
 * 3. Utilisez la méthode observe pour commencer à observer l'élément sélectionné.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 2: Configuration des options de l'observer
 *
 * Objectif: Configurer l'Intersection Observer avec des options spécifiques pour contrôler quand
 * la fonction de rappel doit être exécutée.
 *
 * Instructions:
 * 1. Lors de la création de l'Intersection Observer, passez un deuxième argument avec un objet
 *    d'options, en configurant des propriétés comme root, rootMargin, et threshold.
 * 2. Testez l'effet de ces options sur le comportement de la fonction de rappel.
 */

// Code...

/* ------------------------------------------------------------------------- */

/*
 * Exercice 3: Arrêt de l'observation
 *
 * Objectif: Démontrer comment arrêter d'observer un élément avec l'API Intersection Observer
 * une fois que certaines conditions sont remplies.
 *
 * Instructions:
 * 1. Dans la fonction de rappel de votre Intersection Observer, implémentez une logique qui
 *    arrête d'observer l'élément une fois qu'un certain critère est atteint (par exemple,
 *    après la première fois que l'élément entre dans le viewport).
 * 2. Utilisez la méthode unobserve de l'instance de IntersectionObserver pour arrêter d'observer
 *    l'élément.
 */

// Code...


