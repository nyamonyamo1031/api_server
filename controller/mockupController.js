import fs from 'fs'

export let mockupHandler = (req,res)=>{
    res.setHeader('Content-Type','application/json; charset=utf-8')
    //DBを用意して接続する前に、jsonモックアップを使用する
    let json = JSON.parse(fs.readFileSync('json/mockup.json'))
    res.end(JSON.stringify(json));
}

export let mockupItemHandler = (req,res)=>{
    res.setHeader('Content-Type','application/json; charset=utf-8')
    let path = req.params.path
    //DBを用意して接続する前に、jsonモックアップを使用する
    //JSON.parseで展開する
    let json = JSON.parse(fs.readFileSync('json/mockup.json'))
    // 配列は　=> で取り出す
    const item = json.filter(obj => obj.id==path);
    if (item ==""){
        res.end(JSON.stringify({"status":"not object"}))    
    }else{
        res.end(JSON.stringify(item[0]));
    }    
}
