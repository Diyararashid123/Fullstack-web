// src/routes/[your-route]/+page.js
export async function load({ fetch, locals }) {
  // Ensure the user is authenticated
  const session = await locals.auth.validate();
  if (!session) {
      return { status: 302, redirect: '/login' };
  }

  // Fetch orders for the logged-in user
  const response = await fetch(`/api/order-api?userId=${session.user.userId}`);
  if (response.ok) {
      const orders = await response.json();
      return { props: { orders } };
  } else {
      console.error('Failed to fetch orders');
      return { props: { orders: [] } };
  }
}
