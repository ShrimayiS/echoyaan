
import './AboutUs.css';
import React from 'react';

const aboutContent = {
  title: "About Ecoyaan",
  description: [
    "At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.",
    "We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:"
  ],
  points: [
    "Tips and tricks to adopt a more eco-friendly and low-waste lifestyle",
    "Videos, posts, and quizzes on climate change and sustainability",
    "Events and pledges that invite you to adopt a more sustainable lifestyle"
  ],
  image: 'https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png'
};

const values = [
  {
    title: "Trust",
    description: "We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.",
    image: 'https://ecoyaan.com/images/Trust.png'
  },
  {
    title: "Impact",
    description: "We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.",
    image: 'https://ecoyaan.com/images/Authenticity.png'
  },
  {
    title: "Authenticity",
    description: "We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.",
    image: 'https://ecoyaan.com/images/Impact.png'
  },
  {
    title: "Fun & Engaging",
    description: "Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.",
    image: 'https://ecoyaan.com/images/FunAndEngaging.png'
  }
];

const founders = [
  {
    name: "Abhishek",
    description: "We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.",
    image: "https://ecoyaan.com/images/about-us-founding-team-01.png",
    linkedin: "https://www.linkedin.com/in/abhishek-rao-k"
  },
  {
    name: "Sarwan",
    description: "We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.",
    image: "https://ecoyaan.com/images/about-us-founding-team-02.png",
    linkedin: 'https://www.linkedin.com/in/sarwanjeetsingh/'
  }
];

const team = [
  {
    name: "Shruthi",
    role: "Social Media",
    description: "Shruthi is in charge of our Instagram. She is a practicing Vegan and cares deeply about sustainability. Follow her small business here.",
    image: 'https://ecoyaan.com/images/about-us-social-media-team-01.png'
  },
  {
    name: "Urmil",
    role: "Social Media",
    description: "Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business here.",
    image: 'https://ecoyaan.com/images/about-us-social-media-team-02.png'
  },
  {
    name: "Divya",
    role: "UX Design",
    description: "Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance.",
    image: 'https://ecoyaan.com/images/about-us-product-team-01.png'
  },
  {
    name: "Prashanith",
    role: "Engineering",
    description: "Prashanith is our front-end engineer, who brings the UX designs to life.",
    image: 'https://ecoyaan.com/images/about-us-product-team-02.png'
  },
  {
    name: "Sai Abhilash",
    role: "Engineering",
    description: "Sai Abhilash is our back-end engineer, who manages and optimizes the infrastructure and logic of our platform.",
    image: 'https://ecoyaan.com/images/about-us-product-team-03.png'
  }
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <section className="bg-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">{aboutContent.title}</h2>
            {aboutContent.description.map((desc, index) => (
              <p key={index} className="mb-4">{desc}</p>
            ))}
            <ul className="list-disc list-inside mb-4">
              {aboutContent.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={aboutContent.image} alt="About Ecoyaan" className="w-3/4 h-auto rounded-md shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index}>
                <img src={value.image} alt={value.title} className="w-16 h-16 mx-auto mb-4"/>
                <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="flex items-center">
                <img src={founder.image} alt={`Founder ${founder.name}`} className="w-32 h-32 rounded-full shadow-lg mx-auto mb-4 md:mb-0"/>
                <div className="ml-4 text-left">
                  <h3 className="text-2xl font-semibold">{founder.name}</h3>
                  <p>{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8">Connect with the founders on LinkedIn here: 
            {founders.map((founder, index) => (
              <a key={index} href={founder.linkedin} className="text-blue-500 ml-2">{founder.name}</a>
            ))}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div key={index}>
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4"/>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
