import "./bus.css"
export default function Bus(){

    return <div id="bus">
        <div className="busTop">
            <div className="busTopLight"></div>
        </div>
        <div className="busMiddle">
            <div className="window">
                <div className="windowLight"></div>
            </div>
            <div className="window">
                <div className="windowLight"></div>
            </div>
            <div className="busEntrance" style={{"left" : "25%"}}>
                <div className="windowLight"></div>
            </div>
            <div className="busEntrance" style={{"left" : "35%"}}>
                <div className="windowLight"></div>
            </div>
            <div className="window">
                <div className="windowLight"></div>
            </div>
            <div className="window">
                <div className="windowLight"></div>
            </div>
            <div className="window">
                <div className="windowLight"></div>
            </div>
            <div className="busEntranceBack"style={{"right" : "14%"}}> </div>
            <div className="busEntrance" id="entrance">
                <div className="windowLight"></div>
            </div>
            <div className="windowFront">
                <div className="windowLight"></div>
            </div>
        </div>
        <div className="busBottom">

            <div className="busLight">
                <div className="lightTop"></div>
            </div>

            <div className="busWheel" style={{"left" : "10%"}}>
                <div className="wheel">
                    <div className="wheelInner"></div>
                </div>
            </div>

            <div className="busWheel" style={{"left" : "64.5%"}}>
                <div className="wheel">
                    <div className="wheelInner"></div>
                </div>
            </div>

            <div className="busLight" style={{"right" : "0"}}>
                <div className="lightTop"></div>
            </div>
            
        </div>
    </div>
}