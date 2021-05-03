import '../scss/ContactSection.scss';
import Blob3 from '../assets/images/blob3.png';
import TalkToUs from '../assets/images/button.png';
import Aliens from '../assets/images/aliensAbout.png';

function ContactSection() {
  return (
    <div className="ContactSection">

         <h1 className="Heading">LET’S TALK</h1>

          <div className="imgHolder">
            <img src={Blob3} alt="" className="Blob3"/>
          </div>
          <div className="mainHolder">
            <div className="textHolder">
              <p className="Para">Let’s get the conversation started
            </p>
            <br/>
            <p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </p>
            <br/>
            <p className="Para">EMAIL
            </p>
            <br/>
            <p className="Para">hello@odinsgate.co.za
            </p>
            <br/>
            <p className="Para">CONTACT
            </p>
            <p className="Para">0676406567
            </p>
            </div>

            <div className="formHolder">
                <form action="">
                  <label htmlFor="Name">Name</label>
                  <input type="text" name="Name" placeholder="Name"/>
                  <label htmlFor="Email">Email</label>
                  <input type="text" name="Email" placeholder="Email"/>
                  <label htmlFor="Message">Message</label>
                  <textarea name="" id="" cols="30" rows="10" name="Message" placeholder="Message"></textarea>
                  <label htmlFor="Verify">Verify</label>
                  <input type="text" name="Verify" placeholder="Verify"/>
                 <button type="submit"> <img src={TalkToUs} alt="" className="talktous "/></button>
                </form>
            </div>

          </div>

    </div>
  );
}

export default ContactSection;
