import '../Header/Header.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="h-[300px] md:h-[400px] lg:h-[600px] flex flex-col justify-center items-center">
                <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-6">I Grow By Helping People In Need</h1>
                <form className="  ">
                    <input className="text-2xl p-2 rounded-l-md border" placeholder="search here..." type="text" name="text" />
                    <button className="text-2xl rounded-r-md bg-[#FF444A] text-white py-2 px-4">Search</button>
                </form>
            </div>

        </div>
    );
};

export default Banner;