---
title: 'Github Classroom'
sidebar_position: 5
---
## Submitting assignments

We'll use **GitHub Classroom** to manage your assignments. Please follow these instructions carefully for each submission. 

:::note
**This step must be done once at the start of the course.**

A **roster** is a list of names for the students who participate in a course. We use that to link students names and GitHub accounts.

When you first time navigate to the assignment URL, you will be prompted to authorize GitHub Classroom to access your classroom repositories. Click "Authorize GitHub" to continue.

Then, You will see a list of names. Choose your full name from the list and Click "Join classroom".

If your name isn’t listed, let your teacher know. Don’t choose someone else’s name!
:::

1. **Accept the Assignment**
- Go to the assignment link provided by your teacher (e.g., posted in Moodle or Teams).
- Click the link and sign in with your GitHub account.
- GitHub will create a private repository just for you.

Example repository name: `frontend-assignment-1-username`

 2. **Clone Your Repository**
- Open a terminal or your code editor (e.g., VS Code), then:
```bash
git clone https://github.com/org-name/frontend-assignment-1-username.git
cd frontend-assignment-1-username
```
Replace the URL with your actual repo link.

- Install dependecies.
```bash
npm install
```

3. **Work on Your Code**

- Follow the instructions in the README.md.
- Edit the files as needed for the assignment. Save your work.

 4. **Run the Linter Locally (Optional but Recommended)**
- Before pushing, you can check your code using:
``` bash
npm run lint
```
- Make sure there are no linting errors. You must fix all of them to receive a grade.

 5. **Push Your Code to GitHub**
```bash
git add .
git commit -m "Your comments"
git push
```
- This will trigger a GitHub Actions workflow.
- Make Sure the Linter Workflow Passes.
- Go to your repository on GitHub and click the "Actions" tab. You should see a workflow running. It must complete successfully (green checkmark).

 6. **Submission Complete**
Once:
- Your code is pushed to GitHub and
- The linter passes
- Finally, **Mark assignment as done** in the Moodle.

:::note
You must push your code **before the deadline**, and the **linter must pass** for the submission to be valid. Late or failed-linting submissions will not be graded.
:::

You can also watch Github's video about GitHub classroom assignment [here](https://www.youtube.com/watch?v=ObaFRGp_Eko).

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

---
### Further reading
- https://docs.github.com/en/get-started/start-your-journey