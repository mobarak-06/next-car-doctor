import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
const p = await params;
const servicesCollection = dbConnect(collectionNameObj.servicesCollection)
const data = await servicesCollection.findOne({_id: new ObjectId(p.id)});

return NextResponse.json(data)
}