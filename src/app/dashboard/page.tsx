'use client'
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    const handleLogout = () => {
        router.push('/')

    }

    return (
        <div>
            <h1>Welcome to dashboard</h1>
            <button onClick={handleLogout}> Logout </button>
        </div>

    )
}