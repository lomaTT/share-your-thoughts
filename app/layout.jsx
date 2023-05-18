import React from 'react'
import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/provider'

export const metadata = {
    title: "Share your thoughts",
    description: 'Discover and share good thoughts.'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>


                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>

        </html>
    )
}

export default RootLayout