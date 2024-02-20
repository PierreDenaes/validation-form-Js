// Je dois créer mes variables
const form = document.querySelector("#signup")
const togglePassword = document.querySelector('#togglePassword');
const usernameEl = document.forms.formValidate.username
const nameEl = document.forms.formValidate.name
const firstNameEl = document.forms.formValidate.firstname
const emailEl = document.forms.formValidate.email
const dobEl = document.forms.formValidate.dob
const passwordEl = document.forms.formValidate.password
const confPassEl = document.forms.formValidate['confirm-password'] 
const sexEl = document.forms.formValidate.sex
// Visibilité password
togglePassword.addEventListener('click', function (e) {
    // Basculer le type de l'input entre 'password' et 'text'
    const type = passwordEl.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordEl.setAttribute('type', type);
    
    // Basculer l'icône
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});
// J'ai besoin d'une fonction qui vérifie si la valeur d'un input est vide
function isRequired(elementValue){
    if(elementValue == ""){
        return false
    }else{
        return true
    }
}
// J'ai besoin d'une fonction de vérification de taille
function isBetween(length, min, max){
    if(length < min || length > max){
        return false
    }else{
        return true
    }
}
// J'ai besoin d'une fonction qui interdit les mots "root", "afpa", "deus" et qui n'autorise que la saisie de lettre
function isNameValid(elementValue){
    const re = /^(?!.*\b(afpa|root|deus)\b)[a-zA-Z]+$/;
    return re.test(elementValue);
}
// J'ai besoin d'une fonction pour valider le format email ainsi qu'interdire les entrées de type "@yopmail.com", "root@afpa.fr", "afpa@afpa.com", "deus@afpa.org"
function isValidEmail(elementValue) {
    const regex = /^(?!root@afpa\.fr|afpa@afpa\.com|deus@afpa\.org)(?!.*@yopmail\.com$)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(elementValue);
}
function isPasswordValid(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
}
// J'ai besoin d'une fonction qui permette d'afficher les erreurs en rouge
function showError(input,message){
    const formField = input.parentElement;
    formField.classList.remove("success")// class css
    formField.classList.add("error")// class css
    const errorEl = formField.querySelector("small")
    errorEl.textContent = message
}
// J'ai besoin d'une fonction qui permette d'afficher l'element valide en vert
function showSuccess(input){
    const formField = input.parentElement;
    formField.classList.remove("error")// class css
    formField.classList.add("success")// class css
    const errorEl = formField.querySelector("small")
    errorEl.textContent = ""
}
// Fonction pour vérifier la validité du nom d'utilisateur. Vérifie si le nom d'utilisateur n'est pas vide, si sa longueur est comprise entre les valeurs min et max et s'il ne contient que des lettres et n'est pas l'un des mots interdits ("root", "afpa", "deus").
const checkUserName = () => {
    let valid = false
    const min = 3,
    max = 25
    const username = usernameEl.value.trim()// permet de supprimer les espaces
    if (!isRequired(username)) {
        showError(usernameEl, "Le username ne peut pas être vide");
    } else if (!isBetween(username.length, min, max)) {
        showError(
            usernameEl,
            `Le username doit avoir entre ${min} et ${max} caractères.`
        )
    }else if (!isNameValid(username)){
        showError(
            usernameEl,
            `Le username ne doit contenir que des lettres et ne peut être "root","afpa","deus".`
        )
    }else {
        showSuccess(usernameEl)
        valid = true
    }
    return valid; 
}
// Fonction pour vérifier la validité du nom. Vérifie si le nom n'est pas vide, si sa longueur est comprise entre les valeurs min et max et s'il ne contient que des lettres et n'est pas l'un des mots interdits ("root", "afpa", "deus").
const checkName = () => {
    let valid = false
    const min = 3,
    max = 25
    const name = nameEl.value.trim()// permet de supprimer les espaces
    if (!isRequired(name)) {
        showError(nameEl, "Le nom d'utilisateur ne peut pas être vide");
    } else if (!isBetween(name.length, min, max)) {
        showError(
            nameEl,
            `Le nom d'utilisateur doit avoir entre ${min} et ${max} caractères.`
        )
    }else if (!isNameValid(name)){
        showError(
            nameEl,
            `Le nom d'utilisateur ne doit contenir que des lettres et ne peut être "root","afpa","deus".`
        )
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid; 

}
// Fonction pour vérifier la validité du prénom. Vérifie si le prénom n'est pas vide, si sa longueur est comprise entre les valeurs min et max et s'il ne contient que des lettres et n'est pas l'un des mots interdits ("root", "afpa", "deus").
const checkFirstName = () => {
    let valid = false
    const min = 3,
    max = 25
    const firstName = firstNameEl.value.trim()// permet de supprimer les espaces
    if (!isRequired(firstName)) {
        showError(firstNameEl, "Le prénom d'utilisateur ne peut pas être vide");
    } else if (!isBetween(firstName.length, min, max)) {
        showError(
            firstNameEl,
            `Le prénom d'utilisateur doit avoir entre ${min} et ${max} caractères.`
        )
    }else if (!isNameValid(firstName)){
        showError(
            firstNameEl,
            `Le prénom d'utilisateur ne doit contenir que des lettres et ne peut être "root","afpa","deus".`
        )
    } else {
        showSuccess(firstNameEl);
        valid = true;
    }
    return valid; 

}
// Fonction pour vérifier la validité de l'email. Vérifie si l'email n'est pas vide, s'il respecte le format d'un email valide et s'il n'est pas un des emails interdits ou un email avec le domaine "yopmail.com".
const checkEmail = () => {
    let valid = false
    const email = emailEl.value.trim()
    if(!isRequired(email)){
        showError(
            emailEl,
            `l'email ne peut être vide.`
        )
    }else if(!isValidEmail(email)){
        showError(
            emailEl,
            `l'email doit respecter le format email et ne peut un yopmail.com ni être les mails suivant: "root@afpa.fr", "afpa@afpa.com", "deus@afpa.org" .`
        )
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}
// Fonction pour vérifier si l'utilisateur a au moins 21 ans. Vérifie si la date de naissance n'est pas vide et si l'utilisateur a au moins 21 ans.
const checkDob = () => {
    let valid = false
    const dobval = dobEl.value;
    const dob = new Date(dobval);
    const today = new Date();
    const twentyOneBirthday = new Date(dob.getFullYear() + 21, dob.getMonth(), dob.getDate());
    if(!isRequired(dobval)){
        showError(dobEl, "Vous devez renseigner votre age")
    }
    else if (twentyOneBirthday > today) {
        showError(dobEl, "Vous n'avez pas 21 ans");
    } else {
        showSuccess(dobEl);
        valid = true; 
    }
    return valid;
}
// Fonction pour vérifier la validité du mot de passe. Vérifie si le mot de passe n'est pas vide et s'il répond aux critères de complexité spécifiés.
const checkPass = () => {
    let valid = false
    const pass = passwordEl.value.trim()
    if(!isRequired(pass)){
        showError(passwordEl, 'Le mot de passe ne peut être vide')
    }else if(!isPasswordValid(pass)){
        showError(passwordEl, 'Le mot de passe doit comprendre au moins une majuscule un chiffre et un caratére spécial situé dans cette liste : (!@#$%^&*)')
    }else{
        showSuccess(passwordEl)
        valid = true
    }
    return valid
}
// Fonction pour vérifier la correspondance du mot de passe et de sa confirmation. Vérifie si la confirmation du mot de passe n'est pas vide et si elle correspond au mot de passe entré.
const confPass = () => {
    let valid = false
    const pass = passwordEl.value.trim();
    const conf = confPassEl.value.trim();
    if(!isRequired(conf)){
        showError(confPassEl, "La confirmation de mp ne peut être vide")
    }else if(pass !== conf){
        showError(confPassEl, "Les mots de passes ne correspondent pas")
    }else{
        showSuccess(confPassEl)
        valid = true
    }
    return valid
}
// Fonction pour vérifier la sélection du sexe. Vérifie si une option de sexe a été sélectionnée.
const checkSex = () => {
    let valid = false
    const sex = sexEl.value
    if(!isRequired(sex)){
        showError(sexEl, "Vous devez choisir votre bord")
    }else{
        showSuccess(sexEl)
        valid = true
    }
    return valid
}
// Je dois mettre en place un ecouteur d'évenement sur le submit de ma forme qui doit empecher la soumission du formulaire au serveur afin de pouvoir emettre les erreurs coté front sans rechargement de la page
form.addEventListener('submit',(e) => {
e.preventDefault()

let userNameOk = checkUserName(),
nameOk = checkName(),
firstNameOk = checkFirstName(),
emailOk = checkEmail(),
isAgeOk = checkDob(),
isPassOk = checkPass(),
isConfOk = confPass(),
isSexOk = checkSex();

let isFormValid = userNameOk && nameOk && firstNameOk && emailOk &&isAgeOk && isPassOk && isConfOk && isSexOk;
if(isFormValid){
    console.log('Tout est Ok pour l\'envoi')
}
}) 
// Techniquement, j'attendrai que les utilisateurs
// suspendent la saisie pendant un petit laps de temps ou arrêtent de taper avant de valider la saisie.
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};
/* Ajouter une fonction de rétroaction instantanée
Le formulaire n'affiche l'erreur ou le succès que lorsque vous cliquez sur le bouton S'inscrire. Pour fournir un retour instantané, vous pouvez attacher un écouteur d'événement
à l' input événement de chaque champ et le valider.
Il est encore mieux d'utiliser la délégation d'événement pour attacher l' inputécouteur
d'événement au formulaire et valider chaque champ en fonction de l'ID de champ actuel, comme ceci : */
form.addEventListener(
    "input",
    debounce(function (e) {
        switch (e.target.id) {
            case "username":
                checkUserName();
                break;
            case "name":
                checkName();
                break;
            case "firstname":
                checkFirstName();
                break;
            case "email":
                checkEmail();
                break;
            case "dob":
                checkDob();
                break;
            case "password":
                checkPass();
                break;
            case "confirm-password":
                confPass();
                break;
            case "sex":
                checkSex();
                break;
        }
    })
);

/*
Sélection des éléments du DOM : Vous utilisez une combinaison de document.querySelector et document.forms pour sélectionner les éléments du formulaire. Cette approche est cohérente et fonctionnelle.

Fonctions de validation :

    isRequired : Vérifie si un champ est vide.
    isBetween : Contrôle si la longueur d'une chaîne est comprise entre deux valeurs.
    isNameValid : Vérifie que le nom ne contient pas certains mots interdits et qu'il est composé uniquement de lettres.
    isValidEmail : Valide le format de l'e-mail et exclut des adresses e-mail spécifiques.
    isPasswordValid : Vérifie la complexité du mot de passe.

Ces fonctions de validation sont bien écrites et couvrent des cas de validation courants.

Affichage des erreurs : Les fonctions showError et showSuccess manipulent les classes CSS pour indiquer visuellement les erreurs ou la validation réussie. C'est une bonne pratique pour l'expérience utilisateur.

Validation individuelle des champs : Chaque champ a sa propre fonction de validation (checkUserName, checkName, etc.), ce qui rend votre code modulaire et facile à maintenir.

Gestion de l'événement Submit : Vous empêchez l'envoi du formulaire (e.preventDefault()) et exécutez toutes les validations. C'est une pratique standard pour les validations côté client.

Debounce pour la validation en temps réel : L'utilisation de debounce dans l'écouteur d'événements input est une excellente approche pour améliorer les performances et l'expérience utilisateur.*/