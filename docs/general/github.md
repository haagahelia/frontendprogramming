---
title: 'Classroom50'
sidebar_position: 5
---
## Submitting assignments

We'll use **Classroom50** (https://classroom50.org/) to manage your assignments. Please follow these instructions carefully for each submission.

:::note
**This step must be done once at the start of the course.**

GitHub username is required to be able to submit assignments, and the pre-assignment is where you submit your GitHub username before the course starts.
:::

There are two recommended ways to use Classroom50:
1. **Web UI** – use the browser-based interface for managing assignments at [classroom50.org](https://classroom50.org/). The student guide can be found here: [Web Student Guide](https://github.com/foundation50/classroom50/wiki/Web-Student-Guide).
2. **VS Code extension** – use the extension for a more integrated workflow in your editor: [Classroom50 VS Code extension](https://marketplace.visualstudio.com/items?itemName=juhahinkula.classroom-extension).

**These steps explain how to complete and submit assignments using Classroom50.**

1. **Accept the Assignment**
- Go to the assignment link provided by your teacher (e.g., posted in Moodle or Teams). Or accept assignment using VS Code extension.
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
