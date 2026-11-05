# Publish on GitHub Pages

The workflow at `.github/workflows/pages.yml` builds the React site in `Data-Analysis-Site-Files` and deploys it whenever `main` or `master` is pushed.

1. Commit the `.github` folder and `Data-Analysis-Site-Files` to the repository.
2. Push the changes to `main` or `master`.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
4. Open the **Actions** tab and wait for **Deploy Data Analysis site to GitHub Pages** to finish. The workflow summary links to the published site.

The Vite build uses relative asset paths, so it works for both a project site (`https://owner.github.io/repository/`) and a user or organisation site (`https://owner.github.io/`).
