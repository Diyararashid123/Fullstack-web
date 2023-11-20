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
 
 <Header user = {data.session.user}/>
 
 <div class="main-container">
   <div class="hero">
       <h1 class="hero-header" style="z-index: 99;">Welcome to Robotic Arm</h1>
     </div>
   <div class="grid">
       <div class="grid-content">
           <h2>Innovative Engineering</h2>
           <hr>
           <p>Our journey began with a team of five passionate engineers, each bringing unique expertise to the table. Together, we embarked on an ambitious project to create a state-of-the-art robotic arm. Our creation isn't just a marvel of technology; it's a testament to human ingenuity and collaboration. Through rigorous design, testing, and refinement, we've developed a robot that's not only highly efficient but also user-friendly, offering an interactive experience unlike any other.</p>

       </div>
       
       <img src="/robot-1.jpg" alt="bed" class="grid-img">
       <img src="/robot-2.jpg" alt="Picutre of bench in an outdoor park" class="grid-img">
       <div class="grid-content">
           <h2 style="z-index: 99;">Advanced Systems</h2>
           <hr>
           <p>At the core of our robotic arm is an advanced system, designed to handle complex tasks with precision and ease. Equipped with cutting-edge sensors and AI-driven algorithms, the robot can perform a wide range of actions, from intricate assembly tasks to interacting with users in real-time. Its versatility makes it ideal for various applications, from industrial settings to educational demonstrations.</p>
       </div>
       <div class="grid-content">
        <h2>Project Development</h2>
         <hr>
         <p>Our goal is to continually advance this project, pushing the boundaries of robotic technology. We're committed to refining our design, enhancing functionality, and ensuring that our robotic arm remains at the forefront of the industry. By embracing innovation and valuing feedback, we strive to make our robotic arm an indispensable tool in various sectors. Join us in this exciting journey of technological evolution.</p>
         <div class= "btn"  style="display grid; place-items: center; width: 65%;">
          <a  href="/Order">Place Order</a></div>
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
 
  

   .btn {
  position: relative;
  width: 170px;
  height: 50px;
 padding: 0.5rem;
 text-wrap: wrap;
 text-align: center;
 margin-top: 1rem;
}

.btn a{
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.051);
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
border-top: 1px solid rgba(250, 52, 52, 0.1);
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
z-index:10;
color: #fff;
border-radius: 30px;
font-weight: 400;
letter-spacing: 1px;
text-decoration: none;
transition: 0.5s;
overflow: hidden;
backdrop-filter: blur(15px);

}

.btn a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background:linear-gradient(to left, rgba(255,255,255,0.149), transparent);
  transform: skewX(45deg);
  transition: 0.5s;
  transition-delay: 0.5s;
}

.btn:hover a {
  letter-spacing: 3px;
}

a:hover::before{
  transform: skewX(45deg) translateX(200%);
  transition-delay: 0.5s;
}

.btn::before{
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #50C878;
  bottom: -5px;
  width: 30px;
  height: 10px;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}


.btn:hover::before{
  bottom: 0px;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}


.btn::after{
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #50C878;
  top: -5px;
  width: 30px;
  height: 10px;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}

.btn:hover::after{
  top: 0px;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}



.btn::before,
.btn::after,
.btn:nth-child(1)::before,
.btn:nth-child(1)::after{
  background: #1031c4;
  box-shadow: none;
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
 