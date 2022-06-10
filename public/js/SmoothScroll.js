(()=>{
  console.log('first')
  document.getElementById('nav').affix({
      offset: {
        top: document.getElementById('nav').height()
      }
  });
  })()