import React from 'react';

function Cards(prop){
    return(
        <> 
        <div style={{marginTop:'100px'}} class="row">
<div className="cards-list">
  
  <div className="card ">
    <div className="card_image">
     <img src={prop.imgsrc} alt="mypic" />
      </div>
    <div className="card_title title-white">
      <p>{prop.cname}</p>
    </div>
  </div>
  </div>
  </div>
  <hr style={{backgroundColor:'#ff5608'}}/>
  </>
    )
}
export default Cards;