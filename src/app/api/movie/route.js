import movie from "@/data/movie.json"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({movie: movie})
}

export async function POST(req, res) {
  const body = await req.json()
  return NextResponse.json({movie: body})
}