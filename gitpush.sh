#!/bin/sh
#실행 sh gitspush.sh
start_time=$(date +%s)
end_time=$(date +%s)
current_branch=$(git rev-parse --abbrev-ref HEAD)
target_branch="NoteBookBranch"
echo "현재 브랜치 이름"
# if [ "$current_branch" = "main" ]; then
#     git checkout $target_branch
#     continue
# fi
echo "깃커밋을 실행합니다.$start_time"
git pull origin main
git add . 
git commit -m "자바스크립트 올인원"
git checkout main
git pull origin main
git push origin NoteBookBranch
echo "깃커밋을 종료합니다.$end_time