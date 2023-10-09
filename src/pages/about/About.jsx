import Navbar from "../navbar/Navbar";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-gray-500 to-gray-500 h-screen w-full relative">
                <img className="absolute h-full w-full object-cover mix-blend-overlay" src="/src/assets/pexels-kerde-severin-5961235.jpg" alt="" />

                <div className="text-center  inset-0 absolute flex flex-col justify-center items-center space-y-9">
                    <h2 className="text-4xl text-yellow-300 font-bold">About Us</h2>
                    <p className="text-gray-100 text-xs md:text-lg"> We are passionate gamers and dedicated enthusiasts who share a common love for gaming in all its forms. Our mission is to bring the gaming community together and create unforgettable experiences for players of all backgrounds. With years of experience in organizing gaming events, we strive to provide you with the ultimate gaming adventure. From competitive esports tournaments to celebrating the artistry of indie games, we curate diverse and exciting opportunities for you to immerse yourself in the gaming world. Our team is committed to delivering top-notch entertainment, fostering a sense of camaraderie, and celebrating the creativity and skill that gamers bring to the table.</p>
                    <h4 className="text-lg font-semibold text-yellow-200">Join Now...</h4>
                </div>
            </div>
        </div>
    );
};

export default About;