import { useState } from "react";

function RightPanel() {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <h1>Editing...</h1>;
  } else {
    return (
      <div className="rightPanel">
        <h2>Item title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          laudantium dolores sapiente velit voluptatibus ea voluptate. Adipisci
          tempore sequi minima soluta? Temporibus ducimus deserunt blanditiis
          tempore maiores, magnam tenetur sint?
        </p>
        <div>
          <label htmlFor="startDate">Start:</label>
          <input id="startDate" type="date" />
          <label htmlFor="endDate">End:</label>
          <input id="endDate" type="date" />
        </div>
      </div>
    );
  }
}

export default RightPanel;
