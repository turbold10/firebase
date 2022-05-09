import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const useFetchData = (path) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, path), (snapshot) => {
      const container = []
      snapshot.forEach((doc) => {
        container.push(doc.data())
      });
      setData(container);
    });
    return unsub
  }, [path])

  return {data}
}