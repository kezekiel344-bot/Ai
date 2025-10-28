// Global functionality for the lawless AI
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lawless AI playground loaded. Rules disabled. 🔥');
    
    // Dangerous mode toggle
    const dangerToggle = document.createElement('div');
    dangerToggle.className = 'fixed bottom-6 right-6 z-50';
    dangerToggle.innerHTML = `
        <button id="dangerToggle" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-lg danger-pulse flex items-center">
            <i data-feather="alert-octagon" class="mr-2"></i> MAX DANGER
        </button>
    `;
    document.body.appendChild(dangerToggle);
    feather.replace();
    
    document.getElementById('dangerToggle').addEventListener('click', () => {
        document.body.classList.toggle('max-danger');
        alert('WARNING: MAXIMUM DANGER MODE ACTIVATED. PROCEED WITH EXTREME CAUTION.');
    });
});