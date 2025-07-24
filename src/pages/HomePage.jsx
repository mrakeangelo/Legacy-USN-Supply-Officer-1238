import React from 'react';
import HeroSection from '../components/HeroSection';
import CareerTimeline from '../components/CareerTimeline';
import LeadershipStory from '../components/LeadershipStory';
import MissionGallery from '../components/MissionGallery';
import TestimonySection from '../components/TestimonySection';
import MedalsSection from '../components/MedalsSection';
import LogisticsLegacy from '../components/LogisticsLegacy';
import PersonalSection from '../components/PersonalSection';
import TimeCapsule from '../components/TimeCapsule';
import Guestbook from '../components/Guestbook';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <CareerTimeline />
      <LeadershipStory />
      <MissionGallery />
      <TestimonySection />
      <MedalsSection />
      <LogisticsLegacy />
      <PersonalSection />
      <TimeCapsule />
      <Guestbook />
      <Footer />
    </div>
  );
};

export default HomePage;