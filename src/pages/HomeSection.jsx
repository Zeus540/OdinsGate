import '../scss/HomeSection.scss';
import TalkToUs from '../assets/images/button.png';
import ScrollDown from '../assets/images/scrolldown.png';

function HomeSection(props) {

 
  return (
    <div className="HomeSection">
      <img src={TalkToUs} alt="" className="talktous "/>
    <h1>
      {props.headingw1} <br/> <span className="grow">  {props.headingw2} </span><br/>  {props.headingw3} <br/> 
     <span> {props.headingw4}</span> 
    </h1>

   <div className="Tagline">
   <h4>
    {props.tagline1}
    </h4>
    <h3>
    {props.tagline2}
    </h3>
   </div>
   <img src={ScrollDown} alt="" className="scroll"/>
 
    </div>
     
  );
}

export default HomeSection;
