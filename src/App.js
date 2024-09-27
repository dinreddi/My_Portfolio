import React, { useState } from 'react';
import './App.css';

function App() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const handleMouseEnter = (experience) => {
    setExpandedExperience(experience);
  };

  const handleMouseLeave = () => {
    setExpandedExperience(null);
  };
  
  return (
    
    <div className="App">
      <div className="top-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div id="home" className="profile-section">
        <div className="profile-picture">
          <img src="image.png" alt="Profile" />
        </div>
        <div className="profile-introduction">
          <h1>Dinesh Reddy Chinnamallaiahgari</h1>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dinesh-reddy-chinnamallaiahgari-82a246168/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="logo" />
            </a>
            <a href="https://github.com/dinreddi" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="logo" />
            </a>
            <a href="tel:+9802987568" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 1.5L8 8l6-2.5V4L8 6.5 2 4v1.5zm0 2.5L8 9l6-2.5v4L8 10.5 2 9v-1z"/>
              </svg>
            </a>
          </div>
          <span>A versatile Software Engineer with over 3 years of experience,skilled in building scalable enterprise applications and collaborating</span><br></br>
          <span> with cross-functional teams to deliver high-impact solutions With a strong foundation in Java, Spring Boot, React, and modern web technologies<br></br>I excel in full-stack development, from crafting intuitive user interfaces to building secure backend systems</span>
        </div>
      </div>
      <h2 className="section-title">SKILLS</h2>

      <div className="skills-section">
        <div 
          className="skill-box"
          onMouseEnter={() => handleMouseEnter('Programming Languages')}
          onMouseLeave={handleMouseLeave}
        >
          <h3>PROGRAMMING LANGUAGES</h3>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>FRAMEWORKS</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Angular 14</li>
            <li>Spring Boot</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>WEB TECHNOLOGIES</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>BUILD-IN TOOLS</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
      <div className="experience-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <div
          className="experience"
          onMouseEnter={() => handleMouseEnter('datics')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="experience-header">
            <img src="Datics.png" alt="Datics Logo" className="company-logo" />
            <div className="company-info">
              <h2>Software Engineer</h2>
              <p className="date-range">Sep 2024 – Present</p>
              <p className="company-name">Datics Inc, Illinois, USA</p>
            </div>
          </div>
          {expandedExperience === 'datics' && (
            <ul className='description'>
              <li>Enhanced page load time by 20% by cutting number of API calls by using Redux state management. </li>
              <li>Shrinked user error rate by 25% by using optimized forms and effective validation using FORMIK, YUP libraries. </li>
              <li>Enhanced 20% efficiency in service communication resulting in 15% reduction in latency by designing and developing GoLang microservices</li>
              <li>Trimmed 30% data retrieval time by streamlining UI-API collaboration and efficient JSON format handling, boosting system efficiency</li>
              <h4>TechStack: React.js, JavaScript, Redux, GoLang, JSON, SQL, RESTfulAPI’s, Node.Js, Postman.</h4>
            </ul>
          )}
        </div>
        <div
          className="experience"
          onMouseEnter={() => handleMouseEnter('wissen')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="experience-header">
            <img src="WissenIT.png" alt="Wissen IT Logo" className="company-logo" />
            <div className="company-info">
              <h2>Software Engineer</h2>
              <p className="date-range">May 2023 – Aug 2024</p>
              <p className="company-name">Wissen IT, Rock Hill, SC, USA</p>
            </div>
          </div>
          {expandedExperience === 'wissen' && (
            <ul className='description'>
              <li>Developed RESTful APIs with Java and Spring Boot for real-time transaction processing, reducing server response time by 50% and enhancing mobile banking user experience.</li>
              <li>Engineered medication management feature with TypeScript, JavaScript, React, and RESTful APIs, improving page load speed by 40% and patient engagement by 25%.</li>
              <li>Conducted integration and behavior-driven testing using Selenium and Cucumber, achieving a test coverage of over 90% for enhanced project reliability and success.</li>
              <li>Migrated web interface from Backbone.js to AngularJS and utilized HTML5, CSS, jQuery, and JavaScript for client-side development.</li>
              <li>Designed user interface screens and functionality according to user requirements, and developed RESTful Web services in Mule ESB following (SOA) principles </li>
              <li>Assisted the QA team in automating system library code, enhancing the efficiency and accuracy of test automation processes using Python scripting within the Robot Framework. </li>
              <li>Configured Jenkins to automate deployment processes on Pivotal Cloud Foundry, streamlining the continuous integration and delivery pipeline. Managed AWS infrastructure to ensure high security of optimizing performance </li>
              <li>Worked with MySQL Workbench to perform tasks such as database design, development and optimization to support application requirements. </li>
              <h4>TechStack: React.js, Angular, Node.js, JavaScript, TypeScript, Jest, Micro Services, Redux, AWS (S3, ElasticSearch, Lambda, EC2), Agile.</h4>
            </ul>
          )}
        </div>
        <div
          className="experience"
          onMouseEnter={() => handleMouseEnter('highRadius')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="experience-header">
            <img src="HighRadius.png" alt="High Radius Logo" className="company-logo" />
            <div className="company-info">
              <h2>Full Stack Developer</h2>
              <p className="date-range">May 2023 – Present</p>
              <p className="company-name">High Radius, India</p>
            </div>
          </div>
          {expandedExperience === 'highRadius' && (
            <ul className='description'>
              <li>Developedo a responsive B2B invoice application using Java full stack, HTML, CSS, and Type Script, enhancing model output efficiency, increasing portal engagement by 40% reducing bounce rate by 25%.</li>
              <li>Designed and implemented Java-based backend for EHR lab results, boosting data retrieval speed by 15% and reducing query execution time by 20%.</li>
              <li>Achieved an impressive 90% prediction accuracy, showcasing the effectiveness of the machine learning model as a target value. </li>
              <li>This high prediction target value underscores the reliability and precision of the classification output, demonstrating the robustness of the implemented Machine Learning techniques help to analyse and classify the data.</li>
              <li>integrated ML models, including Linear Regression and SVM, for data classification and prediction, front-end interface allowing users to access and modify target values by 90% accuracy.</li>
              <h4>TechStack: Typescript, JavaScript, HTML5, CSS, MYSQL, Spring boot, Python, Numpy, Seaborn, Pandas, Supervised Learning, Linear Regression, Support Vector Machine.</h4>
            </ul>
          )}
        </div>
      </div>
        <div id="projects" className="projects-container">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-box">
          <div className="project">
            <h3>E-Commers (DASAVI) Web Application [HTML, CSS, JavaScript, React.js, Micro Services, REST API’s, Postman]</h3>
            <li>Created robust E-Commers Java web application used HTML, CSS, JS, ReactJS to build user interaction experience & Spring Framework</li>
            <li>Gained 80% performance growth by implementing Micro Service Oriented Architecture using Spring Boot Framework</li>
            <li>Used REST API's for dynamic content, real-time data updates continuous integration to enhance user interface experience help of Rest </li>
          </div>

          <div className="project">
            <h3>Banking Application [Java, Spring Boot, Spring Data JPA, MySQL, IntelliJ IDEA, Postman, RESTful APIs, Spring Security]</h3>
            <li>Developed a full-stack single page application using Spring Boot,Spring Security, AJAX and React.JS</li>
            <li>Leveraged Postman to rigorously test and validate RESTful APIs, ensuring seamless communication between the front-end and back-end components of the banking application</li>
          </div>

          <div className="project">
          <h3>NewsApp Web Application [TypeScript, Bootstrap, React.js, React Router, Visual Studio, Fetch API ]</h3>
          <li>Implemented a feature to categorize news articles into topics such as technology, business, sports, etc., enhancing user experience by providing organized content using React.js.</li>
          <li>Designed a detailed view for news articles, shows key information as headlines, publication date, source, and possibly summaries, enhancing user engagement and comprehension.</li>
          </div>
        </div>
      </div>
      </div>
      
  );
}

export default App;
