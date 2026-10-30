import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/home/HeroSection';
import QuickStatsBar from '../../components/home/QuickStatsBar';
import FeaturedTurfs from '../../components/home/FeaturedTurfs';
import FeaturesSection from '../../components/home/FeaturesSection';
import HowItWorksSection from '../../components/home/HowItWorksSection';
import OwnerPortalCta from '../../components/home/OwnerPortalCta';
import Footer from '../../components/layout/Footer';
import BookingHoldModal from '../../components/home/BookingHoldModal';
import { FEATURED_TURFS } from '../../utils/constants';

export default function HomePage() {
  const [selectedTurfForModal, setSelectedTurfForModal] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (params) => {
    setSearchParams(params);
    // Open the featured turf with 10-minute hold demonstration
    setSelectedTurfForModal(FEATURED_TURFS[0]);
    setIsModalOpen(true);
  };

  const handleSelectTurf = (turfId) => {
    const turf = FEATURED_TURFS.find((t) => t.id === turfId) || FEATURED_TURFS[0];
    setSelectedTurfForModal(turf);
    setIsModalOpen(true);
  };

  const handleBookTurf = (turf) => {
    setSelectedTurfForModal(turf);
    setIsModalOpen(true);
  };

  const handleScrollToTurfs = () => {
    const el = document.getElementById('explore-turfs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050B08] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Navigation */}
      <Navbar
        onExploreClick={handleScrollToTurfs}
        onOpenAuth={() => {
          setSelectedTurfForModal(FEATURED_TURFS[0]);
          setIsModalOpen(true);
        }}
      />

      {/* Hero Section with exact layout & visual style */}
      <main className="flex-1">
        <HeroSection
          onSearch={handleSearch}
          onSelectTurf={handleSelectTurf}
        />

        {/* Quick Stats Banner */}
        <QuickStatsBar />

        {/* Top Dhaka Turfs Grid with filters */}
        <FeaturedTurfs onBookTurf={handleBookTurf} />

        {/* Architecture & Features (10-min pessimistic lock, bKash, etc.) */}
        <FeaturesSection />

        {/* 3-Step Walkthrough */}
        <HowItWorksSection onGetStarted={handleScrollToTurfs} />

        {/* Owner Partner Portal Section */}
        <OwnerPortalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 10-Minute Lock Demo Modal */}
      <BookingHoldModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        turf={selectedTurfForModal}
        searchParams={searchParams}
      />

    </div>
  );
}

