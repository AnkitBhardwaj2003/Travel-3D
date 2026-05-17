function showMessage(){

  alert("Welcome To Travel India");

  window.location.href = "#places";

}

/* SEARCH SYSTEM */

const searchInput =
document.getElementById("searchInput");

const cards =
document.querySelectorAll(".card");

/* CREATE MESSAGE */

const notFound =
document.createElement("h2");

notFound.innerHTML =
"Country Not Found";

notFound.style.textAlign =
"center";

notFound.style.marginTop =
"40px";

notFound.style.color =
"#38bdf8";

notFound.style.fontSize =
"40px";

notFound.style.display =
"none";

document.querySelector(".destinations")
.appendChild(notFound);

/* SEARCH FUNCTION */

searchInput.addEventListener("keyup", function(){

  const value =
  searchInput.value.toLowerCase();

  let matchFound = false;

  cards.forEach(card => {

    const country =
    card.querySelector("h3")
    .innerText
    .toLowerCase();

    if(country.includes(value)){

      card.style.display = "block";

      matchFound = true;

    }
    else{

      card.style.display = "none";

    }

  });

  if(matchFound){

    notFound.style.display = "none";

  }
  else{

    notFound.style.display = "block";

  }

});

/* MUSIC SYSTEM */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

const musicChoice =
document.getElementById("musicChoice");

/* START WITH MUSIC */

function startWithMusic(){

  music.play();

  musicBtn.innerHTML = "🔊";

  musicChoice.style.display = "none";

}

/* START WITHOUT MUSIC */

function startWithoutMusic(){

  music.pause();

  musicBtn.innerHTML = "🎵";

  musicChoice.style.display = "none";

}

/* MUSIC BUTTON */

musicBtn.addEventListener("click", () => {

  if(music.paused){

    music.play();

    musicBtn.innerHTML = "🔊";

  }
  else{

    music.pause();

    musicBtn.innerHTML = "🎵";

  }

});

/* BOOKING SYSTEM */

function bookTrip(){

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const country =
  document.getElementById("country").value;

  if(name === "" ||
     email === "" ||
     country === "Choose Country"){

    alert("Please fill all details");

  }
  else{

    document.getElementById("successBox")
    .style.display = "flex";

  }

}

/* CLOSE SUCCESS */

function closeSuccess(){

  document.getElementById("successBox")
  .style.display = "none";

}

/* COUNTRY DETAILS */

