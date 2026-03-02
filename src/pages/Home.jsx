import React from 'react'
import { Helmet } from 'react-helmet-async'

import HeroSection from '../components/home/HeroSection'
import StorySection from '../components/home/StorySection'
import ScrollStorytelling from '../components/home/ScrollStorytelling'
import FeaturesSection from '../components/home/FeaturesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import PathSection from '../components/home/PathSection'
import CtaBanner from '../components/home/CtaBanner'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>YOGANESH – Health Institute, Yoga, Fitness & Wellness Center</title>
                <meta name="description" content="YOGANESH is a complete wellness ecosystem offering a Health Institute, Yoga Classes, Fitness Classes, Wellness Center, Dance Classes, and Music Classes." />
                <meta property="og:title" content="YOGANESH – Health Institute, Yoga, Fitness & Wellness Center" />
                <meta property="og:description" content="YOGANESH is a complete wellness ecosystem combining Health, Yoga, Fitness, Wellness, Dance, and Music." />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="w-full">
                <HeroSection />
                <StorySection />
                <ScrollStorytelling />
                <FeaturesSection />
                <TestimonialsSection />
                <PathSection />
                <CtaBanner />
            </div>
        </>
    )
}

export default Home
