function SendMail(){
    let params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_k8cypzh","template_w4b6pmi",params).then(function (res) {
        alert("Thanyou for your mail, we will get back to you shortly!" + res.status);
        
    })
}


// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (this.scrollY > 500) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })