

export let indexHandler = (req,res)=>{
    res.setHeader('Content-Type','text/json; charset=utf-8')
    let json = JSON.stringify({"status":200})
    res.end(json);
}

