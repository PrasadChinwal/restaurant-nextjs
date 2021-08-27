import Navigation from '../Components/Navigation'
import Footer from "../Components/Footer";

export default function Layout({ preview, children }) {
    return (
        <>
            <div className="h-screen overflow-hidden">
                <Navigation/>
                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}