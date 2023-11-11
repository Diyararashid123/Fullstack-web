
// Function to create a post reply object
function createPostReply(comment, user, likes) {
  // Runtime checks can be added here to ensure data integrity
  return {
      comment,
      user,
      likes
  };
}

// Usage
const reply = createPostReply("Great post!", someUserObject, 100);
