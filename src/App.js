import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TutorialSection from './components/TutorialSection';
import Footer from './components/Footer';
import IntroToBlockchain from './pages/IntroToBlockchain';
import SolidityForBeginners from './pages/SolidityForBeginners';
import BuildingDApps from './pages/BuildingDApps';
import UnderstandingEthereum from './pages/UnderstandingEthereum';
import BlockchainSecurity from './pages/BlockchainSecurity';
import Home from './pages/Home'; 
import './styles.css';

// Import images
import introToBlockchainImg from './assets/images/intro-to-blockchain.jpeg';
import solidityForBeginnersImg from './assets/images/solidity-for-beginners.jpeg';
import buildingDAppsImg from './assets/images/building-dapps.jpeg';
import understandingEthereumImg from './assets/images/understanding-ethereum.jpg';
import blockchainSecurityImg from './assets/images/blockchain-security.jpeg';

function App() {
  const tutorials = [
    {
      name: 'Introduction to Blockchain',
      link: '/tutorials/intro-to-blockchain',
      description: 'Learn the basics of blockchain technology, how it works, and why it’s revolutionizing industries.',
      image: introToBlockchainImg,  // Add image path here
    },
    {
      name: 'Solidity for Beginners',
      link: '/tutorials/solidity-for-beginners',
      description: 'Start your journey with smart contract development using Solidity, the programming language of Ethereum.',
      image: solidityForBeginnersImg,  // Add image path here
    },
    {
      name: 'Building Decentralized Apps (DApps)',
      link: '/tutorials/building-dapps',
      description: 'Understand how to develop decentralized applications that run on the blockchain.',
      image: buildingDAppsImg,  // Add image path here
    },
    {
      name: 'Understanding Ethereum',
      link: '/tutorials/understanding-ethereum',
      description: 'A deep dive into Ethereum, its ecosystem, and how it enables decentralized applications.',
      image: understandingEthereumImg,  // Add image path here
    },
    {
      name: 'Blockchain Security Best Practices',
      link: '/tutorials/blockchain-security',
      description: 'Learn the essential security practices to keep your blockchain apps safe from vulnerabilities.',
      image: blockchainSecurityImg,  // Add image path here
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<TutorialSection tutorials={tutorials} />} />
            <Route path="/tutorials/intro-to-blockchain" element={<IntroToBlockchain />} />
            <Route path="/tutorials/solidity-for-beginners" element={<SolidityForBeginners />} />
            <Route path="/tutorials/building-dapps" element={<BuildingDApps />} />
            <Route path="/tutorials/understanding-ethereum" element={<UnderstandingEthereum />} />
            <Route path="/tutorials/blockchain-security" element={<BlockchainSecurity />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
