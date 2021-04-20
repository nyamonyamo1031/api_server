//exsample

//こんにちはを返す関数
export const sample_func = () => {
    return "こんにちは"
}

//誕生日を算出するutil関数
//データの制御を書かなければいけない
export const getAge = (baseDay,birthday) =>{
   return birthday - baseDay
}
