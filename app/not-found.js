import Image from "next/image";

//page not found component
const notfound = () => {
    return (
        <div style={{ minHeight: "100vh", paddingTop: '5rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: "3rem" }} className="highlight">Page not found</h1>
            <Image src="/assets/404.png" height="300" width="300" alt="not-found" />
        </div>
    );
};

export default notfound;