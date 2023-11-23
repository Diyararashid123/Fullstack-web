<script>

let showLoginForm = true;
function toggleForm() {
  showLoginForm = !showLoginForm;
}

</script>
<div class="center-container">
<div class="wrapper">
  <div class="form-wrapper sign-in">
    <form method="post">
      <h2>Login</h2>
      <div class="input-group">
        <input type="text" name="username" id="signinUsername" placeholder="Username" required>
        <label for="signinUsername">Username</label>
      </div>
      <div class="input-group">
        <input type="password" name="password" id="signinPassword" placeholder="Password" required>
        <label for="signinPassword">Password</label>
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="sign-link">
        <p>Don't have an account? <a href="/register" class="signUp-link">Sign Up</a></p>
      </div>
    </form>
  </div>
</div>
</div>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .center-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 27rem;
    margin-left: 36%;
    margin: 0 auto;
    width: 30rem;
    height: 28rem;
  }
  
  @media (min-width: 769px) and (max-width: 1520px) {
    .wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30%;
    }
    .wrapper h2, .wrapper label, .wrapper button {
      font-size: 1rem;
    }
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    .wrapper {
      position: absolute;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 90%;
      padding: 0.5rem;
    }
    .wrapper h2, .wrapper label, .wrapper button {
      font-size: 0.9rem;
    }
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    .wrapper {
      position: absolute;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 90%;
      padding: 1rem;
    }
    .wrapper h2 {
      font-size: 1.2rem;
    }
    .wrapper label, .wrapper button {
      font-size: 1rem;
    }
    .wrapper button {
      padding: 0.5rem 1rem;
    }
  }
  
  .form-wrapper {
    display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  }
  
  h2 {
    font-size: 30px;
    color: #555;
    text-align: center;
  }
  
  .input-group {
    position: relative;
    width: 320px;
    margin: 30px 0;
  }
  
  .input-group label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 16px;
    color: #333;
    padding: 0 5px;
    pointer-events: none;
    transition: .5s;
  }
  
  .input-group input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #333;
    padding: 0 10px;
    background: transparent;
    border: 1px solid #333;
    outline: none;
    border-radius: 5px;
  }
  
  .input-group input:focus ~ label,
  .input-group input:valid ~ label {
    top: 0;
    font-size: 12px;
    background: #fff;
  }
  
  .btn {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(to right, #2196f3, #e91e63);
    box-shadow: 0 2px 10px rgba(0, 0, 0, .4);
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  
  .sign-link {
    font-size: 14px;
    text-align: center;
    margin: 25px 0;
  }
  
  .sign-link p {
    color: #333;
  }
  </style>
  