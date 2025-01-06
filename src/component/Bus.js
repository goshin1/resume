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
            <div id="busEntranceDetail" className="busEntranceBack"style={{"right" : "14%"}}> 
                <div style={{color : 'rgb(255,255,255)', padding : '30px', lineHeight : '200%', marginTop : '50px'}}>
                    <img style={{display : 'block'}} src={require("../imgs/bus.png")} alt="bus"/>
                    소켓을 이용한 채팅 사이트에서 채팅 방을 변경 시 렌더링 시간과 일부 컴포넌트 초기화 문제를<br/>
                    react hooks를 통해 컴포넌트 렌더링을 정리함으로써 문제를 해결해본 경험과 대학교에서<br/>
                    프론트엔드 지식 외에도 백엔드 지식과 리눅스, AWS 등 다양한 기술을 배워 실제 웹 사이트를 배포한 경험이 있습니다.
                    <a style={{marginTop : '30px', display : 'block', textDecoration : 'none', color : 'rgb(255,255,255)', verticalAlign: 'middle'}} id="githubBus" href="https://github.com/goshin1" target="_blank">
                        <img src="https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=Github&logoColor=white" alt="github"/>
                    </a>
                </div>
            </div>
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