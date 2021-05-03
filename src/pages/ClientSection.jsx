import '../scss/ClientSection.scss';
import Aliens4 from '../assets/images/aliens4.png';
import kkwe from '../assets/images/kkwe.png';
import port from '../assets/images/port.png';
function ClientSection() {
  return (
    <div className="ClientSection">
  <h1 className="Heading">OUR<br/> <span>CLIENTS </span> </h1>
  <img src={Aliens4} alt="" className="Aliens4"/>
 <div className="clientHolder">

  <div className="c1">
  <img src={kkwe} alt="" className="kkwe"/>
  </div>
  <div className="c2">
  <img src={port} alt="" className="kkwe"/>
  </div>
 </div>
    </div>
  );
}

export default ClientSection;
