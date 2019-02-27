var year = new Date().getFullYear();

var date = `&copy; Aesop ${year}. All Rights Reserved.`;

document.getElementsByTagName('footer')[0].innerHTML = date;