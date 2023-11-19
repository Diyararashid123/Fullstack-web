<script>
  export let data; 
  import {enhance} from "$app/forms"
  import NavBtn from "../../lib/components/NavBtn.svelte";
  let inputFieldValue = '';
  let selectedLetters = []; 
  
  function selectLetter(letter) {
    if (selectedLetters.length < 4) {
      selectedLetters = [...selectedLetters, letter];
    } else {
      console.log("You can't select more than 4 letters!");
    }
  }

  function handleKeyPress(event, index) {
   
    if (event.key === 'Enter') {
      deleteLetter(index);
    }
  }

  function deleteLetter(index) {
    selectedLetters = selectedLetters.filter((_, i) => i !== index);
    updateInputField();
  }

  function updateInputField() {
  inputFieldValue = selectedLetters.join(''); 
}
</script>
<section class="order-form">
    <fieldset>
        <legend>Select Items:</legend>
        <div class="alphabet-selection">
            {#each data.letters as letter}
                <button class="btn" type="button" on:click={() => selectLetter(letter.charachter)}>
                    <a href={letter.url}>{letter.charachter}</a>
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

    <form class='Order' use:enhance method="POST">
        <input name="order-content" type="text" placeholder="PLS WORK" bind:value={inputFieldValue}>
        <button type="submit">Submit Order</button>
    </form>
</section>



<style>
.alphabet-selection {
    display: grid;
    background-color: rgba(255, 255, 255, 0.051);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(250, 52, 52, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    border-radius: 1rem;
}

  .alphabet-selection button {
    position: relative;
    background-color: rgba(128, 0, 128, 0.1); /* Lighter purple background */
    color: #fff; /* White text for contrast */
    box-shadow: 0px 0px 10px rgba(128, 0, 128, 0.3);
   border-top: 1px solid rgba(250, 52, 52, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index:10;
  overflow: hidden;
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
  
  .Order{
    
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
  }

  form button {
    align-self: center;
  }



  @media (min-width: 769px) and (max-width: 1500px) {
  
  }
  .btn {
  position: relative;
  width: 155px;
  height: 50px;
 margin: 20px;
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
  background: #003c80;
  box-shadow: none;
}





</style>