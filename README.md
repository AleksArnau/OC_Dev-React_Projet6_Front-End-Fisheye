# Base de code du projet P6 - Parcours Front-end

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
