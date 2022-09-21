import Card from 'react-bootstrap/Card';

function CardImg() {
  return (
    <Card className="mb-4" text='dark' bg='dark' border="secondary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="logo192.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title> 
      </Card.Body>
    </Card>
  );
}

export default CardImg;