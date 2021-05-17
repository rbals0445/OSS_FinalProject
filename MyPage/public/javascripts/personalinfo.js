function mainpage()
{
    let url = window.location.search;
    const urlparam = new URLSearchParams(url);
    const id = urlparam.get('id');
    const type = urlparam.get('type');
    if(url.length === 0){
        location.href = "/"
    }else{
        location.href = "/?type="+type+"&id="+id;
    }   
}

function modify()
{
    let url = window.location.search;
    const urlparam = new URLSearchParams(url);
    const id = urlparam.get('id');
    let name = document.getElementById('NAME_input');
    let birth = document.getElementById('BIRTH_input');
    let pwd = document.getElementById('PW_input');
    
    let rpwd = document.getElementById('RPW_input');
    let email = document.getElementById('EMAIL_input');
    if(name.value.length === 0){
        alert("plz check the name");
        return;
    }else if(birth.value.length ===0){
        alert("plz check the birth");
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
        id : id,
        pwd : pwd.value,
        rpwd: rpwd.value,
        email : email.value,

    };

    fetch("/modify",{
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
            name.value ="";
            birth.value = "";
            pwd.value = "";
            rpwd.value = "";
            email.value = "";
            alert(res.msg);
        }else{
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error("로그인 중 에러 발생");
    });
}