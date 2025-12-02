const images = [
  "img1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "xx.jpg",
  "7.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "new.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  
 
];

const names = ["Gayatri", "Abhinay Bhaiya", "Visess", "Sonia", "Archana", "Disha", "Zara", "Anshika", "Amisha", "Rubal", "Shruti", "Aanchal", "Manjot", "Pooja"];

const wishes = [
  "You are my everything. I can't define and design my life without your presence. You are like sugar in tea and salt in food to me. Bro ik sometimes I make you feel angry but trust me I love you the most in this world after mummy 💞. My intentions are always good for you. I love you a lot. Let's be there always for each other. I really wish you ki tujhe vo har cheez mile jo tu deserve krti hai. Always believe in yourself you are the besttt. Aur kisi baato ko lekr jyada mat sochaa krr just do whatever you feel 😊 faltu nyi sochne ka. Aur agr kuch glti ki ho to maafi 😭🥹",
  "Hii Muskaan!! Wishing you a very happy birthday 🎈 I wish n pray that you have an amazing year and find the success that you've been really working hard for. I wish you all the best. Let's 4 of us meet soon.",
  "Happy Birthday, cutie. You are the prettiest girl I've ever seen. I hope you're always happy and keep spreading joy around you, just like you always do. Nothing ever feels boring when you're around- everything feels as beautiful as warm sunshine. hope you achieve all your goals through your hard work",
  "Happy' birthday muskaan 🥳✨ Be chulbuli as you are always. You'll be able to fulfill your dreams. Trust yourself 💕",
  "Happy birthday muskan......bhaut saal guzar gye bhaut chiz badal gye but jo chiz ab bhi same hai wo hamari bachpan ki masumiyat wali dosti jo syd kabhi bhi ham mile wo hamesha waisi hi rahegi.   .....Stay happy stay blessed 💫 Kanha ji and shreemati radha rani tujhe hamesha khush rakhe From your Archana 😊",
  "Happiest birthday mussu🐭 Tu bhot pyari hai sweetu hai cutie hai🫶🏻❤🫂 Radha rani bless you ❤ Tere sb wishes puri ho, tu bhot successful ho🩷🫰 Lot's of love from Disha🫂 ",
  "Happiest birthdayyyy musskiiiii The most beautiful cutest and innocent girl....❤🫠 May you get all the love you deserve 🫠🫂",
  "Happy Birthday, Muskan!🌸✨It’s been so many years with you, and I truly love having you in my life. Even though we don’t talk every day, our bond has stayed just as strong.💐I love you so much.♥ Happiest birthday, Muski!!🫶🏻",
  "Happiest birthday Muskan bro❤ May shri ji bless you with lots of pyarrrr and happiness🩷 I wish hm hmesha sath rhe 🫂💞 Love love🫶🏻🌷",
  "Happy Birthday pyaari Murgan!!!😁 Teri हँसी का अपना ही मौसम है जहाँ गिरती है, वहाँ दिन थोड़ा और अच्छा हो जाता है.😘🤌🏻 Aaj full glow mode on rakhiyo… day is yours.🥳",
  "Muskiiiiiiii🩷 Happiest Birthday meri bhen ko.Tu bhot hi acchi , pyaari , aur saaf dil ki ladki hai. Aur itni khush mizaaz 🫰🏻 Dusron ka accha sochna aur karna .Tu apne saare goals, saare sapne pure kare jald se jald.... aur ek accha se apne Pasand ke ladke se Shadi kre aur hume bhi bulaye. Mere school time ke fav parts mein se ek tu bhi hai🫶🏽. Humesha kush reh bhen. Happiest Birthday 🎈",
  "Happpyy BirthhhDayyyy Muskaan🥳😚🫶🏻 God bless youu muskiiii 🐁 Tu hameshaa khush rhe bhagwan kre or pata h hume bhot maje aate h tere sath jab bhi milte h aesa lagta hu nhi h ki hum bhot time baad milte h 😂😂 tum log hamesha se hamare sath pehle jese hi rehte ho😭😭  Sach me bhot achi h tuu. 😚😚🫶🏻 Happpyy BirthhhDayyyy dobara 😚🫶🏻♥",
  "Happiest birthday muskaan❤🎂may God bless you with everything you desire for🌷🫶🏻  As you grow older no matter what the situation is never forget to carry your biggest accessory which is your smile❤🫂 Enjoy your day 🍾❤",
  "Happiest birthday muskan 🎉♥may God bless u with lots of love and happiness in your life 🎇may u get success and fulfill all your dreams ✨.....have fun and enjoy your day 🤗",
];

const cardsContainer = document.getElementById("cards");

// Generate all cards
images.forEach((img, i) => {
  const html = `
    <div class="card">
      <div class="flip">
        <div class="flip-inner">

          <div class="side front">
            <div class="avatar"><img src="${img}" /></div>
            <div class="card-name">${names[i]}</div>
            <div class="card-note"></div>
          </div>

          <div class="side back">
            <div class="msg-title">${names[i]}</div>
            <div class="msg-text">${wishes[i]}</div>
            <div class="msg-footer"></div>
          </div>

        </div>
      </div>
    </div>
  `;

  cardsContainer.insertAdjacentHTML("beforeend", html);
});

// Flip on click
document.addEventListener("click", (e) => {
  const flip = e.target.closest(".flip");
  if (flip) flip.classList.toggle("is-flipped");
});

// Slider Logic
let index = 0;

function updateSlide() {
  cardsContainer.style.transform = `translateX(-${index * 340}px)`;
}

document.getElementById("nextBtn").onclick = () => {
  if (index < images.length - 1) index++;
  updateSlide();
};

document.getElementById("prevBtn").onclick = () => {
  if (index > 0) index--;
  updateSlide();
};
