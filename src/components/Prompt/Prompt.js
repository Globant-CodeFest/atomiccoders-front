import { useState, useEffect } from "react";
export function Prompt(){

    const [userPrompt, setUserPrompt] = useState("")
    useEffect(
    () => {
        console.log(userPrompt)
    }, 
    [userPrompt]
    )
    return(
        <form>
            <div>
            <label>Cuentanos sobre tu expectativa en el mercado de pases</label>
            </div>
            <div>
            <input 
                type="text"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Describe la posicion que quieres reforzar en tu equipo y tu presupuesto"
            />
            </div>
        </form>
    )
}