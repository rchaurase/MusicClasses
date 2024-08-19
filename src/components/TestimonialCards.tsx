import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote: "Harmony Music Academy has transformed my piano skills. The instructors are amazing and very supportive.",
    name: "Alice Johnson",
    title: "Piano Student"
  },
  {
    quote: "I never thought I could learn to play the guitar, but with Harmony's beginner lessons, I am now playing my favorite songs!",
    name: "Michael Brown",
    title: "Guitar Student"
  },
  {
    quote: "The vocal training course helped me improve my singing technique and confidence. Highly recommended!",
    name: "Sophia Davis",
    title: "Vocal Student"
  },
  {
    quote: "The electronic music production course was a game changer for my music career. I learned so much about sound design and mixing.",
    name: "Liam Wilson",
    title: "Music Producer"
  },
  {
    quote: "As a violin student, Harmony Music Academy has given me the opportunity to enhance my skills and perform confidently.",
    name: "Olivia Smith",
    title: "Violin Student"
  },
  {
    quote: "The supportive community at Harmony Music Academy makes learning fun and engaging. It's a great place to grow as a musician.",
    name: "James White",
    title: "Drumming Student"
  }
]

function MusicTestimonialCards() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our Harmony: Voices of success</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
    </div>
  )
}

export default MusicTestimonialCards
