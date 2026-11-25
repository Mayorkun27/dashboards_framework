<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Mayorkun27/dashboards_framework.git">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Dashboards Framework</h3>

  <p align="center">
    A ready-to-use dashboard starter for React and TypeScript projects.
    <br />
    <a href="https://github.com/Mayorkun27/dashboards_framework.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Mayorkun27/dashboards_framework.git">View Demo</a>
    &middot;
    <a href="https://github.com/Mayorkun27/dashboards_framework.git/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Mayorkun27/dashboards_framework.git/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/Mayorkun27/dashboards_framework.git)

Dashboards Framework helps developers put together admin panels and analytics dashboards without building the same common pieces over and over. It comes with pre-built components such as overview cards, sidebars, modals, and search popups that can be dropped into a project and wired up to real data.

The goal is to give teams a clean starting point so they can focus on business logic instead of re-creating dashboard UI from scratch. It is not a finished product, more like a solid foundation you can extend and customize to fit your own application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is built with modern front-end tooling and React.

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Vite][Vite]][Vite-url]
* [![ESLint][ESLint]][ESLint-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need a recent version of Node.js and npm installed.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Mayorkun27/dashboards_framework.git
   ```
2. Navigate into the project directory
   ```sh
   cd dashboards_framework
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open your browser and visit the local URL shown in the terminal, usually `http://localhost:5173`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Import the components you need and drop them into your dashboard pages.

```tsx
import { OverviewCards } from './components/cards/OverviewCards';
import { Sidebar } from './components/navs/Sidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <OverviewCards />
      </main>
    </div>
  );
}
```

For more examples, please refer to the source files in the `src/components` folder.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Basic reusable card and modal components
- [x] Sidebar and search popup navigation
- [ ] Add more dashboard widget examples
- [ ] Add Storybook stories for components
- [ ] Improve theming and color customization

See the [open issues](https://github.com/Mayorkun27/dashboards_framework.git/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star. Thanks again.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `./LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Mayorkun27 - [https://github.com/Mayorkun27](https://github.com/Mayorkun27)

Project Link: [https://github.com/Mayorkun27/dashboards_framework.git](https://github.com/Mayorkun27/dashboards_framework.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thanks to the following tools and communities that make this project possible.

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [ESLint](https://eslint.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Mayorkun27/dashboards_framework.svg?style=for-the-badge
[contributors-url]: https://github.com/Mayorkun27/dashboards_framework.git/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Mayorkun27/dashboards_framework.svg?style=for-the-badge
[forks-url]: https://github.com/Mayorkun27/dashboards_framework.git/network/members
[stars-shield]: https://img.shields.io/github/stars/Mayorkun27/dashboards_framework.svg?style=for-the-badge
[stars-url]: https://github.com/Mayorkun27/dashboards_framework.git/stargazers
[issues-shield]: https://img.shields.io/github/issues/Mayorkun27/dashboards_framework.svg?style=for-the-badge
[issues-url]: https://github.com/Mayorkun27/dashboards_framework.git/issues
[license-shield]: https://img.shields.io/github/license/Mayorkun27/dashboards_framework.svg?style=for-the-badge
[license-url]: https://github.com/Mayorkun27/dashboards_framework.git/blob/main/LICENSE
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[ESLint]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://dokugen.samueltuoyo.com)