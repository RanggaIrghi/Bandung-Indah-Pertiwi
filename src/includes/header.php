<!-- Header / Navbar -->
<header class="fixed top-0 left-0 right-0 w-full bg-brand-white backdrop-blur-sm z-50 border-b border-[#DDD9D3]">
    <div class="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-20 bg-brand-white">
        
        <!-- Logo -->
        <div class="flex items-center gap-3 cursor-pointer">
            <div class="bg-brand-red text-white text-xs font-serif font-bold w-11 h-11 flex items-center justify-center rounded-sm shrink-0">
                BIP
            </div>
            <div class="leading-tight">
                <h1 class="text-[17px] font-serif font-semibold text-gray-900">Bandung Indah</h1>
                <p class="text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-0.5">Pertiwi</p>
            </div>
        </div>

        <!-- Navigation (Desktop) -->
        <nav class="hidden lg:flex items-center gap-10">
            <a href="#home" class="text-sm text-gray-900 font-medium hover:text-brand-red transition-colors">Home</a>
            <a href="#aboutUs" class="text-sm text-gray-500 hover:text-brand-red transition-colors">About Us</a>
            <a href="#ourCareer" class="text-sm text-gray-500 hover:text-brand-red transition-colors">Our Career</a>
            <a href="#architecture" class="text-sm text-gray-500 hover:text-brand-red transition-colors">Architecture</a>
        </nav>

        <!-- CTA Button (Desktop) -->
        <div class="hidden lg:block">
            <a href="#contactUs" class="bg-brand-red hover:bg-[#8a2921] text-white text-sm font-medium px-7 py-3 rounded-sm transition-colors">
                Contact Us
            </a>
        </div>

        <!-- Mobile Menu Button-->
        <button id="mobile-menu-btn" class="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-600 focus:outline-none" aria-label="Toggle Menu">
            <!-- Icon Hamburger -->
            <svg id="icon-open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute transition-all duration-300 transform rotate-0 scale-100 opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon Close (X) -->
            <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute transition-all duration-300 transform rotate-90 scale-50 opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div id="mobile-menu" class="lg:hidden absolute top-full left-0 w-full bg-brand-white border-b border-[#DDD9D3] shadow-lg pb-6 px-6 transition-all duration-300 ease-in-out transform -translate-y-4 opacity-0 pointer-events-none invisible z-10">
        <nav class="flex flex-col">
            <a href="#home" class="py-4 border-b border-gray-100 text-[14px] text-gray-800 hover:text-brand-red transition-colors">Home</a>
            <a href="#aboutUs" class="py-4 border-b border-gray-100 text-[14px] hover:text-brand-red transition-colors">About Us</a>
            <a href="#ourCareer" class="py-4 border-b border-gray-100 text-[14px] text-gray-800 hover:text-brand-red transition-colors">Our Career</a>
            <a href="#architecture" class="py-4 border-b border-gray-100 text-[14px] text-gray-800 hover:text-brand-red transition-colors">Architecture</a>
            
            <a href="#" class="mt-6 bg-brand-red hover:bg-[#8a2921] text-white text-[14px] font-medium py-3.5 rounded-sm text-center transition-colors w-full">
                Contact Us
            </a>
        </nav>
    </div>
</header>