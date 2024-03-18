document.addEventListener("DOMContentLoaded", function () {
    // เลือก div ที่คุณต้องการแสดงรูปภาพ
    var galleryDiv = document.getElementById("imageGallery");

    // ใช้ Fetch API เพื่อดึงข้อมูล URL จาก API
    fetch('http://localhost:3000/all-image-urls')
        .then(response => response.json())
        .then(data => {
            // วน loop เพื่อสร้าง <img> tag สำหรับทุก URL
            for (var i = 0; i < data.imageUrls.length; i++) {
                var imgUrl = data.imageUrls[i];

                // สร้าง <img> tag
                var imgElement = document.createElement("img");
                imgElement.src = imgUrl;

                // เพิ่ม <img> tag ลงใน div
                galleryDiv.appendChild(imgElement);
            }
        })
        .catch(error => console.error('Error fetching image URLs:', error));
});
