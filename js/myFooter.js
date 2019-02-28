var year = new Date().getFullYear();

var date = `&copy; Aesop ${year}. All Rights Reserved.`;

document.getElementsByTagName('footer')[0].innerHTML = date ;
//[0] the first tag of footer in the page
//the varibale date wich will set to update annually 