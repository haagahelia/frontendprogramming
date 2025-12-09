---
title: 'Install libraries'
sidebar_position: 3
---
### Npm basics
When you are using third-party libraries in your React project, you should know how to install them. The installation is done in the project folder using **npm** (Node Package Manager). Most third-party libraries are published publicly so that anyone can download and use them.

The following npm command is used to install libraries or packages to your React project. The command is executed in your project folder using the terminal.
```bash
npm install <package-name>
```
By default, the latest stable version is installed. If needed, you can specify the version number that you want to install.
```bash
npm install <package-name>@1.2.3
```
Npm is using the semantic version numbering. Read more in npm documentation https://docs.npmjs.com/about-semantic-versioning.

You can uninstall the installed package using the following command.
```bash
npm uninstall <package-names>
```
If you want to see a list of all installed packages and their versions in your project, you can execute the following command in terminal:
```bash
npm list
```
In our React projects, the list of dependencies can be really big, and often you are only interested in the top-level packages.  Top level packages are the packages that you explicitly installed and specified for your project. To see a list of top-level installed packages and their versions, use the following command:
```bash
npm list --depth=0
```
### Security

npm can identify security vulnerabilities in your dependencies. To check for vulnerabilities in your project, run:
```bash
npm audit
```
This command scans your dependencies and displays any known security issues. To automatically fix vulnerabilities use:
```bash
npm audit fix
```
It's recommended to regularly run `npm audit` to keep your dependencies secure and up to date. Read more in the [npm audit documentation](https://docs.npmjs.com/cli/v11/commands/npm-audit).


---
### Further reading
- Npm Getting started:  https://docs.npmjs.com/getting-started
