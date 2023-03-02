import { Header } from "@/component/page/header/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>
                <Header></Header>
                {children}
            </main>
        </>
    );
}