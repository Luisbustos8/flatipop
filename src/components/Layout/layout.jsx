import React from "react";
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
            <footer>© Prueba técnica Flat 101 - 2022</footer>
        </div>
    )
};

export default Layout;