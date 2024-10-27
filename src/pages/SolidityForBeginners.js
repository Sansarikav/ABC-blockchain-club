import React from 'react';
import '../styles.css'; // Adjust the path if necessary
import solidityImage from '../assets/images/solidity-for-beginners.jpeg'; // Adjust the path if necessary

const SolidityForBeginners = () => {
  return (
    <div className="tutorial-content">
      <h1 className="tutorial-title">Introduction to Solidity</h1>
      <img src={solidityImage} alt="Solidity Programming" className="tutorial-image" />
      
      <p className="tutorial-description">
        Solidity is a high-level, contract-oriented programming language designed for developing smart contracts on various blockchain platforms, most notably Ethereum. 
        It is influenced by JavaScript, Python, and C++, making it accessible to developers familiar with those languages.
      </p>

      <h2 className="tutorial-subtitle">Key Features of Solidity:</h2>
      <ul className="key-concepts">
        <li>Statically Typed: Type checking is done at compile time.</li>
        <li>Object-Oriented: Supports inheritance and polymorphism.</li>
        <li>Contract-Based: Focuses on building contracts that are executed on the blockchain.</li>
        <li>Support for Complex User-Defined Types: Allows developers to create complex data structures.</li>
      </ul>

      <h2 className="tutorial-subtitle">Basic Syntax Example:</h2>
      <pre className="code-block">
        {`pragma solidity ^0.8.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}`}
      </pre>

      <h2 className="tutorial-subtitle">Use Cases:</h2>
      <ul className="applications-list">
        <li>Decentralized Finance (DeFi)</li>
        <li>Initial Coin Offerings (ICOs)</li>
        <li>Supply Chain Management</li>
        <li>Voting Systems</li>
      </ul>

      <h2 className="tutorial-subtitle">Getting Started with Solidity:</h2>
      <p className="tutorial-description">
        To start programming in Solidity, you can use the Remix IDE, a web-based development environment that makes it easy to write, test, and deploy smart contracts. 
        Follow these steps:
      </p>
      <ol className="tutorial-description">
        <li>Visit the <a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer">Remix IDE</a>.</li>
        <li>Create a new file with the `.sol` extension.</li>
        <li>Write your Solidity code and test it directly in the IDE.</li>
      </ol>

      <p className="tutorial-note">
        Note: Always test your smart contracts thoroughly before deploying them to the mainnet.
      </p>
    </div>
  );
};

export default SolidityForBeginners;
