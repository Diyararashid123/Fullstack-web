<script>
  export let data; // Data received from the server
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let selectedLetters = []; // Array to store selected letters
  const userId = "testUserId";
  // Function to add a letter to the selectedLetters array
  function selectLetter(letter) {
    if (selectedLetters.length < 4) {
      selectedLetters = [...selectedLetters, letter];
    } else {
      console.log("You can't select more than 4 letters!");
    }
  }
  function handleKeyPress(event, index) {
    // Example: Trigger deleteLetter when the Enter key is pressed
    if (event.key === 'Enter') {
      deleteLetter(index);
    }
  }
  // Function to remove a letter from the selectedLetters array
  function deleteLetter(index) {
    selectedLetters = selectedLetters.filter((_, i) => i !== index);
  }



  async function placeOrder() {
    if (selectedLetters.length === 0) {
        console.error('No letters selected');
        return;
    }

    const lettersString = selectedLetters.join('');
    const userId = "testUserId"; // Replace with actual user ID in a real app

    try {
        const response = await fetch('/Order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: userId,
                letters: lettersString
            })
        });

        if (!response.ok) {
            throw new Error('Failed to place order');
        }

        const result = await response.json();
        console.log('Order placed:', result.message);
    } catch (error) {
        console.error('Error placing order:', error.message);
    }
}




