import { useContext } from "react";
import './App.css'
import WrkoutConditions from "./conditions";
import ReturnBtn from "./returnbtn";

function ShowVictory(){
    const wkroutInfo = useContext(WrkoutConditions)
    return (
        <main style={{textAlign:'center'}}>
            <h1>Victory!</h1>

            <ReturnBtn onClick={ () => wkroutInfo.setShowVictory(false)}/>

        </main>
    );
}

export default ShowVictory;