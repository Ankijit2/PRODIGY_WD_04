// eslint-disable-next-line no-unused-vars
import {React,useState,useEffect} from 'react';

import profile from '../../assets/images/profile.svg'
import html from './../../assets/images/icons/html.svg'
import css from './../../assets/images/icons/css.svg'
import js from './../../assets/images/icons/javascript.svg'
import react from './../../assets/images/icons/react.svg'
import node from './../../assets/images/icons/nodejs.svg'
import mongo from './../../assets/images/icons/mongodb.svg'
import express from './../../assets/images/icons/express.svg'
import tailwind from './../../assets/images/icons/tailwind.svg'
import Bootstrap from './../../assets/images/icons/bootstrap.svg'
import github from './../../assets/images/icons/git.svg'
import jquery from './../../assets/images/icons/jquery.svg'
import ejs from './../../assets/images/icons/ejs.svg'
import mysql from './../../assets/images/icons/mysql.svg'
import figma from './../../assets/images/icons/figma.svg'

import Carousal from '../../components/carousal/carousal.jsx'





function About() {
 

  const technologies = [
    { src: html, alt: '', name: 'HTML' },
    { src: css, alt: '', name: 'CSS' },
    { src: js, alt: '', name: 'JavaScript' },
    { src: tailwind, alt: '', name: 'Tailwind' },
    { src: Bootstrap, alt: '', name: 'Bootstrap' },
    { src: jquery, alt: '', name: 'JQuery' },
    { src: react, alt: '', name: 'React' },
    { src: node, alt: '', name: 'Node JS' },
    { src: express, alt: '', name: 'Express' },
    { src: ejs, alt: '', name: 'EJS' },
    { src: mysql, alt: '', name: 'My SQL' },
    { src: mongo, alt: '', name: 'MongoDB' },
    { src: figma, alt: '', name: 'UI/UX' },
    { src: github, alt: '', name: 'Git' },
  ];














  return (

    <>
      <div id="about" className='mt-12 md:mx-16 mx-6'>
        <h1 className='text-2xl md:text-3xl text-center'>WEB WIZARD: MEET THE DEVELOPER</h1>
        <div id="description" className='flex md:flex-row flex-col justify-between gap-14 mt-8'>
          <img src={profile} alt="" className='h-72' />
          <div className='self-center  text-justify'>
            <h2 className='text-3xl'>Hello,</h2>
            I&apos;m Ankijit, an intermediate web developer with a passion for creating dynamic digital experiences. My skills span HTML, CSS, JavaScript, React, Express.js, Node.js, MongoDB, and APIs. I thrive on learning and pushing my boundaries to craft engaging web solutions. My goal is to keep evolving and make an impact in the web development world.
          </div>
        </div>
      </div>
      <div id="skills" className='mt-12'>
        <h1 className='text-2xl md:text-3xl text-center'>My SKILL ARSENAL</h1>

        <div className="skillset grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3  w-full place-items-center mt-12">
        {technologies.map((tech, index) => (
        <div key={index}>
          <img src={tech.src} alt={tech.alt} className='lg:w-full md:w-20 w-12'/>
          <p>{tech.name}</p>
        </div>
      ))}
        </div>

        <div>
        <h1 className='text-2xl md:text-3xl text-center mt-12'>MY PROJECTS</h1>

        <Carousal/>
        </div>
       
        
      </div>
    
    </>
  )
}

export default About