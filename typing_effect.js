document.addEventListener('DOMContentLoaded', function () {
    const titleElement = document.getElementById('typing-title');
    const textToType = "Devenez maîtres du jeu de votre transition numérique";

    // Paramètres
    const typingSpeed = 80;   // ms
    const delayBeforeRestart = 300000;

    // Initialisation
    let charIndex = 1; // IMPORTANT : on commence après le "D"

    // On fixe la première lettre immédiatement
    titleElement.textContent = textToType.charAt(0);

    function typeWriter() {
        if (charIndex < textToType.length) {
            titleElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Optionnel : redémarrage après un délai
            setTimeout(resetTyping, delayBeforeRestart);
        }
    }

    function resetTyping() {
        charIndex = 1;
        titleElement.textContent = textToType.charAt(0);
        typeWriter();
    }

    // Curseur clignotant (optionnel)
    function blinkCursor() {
        titleElement.classList.toggle('cursor');
    }

    typeWriter();
    setInterval(blinkCursor, 500);
});


// document.addEventListener('DOMContentLoaded', function() {
//     const titleElement = document.getElementById('typing-title');
//     const textToType = "Devenez maîtres du jeu de votre transition numérique"; // Texte à taper
    
//     // Paramètres
//     const typingSpeed = 100;    // Vitesse de frappe (ms)
//     const deletingSpeed = 50;  // Vitesse d'effacement (ms)
//     const delayBeforeDelete = 500000; // Pause avant d'effacer (ms)
//     const delayBeforeType = 50;    // Pause avant de recommencer la frappe (ms)

//     let charIndex = 0;
//     let isTyping = true; // Pour alterner entre les modes frappe et effacement

//     // 1. Fonction pour le mode FRAIPPE (Typing)
//     function typeWriter() {
//         if (charIndex < textToType.length) {
//             // Ajoute le caractère suivant
//             titleElement.textContent += textToType.charAt(charIndex);
//             charIndex++;
//             setTimeout(typeWriter, typingSpeed);
//         } else {
//             // Une fois terminé, passe au mode EFFACEMENT après un délai
//             isTyping = false;
//             setTimeout(deleteWriter, delayBeforeDelete);
//         }
//     }

//     // 2. Fonction pour le mode EFFACEMENT (Deleting)
//     function deleteWriter() {
//         if (charIndex > 0) {
//             // Supprime le dernier caractère
//             titleElement.textContent = textToType.substring(0, charIndex - 1);
//             charIndex--;
//             setTimeout(deleteWriter, deletingSpeed);
//         } else {
//             // Une fois vide, repasse au mode FRAPPE après un délai
//             isTyping = true;
//             setTimeout(typeWriter, delayBeforeType);
//         }
//     }

    
//     function blinkCursor() {
//         // Toggle la classe 'cursor' pour l'effet de clignotement
//         titleElement.classList.toggle('cursor');
//     }
    
//     // Démarrage initial
//     typeWriter();

//     // Démarrage du clignotement du curseur toutes les 500ms
//     // Note: Pour que cela fonctionne, vous devez ajouter le style CSS du curseur (voir section suivante)
//     setInterval(blinkCursor, 500); 
// });