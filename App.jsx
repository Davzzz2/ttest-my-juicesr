import React, { useState, useEffect } from 'react';

// Navbar with logo and navigation links
function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white bg-opacity-20 backdrop-blur-md">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          P
        </div>
        <span className="text-xl font-bold text-white">PennyPts</span>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-blue-300">Home</a>
        <a href="#" className="text-white hover:text-blue-300">Leaderboard</a>
        <a href="#" className="text-white hover:text-blue-300">Benefits</a>
        <a href="#" className="text-white hover:text-blue-300">Stream Rewards</a>
        <a href="#" className="text-white hover:text-blue-300">Gambleassist</a>
      </div>
    </nav>
  );
}

// Hero section with headline, subheading, and signup bonus box
function HeroSection() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to PennyPts!</h1>
      <p className="text-lg text-white mb-8">Explore exclusive rewards &amp; benefits for Stake.com users</p>
      <div className="flex flex-col md:flex-row items-center justify-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg mb-8">
        {/* For now using a placeholder image */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="Stake.com Logo" 
          className="w-32 h-32 object-contain mb-4 md:mb-0 md:mr-4" 
        />
        <div className="text-left">
          <p className="text-2xl font-bold text-white">$7</p>
          <p className="text-white">Signup Bonus</p>
          <p className="text-white">New users only</p>
        </div>
      </div>
    </section>
  );
}

// Three boxes for benefits details
function BenefitsBoxes() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
      <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg">
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
          %
        </div>
        <div>
          <p className="text-white font-bold">5% rakeback</p>
          <p className="text-white">on all bets</p>
        </div>
      </div>
      <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg">
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
          ↑
        </div>
        <div>
          <p className="text-white font-bold">Rankup Benefits</p>
          <p className="text-white">Exclusive Rewards</p>
        </div>
      </div>
      <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg">
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
          🎁
        </div>
        <div>
          <p className="text-white font-bold">Mini-Rankup Benefits</p>
          <p className="text-white">Additional Perks</p>
        </div>
      </div>
    </div>
  );
}

// Social sidebar with social buttons (using placeholder images for logos)
function SocialSidebar() {
  return (
    <div className="fixed right-4 top-1/3 space-y-4">
      <a href="#" className="bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full block">
        <img src="https://via.placeholder.com/24?text=Tw" alt="Twitter" />
      </a>
      <a href="#" className="bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full block">
        <img src="https://via.placeholder.com/24?text=YT" alt="YouTube" />
      </a>
      <a href="#" className="bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full block">
        <img src="https://via.placeholder.com/24?text=K" alt="Kick.com" />
      </a>
      <a href="#" className="bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full block">
        <img src="https://via.placeholder.com/24?text=S" alt="Stake" />
      </a>
    </div>
  );
}

// Quick Navigation section with three boxes
function QuickNavigation() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-white mb-4">Quick Navigation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              🏆
            </div>
            <h3 className="text-white font-bold">Leaderboard</h3>
          </div>
          <p className="text-white mb-2">Track your position on our monthly leaderboard</p>
          <button className="text-blue-500 font-bold underline">View Leaderboard -&gt;</button>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              ⭐
            </div>
            <h3 className="text-white font-bold">Benefits</h3>
          </div>
          <p className="text-white mb-2">Discover exclusive benefits as you rank up and increase your wager amount</p>
          <button className="text-blue-500 font-bold underline">View Benefits -&gt;</button>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              📷
            </div>
            <h3 className="text-white font-bold">Stream Rewards</h3>
          </div>
          <p className="text-white mb-2">Win special prizes during streams by hitting high multipliers</p>
          <button className="text-blue-500 font-bold underline">View Stream Rewards -&gt;</button>
        </div>
      </div>
    </section>
  );
}

// Information banner below Quick Navigation
function InfoBanner() {
  return (
    <div className="p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg mx-8 mb-8 flex items-center">
      <div className="mr-2">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
      </div>
      <p className="text-white">Join our community for the latest updates and exclusive giveaways!</p>
    </div>
  );
}

// Footer with logo, affiliate program text, social buttons, and Gambleassist info
function Footer() {
  return (
    <footer className="bg-white bg-opacity-20 backdrop-blur-md p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">
            P
          </div>
          <p className="text-white">PennyPts</p>
          <p className="text-white text-sm">Stake.com Affiliate Program</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#"><img src="https://via.placeholder.com/24?text=Tw" alt="Twitter" /></a>
          <a href="#"><img src="https://via.placeholder.com/24?text=YT" alt="YouTube" /></a>
          <a href="#"><img src="https://via.placeholder.com/24?text=K" alt="Kick.com" /></a>
          <a href="#"><img src="https://via.placeholder.com/24?text=S" alt="Stake" /></a>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Gambleassist</button>
          <p className="text-white text-sm">Please gamble responsibly</p>
        </div>
      </div>
      <div className="text-center text-white text-sm">
        © 2025 PennyPts All rights reserved. Not affiliated with stake.com.
      </div>
    </footer>
  );
}

// ScrollToTop button appears when scrolling down
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        ↑
      </button>
    )
  );
}

// Main App component
function App() {
  return (
    <div 
      className="min-h-screen bg-blue-900 text-white relative overflow-y-auto"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
    >
      <Navbar />
      <SocialSidebar />
      <main>
        <HeroSection />
        <BenefitsBoxes />
        <QuickNavigation />
        <InfoBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
