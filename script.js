function uploadFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const uploadimageData = event.target.result;
      localStorage.setItem('uploadedImage', uploadimageData);
     

      const updatedImage = document.getElementById('imageData');
      updatedImage.src = uploadimageData;
      updatedImage.style.display = 'block';
    };

    reader.readAsDataURL(file);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const auploadedImageData = localStorage.getItem('uploadedImage');
    if (auploadedImageData) {
      const aupdatedImaged = document.getElementById('imageData');
      aupdatedImaged.src = auploadedImageData;
      aupdatedImaged.style.display = 'block';
    }
  });


  // Change product logo
function UploadProLogo(event) {
        const productFile = event.target.files[0];
        const productReader = new FileReader();
  
        productReader.onload = function (event) {
          const uploadedProductFile = event.target.result;
          localStorage.setItem('uploadedproductFile', uploadedProductFile);
          
  
          const uploadPro1 = document.getElementById('product1');
          const uploadPro2 = document.getElementById('product2');
          const uploadPro3 = document.getElementById('product3');
          const uploadPro4 = document.getElementById('product4');

          uploadPro1.src = uploadedProductFile;
          uploadPro1.style.display = 'block';
          uploadPro2.src = uploadedProductFile;
          uploadPro2.style.display = 'block';
          uploadPro3.src = uploadedProductFile;
          uploadPro3.style.display = 'block';
          uploadPro4.src = uploadedProductFile;
          uploadPro4.style.display = 'block';

        };
  
        productReader.readAsDataURL(productFile);
      }
  
      document.addEventListener('DOMContentLoaded', function (){
      const fileContentpro = localStorage.getItem('uploadedproductFile');
      // console.log(fileContentpro)
        if (fileContentpro) {
          const uploadProdet1 = document.getElementById('product1');
          const uploadProdet2 = document.getElementById('product2');
          const uploadProdet3 = document.getElementById('product3');
          const uploadProdet4 = document.getElementById('product4');

          uploadProdet1.src = fileContentpro;
          uploadProdet1.style.display = 'block';
          uploadProdet2.src = fileContentpro;
          uploadProdet2.style.display = 'block';
          uploadProdet3.src = fileContentpro;
          uploadProdet3.style.display = 'block';
          uploadProdet4.src = fileContentpro;
          uploadProdet4.style.display = 'block';

        }
      });

      // change product detail logo
      document.addEventListener('DOMContentLoaded', function (){
        const fileContentprodet = localStorage.getItem('uploadedproductFile');
          if (fileContentprodet) {
            const uploadprodet5 = document.getElementById('productdet1');
            const uploadprodet6 = document.getElementById('productdet2');
            const uploadprodet7 = document.getElementById('productdet3');
  
  
             
  
            uploadprodet5.src = fileContentprodet;
            uploadprodet5.style.display = 'block';
  
            uploadprodet6.src = fileContentprodet;
            uploadprodet6.style.display = 'block';
  
  
            uploadprodet7.src = fileContentprodet;
            uploadprodet7.style.display = 'block';
  
  
          }
        });