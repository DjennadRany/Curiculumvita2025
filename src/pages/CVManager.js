import React, { useEffect, useState } from 'react';
import cvData from '../cvData.json';
import { Accordion, Card, Badge, ListGroup } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaUserTie, FaChartLine, FaClock, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import '../css/CVManager.css';

const CVManager = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(cvData.manager);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <motion.div 
      className="cv-manager"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2><FaUserTie /> {data.name}</h2>
      
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
                {data.skills.map((skill, index) => (
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
                {data.frameworks.map((framework, index) => (
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
                {data.cms.map((cms, index) => (
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
                {data.cloud.map((cloud, index) => (
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
                {data.databases.map((database, index) => (
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
                {data.tools.map((tool, index) => (
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
                {data.methodologies.map((methodology, index) => (
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
            <h4><FaChartLine /> Augmentation de la productivité</h4>
            <CircularProgressbar value={20} text={`${20}%`} styles={{ path: { stroke: '#4caf50' } }} />
          </div>
          <div className="text-center mx-2">
            <h4><FaClock /> Réduction des délais de livraison</h4>
            <CircularProgressbar value={30} text={`${30}%`} styles={{ path: { stroke: '#2196F3' } }} />
          </div>
          <div className="text-center mx-2">
            <h4><FaCode /> Amélioration de la qualité du code</h4>
            <CircularProgressbar value={25} text={`${25}%`} styles={{ path: { stroke: '#ff9800' } }} />
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
                <span className="icon-text">Réduction des délais de livraison de 30%</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default CVManager;