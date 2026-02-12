document.addEventListener("DOMContentLoaded", () => {
    /**
     * 1. FITUR MOBILE MENU
     * Logika untuk membuka dan menutup navigasi pada layar HP
     */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animasi ikon bar ke X
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Tutup menu otomatis saat salah satu link diklik
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    /**
     * 2. STICKY NAVBAR EFFECT
     * Memberikan background solid saat user scroll ke bawah agar teks tetap terbaca
     */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    /**
     * 3. REVEAL ANIMATION ON SCROLL
     * Memunculkan elemen secara halus saat di-scroll
     */
    const reveal = () => {
        const elements = document.querySelectorAll('section, .feature-card, .creator-card');
        elements.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 100; // Jarak muncul sebelum elemen terlihat penuh

            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Jalankan reveal saat scroll
    window.addEventListener('scroll', reveal);

    /**
     * 4. DYNAMIC STYLING
     * Menambahkan CSS transition secara dinamis agar HTML tetap bersih
     */
    const style = document.createElement('style');
    style.innerHTML = `
        /* Default State untuk Animasi */
        section, .feature-card, .creator-card { 
            opacity: 0; 
            transform: translateY(30px); 
            transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); 
        }
        
        /* State saat elemen sudah masuk viewport */
        .active { 
            opacity: 1 !important; 
            transform: translateY(0) !important; 
        }

        /* Styling tambahan untuk menu mobile agar berfungsi dengan JS di atas */
        @media (max-width: 768px) {
            .nav-links {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: white;
                padding: 20px 0;
                gap: 20px;
                text-align: center;
                border-bottom: 1px solid rgba(179, 135, 40, 0.2);
                transform: translateY(-150%);
                transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: -1;
                box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            }
            .nav-links.active {
                transform: translateY(0);
            }
            .menu-toggle {
                display: block;
                font-size: 1.5rem;
                color: #b38728;
                cursor: pointer;
            }
        }
    `;
    document.head.appendChild(style);

    // Jalankan sekali saat pertama kali load
    reveal(); 
});