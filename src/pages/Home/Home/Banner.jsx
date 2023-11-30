

const Banner = () => {
    return (
        <div>
            <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/TLLBxjJ/classic-book-with-detailed-cover.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"><em><span className="text-cyan-400">Inventory</span> <span className="text-rose-500">System</span></em></h1>
                        <p className="mb-5 font-normal">Managing inventory manually can lead to a host of challenges - from inaccuracies in stock levels to delays in order processing. Businesses often grapple with overstocking or stockouts, resulting in lost sales or excess holding costs. An IMS addresses these challenges by providing real-time visibility and control over inventory.</p>
                        <button className="btn font-semibold rounded-3xl bg-rose-500 hover:bg-cyan-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;