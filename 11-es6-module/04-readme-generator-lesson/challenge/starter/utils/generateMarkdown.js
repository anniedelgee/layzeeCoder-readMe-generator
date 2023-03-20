// function to generate markdown for README
// use conditional statements to generate table of contents depending on what information ahs been provided by the user
function generateMarkdown(userResponses, userInfo) {
  
  let tableOfContents= '## Table of Contents' ;

  if (userResponses.abstract !== '') { tableOfContents +=
  ` * [Abstract](#abstract)`};

  if (userResponses.installation !== '') { tableOfContents +=
  ` * [Installation](#installation)`};

  if (userResponses.usage !== '') { tableOfContents +=
  ` * [Usage](#usage)`};

  if (userResponses.contributions !== '') { tableOfContents +=
  ` * [Contributions](#contributions)`};

  if (userResponses.credits !== '') { tableOfContents +=
  ` * [Credits](#credits)`};
  
  if (userResponses.tests !== '') { tableOfContents +=
  ` * [Tests](#tests)`};

  if (userResponses.installation !== '') { tableOfContents +=
  ` * [License](#license)`};
  return `# ${data.title}

  ${renderBadge(data.license)} 
  
  ## Abstract
  ${data.abstract}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

`;
}
 //write conditional statements for license shields 
 const LicenseBadge = (response)  => 
 {
   if(response.license == "Apache 2.0 License")return"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
   if(response.license == "Boost Software License 1.0")return"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
   if(response.license == "BSD 3-Clause License")return"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
   if(response.license == "Eclipse Public License 1.0")return"[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
   if(response.license == "GNU GPL v3")return"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
   if(response.license == "IBM Public License Version 1.0")return"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
   if(response.license == "The MIT License")return"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
   if(response.license == "Mozilla Public License 2.0e")return"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
 };

module.exports = generateMarkdown;
