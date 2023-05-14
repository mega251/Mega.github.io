const body = document.querySelector("body");

body.insertAdjacentHTML(
  "afterbegin",

  `
 <!-- --------------- header --------------- -->
    <header>
      <img src="/images/logo2.png" alt="logo" />
      <nav>
      <i class="fa-solid fa-bars"  onclick="open_menu()"></i>
        <ul>
        <i class="fa-solid fa-xmark" onclick="close_menu()"></i>
        <li><a href="/index.html">سەرەتا</a></li>
        <li><a href="/pages/items.html">کاڵاکان</a></li>
        <li><a href="/pages/build.html">دروستکردن</a></li>
          <li><a href="/pages/contact.html">پەیوەندی</a></li>
        </ul>
      </nav>
    </header>
`
);
const footer = document.querySelector("footer");

footer.insertAdjacentHTML(
  "afterbegin",

  `
 <!-- --------------- Footer --------------- -->
 <footer>
 <span>
   <section>
     <ul>
       <li>
         ناونیشان: سلێمانی - مەولەوی<i class="fa-solid fa-location-dot"></i>
       </li>
       <li>megatechx4@gmail.com<i class="fa-solid fa-envelope"></i></li>
       <li>
         0750 1553983 - 0771 9919949<i class="fa-solid fa-phone"></i>
       </li>
     </ul>
   </section>
   <section>
     <img src="images/logo2.png" alt=""><br>
     <ul>
       <i class="fa-brands fa-instagram"></i>
       <i class="fa-brands fa-facebook"></i>
       <i class="fa-brands fa-telegram"></i>
     </ul>
   </section>
 </span>
 <div id="line"></div>
 <section><i class="fa-sharp fa-solid fa-copyright"></i> &nbsp&nbsp 2022 MEGA Group.</section>
</footer>

<style>
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #1F1F1F;
  padding-top: 1rem;
  color: #FFFFFF;
}

footer>span {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

}

footer>span>section{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer>span>section>img{
  width: 20vh;
  text-align: right; 
}


footer>span>section>ul {
  text-align: right;
}

footer>span>section>ul>li {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

footer>span>section:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
}

footer>span>section:nth-child(2)>ul {
  margin-top: 0rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}

footer>span>section:nth-child(2)>ul>i {
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
}
footer>span>section:nth-child(2)>ul>i:hover{
  color: #10a810;
}

footer>section{
  margin:2rem 0 ;
  width: 100%;
  text-align: center;
}
#line{
  height: 1px;
  background-color: #727272;
  margin-top: 30px;
  width: 100%;
  align-item: center;
}
@media only screen and (max-width: 500px) {
  footer>span {
    flex-direction: column;
    align-items:center;
    gap:1rem;
    }
}
</style>
`
);

function open_menu() {
  document.querySelector("header>nav>ul").style.display = "flex";
}

function close_menu() {
  document.querySelector("header>nav>ul").style.display = "none";
}
