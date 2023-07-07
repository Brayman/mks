import connectDB from "@/db";
import projectService from "@/server/services/project";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    await connectDB()

    try {
        const project = await projectService.getProject(params.id)
        return NextResponse.json(project)
    } catch (error) {
        console.log(error);
    }

}