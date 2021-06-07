import React, { useEffect } from 'react'
import Footer from './Footer'
import AboutPageImg from './img/AboutPage.png'
import AboutWevDev from './img/AboutWebDev.png'
import WebDes from './img/AboutWebDes.png'
import ResDes from './img/AboutResDes.png'
import BugFix from './img/AboutBugFix.png'

const AboutImg = () => {
  return (
    <>
      <div id="AboutPageImage" data-aos="fade-in">
        <img src={AboutPageImg} alt="Error" />
      </div>
    </>
  )
}
const About = () => {
  useEffect(() => {
    document.title = ' DevR - About '
    window.scrollTo(0, 0)
  }, [])
  const year = new Date().getFullYear()
  const myExperience = year - 2014
  const myAge = year - 1993
  return (
    <>
      <section id="AboutPage">
        <div id="Container">
          <div id="AboutPageContentWrapper">
            <AboutImg />
            <div id="AboutPageDesc">
              <div id="Desc" data-aos="fade-right">
                <h2>About Me</h2>
                <p>
                  I am a Passionate senior Full-stack with over {myExperience} years of experience 
                  designing, building, deploying, and managing mission-critical internet scale platforms 
                  for both consumer and enterprise Software as a Service (SaaS) applications. 
                  I have experience building startups with decentralized remote teams, 
                  agile engineering practices, cloud-based infrastructure and collaborative 
                  open-source culture.
                </p>
                <p>
                  I am a young developer with a can-do attitude, phenomenal time management skills, 
                  and a strong user focus. I am {myAge} years old.
                  I graduated from Hong Kong university of science and technology 
                  with hornor of IT engineering in 2014. 
                  After graduating, I had a good opportunity to intern in an IBM company. 
                  But I decided to intern in a startup company because I wanted to get 
                  practical experiences such as starting a company, setting a goal at 
                  first, and driving it. 
                  This made me more self-dependent and taking initiative.
                </p>
                <p>
                  I have a pretty much nice skill on Javascript Frameworks/libraray such as 
                  Next.Js, Nuxt.Js, React.Js, and Vue Js. Most of my projects are done with React.Js. 
                  I am also good in NodeJs, MongoDB, express, Sass, Redux and More.
                  I am working on an Akvelon company developping MERN stack project.
                  Now I am seeking to leverage my technical and professional expertise in computer science
                  to improve my career and achieve my goals.
                  
                </p>
              </div>
              <div data-aos="fade-left" id="AboutTable">
                <table border="0">
                  <tbody>
                    <tr>
                      <th>
                        <img draggable="false" src={AboutWevDev} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={WebDes} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={ResDes} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={BugFix} alt="Error" />
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default About
// export { AboutImg }
