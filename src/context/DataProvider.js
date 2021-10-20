import React, { createContext } from 'react';
import useFoods from '../Hooks/useFoods'



export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const allContexts = useFoods();

    return (
        <DataContext.Provider value={allContexts}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;