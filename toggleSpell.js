// toggleSpell.js toggles color for the Tempest site
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleSpell').addEventListener('click', function() {
        document.body.classList.toggle('cast-spell');
    });
});
