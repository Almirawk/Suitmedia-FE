import Card from 'react-bootstrap/Card';
import './Card.css';
import lightImage from '../asset/lightbulb-o.png'; 
import bankImage from '../asset/bank.png';
import scaleImage from '../asset/balance-scale.png';




export const Content = () => {
  return (
    <div>
      <h2 className="values-title text-center mt-5">OUR VALUES</h2>
    <div className="container">
    <div className="card-container mt-3">
      <Card
        bg="danger"
        text="white"
        className="vertical-card"
      >
        <Card.Header>
          <img src={lightImage} alt="Danger" width="15" height="20" />
        </Card.Header>
        <Card.Body className="card-body">
          <Card.Title> INNOVATIVE </Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="success"
        text="white"
        className="vertical-card"
      >
        <Card.Header>
          <img src={bankImage} alt="Success" width="20" height="20" /> {/* Gunakan gambar */}
        </Card.Header>
        <Card.Body className="card-body">
          <Card.Title> LOYALTY </Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="primary"
        text="white"
        className="vertical-card"
      >
        <Card.Header>
          <img src={scaleImage} alt="Primary" width="20" height="20" /> {/* Gunakan gambar */}
        </Card.Header>
        <Card.Body className="card-body">
          <Card.Title>RESPECT</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
    </div>
  );
}

