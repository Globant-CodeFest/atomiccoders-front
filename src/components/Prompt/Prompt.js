import { useState, useEffect, useContext } from "react";
import useChat from "../../hooks/useChat";
import { Button } from "reactstrap";
import axios from "axios";

import './styles.css'

export function Prompt(){
    const {chat, addChat} = useChat()
    const [userPrompt, setUserPrompt] = useState("")
    // useEffect(
    // () => {
    // }, 
    // [userPrompt])

    const submitPrompt = async (e) => {
        e.preventDefault()
        const req = await axios.get(
            `http://127.0.0.1:5000/api/v1/guru-pront?client-question=${userPrompt}`,
        )  
       addChat(req.data)      
    }
    return(
        <div
            className="prompt-container"
        >
            <form
                className="form__prompt-container"
            onSubmit={submitPrompt}
            >
                <div>
                <label>
                Describe que tipo de jugador buscas y el presupuesto disponible
                </label>
                </div>
                <div>
                <textarea
                    className="textarea__form"
                    rows={5}
                    type="text"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder="Describe que tipo de jugador buscas y el presupuesto disponible"
                />
                <div
                className="submit-container__form"
                >
                    <Button>
                        Enviar
                    </Button>
                </div>
                </div>
            </form>
        </div>
    )
}