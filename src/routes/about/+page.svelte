<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import Header from '../../lib/components/Header.svelte';
  
  let y = spring(-500, { stiffness: 0.009, damping: 0.1 });
  let flippedStates = [false, false, false, false, false];  

  let activeCardIndex = null;
  
  function toggleFlip(index) {
  if (activeCardIndex === index) {
      flippedStates[index] = !flippedStates[index];
      activeCardIndex = null; 
  } else {
      if (activeCardIndex !== null) {
          flippedStates[activeCardIndex] = false;  
      }
      flippedStates[index] = true; 
      activeCardIndex = index;
  }
}

  onMount(() => {
    y.set(0); 
  });

  const cardsData = [
    { 
      image: "1.png", 
      name: "Diyara Rashid", 
      role: "Founder", 
      workexplanation: "The Full Stack Developer, in this scenario, demonstrates a comprehensive skill set in web application development. He is adept in managing both front-end and back-end aspects, ensuring a seamless user experience and efficient data management. His expertise extends to database management, API development, and programming robots. This diverse skill set underlines his capacity to handle various technological challenges and contribute significantly to the development and scalability of web platforms.",
      description: "Diyara Rashid the Full Stack Developer" ,
      icon: "fas fa-laptop-code",
    },
    { 
      image: "2.png", 
      name: "Albin", 
      role: "Network Specialist", 
      workexplanation: "Albin, in his role as a Network Specialist, played a pivotal role in setting up and optimizing the network infrastructure. His expertise was critical in integrating advanced technology, such as the Raspberry Pi and robotics, into the network. Albin ensured seamless communication and robust security across all networked devices, proving indispensable in managing and securing complex network systems.",
      description: "Managed the network connections to interface with the Raspberry Pi.",
      icon: "fas fa-network-wired",
    },
    { 
      image: "3.png", 
      name: "Osama", 
      role: "Circuit Systems Architect", 
      workexplanation: "Osama played a critical role in establishing the network architecture. By optimizing the connections and ensuring robust security measures, Osama made sure the platform communicated flawlessly with external devices like the Raspberry Pi.",
      description: "Osama was crucial in fixing the circuit plate for the project." ,
      icon: "fas fa-microchip",
    },
    { 
      image: "5.png", 
      name: "Jonatan",
      role: "PLC Expert", 
      workexplanation: "Specializing in Programmable Logic Controllers (PLC), Jonatan was the go-to expert for automation and machinery control. His expertise ensured that the PLC connections were efficient and reliable, driving the automated aspects of the project.",
      description: "Focused on establishing and fixing the PLC connections.",
      icon: "fas fa-cogs",
    }
  ];
</script>

<Header/>

<div class="card-container">
  {#each cardsData as card, index}  
      <div 
          class="card" 
          tabindex="0"
          role="button"
          style="transform: translateY({$y}px); transform: rotateY({flippedStates[index] ? 180 : 0}deg);"
          on:click={() => toggleFlip(index)} 
          on:keydown={(e) => { if (e.key === 'Enter') toggleFlip(index); }}
      >
          <div class="imgbox">
              <img src="{card.image}" alt="{card.name}">
          </div>
          <div class="back">
              <div class="details">
                  <i class="{card.icon}"></i>
                  <h2>
                      {card.name}<br/>
                      <span>{card.role}</span>
                  </h2>
                  <p class="work-explanation">{card['workexplanation']}</p>
                  <p class="details-text">{card.description}</p>
              </div>
          </div>
      </div>
  {/each}
</div>

<style>

@import '@fortawesome/fontawesome-free/css/all.css';
.card-container {
  display: flex;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
justify-content: space-evenly;
flex-wrap: wrap;
width: 100%;
align-self: center;
padding-top: 50%;
}

.card {
margin: 20px 40px 40px 20px;
width: 300px;
height: 400px;
transform-style: preserve-3d;
transition: transform 0.5s;
border-radius: 10px;  
box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);

}

.imgbox {
position: absolute;
top: 10px;
left: 10px;
bottom: 10px;
right: 10px;
background-color: #222;
backface-visibility: hidden;
transform: rotateY(0deg);
}

.card .back {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: white;  
backface-visibility: hidden;
transform: rotateY(180deg);
display: flex;
justify-content: center;
align-items: center;
}

.details {
position: relative;
width: 100%;
text-align: center;
padding: 10px 0;
font-size: 24px; 
margin-bottom: 10px;
color: #777;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-between; 
height: 100%;
}

.details-text {
font-size: 14px;
color: #666;
text-align: center;
margin-top: 3rem;
max-width: 90%;
margin-left: auto;
margin-right: auto;
}

h2 {
position: relative;
padding: 0;
margin-bottom: 10px; 
font-weight: 600;
font-size: 20px;
color: #777;
text-transform: uppercase;
}

h2 span {
font-weight: 500;
font-size: 16px;
color: #f38695;
}

img {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
}

.details i {
font-size: 24px;  
color: #777; 
}

.work-explanation {
position: relative;
font-size: 14px; 
line-height: 1.4; 
margin: 10px 0; 
color: #666; 
}



</style>