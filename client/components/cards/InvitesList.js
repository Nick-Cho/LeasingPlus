import {useState, useEffect} from 'react'
import {List} from "antd"
import axios from 'axios';
import Invite from "./Invite.js"

function InvitesList({invites}) {
  const [sender,setSender] = useState();

  return (
    <div>
      <List itemLayout="horizontal" dataSource = {invites} renderItem={(invite)=>(
        <List.Item>
          <List.Item.Meta
            title={
              <div>
                  <Invite setSender = {setSender} sender={sender} invite={invite}/>
              </div>
              
            }
          />
        </List.Item>
      )}/>
    </div>
  )
}

export default InvitesList