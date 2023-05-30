const express = require('express');
const app = express();
//process.env.port는 환경설정 내용이다. 
//node js 환경 설정에서 포트 번호가 지정되어져 있다면 그 포트 번호를 가져다 쓴다. 지정되어져 있지 않으면 80번 포트가 쓰인다. 
let port = process.env.PORT || 80;

app.use(express.static("public_html"));
app.listen(port, function(){
    console.log("HTML 서버 시작됨");
});