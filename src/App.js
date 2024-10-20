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
import Home from './pages/Home'; // Import your Home component
import './styles.css';

function App() {
  const tutorials = [
    {
      name: 'Introduction to Blockchain',
      link: '/tutorials/intro-to-blockchain',
      description: 'Learn the basics of blockchain technology, how it works, and why it’s revolutionizing industries.',
    },
    {
      name: 'Solidity for Beginners',
      link: '/tutorials/solidity-for-beginners',
      description: 'Start your journey with smart contract development using Solidity, the programming language of Ethereum.',
    },
    {
      name: 'Building Decentralized Apps (DApps)',
      link: '/tutorials/building-dapps',
      description: 'Understand how to develop decentralized applications that run on the blockchain.',
    },
    {
      name: 'Understanding Ethereum',
      link: '/tutorials/understanding-ethereum',
      description: 'A deep dive into Ethereum, its ecosystem, and how it enables decentralized applications.',
    },
    {
      name: 'Blockchain Security Best Practices',
      link: '/tutorials/blockchain-security',
      description: 'Learn the essential security practices to keep your blockchain apps safe from vulnerabilities.',
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />  {/* Render Home component here */}

            {/* Tutorials route */}
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
