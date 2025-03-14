const fs = require('fs');

// Load the JSON file
fs.readFile('./Untitled-1.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Function to safely parse a JSON string or return the object if it's already parsed
  function parseJsonIfNeeded(input) {
    if (typeof input === 'string') {
      try {
        return JSON.parse(input); // Try to parse if it's a string
      } catch (error) {
        console.error("Error parsing JSON string: ", error);
        return null;
      }
    }
    return input; // Return as-is if it's already an object
  }

  // Try to parse the data (whether string or already JSON object)
  const myObject = parseJsonIfNeeded(data);

  if (!myObject) {
    console.error("Invalid JSON format or error parsing data.");
    return;
  }

  // Fields to remove
  const keysToRemove = [
    'nickname', 'email', 'name', 'dob', 'phone', 'gender', 
    'profession', 'about', 'street_name', 'house_number', 
    'zip_code', 'country_code', 'city', 'country'
  ];

  // Function to remove sensitive data
  function removeSensitiveData(obj, keysToRemove) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (keysToRemove.includes(key)) {
          delete obj[key]; // Remove the key
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          // Recursively process nested objects
          removeSensitiveData(obj[key], keysToRemove);
        }
      }
    }
    return obj;
  }

  // Clean the main object by removing sensitive data
  const cleanedObject = removeSensitiveData(myObject, keysToRemove);

  // Now handle the 'data' field which might be a string or object
  if (cleanedObject.config && cleanedObject.config.data) {
    // If 'data' is a string, parse it. If it's already an object, just use it.
    const dataObject = parseJsonIfNeeded(cleanedObject.config.data);
    
    // Clean the 'data' object if it's not null
    if (dataObject) {
      removeSensitiveData(dataObject, keysToRemove);
      
      // Replace the cleaned 'data' object back into the config
      cleanedObject.config.data = JSON.stringify(dataObject);
    }
  }

  // Log the cleaned object
  console.log("cleaned object is: ", JSON.stringify(cleanedObject, null, 2));

});
