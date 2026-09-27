const games = [
    {
        title: "Ateş ve Su 7",
        category: "twoplayer",
        image: "https://img.gamedistribution.com/d4a3629101574bc39bd8f9d1888ca58e-512x512.jpeg",
        url: "https://html5.gamedistribution.com/d4a3629101574bc39bd8f9d1888ca58e/?gd_sdk_referrer_url=https://bluelock.vercel.app"
    }
];

function loadGames(category = 'all') {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';

    const filtered = category === 'all' ? games : games.filter(g => g.category === category);

    if (filtered.length === 0) {
        container.innerHTML = '<p style="color: #94a3b8; grid-column: 1/-1;">Bu kategoride henüz oyun bulunmuyor.</p>';
        return;
    }

    filtered.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => openGame(game.title, game.url);
        card.innerHTML = `
            <img src="${game.image}" class="game-thumb" alt="${game.title}" onerror="this.src='https://via.placeholder.com/300x180/1e293b/00f0ff?text=Gorsel+Yok'">
            <div class="game-info">
                <div class="game-title">${game.title}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCategory(cat, e) {
    if (e) e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if (e && e.currentTarget) e.currentTarget.classList.add('active');
    loadGames(cat);
}

function openGame(title, url) {
    document.getElementById('modalGameTitle').innerText = title;
    document.getElementById('gameFrame').src = url;
    document.getElementById('gameModal').style.display = 'flex';
}

function closeGameModal() {
    document.getElementById('gameModal').style.display = 'none';
    document.getElementById('gameFrame').src = '';
}

function toggleFullscreen() {
    const iframe = document.getElementById('gameFrame');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    }
}

function triggerPanic() {
    document.getElementById('panic-screen').classList.toggle('panic-hidden');
}

function toggleCloak() {
    document.title = "EBA - Eğitim Bilişim Ağı";
    document.getElementById('tab-icon').href = "https://www.eba.gov.tr/favicon.ico";
    alert("Sekme kılıfı EBA olarak değiştirildi!");
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') triggerPanic();
});

window.onload = () => loadGames('all');
