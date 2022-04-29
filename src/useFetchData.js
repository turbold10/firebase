import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const useFetchData = (col) => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        const unsub = onSnapshot(collection(db, col), (snapShot) => {
          const data = snapShot.docs.map((doc) => {
            return { ...doc.data()};
          });
    
          setData(data);
        });
        return unsub()
    })  
    return data
}