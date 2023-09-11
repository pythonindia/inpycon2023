async function fetchSheetData(sheetId, sheetIndex) {
  try {
    const url = `https://api-sheets-bhansa.netlify.app/.netlify/functions/fetchSheetsData?sheetId=${sheetId}&sheetIndex=${sheetIndex}`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (response.ok) {
      return await response.json();
    }
    console.error(
      `An error occurred while retrieving sheet data. Response status: ${response.status}, Status text: ${response.statusText}`
    );
    return [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export default fetchSheetData;
