
Command line instructions

Git global setup
git config --global user.name "zjf"
git config --global user.email "zjf@cxm.com"

Create a new repository
git clone git@39.107.121.76:front/cxmH5_10.git
cd cxmH5_10
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Existing folder
cd existing_folder
git init
git remote add origin git@39.107.121.76:front/cxmH5_10.git
git add .
git commit -m "Initial commit"
git push -u origin master

Existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@39.107.121.76:front/cxmH5_10.git
git push -u origin --all
git push -u origin --tags