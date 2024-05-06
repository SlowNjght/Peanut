// Thay đổi nội dung búc thư ở đây
var letterContent =" Anh xin lỗi vì hôm nay đã quạo và nói những lời làm tổn thương đến em, hãy tha thứ cho a. Và đừng nghi ngờ anh có được không, anh nói yêu em thì sẽ chỉ mãi yêu duy nhất mình em và chắc chắn sẽ không có một ai khác ngoài em, cuộc sống của anh đã đủ đen tối, tồi tệ lắm rồi, em là thứ anh sáng duy nhất, là đức tin duy nhất của a trên cuộc đời này, dù có giận anh đi nữa , mắng a cũng được, a đều chịu đựng được, nhưng mà đừng để những cuộc giận dỗi đó ảnh hưởng đến tình cảm của chúng ta có được không. Anh xin lỗi em nhiều, mãi yêu em <3"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})