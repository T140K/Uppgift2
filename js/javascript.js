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

      document.querySelector('.contact-title').innerHTML = data.infoTitle;

      for (i = 0; i < data.infoArr.length; i++) {
         document.querySelector('.question').innerHTML += data.infoArr[i].question += data.infoArr[i].answer + '<br>'
      }
      document.querySelector('.om-mig-title').innerHTML = data.omMigH2;

      document.querySelector('.om-mig-p').innerHTML = data.omMigP;

      document.querySelector('.mina-erfarenhet').innerHTML = data.minaErfH2;

      document.querySelector('#jobb1').innerHTML = data.jobb1.jobb;
      document.querySelector('#datum1').innerHTML = data.jobb1.datum;
      document.querySelector('#jobbd1').innerHTML = data.jobb1.desc;

      document.querySelector('#jobb2').innerHTML = data.jobb2.jobb;
      document.querySelector('#datum2').innerHTML = data.jobb2.datum;
      document.querySelector('#jobbd2').innerHTML = data.jobb2.desc;

      document.querySelector('#skolaH1').innerHTML = data.school.titel;
      document.querySelector('#school-name').innerHTML = data.school.h2;
      document.querySelector('#date').innerHTML = data.school.date;
      document.querySelector('#school-desc').innerHTML = data.school.desc;
   })