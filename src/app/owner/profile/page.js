"use client"

import { useEffect, useState } from "react"

export default function page() {
    const [ownerData, setOwnerData] = useState("")

    const getOwnerData = async () => {
        let res = await fetch("http://localhost:3000/api/current")
        res = await res.json()
        if (res.success) {
            setOwnerData(res.result)
        }
    }
    useEffect(() => {
        getOwnerData()
    }, [])
    return (
        <div>
            <h1>This is owner profile page</h1>
            <h1>Owner:-{ownerData.name}</h1>
        </div>
    )
}
