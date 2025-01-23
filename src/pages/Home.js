import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import profileImage from '../assets/128905298.jpg'; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col className="text-center2">
          <img src={profileImage} alt="Profil" className="profile-image-no-radius" />
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Bienvenue sur mon profil</Card.Title>
              <Card.Text>
                Je suis Djennad Rany, un professionnel passionné par la technologie et le développement. Avec des qualifications en tant que Chef de projet technique, Webmaster, Développeur Front-end, Développeur A.E.M, Développeur Full Stack JS et Growth Hacker, je suis polyvalent et prêt à relever de nouveaux défis. J'ai une solide expérience dans la coordination d'équipes de développement, la gestion de projets, la maintenance de sites web, la création d'interfaces utilisateur interactives, l'utilisation d'Adobe Experience Manager, le développement full stack JS et la croissance des activités en ligne. Je suis constamment à jour avec les dernières tendances et technologies. Contactez-moi pour collaborer sur des projets passionnants et bénéficier de mes compétences pour atteindre vos objectifs.
              </Card.Text>
              <Button variant="primary" href="contact">Contactez-moi</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to my profile</Card.Title>
              <Card.Text>
                My name is Djennad Rany, and I am a technology and development enthusiast. With diverse qualifications, I am a Technical Project Manager, Webmaster, Front-end Developer, A.E.M Developer, Full Stack JS Developer, and Growth Hacker.
                <br /><br />
                As a Technical Project Manager, I have gained extensive experience in coordinating development teams and managing projects. I possess the ability to understand clients' specific requirements and oversee the end-to-end development process to ensure successful goal attainment.
                <br /><br />
                As a Webmaster, I have the necessary skills to effectively manage and maintain websites. I am proficient with content management systems (CMS) and can handle regular content updates, performance optimization, and troubleshooting technical issues.
                <br /><br />
                As a Front-end Developer, I have a strong understanding of programming languages such as HTML, CSS, and JavaScript. I am capable of creating interactive, modern, and user-friendly interfaces using best practices and the latest technologies.
                <br /><br />
                As an A.E.M Developer, I am familiar with Adobe Experience Manager, a popular content management platform. I can work on content personalization, template and component creation, and integration of AEM solutions within existing ecosystems.
                <br /><br />
                As a Full Stack JS Developer, I am comfortable working on both the client-side (front-end) and server-side (back-end). I have experience in building complete web applications using frameworks like React.js, Angular.js, and Node.js. I can also handle database management and develop APIs to ensure smooth interaction between the front-end and back-end.
                <br /><br />
                As a Growth Hacker, I am passionate about growth and performance optimization. I constantly seek new strategies to enhance user experience, increase visibility, and develop online activities. I utilize digital marketing techniques and data analysis to drive growth and achieve set goals.
                <br /><br />
                With my diverse background and versatile skill set, I am prepared to tackle new challenges and add value to any project I work on. I am an enthusiastic learner and stay up-to-date with the latest industry trends and technologies.
                <br /><br />
                Feel free to contact me if you have any questions or if you would like to collaborate on exciting projects. I am eager to contribute my skills and help you succeed.
              </Card.Text>
              <Button variant="primary" href="contact">Contact Me</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;