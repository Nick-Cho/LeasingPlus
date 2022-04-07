import {useState, useEffect} from 'react'
import {List} from "antd"
import axios from 'axios';
import Invite from "./Invite.js"

function InvitesList({invites}) {
  // const [sender,setSender] = useState();

  return (
    <div className = "row col-md-6 offset-md-3 bg-dark ">
      <List itemLayout="horizontal" dataSource = {invites} renderItem={(invite)=>(
        <List.Item>
          <List.Item.Meta
            title={
              <div>
                  <Invite invite={invite}/>
              </div>
              
            }
          />
        </List.Item>
      )}/>
    </div>
  )
}

export default InvitesList