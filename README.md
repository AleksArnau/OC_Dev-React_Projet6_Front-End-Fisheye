# Base de code du projet P6 - Parcours Front-end

# TODO

make the template functions section agnostic (ex ".portfolio_section")
properly sort the display init as one reusable function

close the modal/sort tab when clicking away

# TODO bugs

1er display des video n'est pas indexé corectement
the video is also the only tabbable element
cannot use enter to open an element anymore
// handles enter keypresses as clicks
function handleEnter(e) {
var keycode = e.keyCode ? e.keyCode : e.which;
if (keycode == "13") {
document.activeElement.click();
}
}
using a key closes the modal, can't write text

## Démarrer le projet

Rien à installer ici, il suffit d'ouvrir le fichier `index.html`.

https://github.com/AleksArnau/OC_Dev-React_Projet6_Front-End-Fisheye

https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye

https://openclassrooms.com/fr/paths/516/projects/808/assignment

https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders

https://course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/P6+Front-End+-+Etapes+cles.pdf

https://course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/Notes+de+reunion.pdf

https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0%3A1&mode=dev

code de Cheihk pour la modale

function trapFocus(element) {
const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];

function handleFocus(event) {
if (event.key === 'Tab') {
// Si Shift+Tab est pressé
if (event.shiftKey) {
if (document.activeElement === firstFocusableElement) {
lastFocusableElement.focus();
event.preventDefault();
}
// Si Tab est pressé
} else {
if (document.activeElement === lastFocusableElement) {
firstFocusableElement.focus();
event.preventDefault();
}
}
}
}

element.addEventListener('keydown', handleFocus);

// Mettre le focus initial sur le premier élément focusable
firstFocusableElement.focus();
}

// À appeler lorsque la modale est ouverte
trapFocus(document.querySelector('#maModal'));

insertAdjacentHTML(position, text);

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div class="gallery">

    </div>

</body>
    <script>
        const gallery = document.querySelector('.gallery');

        data.forEach(element => {
            gallery.insertAdjacentHTML('beforend', `
                <div>

                    <img src="${element.url}" />
                    <p>${element.text}</p>

                </diV>
            `)
        });
    </script>

</html>

🕵️ Critères d'évaluation
🎯Développer une application modulaire avec des modèles de conception

Livrable : Repo GitHub

Le code est complet quand :

❒ Aucun bug n'est rencontré.

❒ Aucune erreur n'est affichée dans la console.

Le code est pertinent quand :

❒x Le pattern Factory est utilisé pour générer différents éléments de DOM pour les vidéos ou les photos.

❒x Le DOM est généré via du JavaScript basé sur le fichier JSON fourni, au lieu d'être écrit à la main.

❒x Il comprend tous les photographes et les images fournies.

❒x Les pages des photographes sont générées en utilisant un unique fichier HTML.

Le code est présentable quand :

❒x Le design correspond aux maquettes.

🎯x Écrire du code JavaScript maintenable

x Livrable : Repo GitHub

Le code est complet quand :

❒x Le code passe les tests ESLint par défaut. (Remarque : les étudiants sont autorisés à faire taire certains avertissements ESLint s'ils peuvent le justifier durant la soutenance).

Le dépôt de code est présentable quand :

❒x Le code est bien commenté, ce qui signifie que toute intention qui ne peut être immédiatement comprise en regardant le code lui-même peut être comprise en lisant les commentaires.

❒x  Les identificateurs tels que les noms de classe, de méthode et de variable décrivent leur but avec exactitude et précision.

❒x Les versions récentes de JavaScript sont utilisées sans caractéristiques dépréciées.

🎯Assurer l'accessibilité d'un site web

Livrable : Repo GitHub

Le code est pertinent quand :

❒x Des éléments HTML pertinents et spécifiques sont choisis (ex. : <nav>, <article> au lieu d'utiliser <div> et <span> pour tout).

❒x Les balises ARIA sont utilisées pour décrire des éléments personnalisés.

❒ Les balises d'accessibilité passent le test AChecker sans "known issues".

❒ Le site est navigable avec un clavier.

❒x La lightbox est navigable avec un clavier.

❒x Le site fournit un texte alternatif pour toutes les images et vidéos afin de garantir l'accessibilité aux lecteurs d'écran.

🎯Gérer les évènements du site

Livrable : Dépôt de code

Le code est pertinent quand :

❒ Les event listeners sont utilisés pour répondre à toutes les interactions au clavier ou à la souris.

❒x Lorsque l'utilisateur clique sur la vignette d'un photographe sur la page d'accueil, il est amené sur une page spécifique à ce photographe.

❒x Lorsque l'utilisateur clique sur l'icône "like" sur la page du photographe, il incrémente le nombre de "like".

❒x Les médias peuvent être triés par popularité, date ou titre en cliquant sur le filtre de tri souhaité.

❒x Lorsque l'utilisateur clique sur un élément média sur la page du photographe, l’élément est affiché dans une modale type lightbox.

❒x La lightbox peut être fermée en cliquant sur une croix dans le coin.

❒x La lightbox présente des boutons de navigation sur le côté pour passer d'un média à un autre (les utilisateurs peuvent cliquer sur ces boutons pour naviguer).

❒x Un bouton de contact cliquable sur la page du photographe lance une modale, qui comprend des champs pour le nom, l'e-mail et le message.

❒ L'envoi du formulaire (via le bouton Envoyer) permet d’afficher le contenu des 3 champs dans la console.

Le code est présentable quand :

❒x La page d'accueil répertorie tous les photographes avec leur nom, leur slogan, leur lieu, leur prix/heure et une image miniature.

❒x La page de chaque photographe présente une galerie avec des photos et des vidéos.

❒x Chaque média sur la page du photographe comprend le titre et le nombre de likes.

❒x Le nombre total de photos aimées par un photographe est indiqué.

❒x Toutes les pages demandées sont cohérentes avec les maquettes. 
