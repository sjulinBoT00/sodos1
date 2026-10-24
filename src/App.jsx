import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  ChevronDown, 
  Menu, 
  X, 
  Truck, 
  RotateCcw, 
  Store, 
  ArrowRight, 
  ArrowUp, 
  User,
  Zap,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Hero carousel slides themed to SODOS Mustard Yellow & Raw Streetwear
  const heroSlides = [
    {
      id: 1,
      badge: "THE HOUSE OF PREMIUM",
      title: "RAW LUXURY STREETWEAR",
      subtitle: "Unapologetic silhouettes, heavy 280 GSM French Terry cotton, and signature drops.",
      buttonText: "EXPLORE DROP >",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 2,
      badge: "EXCLUSIVE SEASON DROP",
      title: "CELEBRATE IN STYLE",
      subtitle: "Crafted for statement moments, good vibes, and unmatched presence.",
      buttonText: "SHOP NEW COLLECTION >",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 3,
      badge: "TIMELESS STATEMENT",
      title: "OVERSIZED LUXURY POLOS",
      subtitle: "Waffle knit textures with custom metal hardware. Made to outlast the hype.",
      buttonText: "DISCOVER FITS >",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1500&q=80",
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Scroll to top listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Popular categories exactly matching uploaded design
  const categories = [
    { 
      name: "Men's Shirts", 
      desc: "Casual • Formal • Linen",
      image: "/cat-mens-shirts.jpg",
      badge: "HOT" 
    },
    { 
      name: "T-Shirts", 
      desc: "Heavyweight • Oversized • Solid",
      image: "/cat-tshirts.jpg",
      badge: "POPULAR" 
    },
    { 
      name: "Pants & Trousers", 
      desc: "Chinos • Cargos • Formal",
      image: "/cat-pants.jpg",
      badge: "RESTOCKED" 
    },
    { 
      name: "New Arrivals", 
      desc: "Weekly Drop • Limited Edition",
      image: "/cat-new-arrivals.jpg",
      badge: "FRESH" 
    },
    { 
      name: "Boxers", 
      desc: "Cotton • Printed • Casual",
      image: "/cat-boxers.jpg",
      badge: "" 
    },
    { 
      name: "Trunks", 
      desc: "Slim fit • Stretch • Cotton",
      image: "/cat-trunks.jpg",
      badge: "BESTSELLER" 
    }
  ];

  // "Life Before Sold Out" 3-column banner items
  const lifeBeforeSoldOut = [
    {
      category: "Raw Vintage",
      title: "Denim Shirts",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80",
      badge: "Limited Run"
    },
    {
      category: "Tailored Fit",
      title: "Urban Trousers",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
      badge: "Fast Selling"
    },
    {
      category: "Heavy Knit",
      title: "Polo Styles",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=700&q=80",
      badge: "Signature"
    }
  ];

  // "The Sale Your Cart Manifested" 6-grid collection
  const cartManifestedItems = [
    {
      title: "CHAIN TREND",
      subtitle: "Bold metallic hardware & neck flair",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "DATE READY",
      subtitle: "Effortless casual charm in relaxed linens",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "CONCERT FITS",
      subtitle: "Drop-shoulder distressed graphic tees",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "STREET CASUAL",
      subtitle: "Varsity layers & relaxed track trousers",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "AFTER OFFICE",
      subtitle: "Preppy polo knits with modern edge",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "9 TO 5",
      subtitle: "Structured checks & minimalist monochromes",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#111] flex flex-col font-sans selection:bg-[#edb102] selection:text-black">
      {/* 1. TOP PROMO BAR (Continuous Slow Right to Left Marquee) */}
      <div className="bg-[#111111] text-white text-[12px] md:text-[13px] py-2.5 font-semibold tracking-wide border-b border-[#edb102]/30 overflow-hidden select-none">
        <div className="animate-marquee-rtl flex items-center">
          {/* Repeating items for seamless infinite loop */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-20 sm:space-x-24 px-10 sm:px-14 flex-shrink-0">
              <div className="text-gray-300 font-bold tracking-wider text-xs flex items-center gap-2 whitespace-nowrap">
                <span className="bg-[#edb102] text-black px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-tight">SPECIAL</span>
                BUY 3 GET ₹500 OFF: <span className="text-[#edb102] font-black ml-1">SODOS500</span>
              </div>
              <span className="text-[#edb102]/60 font-black text-sm">✦</span>
              <div className="font-bold whitespace-nowrap text-white">
                FLAT 10% OFF ON 1ST ORDER | USE CODE : <span className="text-[#edb102] font-black bg-white/10 px-2 py-0.5 rounded">FIRST10</span>
              </div>
              <span className="text-[#edb102]/60 font-black text-sm">✦</span>
              <div className="flex items-center gap-2 text-gray-300 text-xs whitespace-nowrap">
                <span>BUY 2 GET ₹250 OFF :</span>
                <span className="text-white font-bold bg-[#edb102]/20 text-[#edb102] px-1.5 py-0.5 rounded">B2G250</span>
              </div>
              <span className="text-[#edb102]/60 font-black text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. SUB-UTILITY BAR (Paper Texture & Warm Tones) */}
      <div className="bg-[#f2eddc] text-xs text-gray-700 font-semibold py-1.5 px-4 border-b border-[#e5dcbd] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#4a3800] tracking-wider text-[11px] uppercase">
            <Sparkles size={13} className="text-[#edb102]" />
            <span>Premium Crafted Streetwear • Pan-India Free Delivery</span>
          </div>
          <div className="flex items-center gap-6 divide-x divide-gray-300">
            <a href="#track" className="hover:text-[#edb102] transition pl-2">Track Order</a>
            <a href="#stores" className="hover:text-[#edb102] transition pl-4">Store Locator</a>
            <a href="#contact" className="hover:text-[#edb102] transition pl-4">Contact Us</a>
          </div>
        </div>
      </div>

      {/* 3. MAIN NAVBAR - Clean Solid Ochre/Mustard Yellow (No Watermark, Single-Line Nav) */}
      <header className="sticky top-0 z-50 bg-[#edb102] text-black shadow-md border-b border-black/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-1.5 text-black hover:bg-black/10 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* SODOS Logo */}
          <div className="flex items-center cursor-pointer flex-shrink-0">
            <img 
              src="/sodos-yellow-transparent.png" 
              alt="SODOS - The House of Premium" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation Links - Single Line (whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[12px] xl:text-[13px] font-black tracking-wider uppercase text-black whitespace-nowrap">
            <a href="#obsession" className="hover:text-white transition py-1">
              CURRENT OBSESSION
            </a>
            
            <div className="relative group cursor-pointer py-2">
              <span className="flex items-center gap-1 group-hover:text-white transition">
                NEW ARRIVALS <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-[#111] text-white border-t-2 border-[#edb102] shadow-2xl rounded-b py-2 z-50">
                <a href="#all-new" className="block px-4 py-2.5 text-xs hover:bg-[#edb102] hover:text-black font-bold uppercase tracking-wider">All New Releases</a>
                <a href="#drop-shoulder" className="block px-4 py-2.5 text-xs hover:bg-[#edb102] hover:text-black font-bold uppercase tracking-wider">Drop Shoulder Fits</a>
                <a href="#festive" className="block px-4 py-2.5 text-xs hover:bg-[#edb102] hover:text-black font-bold uppercase tracking-wider">Festive Streetwear</a>
              </div>
            </div>

            <div className="relative group cursor-pointer py-2">
              <span className="flex items-center gap-1 group-hover:text-white transition">
                T-SHIRTS <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-[#111] text-white border-t-2 border-[#edb102] shadow-2xl rounded-b py-2 z-50">
                <a href="#oversized" className="block px-4 py-2.5 text-xs hover:bg-[#edb102] hover:text-black font-bold uppercase tracking-wider">Heavyweight Oversized</a>
                <a href="#polos" className="block px-4 py-2.5 text-xs hover:bg-[#edb102] hover:text-black font-bold uppercase tracking-wider">Waffle Knit Polos</a>
                <a href="#solids" className="block px-4 py-2.5 text-xs hover:bg-[#edb102] hover:text-black font-bold uppercase tracking-wider">Signature Solid Basics</a>
              </div>
            </div>

            <a href="#shirts" className="hover:text-white transition py-1">
              SHIRTS
            </a>

            <a href="#bottoms" className="hover:text-white transition py-1">
              BOTTOMS
            </a>

            <a href="#accessories" className="hover:text-white transition py-1">
              ACCESSORIES
            </a>
          </nav>

          {/* Action icons & Sign in */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            <button aria-label="Search" className="text-black hover:text-white transition p-1">
              <Search size={22} strokeWidth={2.2} />
            </button>
            
            <button 
              onClick={() => setCartCount(c => c + 1)} 
              className="relative text-black hover:text-white transition p-1"
              aria-label="Cart"
            >
              <ShoppingBag size={22} strokeWidth={2.2} />
              <span className="absolute -top-1 -right-1 bg-black text-[#edb102] font-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] shadow">
                {cartCount}
              </span>
            </button>

            <button 
              onClick={() => setWishlistCount(w => w + 1)}
              className="text-black hover:text-white transition hidden sm:block p-1"
              aria-label="Wishlist"
            >
              <Heart size={22} strokeWidth={2.2} />
            </button>

            <button className="bg-black hover:bg-neutral-900 text-[#edb102] text-xs font-black px-4 py-2 rounded uppercase tracking-wider shadow transition hidden sm:inline-flex items-center gap-1.5 border border-black">
              <User size={13} />
              <span>SIGN IN</span>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111] text-white border-t border-black/20 px-6 py-5 space-y-3 font-bold text-sm">
            <a href="#obsession" className="block py-1 hover:text-[#edb102]">CURRENT OBSESSION</a>
            <a href="#new" className="block py-1 hover:text-[#edb102]">NEW ARRIVALS</a>
            <a href="#tshirts" className="block py-1 hover:text-[#edb102]">T-SHIRTS</a>
            <a href="#shirts" className="block py-1 hover:text-[#edb102]">SHIRTS</a>
            <a href="#bottoms" className="block py-1 hover:text-[#edb102]">BOTTOMS</a>
            <a href="#accessories" className="block py-1 hover:text-[#edb102]">ACCESSORIES</a>
            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
              <a href="#account" className="flex items-center gap-2 text-sm text-gray-300">
                <User size={16} /> My Account
              </a>
              <button className="bg-[#edb102] text-black font-black text-xs px-4 py-1.5 rounded uppercase">Sign In</button>
            </div>
          </div>
        )}
      </header>

      {/* 4. HERO CAROUSEL */}
      <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[580px] lg:min-h-[640px] flex items-center bg-[#111]">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background image & gradient overlay */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent sm:from-transparent sm:to-black/60" />
              <div className="absolute inset-0 bg-[#edb102]/10 mix-blend-color" />
            </div>

            {/* Slide content */}
            <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-center items-start lg:items-end text-white text-left lg:text-right pt-16 pb-24">
              <div className="max-w-xl space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#edb102] text-black font-black text-xs px-3 py-1 rounded uppercase tracking-[0.2em] shadow">
                  <Zap size={14} className="fill-black" />
                  {slide.badge}
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none text-white drop-shadow-xl font-heading">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-md ml-auto font-medium drop-shadow">
                  {slide.subtitle}
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="inline-flex items-center gap-2 bg-[#edb102] hover:bg-yellow-400 text-black px-8 py-3.5 rounded font-black text-xs md:text-sm tracking-widest uppercase transition-all duration-300 shadow-2xl hover:scale-105"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel indicators dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
          {heroSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentSlide(dotIdx)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                dotIdx === currentSlide ? "w-10 bg-[#edb102]" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 5. TRUST BADGES (Themed in Mustard Yellow & Charcoal) */}
      <section className="bg-[#f5eecb] border-y border-[#dfd4a2] py-4 px-4 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          {/* Badge 1 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#edb102] shadow text-black font-black">
              <Truck size={24} />
            </div>
            <div>
              <p className="font-black text-sm text-black uppercase tracking-tight">Free & Fast Express</p>
              <p className="text-xs text-gray-700 font-medium">Pan-India express dispatch on all orders</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-2 border-y md:border-y-0 md:border-x border-[#dfd4a2]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#edb102] shadow text-black font-black">
              <RotateCcw size={22} />
            </div>
            <div>
              <p className="font-black text-sm text-black uppercase tracking-tight">10 Days Easy Returns</p>
              <p className="text-xs text-gray-700 font-medium">Doorstep exchange & zero question returns</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#edb102] shadow text-black font-black">
              <Store size={22} />
            </div>
            <div>
              <p className="font-black text-sm text-black uppercase tracking-tight">15+ Flagship Experience Stores</p>
              <p className="text-xs text-gray-700 font-medium">Walk in to feel the luxury 280 GSM fabrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. POPULAR CATEGORIES (Black Card Tiles matching uploaded design) */}
      <section className="py-14 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="inline-block text-[#b38600] font-black text-xs uppercase tracking-widest mb-1">
            EXPLORE COLLECTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-black font-heading">
            SHOP BY CATEGORY
          </h2>
          <div className="w-20 h-1.5 bg-[#edb102] mx-auto mt-2 rounded"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col cursor-pointer bg-black text-white rounded-2xl overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-1.5 shadow-md border border-neutral-800 hover:border-[#edb102]"
            >
              {/* Product Card Image Container with Smooth Rounded Corners */}
              <div className="relative aspect-[4/4.8] w-full rounded-xl overflow-hidden bg-white mb-3">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {cat.badge && (
                  <span className="absolute top-2 right-2 text-[9px] font-black px-2 py-0.5 rounded bg-black/85 text-[#edb102] border border-[#edb102]/50 shadow">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Title & Description under each card */}
              <div className="px-1 pb-1">
                <h3 className="font-black text-sm sm:text-base text-white tracking-tight group-hover:text-[#edb102] transition-colors leading-snug">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-gray-400 font-medium tracking-normal mt-0.5 truncate">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. EXCLUSIVE MEMBERSHIP BANNER (Black & Yellow Contrast) */}
      <section className="w-full bg-[#111111] text-white py-10 sm:py-12 px-6 relative overflow-hidden border-y-4 border-[#edb102]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#edb102_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left Title */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase text-[#edb102]">
              YOUR EXCLUSIVE
            </span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight font-heading text-white">
              SODOS VIP CLUB
            </h3>
            <div className="inline-block border border-[#edb102]/50 bg-[#edb102]/10 px-3 py-1 mt-1 rounded">
              <span className="text-[#edb102] text-xs font-black tracking-widest uppercase">
                EARLY ACCESS • VIP DISCOUNTS
              </span>
            </div>
          </div>

          {/* Center: EXCLUSIVE MEMBER PRIVILEGES */}
          <div className="text-center px-4 py-2 border-y md:border-y-0 md:border-x border-neutral-800">
            <span className="text-sm sm:text-base font-black tracking-[0.2em] uppercase text-white/90 block">
              EXCLUSIVE MEMBER PRIVILEGES
            </span>
            <span className="text-xs text-[#edb102] font-semibold tracking-wider uppercase mt-1 block">
              Special Drops • Zero Shipping Charges
            </span>
          </div>

          {/* Right Action: JOIN SODOS CLUB */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <button className="bg-[#edb102] hover:bg-yellow-400 text-black font-black text-sm uppercase px-8 py-3.5 rounded-xl tracking-widest transition-all shadow-2xl hover:scale-105 flex items-center gap-2.5 border-2 border-[#edb102]">
              <span>JOIN SODOS CLUB</span>
              <ArrowRight size={17} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. LIFE BEFORE SOLD OUT */}
      <section className="py-14 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-wide uppercase text-black font-heading">
            LIFE BEFORE SOLD OUT!
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-widest font-bold">
            High-demand limited production batches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lifeBeforeSoldOut.map((item, idx) => (
            <div 
              key={idx} 
              className="relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] bg-gray-100 cursor-pointer border border-black/10"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-black tracking-widest uppercase text-[#edb102]">
                  {item.category} • {item.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-3">
                  {item.title}
                </h3>
                <div>
                  <button className="border-2 border-[#edb102] bg-[#edb102] hover:bg-black text-black hover:text-[#edb102] text-[11px] font-black px-4 py-2 rounded uppercase tracking-widest transition flex items-center gap-1.5">
                    SHOP NOW <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. SHOP IT SAVE IT UNDER 999 BANNER (With prominent SODOS watermark) */}
      <section className="w-full bg-[#edb102] relative py-12 md:py-16 px-6 overflow-hidden border-y-2 border-black/20 my-6">
        {/* Completely visible SODOS watermark sized to stay fully inside the banner without clipping */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 px-4">
          <img 
            src="/sodos-yellow-transparent.png" 
            alt="SODOS Watermark" 
            className="max-h-[82%] w-auto max-w-[500px] sm:max-w-[580px] md:max-w-[660px] object-contain opacity-40 brightness-75 contrast-125 mix-blend-multiply transform -rotate-2"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-black">
          <div className="space-y-1">
            <span className="text-black font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight block uppercase drop-shadow-sm">
              SHOP IT
            </span>
            <span className="text-white font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter block uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
              SAVE IT
            </span>
          </div>

          <div className="text-center md:text-right">
            <span className="text-black font-black tracking-widest uppercase text-sm sm:text-lg block">
              COLLECTION UNDER
            </span>
            <span className="text-black font-black text-4xl sm:text-6xl lg:text-7xl block tracking-tight leading-none mb-3 drop-shadow-sm">
              ₹999/-
            </span>
            <button className="bg-black hover:bg-neutral-900 text-[#edb102] font-black text-xs uppercase px-8 py-3 rounded tracking-widest transition shadow-2xl hover:scale-105">
              CLAIM DEALS
            </button>
          </div>
        </div>
      </section>

      {/* 10. THE SALE YOUR CART MANIFESTED */}
      <section className="py-14 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-wide uppercase text-black font-heading">
            THE SALE YOUR CART MANIFESTED
          </h2>
          <div className="w-20 h-1.5 bg-[#edb102] mx-auto mt-2 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartManifestedItems.map((card, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-xl overflow-hidden shadow-md flex flex-col cursor-pointer bg-neutral-900 border border-black/10"
            >
              <div className="relative aspect-[4/4] overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-center">
                  <h3 className="text-xl sm:text-2xl font-black tracking-widest uppercase mb-1 text-[#edb102]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium tracking-wide">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom bar button */}
              <div className="bg-black group-hover:bg-[#edb102] text-white group-hover:text-black transition-colors py-3 px-4 flex items-center justify-center font-black">
                <span className="text-xs tracking-widest uppercase mr-2">Shop Now</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* 12. COMPACT FOOTER - Clean & Low-Profile */}
      <footer className="bg-[#edb102] text-black mt-auto py-8 border-t-2 border-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-bold text-neutral-900 pb-6 border-b border-black/15">
            <div>
              <h4 className="font-black uppercase tracking-wider text-black text-xs mb-2.5">
                Collections
              </h4>
              <ul className="space-y-1.5">
                <li><a href="#oversized" className="hover:text-white transition">Oversized Tees</a></li>
                <li><a href="#shirts" className="hover:text-white transition">Casual Shirts</a></li>
                <li><a href="#bottoms" className="hover:text-white transition">Trousers & Cargos</a></li>
                <li><a href="#coords" className="hover:text-white transition">Co-ords</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-wider text-black text-xs mb-2.5">
                Customer Care
              </h4>
              <ul className="space-y-1.5">
                <li><a href="#track" className="hover:text-white transition">Track Order</a></li>
                <li><a href="#returns" className="hover:text-white transition">Easy Returns</a></li>
                <li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#shipping" className="hover:text-white transition">Shipping Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-wider text-black text-xs mb-2.5">
                Contact
              </h4>
              <p className="leading-relaxed text-[11px]">
                support@sodos.in<br />
                +91 9696333000
              </p>
              <p className="mt-2 text-[10px] uppercase font-black tracking-wider text-black/70">
                Goregaon, Mumbai 400063
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-black uppercase tracking-wider text-black text-xs mb-2.5">
                  Follow
                </h4>
                <p className="text-[11px] font-bold">@sodosofficial</p>
              </div>
              <div className="text-[11px] font-black uppercase text-black/80 mt-2">
                The House of Premium
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-black/80 gap-2">
            <span>© {new Date().getFullYear()} The House of Premium. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-white">Privacy</a>
              <a href="#terms" className="hover:text-white">Terms</a>
              <a href="#sitemap" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-40 bg-[#edb102] text-black p-3.5 rounded-full shadow-2xl border-2 border-black hover:bg-black hover:text-[#edb102] transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
