import { useState } from "react"

export const Header = () => {
    const [showPopUp, setShowPopUp] = useState(true)


    const handleListItemClick = () => {
        setShowPopUp(true)

        return (
            <div>
                yo
            </div>
        )
    }

    const handleClosePopup = () => {
        setShowPopUp(false)

    }

    return < >
        <header className="header">
            <div className="wrapper">
                <h1>TransMetroPolitan</h1>
                <ul class="authors">
                    <li onClick={handleListItemClick}>{showPopUp ? "Warren Ellis" : "Click to reveal author"}</li>
                    <li onClick={handleListItemClick}>{showPopUp ? "Darick Robertsson" : ""}</li>
                </ul>


                {showPopUp === false && (
                    <div><h2>Works made by our authors</h2>
                        <span className="oldTitles">"Back on the Street" (1997)
                            "Lust for Life" (1998)
                            "Year of the Bastard" (1998)
                            "The New Scum" (1999)
                            "Lonely City" (2000)
                            "Gouge Away" (2001)
                            "Spider's Thrash" (2002)</span>
                    </div>
                )}
                
                <div className="popUp" onClick={handleClosePopup}>
                    <h4>More titles done by our authors</h4>
                </div>
                <div className="popUp-Content"></div>
            </div>


        </header>
    </>
}