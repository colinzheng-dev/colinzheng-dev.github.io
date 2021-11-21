import React from 'react'
import { Link } from 'react-router-dom'
import AboutSrc from './img/About.png'

const ShortAbout = () => {
  const year = new Date().getFullYear()
  const myExperience = year - 2014
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutCOntentWrapper">
            <div id="AboutDesc" data-aos="fade-up">
              <h2>Few Words About Me</h2>
              <p>
                I am a Passionate senior Frontend Engineer with over {myExperience} years of experience
                designing, building, deploying, and managing mission-critical internet scale platforms
                for both consumer and enterprise Software as a Service (SaaS) applications.
                I have experience building startups with decentralized remote teams,
                agile engineering practices, cloud-based infrastructure and collaborative
                open-source culture.
              </p>
              <p>
                As a Frontend Engineer, I contributed toward a collection of web applications
                living in React.js (Gatsby), Express.js and similar technologies.
                I collaborated with clients, designers, strategists,
                and a UX l to define requirements, solve architectural challenges, guide fellow developers,
                and develop solutions in light of the growing applications and projects.
              </p>
              <p>
                I have a pretty much nice skill on Javascript Frameworks/libraray such as
                Next.Js, Nuxt.Js, React.Js, and Vue Js. Most of my projects are done with React.Js.
                I am also good in NodeJs, MongoDB, express, Sass, Redux and More.
                I am working on an Akvelon company developping MERN stack project.
                Now I am seeking to leverage my technical and professional expertise in computer science
                to improve my career and achieve my goals.
              </p>
              <Link to="/about">Read My Experiences</Link>
            </div>
            <div id="AboutImage" data-aos="fade-down">
              <img src={AboutSrc} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortAbout
