import { useLoaderData } from "react-router-dom";
import TeamMember from "./teamMember";


const Team = ({team}) => {


    return (
        <div>
            <h2 data-aos="fade-down" className="text-5xl font-bold text-center my-4 md:my-9 text-yellow-400">Team Members</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    team.map(teamMember => <TeamMember key={teamMember.id} teamMember={teamMember}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;