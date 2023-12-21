import React from 'react';
import ReactDOM from 'react-dom';

// props means :- jaise hum html mein kisi b tag ke attribute hote hai waise hi hum jsx mein custom attribute bante hai
// implimantation
//  jaise hum jsx mein component bnate hai then use call krte hai . waise hi hum call krte time uske sath attribute b define krte hai
// component bnate time function mein "props" name ya koi name ka argument define krna hai jo ki object literal ban jata hai
// component main return jsx me jo b argument aaygi use hum "{props.properti-name}" likh kr acces kr skte hai

// calling
// kisi b component ko attribute as a property b bhej skte hai
// <Card title="..." link=".." imglink="..."/>

function Card(props){
  return(<>
  <div className="col-4">

    <div className="card" style={{width: '18rem'}}>
          <img src={props.imglink} class="card-img-top" alt="news"/>
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href={props.link} className="btn btn-primary">Go somewhere</a>
          </div>
  </div>
  </div>
  </>);
}

ReactDOM.render(
  <>
  <Card title="this is a title" link="http://www.bbc.co.uk/news/world-europe-58921310" imglink="https://ichef.bbci.co.uk/news/1024/branded_news/11115/production/_121090996_gettyimages-1234919582-1.jpg"/>
  <Card title="this is a title2" link="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" imglink="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
  <Card title="this is a title3" link="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/6057684e5923ad2ae43c8150_bavassano_homepage_before.jpg" imglink="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/6057684e5923ad2ae43c8150_bavassano_homepage_before.jpg"/>

  </>
  ,document.getElementById('root')
);