"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logger } from "@/lib/logger";
import { Menu, X, ChevronDown, Search, ChevronRight } from "lucide-react";
import { SearchBar } from "@/components/search/search-bar"; // Import SearchBar
// Removed Input, SearchResults, useDebouncedCallback
import { useMobileMenu } from "@/components/providers/mobile-menu-context";
// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";

// Removed AdZepCentralizedHandler - activation now handled by AdZepSPABridge
// Removed searchIndex, SearchItem

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Add search state
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Mobile accordion state

  // Scroll Aware Header State
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const megaMenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>(
    {},
  );

  // Removed Search State and Refs
  // Removed Debounced search function
  // Removed Handle search input change

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeMegaMenu) {
        const megaMenuRef = megaMenuRefs.current[activeMegaMenu];
        const menuButtonRef = menuButtonRefs.current[activeMegaMenu];
        if (
          megaMenuRef &&
          menuButtonRef &&
          !megaMenuRef.contains(event.target as Node) &&
          !menuButtonRef.contains(event.target as Node)
        ) {
          setActiveMegaMenu(null);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMegaMenu]);

  // ESC key handler to close menus
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeMegaMenu) setActiveMegaMenu(null);
        if (isSearchOpen) setIsSearchOpen(false); // Close search on ESC
        if (isMobileMenuOpen) closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeMegaMenu, isSearchOpen, isMobileMenuOpen, closeMobileMenu]);

  // Function to toggle mega menu
  const toggleMegaMenu = (menuId: string) => {
    logger.info(`Toggling mega menu: ${menuId}`);
    setActiveMegaMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  // Removed toggleSearch function

  // Function to toggle mobile menu
  // const toggleMobileMenu = () => {
  //   logger.info("Toggling mobile menu");
  //   setIsOpen((prev) => !prev);
  // };

  const setMenuButtonRef = (el: HTMLButtonElement | null, key: string) => {
    menuButtonRefs.current[key] = el;
  };

  const setMegaMenuRef = (el: HTMLDivElement | null, key: string) => {
    megaMenuRefs.current[key] = el;
  };

  // Scroll Handler Effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Enhance user experience by only hiding after a threshold
      // and checking scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle via requestAnimationFrame for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* AdZep activation now handled exclusively by AdZepSPABridge */}
      <header
        className={`sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 relative">
            {/* Mobile: Hamburger Menu (Left) */}
            <div className="flex md:hidden flex-none w-12 items-center justify-start z-20">
              {/* Only show Hamburger if menu is CLOSED. If Open, the menu itself has the close button. 
                   Actually, usually the hamburger acts as a toggle. 
                   But in "Push" menus, the hamburger is often on the main content, 
                   and the "Close" is on the drawer. 
               */}
              {!isMobileMenuOpen && (
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="p-2 -ml-2 rounded-sm hover:bg-gray-100 focus:outline-none text-black"
                  aria-label="Open main menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Logo - Center on Mobile (Flex-1), Left on Desktop */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start z-10 w-full md:w-auto absolute left-0 md:relative md:left-auto pointer-events-none md:pointer-events-auto items-center h-full">
              <Link href="/" className="flex-shrink-0 pointer-events-auto">
                <Image
                  src={logos.colorLogo.url}
                  alt={logos.colorLogo.alt}
                  width={logos.colorLogo.width}
                  height={logos.colorLogo.height}
                  className="h-14 md:h-20 w-auto object-contain" // Significantly increased to h-14 mobile / h-20 desktop
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 768px) 200px, 280px"
                  quality={95}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 ml-8 flex-1 justify-end">
              {/* Categories Mega Menu */}
              <div className="relative group">
                <button
                  ref={(el) => {
                    setMenuButtonRef(el, "categories");
                  }}
                  className="text-[#015ECC] font-bold text-xs lg:text-sm tracking-wider uppercase flex items-center space-x-1 py-4 hover:opacity-80 transition-opacity" // Brand Blue + Font Styles
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMegaMenu("categories");
                  }}
                  onMouseEnter={() => {
                    // Adding hover trigger for desktop parity with WP usually
                    if (!activeMegaMenu) setActiveMegaMenu("categories");
                  }}
                  // Actually, if we use onClick toggle, we might not want hover.
                  // But "Mega Menu triggered on hover/click" was in requirements.
                  // Let's implement Click for robustness, or Hover if requested.
                  // Requirement: "triggered on hover/click". I'll add onMouseEnter.
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleMegaMenu("categories");
                    }
                  }}
                  aria-expanded={activeMegaMenu === "categories"}
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                >
                  <span>{headerNavigation.categoriesMegaMenu.text}</span>
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      activeMegaMenu === "categories" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Menu Container */}
                {activeMegaMenu === "categories" && (
                  <div
                    ref={(el) => {
                      setMegaMenuRef(el, "categories");
                    }}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                    className="absolute top-full right-0 w-[900px] bg-white shadow-xl border-t-4 border-[#015ECC] z-50 flex" // Solid blue top border
                  >
                    {/* Left Sidebar (Categories List) */}
                    <div className="w-1/4 bg-gray-50 p-6 border-r border-gray-100">
                      <ul className="space-y-3">
                        {headerNavigation.categoriesMegaMenu.sidebarItems.map(
                          (item, idx) => (
                            <li key={idx}>
                              <Link
                                href={item.href}
                                className="text-gray-600 hover:text-[#015ECC] hover:translate-x-1 transition-all flex items-center justify-between text-sm font-medium"
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                {item.text}
                                <ChevronRight className="w-4 h-4 opacity-0 hover:opacity-100 group-hover:opacity-100" />
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Right Content (Featured Grid) */}
                    <div className="w-3/4 p-8 grid grid-cols-4 gap-6 bg-white">
                      {headerNavigation.categoriesMegaMenu.featuredPosts.map(
                        (post, idx) => (
                          <Link
                            key={idx}
                            href={post.href}
                            className="group block"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded shadow-sm">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 200px"
                                priority={idx < 2} // Prioritize first two images
                              />
                              {/* Category Label Overlay */}
                              <div className="absolute bottom-0 left-0 bg-[#015ECC] text-white text-[10px] uppercase font-bold px-2 py-1">
                                {post.category}
                              </div>
                            </div>
                            <h4 className="text-gray-800 font-bold text-sm leading-tight group-hover:text-[#015ECC] transition-colors">
                              {post.title}
                            </h4>
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Standard Links (Prestamos, Tarjetas) */}
              {headerNavigation.mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#015ECC] font-bold text-xs lg:text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
                >
                  {item.text}
                </Link>
              ))}

              {/* Desktop Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="p-2 text-black hover:text-[#015ECC]"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile: Search Icon (Right) */}
            <div className="flex md:hidden flex-none items-center justify-end z-20 ml-auto">
              {" "}
              {/* Added ml-auto */}
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)} // Toggle search
                className="p-2 text-black hover:text-primary" // Removed negative margins to clean up alignment
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Bar Overlay - Moved back inside Header to position relative to it */}
          <SearchBar
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      </header>

      {/* Mobile Menu Drawer - Fixed to viewport for scroll persistence */}
      <div
        className={`md:hidden fixed top-0 left-0 bottom-0 w-[300px] bg-white z-[60] h-full overflow-y-auto border-r border-gray-200 shadow-xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header: Close Button & Logo */}
          <div className="flex items-center p-4 border-b border-gray-100">
            <button
              onClick={closeMobileMenu}
              className="bg-blue-600 text-white rounded-full p-1 mr-4 hover:bg-blue-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-32">
              <Image
                src={logos.colorLogo.url}
                alt={logos.colorLogo.alt}
                width={logos.colorLogo.width}
                height={logos.colorLogo.height}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-4">
            {/* CATEGORÍAS */}
            <div>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center justify-between w-full px-6 py-3 text-left"
              >
                <span className="font-bold text-gray-800 uppercase tracking-wide">
                  CATEGORÍAS
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isCategoriesOpen && (
                <div className="bg-gray-50 px-6 py-2 space-y-2">
                  <Link
                    href="/soluciones-financieras"
                    className="flex items-center text-gray-600 py-1 hover:text-[#015ECC]"
                    onClick={closeMobileMenu}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                    <span>Soluciones Financieras</span>
                  </Link>
                  <Link
                    href="/finanzas-personales"
                    className="flex items-center text-gray-600 py-1 hover:text-[#015ECC]"
                    onClick={closeMobileMenu}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                    <span>Finanzas Personales</span>
                  </Link>
                  <Link
                    href="/tarjetas"
                    className="flex items-center text-gray-600 py-1 hover:text-[#015ECC]"
                    onClick={closeMobileMenu}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                    <span>Tarjetas</span>
                  </Link>
                  <Link
                    href="/prestamos"
                    className="flex items-center text-gray-600 py-1 hover:text-[#015ECC]"
                    onClick={closeMobileMenu}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                    <span>Préstamos</span>
                  </Link>
                </div>
              )}
            </div>

            <div className="border-t border-gray-100 my-2"></div>

            {/* PRÉSTAMOS */}
            <Link
              href="/prestamos"
              className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              PRÉSTAMOS
            </Link>

            <div className="border-t border-gray-100 my-2"></div>

            {/* TARJETAS DE CRÉDITO */}
            <Link
              href="/tarjetas"
              className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              TARJETAS DE CRÉDITO
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
