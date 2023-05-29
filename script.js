// const imageInput = document.getElementById('addImage');
function uploadFile(event) {
    const file = event.target.files[0];
    // const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageData = event.target.result;
      localStorage.setItem('uploadedImage', imageData);
     

      const updatedImage = document.getElementById('imageData');
      updatedImage.src = imageData;
      updatedImage.style.display = 'block';
    };

    reader.readAsDataURL(file);
  }


//   const uploadButton=document.getElementById('upload-btn');

//   uploadButton.addEventListener('click', function() {
//   const file = imageInput.files[0];
//   if (file) {
//     const preader = new FileReader();
//     preader.onload = function(event) {
//       const logoData = event.target.result;
//       localStorage.setItem('storedImage', logoData);
//       console.log('Image stored in local storage.');
//     };
//     reader.readAsDataURL(file);
//   }
// });
function UploadProLogo(event) {
        const productFile = event.target.files[0];
        const productReader = new FileReader();
  
        productReader.onload = function (e) {
          const uploadedProductFile = e.target.result;
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
        if (fileContentpro) {
          const uploadprodeta1 = document.getElementById('productdet1');
          const uploadprodeta2 = document.getElementById('productdet2');
          const uploadprodeta3 = document.getElementById('productdet3');
           

          uploadprodeta1.src = fileContentpro;
          uploadprodeta1.style.display = 'block';


          uploadprodeta2.src = fileContentpro;
          uploadprodeta2.style.display = 'block';


          uploadprodeta3.src = fileContentpro;
          uploadprodeta3.style.display = 'block';


        }
      });