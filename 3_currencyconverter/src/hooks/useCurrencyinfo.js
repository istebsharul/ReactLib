import { useEffect, useState } from 'react';

// Define a custom React hook called useCurrencyInfo that takes a currency parameter.
function useCurrencyInfo(currency) {
    // Initialize a state variable 'data' with an empty object.
    const [data, setData] = useState({});

    // Use the useEffect hook to perform a side effect when the 'currency' prop changes.
    useEffect(() => {
        // Send an HTTP GET request to a remote API to fetch currency data.
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) // Parse the response as JSON.
            .then((res) => setData(res[currency])); // Update the 'data' state with the fetched currency data.
    }, [currency]); // The effect runs whenever the 'currency' prop changes.

    // Log the 'data' variable to the console.
    console.log(data);

    // Return the 'data' variable as the result of the custom hook.
    return data;
}

// Export the custom hook for use in other components.
export default useCurrencyInfo;
