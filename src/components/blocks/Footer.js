import React from 'react';

const Footer = () => {
  return (
    <div className="_Box _Footer">

      <div className="_SmallBox _Social">
        <h1>Socialising</h1>
        <ul className="_SocialList">
          <li><a href=""><i className="fa fa-twitter fa-lg" aria-hidden="false"></i></a></li>
          <li><a href="https://unsplash.com/@marbocatcat"><i className="fa fa-camera fa-lg" aria-hidden="false"></i></a></li>
          <li><a href="https://medium.com/@marmarley92"><i className="fa fa-medium fa-lg" aria-hidden="false"></i></a></li>
          <li><a href="https://github.com/Marbocatcat"><i className="fa fa-github fa-lg" aria-hidden="false"></i></a></li>
        </ul>
        <h5>Hosted by Font Awesome</h5>
      </div>

      <div className="_SmallBox _Idiom">
        <h1>Weekly Quote</h1>
        <p>“You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”</p>
        <h4>-Steve Jobs</h4>
      </div>
    </div>
  )
}

export default Footer;
