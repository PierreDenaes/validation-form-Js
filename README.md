# Validation de Formulaire en JavaScript

## Description du Projet

Ce projet implémente un formulaire d'inscription robuste en JavaScript pour la validation côté client. Le formulaire inclut des champs pour le nom d'utilisateur, le nom, le prénom, l'email, la date de naissance, le mot de passe, la confirmation du mot de passe, et le sexe. Il utilise des validations variées pour assurer la saisie de données correctes et sécurisées.

## Fonctionnalités

- **Validation du Formulaire**: Validation de chaque champ suivant des règles prédéfinies (format d'email, longueur de mot de passe, etc.).
- **Affichage des Erreurs**: Affichage en rouge des messages d'erreur à côté des champs concernés.
- **Masquage/Affichage du Mot de Passe**: Bouton pour basculer entre l'affichage et le masquage du mot de passe.
- **Validation en Temps Réel**: Utilisation de la fonction `debounce` pour valider les champs après un délai, offrant un retour immédiat.

## Structure du Code

1. **Déclaration des Variables**: Sélection des éléments du formulaire via le DOM.
2. **Gestionnaire d'Événements**: Écouteurs d'événements pour les interactions utilisateur.
3. **Fonctions de Validation**: Fonctions pour valider les différents aspects du formulaire.
4. **Affichage des Erreurs et Succès**: Fonctions `showError` et `showSuccess` pour gérer les messages d'erreur et de succès.
5. **Validation Globale**: Vérification de toutes les validations à la soumission du formulaire.
6. **Validation Instantanée**: Utilisation de `debounce` pour la validation en temps réel.

## Technologies Utilisées

- HTML
- CSS
- JavaScript

## Installation et Exécution

1. Clonez le dépôt.

    ```bash
    git clone
    ````

2. Installer Bootstrap pour la présentation

    ```bash
    npm i bootstrap
    ````

3. Ouvrez `index.html` dans un navigateur.
4. Testez les validations en remplissant le formulaire.

## Contribution

Les contributions sont bienvenues. Suivez ces étapes pour contribuer :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature/fooBar`).
3. Faites vos modifications.
4. Soumettez une pull request.

## Licence

Sous licence MIT. Voir `LICENSE` pour plus de détails.
