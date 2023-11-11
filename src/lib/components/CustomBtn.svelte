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
box-shadow: 0px 0px 10px rgba(0,198,255, 0.3); 
}

.button1:before {
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
border-top: 40px solid #d9f2ff; 
border-bottom: 40px solid #d9f2ff; 
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
color: #050505; 
border-color: #00c6ff; 
box-shadow: 0px 0px 15px rgba(0,198,255, 0.5); 
}
</style>