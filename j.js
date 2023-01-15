// Bài Tập 1 
let menu = [];
let n = prompt("Mời bạn nhập số lượng món ăn cần lấy ra:");
n = Number(n);
let i = 1
do {
    let x = prompt (`Mòi bạn nhập món ăn thứ: ${i}`);
    menu.push(x);
    i = i + 1;
}
while (i <= n);
console.log ("Menu hiện tại của bạn là:", menu);
let input;
do {
    input = prompt("Mời bạn nhập C,R,U,D ");
    if (input == 'c'){
        menu.push(prompt("Mời bạn nhập món ăn cần thêm là:"));
        console.log("Món ăn của bạn sau khi thêm là:", menu);
        } 
    else if (input == 'r'){
        console.log("Món ăn của bạn cần thêm là:", menu);
    }
    else if (input == 'u'){
        let vitriUpdate = menu.indexOf(prompt("Món ăn của bạn muốn nhập là:") )
        menu[vitriUpdate] = prompt("Bạn cần cập nhập món ăn mới thay thế cho món cũ: ")
        console.log("Menu món ăn của bạn sau khi cần nhập là:" ,menu);
    }
    else if (input == 'd'){
        let vitriDelete = menu.indexOf(prompt("Người bạn nhập món ăn muốn xoá:"));
        menu.splice(vitriDelete, 1);
        console.log("Menu món ăn của bạn sau khi xóa là:", menu);
    }
    else {
        alert("Nhà hàng đã hết món mong bạn ghé lại sau nhé :V");
    }
}
while (input == 'c' || input == 'r' || input == 'u' || input == 'd');


// Bài Tập 2 (Lấy IPA)
fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => res.json())
            .then(data => {
                 console.log(data);
});
