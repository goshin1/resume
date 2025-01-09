import "./busInner.css"

export default function BusInner(){
    const handleEvent = (event) => {
        if(event.currentTarget.parentNode.style.height === "28%"){
            event.currentTarget.parentNode.style.height = "25%";
        }else{
            event.currentTarget.parentNode.style.height = "28%";
        }
    }


    return <div id="busInner">
        
        <div id="innerTop">
            <div className="innerShadow"></div>
            <div className="innerHandle">
                <div className="handleBar" style={{marginLeft : "10%"}}>
                    <div className="handle" style={{borderColor : "rgb(201, 50, 50)"}} onMouseOver={handleEvent}>
                        <div className="handleShadow" style={{borderColor : "rgb(153, 46, 46)"}}></div>
                    </div>
                </div>
                <div className="handleBar" style={{marginLeft : "25%"}}>
                    <div className="handle" style={{borderColor : "rgb(63, 201, 50)"}} onMouseOver={handleEvent}>
                        <div className="handleShadow" style={{borderColor : "rgb(50, 153, 46)"}}></div>
                    </div>
                </div>
                <div className="handleBar" style={{marginLeft : "40%"}}>
                    <div className="handle" style={{borderColor : "rgb(50, 98, 201)"}} onMouseOver={handleEvent}>
                        <div className="handleShadow" style={{borderColor : "rgb(46, 62, 153)"}}></div>
                    </div>
                </div>
                <div className="handleBar" style={{marginLeft : "55%"}}>
                    <div className="handle" style={{borderColor : "rgb(128, 50, 201)"}} onMouseOver={handleEvent}>
                        <div className="handleShadow" style={{borderColor : "rgb(96, 46, 153)"}}></div>
                    </div>
                </div>
                <div className="handleBar" style={{marginLeft : "70%"}}>
                    <div className="handle" style={{borderColor : "rgb(183, 50, 201)"}} onMouseOver={handleEvent}>
                        <div className="handleShadow" style={{borderColor : "rgb(153, 46, 144)"}}></div>
                    </div>
                </div>
                <div className="handleBar" style={{marginLeft : "85%"}}>
                    <div className="handle" style={{borderColor : "rgb(201, 198, 50)"}} onMouseOver={handleEvent}>
                        <div className="handleShadow" style={{borderColor : "rgb(153, 128, 46)"}}></div>
                    </div>
                </div>
            </div>
        </div>


        <div id="innerWindows">
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
            <div className="innerWindowFrame"></div>
        </div>

        <div id="innerBottom">
            <div id="selfDetail">
                <div style={{width : "49%", height : "100%", float : "left"}}>
                    <div className="detailBlock">
                        <h3>Name</h3>
                        고신원
                    </div>
                    <div className="detailBlock">
                        <h3>Contact</h3>
                        Email : gci787@naver.com<br/>
                        Phone : 010-4338-4430
                    </div>
                    <div className="detailBlock">
                        <h3>Education</h3>
                        동양미래대학교 컴퓨터소프트웨어공학과 2020.03 ~ 2025.02<br/>
                        세명컴퓨터고등학교 스마트콘텐츠과 2017.03 ~ 2020.02
                    </div>
                    <div className="detailBlock">
                        <h3>License</h3>
                        웹디자인기능사 2019.07.12<br/>
                        컴퓨터웹그래픽스기능사 2019.04.26<br/>
                        정보처리기능사 2017.12.27<br/>
                        그래픽기술자격 GTQ 1급 2017.08.11
                    </div>
                </div>
                <div style={{width : "49%", height : "100%", float : "right"}}>
                    <div className="stack">
                        <h2>Stack</h2>
                        <div>
                            <h3>Strong</h3>
                            <img src="https://img.shields.io/badge/Html5-e22121?style=for-the-badge&logo=Html5&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Css3-2089eb?style=for-the-badge&logo=Css3&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Javascript-eba420?style=for-the-badge&logo=Javascript&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/JAVA-000000?style=for-the-badge&logo=Java%20IDEA&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/React-2185e2?style=for-the-badge&logo=React&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Mysql-255bcf?style=for-the-badge&logo=Mysql&logoColor=white" alt="stack"/>
                        </div>
                        <div>
                            <h3>Knowledgeable</h3>
                            <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Postgresql-234da8?style=for-the-badge&logo=Postgresql&logoColor=white" alt="stack"/>
                        </div>
                        <div>
                            <h3>Tools</h3>
                            <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Eclipse-17249b?style=for-the-badge&logo=Eclipse&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Adobe Photoshop-31A8FF?style=for-the-badge&logo=Adobe Photoshop&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Adobe Illustrator-FF9A00?style=for-the-badge&logo=Adobe Illustrator&logoColor=white" alt="stack"/>
                            <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=Github&logoColor=white" alt="stack"/>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
}