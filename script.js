


let menu =  document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');    
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


      const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className == 'fa fa-plus'){
            icon.className = "fa fa-minus";
        }
        else{
            icon.className = "fa fa-plus";
        }
    })
})