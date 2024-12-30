import "./platform.css"
import { useEffect, useState } from "react";
import uuid from "react-uuid";

export default function Platform(){
    const subwayDoorLeft = document.getElementById("subwayDoorLeft");
    const subwayDoorRight = document.getElementById("subwayDoorRight");
    const windowLeft = document.getElementById("windowLeft");
    const windowRight = document.getElementById("windowRight");
    const projectDetail = document.getElementById("projectDetail");



    function slideAnimation(){
        projectDetail.style.animation = "none";
        subwayDoorLeft.style.animation = "none";
        subwayDoorRight.style.animation = "none";
        windowLeft.style.animation = "none";
        windowRight.style.animation = "none";

        setTimeout(() => {
            projectDetail.style.animation = "projectNext 3s 1 forwards ease-in";
            subwayDoorLeft.style.animation = "subwayNextLeft 3s 1 forwards ease-in";
            subwayDoorRight.style.animation = "subwayNextRight 3s 1 forwards ease-in";
            windowLeft.style.animation = "platformNextLeft 3s 1 forwards ease-in";
            windowRight.style.animation = "platformNextRight 3s 1 forwards ease-in";
        }, 100);
        
    }

    const [num, setNum] = useState(1);
    const [slideNum, setSlideNum] = useState(0);
    const [detailImage, setDetailImage] = useState('none');
    const [isRunning, setIsRunning] = useState(true);

    const imgs = [
        [
            require('../imgs/depatorium/login.png'),
            require('../imgs/depatorium/main.png'),
            require('../imgs/depatorium/project_join_create.png'),
            require('../imgs/depatorium/chat.png'),
            require('../imgs/depatorium/leader_work_detail.png')
        ],
        [
            require('../imgs/chatpress/login.png'),
            require('../imgs/chatpress/main.png'),
            require('../imgs/chatpress/rooms.png'),
            require('../imgs/chatpress/document_image.png'),
            require('../imgs/chatpress/document_report.png')
        ],
        [
            require('../imgs/abc/login.PNG'),
            require('../imgs/abc/main_black.PNG'),
            require('../imgs/abc/word_edit.PNG'),
            require('../imgs/abc/setting.PNG'),
            require('../imgs/abc/word_fill.PNG')
        ],
        [
            require('../imgs/universocial/main.PNG'),
            require('../imgs/universocial/board.PNG'),
            require('../imgs/universocial/calculter.PNG'),
            require('../imgs/universocial/message.PNG'),
            require('../imgs/universocial/admin.PNG')
        ],
        [
            require('../imgs/disease/home.PNG'),
            require('../imgs/disease/home-header.gif'),
            require('../imgs/disease/home-responsive.gif'),
            require('../imgs/disease/mise.gif'),
            require('../imgs/disease/ondo.gif')
        ]
    ]

    let project_info = [
        {
            title : "Depatorium - 교내 경진대회",
            content : <>
                <h3>Puropose</h3>
                비대면업무가 늘어난 현재, 다양한 협업 프로그램을 사용하여<br/>
                의사소통을 진행하다보니 혼선을 가져오는 경우가 많았습니다.<br/>
                해당 프로젝트는 이러한 문제를 해결하기위해 업무간의 관계를 표현 및 반려, 승인 기능을 
                제공하여 원할한 소통을 위해 제작하였습니다.
                <h3>Function</h3>
                <ul>
                    <li>팀원간의 실시간 대화</li>
                    <li>직급별 권한 부여</li>
                    <li>Spring Security를 통한 보안 강화</li>
                    <li>업무 배정 및 반려, 승인 페이지를 통한 업무 공유</li>
                </ul>
                <h3>Stack</h3>
            </>,
            stack : [
                <img src="https://img.shields.io/badge/Html5-e22121?style=for-the-badge&logo=Html5&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Css3-2089eb?style=for-the-badge&logo=Css3&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Javascript-eba420?style=for-the-badge&logo=Javascript&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/React-2185e2?style=for-the-badge&logo=React&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/JAVA-000000?style=for-the-badge&logo=Java%20IDEA&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Mysql-255bcf?style=for-the-badge&logo=Mysql&logoColor=white" key={uuid()}/>
                            
            ],
            github : "https://github.com/goshin1/Depatorium",
            link : "https://goshin1.github.io/depademo/"
        },
        {
            title : "Chatpress - 개방형 클라우드 플랫폼(K-PaaS) 기반 서비스 개발·아이디어 공모전 참여",
            content : <>
                <h3>Puropose</h3>
                평소 문서 프로그램을 사용하게 되는 경우가 많습니다.이력서를 작성하거나,<br/>
                보고서를 수정하거나, 또는 공지사항을 확인하기 위해 사용합니다.<br/>
                하지만, 상대방과 같은 프로그램을 써야 된다는 점으로 인해 다양한 문서 프로그램을 사용하게 되었습니다.<br/>
                이러한 불편함을 해결하고자 어디서든 사용할 수 있는 웹을 통해 문서 작성 사이트를 제작하게 되었습니다.
                <h3>Function</h3>
                <ul>
                    <li>문서 작성 및 편집, 공유 기능</li>
                    <li>실시간 대화 기능</li>
                    <li>메일을 통한 본인 인증</li>
                    <li>Spring Security를 통한 보안 강화</li>
                </ul>
                <h3>Stack</h3>
            </>,
            stack : [
                <img src="https://img.shields.io/badge/Html5-e22121?style=for-the-badge&logo=Html5&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Css3-2089eb?style=for-the-badge&logo=Css3&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Javascript-eba420?style=for-the-badge&logo=Javascript&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/React-2185e2?style=for-the-badge&logo=React&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/JAVA-000000?style=for-the-badge&logo=Java%20IDEA&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Mysql-255bcf?style=for-the-badge&logo=Mysql&logoColor=white" key={uuid()}/>
            ],
            github : "https://github.com/goshin1/ChatPress_Front",
            link : "https://goshin1.github.io/chatpressdemo/"
        },
        {
            title : "영어단어정복 ABC - 개인 프로젝트",
            content : <>
                <h3>Puropose</h3>
                영어를 공부하려는데 사용하려는 애플리케이션이 웬만해서는 유료였고<br/> 
                돈을 지불하고 사용하기에는 구독료가 부담이 되었기에 직접 만들어서<br/>
                사용해볼까 라는 생각이 들게 되었고 제작에 임하게 되었습니다.
                <h3>Function</h3>
                <ul>
                    <li>회원별 영어 단어장 지원</li>
                    <li>단어 저장, 수정, 삭제, 조회</li>
                    <li>음성 및 음성 속도 조정</li>
                    <li>단어 학습용 게임 지원</li>
                </ul>
                <h3>Stack</h3>
            </>,
            stack : [
                <img src="https://img.shields.io/badge/Html5-e22121?style=for-the-badge&logo=Html5&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Css3-2089eb?style=for-the-badge&logo=Css3&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Javascript-eba420?style=for-the-badge&logo=Javascript&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/React-2185e2?style=for-the-badge&logo=React&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Postgresql-234da8?style=for-the-badge&logo=Postgresql&logoColor=white" key={uuid()}/>
            ],
            github : "https://github.com/goshin1/english_total",
            link : "https://goshin1.github.io/englishdemo/"
        },
        {
            title : "Universocial - 팀 프로젝트",
            content : <>    
                <h3>Puropose</h3>
                코로나로 인해 강의가 비대면으로 시행하게 되면서 수업을 이해하는데에<br/>
                어려움을 겪는 학생들이 늘어나게 되었습니다. 또한 학생들이 수업을 듣는 시간이<br/>
                자유로워져 교수님들에게 질문을 하게 되어도 빠른 답변을 받기 힘들었습니다.<br/>
                이러한 문제를 해결하고자 정보의 장이 되어줄 사이트를 기획하게 되었습니다.
                <h3>Function</h3>
                <ul>
                    <li>전공/교양 게시판을 통한 의사소통 지원</li>
                    <li>메신저 기능</li>
                    <li>학점 계산기</li>
                    <li>관리자 페이지</li>
                </ul>
                <h3>Stack</h3>
            </>,
            stack : [
                <img src="https://img.shields.io/badge/Html5-e22121?style=for-the-badge&logo=Html5&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Css3-2089eb?style=for-the-badge&logo=Css3&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Javascript-eba420?style=for-the-badge&logo=Javascript&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/JAVA-000000?style=for-the-badge&logo=Java%20IDEA&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Mysql-255bcf?style=for-the-badge&logo=Mysql&logoColor=white" key={uuid()}/>
            ],
            github : "https://github.com/goshin1/universocial",
            link : "none"
        },
        {
            title : "질병관리본부 - 개인 프로젝트",
            content : <>
                <h3>Puropose</h3>
                프론트 개발 역량을 늘리고자 질병관리본부에 디자인 만 참고하여<br/>
                동일한 사이트를 만들었습니다. <br/>
                메인, 비브리오패혈증, 미세먼지 페이지를 제작하였습니다.
                <h3>Function</h3>
                <ul>
                    <li>반응형 웹 구성</li>
                    <li>W3C 준수</li>
                    <li>슬라이드 및 페이지 이동</li>
                </ul>
                <h3>Stack</h3>
            </>,
            stack : [
                <img src="https://img.shields.io/badge/Html5-e22121?style=for-the-badge&logo=Html5&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Css3-2089eb?style=for-the-badge&logo=Css3&logoColor=white" key={uuid()}/>,
                <img src="https://img.shields.io/badge/Javascript-eba420?style=for-the-badge&logo=Javascript&logoColor=white" key={uuid()}/>,
            ],
            github : "https://github.com/goshin1/diseaseMange.github.io",
            link : "https://goshin1.github.io/diseaseMange.github.io/"
        },
    ]

    const toggleCounter = () => {
        setIsRunning(prev => !prev); // 카운팅 기능 켜고 끄기
      };

    useEffect(() => {
        let interval;
        const firstStick = document.getElementById("firstStick");
        const secondStick = document.getElementById("secondStick");

        if (isRunning) {
          // 카운팅 기능이 켜져 있을 때, 1초마다 카운트 증가
          interval = setInterval(() => {
            setSlideNum(prevCount => (prevCount + 1) % 5); // 0부터 5까지 증가 후 0으로 리셋
          }, 2000);
          firstStick.style.animation = "firstPlay 0.5s 1 forwards ease";
          secondStick.style.animation = "secondPlay 0.5s 1 forwards ease";
        } else {
          // 카운팅 기능이 꺼졌을 때, interval을 정리하여 카운팅 멈춤
          clearInterval(interval);
          firstStick.style.animation = "firstStop 0.5s 1 forwards ease";
          secondStick.style.animation = "secondStop 0.5s 1 forwards ease";
        }
    
        // 컴포넌트가 unmount될 때 interval 정리
        return () => clearInterval(interval);
      }, [isRunning]);

    return <div id="platform">
        <div id="imageDetail" style={{display : detailImage}} onClick={() => {
            setDetailImage("none")
        }}>
            <img src={imgs[num][slideNum]} alt="detailImage"/>
        </div>
        <div className="signFrame" style={{marginLeft : "40%"}}></div>
        <div className="signFrame" style={{marginLeft : "60%"}}></div>
        <div className="platformSign">
            <div className="prevStation sign">
                <div className="num">2</div>
                <div className="text">
                    <span style={{fontSize : '15px', fontWeight : 'bold'}}>세부정보</span><br/>
                    About<br/>
                    について
                </div>
            </div>
            <div className="nowStation sign">
                <div className="num" style={{marginTop : '0%', fontSize : '30px'}}>3</div>
                <div className="text">
                    <span style={{fontSize : '20px', fontWeight : 'bold'}}>프로젝트</span><br/>
                    Project<br/>
                    プロジェクト
                </div>
            </div>
           <div className="nextStation sign">
                <div className="num">4</div>
                <div className="text">
                    <span style={{fontSize : '15px', fontWeight : 'bold'}}>연락</span><br/>
                    Contact<br/>
                    連絡
                </div>
            </div>
            <div className="signLine"></div>
        </div>

        <div className="platformFrame">
            <div className="frameHeader">
                <div className="frameTitle"></div>
            </div>
            <div className="frameBottom">
                <div className="frameTitle">
                    <div className="frameSmall" style={{float : 'left', marginLeft : '20%'}}>
                        <div className="num">2</div>
                        <div className="text">
                            <span style={{fontSize : '15px', fontWeight : 'bold'}}>세부정보</span><br/>
                            About<br/>
                            について
                        </div>
                    </div>

                    <div className="frameSmall" style={{float : 'left', marginLeft : '7.5%'}}>
                        <div className="num">3</div>
                        <div className="text">
                            <span style={{fontSize : '15px', fontWeight : 'bold'}}>프로젝트</span><br/>
                            Project<br/>
                            プロジェクト
                        </div>
                    </div>

                    <div className="frameSmall" style={{float : 'right', marginRight : '20%'}}>
                        <div className="num">4</div>
                        <div className="text">
                            <span style={{fontSize : '15px', fontWeight : 'bold'}}>연락</span><br/>
                            Contact<br/>
                            連絡
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="platformWindows">
            <div className="platformWindow" >
                <div className="windowDeco"></div>
            </div>
            <div className="platformWindow" >
                <div className="windowDeco"></div>
            </div>
            <div className="platformWindow" id="windowLeft" style={{marginLeft : '0%', position : 'absolute', zIndex : '1'}}>
                <div className="windowDeco"></div>
            </div>
            <div className="platformWindow" id="windowRight" style={{marginLeft : '16.7%', position : 'absolute'}}>
                <div className="windowDeco"></div>
            </div>
            <div className="platformWindow" style={{marginLeft : '33.4%'}}>
                <div className="windowDeco"></div>
            </div>
            <div className="platformWindow" style={{marginLeft : '0%'}}>
                <div className="windowDeco"></div>
            </div>
        </div>
        <button className="projectBtn" id="leftBtn" onClick={() => {
            slideAnimation();
            setTimeout(() => {
                setNum(num - 1 < 0 ? 4 : num - 1)
                setSlideNum(0)
            }, 3000)
            
        }}>&lt;</button>
        <div id="projectDetail">
            <div className="detailBox">
                <div id="slideContainer">
                    <button id="detailBtn" onClick={()=>{
                        setDetailImage("block")
                    }}>+</button>
                    <img src={imgs[num][0]} className="slideImg" alt="slideImage" style={{opacity : slideNum === 0 ? "100%" : "0%"}}/>
                    <img src={imgs[num][1]} className="slideImg" alt="slideImage" style={{opacity : slideNum === 1 ? "100%" : "0%"}}/>
                    <img src={imgs[num][2]} className="slideImg" alt="slideImage" style={{opacity : slideNum === 2 ? "100%" : "0%"}}/>
                    <img src={imgs[num][3]} className="slideImg" alt="slideImage" style={{opacity : slideNum === 3 ? "100%" : "0%"}}/>
                    <img src={imgs[num][4]} className="slideImg" alt="slideImage" style={{opacity : slideNum === 4 ? "100%" : "0%"}}/>
                    <button className="slideBtn" id="slideLeft" onClick={() => {
                        setTimeout(() => {
                            setSlideNum(slideNum - 1 < 0 ? 4 : slideNum - 1)
                        }, 200)
                    }}>&lt;</button>
                    <button className="slideBtn" id="slideRight" onClick={() => {
                        setTimeout(() => {
                            setSlideNum(slideNum + 1 > 4 ? 0 : slideNum + 1)
                        }, 200)
                    }}>&gt;</button>
                </div>  
                <div id="slidePlay" onClick={() => {
                    toggleCounter();
                }}>
                    <div className="slideStick" id="firstStick"></div>
                    <div className="slideStick" id="secondStick"></div>
                </div>
            </div>
            <div className="detailBox">
                <h2>
                    {project_info[num].title}
                </h2>
                <div>
                    {project_info[num].content}
                </div>
                <div>
                    {project_info[num].stack}
                </div>
                <div>
                    <a className="gitBlock" target="_blank" href={project_info[num].github}>Github</a>
                    <a className="gitBlock" target="_blank" style={{display : project_info[num].link !== "none" ? "block" : "none"}} href={project_info[num].link}>Demo</a>
                </div> 
            </div>
        </div>
        <button className="projectBtn" id="rightBtn" onClick={() => {
            slideAnimation();
            setTimeout(() => {
                setNum(num + 1 > 4 ? 0 : num + 1)
                setSlideNum(0)
            }, 3000)
        }}>&gt;</button>
    </div>
}