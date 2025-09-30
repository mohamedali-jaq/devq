"use client"

import UserCard from "./components/UserCard"

export default function Home() {
  return (
    <main className="container">
      <h1>Developer Challenge</h1>
      <p>Welcome to our coding challenge! Fix the desktop layout issues and linting error's.</p>
      <UserCard />

      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          height: 400px;
          overflow: hidden;
          position: relative;
        }
        
        .container h1 {
          font-size: 32px;
          margin-bottom: 8px;
          color: #1a1a1a;
        }
        
        .container p {
          color: #666;
          margin-bottom: 20px;
          font-size: 18px;
        }
      `}</style>
    </main>
  )
}
