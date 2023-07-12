import movie from "@/data/movie.json"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({movie: movie})
}

export async function POST() {
  return NextResponse.json({messeage: "hello World"})
}