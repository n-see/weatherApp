set -e

apt-get update
apt-get install -y curl git-lfs

git lfs install

# Pull only the NGP.mp4 LFS file
git lfs pull -I "NGP.mp4"

npm run build