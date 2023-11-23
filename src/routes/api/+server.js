

let data = {record: {email:"test12@gmail.com"}};

export async function GET() {
  let data = { record: { email: "test12@gmail.com" } };

  return new Response(JSON.stringify({
      status: 200,
      data,
  }), {
      headers: {
          'Content-Type': 'application/json'
      }
  });
}




export async function POST(request) {
    const req = await request.json();
    data = req;

    return new Response(JSON.stringify({
        status: 200,
        data,
        message: "Data has been updated"
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
