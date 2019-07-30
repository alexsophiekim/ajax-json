$(document).ready(function(){


  const btn = $('#getPeople');
  btn.click(function(){
    // console.log('button has been clicked');
    $.ajax({
      type: 'GET',
      url: 'data/MOCK_DATA.json',
      dataType: 'json',
      success: function(data){
        console.log(data);
        console.log('success');
        data.map(function(person){
          let card = `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">`;
          card += `<div class="card h-100" style="width: 15rem;">`;
          card += `<img src="${person['avatar']}" class="card-img-top" alt="...">`;
          card += `<div class="card-body">`;
          card += `<h5 class="card-text">${person['first_name']} ${person['last_name']}</h5>`;
          card += `<p class="card-text">${person['email']}</p>`;
          card += `</div>`;
          card += `</div>`;

          $('#peopleBox').append(card);



        });
      },
      error: function(error){
        console.log(error);
        console.log('error');
      }
    })





  });



});
