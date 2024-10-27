import React from 'react';
import '../styles.css'; // Make sure to import your styles
import blockchainImage from '../assets/images/intro-to-blockchain.jpeg'; // Adjust the path as necessary

const IntroToBlockchain = () => {
  return (
    <div className="tutorial-content">
      <h1 className="tutorial-title">Introduction to Blockchain</h1>
      <img src={blockchainImage} alt="Introduction to Blockchain" className="tutorial-image" />
      <p className="tutorial-description">
        Blockchain is a distributed ledger technology that enables secure and transparent transactions without the need for intermediaries. 
        It records transactions across multiple computers so that the recorded data cannot be altered retroactively.
      </p>

      <h2 className="tutorial-subtitle">Key Concepts</h2>
      <ul className="key-concepts">
        <li><strong>Decentralization:</strong> Eliminates the need for a central authority by distributing control across a network of nodes.</li>
        <li><strong>Distributed Ledger:</strong> A shared database that maintains a complete history of all transactions in a secure and verifiable manner.</li>
        <li><strong>Consensus Mechanisms:</strong> Algorithms that enable all nodes in the network to agree on the validity of transactions (e.g., Proof of Work, Proof of Stake).</li>
        <li><strong>Cryptography:</strong> Secures transactions and controls the creation of new units, ensuring data integrity and confidentiality.</li>
      </ul>

      <h2 className="tutorial-subtitle">Applications of Blockchain</h2>
      <ul className="applications-list">
        <li><strong>Cryptocurrencies:</strong> Digital currencies like Bitcoin and Ethereum that rely on blockchain for secure transactions.</li>
        <li><strong>Smart Contracts:</strong> Self-executing contracts with the terms of the agreement directly written into code.</li>
        <li><strong>Supply Chain Management:</strong> Enhances transparency and traceability in supply chains, reducing fraud and errors.</li>
        <li><strong>Voting Systems:</strong> Ensures secure and tamper-proof voting processes in elections.</li>
        <li><strong>Healthcare:</strong> Secure sharing of patient records between healthcare providers while maintaining privacy.</li>
      </ul>

      <h2 className="tutorial-subtitle">Challenges Facing Blockchain Technology</h2>
      <ul>
        <li><strong>Scalability:</strong> As more users join the network, processing transactions quickly and efficiently becomes a challenge.</li>
        <li><strong>Regulatory Concerns:</strong> Governments are still figuring out how to regulate blockchain technologies and cryptocurrencies.</li>
        <li><strong>Energy Consumption:</strong> Proof of Work consensus mechanisms, like those used in Bitcoin, require significant energy resources.</li>
        <li><strong>Security Risks:</strong> Although blockchain is secure, vulnerabilities can still exist in applications built on top of it.</li>
      </ul>

      <h2 className="tutorial-subtitle">Further Reading</h2>
      <ul>
        <li><a href="https://www.blockchain.com/learning-portal/what-is-blockchain" target="_blank" rel="noopener noreferrer">What is Blockchain? - Blockchain.com</a></li>
        <li><a href="https://www.ibm.com/blockchain/what-is-blockchain" target="_blank" rel="noopener noreferrer">What is Blockchain Technology? - IBM</a></li>
        <li><a href="https://ethereum.org/en/what-is-ethereum/" target="_blank" rel="noopener noreferrer">What is Ethereum? - Ethereum.org</a></li>
        <li><a href="https://www.coindesk.com/learn/" target="_blank" rel="noopener noreferrer">Learn About Blockchain and Cryptocurrency - CoinDesk</a></li>
      </ul>

      <p className="tutorial-note">
        This tutorial serves as an introduction to the fundamental concepts of blockchain technology. For a deeper understanding, consider exploring the further reading resources.
      </p>
    </div>
  );
}

export default IntroToBlockchain;
