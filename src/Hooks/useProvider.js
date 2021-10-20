import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const useProvider = () => {
    return useContext(DataContext)
}
export default useProvider