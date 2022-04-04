import { useEffect, useState } from "react";


const useChart = ()=>{
    const [chardata, setChartdata] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setChartdata(data))
    },[]);
    return [chardata, setChartdata];
}
export default useChart;