"use client"
import { useEffect, useState } from "react"

export default function Counter() {
    const targetDate = new Date("2025-09-01T00:00:00")

    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    function getTimeLeft() {
        const now = new Date()
        const difference = targetDate.getTime() - now.getTime()

        const totalSeconds = Math.max(Math.floor(difference / 1000), 0)

        const days = Math.floor(totalSeconds / (3600 * 24))
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        return { days, hours, minutes, seconds }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatDigits = (value) => value.toString().padStart(2, "0").split("")

    return (
        <div className="w-full flex flex-col items-center justify-center p-6">
            <div className="flex gap-20">
                {[
                    { label: "jours", value: timeLeft.days },
                    { label: "heures", value: timeLeft.hours },
                    { label: "minutes", value: timeLeft.minutes },
                // { label: "secondes", value: timeLeft.seconds },
                ].map((unit, index) => (
                    <div key={index} className="flex gap-4 flex-col items-center">
                        <div className="flex gap-2">
                            {formatDigits(unit.value).map((digit, i) => (
                                <div key={i} className="bg-[#9d1b24] w-fit px-4 py-8 text-6xl text-white">
                                    {digit}
                                </div>
                            ))}
                        </div>
                        <span className="text-2xl uppercase">{unit.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
