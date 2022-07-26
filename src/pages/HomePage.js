import main from '../images/devmock.png'


function HomePage() {
  return (
    <div className="imagenpri">
      <div className='parrafo'>
        <img className="mainpic" src={main} alt="main"/>
      </div>
    <div class="container">
      <div class="row">
        <div class="row">
          <div class="col">
            <div class="service-boxed">
              <div class="service-content" >
                  <h4>Community</h4>
                  <p>We are developers, designers, entrepreneurs... lovers of our work.</p>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="service-boxed">
              <div class="service-content" >
                  <h4>Geeks</h4>
                  <p>We love to experiment with all kinds of hardware and devices. Not being up to date is not an option.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="service-boxed">
              <div class="service-content" >
                  <h4>Objective</h4>
                  <p>Create new contacts with people in our sector and find out what are the biggest trends of the moment.</p>
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