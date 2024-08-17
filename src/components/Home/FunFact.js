import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './FunFact.css';

export default function FunFact() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref}>
      <div className='container'>
        <div className='background'>
          <div className='heading'>
            <h1>Our Fun Fact</h1>
            <p>An Agency That Builds Identity And Design For You,</p>
            <p>The Brand Of Your Dreams</p>
          </div>
          
          <div className='fun-fact'>
            <div className='item'>
              <div className='count'>
                <h2>{inView ? <CountUp start={0} end={23} duration={2} /> : 0}</h2>
                <div className='positions'>
                <span className='plus'>+</span>
                <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='count'>
                <h2>{inView ? <CountUp start={0} end={34} duration={2} /> : 0}</h2>
                <div className='positions'>
                <span className='plus'>+</span>
                <p>Projects Completed</p>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='count'>
                <h2>{inView ? <CountUp start={0} end={5} duration={2} /> : 0}</h2>
                <div className='positions'>
                <span className='plus'>+</span>
                <p>Team Members</p>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='count'>
                <h2>{inView ? <CountUp start={0} end={16760} duration={2} /> : 0}$+</h2>
                <div className='earnedclass'>
                <p>Earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}