# Front End Programming

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation
```
$ yarn
```
### Local Development
```
$ yarn start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```
### Contributing

Anyone who has write access to the repository is welcome to contribute to the contents of the material. 

#### Small fixes 

If the changes are small like typographical or formatting corrections or other small fixes, you can make the changes in `main` branch and push them directly to the repository:

1. Make and commit your changes in the `main` branch of your local repository
```
$ git add .
$ git commit -m "Brief description of the changes"
```
3. Get all new commits form the remote repository and push your changes to remote repository
```
$ git pull
$ git push
```

#### New content or major changes to existing content

If you are making a significant change, it should be done as a _pull request_. 

Using pull requests enable the changes to be reviewed by other repository users before merging and the changes to be adopted into use in a controlled fashion.

For a pull request you need to create a feature branch for your changes in the repository. 

1. Create the feature branch (give a descriptive name) and set it active:
```
$ git checkout -b new-branch-name
```
2. Make and commit your changes in the new branch.
3. Push the branch to remote repository
```
$ git push origin new-branch-name
```
4. Login to GitHub and open a new pull request. Set `main` as the _base branch_ and your feature branch as the _head branch_. 

[Instructions for creating pull requests in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

The feature branch will be removed from the remote repository after the pull request has been merged into the `main` branch of the remote repository. 

After merging you can pull the changes back to your local `main` branch and remove the feature branch from your local repository.
```
$ git checkout main
$ git pull
$ git remote -d new-branch-name
```

