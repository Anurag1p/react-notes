// *** React Helmet ***

// this is npm package 
// this is use for change data under <head> .. </head> tag like <title></title> and <meta></meta> dynamically

// step

// 1.) install npm package of react helmet
// npm i react-helmet

// 2.) import package in file 
import Helmet from 'react-helmet';

// 3.) use <Helmet> </Helmet> and add <title></title> , <meta></meta> etc.
    <Helmet>
     <title>{` num is title`}</title>
   </Helmet>

// 4.) that's it