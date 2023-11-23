<script>
  export let data; 
  import {enhance} from "$app/forms"
  import Header from '../../lib/components/Header.svelte';
  let thankYouClass = '';
  let inputFieldValue = '';
  let selectedLetters = []; 
  let isSubmitted = false;
 
  let orderStatusMessage = isOrderProcessed
      ? "Your order is done!"
      : "Your order is being processed...";
  async function handleSubmit() {
    isSubmitted = true;
    orderStatusMessage = "Please wait, processing your order...";
    thankYouClass = 'thank-you-message-active'; 

    
  }
  function selectLetter(letter) {
    if (selectedLetters.length < 4) {
      let formattedLetter = `${letter.charachter} quantity ${letter.quantity}`;
    selectedLetters = [...selectedLetters, formattedLetter];
    } else {
      console.log("You can't select more than 4 letters!");
    }
  }

  function updateInputField() {
  inputFieldValue = selectedLetters.join(''); 
}


</script>
<Header/>
<section class="order-form">
  <h1>Order System</h1>
  <div class="order-instructions">
    <p>Follow these simple steps to place your order:</p>
    <ol>
      <li>You can see in the "SELECT ITEMS" table the letters that are available to order.</li>
      <li> on the letters you wish to include in your order (maximum of 4).</li>
      <li>Review your selected letters in the 'Order here' input field.</li>
      <li>Once you're happy with your selection, click 'Submit Order' to complete your purchase.</li>
    </ol>
  </div>
    <fieldset>
        <legend>Select Items:</legend>
        <div class="alphabet-selection">
            {#each data.letters as letter}
            <div class="letter-container">
              <button class="btn" type="button" on:click={() => selectLetter(letter.charachter)}>
                  <a href={letter.url}>{letter.charachter}</a>
              </button>
              <p class="quantity">{letter.quantity}</p>
          </div>
          
            {/each}
        </div>
    </fieldset>
    <form class='order' use:enhance method="POST" on:submit|preventDefault={handleSubmit}>
        <input name="order-content" type="text" placeholder="Submit here" bind:value={inputFieldValue}>
        <button type="submit">Submit Order</button>
    </form>
   {#if isSubmitted}
  <div class={`thank-you-message ${thankYouClass}`}>
    {orderStatusMessage}
  </div>
{:else}
  <form class='order' on:submit|preventDefault={handleSubmit}>
    
    <button type="submit">Submit Order</button>
  </form>
{/if}

</section>

<style>
.alphabet-selection {
    display: grid;
    background-color: rgba(255, 255, 255, 0.051);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(250, 52, 52, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    grid-template-columns: repeat(2,  1fr);
    gap: 1rem;
    border-radius: 1rem;
    padding:1rem;
}

.order-form {
  max-width:50rem;
  margin: auto;
  padding: 200px 20px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #003c80;
}

@keyframes slideFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.thank-you-message {
  display: none; 
  margin-top: 20px;
  text-align: center;
  color: #4CAF50;
  font-size: 1.5em;
  animation: slideFadeIn 1s ease-out forwards;
}


.thank-you-message-active {
  display: block;
}

  .alphabet-selection button {
    position: relative;
    background-color: rgba(27, 51, 187, 0.1);
    color: #fff; 
    left: 4rem;
    box-shadow: 0px 0px 10px rgba(128, 0, 128, 0.3);
   border-top: 1px solid rgba(250, 52, 52, 0.1);
   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
   z-index:10;
   overflow: hidden;
    text-transform: uppercase;
    box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
    width: 8.4rem;
    height: 2.4rem;
    line-height: 20px;
    text-align: center;
    font-size: 1.2rem;
    padding: 6px 12px;
    border-radius: 0.1rem;
    cursor: pointer;
  }
  
  .letter-container {
  display: grid;
  grid-template-columns: auto auto; 
  align-items: center;
  gap: 10px; 
  margin-bottom: 10px; 
}


.quantity{
  text-align:right;
  color:#fff;
  margin-right: 6rem;
}
  
  legend {
    border-radius: 1rem;
    text-align: center;
    color: rgb(7, 7, 7);
    font-family: "Courier New";
    font-size: 36px;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    transition: all 0.5s;
  }

  fieldset {
    padding: 0.1rem;
    border: 0.1rem solid #003c80;
    animation: toggleColor 2s infinite;
    border-radius: 0.5rem;
    padding-bottom: 1rem;
  }

  
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

  form button {
    align-self: center;
  }


  input[name="order-content"] {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  color:white;
  background-color: rgba(255, 255, 255, 0.051);
 box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
 border-top: 1px solid rgba(250, 52, 52, 0.1);
 border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}


button[type="submit"] {
  background-color: rgba(128, 0, 128, 0.1); /* Similar background */
  color: #fff;
  padding: 5px 10px;
  border-radius: 0.1rem;
  cursor: pointer;
  position: relative; /* Important for pseudo-elements */
  overflow: hidden; /* To contain the hover effects */
  text-transform: uppercase;
  box-shadow: 0px 0px 10px rgba(0, 198, 255, 0.3);
  transition: 0.5s;
  font-size: 1.2rem;
  line-height: 20px;
  width: 13rem;
  height: 2.6rem;
}

button[type="submit"]:hover {
  letter-spacing: 3px;
}
.order-instructions {
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.051);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: Arial, sans-serif;
  max-width: 800px;
  line-height: 1.8;
}

.order-instructions p {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px; 
}

.order-instructions ol {
  margin-top: 10px;
  font-size: 1rem;
  padding-left: 20px; 
}

.order-instructions li {
  margin-bottom: 10px;
}

.btn a {
  display: flex;
  justify-content: center; 
  align-items: center; 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(250, 52, 52, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
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
h1{
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.btn::before{
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #003c80;
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
  background: #003c80;
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
  background: #003c80;
  box-shadow: none;
}


</style>