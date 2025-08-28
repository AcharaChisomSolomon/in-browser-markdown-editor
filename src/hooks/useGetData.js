import { useEffect, useState } from "react";

// Helper to get initial data from localStorage or fallback to data.json
async function fetchInitialData() {
  const local = localStorage.getItem("markdown-documents");
  if (local) {
    try {
      return JSON.parse(local);
    } catch {
      // fallback to data.json if parse fails
    }
  }
  // fallback: fetch data.json
  const resp = await fetch("/src/data.json");
  return await resp.json();
}

export default function useGetData() {
  const [documents, setDocuments] = useState(null);

  // Load data on mount
  useEffect(() => {
    let mounted = true;
    fetchInitialData().then((data) => {
      if (mounted) setDocuments(data);
    });
    return () => { mounted = false; };
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (documents) {
      localStorage.setItem("markdown-documents", JSON.stringify(documents));
    }
  }, [documents]);

  const addNewDocument = () => {

  }

  const updateDocuments = () => {

  }

  const deleteDocuments = () => {

  }

  return [documents, addNewDocument, updateDocuments, deleteDocuments];
}
