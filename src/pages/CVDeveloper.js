import React, { useEffect, useState } from 'react';
import cvData from '../cvData.json';
import { Accordion, Card, Badge, ListGroup } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaLaptopCode, FaPercentage, FaUserCheck, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import '../css/CVDeveloper.css';

const CVDeveloper = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(cvData.developer);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <motion.div 
      className="cv-developer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2><FaLaptopCode /> {data.name}</h2>
      
      <div className="container mt-4">
    
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Profil Professionnel</Accordion.Header>
            <Accordion.Body>
              <Card>
                <Card.Body>
                  <Card.Text>
                    {data.profile}
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <h3 className="mt-4">Compétences Techniques</h3>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Skills</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {Array.isArray(data.skills) && data.skills.map((skill, index) => (
                  <ListGroup.Item key={index}>
                    <Badge bg="primary" pill>{skill}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Frameworks</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {Array.isArray(data.frameworks) && data.frameworks.map((framework, index) => (
                  <ListGroup.Item key={index}>
                    <Badge bg="primary" pill>{framework}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>CMS</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {Array.isArray(data.cms) && data.cms.map((cms, index) => (
                  <ListGroup.Item key={index}>
                    <Badge bg="primary" pill>{cms}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Cloud</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {Array.isArray(data.cloud) && data.cloud.map((cloud, index) => (
                  <ListGroup.Item key={index}>
                    <Badge bg="primary" pill>{cloud}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Databases</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {Array.isArray(data.databases) && data.databases.map((database, index) => (
                  <ListGroup.Item key={index}>
                    <Badge bg="primary" pill>{database}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Tools</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {Array.isArray(data.tools) && data.tools.map((tool, index) => (
                  <ListGroup.Item key={index}>
                    <Badge bg="primary" pill>{tool}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Methodologies</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {Array.isArray(data.methodologies) && data.methodologies.map((methodology, index) => (
                  <ListGroup.Item key={index}>
                    <Badge bg="primary" pill>{methodology}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="d-flex justify-content-center mb-4 flex-wrap">
          <div className="text-center mx-2">
            <h4><FaPercentage /> Augmentation de l'engagement utilisateur</h4>
            <CircularProgressbar value={20} text={`${20}%`} styles={{ path: { stroke: '#4caf50' } }} />
          </div>
          <div className="text-center mx-2">
            <h4><FaClock /> Réduction du Temps de Chargement</h4>
            <CircularProgressbar value={25} text={`${25}%`} styles={{ path: { stroke: '#2196F3' } }} />
          </div>
          <div className="text-center mx-2">
            <h4><FaUserCheck /> Réduction des erreurs utilisateurs</h4>
            <CircularProgressbar value={15} text={`${15}%`} styles={{ path: { stroke: '#ff9800' } }} />
          </div>
        </div>

        <h3 className="mt-4">Expérience Professionnelle</h3>
        {data.experience.map((exp, index) => (
          <Card className="mb-3" key={index}>
            <Card.Header>{exp.company} - {exp.role}</Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{exp.years}</Card.Subtitle>
              <Card.Text>
                {exp.details}
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default CVDeveloper;