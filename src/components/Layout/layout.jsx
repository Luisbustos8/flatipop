import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header {...props} />
            <main>
                <section>
                    {children}
                </section>
            </main>
            <Footer />
        </div>
    )
};

export default Layout;