import React, { Component } from 'react';
import Media from "../components/Media";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./profile.css";

export class profile extends Component {
    render() {
        return (
            <>
            <div>
               <div>
                  <div style={{
                   display: "left",
                   justifyContent:"space-around",
                   margin:"18px 0px"
               }}>
                    <img style={{width: "160px", borderRadius:"80px", marginTop: "60px"}}src="https://images.unsplash.com/photo-1558216144-fef86b75da36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEzfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
                   </div>
                  <div style={{
                      marginTop: "50px"
                  }}>
                      <div style={{
                          display:"right",
                          justifyContent:"left",
                          alignItems: "center", 
                          marginBottom: "200px"
                          }}>
                          <h2>John Doe</h2>
                 <Card className="card">
                        <CardContent  className="stats">
                          <div style={{display: "left", justifyContent:"space-between"}}>
                           <h4>Debater Statistics</h4>   
                          <h5>Points: 100</h5>
                          <h5>Debates: 0</h5> 
                          <h5>Wins: 0</h5>
                          <h5>Losses: 0</h5>
                          <h5>Memebaters: 0</h5>
                          <h5>Following: 0</h5>
                          </div>
                       </CardContent>
                </Card>
                <br>
                </br>
                <div className="memebater_stats">
                  <Card className="card">
                        <CardContent  className="stats">
                          <div style={{display: "left", justifyContent:"space-between"}}>
                          <h4>Memebater Statistics</h4>
                          <h5>Memes: 0</h5>
                          <h5>laughs: 0</h5>
                          <h5>likes: 0</h5>
                          <h5>dislikes: 0</h5>
                          </div>
                       </CardContent>
                </Card>
                      </div>
                  </div >               
                  </div>       
               </div>
               <div className="media" style={{display:"center"}}>
               </div>
            </div>
            </>
        )
    }
}

export default profile
