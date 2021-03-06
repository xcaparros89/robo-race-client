import React, { useState, useEffect } from 'react';
import shortid from 'shortid'
import { useHistory, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import Navbar from "./Navbar";


export function AllRooms(props){

    
    const [roomArr, setRoomArr] =useState([])//NECESITAMOS QUE LAS ROOMS DESAPAREZCAN CUANDO NO HAYA NADIE Y QUE PONGA LA CANTIDAD DE GENTE QUE TIENEN
    const history = useHistory();
    const [id, setId] = useState('')
    document.body.classList.add('home'); // Remove big BG

    useEffect(()=>{
        async function fetchData(){
        const rooms = await axios.get(process.env.REACT_APP_API_URL + "/rooms/getAllRooms")
        setRoomArr(rooms.data)
      }; fetchData();
    }, []);
    
    let createGame = async ()=>{
        let id=shortid.generate();
        const rooms = await axios.post(process.env.REACT_APP_API_URL + "/rooms/addRoom", {id, creator:props.user.username})
        setRoomArr(rooms.data);
        history.push({pathname: `/rooms/${id}`, state:{creator:props.user.username}})
    }

    let joinGame = async (id, index)=>{
        if(roomArr[index].users.length !== 8){
            const rooms = await axios.post(process.env.REACT_APP_API_URL + "/rooms/addUser", {id, user:props.user.username})
            setRoomArr(rooms.data);
            setId(id)
        }
    }
        return (
            <>
            <Navbar />
            {id.length>0 && <Redirect to={`/rooms/${id}`} />}
            <div className="container login-container d-flex align-items-center">
                <div className="container home-bg">
                    <div className="row no-gutters">
                        <div className="container login-inner-container">
                        <div className="col-12">
                            <img src={require("../img/allrooms-bg-top.png")} alt="" className="tile-bg"/>
                        </div>
                            <div className="col-12 text-center allrooms">
                            <button className="newgame-btn" onClick={createGame} ></button>
                                <div className="rooms-container d-flex align-items-center" style={{padding:'5%'}}>

                                
                        {  !roomArr.length && 
                           <div style={{width:'100%', overflow: 'auto', maxHeight:'260px', alignSelf:'center'}}>
                            <p style={{marginBottom:'10px'}}>There are no current games. <br/><span onClick={createGame} className="a-login">Create Game</span></p>
                           </div>
                        }
                        {roomArr.length>0 && (
                            <div style={{width:'100%', overflow: 'auto', maxHeight:'260px', alignSelf:'center'}}>
                                {roomArr.map((room, index) =>{
                                return (<p style={{marginBottom:'5px'}}>{room.creator}'s game ({room.users.length} / 8) <span onClick={()=>joinGame(room.room, index)} key={room.room} className="a-login">Join Game</span> </p>)//aixo hauria de ser una funcio que miri si hi ha lloc i després el fiqui
                                })}
                            </div>)} 
                            </div>

                                </div>

                            <div className="col-12">
                                    <img src={require("../img/allrooms-bg-footer.png")} alt="" className="tile-bg"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
</>





            /* <div className="container login-container d-flex align-items-center">
            <div className="container home-bg">
                <div className="row no-gutters">
                    <div className="col-12">
                    <img src={require("../img/allrooms-bg-top.png")} alt="" className="tile-bg"/>
                    </div>
                    <div className="row no-gutters">
                        <div className="container loggin-inner-container">
                        <div className="row d-flex rooms-container">
                        <button className="newgame-btn" onClick={createGame} ></button>
                        {  !roomArr.length && 
                           <div style={{width:'100%', overflow: 'auto', maxHeight:'260px'}}>
                            <p style={{marginBottom:'10px'}}>There are no current games. <br/><span onClick={createGame} className="a-login">Create Game</span></p>
                           </div>
                        }
                        {roomArr.length>0 && (
                            <div style={{width:'100%', overflow: 'auto', maxHeight:'260px'}}>
                                {roomArr.map((room, index) =>{
                                return (<p style={{marginBottom:'5px'}}>{room.creator}'s game ({room.users.length} / 8) <span onClick={()=>joinGame(room.room, index)} key={room.room} className="a-login">Join Game</span> </p>)//aixo hauria de ser una funcio que miri si hi ha lloc i després el fiqui
                                })}
                            </div>)} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </> */
        )
}

export default withAuth(AllRooms)