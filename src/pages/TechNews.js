import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

const TechNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=technology&count=10&autoCorrect=true', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'x-rapidapi-key': '357fc750-d9d6-11ef-9688-4f623c358729' // Votre clé API
          }
        });
        
        if (response.status === 404) {
          throw new Error('L\'URL demandée est introuvable.');
        }
        
        if (response.status === 429) {
          throw new Error('Trop de requêtes envoyées. Veuillez réessayer plus tard.');
        }

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des nouvelles');
        }

        const data = await response.json();
        setArticles(data.value); // Les articles sont dans la propriété 'value'
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center"><strong>Nouvelles Technologies</strong></h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={article.image.url} alt={article.title} /> {/* Assurez-vous que l'URL de l'image est correcte */}
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    {article.description}
                  </Card.Text>
                  <Card.Link href={article.url} target="_blank">Lire plus</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>Aucun article disponible.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TechNews; 