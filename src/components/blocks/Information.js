import React from 'react';

const Information = () => {
  return (
    <div className="_Box _Information">
      <div className="_SmallBox _About">

        <h1>About</h1>
        <ul className="_AboutList">
          <li><p>Mar Bocatcat is a freelance designer and developer and for the past two years he's worked for some of Chicago's best digital agencies; producing award–winning work wherever hes been.</p></li>
          <li><p>Working at the very highest level as both a senior developer and senior designer, Colin provides his experience, knowledge and expertise to clients offering them something more than your average freelancer.</p></li>
        </ul>

      </div>
      <div className="_SmallBox _Contact">

        <h1>Contact</h1>
        <ul className="_ContactList">
          <li>Email: <br/> mar.bocatcat@gmail.com </li>
          <li>Twitter: <br/> @marbocatcat </li>
          <li>Phone: <br/> +1(773)-(957)-(9983)</li>
        </ul>


      </div>
    </div>
  )
}

export default Information;
