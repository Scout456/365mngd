/*Intersection Observer*/
const theOptions = { 

  root:null, 

  threshold:0.4, 

  rootMargin:"0px 0px 0px 0px"


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

 /* const sections = Array.from(document.getElementsByClassName('section'));
   for (let section of sections) {
     const children = section.getElementsByClassName('fade-delay');
     for (let count = 0; count < children.length; count++) {
        children[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
    }
  observer.observe(section);
}
});*/

  const sections = Array.from(document.getElementsByClassName('section')); 

  for (let section of sections){ 

    observer.observe(section); 

  } 

}); 


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
 