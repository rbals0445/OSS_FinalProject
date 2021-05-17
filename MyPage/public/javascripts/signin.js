function login()
{
    
    let id = document.getElementById('ID_input');
    let pwd = document.getElementById('PW_input');

    if(id.value.length === 0){
        alert("plz check the id");
        return;
    }else if(pwd.value.length === 0){
        alert("plz check the pwd");
        return;
    }

    const req ={
        id : id.value,
        pwd : pwd.value,
    };
    
    fetch("/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then( (res) => res.json())
    .then( (res) => {
        if(res.success){
            //페이지 이동
            //alert(res.msg + " type = "+res.type);
            location.href = "/?type="+res.type+"&id="+res.id;
            //location.href = "/";

        }else{
            //비밀번호 확인 요청
            alert(res.msg);
        }
    })
    .catch( (err) =>{
        console.error("로그인 중 에러 발생");
    });

}