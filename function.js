window.function = function(dates, id_bdm, id_assignment, created_user_id, created_timestamp) {
  // Parse the dates string into an array
  const dateArray = JSON.parse(dates.value);

  // Base JSON structure
  const baseJSON = {
    kind: "add-row-to-table",
    tableName: "native-table-GJibWrVsdDnW304S3LLx",
    columnValues: {}
  };

  // String to accumulate the results
  let resultString = "";

  // Populate the JSON for each date
  dateArray.forEach((date, index) => {
    const entry = JSON.parse(JSON.stringify(baseJSON));
    entry.columnValues = {
      vjxUn: date,
      WKlsd: id_bdm.value,
      v4IGY: id_assignment.value,
      eyKF6: created_user_id.value,
      FqyMp: created_timestamp.value
    };

    // Append the entry to the result string, adding a comma if it's not the last entry
    resultString += JSON.stringify(entry);
    if (index !== dateArray.length - 1) {
      resultString += ",";
    }
  });

  // Return the final compact string
  return resultString;
};