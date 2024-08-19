'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const Instructors = [
  {
    id: 1,
    name: "John Doe",
    designation: "Music Instructor",
    image: "https://cdn.pixabay.com/photo/2024/04/13/02/53/ai-generated-8693088_640.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Vocal Coach",
    image: "https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_640.jpg"
  },
  {
    id: 3,
    name: "Robert Johnson",
    designation: "Guitar Instructor",
    image: "https://cdn.pixabay.com/photo/2016/09/27/23/03/guitar-1699501_1280.jpg"
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Piano Instructor",
    image: "https://cdn.pixabay.com/photo/2015/08/16/12/36/man-890877_640.jpg"
  },
  {
    id: 5,
    name: "Michael Brown",
    designation: "Drum Instructor",
    image: "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg"
  }
]

function Instructor() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center '>
      <WavyBackground className='w-full max-h-7xl mx-auto flex flex-col items-center justify-center h-full'>
          <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet our Instructors</h2>
          <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musucal journey</p>
        
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
            <AnimatedTooltip
              items={Instructors}
            />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructor
