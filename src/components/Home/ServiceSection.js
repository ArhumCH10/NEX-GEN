import React from 'react';
import './ServiceSection.css';

export default function ServiceSection() {
  const services = [
    {
      title: 'UI/UX Design',
      image: 'assets/service_4.jpeg',
    },
    {
      title: 'Video Editing',
      image: 'assets/service_2.jpeg',
    },
    {
      title: 'Ecommerce Store',
      image: 'assets/service_1.jpeg',
    },
    {
      title: 'Web Development',
      image: 'assets/service_3.jpeg',
    },
  ];

  return (
    <div className="service-section">
        <div className="row">
        <div className="col-1">
      <h2>What Can We Do</h2>
      <h1>Services we can help you with</h1>
      <a href="/services" className="see-all-services">
        See All Services  &nbsp;  &rarr;
      </a>
      </div>

      <div className="col-2">
        <div className="service-grid">
        <div>
          </div>

          <div className="service-card">
            <img src='assets/service_1.jpeg' alt='UI/UX Design' />
            <h3>UI/UX Design</h3>
          </div>

          <div>
          </div>

          <div  className="service-card">
            <img src='assets/service_2.jpeg' alt='Video Editing' />
            <h3>Video Editing</h3>
          </div>
      </div>

      <div className="service-grid">
      <div className="service-card">
            <img src='assets/service_3.jpeg' alt='Ecommerce Store' />
            <h3>Ecommerce Store</h3>
          </div>

          <div>
          </div>

          <div  className="service-card">
            <img src='assets/service_4.jpeg' alt='Web Development' />
            <h3>Web Development</h3>
          </div>
          </div>

          <div>
      </div>
      </div>
      </div>
    </div>
  );
}