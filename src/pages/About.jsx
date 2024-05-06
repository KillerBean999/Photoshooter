import React from 'react';
import FacebookIcon from '../images/facebook.png';
import InstagramIcon from '../images/instagram.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const nav = useNavigate()
  return (
    <>
      <div className="about-intro">
          <h1>About Myself</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, pariatur ut! Doloremque, perferendis recusandae debitis natus repellendus iste iure vel consequuntur? Quisquam cupiditate omnis consequuntur illum atque dolorum cumque alias?</p>
          <button onClick={()=> nav('/')} className='btn'>Would You Like My Service?</button>
        </div>
      <h1 className='title'>Reviews</h1>
      <div className='about'>
        <div className='reviews'>
          <h1>``</h1>
          <img src="" alt="" />
          <p className='review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit qui dolor quaerat, sit cumque doloremque perspiciatis? Quasi repellat beatae in!</p>
          <h4>-Some Monkey</h4>
        </div>
        <div className='reviews'>
          <h1>``</h1>
          <img src="" alt="" />
          <p className='review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit qui dolor quaerat, sit cumque doloremque perspiciatis? Quasi repellat beatae in!</p>
          <h4>-Raman Guy</h4>
        </div>
        <div className='reviews'>
          <h1>``</h1>
          <img src="" alt="" />
          <p className='review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit qui dolor quaerat, sit cumque doloremque perspiciatis? Quasi repellat beatae in!</p>
          <h4>-Raddagan Bol</h4>
        </div>
        <div className='reviews'>
          <h1>``</h1>
          <img src="" alt="" />
          <p className='review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit qui dolor quaerat, sit cumque doloremque perspiciatis? Quasi repellat beatae in!</p>
          <h4>-Marashi Modi</h4>
        </div>
        <div className='reviews'>
          <h1>``</h1>
          <img src="" alt="" />
          <p className='review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit qui dolor quaerat, sit cumque doloremque perspiciatis? Quasi repellat beatae in!</p>
          <h4>-Arma Luka</h4>
        </div>
      </div>
      <div className="links">
        <Link to='https://www.facebook.com/'>
          <img src={FacebookIcon} className='facebook' alt="Facebook" />
        </Link>
        <Link to='https://www.instagram.com/'>
          <img src={InstagramIcon} className='instagram' alt="Instagram" />
        </Link>
      </div>
    </>
  );
}
