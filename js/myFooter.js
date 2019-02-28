var year = new Date().getFullYear();

var date = `&copy; Aesop ${year}. All Rights Reserved.`;

document.getElementsByTagName('footer')[0].innerHTML = date ;
//'<footer><div class="container"><div class="col"><a href="../about.html">More About Aesop</a><br><a href="../events.html">Join our latest event</a><br><a href="../about.html#contact">Send Feedback</a></div><div class="col"><p>4842 Garafraxa St<br>Stokes Bay, Ontario<br>N0H 2M0<br>519-592-0319</p></div><div class="col social"><a><img src="" alt="">Twitter</a><a><img src="" alt="">Facebook</a><a><img src="" alt="">Instagram</a></div><p class="copyright">Canada &copy Aesop. All Rights Reserved</p></div></footer>';