document.addEventListener('keydown', function(event) {
    alert('Key ASCII Code: ' + event.key.charCodeAt(0));
});

// Prevent right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Context menu is disabled.');
});