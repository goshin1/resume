import React, { useState, useRef, useEffect } from 'react';
import Bus  from './component/Bus';
import './App.css'
import busStop from './imgs/busStop.jpg';
import subwayBack from './imgs/subway.jpg'
import BusInner from './component/BusInner';
import Platform from './component/Platform';
import Subway from './component/Subway';


function ScrollToSection() {
  // 각 섹션을 참조하기 위한 useRef 훅
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  // 현재 활성화된 섹션 추적
  const [activeSection, setActiveSection] = useState(0); // 초기값을 0으로 설정

  // 스크롤 이동 함수
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth', // 부드럽게 이동
        block: 'start', // 상단에 맞추기
      });
    }
  };

  console.log(activeSection)


  // 스크롤 이벤트 처리 함수
  const handleWheel = (event) => {
    // 기본 스크롤 동작 방지
    event.preventDefault();

    let nextSection = activeSection;

    if (event.deltaY > 0) { // 아래로 스크롤 (deltaY > 0)
      // 아래로 스크롤 시 활성화된 섹션을 한 칸 아래로 이동
      nextSection = activeSection + 1 > 2 ? 2 : activeSection + 1
    } else if (event.deltaY < 0) { // 위로 스크롤 (deltaY < 0)
      // 위로 스크롤 시 활성화된 섹션을 한 칸 위로 이동
      nextSection = activeSection - 1 < 0 ? 0 : activeSection - 1
    }

    if (nextSection !== activeSection) {
      setActiveSection(nextSection);

      // 해당 섹션으로 스크롤 이동
      if (nextSection === 0) {
        scrollToSection(sectionOneRef);
      } else if (nextSection === 1) {
        scrollToSection(sectionTwoRef);
      } else if (nextSection === 2) {
        scrollToSection(sectionThreeRef);
      } 
    }
  };

  // 컴포넌트 마운트 시 스크롤 이벤트 리스너 등록
  useEffect(() => {
    // section 1
    const entrance = document.getElementById("entrance");
    const bus = document.getElementById("bus");

    // section 2
    const selfDetail = document.getElementById("selfDetail");

    // section 3
    const subwayDoorLeft = document.getElementById("subwayDoorLeft");
    const subwayDoorRight = document.getElementById("subwayDoorRight");
    const windowLeft = document.getElementById("windowLeft");
    const windowRight = document.getElementById("windowRight");
    const projectDetail = document.getElementById("projectDetail");



    if(activeSection === 0){
      selfDetail.style.animation = "none";
      subwayDoorLeft.style.animation = "none";
      subwayDoorRight.style.animation = "none";
      windowLeft.style.animation = "none";
      windowRight.style.animation = "none";
      projectDetail.style.animation = "none";

      entrance.style.animation = "busEntranceMove 3.5s 1 forwards";
      bus.style.animation = "busMove 3s 1 forwards ease";
    }else if(activeSection === 1){
      entrance.style.animation = "none";
      bus.style.animation = "none";
      subwayDoorLeft.style.animation = "none";
      subwayDoorRight.style.animation = "none";
      windowLeft.style.animation = "none";
      windowRight.style.animation = "none";
      projectDetail.style.animation = "none";

      selfDetail.style.animation = "selfMove 0.5s 1 forwards ease";
    }else if(activeSection === 2){
      selfDetail.style.animation = "none";
      entrance.style.animation = "none";
      bus.style.animation = "none";

      subwayDoorLeft.style.animation = "subwayLeft 1.5s 1 forwards ease-in";
      subwayDoorRight.style.animation = "subwayRight 1.5s 1 forwards ease-in";
      windowLeft.style.animation = "platformLeft 1.5s 1 forwards ease-in";
      windowRight.style.animation = "platformRight 1.5s 1 forwards ease-in";
      projectDetail.style.animation = "projectInit 2s 1 forwards ease-in";
    }else{
      selfDetail.style.animation = "none";
      entrance.style.animation = "none";
      bus.style.animation = "none";
      subwayDoorLeft.style.animation = "none";
      subwayDoorRight.style.animation = "none";
      windowLeft.style.animation = "none";
      windowRight.style.animation = "none";
      projectDetail.style.animation = "none";
    }


    window.addEventListener('wheel', handleWheel, { passive: false });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };


    


  }, [activeSection]); // activeSection 변경 시마다 리스너가 다시 등록됨

  // 컴포넌트 마운트 시 초기 섹션 위치를 설정하는 함수
  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (sectionOneRef.current && currentPosition >= sectionOneRef.current.offsetTop) {
      setActiveSection(0);
    }
    if (sectionTwoRef.current && currentPosition >= sectionTwoRef.current.offsetTop) {
      setActiveSection(1);
    }
    if (sectionThreeRef.current && currentPosition >= sectionThreeRef.current.offsetTop) {
      setActiveSection(2);
    }

  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='rootBody'>
      <div id='rootBtn'>
        <button onClick={() => scrollToSection(sectionOneRef)} style={{fontWeight : activeSection === 0 ? "bold" : "normal", color : activeSection === 0 ? "orange" : "white"}}>Home</button>
        <button onClick={() => scrollToSection(sectionTwoRef)} style={{fontWeight : activeSection === 1 ? "bold" : "normal", color : activeSection === 1 ? "orange" : "white"}}>About</button>
        <button onClick={() => scrollToSection(sectionThreeRef)} style={{fontWeight : activeSection === 2 ? "bold" : "normal", color : activeSection === 2 ? "orange" : "white"}}>Project</button>
      </div>

      <div className='section' ref={sectionOneRef} id="sectionOne" style={{ backgroundImage : `url(${busStop})` }}>
        <h1 id='introduce'>협업과 연계를 중요시하는 <span style={{color : 'orange'}}>웹 개발자</span> 고신원입니다.</h1>
        <Bus></Bus>
      </div>
      <div className='section' ref={sectionTwoRef} id="sectionTwo" style={{ backgroundColor: 'rgb(40,40,40)' }}>
        <div className='city'></div>
        <BusInner></BusInner>
      </div>
      <div className='section' ref={sectionThreeRef} id="sectionThree" style={{ backgroundImage : `url(${subwayBack})`, backgroundSize : 'cover' }}>
        <div style={{backgroundColor : 'rgba(0,0,0,0.5)', width : '100%', height : '100%', position : 'absolute', backdropFilter : 'blur(5px)'}}></div>
        <Subway></Subway>
        <Platform></Platform>
      </div>
      
    </div>
  );
}

export default ScrollToSection;
