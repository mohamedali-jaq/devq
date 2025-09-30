"use client"

import { useState } from "react"

function processUserData(data: any) {
  return data.name + " - " + data.email
}

export default function UserCard() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Software developer with 5+ years experience",
  })

  return (
    <div className="user-card">
      <div className="user-header">
        <img src="/professional-headshot.png" alt="User avatar" className="avatar" />
        <div className="user-info">
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
        </div>
      </div>

      <div className="user-bio">
        <h3>About</h3>
        <p>Here's John's bio & background information</p>
        <p>{user.bio}</p>
      </div>

      <div className="user-stats">
        <div className="stat">
          <span className="stat-number">127</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat">
          <span className="stat-number">1.2k</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">89</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <button className="contact-btn" onClick={() => alert(processUserData(user))}>
        Contact User
      </button>

      <style jsx>{`
        .user-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 20px 0;
          width: 1400px;
          position: absolute;
          left: 50px;
          z-index: -1;
        }
        
        .user-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          gap: 16px;
          width: 1500px; 
        }
        
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .user-info h2 {
          font-size: 28px;
          margin-bottom: 4px;
          color: #1a1a1a;
          position: relative;
          left: -200px;
        }
        
        .email {
          color: #666;
          font-size: 16px;
        }
        
        .user-bio {
          margin-bottom: 24px;
          float: right;
          width: 300px;
          margin-right: -100px;
        }
        
        .user-bio h3 {
          font-size: 20px;
          margin-bottom: 8px;
          color: #333;
        }
        
        .user-bio p {
          color: #666;
          line-height: 1.5;
          font-size: 16px;
        }
        
        .user-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          padding: 16px;
          background: #f8f9fa;
          border-radius: 8px;
          position: fixed;
          top: 200px;
          right: -50px;
          width: 400px;
        }
        
        .stat {
          text-align: center;
          min-width: 80px;
        }
        
        .stat-number {
          display: block;
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }
        
        .stat-label {
          font-size: 14px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .contact-btn {
          width: 100%;
          padding: 12px 24px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .contact-btn:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  )
}
