import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import './styles.css'

export function Prompt(){

    const [userPrompt, setUserPrompt] = useState("")
    useEffect(
    () => {
        console.log(userPrompt)
    }, 
    [userPrompt])

    const submitPrompt = async (e) => {
        e.preventDefault()
        const req = await axios.post(
            'https://globant-challenge.free.beeceptor.com',
            {
                prompt: userPrompt
            }
        )
        const resp = await req.data
        if (resp.data) {

        }

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
                <label>Cuentanos sobre tu expectativa en el mercado de pases</label>
                </div>
                <div>
                <textarea
                    className="textarea__form"
                    rows={5}
                    type="text"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder="Describe la posicion que quieres reforzar en tu equipo y tu presupuesto"
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