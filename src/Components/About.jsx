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
    document.title = ' DevF - About '
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
                <p>
                  My main skill sets are:<br></br>
                  <b>Frontend</b><br></br>
                  -Javascript, HTML5/CSS3, SCSS/LESS, Canvas,Tailwind,JQuery<br></br>
                  - ES6, ES7 / JSX / Babel / Webpack<br></br>
                  - React/React Native Stack<br></br>
                  - Redux, Saga, Thunk, MobX, Formik<br></br>
                  - Hook, Context, Refs, Code spliting<br></br>
                  - Reactstrap, Reactbootstrap, BS4, Material UI, Semantic UI and Antd, Styled component<br></br>
                  - Typescript, GraphQL, RESTful API<br></br>
                  - Testing with Jest, Cypress and other Testing library<br></br>
                  - Next.js, Gatsby.js<br></br>
                  - Vue.js, Vuex, Nuxt, Quasar, Angular 6+<br></br>
                  <b>Backend</b><br></br>
                  - Node.js, PHP, CI, Laravel, Symfony<br></br>
                  <b>Database:</b><br></br>
                  - MySQL, MongoDB, DynamoDB, PostgreSQL, NoSQL<br></br>
                  <b>Specialist Skills</b><br></br>
                  - Making stable projects with Unit Testing<br></br>
                  - Hands-on DevOps skills in AWS, Azure, Google Cloud<br></br>
                  - Familiarity with high SEO performance<br></br>
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
