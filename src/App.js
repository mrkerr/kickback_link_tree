import logo from './logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import YouTube from 'react-youtube';

import './App.css';

function App() {
  return (
    <div className="kickback">
      <div className='title'>
        KICKBACK
      </div>
      <div className='scroll-button'>
        <Link
          className="scroll-button-link"
          to="youtube-video"
          spy={true}
          smooth={true}
          offset={275}
          duration={500}
        >
          {'\u25BC'}
        </Link>
      </div>
      <div className='new-video' id='youtube-video'>
        <div className='new-video-title'>
        A.CiD - HALLOWEEN
        </div>
        <YouTube className='youtube-player' videoId='8ui7q1botyw'/>
      </div>
      <div className='new-songs'>
        <div className='soundcloud'>
          <div className='song-title'>LUKA TAMAROA - NO MORE</div>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/830810602"></iframe>
        </div>
        <div className='soundcloud'>
          <div className='song-title'>YUNG PEY - REAL ONE</div>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/812433340"></iframe>
        </div>
      </div>
      <div className='clothing'>
        <a target='_blank' href='https://kickbackclothingcompany.com/'>MERCH</a>
      </div>
      <div className='socials'>
        <div className='insta'>
          <a target='_blank' href='https://www.instagram.com/kickback.productions/'>@kickback.productions</a>
        </div>
        <div className='insta'>
          <a target='_blank' href='https://www.instagram.com/skerr25/'>@skerr25</a>
        </div>
        <div className='insta'>
          <a target='_blank' href='https://www.instagram.com/yungpeyy/'>@yungpeyy</a>
        </div>
        <div className='insta'>
          <a target='_blank' href='https://www.instagram.com/lukatamaroa/'>@lukatamaroa</a>
        </div>
      </div>
    </div>
  );
}

export default App;