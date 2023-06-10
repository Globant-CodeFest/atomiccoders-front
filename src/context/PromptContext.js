import { createContext, useState } from "react";

export const PromptContext = createContext({
    chat:[],
    selectPlayers:[],

});

export function PromptProvider(props){
    const {children} = props;
    const [chat, setChat] = useState([]);
    const [selectPlayers, setSelectPlayers] = useState([]);

    const addChat = (newChat) => {
        setChat( newChat)
    }

    const addPlayers = (newPlayers) => {
        setSelectPlayers([...selectPlayers, newPlayers])
    }

    const valueContext = {
        chat,
        selectPlayers,
        addChat,
        addPlayers
    }

    return(
        <PromptContext.Provider value={valueContext} >
            {children}
        </PromptContext.Provider>
    )
}
