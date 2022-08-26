import React, { useState, createContext } from "react";

// Create Context Object
export const TerminalCommandsContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const TerminalCommandsContextProvider = props => {
    const [terminalCommands, setTerminalCommands] = useState("");
    const [selectedTheme, setSelectedTheme] = useState("terminal");

    return (
        <TerminalCommandsContext.Provider value={{
            terminalProvider: [terminalCommands, setTerminalCommands],
            themeProvider: [selectedTheme, setSelectedTheme]
        }}>
            {props.children}
        </TerminalCommandsContext.Provider>
    );
};
