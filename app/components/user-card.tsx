"use client"

// TODO: Define a proper User interface with TypeScript
// Should include: id, name, email, bio, avatar, stats (projects, followers, following), isFollowing

interface UserCardProps {
  // TODO: Add proper prop types here
  user?: any
}

export default function UserCard({ user }: UserCardProps) {
  // TODO: Remove this fallback data once props are properly implemented
  const fallbackUser = {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    bio: "Full-stack developer passionate about building great user experiences. Love React, TypeScript, and coffee.",
    avatar: "/professional-headshot.png", // Why is this returning 404?????
    stats: {
      projects: 42,
      followers: 1250,
      following: 180,
    },
    isFollowing: false,
  }

  const userData = user || fallbackUser

  // TODO: Add state for tracking if user is followed (hint: use useState)
  // TODO: Add state for tracking current follower count
  // TODO: Add state for tracking if bio is being edited (isEditing)
  // TODO: Add state for tracking the edited bio text (editedBio)

  // TODO: Implement handleFollow function
  // Should toggle follow state and update follower count (+1 or -1)

  // TODO: Implement handleEditBio function
  // Should set isEditing to true and initialize editedBio with current bio

  // TODO: Implement handleSaveBio function
  // Should update the bio and set isEditing to false

  // TODO: Implement handleCancelEdit function
  // Should set isEditing to false without saving changes

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={userData.avatar || "/placeholder.svg"}
          alt={`${userData.name} avatar`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-3xl mb-1 text-gray-900">{userData.name}</h2>
          <p className="text-gray-600 text-base">{userData.email}</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl text-gray-800">About</h3>
          {/* TODO: Add Edit button here (only show when NOT editing) */}
        </div>

        {/* TODO: Show textarea when editing, otherwise show bio text */}
        <p className="text-gray-600 leading-relaxed text-base">{userData.bio}</p>

        {/* TODO: Add Save and Cancel buttons here (only show when editing) */}
      </div>

      <div className="flex justify-between mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-center min-w-20">
          <span className="block text-2xl font-bold text-gray-800">{userData.stats.projects}</span>
          <span className="text-sm text-gray-600 uppercase tracking-wide">Projects</span>
        </div>
        <div className="text-center min-w-20">
          {/* TODO: Update this to use your follower count state */}
          <span className="block text-2xl font-bold text-gray-800">{userData.stats.followers}</span>
          <span className="text-sm text-gray-600 uppercase tracking-wide">Followers</span>
        </div>
        <div className="text-center min-w-20">
          <span className="block text-2xl font-bold text-gray-800">{userData.stats.following}</span>
          <span className="text-sm text-gray-600 uppercase tracking-wide">Following</span>
        </div>
      </div>

      {/* TODO: Replace this with Follow/Unfollow button */}
      {/* When NOT following: blue background (bg-blue-600), text "Follow" */}
      {/* When following: gray background (bg-gray-400), text "Following" */}
      <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-md text-base font-medium cursor-pointer transition-colors hover:bg-blue-700">
        Follow
      </button>
    </div>
  )
}
