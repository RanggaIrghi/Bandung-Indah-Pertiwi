document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic' 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    let isMenuOpen = false;

    btn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if(isMenuOpen) {
            menu.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none', 'invisible');
            menu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto', 'visible');
            
            iconOpen.classList.remove('rotate-0', 'scale-100', 'opacity-100');
            iconOpen.classList.add('-rotate-90', 'scale-50', 'opacity-0');
            
            iconClose.classList.remove('rotate-90', 'scale-50', 'opacity-0');
            iconClose.classList.add('rotate-0', 'scale-100', 'opacity-100');
        } else {
            menu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto', 'visible');
            menu.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none', 'invisible');
            
            iconOpen.classList.remove('-rotate-90', 'scale-50', 'opacity-0');
            iconOpen.classList.add('rotate-0', 'scale-100', 'opacity-100');
            
            iconClose.classList.remove('rotate-0', 'scale-100', 'opacity-100');
            iconClose.classList.add('rotate-90', 'scale-50', 'opacity-0');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slidesData = [
        {
            title: "Tropical Contemporary",
            subtitle: "Hangat & Berkarakter",
            desc: "Memadukan kehangatan material kayu natural dengan aksen hitam yang tegas dan backsplash hijau zamrud. Sentuhan kursi rotan klasik dan pencahayaan amber menciptakan suasana ruang yang intim namun berkelas.",
            img: "assets/images/Scene 24_5.webp",
            colors: ["#9c6644", "#1a1a1a", "#2e4934", "#d68c45"]
        },
        {
            title: "Classic Elegance",
            subtitle: "Kemewahan Abadi",
            desc: "Sentuhan klasik dengan proporsi simetris, material mewah seperti marmer dan detail klasik, menciptakan nuansa elegan yang tak lekang oleh waktu.",
            img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            colors: ["#e3dac9", "#8b7e66", "#2c2c2c", "#fdfdfd"]
        },
        {
            title: "Industrial Office",
            subtitle: "Berani & Fungsional",
            desc: "Mengekspos elemen struktural seperti baja dan beton. Dipadukan dengan pencahayaan dramatis dan tekstur kasar untuk kesan tangguh dan produktif.",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            colors: ["#333333", "#5c5c5c", "#8b5a2b", "#e0e0e0"]
        },
        {
            title: "Playful Modernism",
            subtitle: "Interaktif & Dinamis",
            desc: "Area bermain anak yang dirancang dengan pendekatan modern. Menggabungkan struktur abu-abu minimalis dengan aksen warna cerah seperti oranye dan ungu. Dilengkapi perosotan, kolam bola, dan rak buku terintegrasi untuk menstimulasi motorik dan kreativitas di ruang semi-outdoor yang aman.",
            img: "assets/images/playground_rev02-6.webp",
            colors: ["#9ca3af", "#e87a24", "#7a5a8a", "#355e3b"]
        }
    ];

    const mainImg = document.getElementById('slider-main-img');
    const mainTitle = document.getElementById('slider-title');
    const mainSubtitle = document.getElementById('slider-subtitle');
    const mainDesc = document.getElementById('slider-desc');
    const paletteContainer = document.getElementById('slider-palette');
    const btnPrev = document.getElementById('slider-prev');
    const btnNext = document.getElementById('slider-next');
    const thumbnails = document.querySelectorAll('.slider-thumb');

    let currentIndex = 0;

    function updateSlider(index) {
        mainImg.style.opacity = 0;
        
        setTimeout(() => {
            const data = slidesData[index];
            mainImg.src = data.img;
            mainTitle.textContent = data.title;
            mainSubtitle.textContent = data.subtitle;
            mainDesc.textContent = data.desc;

            let paletteHTML = '<span class="text-[9px] font-bold tracking-[0.2em] text-gray-300 uppercase mr-2">Palet</span>';
            data.colors.forEach(color => {
                paletteHTML += `<div class="w-4 h-4 rounded-sm shadow-sm" style="background-color: ${color}"></div>`;
            });
            paletteContainer.innerHTML = paletteHTML;

            mainImg.style.opacity = 1;
        }, 150);

        thumbnails.forEach((thumb, i) => {
            const overlay = thumb.querySelector('.thumb-overlay');
            if (i === index) {
                thumb.classList.add('ring-2', 'ring-offset-2', 'ring-offset-[#fdfdfd]', 'ring-brand-red');
                thumb.classList.remove('group');
                overlay.classList.replace('bg-black/60', 'bg-black/40');
            } else {
                thumb.classList.remove('ring-2', 'ring-offset-2', 'ring-offset-[#fdfdfd]', 'ring-brand-red');
                thumb.classList.add('group');
                overlay.classList.replace('bg-black/40', 'bg-black/60');
            }
        });
    }

    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slidesData.length - 1 : currentIndex - 1;
        updateSlider(currentIndex);
    });

    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex === slidesData.length - 1) ? 0 : currentIndex + 1;
        updateSlider(currentIndex);
    });

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateSlider(currentIndex);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const formNotif = document.getElementById('form-notif');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault(); 

                const originalBtnText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Mengirim...';
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

                const formData = new FormData(this);

                fetch('proses_kontak.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    formNotif.classList.remove('hidden', 'bg-green-50', 'text-green-700', 'border-green-200', 'bg-red-50', 'text-red-700', 'border-red-200');
                    formNotif.classList.add('border');

                    if (data.status === 'success') {
                        formNotif.classList.add('bg-green-50', 'text-green-700', 'border-green-200');
                        formNotif.innerHTML = '✓ ' + data.message;
                        contactForm.reset(); 
                    } else {
                        formNotif.classList.add('bg-red-50', 'text-red-700', 'border-red-200');
                        formNotif.innerHTML = '✕ ' + data.message;
                    }
                })
                .catch(error => {
                    formNotif.classList.remove('hidden');
                    formNotif.classList.add('border', 'bg-red-50', 'text-red-700', 'border-red-200');
                    formNotif.innerHTML = '✕ Terjadi kesalahan jaringan. Coba lagi.';
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
                });
            });
        }
    });