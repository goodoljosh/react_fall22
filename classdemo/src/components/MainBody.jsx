//create a functional component with hooks
import React, { useState } from "react";

function MainBody() {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
     < div >
     
     </div >

    )
}

export default MainBody;