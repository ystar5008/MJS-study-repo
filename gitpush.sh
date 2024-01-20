#!/bin/sh
#실행 sh gitspush.sh
start_time=$(date +%s)
end_time=$(date +%s)
echo "깃커밋을 실행합니다.$start_time"
git pull origin main
git add . 
git commit -m "자바스크립트 올인원"
git push origin main
echo "깃커밋을 종료합니다.$end_time