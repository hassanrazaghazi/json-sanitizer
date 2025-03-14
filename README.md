# Sensitive Data Removal Script

This Node.js script reads a JSON file, recursively removes sensitive data (like `nickname`, `email`, `name`, `dob`, etc.), and logs the cleaned object to the console. The script is flexible, handling both string and object formats for the input data.

## Features

- **Flexible JSON Parsing**: Handles cases where the input data is either a JSON string or a parsed JSON object.
- **Recursive Data Cleaning**: Recursively cleans sensitive data, even in deeply nested JSON objects.
- **Logs Cleaned Data**: After processing, it logs the cleaned JSON object to the console.

## Sensitive Data Fields

The following fields will be removed if found in the input JSON object:
- `nickname`
- `email`
- `name`
- `dob` (date of birth)
- `phone`
- `gender`
- `profession`
- `about`
- `street_name`
- `house_number`
- `zip_code`
- `country_code`
- `city`
- `country`

## Installation

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed.

### Steps

1. Clone the repository or download the script file.
2. Make sure you have a JSON file named `Untitled-1.json` in the same directory as the script (or modify the file path accordingly).
3. Install the dependencies (if any):
    ```bash
    npm install
    ```

## Usage

To run the script:

1. Open a terminal or command prompt.
2. Navigate to the folder where the script is saved.
3. Run the script using Node.js:
    ```bash
    node index.js
    ```

If your `Untitled-1.json` file is correctly formatted, the script will clean the sensitive data and print the cleaned JSON object to the console.

## Example Input (JSON String)

If the input file `Untitled-1.json` contains data in string format (like this):

"{\"inner_level_1\":{\"inner_level_2\":{\"inner_level_3\":{\"inner_level_4\":{\"inner_level_5\":{\"dob\":\"2025-03-06\",\"name\":\"John Doe\",\"email\":\"john.doe@example.com\",\"phone\":\"1234567890\",\"profession\":\"Developer\"}}}}}}}"
