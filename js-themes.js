function toggleTheme() {
    const html = document.documentElement;
    const sun = document.getElementById('sun-icon');
    const moon = document.getElementById('moon-icon');
    
    if (html.classList.contains('dark')) {
        html.classList.replace('dark', 'light');
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
        localStorage.setItem('aura-theme', 'light');
    } else {
        html.classList.replace('light', 'dark');
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
        localStorage.setItem('aura-theme', 'dark');
    }
}

// Inicia com o tema salvo
if (localStorage.getItem('aura-theme') === 'light') toggleTheme();