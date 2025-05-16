"use client"

import Image from 'next/image';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Video from './components/Video';
import Footer from '../components/Footer';

export default function HouseBuilder() {
    return (
        <>
            <Header />
            <HeroSection />
            <Video />
            <Footer />
        </>
    )
}