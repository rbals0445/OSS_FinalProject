
function checkValid(){

    let name = document.getElementById('NAME_input');
    let birth = document.getElementById('BIRTH_input');
    let id = document.getElementById('ID_input');
    let pwd = document.getElementById('PW_input');
    let rpwd = document.getElementById('RPW_input');
    let email = document.getElementById('EMAIL_input');
    if(name.value.length === 0){
        alert("plz check the name");
        return;
    }else if(birth.value.length ===0){
        alert("plz check the birth");
        return;
    }else if(id.value.length ===0){
        alert("plz check the id");
        return;
    }else if(pwd.value.length ===0){
        alert("plz check the pwd");
        return;
    }else if(rpwd.value.length ===0){
        alert("plz check RE-PWD!");
        return;
    }else if(email.value.length ===0){
        alert("plz check the email");
        return;
    }else if(pwd.value !== rpwd.value){
        alert("plz check the password, re-pwd same");
        return;
    }

    const req ={
        name : name.value,
        birth : birth.value,
        id : id.value,
        pwd : pwd.value,
        rpwd: rpwd.value,
        email : email.value,

    };

    console.log(req);
    console.log(JSON.stringify(req));
    const test ={
        name : "test",
    }
    // REST API 이용
    fetch("/process",{
        method : "POST",
        //데이터의 타입, 어떤 타입으로 보낼건지
        headers : {
            "Content-Type" : "application/json",
           // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            alert(res.msg);
        }else{
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error("로그인 중 에러 발생");
    });
        //res로 결과를 받아서 그걸 찍어봅시다.
        //res.json의 반환값은 Promise다
        // res의 반환값은 response stream인데 .json()으로 그걸 읽을 수 있다.
        // response는 data가 모두 받아진 상태가 아니다. .json()으로 스트림을 가져와 다 받을떄까지 읽음.
        //다 읽은 후 body의 text를 Promise형태로 반환한다.
        
    
    
}