// ****** useParams Hook *******

// jab b hume url ke through value ko get krna ho to humare pas do method hai ek old method without hook and ek by useParams hook

// jaise neche diye gaye url me ager app slash lga kr kuch b likhte hoto wo as a parameter bola jata hai and us parameter ko ap uske base page pe get kr skte ho 

//  URL : http://localhost:3000/user/chintu/nayak

//  http://localhost:3000/user  : - this is path of "user" page or component
//  /chintu   : - this is first parameter and value for page "user" and its get in "user" page
//  /nayak    : - this is second parameter and value for page "user" and its ger in "user" page

// ** sabse phle apko isko route mein define krna padega like :
<Route  path="/user/:fname/:lname" component={User}/>
// /user = is main page
// /:fname = this for first variable and isi name se "user" page pe value ko get kr skte ho
// /:lname = this for second variable and isi name se "user" page pe value ko get kr skte ho

// *************** 1.) old method without hook **********************
// iss method mein apko function component mein ek argument pass krna hai "{}" curly bracess mein "{match}"  name and make sure name should be same
//   syntax : 
               
                function User({match}) {
                
                    return (
                        <>
                            <h1>hey , {match.params.fname} and {match.params.lname}</h1>
                        </>
                    )
                }   
                
// {match.params.fname} = fname jo apne route path me define kiya tha and first variable
// {match.params.lname} = fname jo apne route path me define kiya tha and second variable


// *************** 2.) useParams hook **********************
// a.) issme b same type se define krna hai
            // ** sabse phle apko isko route mein define krna padega like :
            <Route  path="/user/:fname/:lname" component={User}/>
            // /user = is main page
            // /:fname = this for first variable and isi name se "user" page pe value ko get kr skte ho
            // /:lname = this for second variable and isi name se "user" page pe value ko get kr skte ho

// b.) base file like "user" file mein apko "useParams" ko import krna hai from "react-router-dom"
import { useParams } from "react-router-dom";

// c.) ye hook hai to isko function component mein sbse top ek variable mein define krna hai like :
            let { fname , lname} = useParams();
            // iseme ek object variable bnana hai jisme ap object bana ke value store kr skte ho jaise isme "fname" mein ek value aygi and "lname" mein dusri value aygi

// d.) finally curly bracess mein ap variable ke through value ko get kr skte ho
                function User() {
                    let { fname , lname} = useParams();
                    return (
                        <>
                            <h1>hey , {fname} and {lname}</h1>
                        </>
                    )
                }

/*
        NOTE : - 
                    1.) isme ap render method ka use nhi kr skte sirf component method ka use kr skte hai
                        <Route  path="/user/:fname/:lname" component={User}/>
                    2.) isme ap component method mein callback function mein component ko  call nhi kr skte bina callback ke hi component ko call krna pdega
                        <Route  path="/user/:fname/:lname" component={User}/>
*/