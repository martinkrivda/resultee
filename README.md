# Resultee

Web application for live results of sports events

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3a8182651a8043d0bb5f75b55ea81448)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=martinkrivda/resultee&utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/416dd1d8-7593-4c1c-bada-47f9169ec98c)](https://codebeat.co/projects/github-com-martinkrivda-resultee-develop)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=martinkrivda_resultee&metric=alert_status)](https://sonarcloud.io/dashboard?id=martinkrivda_resultee)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=martinkrivda_resultee&metric=ncloc)](https://sonarcloud.io/dashboard?id=martinkrivda_resultee)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=martinkrivda_resultee&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=martinkrivda_resultee)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=martinkrivda_resultee&metric=sqale_index)](https://sonarcloud.io/dashboard?id=martinkrivda_resultee)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=martinkrivda_resultee&metric=security_rating)](https://sonarcloud.io/dashboard?id=martinkrivda_resultee)

| Branch      | Status                                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `develop`\* | [![CircleCI](https://circleci.com/gh/martinkrivda/resultee/tree/develop.svg?style=svg)](https://circleci.com/gh/martinkrivda/resultee/tree/develop) |
| `master`    |                                                                                                                                                     |

<sub>\* `develop` was selected as the main branch</sub>

We will be using [Node.js](https://nodejs.org/) v12.14.0.
New JavaScript features (ES2015) are "enabled" for for all modern browsers with [Babel](https://babeljs.io/).

### JavaScript Packages

- [yarn CLI docs](https://yarnpkg.com/en/docs/cli/)
- Useful commands:
  - `yarn install` (install local dependencies - based on `package.json` and `yarn.lock` files)
  - `yarn add <package-name>`
  - `yarn <script-name>` (eg. `yarn start`, `yarn prettier`, see `"scripts"` section in `package.json`)
  - `yarn run`
- Search for packages:
  - [npmjs.com](https://www.npmjs.com/)
  - **[js.coach/react](https://js.coach/react)**

### React

- **[React docs](https://reactjs.org/docs/getting-started.html)**
- frontend app is created using [create-react-app](https://create-react-app.dev/)
- using [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)

### Local development

## BE

```bash
cd backend/
yarn install
yarn dev
```

## FE

```bash
cd frontend/
yarn install
yarn start
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

1. Create your feature branch: `git checkout -b Feature/my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin Feature/my-new-feature`
4. Submit a pull request :D

## Credits

- **Martin Křivda** - *Initial work*

## License

This project is licensed under the GNU General Public License - see the [LICENSE.md](LICENSE.md) file for details
