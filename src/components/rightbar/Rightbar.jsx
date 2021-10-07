import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

    const HomeRightbar = ()=>{
        return(
            <>
               <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText"> <b> Lewis Jones </b> and <b>3 other friends</b> have their birthday today.</span>
                </div>
                <img src="assets/ad.jpeg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}                 
                </ul> 
            </>
        );
    };

    const ProfileRightbar = () =>{
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightBarInfoKey">City:</span>
                    <span className="rightBarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightBarInfoKey">From:</span>
                    <span className="rightBarInfoValue">Liverpool</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightBarInfoKey">Relationship:</span>
                    <span className="rightBarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
             <ProfileRightbar/>
            </div>
        </div>
    );
}