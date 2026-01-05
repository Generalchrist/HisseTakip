import { getSession } from "@/lib/auth"
import type { Metadata } from "next"
import AuthDialog from "./components/authDialog";
import MarketsChart from "@/components/chart/MarketsChart";
import { Card } from "@/components/ui/card";
import { range } from "lodash";
import { Suspense } from "react";
import { columns } from "../screener/components/columns";
import { DataTable } from "../screener/components/data-table";

export const metadata: Metadata = {
    title: "Finly: Stock screener",
    description: "Find the best stocks to buy now with the Finly stock screener.",
}
export default async function ProfilePage() {
    const session = await getSession();
    return (
        <div>
            {session ? (
                <div>

                    <p>hello</p>


                </div>
            ) : (
                <div>
                    <AuthDialog />
                </div>
            )}
        </div>
    )
}
