

fetch('JSON/cv.JSON')
   .then(response => response.json())
   .then(data => {
      document.querySelector('.title-text').innerHTML = data.pageTitle.cvTitle;
   })