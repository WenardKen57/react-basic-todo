import { useState } from "react";

import ItemShowDetails from "./ItemShowDetails";

function RightPanel() {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <h1>Editing...</h1>;
  } else {
    return <ItemShowDetails></ItemShowDetails>;
  }
}

export default RightPanel;
