import React from "react"
import InputRange from 'react-input-range';
import { Dropdown } from "react-bootstrap"

export default function Filter({
    filterByYear,
    filterByRate,
    year,
    rating,
}) {
    return (
        <div >
        <div style ={{ color:"white", width:"50%", marginTop: "40px"}}>
            <InputRange
            maxValue={2020}
            minValue={1980}
            value={year}
            onChange={(value) => filterByYear(value)}
            />
        </div>
        <div style ={{ color:"white", width:"50%", marginTop: "40px"}}>
        <InputRange
            maxValue={10}
            minValue={0}
            value={rating}
            onChange={(value) => filterByRate(value)}
            />
        </div>
        </div>
    )
}
