"use client";

import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Our Mission",
    description: "At Harmony Music Academy, our mission is to inspire and educate musicians of all levels through comprehensive music instruction and performance opportunities."
  },
  {
    title: "Our History",
    description: "Founded in 2000, Harmony Music Academy has been providing quality music education for over two decades, helping students achieve their musical dreams."
  },
  {
    title: "Why Choose Us",
    description: "We offer experienced instructors, a variety of courses, and a supportive community that fosters musical growth and creativity."
  },
  {
    title: "Student Success Stories",
    description: "Our students have gone on to perform in prestigious venues, win competitions, and pursue successful careers in music. Join us and become a part of our success story."
  },
  {
    title: "Facilities and Equipment",
    description: "Our state-of-the-art facilities and high-quality equipment provide the perfect environment for learning and practicing music."
  },
  {
    title: "Community Involvement",
    description: "We actively participate in local community events and provide opportunities for our students to perform and engage with the community."
  },
  {
    title: "Online Learning Options",
    description: "We offer online courses and virtual lessons to accommodate students who prefer to learn from the comfort of their own homes."
  }
]
function WhyChooseUs() {
  return (
    <div className='mb-5'>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
