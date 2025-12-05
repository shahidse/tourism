import { tours } from "@/data/tours";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
  try {
    
    const id = request.nextUrl.searchParams.get("id");
  
    if (!id) {
      return Response.json(tours);
    }
  
    const tour = tours.find(t => t.id == Number(id));
  
    return Response.json(tour || { error: "Tour not found" });
  } catch (error) {
    console.log('Error', error)
  }
}