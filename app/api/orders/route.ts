import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const userId = await getUserId(req);

    if(!userId) {
        if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const keys = await redis.keys("order:*");
    const orders = await Promise.all(keys.map(key => redis.hmget(key)));

    const userOrders = orders.filter(order => order && order.userId === userId); 
    return NextResponse.json(userOrders, { status: 200 });
}