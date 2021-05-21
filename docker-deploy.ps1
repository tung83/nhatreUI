$COMMIT_HASH=$(git rev-parse --short HEAD)
#yarn build
docker build -t Momshousedev/web-cms:ui_$COMMIT_HASH .
docker push Momshousedev/web-cms:ui_$COMMIT_HASH