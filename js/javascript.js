fetch('JSON/cv.JSON')
   .then(response => response.json())
   .then(data => {
      console.log(data);
      document.querySelector('.title-text').innerHTML = data.cvTitle;


      document.querySelector('.kompetens-title').innerHTML = data.kompetensTitle;

      for (i = 0; i < data.kompetens.length; i++) {
         document.querySelector('.sidebar-cv').innerHTML +=
         `
         <p class="sidebar-cv-text">
         
         ${data.kompetens[i]} 
         <p/>
         `
      }
   })