export function convertDateToString(dateStr) {
  // input -  "04-01-2022"
  // output - "01 April 2022"
  if (!dateStr) return '';
  const [month, day, year] = dateStr.split('-');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthIndex = parseInt(month, 10) - 1;
  return `${day} ${monthNames[monthIndex]} ${year}`;
}

export function generateDate() {
  // output - current date in the form "04-01-2022"
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${month}-${day}-${year}`;
}

export function generateId() {
  // return a number/value to identify each doc uniqely
  return Math.ceil(Math.random() * 100000000)
}

export function createNewDocument() {
  // output {id: generateId, name: untitled-document{id}.md, content: "", createdAt: generateDate()}
  const newId = generateId()
  return {
    id: newId,
    createdAt: generateDate(),
    name: `new-doc${newId}.md`,
    content: "# Please fill me up"
  }
}

export function getDocument(documents, id) {
  return documents.find(doc => doc.id === id)
}

export function cleanDocumentName(name, id) {
  if (name.endsWith('.md')) {
    if (name.length > 3) {
      return name
    }
  }

  if (!name.includes('.md') && name !== '') {
    return `${name}.md`
  }

  return `doc-${id}.md`
}