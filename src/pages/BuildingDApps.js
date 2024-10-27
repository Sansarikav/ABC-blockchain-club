import React from 'react';
import '../styles.css'; // Ensure this path is correct

const BuildingDApps = () => {
  return (
    <div className="tutorial-content">
      <h1 className="tutorial-title">Building a Decentralized App on Ethereum</h1>
      <img 
        src={require('../assets/images/building-dapps.jpeg')} // Adjust path if necessary
        alt="Building DApp"
        className="tutorial-image" 
      />
      <p className="tutorial-description">
        Decentralized applications (DApps) leverage blockchain technology to create applications that are secure, transparent, and resistant to censorship. Ethereum, being the most popular platform for DApp development, provides robust tools and frameworks for developers.
      </p>

      <h2 className="tutorial-subtitle">Key Concepts</h2>
      <ul className="key-concepts">
        <li>Smart Contracts: Self-executing contracts with the terms directly written into code.</li>
        <li>Ethereum Virtual Machine (EVM): The runtime environment for executing smart contracts.</li>
        <li>Web3.js: A JavaScript library that interacts with the Ethereum blockchain.</li>
        <li>IPFS: InterPlanetary File System, a peer-to-peer file storage system used to host DApp data.</li>
      </ul>

      <h2 className="tutorial-subtitle">Steps to Build a DApp</h2>
      <ol>
        <li>
          <strong>Set Up Your Development Environment:</strong>
          <ul>
            <li>Install Node.js and npm.</li>
            <li>Use Truffle or Hardhat for smart contract development.</li>
            <li>Install Ganache for local blockchain simulation.</li>
          </ul>
        </li>
        <li>
          <strong>Write Smart Contracts:</strong>
          <ul>
            <li>Utilize Solidity to write your smart contracts.</li>
            <li>Test contracts using JavaScript testing frameworks like Mocha.</li>
          </ul>
        </li>
        <li>
          <strong>Deploy Smart Contracts:</strong>
          <ul>
            <li>Deploy your contracts to the Ethereum mainnet or a test network (Rinkeby, Ropsten).</li>
            <li>Use tools like Remix or Truffle to facilitate deployment.</li>
          </ul>
        </li>
        <li>
          <strong>Build the Frontend:</strong>
          <ul>
            <li>Use React or Angular to create the user interface.</li>
            <li>Integrate Web3.js to connect your frontend to the Ethereum network.</li>
          </ul>
        </li>
        <li>
          <strong>Test Your DApp:</strong>
          <ul>
            <li>Test on a local network and then deploy on a testnet.</li>
            <li>Conduct audits and security checks to ensure the DApp is secure.</li>
          </ul>
        </li>
        <li>
          <strong>Deploy Your DApp:</strong>
          <ul>
            <li>Host your frontend on platforms like IPFS or traditional web servers.</li>
            <li>Make your DApp publicly accessible.</li>
          </ul>
        </li>
      </ol>

      <h2 className="tutorial-subtitle">Resources</h2>
      <ul className="applications-list">
        <li><a href="https://ethereum.org/en/developers/docs/" target="_blank" rel="noopener noreferrer">Ethereum Developer Documentation</a></li>
        <li><a href="https://www.trufflesuite.com/docs/truffle/overview" target="_blank" rel="noopener noreferrer">Truffle Suite Documentation</a></li>
        <li><a href="https://hardhat.org/getting-started/" target="_blank" rel="noopener noreferrer">Hardhat Getting Started</a></li>
        <li><a href="https://docs.ipfs.io/" target="_blank" rel="noopener noreferrer">IPFS Documentation</a></li>
        <li><a href="https://www.codecademy.com/learn/learn-solidity" target="_blank" rel="noopener noreferrer">Learn Solidity on Codecademy</a></li>
      </ul>

      <p className="tutorial-note">
        Building a DApp involves understanding blockchain technology, Solidity programming, and front-end frameworks. It's crucial to keep learning and experimenting as the technology evolves.
      </p>
    </div>
  );
};

export default BuildingDApps;
