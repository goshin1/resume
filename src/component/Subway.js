import './subway.css'

export default function Subway(){

    return <div className='subway'>
        <div className='subwayHeader'></div>
        <div className='subwayBody'>
            <div className='subwayWindows' style={{left : '0%'}}>
                <div className='subwayWindow'>
                    <div className='windowLight'></div>
                </div>
            </div>
            <div className='subwayDoorFrame' style={{left : '35%'}}>
                <div className='subwayDoor' id='subwayDoorLeft'>
                    <div className='subwayWindow' style={{margin : '25%', width : '50%'}}>
                        <div className='windowLight'></div>
                    </div>
                </div>
                <div className='subwayDoor' id='subwayDoorRight' style={{marginLeft : '50%'}}>
                    <div className='subwayWindow' style={{margin : '25%', width : '50%'}}>
                        <div className='windowLight'></div>
                    </div>
                </div>
                <div className='subwayDoorBack'>sss</div>
            </div>
            <div className='subwayWindows' style={{right : '0%'}}>
                <div className='subwayWindow'>
                    <div className='windowLight'></div>    
                </div>  
            </div>
            
        </div>
    </div>
}