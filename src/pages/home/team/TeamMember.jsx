const TeamMember = ({teamMember}) => {
    const {name, img, expertise} = teamMember;
    console.log(teamMember, img);
    return (
        <div data-aos="flip-left">
            <div className="card bg-transparent">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black">{name}</h2>
                    <p>Expertise: {expertise}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;