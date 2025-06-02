
// agenda-mixite.js

// Function to load the agenda content dynamically
(function() {
    const container = document.getElementById('agenda-mixite');
    if (!container) return;

    // Create iframe as fallback for simplicity (temporary version)
    const iframe = document.createElement('iframe');
    iframe.src = "https://mmtech8.github.io/cal1/";
    iframe.style.width = "100%";
    iframe.style.height = "2500px";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.loading = "lazy";

    container.appendChild(iframe);
})();
