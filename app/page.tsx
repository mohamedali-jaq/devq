import UserCard from "./components/user-card"

// TODO: Create an array of user objects with at least 3 different users
// Each user should have all required fields from the User interface

// TODO: Implement user switching functionality
// Could use tabs, buttons, or a dropdown to switch between users

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      {/* TODO: Update this to display multiple users with switching capability */}
      <UserCard />
    </main>
  )
}
