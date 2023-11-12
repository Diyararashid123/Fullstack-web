<script>
  export let content;
  export let url;
</script>

<a href={url} class="button1">{content}</a>

<style>

.button1 {
  text-decoration: none;
  position: relative;
  width: auto; 
  padding: 0.5rem 1.5rem; 
  margin-top: 1.5rem; 
  text-align: center;
  color: #003366;
  border: 2px solid #a8e0ff;
  border-radius: 2rem;
  font-size: 1rem; /* Smaller font size */
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 1.5s;
  overflow: hidden;
  z-index: 1;
  background-color: #e6f7ff;
  box-shadow: 0px 0px 10px rgba(0,198,255, 0.3);
}

/* Adjust the before and after pseudo-elements accordingly */
.button1:before, .button1:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all 1.5s;
  z-index: -1;
}

.button1:before {
  border-top: 20px solid #d9f2ff; 
  border-bottom: 20px solid #d9f2ff;
  border-right: 20px solid transparent;
  transform: translateX(-100%);
}

.button1:after {
  border-top: 20px solid #d9f2ff;
  border-bottom: 20px solid #d9f2ff;
  border-left: 20px solid transparent;
  transform: translateX(100%);
}

.button1:hover {
  color: #050505;
  border-color: #00c6ff;
  box-shadow: 0px 0px 15px rgba(0,198,255, 0.5);
}

.button1:hover:before, .button1:hover:after {
  transform: translateX(0%);
  z-index: -1;
}

</style>