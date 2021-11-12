import React, { useState } from 'react';


const UiContext = React.createContext({
    modal: null,
    changeModal: () => {}
});

export const UiContextProvider = (props) => {
    const [modal, setModal] = useState(null);

    const onChangeModal = (modal) => {
        setModal(modal);
    };


    return (
        <UiContext.Provider value={{
            modal,
            onChangeModal
        }}>
            { props.children }
        </UiContext.Provider>
    )
};

export default UiContext;

