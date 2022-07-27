import main from '../images/devmock.png'
import pic1 from '../images/Community.png'
import pic2 from '../images/virtualreality.png'
import pic3 from '../images/ironhackers.png'

function HomePage() {
  return (
    <div className="imagenpri">
      <div className='parrafo'>
        <img className="mainpic" src={main} alt="main"/>
      </div>
     <div class="container">
      <div class="row">
        <div class="row">
        <div class="col-4 text-center">
            <div class="service-boxed">
              <div class="service-content" >
                  <img class="card-img-top" src={pic1} alt="Card image cap" height="250px"/>
                  &nbsp;
                  <h4>Community</h4>
                  <p>We are Bootcamp Students, Developers, Designers, Entrepreneurs... We know how you feel during long working hours, and that's why we want to share with you the experiences of our members testing hardware.</p>
              </div>
            </div>
          </div>
          <div class="col-4 text-center">
            <div class="service-boxed">
              <div class="service-content" >
                  <img class="card-img-top" src={pic2} alt="Card image cap" height="250px"/>
                  &nbsp;
                  <h4>Kind of a geek</h4>
                  <p>You should be a person interested in experimenting with topics such as computing, hardware, new devices and others. Share with us the products you use in your set up and help others to make decisions.</p>
              </div>
            </div>
          </div>
          <div class="col-4 text-center">
            <div class="service-boxed">
              <div class="service-content" >
                  <img class="card-img-top" src={pic3} alt="Card image cap" height="250px"/>
                  &nbsp;
                  <h4>Objective</h4>
                  <p>We want to be able to achieve the goal of graduating as ironhackers and moving on to the next step: keep learning and find a job.</p>
                  <p>In this experience we have learned that we really want to work as web developers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

</div>
            
  )
}

export default HomePage;