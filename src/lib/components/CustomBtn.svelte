<script>
  export let content;
  export let url;
</script>

<a href={url} class="button1">{content}</a>

<style>
.button1{
text-decoration: none;
position: relative;
width: 250px;
height: 80px;
margin-top: 3rem;
text-align: center;
line-height: 80px;
color: #000; 
border: 4px solid #6d4c41; 
border-radius: 2rem;
font-size: 24px;
letter-spacing: 2px; 
text-transform: uppercase;
transition: all 1.5s;
overflow: hidden;
z-index: 1;
background-color: #8f470d; 
box-shadow: 0px 0prgb(87, 43, 7)rgba(0,198,255, 0.3); 
}

.button1:before {
content: "";
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
border-top: 40px solid black; 
border-bottom: 40px solid black;
border-right: 40px solid transparent;
transition: all 1.5s;
transform: translateX(-100%);
z-index: -1;

}

.button1:hover:before {
transform: translateX(0%);
z-index: -1;

}

.button1:after {
content: "";
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
border-top: 40px solid black; 
border-bottom: 40px solid black; 
border-left: 40px solid transparent;
transition: all 1.5s;
transform: translateX(100%);
z-index: -1;

}

.button1:hover:after {
transform: translateX(0%);
z-index: -1;

}

.button1:hover {
  color: rgb(158, 105, 51);
  border-color: #946f53;
  background-color: black;
  box-shadow: 0px 0px 15px rgba(255, 153, 0, 0.5);
  text-shadow: 1px 1px 4px #75553f;

}
</style>