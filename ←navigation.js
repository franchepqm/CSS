document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
        history.back();
    });
});
