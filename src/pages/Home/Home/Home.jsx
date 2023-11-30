import ClientReview from "../../../components/ClientReview/ClientReview";
import ContactUs from "../../../components/ContactUs/ContactUs";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ContactUs></ContactUs>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;