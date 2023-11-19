<script>
  import Header from "../lib/components/Header.svelte";
   import CustomBtn from "../lib/components/CustomBtn.svelte";
   import { fly } from "svelte/transition";
   import { quintOut } from "svelte/easing";
   import { onMount } from 'svelte';
   
   export let data;
   onMount(()=>{
     console.log(data.session);
   })
 </script>
 
 <Header/>
 
 <div class="main-container">
   <div class="hero">
       <h1 class="hero-header" style="z-index: 99;">Welcome to Robotic Arm</h1>
     </div>
   <div class="grid">
       <div class="grid-content">
           <h2>Our Story</h2>
           <hr>
           <p>At our hotel, we believe in creating memorable experiences for our guests. Nestled in the heart of Glasgow, our hotel is more than just a place to stay; it's a home away from home. Established in 2001, we have been committed to providing unparalleled hospitality and ensuring that every guest leaves with a smile.
 
               From our humble beginnings to becoming a sought-after destination, our hotel has evolved while keeping our core values intact. Our story is one of passion, dedication, and a relentless pursuit of excellence in guest satisfaction.</p>
       </div>
       
       <img src="/robot-1.jpg" alt="bed" class="grid-img">
       <img src="/robot-2.jpg" alt="Picutre of bench in an outdoor park" class="grid-img">
       <div class="grid-content">
           <h2 style="z-index: 99;">Outdoor Escapes</h2>
           <hr>
           <p>Indulge in the natural beauty surrounding our hotel. Embark on invigorating hikes along winding trails, suitable for all levels. Inhale the crisp air and absorb panoramic views of the picturesque landscapes. Just a short distance away, a waterfall invites you to explore water sports or simply unwind by the shores. For a quieter escape, revel in the serenity of nearby parks, offering leisurely strolls amidst charming greenery.</p>
       </div>
       <div class="grid-content">
         <h2>Our Rooms</h2>
         <hr>
         <p>Indulge in refined comfort at our hotel. Our thoughtfully designed rooms seamlessly combine modern amenities with timeless elegance. From plush bedding to personalized services, each space offers a perfect balance of relaxation and sophistication. Experience hospitality redefined in every detail of our accommodations.</p>
         <div style="display: grid; place-items: center; width: 100%;"><a class="nav-btn" href="/Order">Place Order</a></div>
     </div>
     <img src="/robot-3.jpg" alt="bed" class="grid-img">
   </div>
 </div>
 
 <style>
     
     * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   z-index: 1;
 }
 
 .main-container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 150px); 
   gap: 1rem;
   padding: 1rem 0;
   color: white;
  
 }
   
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   
   }
 
   :root{
     --text: #e8ebed;
     --background: #161a1d;
     --primary: #636583;
     --secondary: #14110f;
     --accent: #898667;
    
   }
 
   .hero{
     position: relative;
     display: grid;
     place-items: center;
     height: 30rem;
     font-style:italic;
    
   }
 
   .hero::before{
     content: "";
     position: absolute;
     top: 0px;
     right: 0px;
     bottom: 0px;
     left: 0px;
     background-size: cover;
     background-position: center;
     filter: blur(3px);
    
  
   }
 
   .hero::before{
     background-image: url("/page1.PNG");
     filter: brightness(50%) contrast(110%);
    
   }
 
   .grid{
     display: grid;
     justify-content: center;
     grid-template-columns: repeat(2, 1fr);
     gap: 1rem;
     row-gap: 5rem;
     width: 80%;
     justify-self: center;
     letter-spacing: 2px;
     
   }
 
   .grid-content{
     max-width: 70%;
     justify-self: center;
    
   }
   .grid-content > p{
     line-height: 1.6;
   }
   .grid-content > h2{
     text-align: center;
     margin-bottom: 1rem;
   }
   .grid-img{
     width: 100%;
     align-self: center;
    
   }
 
   .main-container{
     position: relative;
     display: grid;
     gap: 1rem;
     padding: 1rem 6rem;
   }
 
  

   .nav-btn{
     padding: 0.8rem;
     border-radius: 16px;
     background-color: var(--accent);
     color: black;
     width: fit-content;
     letter-spacing: 0.6px;
     margin-top: 1rem;
     z-index: 1;
   }
 
   hr{
     width: 30%;
     opacity: 0.5;
     margin: 0.75rem 0;
     z-index: 1;
   }
 
   .hero-header{
     font-size: clamp(1rem, 2vw, 4rem);
     z-index: 1;
   }
 </style>
 