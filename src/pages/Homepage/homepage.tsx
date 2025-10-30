import Flip_box from "../../modules/flip-box.tsx/Flip_box";
import Ai_interface from "../AI_interface/ai_interface";
import './homepage.css';

function Homepage() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
<Ai_interface />
<h2>maybe some flip around info boxes here</h2>

<div className="info-boxes-shell">
<Flip_box frontContent="this goes on the front>" frontColor="blue" backColor="orange">
    <p>This is the back content of the flip box. You can put any React nodes here.</p>
    </Flip_box> 
<Flip_box frontContent="this goes on the front>" frontColor="blue" backColor="orange">
    <p>This is the back content of the flip box. You can put any React nodes here.</p>
    </Flip_box> 
<Flip_box frontContent="this goes on the front>" frontColor="blue" backColor="orange">
    <p>This is the back content of the flip box. You can put any React nodes here.</p>
    </Flip_box> 
<Flip_box frontContent="this goes on the front>" frontColor="blue" backColor="orange">
    <p>This is the back content of the flip box. You can put any React nodes here.</p>
    </Flip_box> 
</div>



    </div>
  );
}

export default Homepage;