import React from "react";
import Footer from "./footer";
import Header from "./header";

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