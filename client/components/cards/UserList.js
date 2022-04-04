import {useContext} from 'react'
import UserContext from "../../context/index"
import {Avatar,List} from "antd"
import Link from "next/link"
export default function UserList({tenants}) {
  return (
    <div className = "mt-3" style={{backgroundColor: "rgb(30,30,30)"}} >
      <List itemLayout="horizontal" dataSource = {tenants} renderItem={(tenant)=> (
        <List.Item>
          <List.Item.Meta
            title={
              <div className = "d-flex justify-content-between px-3" >
                <h5 className="col-sm-4 text-light font" >{tenant.name}</h5>
                <Link href={`${tenant._id}`}>
                  <button className="offset-sm-5 col-sm-3 btn btn-success">Invite</button>
                </Link>
              </div>
            }
          />
        </List.Item>
      )}

      />
      {/* {tenants.map((tenant)=>{
        return(
        <div className = "row py-2 px-3" style = {{backgroundColor: "rgb(30,30,30)"}} key = {tenant._id}>
          <div style= {{display:"inline-flex", }}>
            <h4 className="col-sm-4 text-light font">{tenant.name}</h4>
          
            <button className="offset-sm-5 col-sm-3 btn btn-success">Invite</button>
          </div>
        </div>
      )})} */}

    </div>
  )
}
