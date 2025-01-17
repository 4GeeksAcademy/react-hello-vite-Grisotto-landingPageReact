import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import '../../styles/index.css'; // Import the CSS file with the correct path

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="card-container">
        <Card
          title="Card title 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://via.placeholder.com/500x325"
        />
        <Card
          title="Card title 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://via.placeholder.com/500x325"
        />
        <Card
          title="Card title 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://via.placeholder.com/500x325"
        />
      </div>
    </div>
  );
};

export default Home;
