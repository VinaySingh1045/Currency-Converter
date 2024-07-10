import { useEffect, useState } from "react";

// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})

//     useEffect(async() => {
        // let res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         let resp = res.json();
//         let respo = setData(respo[currency]) 
//         console.log(data);
//     }, [currency])
    
// }

// export default useCurrencyInfo

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;
