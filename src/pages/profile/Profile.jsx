import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../navbar/Navbar";

const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div></div>
                <div>
                    {
                        user && <h2 className="text-3xl">{user.displayName}</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;