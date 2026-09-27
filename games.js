const games = [
    {
        title: "Eaglercraft 1.8 (Minecraft)",
        category: "pc",
        image: "https://eaglercraft.com/favicon.png",
        url: "https://eaglercraft.ru/"
    },
    {
        title: "Stick War: Legacy",
        category: "pc",
        image: "https://play-lh.googleusercontent.com/9mEylj8o3OebW3A_0N043_CgE1gY8qN7Y1I6o6N5g9n9XG9b",
        url: "https://stickwarlegacy.io/"
    },
    {
        title: "Drive Mad",
        category: "speed",
        image: "https://drivemad.io/upload/cache/upload/imgs/drive-mad-m200x200.png",
        url: "https://drivemad.io/"
    },
    {
        title: "Slope 3D",
        category: "speed",
        image: "https://slopegame.io/upload/cache/upload/imgs/slope-game-m200x200.png",
        url: "https://slopegame.io/"
    },
    {
        title: "Moto X3M",
        category: "speed",
        image: "https://motox3m.co/upload/cache/upload/imgs/moto-x3m-m200x200.png",
        url: "https://motox3m.co/"
    },
    {
        title: "Vex 7",
        category: "action",
        image: "https://vex7.io/upload/cache/upload/imgs/vex-7-m200x200.png",
        url: "https://vex7.io/"
    },
    {
        title: "Rooftop Snipers",
        category: "multi",
        image: "https://rooftopsnipers.io/upload/cache/upload/imgs/rooftop-snipers-m200x200.png",
        url: "https://rooftopsnipers.io/"
    },
    {
        title: "Getaway Shootout",
        category: "multi",
        image: "https://getawayshootout.com/upload/cache/upload/imgs/getaway-shootout-m200x200.png",
        url: "https://getawayshootout.com/"
    }
];

function loadGames(category = 'all') {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';

    const filtered = category === 'all' ? games : games.filter(g => g.category === category);

    filtered.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => openGame(game.title, game.url);
        card.innerHTML = `
            <img src="${game.image}" class="game-thumb" alt="${game.title}" onerror="this.src='https://via.placeholder.com/150/1e293b/00f0ff?text=Bluelock'">
            <div class="game-info">
                <div class="game-title">${game.title}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCategory(cat) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
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

function launchProxy() {
    let url = document.getElementById('proxyUrl').value.trim();
    if (url) openGame('Unblocked Web', url.startsWith('http') ? url : 'https://' + url);
}

function launchHeroProxy() {
    let url = document.getElementById('heroProxyUrl').value.trim();
    if (url) openGame('Unblocked Web', url.startsWith('http') ? url : 'https://' + url);
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
      
