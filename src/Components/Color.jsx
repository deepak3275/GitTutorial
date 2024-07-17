import From from "./From";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Color = () => {

    const [colors, setColors] = useState(new Values('#f15025').all 
    (10));

    const addColor = (color) => {
        try {
            const newColors = new Values(color).all(10);
            setColors(newColors);
        } catch (error) {
            toast.error(error.message)
        }
    }
 
    return (
        <main>
            < From addColor={addColor}/>
            < ColorList colors={colors} />
            <ToastContainer position="top-center" />
        </main>
    )
}


export default Color;