const countryDetails = {

  japan: `
    <h2>Japan Travel Details</h2>

    <p><strong>Visa:</strong> ₹4,500</p>
    <p><strong>Flight:</strong> ₹55,000 - ₹90,000</p>
    <p><strong>Hotel:</strong> ₹6,000/night</p>
    <p><strong>Cab:</strong> ₹5,000 average</p>
    <p><strong>Total Budget:</strong> ₹2L</p>
    <p><strong>Best Time:</strong> March - April</p>
    <p><strong>Language:</strong> Japanese</p>
    <p><strong>Currency:</strong> Yen</p>
    <p><strong>Food:</strong> Sushi, Ramen</p>

    <ul>
      <li>Tokyo Tower</li>
      <li>Mount Fuji</li>
      <li>Kyoto</li>
      <li>Osaka Castle</li>
      <li>Senso Ji Temple</li>
      <li>Shibuya Crossing</li>
    </ul>
  `,

  france: `
    <h2>France Travel Details</h2>

    <p><strong>Visa:</strong> ₹7,000</p>
    <p><strong>Flight:</strong> ₹60,000 - ₹1L</p>
    <p><strong>Hotel:</strong> ₹8,000/night</p>
    <p><strong>Cab:</strong> ₹6,000 average</p>
    <p><strong>Total Budget:</strong> ₹2.5L</p>
    <p><strong>Best Time:</strong> April - June</p>
    <p><strong>Language:</strong> French</p>
    <p><strong>Currency:</strong> Euro</p>
    <p><strong>Food:</strong> Croissant</p>

    <ul>
      <li>Eiffel Tower</li>
      <li>Louvre Museum</li>
      <li>Paris</li>
      <li>Notre Dame</li>
      <li>Versailles</li>
      <li>Nice</li>
    </ul>
  `,

  dubai: `
    <h2>Dubai Travel Details</h2>

    <p><strong>Visa:</strong> ₹6,500</p>
    <p><strong>Flight:</strong> ₹25,000 - ₹45,000</p>
    <p><strong>Hotel:</strong> ₹5,000/night</p>
    <p><strong>Cab:</strong> ₹4,000 average</p>
    <p><strong>Total Budget:</strong> ₹1.5L</p>
    <p><strong>Best Time:</strong> November - February</p>
    <p><strong>Language:</strong> Arabic</p>
    <p><strong>Currency:</strong> UAE Dirham</p>
    <p><strong>Food:</strong> Shawarma</p>

    <ul>
      <li>Burj Khalifa</li>
      <li>Dubai Mall</li>
      <li>Palm Jumeirah</li>
      <li>Dubai Marina</li>
      <li>Museum Of Future</li>
      <li>Burj Al Arab</li>
    </ul>
  `,

  india: `
    <h2>India Travel Details</h2>

    <p><strong>Visa:</strong> Not Required</p>
    <p><strong>Flight:</strong> ₹5K - ₹20K</p>
    <p><strong>Hotel:</strong> ₹2K/night</p>
    <p><strong>Cab:</strong> ₹2K average</p>
    <p><strong>Total Budget:</strong> ₹80K</p>
    <p><strong>Best Time:</strong> October - March</p>
    <p><strong>Language:</strong> Hindi, English</p>
    <p><strong>Currency:</strong> Indian Rupee</p>
    <p><strong>Food:</strong> Biryani</p>

    <ul>
      <li>Taj Mahal</li>
      <li>India Gate</li>
      <li>Qutub Minar</li>
      <li>Kerala</li>
      <li>Goa</li>
      <li>Kashmir</li>
    </ul>
  `,

  switzerland: `
    <h2>Switzerland Travel Details</h2>

    <p><strong>Visa:</strong> ₹7,500</p>
    <p><strong>Flight:</strong> ₹70K - ₹1.2L</p>
    <p><strong>Hotel:</strong> ₹10K/night</p>
    <p><strong>Cab:</strong> ₹7K average</p>
    <p><strong>Total Budget:</strong> ₹3L</p>
    <p><strong>Best Time:</strong> December - February</p>
    <p><strong>Language:</strong> German, French</p>
    <p><strong>Currency:</strong> Swiss Franc</p>
    <p><strong>Food:</strong> Swiss Chocolate</p>

    <ul>
      <li>Swiss Alps</li>
      <li>Lucerne</li>
      <li>Interlaken</li>
      <li>Zermatt</li>
      <li>Geneva</li>
      <li>Lake Geneva</li>
    </ul>
  `,

  maldives: `
    <h2>Maldives Travel Details</h2>

    <p><strong>Visa:</strong> Free On Arrival</p>
    <p><strong>Flight:</strong> ₹20K - ₹40K</p>
    <p><strong>Hotel:</strong> ₹8K/night</p>
    <p><strong>Cab:</strong> ₹3K average</p>
    <p><strong>Total Budget:</strong> ₹1.8L</p>
    <p><strong>Best Time:</strong> November - April</p>
    <p><strong>Language:</strong> Dhivehi</p>
    <p><strong>Currency:</strong> Maldivian Rufiyaa</p>
    <p><strong>Food:</strong> Garudhiya</p>

    <ul>
      <li>Male Island</li>
      <li>Sun Island</li>
      <li>Vaadhoo Island</li>
      <li>Maafushi</li>
      <li>Baros Island</li>
      <li>Addu Atoll</li>
    </ul>
  `

};

/* OPEN POPUP */

function openPopup(country){

  document.getElementById("popup")
  .style.display = "flex";

  document.getElementById("popup-details")
  .innerHTML = countryDetails[country];

}

/* CLOSE POPUP */

function closePopup(){

  document.getElementById("popup")
  .style.display = "none";

}

/* VIDEO SPEED */

const bgVideo =
document.getElementById("bgVideo");

bgVideo.playbackRate = 1.25;