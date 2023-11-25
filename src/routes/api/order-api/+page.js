// src/routes/[your-route]/+page.js
export async function load({ fetch }) {
    const response = await fetch('/api/order-api');
    if (response.ok) {
        const orders = await response.json();
        console.log('Orders:', orders); // Add this line to log the orders
        return { props: { orders } };
    } else {
        console.error('Failed to fetch orders');
        return { props: { orders: [] } };
    }
}
