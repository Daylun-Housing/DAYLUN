"use client"

import Image from 'next/image';
import Header from '../components/Header';
import HeroSection from './components/HeroSection';
import Video from './components/Video';
import Builder from './components/Builder';
import Soon from './components/ComingSoon';
import Footer from '../components/Footer';

export default function HouseBuilder() {
    return (
        <>
            <Header />
            <HeroSection />
            <Soon />
            <Footer />
        </>
    )
}