import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4">About Us</h4>
          <p>Desinged this using React. This is fully responsive. It generates a new Joke while we click on Button.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul>
            <li>Email: sarsijupadhyay66@gmail.com</li>
            <li>Phone: +9140935896</li>
            <li>Address: Ayodhya, U.P, India</li>
          </ul>
        </div>
       
        <div>
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <ul>
            <li><a href="#facebook" className="hover:text-white">Facebook</a></li>
            <li><a href="#twitter" className="hover:text-white">Twitter</a></li>
            <li><a href="#instagram" className="hover:text-white">Instagram</a></li>
            <li><a href="#linkedin" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
