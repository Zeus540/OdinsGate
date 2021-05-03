import '../scss/AboutUsSection.scss';
import Blob from '../assets/images/blob.png';
import Aliens from '../assets/images/aliensAbout.png';

function AboutUsSection() {
  return (
    <div className="AboutUsSection">
          <div className="imgHolder">
            <img src={Aliens} alt="" className="Aliens"/>
            <img src={Blob} alt="" className="Blob"/>
          </div>

 <div className="textHolder">

   <h1 className="Heading">A <span> DIGITAL <br/> ERA</span></h1>

   <p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

   <p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

   <p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

 </div>



    </div>
  );
}

export default AboutUsSection;
