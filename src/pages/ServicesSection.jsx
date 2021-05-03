import '../scss/ServicesSection.scss';
import Blob2 from '../assets/images/blob2.png';
import Aliens2 from '../assets/images/aliens2.png';

function ServicesSection() {
  return (
    <div className="ServicesSection">
          <div className="imgHolder">
            <img src={Aliens2} alt="" className="Aliens2"/>
            <img src={Blob2} alt="" className="Blob2"/>
          </div>

 <div className="textHolder">

   <h1 className="Heading">WHAT<br/> <span>WE OFFER</span> </h1>

   <p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

   <p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

   <p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

 </div>



    </div>
  );
}

export default ServicesSection;
