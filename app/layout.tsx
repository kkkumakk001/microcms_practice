import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const revalidate = 60;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
