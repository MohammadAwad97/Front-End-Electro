import React from 'react';
import './OurTeam.css';

function OurTeam() {
  return (
    <section className="ourTeam">
        <hr/>
        <div className="title">
        <div className="redBox"></div>
        <p>Our Team</p>
      </div>
      <h1 className="text-4xl browse-by">Meet Our Team</h1>
      <div className="ourTeam_cont">
        <div className="member_Card">
          <div className='memImg'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpl2g7QUZht_vjdmqQ4yBQWzcTiVne04ikqLeG3At65UNYikUBJgmUM1_FbS6yLQzVzg&usqp=CAU"
              alt="member1"
              />
              </div>
            <p className='name'>Faten Hussien</p>
            <p className='stack'>Full stack Developer</p>
        </div>
        <div className="member_Card">
          <div className='memImg'>
            <img
              src="https://blockworks-co.imgix.net/wp-content/uploads/2023/02/Alex-headshot.jpeg"
              alt="member2"
              />
              </div>
            <p className='name'>Ibrahim Abu Farha</p>
            <p className='stack'>Full stack Developer</p>
        </div>
        <div className="member_Card">
          <div className='memImg'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHln2vtU9fz-LPVUc2UrMhATIEXMoLP5Ghgt0DrhfZLRcwf_vEYmYtAzdFD81Z8SlwRU&usqp=CAU"
              alt="member1"
              />
              </div>
            <p className='name'>Mohammad Awad</p>
            <p className='stack'>Full stack Developer</p>
        </div>
        <div className="member_Card">
          <div className='memImg'>
            <img
              src="https://uploads-ssl.webflow.com/61ede842398e1b8a50ce8fd0/63d0d2b6e0e8924703331d23_d77c1458-cf20-42ec-991f-1aa58c1bccc0.png"
              alt="member1"
              />
              </div>
            <p className='name'>Abdelrahman Haroun</p>
            <p className='stack'>Full stack Developer</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
