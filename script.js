// Dropdown Buttons
const product =document.getElementById('product');
const company =document.getElementById('company');
const connect =document.getElementById('connect');
// Dropdown menus
const dropdownForProduct =document.querySelector('.dropdown-for-product');
const dropdownForCompany =document.querySelector('.dropdown-for-company');
const dropdownForConnect =document.querySelector('.dropdown-for-connect');
// Dropdown arrows
const downArrowPro =document.getElementById('pro-down');
const downArrowcom =document.getElementById('com-down');
const downArrowcon =document.getElementById('con-down');
// Dropdown For Product
product.addEventListener('click',()=>{
    dropdownForProduct.classList.toggle('show-dropdown');
    if(dropdownForProduct.classList.contains('show-dropdown')){
        downArrowPro.src='./images/icon-arrow-UP.svg';
        
    }
    else{
        downArrowPro.src=' ./images/icon-arrow-light.svg';
         
    }
})
// Dropdown For Company
company.addEventListener('click',()=>{
    dropdownForCompany.classList.toggle('show-dropdown');
    if(dropdownForCompany.classList.contains('show-dropdown')){
        downArrowcom.src='./images/icon-arrow-UP.svg';
        
    }
    else{
        downArrowcom.src=' ./images/icon-arrow-light.svg';
        
    }
})
// Dropdown For Connect
connect.addEventListener('click',()=>{
    dropdownForConnect.classList.toggle('show-dropdown');
    if(dropdownForConnect.classList.contains('show-dropdown')){
        downArrowcon.src='./images/icon-arrow-UP.svg';
        
    }
    else{
        downArrowcon.src=' ./images/icon-arrow-light.svg';
       
    }
})


//  Menu button
const navbar =document.getElementById('navbar');
const menuBtn =document.getElementById('menu');
menuBtn.addEventListener('click',()=>{
    
    navbar.classList.toggle('nav-active');
   if(navbar.classList.contains('nav-active')){
        menuBtn.src='./images/icon-close.svg';
   }
   else{
    menuBtn.src='./images/icon-hamburger.svg';
   }
})

// To remove the dropdown and menu when clicked outside
document.addEventListener('click', (e)=>{
    
    if(!product.contains(e.target) && !company.contains(e.target) && !connect.contains(e.target)) {
       dropdownForProduct.classList.remove('show-dropdown');
       dropdownForConnect.classList.remove('show-dropdown');
       dropdownForCompany.classList.remove('show-dropdown');
       downArrowcon.src=' ./images/icon-arrow-light.svg';
       downArrowcom.src=' ./images/icon-arrow-light.svg';
       downArrowPro.src=' ./images/icon-arrow-light.svg';

    }
    
 });