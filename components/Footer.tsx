import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
            <p>
                Developed by{" "}
                <a
                    href="https://adilc0070.site"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                >
                    Adil
                </a>
            </p>
        </footer>
    )
}

export default Footer