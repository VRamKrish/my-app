import { NextRequest, NextResponse } from "next/server";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
type usersDataType = {
  id: number;
  name: string;
};

export async function GET(request: Request) {
  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST(request: Request) {
  const data = await request.json();
  const newUser: usersDataType = { id: users.length + 1, name: data.name };
  users.push(newUser);
  return NextResponse.json(
    {
      data: newUser,
    },
    {
      status: 201,
    }
  );
}
