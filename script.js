
//select input tag

var text_user_name = document.querySelector(".text-user-name")
var text_user_id = document.querySelector(".text-user-id")
var text_courses_name = document.querySelector(".text-courses-name")
var text_issue_date = document.querySelector(".text-issue-date")

var update_name = document.querySelector(".update-name")
var update_id = document.querySelector(".update-id")
var update_courses = document.querySelector(".update-courses")
var update_date = document.querySelector(".update-date")


function update1(){
    update_name.textContent = text_user_name.value
}

function update2(){
    update_id.textContent = text_user_id.value
}

function update3(){
    update_courses.textContent = text_courses_name.value
}

function update4(){
    update_date.textContent = text_issue_date.value
}

