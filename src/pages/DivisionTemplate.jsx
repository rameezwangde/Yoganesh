import React, { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../components/ui/TiltWrapper'

import divHealthImg from '../assets/images/div_health.png'
import divYogaImg from '../assets/images/div_yoga.png'
import divFitnessImg from '../assets/images/div_fitness.png'
import divWellnessImg from '../assets/images/div_wellness.png'
import divDanceImg from '../assets/images/div_dance.png'
import divMusicImg from '../assets/images/div_music.png'
import healthDiplomaImg from '../assets/images/health_diploma.png'
import healthUniversityImg from '../assets/images/health_university.png'
import yogaSpecialImg from '../assets/images/yoga_special.png'
import fitnessSpecialImg from '../assets/images/fitness_special.png'
import courseDiplomaImg from '../assets/images/course_diploma.png'
import courseTeacherImg from '../assets/images/course_teacher.png'
import courseResearchImg from '../assets/images/course_research.png'
import serviceBiomechanicalImg from '../assets/images/service_biomechanical.png'
import servicePhysioImg from '../assets/images/service_physio.png'
import healthHeroV2 from '../assets/images/health_hero_v2.png'
import wellnessDimensionsImg from '../assets/images/wellness_dimensions.png'
import musicGalaxyImg from '../assets/images/music_galaxy.png'
import galleryStringsWest from '../assets/images/gallery_strings_west.png'
import galleryStringsEast from '../assets/images/gallery_strings_east.png'
import galleryKeys from '../assets/images/gallery_keys.png'
import galleryRhythmWind from '../assets/images/gallery_rhythm_wind.png'
import galleryDanceClassic from '../assets/images/gallery_dance_classic.png'

const divisionData = {
    'health-institute': {
        title: 'Health Institute',
        img: healthHeroV2,
        tagline: 'Clinical Precision. Human Performance.',
        overview: 'Our Health Institute operates at the intersection of medical science, academic excellence, and human performance. We provide medical-grade assessments, university-accredited yoga education, and guided rehabilitation to ensure your body functions at its peak clinical potential.',
        programs: [
            {
                name: 'Biomechanical Analysis',
                time: '90 Min Session',
                desc: 'Comprehensive movement screening using advanced sensors to identify muscle imbalances and joint dysfunction.',
                markers: ['Kinetic Chain Mapping', 'Joint Load Analysis', 'Neural Latency Test'],
                img: serviceBiomechanicalImg,
                size: 'large'
            },
            {
                name: 'Clinical Physiotherapy',
                time: 'Mon-Sat',
                desc: 'Evidence-based injury recovery and prevention protocols tailored to your specific kinetic chain.',
                markers: ['Acoustic Wave Therapy', 'Myofascial Triggering'],
                img: servicePhysioImg,
                size: 'medium'
            },
            {
                name: 'Metabolic Structuring',
                time: 'Wed & Fri',
                desc: 'Personalized nutritional counseling based on metabolic evaluation and blood chemistry analysis.',
                markers: ['Blood Chemistry', 'VO2 Optimization'],
                img: healthUniversityImg,
                size: 'small'
            }
        ],
        universityCourses: [
            { name: 'Diploma Courses', levels: 'Foundation to Mastery', icon: '📜' },
            { name: 'Certificate Courses', levels: 'Clinical Specialization', icon: '🏅' },
            { name: 'Teacher Training', levels: 'Professional Accreditation', icon: '🧘' },
            { name: 'Under Graduate', levels: 'University Degree', icon: '🎓' },
            { name: 'Post Graduate', levels: 'Research & Advanced Study', icon: '🏛️' }
        ],
        benefits: [
            { title: 'University Accredited', desc: 'Our pathways are recognized globally, bridging clinical science with traditional mastery.', icon: '🎓' },
            { title: 'Medical Diagnostics', desc: 'Utilizing clinical-grade assessment tools for precise physiological mapping.', icon: '🔬' },
            { title: 'Pain-Free Movement', desc: 'Restore optimal kinetic function and eliminate chronic mechanical discomfort.', icon: '🦾' },
            { title: 'Custom Rehabilitation', desc: 'Bespoke recovery protocols engineered specifically for your unique biomechanics.', icon: '🔄' },
            { title: 'Integrated Clinicals', desc: 'A holistic ecosystem merging physiotherapy, nutrition, and neural science.', icon: '🏛️' }
        ],
        who: 'Healthcare professionals, athletes seeking peak optimization, and individuals requiring specialized clinical guidance.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Services' },
            { id: 'courses', label: 'Courses' },
            { id: 'benefits', label: 'Why Us' },
            { id: 'enquiry', label: 'Contact' }
        ]
    },
    'yoga-classes': {
        title: 'Yoga Classes',
        img: divYogaImg,
        tagline: 'Ancient Wisdom. Modern Biology.',
        overview: 'Yoga at YOGANESH is more than just movement; it is a clinical approach to structural integrity and mental clarity. We bridge the gap between traditional asana and contemporary physiological optimization.',
        programs: [
            { name: 'Vinyasa & Flow', time: 'Ashtanga | Power | Vinyasa', desc: 'High-energy, breath-synchronized sequences designed for cardiovascular flow and structural strength.', size: 'medium', markers: ['Fluid Transitions', 'Metabolic Fire', 'Dynamic Power'], accent: 'from-orange-500/10 to-amber-500/5' },
            { name: 'Alignment & Therapy', time: 'Hatha | Iyengar | Restorative', desc: 'Precision-focused practices emphasizing skeletal alignment and neuromuscular restoration.', size: 'medium', markers: ['Skeletal Integrity', 'Props & Precision', 'Spinal Health'], accent: 'from-brand-red-light/10 to-indigo-500/5' },
            { name: 'Spiritual Science', time: 'Kundalini | Shuddhikriya', desc: 'Ancient cleansing and energetic protocols to optimize the nervous system and mental focus.', size: 'medium', markers: ['Pranayama Mastery', 'Neural Reset', 'Aura Cleansing'], accent: 'from-purple-500/10 to-fuchsia-500/5' },
            { name: 'Inclusive Wellness', time: 'Prenatal | Chair | Yin', desc: 'Accessible, specialized protocols for targeted recovery and specific life stages.', size: 'medium', markers: ['Fascia Release', 'Nervous System Healing', 'Adaptive Protocols'], accent: 'from-emerald-500/10 to-teal-500/5' }
        ],
        uniqueSection: {
            title: 'The Asana Gallery',
            desc: 'Explore ten distinct yogic paths, each engineered to target specific dimensions of your physical and energetic evolution.',
            isLargeGrid: true,
            items: [
                { label: 'Ashtanga Yoga', detail: 'A dynamic, physically demanding practice following a rigorous traditional sequence.', img: 'https://m.media-amazon.com/images/I/41I4-bzPDWL._SY445_SX342_.jpg' },
                { label: 'Vinyasa Yoga', detail: 'Fluid, breath-synchronized movement that flows seamlessly through creative sequences.', img: 'https://tse2.mm.bing.net/th/id/OIP.LdgpXa5uCaCSFlGXTVuelQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Power Yoga', detail: 'A vigorous, fitness-based approach focused on building raw functional strength.', img: 'https://th.bing.com/th/id/OIP.jKiG-MGx8463fBG7IYZRjgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Hatha & Yin Yoga', detail: 'Balancing active alignment with deep, meditative long-holds for fascia release.', img: 'https://tse2.mm.bing.net/th/id/OIP.aepB44q3GmZZpen437JIzAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Restorative Yoga', detail: 'Gentle, prop-supported poses designed for deep nervous system healing.', img: 'https://tse2.mm.bing.net/th/id/OIP.cuB5NGH-ulVlpui8qy0PRAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Iyengar Yoga', detail: 'Precision-focused practice using props to achieve perfect structural alignment.', img: 'https://www.fitsri.com/wp-content/uploads/2021/12/triangle-pose-with-yoga-block-1024x683.jpg' },
                { label: 'Kundalini Yoga', detail: 'Spiritual practice involving chanting and breathwork to awaken energetic flow.', img: 'https://tse2.mm.bing.net/th/id/OIP.5v__tzVw0wROFAzHBimynQHaDy?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Hot & Bikram Yoga', detail: 'Intensive sequences in a heated environment for detoxification and flexibility.', img: 'https://tse1.mm.bing.net/th/id/OIP.lS5MT5YNzEXS3sv35mNwigHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Prenatal & Chair Yoga', detail: 'Specialized, accessible practices for expectant mothers or limited mobility.', img: 'https://media.istockphoto.com/id/542718538/photo/pregnant-young-woman-doing-prenatal-yoga-chair-pose-utkatasana.jpg?s=612x612&w=is&k=20&c=HD2yPlqsRZvLdnNub3QOSR63gYeANXfFsd5eZekq1B4=' },
                { label: 'Shuddhikriya', detail: 'Traditional yogic cleansing techniques to purify the body and clarify the mind.', img: 'https://i.ytimg.com/vi/lnjV0qQiWB8/maxresdefault.jpg' }
            ]
        },
        benefits: [
            { title: 'Neuromuscular Coordination', desc: 'Recalibrate your neural pathways through precision-focused movement protocols.', icon: '🧠' },
            { title: 'Hormonal Regulation', desc: 'Systematically lower cortisol levels and activate deep parasympathetic recovery.', icon: '📈' },
            { title: 'Extraordinary Mobility', desc: 'Achieve skeletal liberation through scientifically sequenced asana engineering.', icon: '🦾' },
            { title: 'Hyper-Focus & Clarity', desc: 'Awaken cognitive sharpness through advanced pranayama and meditative science.', icon: '💎' }
        ],
        who: 'Individuals seeking a deep, disciplined approach to physical and mental mastery through the lens of ancient wisdom.',
        navItems: [
            { id: 'overview', label: 'Philosophy' },
            { id: 'programs', label: 'Offerings' },
            { id: 'unique', label: 'Lineage' },
            { id: 'benefits', label: 'Impact' },
            { id: 'enquiry', label: 'Connect' }
        ]
    },
    'fitness-classes': {
        title: 'Fitness Classes',
        img: divFitnessImg,
        tagline: 'Engineered for Peak Performance.',
        overview: 'Elite conditioning is not random. It is calculated, progressive, and intense. Our fitness ecosystem is designed for those who demand measurable results and surgical precision in their training.',
        programs: [
            { name: 'Strength & Power', time: 'Hypertrophy | Powerlifting', desc: 'Surgical muscle development and raw force production protocols.', size: 'medium', markers: ['Massive Force', 'Skeletal Load', 'Elite Growth'], accent: 'from-red-500/10 to-orange-500/5' },
            { name: 'Endurance & Flow', time: 'Metabolic | Zumba | Aerial', desc: 'Optimizing aerobic capacity and rhythmic athleticism for total-body vitality.', size: 'medium', markers: ['V02 Max', 'Agility Flow', 'Cardiac Engine'], accent: 'from-cyan-500/10 to-brand-red-light/5' },
            { name: 'Core & Control', time: 'Pilates | Functional', desc: 'Building an unbreakable foundation of joint stability and postural integrity.', size: 'medium', markers: ['Spinal Support', 'Deep Stabilizers', 'Kinetic Link'], accent: 'from-indigo-500/10 to-purple-500/5' },
            { name: 'Fuel & Recovery', time: 'Nutrition | Recovery Lab', desc: 'Personalized metabolic structuring and elite restoration cycles.', size: 'medium', markers: ['Metabolic Map', 'Macro Precision', 'Cellular Repair'], accent: 'from-rose-500/10 to-pink-500/5' }
        ],
        uniqueSection: {
            title: 'The Performance Matrix',
            desc: 'We track and optimize your progress through eight core pillars of human capability to ensure a balanced, bulletproof physique.',
            isLargeGrid: true,
            items: [
                { label: 'Nutrition & Dietitian', detail: 'Personalized fueling strategies based on blood chemistry and goals.', img: 'https://th.bing.com/th/id/OIP.fdF8lQHdoMyYdEeGzTPsBgHaE7?w=291&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
                { label: 'CrossFit', detail: 'High-intensity functional movement for total athletic capability.', img: 'https://img.freepik.com/premium-photo/group-young-athletes-crossfit-gym-doing-variety-exercise-routines-while-trainer-other-members-group-cheer-them_378494-472.jpg?w=2000' },
                { label: 'Pilates', detail: 'Deep core stabilization and postural alignment through fluid resistance.', img: 'https://img.freepik.com/premium-photo/people-stretching-pilates-reformers_126745-3577.jpg?w=2000' },
                { label: 'Zumba', detail: 'High-energy rhythmic cardio blending world beats with athletic flow.', img: 'https://www.verywellfit.com/thmb/SaUyT2h2ujEDx4zCAU0ilFclWqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4688722-GettyImages-950806258-06e1e050ab184f3694fd96017c9a42ee.jpg' },
                { label: 'Aerial', detail: 'Gravity-defying strength and flexibility using silk hammocks.', img: 'https://tse3.mm.bing.net/th/id/OIP.Zjx_5qIQj2qW4oj5JsNJIQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' }
            ]
        },
        benefits: [
            { title: 'Rapid Recomposition', desc: 'Optimize your fat-to-muscle ratio through high-intensity, science-backed conditioning.', icon: '⚡' },
            { title: 'Elite Capability', desc: 'Develop superior force production and explosive power for peak athletic demand.', icon: '🏅' },
            { title: 'Hormonal Optimization', desc: 'Balance your endocrine system through strategic resistance and metabolic training.', icon: '⚖️' },
            { title: 'Bulletproof Joints', desc: 'Protect your skeletal integrity with pre-habilitative and structural stability work.', icon: '🛡️' }
        ],
        who: 'Goal-oriented individuals, high-performers, and those who treat their body as a high-performance vehicle.',
        navItems: [
            { id: 'overview', label: 'Method' },
            { id: 'programs', label: 'Labs' },
            { id: 'unique', label: 'Matrix' },
            { id: 'benefits', label: 'Results' },
            { id: 'enquiry', label: 'Join' }
        ]
    },
    'wellness-center': {
        title: 'Wellness Center',
        img: divWellnessImg,
        tagline: 'The Science of Restoration.',
        overview: 'Recovery is the most underrated phase of performance. Our Wellness Center provides a sanctuary of advanced recovery technology to downshift your nervous system and accelerate cellular repair.',
        uniqueSection: {
            title: '8 Dimensions of Holistic Wellness',
            desc: 'True restoration requires a multi-faceted approach. We evaluate and optimize your life across these eight core pillars of human vitality.',
            isLargeGrid: true,
            items: [
                { 
                    label: 'Physical', 
                    detail: 'Nourishing your body through movement, nutrition, and sleep. For those seeking vitality and disease prevention.',
                    img: 'https://dailylifestyletalks.com/wp-content/uploads/2023/02/Physical-Wellness-1.png'
                },
                { 
                    label: 'Emotional', 
                    detail: 'Understanding your feelings and coping with stress. For those seeking inner peace and emotional resilience.',
                    img: 'https://tse2.mm.bing.net/th/id/OIP.e0Z-bK-SyfktwJ7qom8AnAHaEy?rs=1&pid=ImgDetMain&o=7&rm=3'
                },
                { 
                    label: 'Intellectual', 
                    detail: 'Expanding knowledge and creative abilities. For lifelong learners and creative minds.',
                    img: 'https://tse2.mm.bing.net/th/id/OIP.fDi7MhEcQWhorez7SfMHZwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
                },
                { 
                    label: 'Social', 
                    detail: 'Developing connection and support systems. For those seeking community and deeper relationships.',
                    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop'
                },
                { 
                    label: 'Spiritual', 
                    detail: 'Expanding sense of purpose and meaning. For seekers of higher purpose and mindfulness.',
                    img: 'https://tse3.mm.bing.net/th/id/OIP.dWXXWl3nTZK9YTvPDin3bgHaEO?rs=1&pid=ImgDetMain&o=7&rm=3'
                },
                { 
                    label: 'Environmental', 
                    detail: 'Creating stimulating environments that support well-being. For those seeking harmony with their surroundings.',
                    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop'
                },
                { 
                    label: 'Vocational', 
                    detail: 'Deriving satisfaction through purposeful work. For professionals seeking career-life balance.',
                    img: 'https://tse1.mm.bing.net/th/id/OIP.-OsE9MFn7iwDkbPqTBKmEAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
                },
                { 
                    label: 'Financial', 
                    detail: 'Satisfaction with current and future financial status. For those seeking stability and stress reduction.',
                    img: 'https://tse3.mm.bing.net/th/id/OIP.ar58EdFrofp-5QrIjwYSYgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
                }
            ]
        },
        benefits: [
            { title: 'Accelerated Repair', desc: 'Trigger rapid cellular recovery and tissue healing through advanced recovery tech.', icon: '🧪' },
            { title: 'Systemic Anti-Inflammation', desc: 'Systematically reduce internal inflammation and oxidative stress markers.', icon: '🌊' },
            { title: 'Psychological Reset', desc: 'Profoundly downshift your nervous system into deep parasympathetic states.', icon: '🧘' },
            { title: 'Immune Augmentation', desc: 'Strengthen your biological defenses through optimized rest and restoration.', icon: '🛡️' }
        ],
        who: 'Busy professionals, high-intensity athletes, and anyone navigating a high-stress modern environment.',
        navItems: [
            { id: 'overview', label: 'Reset' },
            { id: 'unique', label: 'The Cycle' },
            { id: 'benefits', label: 'Recovery' },
            { id: 'enquiry', label: 'Restore' }
        ]
    },
    'dance-classes': {
        title: 'Dance Classes',
        img: divDanceImg,
        tagline: 'Kinetic Artistry. Cardio Flow.',
        overview: 'Dance is the ultimate expression of human movement. Our classes merge athletic demand with artistic freedom, creating a high-energy environment that builds coordination and cardiovascular endurance.',
        programs: [
            { name: 'Classical & Grace', time: 'Ballet | Contemporary | Modern', desc: 'Build a foundation of technical precision and ethereal movement with our elite classical programs.', img: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2000&auto=format&fit=crop', size: 'medium', markers: ['Technical Precision', 'Core Strength', 'Ethereal Flow'] },
            { name: 'Cultural Roots', time: 'Indian Classical | Folk', desc: 'Explore the divine rhythm and storytelling power of global heritage dances.', img: 'https://i.pinimg.com/originals/70/e3/5d/70e35dbed223120593f2b9064bbd4291.jpg', size: 'medium', markers: ['Storytelling', 'Spiritual Rhythm', 'Heritage'] },
            { name: 'Urban & Street', time: 'Hip Hop | Breakdancing', desc: 'Fast-paced, high-precision rhythmic movement set to the latest global beats.', img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2000&auto=format&fit=crop', size: 'medium', markers: ['Street Energy', 'Power Moves', 'Global Beats'] },
            { name: 'Latin Passion', time: 'Salsa | Tango | Flamenco', desc: 'Experience the infectious heat and intimate conversation of world-class partner dancing.', img: 'https://tse2.mm.bing.net/th/id/OIP.0TrHxcSXccdNma7fBo5jOgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3', size: 'medium', markers: ['Partner Connection', 'Rhythmic Heat', 'Social Connectivity'] }
        ],
        uniqueSection: {
            title: 'The Global Gallery',
            desc: 'Explore our world-class dance studio featuring 18 distinct styles, from technical classical forms to explosive urban and cultural energy.',
            isLargeGrid: true,
            items: [
                { label: 'Ballet', detail: 'The foundation of grace and technical precision. For discipline and ethereal movement.', img: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Contemporary', detail: 'Artistic freedom merged with athletic technique. For expressive and versatile movers.', img: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Bharatanatyam', detail: 'The mathematical precision of South Indian storytelling. For technical mastery.', img: 'https://i.pinimg.com/originals/70/e3/5d/70e35dbed223120593f2b9064bbd4291.jpg' },
                { label: 'Hip Hop', detail: 'Urban culture, rhythmic bounce, and raw style. For street-level energy and flow.', img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Salsa', detail: 'The infectious, rhythmic heat of Latin passion. For social connectivity.', img: 'https://tse2.mm.bing.net/th/id/OIP.0TrHxcSXccdNma7fBo5jOgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Kathak', detail: 'The mesmerizing footwork and pirouettes of the North. For rhythmic complexity.', img: 'https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Jazz', detail: 'Explosive energy, syncopation, and personality. For performance-focused dancers.', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Tango', detail: 'The dramatic, intimate conversation of two souls. For precision and intensity.', img: 'https://images.unsplash.com/photo-1516475429286-465d815a0df7?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Breakdancing', detail: 'The ultimate athletic fusion of power and rhythm. For strength and skill.', img: 'https://i.pinimg.com/originals/3e/4a/92/3e4a928b033aa558cf34e222baf2e15f.jpg' },
                { label: 'Flamenco', detail: 'The powerful, rhythmic fire of Spanish tradition. For expressive strength.', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Belly Dance', detail: 'The fluid, isolated artistry of the torso. For core strength and grace.', img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Odissi', detail: 'The fluid, statuesque beauty of Eastern India. For sculptural poses.', img: 'https://tse4.mm.bing.net/th/id/OIP.pQ0ve-G2vtKc9xrJMW8NjwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Modern', detail: 'Exploring the ground and the soul through movement. For emotional expression.', img: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Bhangra', detail: 'The explosive, joyful power of the harvest. For an intense cardio workout.', img: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Garba', detail: 'The rhythmic, circular celebration of life. For community and cultural joy.', img: 'https://tse2.mm.bing.net/th/id/OIP.4TyxYKzTCrVPONNK0NujQwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Ballroom', detail: 'Elegance, partner connection, and social grace. For coordination.', img: 'https://images.unsplash.com/photo-1516475429286-465d815a0df7?q=80&w=2000&auto=format&fit=crop' },
                { label: 'Folk Dances', detail: 'The vibrant heartbeat of community and heritage. For group energy.', img: 'https://th.bing.com/th/id/OIP.B6Zsq9FuWaG30SYMdRb8uQHaLG?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Indian Classical', detail: 'A divine journey through rhythm and expression. For spiritual connection.', img: 'https://tse1.mm.bing.net/th/id/OIP.VRTBYLw1YdHxYCfA11OQZAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' }
            ]
        },
        benefits: [
            { title: 'Superior Coordination', desc: 'Master complex rhythmic patterns and enhance proprietary motor control.', icon: '🩰' },
            { title: 'Metabolic Ignite', desc: 'Achieve high-caloric expenditure through exhilarating and artistic cardio flow.', icon: '🔥' },
            { title: 'Endorphin Surge', desc: 'Experience a profound psychological lift through the joy of rhythmic expression.', icon: '✨' },
            { title: 'Social Synchronicity', desc: 'Build deep communal connections through the shared language of movement.', icon: '🤝' }
        ],
        who: 'Individuals looking for an exhilarating, musical alternative to standard gym routines.',
        navItems: [
            { id: 'overview', label: 'Artistry' },
            { id: 'programs', label: 'Styles' },
            { id: 'unique', label: 'Spectrum' },
            { id: 'benefits', label: 'Energy' },
            { id: 'enquiry', label: 'Move' }
        ]
    },
    'music-classes': {
        title: 'Music Classes',
        img: divMusicImg,
        tagline: 'Cognitive Harmony.',
        overview: 'Music is not just a skill—it is a cognitive super-tool. Our music programs focus on the intersection of technical mastery and the therapeutic power of sound for mental health and brain plasticity.',
        programs: [
            { name: 'Western Strings', time: 'Guitar | Violin | Cello | Viola', desc: 'From the versatile Guitar to the emotional depth of the Cello, master the art of the bow and pluck.', size: 'medium', markers: ['Bowing Tech', 'Plucking Control', 'Acoustic Body'], accent: 'from-amber-600/10 to-orange-600/5' },
            { name: 'Master Keys', time: 'Piano | Synth | Organ', desc: 'Build a complete musical foundation with the King of instruments and modern sound design.', size: 'medium', markers: ['Keyboard Theory', 'Sound Synthesis', 'Grand Scale'], accent: 'from-slate-500/10 to-gray-500/5' },
            { name: 'Eastern Roots', time: 'Sitar | Veena | Sarangi', desc: 'Explore the hypnotic, microtonal complexity and spiritual resonance of the East.', size: 'medium', markers: ['Raga Structure', 'Meend Mastery', 'Spiritual Depth'], accent: 'from-red-600/10 to-rose-600/5' },
            { name: 'Rhythm & Wind', time: 'Drums | Octapad | Flute', desc: 'Master the heartbeat of timing or the ethereal breath control of soaring melodies.', size: 'medium', markers: ['Syncopation', 'Breath Control', 'Precision Beat'], accent: 'from-brand-red-light/10 to-indigo-400/5' }
        ],
        uniqueSection: {
            title: 'The Global Gallery',
            desc: 'Explore our comprehensive conservatory featuring 23 distinct instruments, each with its own unique sonic signature and technical path.',
            isLargeGrid: true,
            items: [
                { label: 'Guitar', detail: 'The versatile soul of modern music. For rhythmic and melodic freedom.', img: 'https://cdn.mos.cms.futurecdn.net/C2845HQhUYoWYJK3zMkKiX.jpg' },
                { label: 'Violin', detail: 'Elegant complexity and emotional depth. For technical excellence.', img: 'https://tse3.mm.bing.net/th/id/OIP.DZPXUi-Z_vNB8sdkIZNqlAHaEu?w=1332&h=850&rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Cello', detail: 'Profound resonance mimicking the human voice. For deep emotional impact.', img: 'https://tse3.mm.bing.net/th/id/OIP.1-EUVFhsNUGeakY8vZvAbgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Piano', detail: 'The king of instruments, a complete musical foundation. For theory.', img: 'https://th.bing.com/th/id/OIP.rUTJG1rEeRhEiQfZaZnQowHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Sitar', detail: 'The hypnotic, microtonal complexity of the East. For spiritual depth.', img: 'https://www.amritmusic.com/wp-content/uploads/2024/09/Sitar.jpg' },
                { label: 'Drums', detail: 'The raw power of heartbeat and timing. For physical musicians.', img: 'https://tse4.mm.bing.net/th/id/OIP.Db2OduDlTECdvkKAUy5brQHaE6?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Keyboard', detail: 'The gateway to digital soundscapes and theory. For producers.', img: 'https://tse2.mm.bing.net/th/id/OIP.Y3eiZHMW9B95Qth9m1i7WgHaEj?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Flute', detail: 'Ethereal breath control and soaring melodies. For grace.', img: 'https://th.bing.com/th/id/OIP.WSipvTy9x5qA2GjPKNr3agHaE1?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Harmonium', detail: 'The spiritual heart of classical resonance. For vocalists.', img: 'https://tse2.mm.bing.net/th/id/OIP.f4iyvjTXrblTzZETl70PtgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Octapad', detail: 'Precision electronic percussion. For tech-savvy beat makers.', img: 'https://static.roland.com/assets/images/products/gallery/octapad_spd-20_pro-bk_angle_gal.jpg' },

                { label: 'Organ', detail: 'Majestic scale and harmonic richness. For grand sound lovers.', img: 'https://tse3.mm.bing.net/th/id/OIP.6XPrTNM4lggO9Mwn3E6LgwHaGO?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Tuba', detail: 'The deep, brassy anchor of the low end. For foundations.', img: 'https://tse3.mm.bing.net/th/id/OIP.gZORNxMFbK0wjnsQaVRNmQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Viola', detail: 'The warm, mellow middle of the string family. For a rich, alto voice.', img: 'https://th.bing.com/th/id/R.c69088499a505ad36da93bb82fe176df?rik=9jy9j94%2bP2Rq3Q&riu=http%3a%2f%2fwww.get-tuned.com%2fimages%2fviola.jpg&ehk=omC7tZSni8EaNtkfPqOgjzZaTHeaAPEtiESENJt7zF8%3d&risl=&pid=ImgRaw&r=0' },
                { label: 'Harp', detail: 'Celestial strings and shimmering arpeggios. For an intricate craft.', img: 'https://tse3.mm.bing.net/th/id/OIP.jqtNkFwhkEnuZ2QwFOQvNQHaMK?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Banjo', detail: 'Bright, percussive energy with a distinctive twang. For folk lovers.', img: 'https://th.bing.com/th/id/OIP.Ks0g5iOfmdUe1OuLChegqgHaJH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Ukulele', detail: 'Portable joy and bright, island-inspired tones. For beginners.', img: 'https://tse4.mm.bing.net/th/id/OIP.zqs8GH1eGOZHt3pbjrSjTgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Mandolin', detail: 'High-pitched, double-stringed rhythmic brilliance. For folk texture.', img: 'https://www.bhphotovideo.com/images/images1000x1000/washburn_m1k_a_u_m1_pack_americana_series_1727073.jpg' },
                { label: 'Veena', detail: 'The divine instrument of pure celestial vibration. For masters.', img: 'https://th.bing.com/th/id/R.56d966e5011f2d973067af4347550082?rik=ukNhl9M6SJfB5w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fveena-png-the-sarasvati-veena-is-an-indian-plucked-string-instrument-it-is-named-after-the-hindu-849.jpg&ehk=ZT4y6PKnujb6ao2%2b%2f8VC30NDRSOKO59AHn84KwN0Tmw%3d&risl=&pid=ImgRaw&r=0' },
                { label: 'Sarangi', detail: 'The "voice of a hundred colors," a hauntingly vocal soul.', img: 'https://2.bp.blogspot.com/__A2pwgFjGkQ/TFS-qwNMGFI/AAAAAAAAABE/Wvsrh9atoJU/s1600/Sarangi.JPG' },
                { label: 'Balalaika', detail: 'The triangular folk charm of Slavic heritage. For ethnic character.', img: 'https://tse4.mm.bing.net/th/id/OIP.J7x4iWeyo3lhzyFPtt-9lQHaF-?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Synthesizer', detail: 'Boundless sonic exploration and sound design. For futurists.', img: 'https://tse4.mm.bing.net/th/id/OIP.uZlNs5-5OthWr0YqBtswfwHaDt?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Accordion', detail: 'The portable orchestra of rhythm and melody. For folk lovers.', img: 'https://tse3.mm.bing.net/th/id/OIP.W4QT43rl7IssicIXQrTqegHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
                { label: 'Lute', detail: 'The ancient, delicate ancestor of the guitar. For early music lovers.', img: 'https://tse4.mm.bing.net/th/id/OIP.48EJj1rYtlHXlq2NgeEZXgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' }
            ]
        },
        benefits: [
            { title: 'Neural Plasticity', desc: 'Leverage musical mastery to enhance memory, logic, and brain connectivity.', icon: '🧠' },
            { title: 'Emotional Resonance', desc: 'Utilize sound as a clinical-grade outlet for stress and emotional regulation.', icon: '🎵' },
            { title: 'Disciplined Patience', desc: 'Cultivate the profound mental grit required for technical instrument mastery.', icon: '⏳' },
            { title: 'Focus Duration', desc: 'Significantly increase your capacity for deep work and sustained attention.', icon: '🎯' }
        ],
        who: 'Children and adults seeking intellectual enrichment and a powerful creative outlet.',
        navItems: [
            { id: 'overview', label: 'Insight' },
            { id: 'programs', label: 'Conservatory' },
            { id: 'unique', label: 'Gallery' },
            { id: 'benefits', label: 'Cognition' },
            { id: 'enquiry', label: 'Create' }
        ]
    }
}


const DivisionTemplate = () => {
    const { divisionId } = useParams()
    const data = divisionData[divisionId]
    const [selectedImg, setSelectedImg] = useState(null)
    const [activeSection, setActiveSection] = useState('overview')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 800], [0, 300])
    const opacityY = useTransform(scrollY, [0, 300], [1, 0])
    const useScrollParallax = (distance) => useTransform(scrollY, [0, 2000], [0, distance])

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeCourse, setActiveCourse] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, message } = formData;

        const textMessage = `*New Division Enquiry: ${data.title}*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message || 'No additional message'}`;

        const whatsappUrl = `https://wa.me/918097923924?text=${encodeURIComponent(textMessage)}`;
        const mailtoUrl = `mailto:yoganeshhealthinstitute@gmail.com?subject=Enquiry for ${data.title} - ${name}&body=${encodeURIComponent(textMessage.replace(/\*/g, ''))}`;

        window.open(whatsappUrl, '_blank');
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 500);

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', email: '', message: '' });
        }, 5000);
    };

    useEffect(() => {
        if (!data) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -60% 0px' }
        )

        data.navItems.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [data, divisionId])

    if (!data) {
        return <Navigate to="/divisions" replace />
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const yOffset = -120 // Account for both navbars
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <>
            <Helmet>
                <title>YOGANESH {data.title} | {data.tagline}</title>
                <meta name="description" content={`Join YOGANESH ${data.title}. ${data.overview.substring(0, 100)}...`} />
            </Helmet>


            <main className="bg-brand-bg text-brand-text min-h-screen overflow-hidden">

                {/* Cinematic Hero */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Parallax Background */}
                    <div className="absolute inset-0 z-0 bg-brand-text">
                        <motion.img
                            style={{ y: heroY }}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src={data.img}
                            alt={data.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-50"
                        />
                        {/* Dramatic Lighting Overlays */}
                        <div className={`absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent`}></div>
                        <div className={`absolute inset-0 opacity-40 mix-blend-multiply bg-brand-red-dark`}></div>
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Animated Scanning Line */}
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[1px] bg-brand-red-light/20 z-0 pointer-events-none"
                        ></motion.div>
                    </div>

                    {/* Massive Division Watermark */}
                    <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-full flex justify-center opacity-[0.04] pointer-events-none select-none z-0">
                        <span className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap uppercase italic">
                            {data.title.split(' ')[0]}
                        </span>
                    </div>

                    <motion.div
                        style={{ opacity: opacityY }}
                        className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-2xl px-8 py-3 rounded-xl border border-white/10 mb-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-red-light shadow-[0_0_15px_#3B82F6] animate-pulse"></span>
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-red-light">System.Division.Active</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-[7rem] font-black mb-10 tracking-tighter text-white leading-[0.8] uppercase italic pr-24 drop-shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
                        >
                            YOGANESH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-dark via-brand-red-light to-brand-red-light drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)] block mt-4 pr-10">
                                {data.title}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-[10px] md:text-lg font-black text-brand-red-light px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/10 tracking-[0.4em] max-w-4xl uppercase relative overflow-hidden group rounded-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-red-light/10 to-transparent"></div>
                            <span className="relative z-10 font-black tracking-[0.6em]">
                                [ {data.tagline} ]
                            </span>
                        </motion.p>
                    </motion.div>
                </section>

                {/* Secondary Division Navbar - Cooler Floating Pill */}
                <nav className="sticky top-6 z-50 px-4 pointer-events-none">
                    <div className="container mx-auto max-w-4xl pointer-events-auto">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] px-2 md:px-6 py-2 flex items-center justify-between"
                        >
                            {/* Improved Back Button */}
                            <Link to="/divisions" className="flex items-center group text-brand-text-muted hover:text-brand-red-light transition-all font-bold text-xs tracking-widest uppercase mr-4">
                                <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-text/5 flex items-center justify-center mr-2 group-hover:bg-brand-red-light/10 group-hover:border-brand-red-light/30 transition-all shadow-sm">
                                    <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                </div>
                                <span className="hidden sm:inline">Back</span>
                            </Link>

                            {/* Desktop Nav with Sliding Active Indicator */}
                            <ul className="hidden md:flex items-center bg-brand-bg-alt/30 rounded-full p-1 border border-brand-text/5">
                                {data.navItems.map((item) => (
                                    <li key={item.id} className="relative">
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`relative z-10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${activeSection === item.id ? 'text-white' : 'text-brand-text/50 hover:text-brand-text'
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="pill-active"
                                                className="absolute inset-0 bg-brand-red-light rounded-full z-0 shadow-[0_5px_15px_rgba(37,99,235,0.2)]"
                                                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Hamburger Toggle */}
                            <button
                                className="md:hidden w-10 h-10 flex items-center justify-center text-brand-text text-xl focus:outline-none rounded-full bg-brand-bg-alt border border-brand-text/5"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                            </button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Dropdown - Also Glassmorphic */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, scale: 0.95 }}
                                animate={{ height: 'auto', opacity: 1, scale: 1 }}
                                exit={{ height: 0, opacity: 0, scale: 0.95 }}
                                transformTemplate={({ scale }) => `scale(${scale})`}
                                className="md:hidden absolute top-20 left-4 right-4 overflow-hidden bg-white/90 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl p-4"
                            >
                                <ul className="flex flex-col gap-2">
                                    {data.navItems.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => {
                                                    scrollToSection(item.id);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className={`w-full text-center py-4 rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all ${activeSection === item.id
                                                    ? 'bg-brand-red-light text-white shadow-lg'
                                                    : 'bg-brand-bg-alt/50 text-brand-text-muted'
                                                    }`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Content Sections */}
                <div className="relative">
                    {/* Ambient Background Lighting */}
                    <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>
                    <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.02),transparent_60%)] pointer-events-none"></div>

                    {/* OVERVIEW SECTION */}
                    <motion.section
                        id="overview"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="py-24 md:py-32 scroll-mt-20"
                    >
                        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
                                {/* Background Decorative Number */}
                                <div className="absolute -top-20 -left-10 text-[250px] font-black text-brand-red-light opacity-[0.03] select-none pointer-events-none hidden md:block">01</div>

                                <div className="w-full lg:w-3/5 relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="space-y-10"
                                    >
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-8 h-[1px] bg-brand-red-light"></div>
                                                <span className="text-brand-red-light font-black uppercase tracking-[0.5em] text-[9px] px-3 py-1 bg-brand-red-light/5 rounded-full border border-brand-red-light/10">Strategic Blueprint</span>
                                            </div>
                                            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-text italic uppercase leading-[0.85] pr-16">
                                                About The <br />
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-dark to-brand-red-light inline-block pr-4">Division</span>
                                            </h2>
                                        </div>

                                        <p className="text-brand-text-muted text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-brand-red-light/10 pl-10 py-2">
                                            {data.overview}
                                        </p>


                                    </motion.div>
                                </div>

                                <div className="w-full lg:w-2/5">
                                    <TiltWrapper intensity={15}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="bg-brand-text p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group"
                                        >
                                            {/* Technical Decorations */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-light/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                                            <div className="absolute top-12 right-12 w-2 h-2 bg-brand-red-light rounded-full animate-pulse"></div>

                                            <div className="relative z-10 space-y-8">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-6 h-6 rounded-lg bg-brand-red-light/20 flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-brand-red-light rounded-sm rotate-45"></div>
                                                    </div>
                                                    <span className="text-brand-red-light font-black uppercase tracking-[0.3em] text-[10px]">Enrollment Protocol</span>
                                                </div>

                                                <h3 className="text-brand-red-light font-black uppercase tracking-widest text-sm italic">Who It's For</h3>

                                                <p className="text-xl md:text-2xl font-bold leading-tight italic tracking-tight text-white/90">
                                                    {data.who}
                                                </p>


                                            </div>
                                        </motion.div>
                                    </TiltWrapper>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* PROGRAMS & OFFERINGS SECTION - Innovative Bento Lab */}
                    {data.programs && data.programs.length > 0 && (
                        <motion.section
                            id="programs"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="py-24 md:py-40 scroll-mt-20 bg-brand-bg-alt/50 relative"
                        >
                            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                                    <div className="max-w-2xl">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-12 h-[2px] bg-brand-red-light"></div>
                                            <span className="text-brand-red-light font-black uppercase tracking-[0.4em] text-xs">The Methodology</span>
                                        </div>
                                        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-brand-text leading-none uppercase italic pr-20">
                                            Programs
                                        </h2>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] md:auto-rows-[300px]">
                                    {data.programs.map((prog, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.6 }}
                                            className={`group relative rounded-[3rem] overflow-hidden border border-brand-text/5 shadow-sm hover:shadow-2xl transition-all duration-700 ${prog.size === 'large' ? 'md:col-span-7 md:row-span-2' :
                                                prog.size === 'medium' ? 'md:col-span-5 md:row-span-1' :
                                                    'md:col-span-5 md:row-span-1'
                                                } ${!prog.img ? `bg-gradient-to-br ${prog.accent} backdrop-blur-sm` : 'bg-brand-bg-alt'}`}
                                        >
                                            {/* Background Image Overlay */}
                                            {prog.img ? (
                                                <div className="absolute inset-0 z-0 overflow-hidden">
                                                    <img
                                                        src={prog.img}
                                                        alt={prog.name}
                                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-40 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-bg/20 group-hover:from-brand-text/90 group-hover:via-brand-text/40 group-hover:to-transparent transition-all duration-700"></div>
                                                </div>
                                            ) : (
                                                /* Abstract Zen Glow for Non-Image Cards */
                                                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${prog.accent} blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                                                    <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${prog.accent} blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2`}></div>
                                                </div>
                                            )}

                                            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center justify-between mb-8">
                                                        <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${!prog.img ? 'bg-white/40 text-brand-text border-brand-text/10 group-hover:bg-brand-text group-hover:text-white' : 'bg-brand-bg text-brand-text border-brand-text/5 group-hover:bg-brand-red-light group-hover:text-white group-hover:border-transparent'}`}>
                                                            {prog.time}
                                                        </div>
                                                        <div className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                                                            {i === 0 ? '🦾' : i === 1 ? '🔬' : i === 2 ? '💎' : '💊'}
                                                        </div>
                                                    </div>

                                                    <h3 className={`font-black tracking-tight leading-none uppercase italic mb-6 transition-colors duration-500 pr-8 ${prog.size === 'large' ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'
                                                        } ${prog.img ? 'group-hover:text-white' : 'text-brand-text'}`}>
                                                        {prog.name}
                                                    </h3>

                                                    <p className={`max-w-md text-lg leading-relaxed transition-colors duration-500 ${prog.img ? 'text-brand-text group-hover:text-white/70' : 'text-brand-text-muted'
                                                        }`}>
                                                        {prog.desc}
                                                    </p>
                                                </div>

                                                <div className="space-y-6">
                                                    {prog.markers && (
                                                        <div className="flex flex-wrap gap-2">
                                                            {prog.markers.map((marker, m) => (
                                                                <span key={m} className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${!prog.img ? 'bg-white/30 text-brand-text-muted group-hover:bg-white/60 group-hover:text-brand-text' : 'bg-brand-text/5 text-brand-text-muted group-hover:bg-white/10 group-hover:text-brand-red-light'}`}>
                                                                    {marker}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* UNIVERSITY COURSES SECTION - Immersive Explorer Layout */}
                    {data.universityCourses && (
                        <motion.section
                            id="courses"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="py-24 md:py-48 scroll-mt-20 bg-brand-text relative overflow-hidden"
                        >
                            {/* Animated Background Orbs */}
                            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-red-light/10 rounded-full blur-[120px] animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-brand-red-light/5 rounded-full blur-[100px]"></div>

                            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                                <div className="flex flex-col mb-20">
                                    <div className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-brand-red-light mb-6 w-fit">Academic Excellence</div>
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white italic uppercase pr-12">
                                        The Learning <br />
                                        <span className="text-brand-red-light">Ecosystem</span>
                                    </h2>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 min-h-[650px]">

                                    {/* Left: Vertical Course Selector */}
                                    <div className="w-full lg:w-1/3 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            {data.universityCourses.map((course, i) => (
                                                <motion.button
                                                    key={i}
                                                    onMouseEnter={() => setActiveCourse(i)}
                                                    onClick={() => setActiveCourse(i)}
                                                    className={`w-full text-left p-8 rounded-[2rem] transition-all duration-500 flex items-center justify-between group ${activeCourse === i
                                                        ? 'bg-white shadow-[0_30px_60px_rgba(0,0,0,0.3)] -translate-y-1'
                                                        : 'bg-white/5 border border-white/5 hover:bg-white/10'
                                                        }`}
                                                >
                                                    <div className="flex items-center space-x-6">
                                                        <span className={`text-3xl transition-transform duration-500 ${activeCourse === i ? 'scale-125 rotate-12' : 'group-hover:scale-110'}`}>
                                                            {course.icon}
                                                        </span>
                                                        <div>
                                                            <h4 className={`font-black text-xl tracking-tight transition-colors ${activeCourse === i ? 'text-brand-text' : 'text-white/60'}`}>
                                                                {course.name}
                                                            </h4>
                                                            <p className={`text-[10px] font-bold uppercase tracking-widest ${activeCourse === i ? 'text-brand-red-light' : 'text-white/30'}`}>
                                                                {course.levels}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <FaArrowRight className={`transition-all duration-500 ${activeCourse === i
                                                        ? 'text-brand-red-light opacity-100 translate-x-0'
                                                        : 'text-white/0 -translate-x-4'
                                                        }`} />
                                                </motion.button>
                                            ))}
                                        </div>

                                        <div className="mt-12 lg:mt-0 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                                            <p className="text-white/40 text-sm italic leading-relaxed">
                                                *All courses are internationally accredited and recognized by the Global Yoga Alliance and participating universities.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Immersive Display Area */}
                                    <div className="w-full lg:w-2/3 relative">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeCourse}
                                                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                                                transition={{ duration: 0.5, ease: "circOut" }}
                                                className="h-full bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative"
                                            >
                                                {/* Main Visual */}
                                                <img
                                                    src={
                                                        activeCourse === 0 ? courseDiplomaImg :
                                                            activeCourse === 2 ? courseTeacherImg :
                                                                activeCourse === 4 ? courseResearchImg :
                                                                    healthUniversityImg
                                                    }
                                                    alt="Course Visualization"
                                                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                                                />

                                                {/* Content Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/60 to-transparent p-12 flex flex-col justify-end">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                        className="space-y-6"
                                                    >
                                                        <div className="w-20 h-1 bg-brand-red-light"></div>
                                                        <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                                                            {data.universityCourses[activeCourse].name}
                                                        </h3>
                                                        <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                                                            {activeCourse === 0 && "Deep dive into the structural foundations of yoga therapy and clinical biomechanics."}
                                                            {activeCourse === 1 && "Specialized training in clinical assessment and advanced corrective exercise."}
                                                            {activeCourse === 2 && "The gold standard for aspiring instructors, merging technical mastery with spiritual depth."}
                                                            {activeCourse === 3 && "Full-scale academic degree programs for a career in sports science and wellness."}
                                                            {activeCourse === 4 && "Pushing the boundaries of yoga through clinical trials, biofeedback, and data-driven research."}
                                                        </p>


                                                    </motion.div>
                                                </div>


                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* UNIQUE DOMAIN SECTION (The Matrix / The Lineage / The Spectrum) */}
                    {data.uniqueSection && (
                        <motion.section
                            id="unique"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="py-24 md:py-32 scroll-mt-20 relative overflow-hidden bg-brand-text text-white"
                        >
                            {/* Animated Background Elements */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.2),transparent_50%)]"></div>
                                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.2),transparent_50%)]"></div>
                            </div>

                            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                                {data.uniqueSection.isLargeGrid ? (
                                    <div className="space-y-16">
                                        <div className="text-center max-w-3xl mx-auto space-y-6">
                                            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-black uppercase tracking-[0.3em] text-brand-red-light">The Conservatory</div>
                                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight italic uppercase pr-24 relative z-10">{data.uniqueSection.title}</h2>
                                            <p className="text-lg text-white/70 leading-relaxed">
                                                {data.uniqueSection.desc}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            {data.uniqueSection.items.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500"
                                                >
                                                    <div
                                                        className="aspect-video overflow-hidden cursor-zoom-in"
                                                        onClick={() => setSelectedImg(item.img)}
                                                    >
                                                        <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                                                    </div>
                                                    <div className="p-8">
                                                        <h4 className="text-xl font-black text-white uppercase italic mb-2 tracking-tighter">{item.label}</h4>
                                                        <p className="text-white/50 text-sm leading-relaxed">{item.detail}</p>
                                                    </div>
                                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-red-light/20 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-brand-red-light transition-colors">
                                                        <FaArrowRight className="text-white text-xs" />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                        <div className="w-full lg:w-1/2">
                                            <motion.div
                                                initial={{ opacity: 0, x: -40 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className="space-y-8"
                                            >
                                                <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-black uppercase tracking-[0.3em] text-brand-red-light">System Protocol</div>
                                                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight italic uppercase pr-24 relative z-10">{data.uniqueSection.title}</h2>
                                                <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                                                    {data.uniqueSection.desc}
                                                </p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                                                    {data.uniqueSection.items.map((item, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                            className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                                                        >
                                                            <h4 className="text-brand-red-light font-black text-sm uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform">{item.label}</h4>
                                                            <p className="text-white/50 text-sm">{item.detail}</p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div className="w-full lg:w-1/2">
                                            <TiltWrapper intensity={10}>
                                                <div className="relative group">
                                                    <div className="absolute -inset-4 border border-white/10 rounded-[3rem] pointer-events-none group-hover:scale-105 transition-transform duration-700"></div>
                                                    <div className="absolute -inset-8 border border-white/5 rounded-[4rem] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>

                                                    <img
                                                        src={divisionId === 'yoga-classes' ? yogaSpecialImg : divisionId === 'fitness-classes' ? fitnessSpecialImg : data.img}
                                                        alt={data.uniqueSection.title}
                                                        className="rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] w-full aspect-[4/5] object-cover relative z-10 cursor-zoom-in"
                                                        onClick={() => setSelectedImg(divisionId === 'yoga-classes' ? yogaSpecialImg : divisionId === 'fitness-classes' ? fitnessSpecialImg : data.img)}
                                                    />

                                                    <div className="absolute -bottom-10 -right-10 bg-brand-red-light p-8 rounded-3xl shadow-2xl z-20 max-w-[240px] transform hover:scale-105 transition-transform hidden md:block">
                                                        <div className="text-white font-black text-xs uppercase tracking-widest mb-2 opacity-80">Ecosystem Integrity</div>
                                                        <div className="text-white text-2xl font-black italic">100%</div>
                                                        <div className="text-white/60 text-[10px] mt-2 leading-tight uppercase font-bold tracking-widest">Validated Performance Protocols</div>
                                                    </div>
                                                </div>
                                            </TiltWrapper>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.section>
                    )}

                    {/* BENEFITS SECTION - Premium Revamp */}
                    <motion.section
                        id="benefits"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="py-24 md:py-40 scroll-mt-20 relative overflow-hidden bg-brand-bg-alt/50"
                    >
                        {/* Removed Large Background Watermark per User Request */}

                        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                            <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="max-w-2xl"
                                >
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-[2px] bg-brand-red-light"></div>
                                        <span className="text-brand-red-light font-black uppercase tracking-[0.4em] text-xs">The Advantage</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-text leading-[0.9] pr-12">
                                        WHY CHOOSE <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-dark via-brand-red-light to-brand-red-light">YOGANESH</span>
                                    </h2>
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-brand-text-muted text-lg max-w-md font-medium leading-relaxed pb-2"
                                >
                                    We bridge the gap between clinical excellence and holistic mastery to engineer your ultimate physical evolution.
                                </motion.p>
                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {data.benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.8 }}
                                        className="group h-full"
                                    >
                                        <TiltWrapper intensity={5} scaleOnHover={1.03}>
                                            <div className="relative h-full bg-brand-bg/60 backdrop-blur-md border border-brand-text/5 p-8 rounded-[3rem] transition-all duration-500 hover:bg-brand-bg hover:shadow-[0_50px_100px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden group">

                                                {/* Glass Reflection Effect */}
                                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

                                                {/* Icon Header */}
                                                <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-brand-text/5 flex items-center justify-center mb-8 group-hover:bg-brand-red-light group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                                                    <div className="text-3xl group-hover:scale-125 transition-transform">
                                                        {benefit.icon}
                                                    </div>
                                                </div>

                                                <div className="relative z-10">
                                                    <h4 className="text-lg font-black text-brand-text mb-4 tracking-tight leading-tight group-hover:text-brand-red-dark transition-colors">
                                                        {benefit.title}
                                                    </h4>
                                                    <p className="text-brand-text-muted text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                                        {benefit.desc}
                                                    </p>
                                                </div>



                                                {/* Sophisticated Glow */}
                                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-red-light/5 blur-[50px] group-hover:bg-brand-red-light/10 rounded-full transition-all duration-700"></div>

                                                {/* Subtle Animated Border Bottom */}
                                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red-light transition-all duration-700 ease-out group-hover:w-full"></div>
                                            </div>
                                        </TiltWrapper>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* ENQUIRY CTA SECTION */}
                    <motion.section
                        id="enquiry"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="py-24 md:py-32 scroll-mt-20 relative border-t border-brand-text/5"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_70%)] z-0"></div>

                        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                            <TiltWrapper intensity={3} scaleOnHover={1.01}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="bg-white/80 backdrop-blur-xl border border-brand-text/10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] p-8 md:p-12 relative overflow-hidden group"
                                >

                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red-dark/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000"></div>

                                    <div className="text-center mb-6 relative z-10">
                                        <h2 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">Ready to Begin?</h2>
                                        <p className="text-base text-brand-text-muted">Book a consultation or request more information.</p>
                                    </div>

                                    <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                                                <label className="block text-xs font-bold mb-2 text-brand-text-muted uppercase tracking-widest pl-2">Full Name</label>
                                                <input
                                                    required
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-4 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner"
                                                    placeholder="John Doe"
                                                />
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                                                <label className="block text-xs font-bold mb-2 text-brand-text-muted uppercase tracking-widest pl-2">Phone Number</label>
                                                <input
                                                    required
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    type="tel"
                                                    className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-4 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner"
                                                    placeholder="+91 80979 23924"
                                                />
                                            </motion.div>
                                        </div>

                                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                                            <label className="block text-xs font-bold mb-2 text-brand-text-muted uppercase tracking-widest pl-2">Email Address</label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-4 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner"
                                                placeholder="john@example.com"
                                            />
                                        </motion.div>

                                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
                                            <label className="block text-xs font-bold mb-2 text-brand-text-muted uppercase tracking-widest pl-2">Message (Optional)</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="2"
                                                className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-4 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner resize-none"
                                                placeholder={`I'd like to enquiry about ${data.title}...`}
                                            ></textarea>
                                        </motion.div>

                                        <div className="text-center pt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex flex-col items-center justify-center px-12 py-5 rounded-[2rem] bg-brand-red-dark text-white font-extrabold text-lg tracking-widest uppercase hover:bg-brand-red-light hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transform hover:-translate-y-1 transition-all duration-300 w-full lg:w-auto"
                                            >
                                                <div className="flex items-center">
                                                    Submit Message
                                                    <FaArrowRight className="ml-3 text-sm" />
                                                </div>
                                            </button>
                                        </div>
                                    </form>

                                    {/* Success Overlay */}
                                    <AnimatePresence>
                                        {isSubmitted && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-10"
                                            >
                                                <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
                                                    <svg className="w-10 h-10 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <h3 className="text-2xl font-black mb-4">Request Sent!</h3>
                                                <p className="text-brand-text-muted text-base mb-8 max-w-sm">
                                                    We are redirecting you to WhatsApp and your Email to finalize the enquiry for <strong>{data.title}</strong>.
                                                </p>
                                                <button
                                                    onClick={() => setIsSubmitted(false)}
                                                    className="px-10 py-4 bg-brand-text text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-red-light transition-all"
                                                >
                                                    Send Another
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </motion.div>
                            </TiltWrapper>
                        </div>
                    </motion.section>
                </div>
            </main>

            {/* Cinematic Image Modal (Lightbox) */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] bg-brand-bg/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full max-h-full bg-white rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImg}
                                alt="Gallery Preview"
                                className="w-full h-auto max-h-[85vh] object-contain"
                            />

                            {/* Close Trigger */}
                            <button
                                onClick={() => setSelectedImg(null)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-bg/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-brand-bg transition-all text-xl"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default DivisionTemplate
