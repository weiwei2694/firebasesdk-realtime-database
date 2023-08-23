import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Firebase SDK",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <main className="max-w-4xl mx-auto py-24 px-8">{children}</main>
            </body>
        </html>
    );
}
