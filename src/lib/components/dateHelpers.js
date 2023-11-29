// src/lib/dateHelpers.js
export function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}

export function formatDate(date) {
  return date.toLocaleDateString();
}
