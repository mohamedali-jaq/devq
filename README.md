# React User Card Component - Coding Challenge

## Overview
Build an interactive user card component that displays user information with follow/unfollow functionality. This challenge tests your understanding of React state management, event handling, and TypeScript basics.

## Time Limit
30-45 minutes

## Starting Point
You've been provided with a basic `UserCard` component that displays static user information. Your job is to make it interactive by implementing the requirements below.

## Requirements

### Part 1: TypeScript Interface (5 min)
1. Create a proper `User` interface with these fields:
   - `id`: number
   - `name`: string
   - `email`: string
   - `bio`: string
   - `avatar`: string (URL)
   - `stats`: object with `projects`, `followers`, `following` (all numbers)
   - `isFollowing`: boolean

2. Update the `UserCardProps` to properly type the `user` prop

### Part 2: Follow/Unfollow Feature (20 min)
3. Implement state management for the follow functionality:
   - Track whether the user is being followed
   - Track the current follower count

4. Create a Follow/Unfollow button that:
   - Shows "Follow" when not following (blue background)
   - Shows "Following" when following (gray background)
   - Updates the follower count (+1 when following, -1 when unfollowing)
   - Toggles between states on click

### Part 3: Bio Editing (15 min)
5. Add an "Edit" button next to the "About" heading

6. Implement bio editing functionality:
   - Clicking "Edit" shows a textarea with the current bio
   - Display "Save" and "Cancel" buttons in edit mode
   - "Save" updates the bio and exits edit mode
   - "Cancel" discards changes and exits edit mode

### Bonus (Optional)
- Add hover effects to buttons
- Disable the Save button if bio is empty
- Add a character counter for the bio (max 280 characters)
- Add smooth transitions between states

## Evaluation Criteria
- **Functionality** (40%): All features work correctly
- **React Patterns** (30%): Proper use of useState and event handlers
- **TypeScript** (15%): Correct type definitions
- **Code Quality** (15%): Clean, readable code with good naming

## Tips
- Start with the TypeScript interface to understand the data structure
- Implement one feature at a time and test as you go
- Remember: state updates are asynchronous
- Use the TODO comments in the code as a guide

Good luck!
