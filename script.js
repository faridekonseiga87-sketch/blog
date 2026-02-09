emailjs.init("m52L_unUXYOZ23bMJ");
document.querySelector("#proContactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.send("service_r7xg6sk","template_9x2ojgj",{
        name: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        objet: document.getElementById("subject").value,
        message: document.getElementById("message").value
        
    })
    .then(() => {
        alert ("Message envoyé avec succès")
    })
    .catch(error => {
        alert("Erreur : " + JSON.stringify(error));
    });

});

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    
    // Alterne la classe dark-mode
    body.classList.toggle('dark-mode');
    
    // Change le texte du bouton et sauvegarde le choix
    if (body.classList.contains('dark-mode')) {
        btn.textContent = "Mode Claire";
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = "Mode Sombre";
        localStorage.setItem('theme', 'light');
    }
}

// Applique le thème sauvegardé au chargement de la page
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = "light";
    }
};
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); // Anime le bouton en X
    menuLinks.classList.toggle('is-active'); // Ouvre/Ferme le menu
});

// Optionnel : Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('is-active');
}));
// Fonction pour détecter quand un élément est visible à l'écran
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// On applique l'effet sur toutes les cartes de service et de compétence
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

const contactForm = document.getElementById('proContactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    
    const btn = this.querySelector('.btn-submit');
    const originalText = btn.innerHTML;
    
    // Animation de chargement
    btn.innerHTML = "Envoi en cours... ⏳";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // Simulation d'envoi (à remplacer par votre logique EmailJS)
    setTimeout(() => {
        btn.innerHTML = "Message envoyé ! ✅";
        btn.style.backgroundColor = "#27ae60";
        this.reset(); // Vide le formulaire
        
        // Retour à la normale après 3 secondes
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = ""; 
            btn.style.opacity = "1";
            btn.disabled = false;
        }, 3000);
    }, 2000);
});

