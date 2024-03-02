import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const TradeMark = () => {
    const [data, setData] = useState([
        {
            heading: "Embracing Purpose, Inspiring Change",
            description: "Welcome to HostX, where corporate responsibility is not just a commitment but a guiding principle that shapes our journey. At HostX, we believe in the power of technology to drive positive change, and this ethos extends beyond our products and services. Explore our Corporate Responsibility initiatives and discover how we are dedicated to making a meaningful impact on society, the environment, and the communities we serve."
        },
        {
            heading: "Our Vision for a Sustainable Tomorrow",
            description: "At HostX, we envision a future where business success goes hand in hand with social and environmental responsibility. Our Corporate Responsibility initiatives are grounded in the belief that ethical business practices contribute to a sustainable, thriving world. As a responsible corporate citizen, we recognize the interconnectedness of our actions and strive to create a positive ripple effect across the globe."
        },
        {
            heading: "Environmental Stewardship: Nurturing the Planet We Call Home",
            description: "HostX is committed to minimizing its environmental footprint and actively contributing to a greener world. Dive into our eco-friendly practices, energy-efficient operations, and initiatives that reduce our carbon footprint. From sustainable sourcing to waste reduction programs, discover how HostX is dedicated to preserving the planet for future generations."
        },
        {
            heading: "Empowering Communities: Making a Difference Beyond Business",
            description: "Our commitment to corporate responsibility extends to the communities where we operate. Explore the impactful initiatives HostX undertakes to empower local communities through education, skill development, and social welfare programs. We believe in being a catalyst for positive change, fostering inclusivity, and creating opportunities that uplift those around us."
        },
        {
            heading: "Ethical Business Practices: Upholding the Highest Standards",
            description: "Trust is the foundation of every successful relationship, and at HostX, we understand the importance of earning and maintaining your trust. Explore our commitment to ethical business practices, transparency, and integrity. From fair labor practices to responsible sourcing, HostX operates with the highest standards of honesty and accountability."
        },
        {
            heading: "Diversity, Equity, and Inclusion: Fostering a Culture of Belonging",
            description: "At HostX, we celebrate diversity as a source of strength and innovation. Learn how our commitment to diversity, equity, and inclusion is woven into the fabric of our corporate culture. We believe that a diverse workforce fosters creativity and excellence, and we are dedicated to creating an inclusive environment where every individual feels valued and empowered."
        },
        {
            heading: "Customer-Centric Responsibility: Your Well-Being Matters",
            description: "HostX is not just a technology company; we are your trusted partner on the digital journey. Discover the measures we take to prioritize your data security, privacy, and overall well-being. From robust cybersecurity protocols to transparent data practices, HostX is committed to providing you with a secure and reliable digital experience."
        },
        {
            heading: "Join Us in Shaping a Responsible Future",
            description: "Corporate responsibility is not just a checkbox for us; it's a commitment to creating a positive impact on the world. We invite you to explore our Corporate Responsibility initiatives and join us on this journey of purpose-driven growth. At HostX, we believe that responsible business is good business, and together, we can shape a sustainable future for generations to come."
        },
    ])

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <div className='container mt-5'>
                <div className="mb-5">
                    <h1 className='text-center mb-4' style={{ color: "red" }}>Corporate Responsibility at HostX: Shaping a Sustainable Future</h1>
                </div>
                {
                    data && data.map((item) => {
                        return (
                            <>
                                <div className='mb-5'>
                                    <h2 className='text-center mb-3' style={{ color: "#2aba09" }}>{item.heading}</h2>
                                    <p className='fs-5 text-justify'>
                                        {item.description}
                                    </p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default TradeMark