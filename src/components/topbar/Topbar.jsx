import "./topbar.css";
import { Search, Person, Chat, Notifications }from "@material-ui/icons";

export default function () {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            <span className="logo">CNsocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friends, posts or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Hompage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/2.jpeg" alt="" className="topbarImg"/>
            </div>

        </div>
    );
}
