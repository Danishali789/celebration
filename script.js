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
      const aupdatedImage = document.getElementById('imageData');
      aupdatedImage.src = auploadedImageData;
      aupdatedImage.style.display = 'block';
    }
  });


  // Change product logo
function UploadProLogo(event) {
        const productFile = event.target.files[0];
        const productReader = new FileReader();
  
        productReader.onload = function (eve) {
          const uploadedProductFile = eve.target.result;
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
  
      window.addEventListener('DOMContentLoaded', function (){
      const fileContentpro = localStorage.getItem('uploadedproductFile');
      console.log(fileContentpro)
        if (fileContentpro) {
          const uploadPro1 = document.getElementById('product1');
          const uploadPro2 = document.getElementById('product2');
          const uploadPro3 = document.getElementById('product3');
          const uploadPro4 = document.getElementById('product4');

          const uploadprodeta1 = document.getElementById('productdet1');
          const uploadprodeta2 = document.getElementById('productdet2');
          const uploadprodeta3 = document.getElementById('productdet3');

          uploadPro1.src = fileContentpro;
          uploadPro1.style.display = 'block';
          uploadPro2.src = fileContentpro;
          uploadPro2.style.display = 'block';
          uploadPro3.src = fileContentpro;
          uploadPro3.style.display = 'block';
          uploadPro4.src = fileContentpro;
          uploadPro4.style.display = 'block';
           

          uploadprodeta1.src = fileContentpro;
          uploadprodeta1.style.display = 'block';
          // console.log(fileContentpro)

          uploadprodeta2.src = fileContentpro;
          uploadprodeta2.style.display = 'block';


          uploadprodeta3.src = fileContentpro;
          uploadprodeta3.style.display = 'block';


        }
      });