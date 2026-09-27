// Oyun ve Unblocker Veri Tabanı
const games = [
    {
        title: "Eaglercraft 1.8 (Minecraft)",
        category: "pc",
        image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=500&q=80",
        url: "https://eaglercraft.com/mc/1.8.8/"
    },
    {
        title: "Google Proxied Web",
        category: "unblocker",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80",
        url: "https://www.bing.com"
    }
];

// Sayfa Yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
    loadGames(games);
});

// Oyunları Ekrana Yazdırma
function loadGames(items) {
    const grid = document.getElementById("gamesGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='color: #a0aec0; grid-column: 1/-1;'>Bu kategoride henüz yayınlanmış içerik bulunmuyor. Yakında eklenecektir!</p>";
        return;
    }

    items.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.onclick = () => openGame(game.title, game.url);

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/300x180?text=Gorsel+Yok'">
            <div class="game-info">
                <h3>${game.title}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Kategori Filtreleme
function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (cat === 'all') {
        loadGames(games);
    } else {
        const filtered = games.filter(g => g.category === cat);
        loadGames(filtered);
    }
}

// Oyun / Unblocker Açma
function openGame(title, url) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("gameIframe").src = url;
    document.getElementById("gameModal").style.display = "flex";
}

// Modal Kapatma
function closeGame() {
    document.getElementById("gameModal").style.display = "none";
    document.getElementById("gameIframe").src = "";
}

// Özel URL Açma Barı
function openCustomUrl() {
    let url = document.getElementById("customUrl").value.trim();
    if (!url) return;
    
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }
    openGame("Özel Bağlantı", url);
}

// Tam Ekran
function toggleFullscreen() {
    const iframe = document.getElementById("gameIframe");
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    }
}

// Panik Butonu
function panic() {
    window.location.href = "https://eba.gov.tr";
}
    
