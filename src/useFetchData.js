import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const useFetchData = (col) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fbdata = async () => {
            const querySnapshot = await onSnapshot(collection(db, col));
            const data = querySnapshot.forEach((doc) => {
                return {...doc.data(), id: doc.id }
            });
            setData(data);
        }
        fbdata()
    }, [])
    
    return data
}