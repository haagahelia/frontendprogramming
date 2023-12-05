---
title: 'Github'
sidebar_position: 7
---
### Submitting assignments in Github

1. Create the project for the exercise. Create a local git repository in your Vite project.

```bash
git init
```

2. Complete the exercise and store it in your repository (add, commit).

```bash
git add .
git commit -m "Exercise complete"
```

3. Create a repository for your project in GitHub and synchronize your changes there:
- Create a new, completely empty repository in GitHub.
- Configure this repository as a remote for your local repository and push the local changes to
your GitHub repository according to GitHub instructions (…or push an existing repository from
the command line), for example:
```bash
git remote add origin https://github.com/<repository_name>.git
git push -u origin master
```
Example explained:
- Configure a remote called origin in your local repository, the address of the remote is given in the command.
- Then synchronize all changes in branch master of your local repository to remote repository origin.
Option -u (--set-upstream) configures the local master branch to follow the master branch in the remote repository. Thus it is no longer necessary to define the target repository and source branch in push operations, `git push` suffices.
If your repository is not public, grant teacher's GitHub user access to the repository (Settings/Collaborators/Add people).

**Submit just a link to the repository in GitHub.**

When you make further changes in your project, commit the changes in your local repository and push them to the GitHub repository:
```bash
git add .
$ git commit -m "Exercise enhanced"
$ git push
```