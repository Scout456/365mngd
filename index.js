/*Intersection Observer*/
 const theOptions = { 

  root:null, 

  threshold:0, 

  rootMargin:"-100px  -20px -100px -20px"


   }; 

  const observer = new IntersectionObserver(entries => { 

  entries.forEach(entry => { 

    if(entry.isIntersecting){ 

      entry.target.classList.add('in-view'); 

      observer.unobserve(entry.target); 

    } 

  }); 

}, theOptions); 

 window.addEventListener('DOMContentLoaded',(event) =>{ 

  const sections = Array.from(document.getElementsByClassName('section')); 

  for (let section of sections){ 

    observer.observe(section); 

  } 

}); 


/*Background color change-------------------------------------------*/

          /*  var body = document.getElementsByTagName('body')[0];
            body.style.backgroundColor = 'whitesmoke';
         
       
            

          function pageScroll() { 
            var scroll = window.pageYOffset;
            if (scroll < 300) {
                // blue
                body.style.backgroundColor = '#2D68C4';
            } else if (scroll >= 300 && scroll < 1200) {
                // blue
                body.style.backgroundColor = '#0070AC';
            } else if (scroll >= 1200 && scroll < 2000) {
                // light blue
                body.style.backgroundColor = '#1ca9c9';
            } else if (scroll >= 2000 && scroll < 3500) {
                // Air Superiority Blue
                body.style.backgroundColor = '#72A0C1';
                
            } else if (scroll >= 3500 && scroll < 5000) {
                // magic blue
                body.style.backgroundColor = '#0077c0';
            } else {
                // orange yellow
                body.style.backgroundColor = '#C0821D';
            }
        }

*/



/*--------Submit form response on button----------------------------------------*/

function get_add(){
 var email_add = document.getElementById("btn-email").value;
 
 if (email_add.indexOf("@") == -1) {
    alert("No '@' symbol in your address");
 }
 if (email_add.indexOf(".") == -1){
    alert("No '.' symbol in your address");
 }
 if(email_add.indexOf(".com") == -1){
    alert("Missing text after '.' ");
 }
 if ( (email_add.indexOf("@") != -1) && (email_add.indexOf(".") != -1) )
 {
    alert("Thank you!");
 }
}

document.getElementById("sub").onclick = function(){
  get_add();
}


 