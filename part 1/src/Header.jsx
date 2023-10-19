import { useEffect } from "react";
function Header({title}){
    
    useEffect(()=>document.title={title})
}

export default Header;