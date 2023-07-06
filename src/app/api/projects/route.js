import connectDB from "@/db";
import project from "@/server/services/project";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectDB()

    const projects = await project.getProjects()

    return NextResponse.json(projects)
}