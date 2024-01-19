import './Content.css';
import React from 'react';
import profilePic from './profilePic.jpg';
import { useState } from 'react';


const Content = () => {
  const [showExperience, setShowExperience] = useState(false);
  const toggleContent = () => {
    setShowExperience(!showExperience);
  };
  return (
    <main>
        {!showExperience ? (
        <div id="home">
        <img src={profilePic} alt="Profile" className='profile-picture'/>
        <h1>Welcome to Yizhou's Webpage</h1>
        <p>I graduated from University California of San Diego in 2024 with a Bachelor degree in Mathematics Computer Science. 
        I have gained practical experience in web application development and testing, and I'm pretty agile 
        (as in, I love using the Agile methodology). I'm a team player who loves bouncing ideas off of others, but I'm also pretty good at solo work.
        I'm currently seeking a software engineering job where I can apply my skills, work collaboratively with a dynamic team, and build cool stuff. If you think I'd be a great addition to your team, don't hesitate to reach out!
        </p>

        <button className="scroll-down-button" onClick={toggleContent}>&#8595; {/* This is a down arrow symbol */}
        </button>
      </div>
      ):(
        <div id="experience" className="experience-section">
          <h1>Internship experience</h1>
          <h3>Dassault Systemes (Jun 2023 – Dec 2023)</h3>
          <h5>Biovia Software Engineer Intern</h5>
          <ul>
            <li>Spearheaded the integration of HAR proxy with Java for capturing RestAPI responses in Selenium WebDriver across mutiple platforms, resulting in 75% reduction in time for the performance engineers</li>
            <li>Streamlined test report for Pipeline Pilot Geb tests to SpiraTeam, deployed on Jenkins, reducing manual reporting time from 3 hours to 10 minutes</li>
            <li>Implemented and configured Geb framework leveraging Gradle, Spock, and Selenium to author end-to-end tests for the Machine Learning Workbench application, resulting in a 40% increase in test coverage and enhanced reliability</li>
            <li>Published a parsing feature for the JUnit XML files to automate the integration of test results to SpiraTeam utilizing Java and Groovy, achieving 80% reduction in test reporting time</li>
            <li>Automated generating Java-Page-Object from HTML by using UTAM, which saved the overall time of setting up UI test by 95%</li>
          </ul>

          <h3>Commons XR (Dec 2022 – Mar 2023)</h3>
          <h5>Software Engineer Intern</h5>
          <ul>
            <li>Directed a logging feature using React and designed a two-factor authentication mechanism, significantly enhancing user
data security and access control</li>
            <li>Established a pipeline between the website and an Azure Virtual Server, integrating Azure SQL Database and
Firebase for email authentication</li>
            <li>Standardized a WordPress staging sites workflow, delivering a secure, Git-based solution that effectively addressed site
bugs and minimized dependencies conflicts</li>
          </ul>
          <button className="scroll-up-button" onClick={toggleContent}>
            &#8593;
          </button>
        </div>
      )}
    </main>
  );
};

export default Content;
