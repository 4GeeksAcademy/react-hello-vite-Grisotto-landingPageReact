import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';
import '../../styles/index.css'; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="card-container">
        <Card
          title="Card title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://picsum.photos/500/325"
        />
        <Card
          title="Card title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://picsum.photos/500/325"
        />
        <Card
          title="Card title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://picsum.photos/500/325"
        />
        <Card
          title="Card title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://picsum.photos/500/325"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
