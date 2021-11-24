let input = document.querySelector("input");
input.addEventListener("change", (e) => {
    let video = input.files[0];
    let url = URL.createObjectURL(video);
    console.log(url);


    let a = document.createElement("a");
    a.href = url;
    a.download = "myfile.png";
    a.click();
})