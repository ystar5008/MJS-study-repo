const { exec } = require("child_process");

// 실행할 명령어
const command: string | null = "ipconfig"; // 실행할 명령어를 여기에 입력하세요.
// 명령어 실행
exec(command, (error, stdout, stderr): void => {
  if (error) {
    console.error(`에러 발생: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