</script>
<section class="order-form">
  <form id="robot-order-form">
    <fieldset>
      <legend>Select Items:</legend>
      <div class="alphabet-selection">
        {#each data.letters as letter}
          <button type="button" on:click={() => selectLetter(letter.charachter)}>
            {letter.charachter}
          </button>
        {/each}
      </div>
    </fieldset>
    <div class="selected-items">
      {#each selectedLetters as item, index}
        <span 
          tabindex="0"  
          role="button" 
          on:click={() => deleteLetter(index)}
          on:keypress={(event) => handleKeyPress(event, index)}
        >
          {item}
        </span>
      {/each}
    </div>
  </form>

  {#key animate}
    <div in:fly={{ duration: 2000, y: -500, opacity: 0, easing: quintOut }}>
      <h1>Robotic Arm Order System</h1>
    </div>
    <div
      in:fly={{
        delay: 500,
        duration: 2000,
        y: 300,
        opacity: 0,
        easing: quintOut,
      }}
    >
     
    </div>
 
    <div
      in:fly={{
        delay: 600,
        duration: 2000,
        y: 600,
        opacity: 0,
        easing: quintOut,
      }}
    >
      <footer>
        <p>Created by Diyara Rashid</p>
      </footer>
    </div>
  {/key}
  <button type="button" on:click={placeOrder} class="order-button">Place Order</button>

</section>

<!-- Add your styles here -->
<style>
  
  h1 {
    text-align: center;
    letter-spacing: 0.1rem;
    color: #080808;
    margin-bottom: 5%;
    font-size: 40px;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (min-width: 769px) and (max-width: 1500px) {

    h1 {
      position: relative;
      top: -3rem;
    text-align: center;
    letter-spacing: 0.1rem;
    color: #080808;
    font-size: 40px;
  }

  }

  footer {
    text-align: center;
    margin-top: 20px;
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(85, 59, 234, 0.7);
  }

  .big-emoji {
    font-size: 3rem;
    vertical-align: middle;
  }

.alphabet-selection {
    display: grid;
    background-color: #d9f2ff;
    border-color: #00c6ff;
    box-shadow: 0px 0px 15px rgba(0, 198, 255, 0.5);
    color: #fcfdfd;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    border-radius: 1rem;
  }

  .alphabet-selection button {
    position: relative;
    background-color: #e6f7ff;
    color: #003366;
    border: 2px solid #a8e0ff;
    text-transform: uppercase;
    box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
    width: 7rem;
    height: 2rem;
    line-height: 20px;
    text-align: center;
    font-size: 1rem;
    padding: 5px 10px;
    border-radius: 0.1rem;
    cursor: pointer;
  }

  .alphabet-selection button:hover {
    transition: background-color 0.3s;
    color: #fdfafa;
  }

  .selected-items {
    background-color: #e6f7ff;
    color: #003366;
    border: 2px solid #a8e0ff;
    text-transform: uppercase;
    box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
    padding: 10px;
    border-radius: 0.35rem;
    width: 50%;
    text-align: center;
  }

  .selected-items span {
    cursor: pointer;
    display: inline-block;
    border-radius: 1px;
    transition: 0.3s;
    margin: 0 2px;
  }

  .selected-items span:hover {
    background-color: #f01a0b;
  }

  .thanks-message {
    text-align: center;
    color: #d9b568;
    font-size: 24px;
    padding: 20px;
    border: 2px solid #d9b568;
    border-radius: 5px;
  }


  
  legend {
    border-radius: 1rem;
    text-align: center;
    color: rgb(7, 7, 7);
    font-family: "Courier New";
    font-size: 30px;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    transition: all 0.5s;
  }

  fieldset {
    padding: 0.1rem 0.2rem;
    border: 0.2rem solid #f5f4f1;
    animation: toggleColor 2s infinite;
    border-radius: 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form button {
    align-self: center;
  }

  button {
    text-decoration: none;
    position: relative;
    width: 250px;
    height: 80px;
    margin-top: 3rem;
    text-align: center;
    line-height: 80px;
    color: #003366;
    border: 4px solid #a8e0ff;
    border-radius: 2rem;
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 1.5s;
    overflow: hidden;
    z-index: 1;
    background-color: #e6f7ff;
    box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
  }

  button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-top: 40px solid #d9f2ff;
    border-bottom: 40px solid #d9f2ff;
    border-right: 40px solid transparent;
    transition: all 1.5s;
    transform: translateX(-100%);
    z-index: -1;
  }

  button:hover:before {
    transform: translateX(0%);
    z-index: -1;
  }

  button:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-top: 40px solid #d9f2ff;
    border-bottom: 40px solid #d9f2ff;
    border-left: 40px solid transparent;
    transition: all 1.5s;
    transform: translateX(100%);
    z-index: -1;
  }

  button:hover:after {
    transform: translateX(0%);
    z-index: -1;
  }

  button:hover {
    color: #fcfdfd;
    text-shadow: 0px 0px 5px #00c6ff, 0px 0px 10px #00c6ff;
    border-color: #00c6ff;
    box-shadow: 0px 0px 15px rgba(0, 198, 255, 0.5);
  }


  @media (min-width: 769px) and (max-width: 1500px) {
    .alphabet-selection {
      display: grid;
      background-color: #d9f2ff;
      border-color: #00c6ff;
      box-shadow: 0px 0px 15px rgba(0, 198, 255, 0.5);
      color: #fcfdfd;
      grid-template-columns: repeat(3, 1fr);

      border-radius: 1rem;
    }

    .alphabet-selection button {
      position: relative;
      top: -2rem;
      left: 0.9rem;
      background-color: #e6f7ff;
      color: #003366;
      border: 2px solid #a8e0ff;
      text-transform: uppercase;
      box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
      width: 5rem;
      height: 2rem;
      line-height: 20px;
      text-align: center;
      font-size: 0.8rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    fieldset {
      position: relative;
      bottom: 2.5rem;
      padding: 1px 0.2rem;
      border: 0.2rem solid #f5f4f1;
      animation: toggleColor 2s infinite;
      border-radius: 0.5rem;
    }

    legend {
      text-align: center;
      color: rgb(7, 7, 7);
      font-family: "Courier New";
      font-size: 45px;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      transition: all 0.5s;
    }

    button {
    text-decoration: none;
    position: relative;
    top: -4rem;
    width: 250px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #003366;
    border: 4px solid #a8e0ff;
    border-radius: 2rem;
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 1.5s;
    z-index: 1;
    background-color: #e6f7ff;
    box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
  }
    
  .selected-items {
    position: relative;
    top: -2rem;
    background-color: #e6f7ff;
    color: #003366;
    border: 2px solid #a8e0ff;
    text-transform: uppercase;
    box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
    padding: 10px;
    border-radius: 0.35rem;
    width: 50%;
    text-align: center;
  }
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
  }

  /* Phone */
  @media (min-width: 320px) and (max-width: 480px) {
  }

   

  h1 {
    text-align: center;
    letter-spacing: 0.1rem;
    color: #080808;
    margin-bottom: 5%;
    font-size: 40px;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (min-width: 769px) and (max-width: 1500px) {

    h1 {
      position: relative;
      top: -3rem;
    text-align: center;
    letter-spacing: 0.1rem;
    color: #080808;
    font-size: 40px;
  }

  }

  footer {
    text-align: center;
    margin-top: 20px;
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(85, 59, 234, 0.7);
  }

  .big-emoji {
    font-size: 3rem;
    vertical-align: middle;
  }
</style>
