
import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, ChevronDown, X, Menu, Heart, BarChart2, User } from 'lucide-react';
import logo from "/NT-logo.png";
const Navbar=()=>{
  // State for dropdown menus
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for coupon banner
  const [showCoupon, setShowCoupon] = useState(true);
  // State for active tab in mobile view
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' or 'categories'
  
  // Ref for the mobile menu
  const mobileMenuRef = useRef(null);
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    
    // Only add the event listener when the menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  
  return (
    <div className="relative w-full">
      {/* Coupon Banner */}
      {showCoupon && (
        <div className="relative w-full bg-gray-100 p-2 text-center text-sm text-gray-700">
          Use Coupon #0010 For 10% OFF
          <button 
            className="absolute right-4 top-2" 
            onClick={() => setShowCoupon(false)}
          >
            <X size={16} />
          </button>
        </div>
      )}
      
      {/* Main Navbar */}
      <nav className="relative flex w-full items-center justify-between border-b border-gray-200 px-4 py-8 md:px-8">
        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="block lg:hidden">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setActiveTab('menu');
            }} 
            className="text-gray-700 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Left Navigation - Hidden on mobile, visible on lg screens */}
        <div className="hidden lg:flex items-center space-x-6 text-black">
          {/* Home Link with active state */}
          <a href="/" className="group relative text-sm font-medium hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">Home</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-black transition-all duration-300"></div>
          </a>
          
          {/* Shop Dropdown */}
          <div className="relative" onMouseEnter={() => setIsShopOpen(true)} onMouseLeave={() => setIsShopOpen(false)}>
            <a href="/shop" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
              <div className="flex items-center pb-1 ">
                Shop
                <ChevronDown size={16} className="ml-1" />
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
            </a>
            
            {/* Shop Dropdown Menu */}
            {isShopOpen && (
              <div className="absolute left-0 top-full z-50 w-40 bg-white shadow-md">
                <div className="flex flex-col py-2">
                  <a href="/shop/women" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black">Women</a>
                  <a href="/shop/men" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black ">Men</a>
                  <a href="/shop/kids" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black">Kids</a>
                  <a href="/shop/personal-care" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black">Personal Care</a>
                  <a href="/shop/thermal" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black">Thermal</a>
                </div>
              </div>
            )}
          </div>
          
          {/* Blog Link */}
          <a href="/blog" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">Blog</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>
          
          {/* Contact Us Link */}
          <a href="/contact-us" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">Contact Us</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>
          
          {/* About Us Link */}
          <a href="/about-us" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">About Us</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>
        
        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:block">
          <a href="/">
            <div className="h-20 w-20 md:h-20 md:w-22 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/NT-logo.png" alt="Nature Thread Logo" className="w-full h-full object-contain" />
              
            </div>
          </a>
        </div>


        
        {/* Right Navigation - Adjusted for responsive */}
        
        
        <div className="flex items-center space-x-6">

          
        <div className="flex items-center space-x-4">
            <div className="relative" onMouseEnter={() => setIsAccountOpen(true)} onMouseLeave={() => setIsAccountOpen(false)}>
              <a href="/account" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
                <div className="pb-1">My Account</div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
              </a>
              
              {/* My Account Dropdown Menu */}
              {isAccountOpen && (
                <div className="absolute right-0 top-full z-50 w-40 bg-white shadow-md">
                  <div className="flex flex-col py-2">
                    <a href="/account/dashboard" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Dashboard</a>
                    <a href="/account/orders" className="px-4 py-2 text-sm hover:bg-gray-100 text-black " style={{textDecoration:"none"}}>Orders</a>
                    <a href="/account/downloads" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Downloads</a>
                    <a href="/account/addresses" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Addresses</a>
                    <a href="/account/wallet" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>My Wallet</a>
                    <a href="/account/details" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Account details</a>
                    <a href="/account/wishlist" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Wishlist</a>
                    <a href="/logout" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Logout</a>
                  </div>
                </div>
              )}
            </div>
            </div>
            
          {/* Cart Price - Always visible */}
          <div className="text-sm">
            2 / ₹1,848.99
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - Only visible when toggled */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50  bg-opacity-80 lg:hidden">
          <div 
            ref={mobileMenuRef}
            className="absolute left-0 top-0 h-full w-1/2 bg-white overflow-hidden"
          >
            {/* Mobile Navigation Tabs */}
            <div className="grid grid-cols-2 border-b border-gray-200">
              <button
                onClick={() => handleTabChange('menu')}
                className={`py-4 text-center font-medium ${activeTab === 'menu' ? 'border-b-2 border-gray-800' : 'text-gray-500'}`}
              >
                MENU
              </button>
              <button
                onClick={() => handleTabChange('categories')}
                className={`py-4 text-center font-medium ${activeTab === 'categories' ? 'border-b-2 border-gray-800' : 'text-gray-500'}`}
              >
                CATEGORIES
              </button>
            </div>
            
            {/* Menu Tab Content */}
            {activeTab === 'menu' && (
              <div className="h-full overflow-y-auto pb-20">
                <div className="flex flex-col">
                  <a href="/" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>HOME</a>
                  <a href="/shop" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>SHOP</a>
                  <a href="/blog" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>BLOG</a>
                  <a href="/about-us" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}} >ABOUT US</a>
                  <a href="/contact-us" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>CONTACT US</a>
                  
                  <a href="/wishlist" className="border-b border-gray-200 px-4 py-4 font-medium flex items-center text-black" style={{textDecoration:"none"}}>
                    {/* <Heart size={18} className="mr-2" /> */}
                    WISHLIST
                  </a>
                  
                  <a href="/compare" className="border-b border-gray-200 px-4 py-4 font-medium flex items-center text-black" style={{textDecoration:"none"}}>
                    {/* <BarChart2 size={18} className="mr-2" /> */}
                    COMPARE
                  </a>
                  
                  {/* My Account Section */}
                  <div className="border-b border-gray-200 px-4">
                    <button 
                      className="flex w-full items-center justify-between py-4 font-medium"
                      onClick={() => setIsAccountOpen(!isAccountOpen)}
                    >
                      <div className="flex items-center">
                        <User size={18} className="mr-2" />
                        MY ACCOUNT
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {isAccountOpen && (
                      <div className="flex flex-col pb-2">
                        <a href="/account/dashboard" className="py-2 pl-8 text-black " style={{textDecoration:"none"}}>Dashboard</a>
                        <a href="/account/orders" className="py-2 pl-8 text-black" style={{textDecoration:"none"}}>Orders</a>
                        <a href="/account/downloads" className="py-2 pl-8 text-black" style={{textDecoration:"none"}} >Downloads</a>
                        <a href="/account/addresses" className="py-2 pl-8 text-black" style={{textDecoration:"none"}}>Addresses</a>
                        <a href="/account/wallet" className="py-2 pl-8 text-black" style={{textDecoration:"none"}}>My Wallet</a>
                        <a href="/account/details" className="py-2 pl-8 text-black" style={{textDecoration:"none"}}>Account details</a>
                        <a href="/account/wishlist" className="py-2 pl-8 text-black" style={{textDecoration:"none"}}>Wishlist</a>
                        <a href="/logout" className="py-2 pl-8 text-black" style={{textDecoration:"none"}}>Logout</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Categories Tab Content */}
            {activeTab === 'categories' && (
              <div className="h-full overflow-y-auto pb-20">
                <div className="flex flex-col">
                  <a href="/shop/women" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>WOMEN</a>
                  <a href="/shop/men" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>MEN</a>
                  <a href="/shop/kids" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>KIDS</a>
                  <a href="/shop/personal-care" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>PERSONAL CARE</a>
                  <a href="/shop/thermal" className="border-b border-gray-200 px-4 py-4 font-medium text-black" style={{textDecoration:"none"}}>THERMAL</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Bottom Mobile Navigation Bar */}
      <div className="fixed bottom-0 left-0 z-40 grid w-full grid-cols-4 border-t border-gray-200 bg-white lg:hidden">
        <a href="/shop" className="flex flex-col items-center justify-center py-2">
          <ShoppingCart size={20} />
          <span className="mt-1 text-xs">Shop</span>
        </a>
        <a href="/wishlist" className="flex flex-col items-center justify-center py-2">
          <Heart size={20} />
          <span className="mt-1 text-xs">Wishlist</span>
        </a>
        <a href="/cart" className="flex flex-col items-center justify-center py-2 relative">
          <ShoppingCart size={20} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">2</span>
          <span className="mt-1 text-xs">Cart</span>
        </a>
        <a href="/account" className="flex flex-col items-center justify-center py-2">
          <User size={20} />
          <span className="mt-1 text-xs">My account</span>
        </a>
      </div>
    </div>
  );
}
export default Navbar;