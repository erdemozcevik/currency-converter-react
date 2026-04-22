import axios from 'axios';
import React, { useState } from 'react'
let base_url = "https://api.freecurrencyapi.com/v1/latest";
let api_key = "fca_live_M1zP3OajxlGBDh17QFZyqmcsEkSS10aaJhrJCB5K";
export default function Currency() {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, settoCurrency] = useState("TRY");
    const [result, setResult] = useState("");

    const exchange = async () => {
        const response = await axios.get(`${base_url}?apikey=${api_key}&base_currency${fromCurrency}`);
        setResult((amount * response.data.data[toCurrency]).toFixed());
    }
    return (
        <> <div className='flex justify-center flex-col items-center h-screen'>
            <h2 className=' text-white bg-[#7b3f00] w-100 text-center rounded-xl text-xl '>DÖVİZ KURU UYGULAMASI</h2>

            <div className='flex flex-row items-center justify-center border-2 p-4 rounded-lg h-50 bg-[#8e966b]'>
                <input className="border-black border-2 mr-4 w-20" type="number" id="cevrilen" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select className='mr-4 border-2' name="doviz-turu" id="doviz-turu" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <select className='border-2 mr-4' name='doviz-turu' id='sonuc-doviz' value={toCurrency} onChange={(e) => settoCurrency(e.target.value)}>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input className='border-2 border-black w-20 mr-2' type="number" id="sonuc" value={result} onChange={(E) => setResult(E.target.value)} />
                <button className='justify-center border-black rounded-xs bg-[#7b3f00] text-white cursor-pointer' onClick={exchange}>ÇEVİR</button>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}
