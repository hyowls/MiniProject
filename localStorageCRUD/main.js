let reviewUser = document.getElementById('user')
let reviewPassword = document.getElementById('password')
let reviewContent = document.getElementById('review-content')
let upLoadBtn = document.getElementById('upload-button')
let randomStr = Math.random().toString(36).substring(2, 12)+'_';
function clearInput() {
    reviewContent.value = "";
    reviewPassword.value = "";
    reviewUser.value = "";
}
upLoadBtn.addEventListener('click',()=>{
    if(reviewUser.value === '' || reviewPassword.value === '' || reviewContent.value === ''){
        alert('모든 항목을 입력해주세요')
    } else {
        let randomPW = randomStr + reviewPassword.value
        let review = {
            'id' : randomPW,
            'user' : reviewUser.value,
            'content' : reviewContent.value
        }
        localStorage.setItem(reviewPassword.value, JSON.stringify(review))
        clearInput()
        render()
    }
})
function render() {
    let list = []
    let renderHTML = ''
    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i)
        let getList = JSON.parse(localStorage.getItem(key))
        list.push(getList)
    }
    list.forEach((data) => {
        renderHTML += ` <div class="r-item">
                            <div>
                                <p>${data.user}</p>
                                <p>${data.content}</p>
                            </div>
                            <div class="edit-button">
                                <button>완료</button><button id="editBtn">수정</button><button id="deleteBtn">삭제</button>
                            </div>
                        </div>`
    })
    document.getElementById('reviewList').innerHTML = renderHTML
}
render()

document.getElementById('reviewList').addEventListener('click', (e) => {
    if (e.target.id === 'deleteBtn') {
        let item = e.target.closest('.r-item');
        let pw = prompt('비밀번호를 입력하세요 :')
        if (localStorage.getItem(pw) !== null) {
            localStorage.removeItem(pw);
            item.remove();
            clearInput()
            render();
        } else {
            alert('일치하는 비밀번호가 없습니다.');
        }
    }
});

document.getElementById('reviewList').addEventListener('click', (e) => {
    if (e.target.id === 'editBtn') {
        let pw = prompt('비밀번호 입력 :');
        if(localStorage.getItem(pw) !== null) {
            let review = JSON.parse(localStorage.getItem(pw));
            let newContent = prompt('새로운 내용',review.content)
            review.content = newContent
            localStorage.setItem(pw, JSON.stringify(review))
            render()
        } else {
            alert('일치하는 비밀번호가 없음')
        }
    }
})