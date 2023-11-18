# KUBI Website

This repository holds an earlier version of our recreated website, which is now out of date. Please reference our KUBI-website repo for the new version. 

The website will be able to integrate with the DAO, DeWork, Github, Discord, Notion, Storefront, and KUBI Calendar. 

### Getting started
1. Clone the repository so that you have a local version on your computer.
2. Navigate to the webapp folder and run 'yarn install' to install dependencies.
3. Use 'git checkout -b <branch name>' to create a new branch. 
4. Use 'yarn start' to run the website locally.

### Making changes
1. Before making changes, be sure to fetch and pull changes from the origin. This ensures you have the most updated code. Use 'git pull origin <branch name>' to pull changes. 
2. Use 'git commit -m "message goes here"' to commit your changes as you go. 
2. Use 'git push' to push your commits to the origin. Don't push anything with errors, please!
3. When you're ready for your changes to be included in the master branch, create a Pull Request with detailed descriptions.

### Most importantly
1. Always be sure to pull changes before you make new ones.
2. Always be sure you're working on a separate branch.
3. Don't hesitate to ask for help! We are a team and we are here to help each other. 

## DAO and Smart Contract  Development
1. make sure hardhat is working by running npx hardhat compile
2. should generate new folders cache nd artifacts in the webapp. these will be ignored by git
3. IMPORTANT! if you compile a new or updated smart contract remember to move the new .json file from artificats into ABI folder under src



Reach out to Emma, Hudson, or Payden with any questions.
