document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Henrrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gustavo Limma', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santanna', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        { name: 'O Céu Explica tudo (Ao Vivo)', artist: 'Henrrique & juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-hit-me.jpg' },
        { name: 'Escandalo Ìntimo', artist: 'Luiza Sonza', image: './img/album-escandalo.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

        artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src='${artist.image}' alt='imagem do ${artist.name}'>
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `

        artistGrid.appendChild(artistCard)
    })
        albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src='${album.image}' alt='imagem do ${album.name}'>
            <div>
                <h3>${album.name}</h3>
                <p>${album.name}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
    })
})
