<script>
    export let data; 
    let inputFieldValue = '';
    let selectedLetters = []; 
    const userId = "testUserId";
    
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
    <section class="order-form">
  <form use:enhance method="POST">
  <input name="order-content" type="text" placeholder="PLS WORK" bind:value={inputFieldValue}>
  <button type="submit">Submit Order</button>
  </form>
</section>
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
  </section>
