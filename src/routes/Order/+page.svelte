<script context="module">
  export async function load({ fetch }) {
      const response = await fetch('/your-endpoint-to-get-letters');
      if (!response.ok) {
          return { props: { error: 'Failed to load letters' } };
      }
      const letters = await response.json();
      return { props: { letters } };
  }
</script>

<script>
  export let letters;
  export let error;

  async function placeOrder(event, letterId) {
      event.preventDefault();
      const form = event.target;
      
      const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form)
      });

      if (response.redirected) {
          window.location.href = response.url;
      } else {
          console.error('Order submission failed');
      }
  }
</script>

{#if error}
  <p class="error">Error: {error}</p>
{:else}
  <h1>Letters</h1>
  <ul>
      {#each letters as letter}
          <li>
              <p>Letter: {letter.letter}</p>
              <p>Quantity: {letter.quantity}</p>
              <form on:submit|preventDefault={event => placeOrder(event, letter.id)} action="/your-endpoint-for-post-request">
                  <input type="hidden" name="letterId" value={letter.id} />
                  <label for="quantityOrdered-{letter.id}">Quantity:</label>
                  <input id="quantityOrdered-{letter.id}" type="number" name="quantityOrdered" min="1" max={letter.quantity} />
                  <button type="submit">Order</button>
              </form>
          </li>
      {/each}
  </ul>
{/if}


<style>
  .error {
      color: red;
      font-weight: bold;
      margin-bottom: 15px;
  }

  h1 {
      color: #333;
      font-size: 1.5em;
      margin-bottom: 20px;
  }

  ul {
      list-style-type: none;
      padding: 0;
  }

  li {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      padding: 15px;
      border-radius: 5px;
  }

  form {
      margin-top: 10px;
  }

  label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
  }

  input[type="number"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
  }

  button {
      background-color: #5c6bc0;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1em;
  }

  button:hover {
      background-color: #3f51b5;
  }
</style>
