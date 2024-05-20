import React from 'react';
import './Home.css';
import Carousel from '../Carousel/Carousel';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const slides = [
  {
    image: image1,
    title: 'Follow us on Instagram',
    buttonText: 'Follow Us',
  },
  {
    image: image2,
    title: 'Join our community',
    buttonText: 'Learn More',
  },
  {
    image: image3,
    title: 'Curated Eco-friendly Products',
    buttonText: 'Shop Now',
  }
];
const sections = [
  {
    id: 1,
    image: 'https://media.licdn.com/dms/image/D4E12AQFusbuYmY902w/article-cover_image-shrink_720_1280/0/1696348021750?e=2147483647&v=beta&t=0LYJBPKDzD5iw9xuUfyTg74j_wtrTunXl20V3JxuPhY',
    title: 'Creating a Sustainable Future Together',
    text: 'Join our community to promote eco-friendly practices. Our vision is to build an environmentally conscious community. Partner with us for all things sustainable, and stay motivated with the latest climate change updates, policies, and tips.',
  },
  {
    id: 2,
    image: 'https://www.capgemini.com/wp-content/uploads/2022/09/CRI_Sustainability-By-Design_WP.jpg',
    title: 'Carefully Curated Eco-friendly Products',
    text: 'Every purchase can make a positive impact on the planet. Soon, we will connect you with sustainable products selected for their environmental and social benefits.',
  },
  {
    id: 3,
    image: 'https://i.ytimg.com/vi/vP_VtAXpc2I/maxresdefault.jpg',
    title: 'Supporting Sustainable Businesses',
    text: 'Are you a business committed to sustainability? Showcase your products to eco-conscious consumers. Our platform supports businesses that are transparent, ethical, and innovative in their sustainability efforts.',
  }
];

const Home = () => {
  return (
    <div className="pb-16">
      <Carousel slides={slides} />
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`p-8 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} flex flex-col md:flex-row items-center`}
        >
          <div className={`w-full md:w-1/2 flex justify-center ${index % 2 === 0 ? 'md:justify-end md:order-2' : 'md:justify-start'}`}>
            <img src={section.image} alt={section.title} className="w-full md:w-3/4 lg:w-2/3 h-auto object-cover rounded-md mb-4 md:mb-0 md:ml-4 transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className={`text-center md:text-left md:w-1/2 ${index % 2 === 0 ? 'md:order-1 md:pr-4' : 'md:pl-4'}`}>
            <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
            <p className="text-lg text-gray-700">{section.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;