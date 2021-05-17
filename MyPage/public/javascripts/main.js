function mypage()
{
    let url = window.location.search;
    const urlparam = new URLSearchParams(url);
    const id = urlparam.get('id');
    const type = urlparam.get('type');
    if(url.length === 0){
        location.href = "/signin"
    }else{
        location.href = "/mypage?type="+type+"&id="+id;
    }
    

    
    
}

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