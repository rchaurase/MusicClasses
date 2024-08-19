'use client'
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

function UpcommingWebinars() {
  const featuredWebinars=[
    {
      title: "Mastering Music Production",
      description: "Join us for an in-depth webinar on music production techniques, from recording to mixing and mastering.",
      slug: "mastering-music-production",
      isFeatured: true
    },
    {
      title: "Advanced Guitar Techniques",
      "description": "Learn advanced guitar techniques to enhance your playing skills and take your performance to the next level.",
      slug: "advanced-guitar-techniques",
      isFeatured: true
    },
    {
      title: "Vocal Performance Tips",
      description: "Discover effective vocal performance tips and techniques to improve your singing on stage.",
      slug: "vocal-performance-tips",
      isFeatured: false
    },
    {
      title: "Songwriting Workshop",
      description: "Participate in our songwriting workshop to learn how to craft compelling lyrics and melodies.",
      slug: "songwriting-workshop",
      isFeatured: true
    },
    {
      title: "Jazz Improvisation Masterclass",
      description: "Explore the art of jazz improvisation in this masterclass with renowned jazz musicians.",
      slug: "jazz-improvisation-masterclass",
      isFeatured: false
    },
    {
      title: "Piano Mastery Techniques",
      description: "Gain insights into advanced piano techniques and repertoire in our piano mastery webinar.",
      slug: "piano-mastery-techniques",
      isFeatured: true
    },
    {
      title: "Electronic Music Basics",
      description: "Learn the fundamentals of electronic music production, including DAW usage and sound design.",
      slug: "electronic-music-basics",
      isFeatured: false
    },
    {
      title: "Music Theory Essentials",
      description: "Understand the essentials of music theory to enhance your musical knowledge and skills.",
      slug: "music-theory-essentials",
      isFeatured: true
    }
  ]
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px4 sm:px-6'>
          <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>featured webinar</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white '>Enhance Your Musical Journey</p>
          </div>
          <div className='mt-10'>
              <HoverEffect
                items={featuredWebinars.map((webinar)=>({
                  title:webinar.title,
                  description:webinar.description,
                  link:'/'
                }))}
              />
          </div>
          <div className='mt-10 text-center'>
            <Link href={'/'}
            className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'
            >
                View All Webinars
            </Link></div>
      </div>
      
    </div>
  )
}

export default UpcommingWebinars
