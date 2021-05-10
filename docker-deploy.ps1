$COMMIT_HASH=$(git rev-parse --short HEAD)
#yarn build
docker build -t tradewindowdev/web-cms:ui_$COMMIT_HASH .
docker push tradewindowdev/web-cms:ui_$COMMIT_HASH