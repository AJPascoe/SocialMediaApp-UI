import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
           <Sidebar/>
           <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">

                  
                   <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                   <img src="assets/person/2.jpeg" alt="" className="profileUserImg" />
               </div>
               <div className="profileInfo">
                   <h4 className="profileInfoName">Janell Shrum</h4>
                   <span className="profileInfoDesc">Hello everyone</span>
               </div>
               </div>
               <div className="profileRightBottom">
                 <Feed/>
                 <Rightbar profile/>  
               </div>
           </div>
        </div>
       
        </>
    )
}
