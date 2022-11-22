import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

function useCollection(c) {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    // c being any collection, in our case it's books
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
}

export default useCollection;
