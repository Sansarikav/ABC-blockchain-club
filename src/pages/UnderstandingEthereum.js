import React from 'react';
import '../styles.css'; // Ensure this path is correct

const UnderstandingEthereum = () => {
  return (
    <div className="tutorial-content">
      <h1 className="tutorial-title">Understanding Ethereum</h1>
      <img 
        src={require('../assets/images/understanding-ethereum.jpg')} // Adjust path if necessary
        alt="Understanding Ethereum"
        className="tutorial-image" 
      />
      <p className="tutorial-description">
        Ethereum is a decentralized blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (DApps). It introduced the concept of programmable money and has revolutionized the way we think about trust and transactions in the digital world.
      </p>

      <h2 className="tutorial-subtitle">Key Features of Ethereum</h2>
      <ul className="key-concepts">
        <li><strong>Smart Contracts:</strong> Self-executing contracts with the terms directly written into code, allowing for automation and trustless interactions.</li>
        <li><strong>Decentralization:</strong> No central authority controls the network, promoting transparency and security.</li>
        <li><strong>Ethereum Virtual Machine (EVM):</strong> The runtime environment for executing smart contracts, ensuring that all transactions are processed consistently across the network.</li>
        <li><strong>Tokens and ERC Standards:</strong> Ethereum supports various token standards, including ERC-20 for fungible tokens and ERC-721 for non-fungible tokens (NFTs).</li>
        <li><strong>Interoperability:</strong> Ethereum can interact with other blockchains, enabling the development of cross-chain applications.</li>
      </ul>

      <h2 className="tutorial-subtitle">Architecture of Ethereum</h2>
      <p className="tutorial-description">
        Ethereum's architecture is comprised of several layers:
      </p>
      <ul>
        <li><strong>Application Layer:</strong> Where DApps and user interfaces are built.</li>
        <li><strong>Protocol Layer:</strong> Defines the rules of the network, including consensus algorithms and the EVM.</li>
        <li><strong>Network Layer:</strong> Manages the nodes and communication between them.</li>
        <li><strong>Data Layer:</strong> Where all blockchain data is stored, including the state and transaction history.</li>
      </ul>

      <h2 className="tutorial-subtitle">Use Cases of Ethereum</h2>
      <ul className="applications-list">
        <li><strong>Decentralized Finance (DeFi):</strong> Platforms like Uniswap and Aave allow users to trade, lend, and borrow without intermediaries.</li>
        <li><strong>Non-Fungible Tokens (NFTs):</strong> Digital collectibles and art are bought and sold on platforms like OpenSea and Rarible.</li>
        <li><strong>Decentralized Autonomous Organizations (DAOs):</strong> Organizations that are governed by smart contracts, enabling decentralized decision-making.</li>
        <li><strong>Supply Chain Management:</strong> Ethereum can provide transparency and traceability in supply chains.</li>
        <li><strong>Identity Management:</strong> Securely managing identities and credentials using blockchain technology.</li>
      </ul>

      <h2 className="tutorial-subtitle">Resources</h2>
      <ul className="applications-list">
        <li><a href="https://ethereum.org/en/whitepaper/" target="_blank" rel="noopener noreferrer">Ethereum White Paper</a></li>
        <li><a href="https://ethereum.org/en/developers/docs/" target="_blank" rel="noopener noreferrer">Ethereum Developer Documentation</a></li>
        <li><a href="https://www.coindesk.com/learn/what-is-ethereum/" target="_blank" rel="noopener noreferrer">What is Ethereum? - Coindesk</a></li>
        <li><a href="https://www.investopedia.com/terms/e/ethereum.asp" target="_blank" rel="noopener noreferrer">Ethereum - Investopedia</a></li>
      </ul>

      <p className="tutorial-note">
        Understanding Ethereum is crucial for developers and enthusiasts looking to leverage blockchain technology for innovative solutions. As the blockchain landscape continues to evolve, staying updated with Ethereum's developments is essential.
      </p>
    </div>
  );
};

export default UnderstandingEthereum;
