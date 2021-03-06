import React from 'react'


function Map(props) {
    let board = props.board;
    let players = props.players;
    const robotChoice= ['cam', 'cve', 'cvi', 'ham', 'hve', 'hvi', 'qam', 'qve', 'qvi', 'tam', 'tve', 'tvi'];
    let mecoName = (name) =>{
      if(name){
        let player =  players.filter(player=>player.name === name)
        return name+'_'+player[0].orientation
      }
    }

    return (
        <>
                    <div className="row no-gutters align-self-bottom">
            <div className="col-1 c0"><img className="tile-bg align-bottom" src={require("../img/tiles/left-top-coner.png")} alt="" /></div>
            <div className="col-1 c1"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c2"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c3"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c4"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c5"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c6"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c7"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c8"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c9"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c10"><img className="tile-bg align-bottom" src={require("../img/tiles/TileSep-13.png")} alt="" /></div>
            <div className="col-1 c11"><img className="tile-bg align-bottom" src={require("../img/tiles/right-top-corner.png")} alt="" /></div>
        </div>
        <div className="row no-gutters">
            <div className="col-1 c0 tile"><img className="tile-bg" src={require("../img/tiles/r-2c0.png")} alt="" /></div>
            <div className="col-1 c1 tile"><img className="tile-bg" src={require("../img/tiles/r-2c1.png")} alt="" /></div>
            <div className="col-1 c2 tile"><img className="tile-bg" src={require("../img/tiles/r-2c2.png")} alt="" /></div>
            <div className="col-1 c3 tile"><img className="tile-bg" src={require("../img/tiles/TileSep-40.png")} alt="" /></div>
            <div className="col-1 c4 tile"><img className="tile-bg" src={require("../img/tiles/door-1.png")} alt="" /></div>
            <div className="col-1 c5 tile"><img className="tile-bg" src={require("../img/tiles/door-2.png")} alt="" /></div>
            <div className="col-1 c6 tile"><img className="tile-bg" src={require("../img/tiles/door-3.png")} alt="" /></div>
            <div className="col-1 c7 tile"><img className="tile-bg" src={require("../img/tiles/TileSep-40.png")} alt="" /></div>
            <div className="col-1 c8 tile"><img className="tile-bg" src={require("../img/tiles/r-2c8.png")} alt="" /></div>
            <div className="col-1 c9 tile"><img className="tile-bg" src={require("../img/tiles/r-2c9.png")} alt="" /></div>
            <div className="col-1 c10 tile"><img className="tile-bg" src={require("../img/tiles/r-2c10.png")} alt="" /></div>
            <div className="col-1 c11"><img className="tile-bg" src={require("../img/tiles/tile-lockers-1.png")} alt="" /></div>
        </div>
        <div className="row no-gutters">
            <div className="col-1 c0 tile"><img className="tile-bg" src={require("../img/tiles/r-1c0.png")} alt="" /></div>
            <div className="col-1 c1 tile"><img className="tile-bg" src={require("../img/tiles/r-1c1.png")} alt="" /></div>
            <div className="col-1 c2 tile"><img className="tile-bg" src={require("../img/tiles/r-1c2.png")} alt="" /></div>
            <div className="col-1 c3 tile"><img className="tile-bg" src={require("../img/tiles/r-1c3.png")} alt="" /></div>
            <div className="col-1 c4 tile"><img className="tile-bg" src={require("../img/tiles/door-4.png")} alt="" /></div>
            <div className="col-1 c5 tile"><img className="tile-bg" src={require("../img/tiles/door-5.png")} alt="" /></div>
            <div className="col-1 c6 tile"><img className="tile-bg" src={require("../img/tiles/door-6.png")} alt="" /></div>
            <div className="col-1 c7 tile"><img className="tile-bg" src={require("../img/tiles/TileSep-41.png")} alt="" /></div>
            <div className="col-1 c8 tile"><img className="tile-bg" src={require("../img/tiles/r-1c8.png")} alt="" /></div>
            <div className="col-1 c9 tile"><img className="tile-bg" src={require("../img/tiles/r-1c9.png")} alt="" /></div>
            <div className="col-1 c10 tile"><img className="tile-bg" src={require("../img/tiles/r-1c10.png")} alt="" /></div>
            <div className="col-1 c11"><img className="tile-bg" src={require("../img/tiles/r-1c11.png")} alt="" /></div>
        </div>
        {board.map((row, iRow)=>{
          return(
            <div key={iRow} className={'row no-gutters r'+iRow}>
              {row.map((col,iCol)=>{
                if(iCol === 0){
                  if(iRow === 0){
                    return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/r0c0.png")} alt="" /></div>)
                  } else if(iRow === 1){
                    return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/left-border-box.png")} alt="" /></div>)
                  } else{
                    return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/left-border-regular-left-shadow.png")} alt="" /></div>)
                  }
                } else if(iCol === 11 ){
                  if(iRow === 0){
                    return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/r0c11.png")} alt="" /></div>)
                  } else if(iRow === 1){
                    return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/right-border-box.png")} alt="" /></div>)
                  }else if(iRow === 10 ){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/right-border-regular-no-shadow.png")} alt="" /></div>)
                } else if(iRow === 9){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/right-border-corner-shadow.png")} alt="" /></div>)
                } else if(iRow === 2){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/right-border-corner-shadow.png")} alt="" /></div>) 
                }
                else {
                    return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/right-border-regular-shadow.png")} alt="" /></div>)
                  }
                } else if(iRow === 0 && iCol === 4){
                  return(<div key={iCol} className={`col-1 c${iCol} ts47`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                } else if(iRow === 0 && iCol === 5){
                  return (<div key={iCol} className={`col-1 c${iCol} finish`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                }else if(iRow === 0 && iCol === 6){
                  return(<div key={iCol} className={`col-1 c${iCol} ts47`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                }else if(iRow === 0 && iCol === 7){
                  return(<div key={iCol} className={`col-1 c${iCol} ts47`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                } else if(iRow === 0 && iCol === 8){
                  return(<div key={iCol} className={`col-1 c${iCol} ts47`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                }  
                
                else if(iRow === 0 && iCol === 3){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r0c3.png")} alt="" /></div>)
                } else if(iRow === 0 && iCol === 2){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r0c2.png")} alt="" /></div>) 

                } else if(iRow === 0 && iCol === 8){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/computer-bottom.png")} alt="" /></div>)
                }else if(iRow === 0 && iCol === 9){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r0c9.png")} alt="" /></div>)
                } 
                
                else if(iRow === 2 && iCol === 3){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/TileSep-56.png")} alt="" /></div>)
                } else if(iRow === 2 && iCol === 4){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/TileSep-57.png")} alt="" /></div>)
                } else if(iRow === 2 && iCol === 10){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/TileSep-57.png")} alt="" /></div>)
                }  else if(iRow === 1 && iCol === 5){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r1c5.png")} alt="" /></div>)
                }
                else if(iRow === 1 && iCol === 6){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r1c6.png")} alt="" /></div>)
                }else if(iRow === 1 && iCol === 8){
                  return(<div key={iCol} className={`col-1 c${iCol} r1c8_bg`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                }
                else if(iRow === 1 && iCol === 9){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r1c9.png")} alt="" /></div>)
                }else if(iRow === 1 && iCol === 10){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r1c10.png")} alt="" /></div>)
                }  

                else if(iRow === 3 && iCol === 3){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/TileSep-58.png")} alt="" /></div>)
                }else if(iRow === 3 && iCol === 5){
                  return(<div key={iCol} className={`col-1 c${iCol} r3c5_bg`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)                
                }else if(iRow === 3 && iCol === 6){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r3c6.png")} alt="" /></div>)
                }  
                else if(iRow === 3 && iCol === 7){
                  return(<div key={iCol} className={`col-1 c${iCol} r3c7_bg`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                }
                
                else if(iRow === 4 && iCol === 2){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r4c2.png")} alt="" /></div>)
                }else if(iRow === 4 && iCol === 3){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/r4c3.png")} alt="" /></div>)
                }  
                
                else if(iRow === 5 && iCol === 5){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/fence-1.png")} alt="" /></div>)
                } else if(iRow === 5 && iCol === 6){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/fence-2.png")} alt="" /></div>)
                }   else if(iRow === 5 && iCol === 7){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/fence-3.png")} alt="" /></div>)
                } else if(iRow === 5 && iCol === 8){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/fence-4.png")} alt="" /></div>)
                } else if(iRow === 6 && iCol === 1){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}> <img className="tile-bg" src={require("../img/tiles/TileSep-57.png")} alt="" /></div>) 
                } else if(iRow === 6 && iCol === 3){
                  return(<div key={iCol} className={`col-1 c${iCol} r6c3_bg`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                } else if(iRow === 6 && iCol === 4){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/r6c4.png")} alt="" /></div>)
                } else if(iRow === 6 && iCol === 5){
                  return(<div key={iCol} className={`col-1 c${iCol} r6c5_bg`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                } else if(iRow === 6 && iCol === 10){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-57.png")} alt="" /></div>)
                } else if(iRow === 7 && iCol === 1){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-59.png")} alt="" /></div>)
                } else if(iRow === 7 && iCol === 9){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/r7c9.png")} alt="" /></div>)
                }else if(iRow === 9 && iCol === 5){
                  return(<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/anthena.png")} alt="" /></div>)
                }  
                
                
                else if(iRow === 0 && iCol === 1){
                      return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/r0c1.png")} alt="" /></div>)
                } else if(iRow === 0 && iCol === 10){
                      return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/r0c10.png")} alt="" /></div>)
                } else if(iRow === 10 && iCol ===0){
                      return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/left-border-regular-left-shadow.png")} alt="" /></div>)
                } else if(iRow === 10 && iCol <9){
                      return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-57.png")} alt="" /></div>)
                } else if(iRow === 10 && iCol === 9 ){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-60.png")} alt="" /></div>)
                } else if(iRow === 10 && iCol === 10 ){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-59.png")} alt="" /></div>)
                } else if (iRow === 9 && iCol === 9){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-56.png")} alt="" /></div>)
                }else if (iRow === 9 && iCol === 10){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-57.png")} alt="" /></div>)
                } else if(iRow === 3 && iCol === 8){
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}><img className="tile-bg" src={require("../img/tiles/TileSep-56.png")} alt="" /></div>)
                }
                 else {
                  return (<div key={iCol} className={`col-1 c${iCol} tile`}>{robotChoice.includes(col)?<img className="tile-bg" src={require(`../img/robot-sprites/${mecoName(col)}.png`)} alt="" />:''}</div>)
                }
              })}
            </div>
          )
        })}
        <div className="row no-gutters">
          <div className="col-1 c0"><img className="tile-bg align-top" src={require("../img/tiles/left-bottom-corner.png")} alt="" /></div>
          <div className="col-1 c1"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c2"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c3"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c4"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c5"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c6"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c7"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c8"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c9"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c10"><img className="tile-bg align-top" src={require("../img/tiles/TileSep-7.png")} alt="" /></div>
          <div className="col-1 c11"><img className="tile-bg align-top" src={require("../img/tiles/right-bottom-corner.png")} alt="" /></div>
        </div>
        </>
    )
}

export default Map
