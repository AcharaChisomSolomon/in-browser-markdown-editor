import { useEffect, useState } from "react";

import { 
  createNewDocument,
  cleanDocumentName
} from "../utils/documentHelper";

function getInitialDataSync() {
  const local = localStorage.getItem("documents");
  if (local) {
    try {
      return JSON.parse(local);
    } catch {
      // fallback to null if parse fails
    }
  }
  return null;
}

export default function useGetData() {
  const [documents, setDocuments] = useState(() => getInitialDataSync());

  // Fetch data.json only if localStorage is empty
  useEffect(() => {
    if (documents === null) {
      fetch("/src/data.json")
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setDocuments(data);
        });
    }
  }, [documents]);

  // Save to localStorage on change
  useEffect(() => {
    if (documents !== null) {
      localStorage.setItem("documents", JSON.stringify(documents));
    }
  }, [documents]);

  const addNewDocument = () => {
    const newDoc = createNewDocument()
    setDocuments(docs => [newDoc, ...docs])
  };

  const updateDocument = (id, doc) => {
    const newDoc = { ...doc, name: cleanDocumentName(doc.name, doc.id)}
    setDocuments(docs => docs.map(d => d.id === id ? newDoc : d))
  };

  const deleteDocument = (id) => {
    setDocuments(docs => docs.filter(d => d.id !== id))
  };

  return [documents, setDocuments, addNewDocument, updateDocument, deleteDocument];
}
