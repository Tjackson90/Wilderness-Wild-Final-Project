import ShelterVan from "../../images/ShelterVan.jpg";
import WoodShelter from "../../images/WoodShelter.jpg";
import CaveShelter from "../../images/CaveShelter.jpg";
import TarpShelter from "../../images/TarpShelter.jpg";
import SnowShelter from "../../images/SnowShelter.jpg";
import shelterLocationPic from "../../images/shelterLocationPic.jpg";

export default function Shelter() {
  return `
    <div class="container">
    <div class="shelter-building-title">

  <div class="shelter-summary-container">
    <h1 class = "shelter-title">Ways to Build A Survival Shelter</h1>
    <img class="shelter-pics" src='${ShelterVan}'>
      <p class="shelter-text">Shelter should be your survival priority, so knowing how to make a survival shelter is something that everyone should know. 
    Down below will show you a few simple methods to building a shelter when surviving in the wild.
    </p>
    </div>
    
    <article class = "shelter-prep-location">
    <div class = "shelter-prep-container">
    <h2 class ="shelter-site-class">Choose Your Site Location</h2>
    <img class="shelter-pics" src='${shelterLocationPic}'>
      <p class="shelter-text">Choosing your site location is a vital part of building your shelter. 
     There are many factors that come into play when it comes to finding the perfect location for your shelter. 
     Listed below are a few of the things you want to look for when finding a shelter location. </p>
     
     <ol class ="shelter-prep-list">
     <li>• Not right next to a body of water. Bodies of water track all sorts of animals.</li>
     <li>• Readily visible or very well hidden. (Depending on you survival situation)</li>
     <li>• A solid build that will support having a fire near it. (Refer to our fire-starting guide)</li>
     <li>• A nice flat location</li>
     <li>• A dry area, building on wet ground could cause your shelter to collapse.</li>
     </ol>
     </div>
     </article>

   <article class = "materials-for-shelter">
   <div class = "materials-for-shelter-container"> 
   <h2 class = "shelter-materials-list">Gathering Materials for Your Shelter</h2>
    <img class="shelter-pics" src='${WoodShelter}'></img>
    
      <p class="shelter-text">Now that we have a adequate location picked out, now its time to gather materials for your shelter. Now these materials
    will change based upon the environmental conditions you are in. This first example will be the most basic survival shelter.
    This shelter is designed for an absolute emergency situation! </p>
    
    <ul class = "shelter-material-list">
    <li>• Look for a long, sturdy pole to form the backbone of your hut.</li> 
    <li>• You will need more wood to form the ribs of the structure.</li>
    <li>• Bring in as much dead leaves, pine needles, dry grass and moss as you can.</li> 
    <li>• Shrubs as well as green boughs that you can break off low lying branches of trees are welcome, too.</li>
    </ul>
    </div>
    </article>   

   <article class = "naturally-formed-shelter">
   <div class = "naturally-formed-shelter-container">
   <h2>Using Naturally Formed Structures for Protection</h2>
   <img class="shelter-pics" src='${CaveShelter}'></img>
    <p class="shelter-text">Did you notice if there were any rock formations or overhangs that could be utilized as a temporary shelter? 
   Rocks make for outstanding shelter due to their ability to radiate heat at night that has been absorbed from the day’s sun,
   and will reflect heat from a fire made next to it. Be sure to inspect the area beforehand for any signs of a possible rock slide.</p>

    <p class="shelter-text">Caves are naturally occurring in many forest and desert areas, and these can be immensely welcome as emergency shelter. 
   Building a fire just outside the cave can help smoke out any rodents or creatures that may be hiding in the shadows.</p>

    <p class="shelter-text">When utilizing rocks, especially removing them for building shelter or fire pits, keep in mind that many creatures 
   enjoy the cool ground underneath the rock, some of which can be dangerous, like scorpions or snakes. Exercise caution, 
   and if you hear anything that sounds like a warning, leave!</p>
   </div>
   </article>

   <article class = "available-materials">
   <div class = "available-materials-container">
   <h2>Use Materials You Have With You</h2>
   <img class="shelter-pics" src='${TarpShelter}'></img>
    <p class="shelter-text">If you packed for wilderness adventuring, you may have useful materials already in your possession, 
   like a tarp, poncho, emergency blanket, or even a garbage bag. A knife and a length of rope would be definite 
   bonus materials. These materials can help enhance, but can also create a simple tent or a-frame 
   structure by stringing rope between trees grouped closely together. An emergency blanket is a great thing to have on hand, 
   as it will also help to radiate heat within your shelter.</p>   
   </div>
   </article>

  <article class ="snow-shelter-build">
  <div class ="snow-shelter-build-container">
  <h2>Building A Shelter In the Snow</h2>
  <img class="shelter-pics" src='${SnowShelter}'></img>
    <p class="shelter-text">Snow is one of nature’s amazing products that can actually be used to insulate your body from the cold.
  It seems counter-intuitive that a substance that can’t be made without freezing temperatures would help keep 
  you warm, but having this piece of information could very well save your life.</p>

    <p class="shelter-text">You will want to gather up a large pile of snow and pack it down as firmly as you can. The activity of working 
  with the snow will create some heat, which results in some melting. After you’ve packed the snow, let it stand for 
  a while to allow the cold air to “set” it firmly.</p>
    
    <p class="shelter-text">Dig a tunnel into the mound, with an opening just large enough to get your body through. Once you’ve created a tunnel
  leading into your shelter, you can then start to shovel out snow to create the larger area that will serve as your living area. 
  Make sure it is tall enough for you to sit up comfortably in, and long enough to accommodate your entire body laying down.</p>

    <p class="shelter-text">Once you’ve hollowed out the space of your snow shelter, it is crucial that you create an air hole in the ceiling.
  It doesn’t have to be a large hole, but it is necessary to allow oxygen in. Although you are out in the open, the density of your shelter
  and its relatively compact size can lead to suffocation without proper air flow.</p>

    <p class="shelter-text">Using debris like leaves, fallen pine needles, and branches with needles intact can serve as an insulation between your body and the snow floor.
  Creating that layer is important in order for you to retain body heat, much of which would be lost by coming into direct contact with the frozen ground.</p>
    </div>
   </article>

   <div class ="skills-main">
        <h3 class="shelter-quiz-title">Take a Quiz on how to Find Shelter</h3>
        <button class="quiz-btn-links_Shelter"><span>Click Here!</span><span>Quiz</span></button>
        <br>
        <div class="skills-btn-links_Water"><< Water</div>
        <div class="skills-btn-links_Food">Food>></div>
        </div>

   </div>

    `;
}

