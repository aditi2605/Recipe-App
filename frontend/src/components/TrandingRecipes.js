import React from 'react'
import biscuits from '../images/biscuits.jpg';
import cake from '../images/cake.jpg';
import eggs from '../images/eggs.jpg';
import pitahammus from '../images/pitahammus.jpg';
import pizza from '../images/pizza.jpg';
// import subway from '../images/subway.jpg';
import sushi from '../images/sushi.jpg';


function TrandingRecipes() {
  return (
   <>
   <h1 className='tranding'>Our Tranding Recipes </h1>
    {/* <!--container 1--> */}
<div className="containerOne">
<div id="container1">
    <img id="titleImg" className="img1" src={biscuits} alt=" Snow Capped Mountains,Norway"/>
    <div className='trandingSection'>
    <h1 className="containerheading">Homemade Outs Biscuits</h1>
    <p className="para">
    look a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
  <div className="centerBtn">
  <button className="seemorebtn"><b>See More</b></button>
    </div>
    </div>
</div>
{/* <!--container 2--> */}
<div id="container2">
  <img id="titleImg" className="img1" src={cake} alt=" Snow Capped Mountains,Norway" />
  <div className='trandingSection'>
    <h1 className="containerheading">Delicious Cake</h1>
  
  <p className="para">look a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..</p>
  <div className="centerBtn">
  <button className="seemorebtn"><b>See More</b></button>
  </div>
  </div>
</div>

{/* <!--container3--> */}
<div id="container3">
 <img id="titleImg" className="img1" src={pitahammus} alt=" Snow Capped Mountains,Norway" />
 <div className='trandingSection'>
  <h1 className="containerheading">Pita Breade & Hammus</h1>
  
  
  <p className="para">look a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
  <div className="centerBtn">
  <button className="seemorebtn"><b>See More</b></button>
  </div>
  </div>
  </div>
{/* <!--container4--> */}
{/* <div id="container4">
  <img id="titleImg" className="img1" src={subway} alt=" Snow Capped Mountains,Norway" />
  <hr />

  <h1 className="containerheading">Subway</h1>
  
  <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting indust ry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
  <div className="centerBtn">
  <button className="seemorebtn"><b>See More</b></button>
  </div>
</div> */}
</div>
{/* <!-- Second Container --> */}
<div className="containerTwo">
{/* <!--container 5--> */}
<div id="container5">
  <img id="titleImg" className="img1" src={sushi} alt=" Snow Capped Mountains,Norway" />
  <div className='trandingSection'>
  <h1 className="containerheading">Wanna some Sushiii</h1>
  
  
  <p className="para">look a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
  <div className="centerBtn">
  <button className="seemorebtn"><b>See More</b></button>
    </div>
    </div>
</div>

{/* <!--container 6--> */}
<div id="container6">
  <img id="titleImg" className="img6" src={eggs} alt=" Snow Capped Mountains,Norway" />
  <div className='trandingSection'>
  <h1 className="containerheading">Sunny SideUp</h1>
  <p className="para">look a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
  <div className="centerBtn">
  <button className="seemorebtn"><b>See More</b></button>
  </div>
  </div>
</div>

{/* <!--container 7--> */}
<div id="container7">
  <img id="titleImg" className="img7" src={pizza} alt=" Snow Capped Mountains,Norway" />
  <div className='trandingSection'>
  <h1 className="containerheading">Mistry Pizza</h1>
  
  
  <p className="para">look a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
  <div className="centerBtn">
  <button className="seemorebtn"><b>See More</b></button>
    </div>
    </div>
</div>
</div>
    </>
  )
}

export default TrandingRecipes
