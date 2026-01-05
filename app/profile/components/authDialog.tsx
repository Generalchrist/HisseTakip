import {
    Command,
    CommandDialog,
} from "@/components/ui/command"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import { login } from "@/lib/auth"

export default async function AuthDialog() {
    return (
        <div>
            <Command>
                <CommandDialog open={true}>
                    <Card>
                        <CardHeader >
                            <p>Login or Register</p>
                        </CardHeader>
                        <CardContent>
                            <form
                                action={async (formData) => {
                                    "use server";
                                    await login(formData);
                                    redirect("/profile")
                                }}
                            >
                                <input
                                    className="my-5 p-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Enter your mail"
                                    type="email"
                                    name="email"
                                />
                                <input
                                    className="my-5 p-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Enter your password"
                                    type="password"
                                    name="password"
                                />

                                <Button
                                    type="submit"
                                    variant="outline"
                                    size="sm"
                                    className="ml-auto hidden h-8 lg:flex"
                                >
                                    <CheckIcon className="mr-2 h-4 w-4" />
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </CommandDialog>
            </Command>
        </div>
    )
}